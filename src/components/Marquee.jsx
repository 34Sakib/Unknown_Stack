import React from "react";

const STACK_ITEMS = [
  "Laravel", "React", "Precision in every layer",
  "Vite", "Tailwind", "MySQL",
  "Sanctum", "Stripe", "bKash",
  "Laravel", "React", "Precision in every layer",
  "Vite", "Tailwind", "MySQL",
  "Sanctum", "Stripe", "bKash"
];

export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div>
        {STACK_ITEMS.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </div>
  );
}
