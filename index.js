require('dotenv').config();
const { CronJob } = require('cron');
const mongoose = require('mongoose');

const { sendSearchRef1 } = require('./bot');

// setup mongodb and mongoose
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
  keepAlive: 1,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to mongodb'));
db.on('error', console.log);

// setup cron
const job = new CronJob('*/10 * * * *', async () => {
  const chatIds = process.env.CHAT_IDS.split(',');
  for (const id of chatIds) {
    await sendSearchRef1(id);
  }
}, null, false, 'Asia/Makassar');
job.start();