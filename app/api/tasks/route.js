import { NextResponse } from "next/server";
import Task from "@/models/task";
import connectDB from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find().lean();

    // Convert _id to string for proper JSON serialization
    const serializedTasks = tasks.map((task) => ({
      ...task,
      _id: task._id.toString(),
      projectId: task.projectId ? task.projectId.toString() : null,
    }));

    return NextResponse.json({
      message: "Tasks fetched successfully",
      status: 200,
      tasks: serializedTasks,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch tasks from database",
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const {
      name,
      description,
      category,
      time,
      assigned,
      priority,
      status,
      projectId,
      assignedTo,
    } = await req.json();

    await connectDB();

    const newTask = await Task.create({
      name,
      description,
      category,
      time,
      assigned,
      priority,
      status,
      projectId: projectId || null,
      assignedTo: assignedTo || [],
    });

    // Convert to plain object for JSON serialization
    const taskData = {
      _id: newTask._id.toString(),
      name: newTask.name,
      description: newTask.description,
      category: newTask.category,
      time: newTask.time,
      assigned: newTask.assigned,
      priority: newTask.priority,
      status: newTask.status,
      projectId: newTask.projectId ? newTask.projectId.toString() : null,
      assignedTo: newTask.assignedTo,
    };

    return NextResponse.json({
      message: "Task created successfully",
      status: 201,
      task: taskData,
    });
  } catch (error) {
    console.error("Task creation error:", error);
    return NextResponse.json({
      message: "Failed to create task",
      status: 500,
    });
  }
}
