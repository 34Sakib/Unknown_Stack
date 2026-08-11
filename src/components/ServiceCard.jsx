import React from "react";
import { GlobeIcon, CartIcon, CodeIcon } from "./icons/ServiceIcons";

export default function ServiceCard({ item }) {
  const renderIcon = (id) => {
    switch (id) {
      case "business":
        return <GlobeIcon className="w-7 h-7 text-gold-2 group-hover:scale-110 transition-transform duration-300" />;
      case "ecommerce":
        return <CartIcon className="w-7 h-7 text-gold-2 group-hover:scale-110 transition-transform duration-300" />;
      case "custom":
        return <CodeIcon className="w-7 h-7 text-gold-2 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <GlobeIcon className="w-7 h-7 text-gold-2 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <div className="hairline-frame rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group glass-card-hover shadow-card-luxury">
      <div>
        {/* Icon & ID */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-bg-deep border border-gold-2/30 flex items-center justify-center group-hover:border-gold-2 group-hover:shadow-glow-gold transition-all duration-300">
            {renderIcon(item.id)}
          </div>
          <span className="font-mono text-xs text-gold-2 font-bold tracking-widest px-2.5 py-1 rounded bg-bg-deep border border-border-hairline">
            0{item.id === "business" ? 1 : item.id === "ecommerce" ? 2 : 3}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-content-primary mb-3 group-hover:text-gold-2 transition-colors font-heading">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-6 font-normal">
          {item.desc}
        </p>
      </div>

      {/* Feature List */}
      <div className="pt-6 border-t border-border-hairline/60">
        <ul className="space-y-2.5">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-content-secondary font-mono">
              <span className="w-4 h-4 rounded-full bg-gold-2/15 text-gold-2 flex items-center justify-center mr-2.5 text-[10px] font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
