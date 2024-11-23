const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  category: { type: String },
});

module.exports = mongoose.model('Book', userSchema);
