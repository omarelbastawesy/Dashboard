"use client";

import Register from "./components/Login/Register";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      setLogin(true);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[var(--bg-main)]">
      {login ? <Navbar /> : <Register />}
    </div>
  );
}
