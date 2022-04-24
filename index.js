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
// const job1 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 1,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(1);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job2 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 2,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(2);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job3 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 3,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(3);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job4 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 4,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(4);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job5 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 5,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(5);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job6 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 6,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(6);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job7 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 7,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(7);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job8 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 8,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(8);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job9 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 9,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(9);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job10 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 10,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(10);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// const job11 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds = await ChatModel.find({ 
//     id: { $nin: [null, ''] },
//     search_ref: 11,
//   });
//   // search ref 0
//   const catalogs = await getAllCatalogs(11);

//   for (const { id } of chatIds) {
//     await sendSearchRef1(id, catalogs);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');
// job1.start();
// job2.start();
// job3.start();
// job4.start();
// job5.start();
// job6.start();
// job7.start();
// job8.start();
// job9.start();
// job10.start();
// job11.start();

// new cronjob handler
// const searchRef1To2 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds1 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 1,
//   });
//   const chatIds2 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 2,
//   });
//   // search ref 1-2
//   const catalogs1 = await getAllCatalogs(1);
//   const catalogs2 = await getAllCatalogs(2);
//   for (const id of chatIds1) {
//     await sendSearchRef1(id, catalogs1);
//   }
//   for (const id of chatIds2) {
//     await sendSearchRef1(id, catalogs2);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');

// const searchRef3To5 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds3 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 3,
//   });
//   const chatIds4 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 4,
//   });
//   const chatIds5 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 5,
//   });
//   // search ref 3-5
//   const catalogs3 = await getAllCatalogs(3);
//   const catalogs4 = await getAllCatalogs(4);
//   const catalogs5 = await getAllCatalogs(5);
//   for (const id of chatIds3) {
//     await sendSearchRef1(id, catalogs3);
//   }
//   for (const id of chatIds4) {
//     await sendSearchRef1(id, catalogs4);
//   }
//   for (const id of chatIds5) {
//     await sendSearchRef1(id, catalogs5);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');

// const searchRef6To8 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds6 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 6,
//   });
//   const chatIds7 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 7,
//   });
//   const chatIds8 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 8,
//   });
//   // search ref 3-5
//   const catalogs6 = await getAllCatalogs(6);
//   const catalogs7 = await getAllCatalogs(7);
//   const catalogs8 = await getAllCatalogs(8);
//   for (const id of chatIds6) {
//     await sendSearchRef1(id, catalogs6);
//   }
//   for (const id of chatIds7) {
//     await sendSearchRef1(id, catalogs7);
//   }
//   for (const id of chatIds8) {
//     await sendSearchRef1(id, catalogs8);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');

// const searchRef9To11 = new CronJob('*/10 * * * *', async () => {
//   console.log('Cron job started');
//   const chatIds9 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 9,
//   });
//   const chatIds10 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 10,
//   });
//   const chatIds11 = await ChatModel.distinct('id', { 
//     id: { $nin: [null, ''] },
//     search_ref: 11,
//   });
//   // search ref 3-5
//   const catalogs9 = await getAllCatalogs(9);
//   const catalogs10 = await getAllCatalogs(10);
//   const catalogs11 = await getAllCatalogs(11);
//   for (const id of chatIds9) {
//     await sendSearchRef1(id, catalogs9);
//   }
//   for (const id of chatIds10) {
//     await sendSearchRef1(id, catalogs10);
//   }
//   for (const id of chatIds11) {
//     await sendSearchRef1(id, catalogs11);
//   }
//   console.log('Cron job ends');
// }, null, false, 'Asia/Makassar');

// searchRef1To2.start();
// searchRef3To5.start();
// searchRef6To8.start();
// searchRef9To11.start();

// newer cronjob handler
let isScrapping = false;
const job = new CronJob('*/10 * * * *', async () => {
  if(isScrapping) return;

  console.log('Cron job started');
  isScrapping = true;
  const chatIds1 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 1,
  });
  const chatIds2 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 2,
  });
  const chatIds3 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 3,
  });
  const chatIds4 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 4,
  });
  const chatIds5 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 5,
  });
  const chatIds6 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 6,
  });
  const chatIds7 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 7,
  });
  const chatIds8 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 8,
  });
  const chatIds9 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 9,
  });
  const chatIds10 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 10,
  });
  const chatIds11 = await ChatModel.findOne({ 
    id: { $nin: [null, ''] },
    search_ref: 11,
  });
  // search ref 3-5
  await getAllCatalogs(1, chatIds1.id);
  await getAllCatalogs(2, chatIds2.id);
  await getAllCatalogs(3, chatIds3.id);
  await getAllCatalogs(4, chatIds4.id);
  await getAllCatalogs(5, chatIds5.id);
  await getAllCatalogs(6, chatIds6.id);
  await getAllCatalogs(7, chatIds7.id);
  await getAllCatalogs(8, chatIds8.id);
  await getAllCatalogs(9, chatIds9.id);
  await getAllCatalogs(10, chatIds10.id);
  await getAllCatalogs(11, chatIds11.id);
  isScrapping = false;
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
job.start();