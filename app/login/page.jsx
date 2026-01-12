"use client";

import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function Register() {
  const [screen, setScreen] = useState("signup");

  const toggleView = (view) => {
    setScreen(view);
  };

  return (
    <div className="login min-h-screen relative flex items-center justify-center bg-(--bg-main) p-4 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,209,0.05),transparent_50%)]" />
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-(--color-primary) rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500 rounded-full blur-[120px] opacity-20 animate-pulse [animation-delay:2s]" />

      <div className="w-full max-w-4xl relative z-10 flex items-center justify-center">
        {screen === "signup" ? (
          <Signup onSwitch={() => toggleView("login")} />
        ) : (
          <Login onSwitch={() => toggleView("signup")} />
        )}
      </div>
    </div>
  );
}
