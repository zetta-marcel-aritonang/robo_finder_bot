const puppeteer = require('puppeteer');

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const content = await page.goto('https://www.vinted.fr/vetements?brand_id[]=88&catalog[]=5&price_to=50&currency=EUR&status[]=3&status[]=2&size_id[]=209&size_id[]=208&order=newest_first');
  
  // await page.screenshot({ path: 'example.png' });

  await browser.close();
}

start();