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
    <div className="login min-h-screen relative flex items-center justify-center bg-[var(--bg-main)] p-4">
      {screen === "signup" ? (
        <Signup onSwitch={() => toggleView("login")} />
      ) : (
        <Login onSwitch={() => toggleView("signup")} />
      )}
    </div>
  );
}
