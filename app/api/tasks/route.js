import { NextResponse } from "next/server";
import Task from "@/models/task";
import connectDB from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json({
      message: "Tasks fetched successfully",
      status: 200,
      tasks,
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

    return NextResponse.json({
      message: "Task created successfully",
      status: 201,
      task: newTask,
    });
  } catch (error) {
    console.error("Task creation error:", error);
    return NextResponse.json({
      message: "Failed to create task",
      status: 500,
    });
  }
}
