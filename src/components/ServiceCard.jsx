import React from "react";
import { GlobeIcon, CartIcon, CodeIcon } from "./icons/ServiceIcons";

export default function ServiceCard({ item }) {
  const renderIcon = (id) => {
    switch (id) {
      case "business":
        return <GlobeIcon className="w-8 h-8 text-gold-2" />;
      case "ecommerce":
        return <CartIcon className="w-8 h-8 text-gold-2" />;
      case "custom":
        return <CodeIcon className="w-8 h-8 text-gold-2" />;
      default:
        return <GlobeIcon className="w-8 h-8 text-gold-2" />;
    }
  };

  return (
    <div className="bg-card border border-border-hairline rounded-lg p-8 hover:-translate-y-1 hover:border-gold-2/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-gold-1/5">
      <div>
        {/* Icon & ID */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-lg bg-bg-elevated border border-border-hairline flex items-center justify-center group-hover:border-gold-2/60 transition-colors">
            {renderIcon(item.id)}
          </div>
          <span className="font-mono text-xs text-content-muted tracking-widest uppercase">
            0{item.id === "business" ? 1 : item.id === "ecommerce" ? 2 : 3}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-content-primary mb-3 group-hover:text-gold-2 transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-content-secondary leading-relaxed mb-6">
          {item.desc}
        </p>
      </div>

      {/* Feature List */}
      <div className="pt-6 border-t border-border-hairline/60">
        <ul className="space-y-2">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-content-muted font-mono">
              <span className="text-gold-2 mr-2">›</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
