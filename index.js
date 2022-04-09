require('dotenv').config();
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const TelegramBot = require('node-telegram-bot-api');
// const fs = require('fs');

const { generateFilterFromRef } = require('./utils/url');
const { CronJob } = require('cron');

// bot setup
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
bot.on('message', msg => {
  const { id } = msg.chat;
  console.log('id', id);
});
bot.on('polling_error', console.log);
console.log('Bot server started');

// scraping functionaliy
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
  feeds.find('.feed-grid__item').each(function() {
    let catalog = {};
    // get image of product
    $(this).find('.ItemBox_image__3BPYe').each(function() {
      catalog.img = $(this).find('img').attr('src');
      catalog.link = $(this).find('a').attr('href');
    })

    // get price of product
    catalog.price = $(this).find('h3').text();

    // get size of product
    catalog.size = $(this).find('.ItemBox_subtitle__1SPGe').find('h4').text();
    
    // get brand of product
    catalog.brand = $(this).find('.ItemBox_details__1c8wh').find('h4').text();
    catalogs.push(catalog);
  });
  console.log('imgs', catalogs);

  await browser.close();
}

// setup cron
const job = new CronJob('10 * * * *', async () => {
  getAllCatalogs(1);
}, null, false, 'Asia/Makassar');
job.start();