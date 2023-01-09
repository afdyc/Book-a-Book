const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: Array, required: true },
  thumbnail: { type: String, required: true },
});

module.exports = mongoose.model("Books", BookSchema);
