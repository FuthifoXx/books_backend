const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  // name: { type: String, required: true },
  // description: { type: String, unique: true, required: true },
  // category: { type: String, minlength: 2, maxlength: 100, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
