import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/user";

export async function GET() {
  try {
    await connectDB();
    // Fetch users with position 'employee', selecting only name and _id
    const employees = await User.find({ position: "employee" })
      .select("name _id jobTitle avatar")
      .lean();

    // Convert _id to string for proper JSON serialization
    const serializedEmployees = employees.map((emp) => ({
      ...emp,
      _id: emp._id.toString(),
    }));

    return NextResponse.json(
      { employees: serializedEmployees },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error fetching employees:", err);
    return NextResponse.json(
      { message: "Server error fetching employees" },
      { status: 500 },
    );
  }
}
