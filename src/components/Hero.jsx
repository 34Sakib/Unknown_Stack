import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LogoMark from "./icons/LogoMark";
import { useInView } from "../hooks/useInView";

export default function Hero() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-glow pointer-events-none blur-3xl opacity-40"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-steel-1/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div ref={ref} className={`lg:col-span-7 space-y-6 fade-in-section ${isInView ? "is-visible" : ""}`}>
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border-hairline">
              <span className="w-2 h-2 rounded-full bg-gold-2 animate-ping"></span>
              <span className="text-xs uppercase tracking-widest text-gold-2 font-semibold">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-content-primary tracking-tight leading-[1.15]">
              {t.hero.titleStart}
              <span className="text-gold-gradient block sm:inline mt-1 sm:mt-0">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-content-secondary max-w-2xl leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="btn-gold px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider text-center"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#work"
                className="px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wider text-content-primary border border-border-hairline hover:border-gold-2/60 bg-bg-elevated/50 hover:bg-bg-elevated text-center transition-all duration-200"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Micro Stack Badge */}
            <div className="pt-6 flex items-center gap-4 text-xs text-content-muted">
              <span className="flex items-center gap-1.5 font-mono">
                <span className="text-gold-2">✓</span> {t.hero.badgeStack}
              </span>
              <span className="text-border-hairline">•</span>
              <span className="flex items-center gap-1.5 font-mono">
                <span className="text-gold-2">✓</span> 100% Client-Owned Code
              </span>
            </div>

          </div>

          {/* Right Text Column: Clean Minimal Highlights */}
          <div className="lg:col-span-5 space-y-4">
            {t.hero.highlights.map((item, idx) => (
              <div
                key={idx}
                className="hairline-frame rounded-xl p-6 bg-card/90 backdrop-blur-sm border border-border-hairline hover:border-gold-2/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-2 font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-content-muted">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-content-primary group-hover:text-gold-2 transition-colors mb-2">
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
