import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PROJECTS } from "../data/projects";
import Mockup from "./Mockup";

export default function Work({ activeProjectId, onSelectProject, onCloseProject }) {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pvRef = useRef(null);
  const dialogRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  // Dialog open / close sync with activeProjectId
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeProjectId !== null && activeProjectId !== undefined) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [activeProjectId]);

  // Floating preview pointer tracker
  useEffect(() => {
    let animId;
    const handlePointerMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointermove", handlePointerMove);

    const updatePreview = () => {
      if (pvRef.current) {
        const tx = targetPos.current.x;
        const ty = targetPos.current.y;
        currentPos.current.x += (tx + 24 - currentPos.current.x) * 0.12;
        currentPos.current.y += (ty - 90 - currentPos.current.y) * 0.12;

        const px = currentPos.current.x;
        const py = currentPos.current.y;
        const isHovered = hoveredIndex !== null;
        const rot = (tx - px) * 0.02;

        pvRef.current.style.transform = `translate(${px}px, ${py}px) scale(${
          isHovered ? 1 : 0.85
        }) rotate(${rot}deg)`;
      }
      animId = requestAnimationFrame(updatePreview);
    };

    animId = requestAnimationFrame(updatePreview);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, [hoveredIndex]);

  const activeProject =
    activeProjectId !== null && activeProjectId !== undefined
      ? PROJECTS[activeProjectId]
      : null;

  return (
    <>
      <section className="wk" id="work">
        <div className="w">
          <h2>{t.work.title}</h2>
          <div
            className="ix"
            id="ix"
            onPointerLeave={() => setHoveredIndex(null)}
          >
            {PROJECTS.map((p, idx) => (
              <a
                key={p.id}
                data-i={idx}
                tabIndex={0}
                role="button"
                onPointerOver={() => setHoveredIndex(idx)}
                onClick={() => onSelectProject(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectProject(idx);
                  }
                }}
              >
                <h3>{p.shortTitle}</h3>
                <span>{p.category}</span>
                <span>{p.highlight}</span>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cursor Preview */}
      <div
        id="pv"
        ref={pvRef}
        className={hoveredIndex !== null ? "on" : ""}
        aria-hidden="true"
      >
        {hoveredIndex !== null && <Mockup projectIndex={hoveredIndex} />}
      </div>

      {/* Project Detail Dialog */}
      <dialog
        id="dl"
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            onCloseProject();
          }
        }}
      >
        {activeProject && (
          <div>
            <button
              className="x"
              onClick={onCloseProject}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
            <Mockup projectIndex={activeProject.id} />
            <div className="dp">
              <span style={{ color: "var(--g2)", fontSize: "13px" }}>
                {activeProject.category}
              </span>
              <h3>{activeProject.fullTitle || activeProject.shortTitle}</h3>
              <p>{activeProject.desc}</p>
              <p
                style={{
                  color: "var(--g2)",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                {activeProject.highlight}
              </p>

              <div className="ck">
                {activeProject.tags.map((tag, tIdx) => (
                  <span key={tIdx}>{tag}</span>
                ))}
              </div>

              <ul>
                {activeProject.deliverables.map((del, dIdx) => (
                  <li key={dIdx}>{del}</li>
                ))}
              </ul>

              <p style={{ marginTop: "24px" }}>
                <a className="btn" href="#contact" onClick={onCloseProject}>
                  {t.modal.cta}
                </a>
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
