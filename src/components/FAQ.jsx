import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" style={{ paddingTop: "40px" }}>
      <div className="w fq">
        <h2>{t.faq.title}</h2>
        <div>
          {t.faq.items.map((item, idx) => (
            <details key={idx} defaultOpen={idx === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
