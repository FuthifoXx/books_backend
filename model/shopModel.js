const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  productName: { type: String },
  price: { type: Number },
  availability: { type: Boolean },
  category: { type: String },
});

module.exports = mongoose.model('Shop', shopSchema);
