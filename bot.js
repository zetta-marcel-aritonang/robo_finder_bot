const TelegramBot = require('node-telegram-bot-api');
// const { getAllCatalogs } = require('./res/catalog/catalog.utilities');
const ChatModel = require('./res/chat/chat.model');
const { delay } = require('./utils/common');

const sendSearchRef1 = async (id, catalogs) => {
  if (!catalogs) {
    return;
  }
  
  for (let { price, size, brand, img, link, vendor_name, condition, country, rating, description } of catalogs) {
    let stars = rating?.split(' ')[2];
    let firstHalf = `${price}\n${size}\n${brand}\n${condition}\n`;
    let secondHalf = `\n${vendor_name}\n${stars}⭐\n${country}\n${description}`;
    let hyperLink = `<a href="${link}">&lt;click&gt;</a>`;
    let caption = `${parseHTML(firstHalf)}${hyperLink}${parseHTML(secondHalf)}`;
    caption = caption.length > 1000 ? `${caption.substring(0, 1000)}...` : caption;
    try {
      bot.sendPhoto(id, img, { 
        caption,
        parse_mode: 'HTML',
      });
    } 
    catch(e) {
      console.log('this cause error', caption);
    }
    await delay(1);
  }
}

const sendOnce = async (id, { price, size, brand, img, link, vendor_name, condition, country, rating, description }) => {
  let stars = typeof rating === 'string' ? rating?.split(' ')[2] : rating;
  let firstHalf = `${price}\n${size}\n${brand}\n${condition}\n`;
  let secondHalf = `\n${vendor_name}\n${stars + '⭐' || 'Pas encore d\'évaluation'}\n${country}\n${description}`;
  let hyperLink = `<a href="${link}">&lt;click&gt;</a>`;
  let caption = `${parseHTML(firstHalf)}${hyperLink}${parseHTML(secondHalf)}`;
  caption = caption.length > 1000 ? `${caption.substring(0, 1000)}...` : caption;
  try {
    bot.sendPhoto(id, img, { 
      caption,
      parse_mode: 'HTML',
    });
  } 
  catch(e) {
    console.log('this cause error', caption);
  }
}

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
bot.on('message', msg => {
  const { id } = msg.chat;
  console.log('id', id);
});
bot.onText(/\/subscribe/, async (msg) => {
  const { id } = msg.chat;
  const [, ref] = msg.text.split(' ');
  console.log(id, ref);
  
  const chat = await ChatModel.findOne({ id }).lean();
  if (!chat) {
    const newChat = await ChatModel.create({ ...msg.chat, search_ref: +ref });
    console.log(`[${newChat._id}] Registered ${newChat.first_name} ${newChat.last_name} with id: ${id} searching ref: ${ref}`);
    bot.sendMessage(id, `${newChat?.title || newChat?.first_name} subscribed for search ref ${ref}`);
  } else {
    console.log(`This chat already exist with database _id: ${chat._id}`);
    bot.sendMessage(id, `This chat already subscribed`);
  }
})
// bot.onText(/\/getNow/, async (msg) => {
//   const { id } = msg.chat;
//   const catalogs = await getAllCatalogs(0);
//   await sendSearchRef1(id, catalogs);
//   console.log(`Succesfully sent to ${id}`);
// })
bot.on('polling_error', console.log);
console.log('Bot server started');

const convertStringToMarkdownV2 = (content = '') => {
  return content
    .replace('<', '\\<')
    .replace('>', '\\>')
    .replace('_', '\\_')
    .replace('*', '\\*')
    .replace('~', '\\~')
    .replace('`', '\\`')
    .replace('#', '\\#')
    .replace('+', '\\+')
    .replace('-', '\\-')
    .replace('=', '\\=')
    .replace('=', '\\=')
    .replace('|', '\\|')
    .replace('{', '\\{')
    .replace('}', '\\}')
    .replace('.', '\\.')
    .replace('(', '\\(')
    .replace(')', '\\)')
    .replace('!', '\\!');
}

const parseHTML = (content = '') => {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

module.exports = {
  sendSearchRef1,
  sendOnce,
  bot
}