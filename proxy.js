import { NextResponse } from "next/server";
import connectDB from "./lib/db";
import user from "./models/user";

export async function proxy(request) {
  await connectDB();
  const isLoggedIn = request.cookies.get("login")?.value;
  const email = request.cookies.get("email")?.value;
  const isUser = await user.findOne({ email: email });
  const { pathname } = request.nextUrl;

  const publicPaths = ["/", "/login"];

  if ((!isLoggedIn || !isUser) && !publicPaths.includes(pathname)) {
    const respone = NextResponse.json(
      { message: "User not found" },
      { status: 401 }
    );
    respone.cookies.delete("login");
    respone.cookies.delete("email");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && isUser && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
