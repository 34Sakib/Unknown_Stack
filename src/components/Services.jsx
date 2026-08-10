import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  return (
    <section id="services" className="py-24 bg-bg-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-semibold">
              {t.services.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">
              {t.services.title}
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((service) => (
              <ServiceCard key={service.id} item={service} />
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-12 text-center">
            <p className="inline-block text-xs font-mono text-content-muted px-4 py-2 rounded-full border border-border-hairline bg-card">
              ⚡ {t.services.footnote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
