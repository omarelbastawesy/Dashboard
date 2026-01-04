import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // TODO: Replace with actual authentication logic
    // This is a placeholder that should connect to your backend/database
    if (email && password) {
      // Mock authentication - replace with real logic
      // For demo purposes, check if email contains "manager" or "employee"
      const role = email.includes("manager") ? "manager" : "employee";

      return NextResponse.json(
        {
          success: true,
          role,
          user: {
            email,
            name: email.split("@")[0],
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: "البريد الإلكتروني أو كلمة المرور غير صحيحة" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ في الخادم" },
      { status: 500 }
    );
  }
}

