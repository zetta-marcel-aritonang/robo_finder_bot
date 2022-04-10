const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
// const fs = require('fs');

const { generateFilterFromRef } = require("../../utils/url");
const CatalogModel = require('./catalog.model');

const getAllCatalogs = async (searchRef = 1) => {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  const url = generateFilterFromRef(searchRef);
  await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36");
  
  await page.goto(url);
  let content = await page.content();
  try {
    await page.click('[id="onetrust-accept-btn-handler"]')
  } 
  catch (e) {
    console.log('e', e);
  }
  const $ = cheerio.load(content);
  let feeds = $('.feed-grid'); // takes the div of class feed-grid
  let catalogs = [];
  // get all div with class feed-grid__item
  catalogs = await scrapeCatalog(feeds, page, $);

  await browser.close();

  // filter already known catalogs
  const existingCatalogs = await CatalogModel.find({
    link: { $in: catalogs.map(catalog => catalog.link) }
  });
  if (existingCatalogs && existingCatalogs.length) {
    catalogs = catalogs.filter(catalog => {
      const existingLinks = existingCatalogs.map(({ link }) => link);
      return !existingLinks.includes(catalog.link);
    });
  }

  if (catalogs && catalogs.length) {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); 
    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36");
    for (const [i, catalog] of catalogs.entries()) {
      // get detail info
      // await page.waitForNavigation({ waitUntil: 'networkidle2' });
      await page.goto(catalog.link);
      
      let detailContent = await page.content();
      const $detail = cheerio.load(detailContent);
      // fs.writeFileSync('./output/detail.html', detailContent);
      const detailInfo = $detail('.details-list.details-list--main-info');
  
      // get condition of product
      catalogs[i].condition = detailInfo.find('div[itemprop=itemCondition]').text().replace(/(\r\n|\n|\r)/gm, '').trim();
      // get product country
      detailInfo.find('.details-list__item-value').each((index, el) => {
        if (index === 4) catalogs[i].country = $detail(el).text().replace(/(\r\n|\n|\r)/gm, '').trim();
      });
      
      // get product description
      const descInfo = $detail('span[class="Text_text__QBn4- Text_body__MkQC- Text_left__3s3CR Text_format__3gQYg"]');
      catalogs[i].description = descInfo.children().text();
      
      // get vendor rating
      const vendorInfo = $detail('.Rating_rating__rOUZx.Rating_small__EC52L');
      catalogs[i].rating = vendorInfo.attr('aria-label');
      console.log(catalog.link);
    }
    await browser.close();
  
    await CatalogModel.insertMany(catalogs);
  }

  return catalogs;
}

const scrapeCatalog = (feeds, page, $) => {
  return new Promise((resolve) => {
    let catalogs = [];
    feeds.find('.feed-grid__item').each(async function() {
      let catalog = {};
  
      // get price of product
      catalog.price = $(this).find('h3').text();
  
      // get size of product
      catalog.size = $(this).find('.ItemBox_subtitle__1SPGe').find('h4').text();
      
      // get brand of product
      catalog.brand = $(this).find('.ItemBox_details__1c8wh').find('h4').text();

      // get vendor of product
      catalog.vendor_name = $(this).find('.ItemBox_name__1tHO2').find('h4').text();
  
      $(this).find('.ItemBox_image__3BPYe').each(async function() {
        // get image of product
        catalog.img = $(this).find('img').attr('src');
        catalog.link = $(this).find('a').attr('href');
      });
  
      catalogs.push(catalog);
    });
    resolve(catalogs);
  });
}

module.exports = {
  getAllCatalogs
}