import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 6, unique: true }, // like Account Name
  description: { type: String, required: true, minLength: 10 }, // like Account Description
  status: { type: String, required: true }, // Active
  startDate: { type: Date, required: true }, // like Account Start Date
  endDate: { type: Date, required: true }, // like Account End Date
  owner: { type: String, required: true }, // like Account Owner
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  budget: { type: Number, required: true },
  type: { type: String, required: true },
  priority: { type: String, required: true },
  progress: { type: Number, required: true, default: 0 },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
