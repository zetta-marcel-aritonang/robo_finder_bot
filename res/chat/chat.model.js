const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    id: { type: String, default: '' },
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    type: { type: String, default: '' },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('chat', chatSchema);