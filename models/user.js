import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  position: { type: String, required: true, default: "employee" },
  location: { type: String, required: false },
  bio: { type: String, required: false },
  avatar: { type: String, required: false },
  password: { type: String, required: true, minlength: 8 },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
