import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false, field: "email" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        {
          message: "your password is incorrect",
          success: false,
          field: "password",
        },
        { status: 401 }
      );
    }

    const response = NextResponse.json(
      { message: "User logged in successfully", success: true },
      { status: 200 }
    );
    response.cookies.set("login", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    response.cookies.set("email", user.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 8,
    });

    return response;
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
