import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../i18n/en";
import bn from "../i18n/bn";

const dictionaries = { en, bn };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("preferred-lang") || "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === "bn") {
      document.body.classList.add("font-bengali");
    } else {
      document.body.classList.remove("font-bengali");
    }
    localStorage.setItem("preferred-lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = dictionaries[lang] || en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
