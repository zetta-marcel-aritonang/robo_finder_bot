require('dotenv').config();
const { CronJob } = require('cron');
const mongoose = require('mongoose');

const { sendSearchRef1 } = require('./bot');
const { getAllCatalogs } = require('./res/catalog/catalog.utilities');
const ChatModel = require('./res/chat/chat.model');

// setup mongodb and mongoose
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
  keepAlive: 1,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to mongodb'));
db.on('error', console.log);

// setup cron
process.setMaxListeners(0);
const job1 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 1,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(1);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job2 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 2,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(2);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job3 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 3,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(3);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job4 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 4,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(4);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job5 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 5,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(5);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job6 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 6,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(6);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job7 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 7,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(7);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job8 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 8,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(8);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job9 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 9,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(9);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job10 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 10,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(10);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
const job11 = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.find({ 
    id: { $nin: [null, ''] },
    search_ref: 11,
  });
  // search ref 0
  const catalogs = await getAllCatalogs(11);

  for (const { id } of chatIds) {
    await sendSearchRef1(id, catalogs);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
job1.start();
job2.start();
job3.start();
job4.start();
job5.start();
job6.start();
job7.start();
job8.start();
job9.start();
job10.start();
job11.start();