import React from "react";

export default function LogoMark({ className = "w-8 h-8", animated = false }) {
  return (
    <svg 
      className={`${className} ${animated ? 'animate-float' : ''}`} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Layer 1: Solid Gold Foundation */}
      <path 
        d="M8 28L20 34L32 28L20 22L8 28Z" 
        fill="url(#gold_grad_mark)" 
      />
      {/* Layer 2: Steel Middle */}
      <path 
        d="M8 20L20 26L32 20L20 14L8 20Z" 
        fill="#5C6472" 
        fillOpacity="0.8" 
        stroke="#8B93A1" 
        strokeWidth="0.75" 
      />
      {/* Layer 3: Dashed Gold Top Layer */}
      <path 
        d="M8 12L20 18L32 12L20 6L8 12Z" 
        stroke="url(#gold_grad_top)" 
        strokeWidth="1.5" 
        strokeDasharray="3 2" 
        fill="none" 
      />
      
      <defs>
        <linearGradient id="gold_grad_mark" x1="8" y1="28" x2="32" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8E6F3E" />
          <stop offset="0.5" stopColor="#E7C783" />
          <stop offset="1" stopColor="#8E6F3E" />
        </linearGradient>
        <linearGradient id="gold_grad_top" x1="8" y1="12" x2="32" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7C783" />
          <stop offset="0.5" stopColor="#FBF0D2" />
          <stop offset="1" stopColor="#E7C783" />
        </linearGradient>
      </defs>
    </svg>
  );
}
