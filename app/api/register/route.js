import connectDB from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, phone, jobTitle, password } = body;

    // ✅ Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "name, email and password are required" },
        { status: 422 },
      );
    }

    const emailLower = email.toLowerCase();

    const existUser = await User.findOne({ email: emailLower });
    if (existUser) {
      return NextResponse.json(
        { message: "User already exist", field: "email" },
        { status: 409 },
      );
    }

    const hashpassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email: emailLower,
      phone,
      jobTitle,
      password: hashpassword,
    });

    return NextResponse.json(
      { message: "User registered successfully", success: true },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "server error while registering user" },
      { status: 500 },
    );
  }
}
