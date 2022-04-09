const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const { generateFilterFromRef } = require("../../utils/url");

const getAllCatalogs = async (searchRef = 1) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
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
  console.log('tes', catalogs);

  await browser.close();
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
  
      // get image of product
      $(this).find('.ItemBox_image__3BPYe').each(async function() {
        catalog.img = $(this).find('img').attr('src');
        catalog.link = $(this).find('a').attr('href');
  
        // get detail info
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // await page.goto(catalog.link);
        // let detailContent = await page.content();
        // const $detail = cheerio.load(detailContent);
        // const detailInfo = $detail('.details-list details-list--main-info');
        // catalog.condition = detailInfo.find('div[itemprop="itemCondition"]').text();
        // await page.goBack();
      })
  
      // get more info inside the detail page
  
      catalogs.push(catalog);
    });
    resolve(catalogs);
  });
}

module.exports = {
  getAllCatalogs
}