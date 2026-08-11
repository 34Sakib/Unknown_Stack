import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LogoMark from "./icons/LogoMark";
import { useInView } from "../hooks/useInView";

export default function Hero() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-glow pointer-events-none blur-3xl opacity-60 animate-glow-pulse"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-1/10 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text Content */}
          <div ref={ref} className={`lg:col-span-7 space-y-7 fade-in-section ${isInView ? "is-visible" : ""}`}>
            
            {/* Eyebrow Pill Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/80 border border-gold-2/40 backdrop-blur-md shadow-glow-gold">
              <span className="w-2 h-2 rounded-full bg-gold-2 animate-ping"></span>
              <span className="text-xs uppercase font-mono tracking-widest text-gold-2 font-bold">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-content-primary tracking-tight leading-[1.12] font-heading">
              {t.hero.titleStart}{" "}
              <span className="text-gold-gradient block sm:inline mt-1 sm:mt-0">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-content-secondary max-w-2xl leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="btn-gold px-8 py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest text-center shadow-glow-gold hover:shadow-glow-gold-lg transition-all"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#work"
                className="px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-wider text-content-primary border border-border-hairline hover:border-gold-2/60 bg-bg-elevated/70 hover:bg-bg-elevated text-center transition-all duration-300 backdrop-blur-sm"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Micro Stack Feature Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-content-muted border-t border-border-hairline/40">
              <span className="flex items-center gap-2 text-content-secondary">
                <span className="w-4 h-4 rounded-full bg-gold-2/20 text-gold-2 flex items-center justify-center text-[10px] font-bold">✓</span> 
                {t.hero.badgeStack}
              </span>
              <span className="text-border-hairline">•</span>
              <span className="flex items-center gap-2 text-content-secondary">
                <span className="w-4 h-4 rounded-full bg-gold-2/20 text-gold-2 flex items-center justify-center text-[10px] font-bold">✓</span> 
                100% Client-Owned Code
              </span>
            </div>

          </div>

          {/* Right Highlights Grid: Glassmorphic Cards */}
          <div className="lg:col-span-5 space-y-4">
            {t.hero.highlights.map((item, idx) => (
              <div
                key={idx}
                className="hairline-frame rounded-2xl p-6 bg-card/80 backdrop-blur-md border border-white/10 hover:border-gold-2/60 transition-all duration-300 group shadow-card-luxury"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-2 px-2.5 py-0.5 rounded bg-bg-deep border border-gold-2/30 font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-content-muted">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-content-primary group-hover:text-gold-2 transition-colors mb-1.5 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
