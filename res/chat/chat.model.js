const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    id: { type: String, default: '' },
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    title: { type: String, default: '' },
    type: { type: String, default: '' },
    search_ref: { type: Number, default: 1 },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('chat', chatSchema);