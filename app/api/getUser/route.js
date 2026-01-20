import User from "@/models/user";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = cookies(); // ✅ بدون await
    const emailCookie = cookieStore.get("email");

    if (!emailCookie) {
      return NextResponse.json(null, { status: 401 });
    }

    const user = await User.findOne({ email: emailCookie.value });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, jobTitle, position, location, bio, avatar } =
      body;

    const cookieStore = cookies();
    const emailCookie = cookieStore.get("email");

    if (!emailCookie || emailCookie.value !== email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.name = name;
    user.phone = phone;
    user.jobTitle = jobTitle;
    user.position = position;
    user.location = location;
    user.bio = bio;
    user.avatar = avatar;

    await user.save();

    // ✅ لو محتاج تحدث الكوكي
    const res = NextResponse.json(user);
    res.cookies.set("email", email, {
      httpOnly: true,
      path: "/",
    });

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
