"use client";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spen from "./components/Spen/Spen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔄 شغّل الـ spinner عند أي تغيير مسار
  useEffect(() => {
    setLoading(true);

    const login = localStorage.getItem("login");

    const timer = setTimeout(() => {
      // مسجّل دخول → لا يدخل /login
      if (login && pathname === "/login") {
        setIsLoggedIn(true);
        router.replace("/dashboard");
        return;
      }

      // غير مسجّل → لا يدخل صفحات محمية
      if (!login && pathname !== "/" && pathname !== "/login") {
        setIsLoggedIn(false);
        router.replace("/login");
        return;
      }

      setIsLoggedIn(!!login);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, router]);

  // ⏳ Spinner
  if (loading) {
    return (
      <html lang="en">
        <body>
          <div className="flex h-screen items-center justify-center">
            <Spen alert />
          </div>
        </body>
      </html>
    );
  }

  const hideNavbar = pathname === "/" || pathname === "/login";

  return (
    <html lang="en">
      <body className="px-2">
        {!hideNavbar && isLoggedIn && <Navbar />}
        <main className={!hideNavbar && isLoggedIn ? "pl-20" : ""}>
          {children}
        </main>
      </body>
    </html>
  );
}
