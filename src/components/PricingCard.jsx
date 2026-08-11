import React from "react";
import LogoMark from "./icons/LogoMark";

export default function PricingCard({ pkg }) {
  return (
    <div
      className={`hairline-frame rounded-2xl p-8 bg-card/90 flex flex-col justify-between relative transition-all duration-300 glass-card-hover shadow-card-luxury ${
        pkg.isPopular
          ? "border-gold-2 shadow-glow-gold scale-105 z-10 bg-gradient-to-b from-card via-card/95 to-bg-elevated"
          : "hover:-translate-y-2"
      }`}
    >
      {/* Popular Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-bg-deep font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-glow-gold">
          {pkg.badge}
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-content-primary font-heading">
            {pkg.title}
          </h3>
          <LogoMark className="w-6 h-6 opacity-75 text-gold-2" />
        </div>

        {/* Price Tag */}
        <div className="mb-6 pb-6 border-b border-border-hairline/80">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-black text-gold-gradient tracking-tight">
              {pkg.price}
            </span>
            <span className="text-xs text-content-muted font-mono font-semibold">
              / {pkg.period}
            </span>
          </div>
          <p className="text-xs text-gold-2 font-mono mt-2 flex items-center gap-1.5 font-semibold">
            <span>⏱</span> Delivery: {pkg.delivery}
          </p>
        </div>

        {/* Feature List */}
        <ul className="space-y-3 mb-8">
          {pkg.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-xs text-content-secondary leading-relaxed font-mono">
              <span className="w-4 h-4 rounded-full bg-gold-2/20 text-gold-2 flex items-center justify-center mr-2.5 text-[10px] font-bold shrink-0 mt-0.5">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className={`w-full text-center py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${
          pkg.isPopular
            ? "btn-gold shadow-glow-gold hover:shadow-glow-gold-lg"
            : "bg-bg-elevated hover:bg-card text-content-primary border border-border-hairline hover:border-gold-2/50"
        }`}
      >
        {pkg.cta}
      </a>
    </div>
  );
}
