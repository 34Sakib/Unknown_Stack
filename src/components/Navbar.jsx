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
          ? "bg-bg-deep/90 backdrop-blur-md border-b border-border-hairline py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoLockup />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-content-secondary hover:text-gold-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a
              href="#contact"
              className="btn-gold px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-content-secondary hover:text-gold-2 focus:outline-none"
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
        <div className="md:hidden bg-bg-elevated border-b border-border-hairline px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-content-secondary hover:text-gold-2 py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-border-hairline">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold block text-center py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
