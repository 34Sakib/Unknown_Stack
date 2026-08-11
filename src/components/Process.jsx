import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

export default function Process() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  return (
    <section id="process" className="py-24 bg-bg-deep relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-bold px-3.5 py-1 rounded-full bg-card border border-gold-2/30 shadow-glow-gold">
              {t.process.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary font-heading mt-3">
              {t.process.title}
            </h2>
          </div>

          {/* Process Timeline Steps */}
          <div className="relative">
            
            {/* Connecting Glowing Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-2/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {t.process.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="hairline-frame rounded-2xl p-6 bg-card/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group glass-card-hover shadow-card-luxury"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-11 h-11 rounded-full bg-bg-deep border border-gold-2/40 group-hover:border-gold-2 group-hover:shadow-glow-gold flex items-center justify-center font-mono text-sm font-extrabold text-gold-2 transition-all">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-content-muted">
                        STEP {idx + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-content-primary mb-3 group-hover:text-gold-2 transition-colors font-heading">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-content-secondary leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Completion Indicator */}
                  <div className="mt-6 pt-4 border-t border-border-hairline/60 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-2 animate-pulse"></span>
                    <span className="text-[10px] font-mono uppercase font-semibold text-content-muted">
                      Milestone {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
