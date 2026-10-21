import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" style={{ paddingTop: "40px" }}>
      <div className="w">
        <h2 style={{ fontSize: "clamp(38px,5.4vw,76px)", marginBottom: "60px" }}>
          {t.pricing.title}
        </h2>

        <div className="pc2">
          {/* Static Website Card */}
          <div className="pk rv in">
            <h3>{t.pricing.packages[0].title}</h3>
            <div className="p">{t.pricing.packages[0].price}</div>
            <small>{t.pricing.packages[0].period}</small>
            <ul>
              {t.pricing.packages[0].bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <a className="btn o" href="#contact">
              {t.pricing.packages[0].cta}
            </a>
          </div>

          {/* Dynamic Website Card */}
          <div className="pk f rv in">
            <span className="bd">{t.pricing.packages[1].badge}</span>
            <h3>{t.pricing.packages[1].title}</h3>
            <div className="p gold">{t.pricing.packages[1].price}</div>
            <small>{t.pricing.packages[1].period}</small>
            <ul>
              {t.pricing.packages[1].bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <a className="btn" href="#contact">
              {t.pricing.packages[1].cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
