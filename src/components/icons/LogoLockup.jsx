import React from "react";
import LogoMark from "./LogoMark";

export default function LogoLockup({ size = "normal" }) {
  const isLarge = size === "large";
  
  return (
    <a href="#home" className="inline-flex items-center gap-3 group focus:outline-none">
      <LogoMark className={isLarge ? "w-10 h-10" : "w-8 h-8"} />
      <div className="flex flex-col">
        <span className={`font-bold tracking-widest text-content-primary group-hover:text-gold-2 transition-colors ${
          isLarge ? "text-lg" : "text-base"
        }`}>
          UNKNOWN<span className="text-gold-2">.</span>STACK
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-content-muted font-semibold">
          Laravel + React
        </span>
      </div>
    </a>
  );
}
