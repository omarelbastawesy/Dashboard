import { NextRequest, NextResponse } from "next/server";

// TODO: Replace with actual database queries
const mockProjects = [
  {
    id: "1",
    name: "مشروع تطوير النظام",
    description: "تطوير نظام إدارة شامل للمشاريع والمهام",
    status: "in-progress",
    progress: 75,
  },
  {
    id: "2",
    name: "مشروع تحسين الأداء",
    description: "تحسين أداء التطبيق والاستجابة",
    status: "in-progress",
    progress: 50,
  },
  {
    id: "3",
    name: "مشروع التصميم الجديد",
    description: "إعادة تصميم واجهة المستخدم",
    status: "pending",
    progress: 0,
  },
];

export async function GET(request: NextRequest) {
  try {
    // TODO: Fetch from database
    return NextResponse.json(
      {
        success: true,
        projects: mockProjects,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ في جلب المشاريع" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Save to database
    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء المشروع بنجاح",
        project: body,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ في إنشاء المشروع" },
      { status: 500 }
    );
  }
}

