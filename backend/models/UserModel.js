const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Users", UserSchema);
