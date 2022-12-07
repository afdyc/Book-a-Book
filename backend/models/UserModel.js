import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  fullname: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("Users", UserSchema);
