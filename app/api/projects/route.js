import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/models/project";

export async function POST(request) {
  try {
    await connectDB();

    const {
      name,
      owner,
      priority,
      startDate,
      endDate,
      budget,
      teamMembers,
      progress,
      description,
      status,
      type,
    } = await request.json();

    const projectExist = await Project.findOne({ name });

    if (projectExist) {
      return NextResponse.json(
        { message: "project already exist", success: false, field: "name" },
        { status: 409 },
      );
    }

    if (
      !name ||
      !owner ||
      !priority ||
      !startDate ||
      !endDate ||
      !budget ||
      !progress ||
      !description ||
      !status ||
      !type
    ) {
      return NextResponse.json(
        { message: "all fields are required" },
        { status: 422 },
      );
    }

    const project = await Project.create({
      name,
      owner,
      priority,
      startDate,
      endDate,
      budget,
      progress,
      teamMembers,
      description,
      status,
      type,
    });

    return NextResponse.json(
      { message: "project created successfully" },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      {
        message:
          "we cant create project right now server error from projects/route.ts",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().lean();

    // Convert _id to string for proper JSON serialization
    const serializedProjects = projects.map((project) => ({
      ...project,
      _id: project._id.toString(),
    }));

    return NextResponse.json({ projects: serializedProjects }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        message:
          "we cant get projects right now server error from projects/route.ts",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();

    const { name } = await request.json();

    const project = await Project.findOneAndDelete({ name });

    if (!project) {
      return NextResponse.json(
        { message: "project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "project deleted successfully" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      {
        message:
          "we cant delete project right now server error from projects/route.ts",
      },
      { status: 500 },
    );
  }
}
