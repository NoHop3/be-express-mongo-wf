import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, dropDups: true },
  password: String,
  email: String,
  firstName: String,
  lastName: String,
});

export default mongoose.model("User", userSchema, "users");
