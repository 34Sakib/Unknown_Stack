import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import LogoLockup from "./icons/LogoLockup";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.work, href: "#work" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-deep/80 backdrop-blur-xl border-b border-border-hairline/80 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoLockup />

          {/* Desktop Nav Links in Glass Container */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 px-4 py-1.5 rounded-full bg-card/40 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-mono uppercase tracking-wider text-content-secondary hover:text-gold-2 px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-gold-1 to-gold-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a
              href="#contact"
              className="btn-gold px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-glow-gold hover:shadow-glow-gold-lg transition-all"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-content-secondary hover:text-gold-2 focus:outline-none rounded-lg bg-card/60 border border-border-hairline"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-elevated/95 backdrop-blur-2xl border-b border-border-hairline px-6 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-content-secondary hover:text-gold-2 py-2 border-b border-border-hairline/30"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold block text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-glow-gold"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
