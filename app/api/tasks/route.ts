import { NextRequest, NextResponse } from "next/server";

// TODO: Replace with actual database queries
const mockTasks = [
  {
    id: "1",
    title: "تطوير واجهة المستخدم",
    description: "تصميم وتطوير واجهة المستخدم الرئيسية",
    status: "in-progress",
    project: "مشروع تطوير النظام",
    dueDate: "2024-12-31",
  },
  {
    id: "2",
    title: "اختبار الوظائف",
    description: "اختبار جميع وظائف التطبيق",
    status: "pending",
    project: "مشروع تحسين الأداء",
    dueDate: "2025-01-15",
  },
  {
    id: "3",
    title: "إصلاح الأخطاء",
    description: "إصلاح الأخطاء المكتشفة في النظام",
    status: "completed",
    project: "مشروع تطوير النظام",
    dueDate: "2024-12-20",
  },
];

export async function GET(request: NextRequest) {
  try {
    // TODO: Fetch from database
    return NextResponse.json(
      {
        success: true,
        tasks: mockTasks,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ في جلب المهام" },
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
        message: "تم إنشاء المهمة بنجاح",
        task: body,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ في إنشاء المهمة" },
      { status: 500 }
    );
  }
}

