import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["services", "work", "process", "pricing", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav id="nav" className={isScrolled ? "s" : ""}>
      <div className="w">
        <a className="logo" href="#home" onClick={closeMenu}>
          <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0" stopColor="#8E6F3E" />
                <stop offset="1" stopColor="#E7C783" />
              </linearGradient>
            </defs>
            <path d="M20 24l14 7-14 7-14-7z" fill="url(#lg)" />
            <path d="M20 15l14 7-14 7-14-7z" fill="#5C6472" stroke="#8B93A1" />
            <path d="M20 6l14 7-14 7-14-7z" fill="none" stroke="#E7C783" strokeDasharray="3 2" />
          </svg>
          UNKNOWN<i>.</i>STACK
        </a>

        <div className={`lk ${mobileOpen ? "o" : ""}`} id="lk">
          <a
            href="#services"
            className={activeSection === "services" ? "a" : ""}
            onClick={closeMenu}
          >
            {t.nav.services}
          </a>
          <a
            href="#work"
            className={activeSection === "work" ? "a" : ""}
            onClick={closeMenu}
          >
            {t.nav.work}
          </a>
          <a
            href="#process"
            className={activeSection === "process" ? "a" : ""}
            onClick={closeMenu}
          >
            {t.nav.process}
          </a>
          <a
            href="#pricing"
            className={activeSection === "pricing" ? "a" : ""}
            onClick={closeMenu}
          >
            {t.nav.pricing}
          </a>
          <a
            href="#faq"
            className={activeSection === "faq" ? "a" : ""}
            onClick={closeMenu}
          >
            {t.nav.faq}
          </a>
        </div>

        <div className="nr">
          <div className="lang">
            <button
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={lang === "bn" ? "on" : ""}
              onClick={() => setLang("bn")}
              type="button"
            >
              BN
            </button>
          </div>
          <a className="btn" href="#contact" onClick={closeMenu}>
            {t.nav.cta}
          </a>
          <button
            className="mn"
            id="mn"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
