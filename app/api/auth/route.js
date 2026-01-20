import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { email, password } = body;

    // ✅ Validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required", success: false },
        { status: 422 },
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false, field: "email" },
        { status: 404 },
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        {
          message: "Your password is incorrect",
          success: false,
          field: "password",
        },
        { status: 401 },
      );
    }

    // ✅ إنشاء Response + Cookies
    const response = NextResponse.json(
      { message: "User logged in successfully", success: true },
      { status: 200 },
    );

    // Login cookie
    response.cookies.set("login", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 أيام
    });

    // Email cookie
    response.cookies.set("email", user.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 أيام
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { message: "Server error during login", success: false },
      { status: 500 },
    );
  }
}
