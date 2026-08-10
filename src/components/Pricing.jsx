import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" className="py-24 bg-bg-mid relative border-t border-b border-border-hairline/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-semibold">
              {t.pricing.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">
              {t.pricing.title}
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {t.pricing.packages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Consultation Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-content-secondary">
              {t.pricing.footnote}{" "}
              <a
                href="#contact"
                className="text-gold-2 hover:underline font-semibold font-mono underline-offset-4"
              >
                {t.nav.contact} →
              </a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
