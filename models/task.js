import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    time: { type: String, required: false },
    assigned: { type: String, required: false }, // Keeping as optional summary or legacy
    priority: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High", "Critical"],
    },
    status: {
      type: String,
      required: true,
      enum: ["To Do", "In Progress", "Completed", "Blocked"],
      default: "To Do",
    },
    projectId: {
      type: String, // Saving Project Name as requested
      required: false,
    },
    assignedTo: [
      {
        type: String, // Saving User Names as requested
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
