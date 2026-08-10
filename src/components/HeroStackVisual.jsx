import React, { useState } from "react";
import LogoMark from "./icons/LogoMark";
import { useLanguage } from "../context/LanguageContext";

export default function HeroStackVisual() {
  const { lang } = useLanguage();
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = [
    {
      id: "ui",
      number: "03",
      title: lang === "bn" ? "React 18 ইউআই ইন্টারফেস" : "React 18 Interactive UI",
      desc: lang === "bn" ? "দ্রুততম রেসপন্সিভ এক্সপেরিয়েন্স" : "Ultra-fast, smooth client interface",
      badge: "60 FPS UI",
      color: "border-gold-2/80 bg-bg-elevated/95 shadow-lg shadow-gold-1/10",
      accent: "text-gold-2",
      icon: "⚡",
    },
    {
      id: "api",
      number: "02",
      title: lang === "bn" ? "Laravel 11 কোর ইঞ্জিন" : "Laravel 11 Core Engine",
      desc: lang === "bn" ? "শক্তিশালী আর্কিটেকচার ও ডাটাবেজ" : "Rock-solid API & admin management",
      badge: "Laravel Core",
      color: "border-steel-2/60 bg-bg-mid/95",
      accent: "text-steel-2",
      icon: "🔒",
    },
    {
      id: "foundation",
      number: "01",
      title: lang === "bn" ? "ফাউন্ডেশন ও সিকিউরিটি" : "Solid Stack Foundation",
      desc: lang === "bn" ? "প্রয়োজনের সাথে স্কেল করে" : "Zero bloat, high speed & scalability",
      badge: "100/100 Speed",
      color: "border-gold-1/60 bg-bg-deep/95",
      accent: "text-gold-1",
      icon: "💎",
    },
  ];

  return (
    <div className="relative w-full py-4 flex flex-col items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gold-glow pointer-events-none blur-3xl opacity-60"></div>
      
      {/* Hairline Frame Wrapper */}
      <div className="hairline-frame w-full rounded-2xl p-6 sm:p-8 bg-bg-mid/85 backdrop-blur-xl shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-border-hairline">
          <div className="flex items-center gap-3">
            <LogoMark className="w-7 h-7 animate-pulse" />
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-content-primary">
                Layered Architecture
              </h3>
              <p className="text-[10px] font-mono text-content-muted">
                {lang === "bn" ? "প্রতিটি স্তরে নিখুঁত প্রযুক্তি" : "Precision in every layer"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-card border border-border-hairline">
            <span className="w-2 h-2 rounded-full bg-gold-2 animate-ping"></span>
            <span className="text-[10px] font-mono text-gold-2 uppercase tracking-wider font-semibold">
              Unknown Stack
            </span>
          </div>
        </div>

        {/* Stack Layers Display */}
        <div className="space-y-4 relative z-10">
          {layers.map((layer) => {
            const isHovered = activeLayer === layer.id;
            return (
              <div
                key={layer.id}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
                className={`group relative p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  layer.color
                } ${
                  isHovered
                    ? "-translate-y-1 shadow-2xl border-gold-2 bg-card"
                    : "hover:border-gold-2/60"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-bg-deep border border-border-hairline flex items-center justify-center text-xs font-mono text-gold-2 font-bold group-hover:border-gold-2 group-hover:bg-gold-gradient group-hover:text-bg-deep transition-all">
                      {layer.number}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-content-primary group-hover:text-gold-2 transition-colors flex items-center gap-2">
                        {layer.title}
                        <span className="text-xs">{layer.icon}</span>
                      </h4>
                      <p className="text-xs text-content-secondary mt-0.5">
                        {layer.desc}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-bg-deep border border-border-hairline text-gold-2 tracking-wider uppercase whitespace-nowrap">
                    {layer.badge}
                  </span>
                </div>

                {/* Layer Detail Strip */}
                <div className="mt-3 pt-3 border-t border-border-hairline/40 flex items-center justify-between text-[10px] font-mono text-content-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-2"></span>
                    Verified Layer Integrity
                  </span>
                  <span className="text-gold-2 font-semibold">
                    {isHovered ? (lang === "bn" ? "সক্রিয় স্তর" : "Active Layer") : "Laravel + React"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Bar */}
        <div className="mt-6 pt-4 border-t border-border-hairline flex items-center justify-between text-xs font-mono text-content-muted">
          <div className="flex items-center gap-2">
            <span className="text-gold-2">✦</span>
            <span>Clean Code & Custom UI</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span>100% Production Ready</span>
          </div>
        </div>

      </div>

      {/* Floating Accent Badge */}
      <div className="absolute -bottom-4 -left-4 bg-card border border-border-hairline p-3 rounded-xl shadow-2xl hidden sm:flex items-center gap-3 z-20">
        <div className="w-8 h-8 rounded-lg bg-gold-gradient text-bg-deep flex items-center justify-center font-bold text-xs">
          ⚡
        </div>
        <div>
          <p className="text-xs font-bold text-content-primary">Precision in Every Layer</p>
          <p className="text-[10px] text-content-muted font-mono">Laravel + React Studio</p>
        </div>
      </div>
    </div>
  );
}
