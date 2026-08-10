import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LogoLockup from "./icons/LogoLockup";
import LanguageToggle from "./LanguageToggle";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-deep border-t border-border-hairline pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-hairline/60">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <LogoLockup size="large" />
            <p className="text-sm text-content-secondary max-w-sm font-mono">
              "{t.footer.tagline}"
            </p>
            <p className="text-xs text-content-muted leading-relaxed max-w-sm">
              Laravel & React web development studio building fast, secure, and trustworthy digital platforms for serious businesses.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-2 font-semibold">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2 text-sm text-content-secondary">
              <li>
                <a href="#home" className="hover:text-gold-2 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-2 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-gold-2 transition-colors">
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold-2 transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gold-2 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-2 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Stack & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-2 font-semibold">
              {t.footer.legalHeading}
            </h4>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-steel-2">
              <span className="px-2.5 py-1 rounded bg-card border border-border-hairline">Laravel 11</span>
              <span className="px-2.5 py-1 rounded bg-card border border-border-hairline">React 18</span>
              <span className="px-2.5 py-1 rounded bg-card border border-border-hairline">Vite</span>
              <span className="px-2.5 py-1 rounded bg-card border border-border-hairline">Tailwind CSS</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-card border border-border-hairline flex items-center justify-center text-content-secondary hover:text-gold-2 hover:border-gold-2 transition-colors"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <LanguageToggle />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-muted">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            Handcrafted with <span className="text-gold-2">♥</span> for ambitious businesses.
          </p>
        </div>

      </div>
    </footer>
  );
}
