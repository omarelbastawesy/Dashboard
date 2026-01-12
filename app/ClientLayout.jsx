"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Spen from "./components/Spen/Spen";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // 🔄 شغّل الـ spinner عند أي تغيير مسار
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const hideNavbar = pathname === "/" || pathname === "/login";

  return (
    <>
      {/* Absolute Layered Loader */}
      <Spen alert={loading} />

      <div
        className={`transition-all duration-700 ${
          loading ? "blur-sm opacity-50" : "blur-0 opacity-100"
        }`}
      >
        {!hideNavbar && <Navbar />}
        <main
          className={
            !hideNavbar
              ? "sm:pl-24 pl-12 transition-all duration-300"
              : "transition-all duration-300"
          }
        >
          {children}
        </main>
      </div>
    </>
  );
}
