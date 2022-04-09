require('dotenv').config();
const { CronJob } = require('cron');
const { sendSearchRef1 } = require('./bot');

// setup cron
const job = new CronJob('10 * * * *', async () => {
  const chatIds = process.env.CHAT_IDS;
  for (const id of chatIds) {
    await sendSearchRef1(id);
  }
}, null, false, 'Asia/Makassar');
job.start();