const TelegramBot = require('node-telegram-bot-api');
const { getAllCatalogs } = require('./res/catalog/catalog.utilities');

const sendSearchRef1 = async (id) => {
  const catalogs = await getAllCatalogs(1);
  
  for (const { price, size, brand, img, link } of catalogs) {
    bot.sendPhoto(id, img, { 
      caption: `${price}\n${size}\n${brand}\n${link}` 
    });
  }
}

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
bot.on('message', msg => {
  const { id } = msg.chat;
  console.log('id', id);
});
bot.onText(/\/getNow/, async (msg) => {
  const { id } = msg.chat;
  await sendSearchRef1(id);
})
bot.on('polling_error', console.log);
console.log('Bot server started');

module.exports = {
  sendSearchRef1,
  bot
}