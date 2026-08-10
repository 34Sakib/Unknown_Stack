import React from "react";
import LogoMark from "./icons/LogoMark";

export default function PricingCard({ pkg }) {
  return (
    <div
      className={`hairline-frame rounded-lg p-8 bg-card flex flex-col justify-between relative transition-all duration-300 ${
        pkg.isPopular
          ? "border-gold-2/80 shadow-2xl shadow-gold-1/10 scale-105 z-10"
          : "hover:-translate-y-1 hover:border-steel-1"
      }`}
    >
      {/* Popular Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-bg-deep font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
          {pkg.badge}
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-content-primary">
            {pkg.title}
          </h3>
          <LogoMark className="w-5 h-5 opacity-60" />
        </div>

        {/* Price Tag */}
        <div className="mb-6 pb-6 border-b border-border-hairline">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-gold-gradient">
              {pkg.price}
            </span>
            <span className="text-xs text-content-muted font-mono">
              / {pkg.period}
            </span>
          </div>
          <p className="text-xs text-content-muted font-mono mt-1">
            ⏱ Delivery: {pkg.delivery}
          </p>
        </div>

        {/* Feature List */}
        <ul className="space-y-3 mb-8">
          {pkg.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-xs text-content-secondary leading-relaxed font-mono">
              <span className="text-gold-2 mr-2.5 font-bold">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className={`w-full text-center py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          pkg.isPopular
            ? "btn-gold"
            : "bg-bg-elevated hover:bg-border-hairline text-content-primary border border-border-hairline"
        }`}
      >
        {pkg.cta}
      </a>
    </div>
  );
}
