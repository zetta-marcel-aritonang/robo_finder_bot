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
const job = new CronJob('*/10 * * * *', async () => {
  console.log('Cron job started');
  const chatIds = await ChatModel.distinct('id', { id: { $nin: [null, ''] } });
  // search ref 0
  const catalogs1 = await getAllCatalogs(0);
  for (const id of chatIds) {
    await sendSearchRef1(id, catalogs1);
  }
  console.log('Cron job ends');
}, null, false, 'Asia/Makassar');
job.start();