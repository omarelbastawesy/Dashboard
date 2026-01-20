import User from "@/models/user";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();

  const cookieStore = await cookies();

  const email = cookieStore.get("email")?.value;

  const user = await User.findOne({ email });
  console.log(user);

  return Response.json(user);
}

export async function PUT(req) {
  try {
    const { name, email, phone, jobTitle, position, location, bio, avatar } =
      await req.json();

    await connectDB();

    const cookieStore = await cookies();

    const cookiesEmail = cookieStore.get("email").value;

    const user = await User.findOne({ email });

    if (!user || cookiesEmail !== email) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    cookieStore.set("email", email);

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.jobTitle = jobTitle;
    user.position = position;
    user.location = location;
    user.bio = bio;
    user.avatar = avatar;

    await user.save();

    return Response.json(user);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
