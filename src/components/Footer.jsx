import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const upgRef = useRef(null);
  const wmRef = useRef(null);
  const ftRef = useRef(null);

  useEffect(() => {
    const wm = wmRef.current;
    if (!wm) return;

    const fit = () => {
      wm.style.fontSize = "100px";
      const w = wm.getBoundingClientRect().width;
      if (w > 0) {
        wm.style.fontSize =
          (100 * Math.min(window.innerWidth, 1500) * 0.96) / w + "px";
      }
    };

    fit();
    window.addEventListener("resize", fit);
    if (document.fonts) {
      document.fonts.ready.then(fit);
    }

    const handleScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
      const progress = Math.min(1, y / maxScroll);

      if (upgRef.current) {
        upgRef.current.style.strokeDashoffset = (
          138.2 *
          (1 - progress)
        ).toFixed(1);
      }

      if (ftRef.current && wm) {
        const fr = ftRef.current.getBoundingClientRect();
        const q = Math.min(1, Math.max(0, (vh - fr.top) / Math.max(1, fr.height)));
        wm.style.setProperty("--fy", ((1 - q) * 60).toFixed(1) + "px");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer id="ft" ref={ftRef}>
      <div className="fg"></div>

      <div className="w ftop rv in">
        <div className="fl">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} data-t={link.label}>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <a className="up" href="#home" aria-label="Back to top">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle className="tr" cx="24" cy="24" r="22" />
            <circle className="pg" id="upg" ref={upgRef} cx="24" cy="24" r="22" />
          </svg>
          <b>↑</b>
        </a>
      </div>

      <div className="w fm rv in">
        <span>{t.footer.copyright}</span>
        <span className="gold">{t.footer.tagline}</span>
      </div>

      <div
        className="wm in"
        id="wm"
        ref={wmRef}
        aria-hidden="true"
        style={{ fontSize: "clamp(48px, 12vw, 160px)" }}
      >
        UNKNOWN<span className="dt">.</span>STACK
      </div>
    </footer>
  );
}
