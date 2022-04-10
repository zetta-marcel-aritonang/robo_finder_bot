const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema(
  {
    price: { type: String, default: '' },
    size: { type: String, default: '' },
    brand: { type: String, default: '' },
    img: { type: String, default: '' },
    link: { type: String, default: '' },
    vendor_name: { type: String, default: '' },
    condition: { type: String, default: '' },
    country: { type: String, default: '' },
    rating: { type: String, default: '' },
    description: { type: String, default: '' },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('catalog', catalogSchema);