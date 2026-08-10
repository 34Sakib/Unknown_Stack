import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

export default function FAQ() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-deep relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-semibold">
              {t.faq.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">
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
                  className="hairline-frame rounded-lg bg-card overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-content-primary hover:text-gold-2 transition-colors">
                      {item.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-bg-deep border border-border-hairline flex items-center justify-center text-gold-2 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-gold-gradient text-bg-deep' : ''}`}>
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-content-secondary leading-relaxed border-t border-border-hairline/40 pt-4">
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
