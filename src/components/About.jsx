import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import { LightningIcon, ShieldIcon, MobileIcon, SupportIcon } from "./icons/ServiceIcons";

export default function About() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  const icons = [
    <LightningIcon className="w-6 h-6 text-gold-2" />,
    <ShieldIcon className="w-6 h-6 text-gold-2" />,
    <MobileIcon className="w-6 h-6 text-gold-2" />,
    <SupportIcon className="w-6 h-6 text-gold-2" />,
  ];

  return (
    <section id="about" className="py-24 bg-bg-mid relative border-t border-b border-border-hairline/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-semibold">
              {t.about.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-content-primary tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-content-secondary text-base sm:text-lg leading-relaxed pt-2">
              {t.about.body}
            </p>
          </div>

          {/* 4 Value Tiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="hairline-frame rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-bg-deep border border-border-hairline flex items-center justify-center mb-5 group-hover:border-gold-2/60 transition-colors">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-bold text-content-primary mb-2 group-hover:text-gold-2 transition-colors">
                  {stat.title}
                </h3>
                <p className="text-xs text-content-muted leading-relaxed font-mono">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
