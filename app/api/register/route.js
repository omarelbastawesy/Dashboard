import connectDB from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, phone, jobTitle, password } = await request.json();

    await connectDB();

    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { message: "User already exist", success: false, field: "email" },
        { status: 400 }
      );
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await new User({
      name,
      email,
      phone,
      jobTitle,
      password: hashpassword,
    });

    await user.save();

    const response = NextResponse.json(
      { message: "User registered successfully", success: true },
      { status: 200 }
    );

    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "bad request with server", success: false },
      { status: 500 }
    );
  }
}
