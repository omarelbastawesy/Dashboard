"use client";

import { useState, useEffect } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Theme() {
  const [theme, setTheme] = useState(null);

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  // Update DOM + localStorage when theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Prevent hydration mismatch
  if (!theme) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={toggleTheme}
      className={`w-8 h-8 flex items-center justify-center rounded-xl text-(--text-muted) hover:bg-(--color-primary-soft) transition-all duration-300 cursor-pointer active:scale-95 ${
        theme === "dark" ? "hover:text-(--sunny)" : "hover:text-(--moon)"
      }`}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className={`transition-all duration-500 ${
          theme === "dark" ? "rotate-90 scale-110" : "rotate-0 scale-100"
        }`}
      />
    </button>
  );
}
