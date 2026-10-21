import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Statement() {
  const { t } = useLanguage();
  const stRef = useRef(null);
  const snRef = useRef(null);
  const [counts, setCounts] = useState({
    c0_a: 10,
    c0_b: 20,
    c1: 30,
    c2: 100,
    c3: 10,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Scroll illumination for words in statement
  useEffect(() => {
    const handleScroll = () => {
      if (!stRef.current) return;
      const sr = stRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const pr = Math.min(
        1,
        Math.max(0, (vh * 0.85 - sr.top) / (sr.height + vh * 0.35))
      );
      const spans = stRef.current.querySelectorAll("span");
      spans.forEach((s, i) => {
        s.style.opacity = pr * 1.15 * spans.length > i ? "1" : "0.16";
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t.statement.text]);

  // Metric cards observer & counter
  useEffect(() => {
    if (!snRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            snRef.current.classList.add("in");

            // Count-up animation
            const duration = 1800;
            const startTime = performance.now();

            const targets = {
              c0_a: 10,
              c0_b: 20,
              c1: 30,
              c2: 100,
              c3: 10,
            };

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(1, Math.max(0, elapsed / duration));
              const ease = 1 - Math.pow(2, -10 * progress);

              setCounts({
                c0_a: Math.round(targets.c0_a * ease),
                c0_b: Math.round(targets.c0_b * ease),
                c1: Math.round(targets.c1 * ease),
                c2: Math.round(targets.c2 * ease),
                c3: Math.round(targets.c3 * ease),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(targets);
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(snRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const words = t.statement.text.split(" ");

  return (
    <section>
      <div className="w">
        <p className="st" id="st" ref={stRef}>
          {words.map((word, idx) => (
            <React.Fragment key={idx}>
              <span style={{ opacity: 0.16, transition: "opacity .25s" }}>
                {word}
              </span>{" "}
            </React.Fragment>
          ))}
        </p>

        <div className="sn rv in" ref={snRef}>
          <div style={{ "--c": "#E7C783", "--k": 0, "--f": 0.75 }}>
            <b>
              <em style={{ fontStyle: "normal" }}>{counts.c0_a}</em>–
              <em style={{ fontStyle: "normal" }}>{counts.c0_b}</em>
            </b>
            <span>{t.statement.stats[0].label}</span>
          </div>

          <div style={{ "--c": "#6be0c8", "--k": 1, "--f": 0.55 }}>
            <b>
              <em style={{ fontStyle: "normal" }}>{counts.c1}</em>
            </b>
            <span>{t.statement.stats[1].label}</span>
          </div>

          <div style={{ "--c": "#b9a2ff", "--k": 2, "--f": 1 }}>
            <b>
              <em style={{ fontStyle: "normal" }}>{counts.c2}</em>
              <i>%</i>
            </b>
            <span>{t.statement.stats[2].label}</span>
          </div>

          <div style={{ "--c": "#ff9b7a", "--k": 3, "--f": 0.4 }}>
            <b>
              <em style={{ fontStyle: "normal" }}>{counts.c3}</em>
              <i>+</i>
            </b>
            <span>{t.statement.stats[3].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
