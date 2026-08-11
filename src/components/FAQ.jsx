import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

export default function FAQ() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-deep relative bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-bold px-3.5 py-1 rounded-full bg-card border border-gold-2/30 shadow-glow-gold">
              {t.faq.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary font-heading mt-3">
              {t.faq.title}
            </h2>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {t.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`hairline-frame rounded-2xl bg-card/80 overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-gold-2/60 shadow-glow-gold bg-card" : "hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-content-primary hover:text-gold-2 transition-colors font-heading">
                      {item.q}
                    </span>
                    <span className={`w-9 h-9 rounded-full border border-border-hairline flex items-center justify-center font-bold text-gold-2 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-gold-2 text-bg-deep border-gold-2 shadow-glow-gold' : 'bg-bg-deep'}`}>
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-content-secondary leading-relaxed border-t border-border-hairline/60 pt-4 font-normal">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
