import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  fullname: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
  book: {
    bookTitle: { type: String },
    bookAuthor: { type: String },
    thumbnail: { type: String },
  },
});

export default mongoose.model("Users", UserSchema);
