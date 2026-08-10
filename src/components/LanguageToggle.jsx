import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center p-0.5 rounded-full bg-bg-elevated border border-border-hairline ${className}`}>
      <button
        onClick={() => setLang("en")}
        type="button"
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === "en"
            ? "bg-gold-gradient text-bg-deep shadow-sm"
            : "text-content-muted hover:text-content-primary"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("bn")}
        type="button"
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === "bn"
            ? "bg-gold-gradient text-bg-deep shadow-sm"
            : "text-content-muted hover:text-content-primary"
        }`}
        aria-label="Switch to Bangla"
      >
        বাং
      </button>
    </div>
  );
}
