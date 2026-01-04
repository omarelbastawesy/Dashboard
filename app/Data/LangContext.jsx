"use client";

import { createContext, useContext, useState, useEffect } from "react";
import en from "./data/En.json";
import ar from "./data/Ar.json";
import fr from "./data/Fr.json";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  let text;
  if (lang === "en") {
    text = en;
  } else if (lang === "ar") {
    text = ar;
  } else if (lang === "fr") {
    text = fr;
  }

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, text, changeLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
