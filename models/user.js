import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  position: { type: String, required: true, default: "employee" },
  password: { type: String, required: true, minlength: 8 },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
