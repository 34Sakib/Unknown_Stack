import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const tlRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!tlRef.current) return;
      const tr = tlRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const pp = Math.min(1, Math.max(0, (vh * 0.6 - tr.top) / tr.height));

      tlRef.current.style.setProperty("--p", pp);
      const items = Array.from(tlRef.current.children);
      items.forEach((child, i) => {
        child.classList.toggle("on", pp >= i / 5 - 0.02);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pc" id="process">
      <div className="w">
        <div className="h">
          <h2>{t.process.title}</h2>
          <p>{t.process.desc}</p>
        </div>

        <div className="tl" id="tl" ref={tlRef}>
          {t.process.steps.map((step, idx) => (
            <div key={idx}>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
