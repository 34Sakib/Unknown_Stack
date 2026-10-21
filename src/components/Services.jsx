import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Mockup from "./Mockup";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="sv" id="services">
      <div className="w">
        <h2>{t.services.title}</h2>

        {t.services.items.map((item, idx) => (
          <div key={item.id} className="pn" style={{ "--i": idx }}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul>
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx}>
                    {b.label} <small>{b.note}</small>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Mockup projectIndex={item.projectIndex} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
