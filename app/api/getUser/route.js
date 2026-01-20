import User from "@/models/user";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const emailCookie = cookieStore.get("email");

    if (!emailCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: emailCookie.value }).lean();
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Convert MongoDB _id to string for proper JSON serialization
    const userData = {
      ...user,
      _id: user._id.toString(),
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("GetUser error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, jobTitle, position, location, bio, avatar } =
      body;

    const cookieStore = await cookies();
    const emailCookie = cookieStore.get("email");

    if (!emailCookie || emailCookie.value !== email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.jobTitle = jobTitle || user.jobTitle;
    user.position = position || user.position;
    user.location = location || user.location;
    user.bio = bio || user.bio;
    user.avatar = avatar || user.avatar;

    await user.save();

    // Convert to plain object for JSON serialization
    const userData = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      phone: user.phone,
      jobTitle: user.jobTitle,
      position: user.position,
      location: user.location,
      bio: user.bio,
      avatar: user.avatar,
    };

    const res = NextResponse.json(userData, { status: 200 });
    res.cookies.set("email", user.email, {
      httpOnly: true,
      path: "/",
    });

    return res;
  } catch (error) {
    console.error("UpdateUser error:", error);
    return NextResponse.json(
      { error: "Server error during update" },
      { status: 500 },
    );
  }
}
