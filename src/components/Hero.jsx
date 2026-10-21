import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CLUSTER_WINDOWS } from "../data/projects";
import Mockup from "./Mockup";

export default function Hero({ onSelectProject }) {
  const { t } = useLanguage();
  const [time, setTime] = useState("");
  const colRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const str =
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Dhaka",
          }).format(new Date()) + " BDT";
        setTime(str);
      } catch (e) {
        setTime("20:25 BDT");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero" id="home">
      <div className="au a1"></div>
      <div className="au a2"></div>
      <div className="spot"></div>

      <div className="w">
        <div>
          <div className="live">
            <span className="dot"></span>
            <span>{t.hero.live}</span>
            <em id="clk">{time}</em>
          </div>

          <h1>
            <span className="l">
              <span>{t.hero.h1_1}</span>
            </span>
            <span className="l">
              <span>{t.hero.h1_2}</span>
            </span>
            <span className="l">
              <span className="gold">{t.hero.h1_3}</span>
            </span>
          </h1>

          <p className="sub">{t.hero.sub}</p>

          <div className="cta">
            <a className="btn" href="#contact">
              {t.hero.cta}
            </a>
            <a className="btn o" href="#work">
              {t.hero.seeWork}
            </a>
          </div>

          <div className="meta">
            {t.hero.meta.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        <div className="col" id="col" ref={colRef}>
          <svg className="hero-orbit-ring" viewBox="0 0 600 600" aria-hidden="true">
            <circle
              cx="300"
              cy="300"
              r="292"
              fill="none"
              stroke="#E7C783"
              strokeOpacity=".25"
              strokeDasharray="2 10"
            />
            <circle
              cx="300"
              cy="300"
              r="228"
              fill="none"
              stroke="#E7C783"
              strokeOpacity=".12"
            />
            <circle cx="592" cy="300" r="5" fill="#E7C783" />
            <circle cx="72" cy="300" r="3" fill="#8B93A1" />
          </svg>

          <div className="tilt" id="tilt" ref={tiltRef}>
            {CLUSTER_WINDOWS.map((c, k) => (
              <div
                key={k}
                className="win"
                data-m={c.index}
                data-d={c.factor}
                style={{
                  left: `${c.left}%`,
                  top: `${c.top}%`,
                  "--o": c.origin,
                  "--k": k,
                }}
                onClick={() => onSelectProject(c.index)}
                role="button"
                tabIndex={0}
                aria-label={`View project ${c.index}`}
              >
                <Mockup projectIndex={c.index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a className="cue" href="#services" aria-label="Scroll to services">
        <i></i>
        <span>{t.hero.scroll}</span>
      </a>
    </header>
  );
}
