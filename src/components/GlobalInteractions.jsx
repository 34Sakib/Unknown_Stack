import React, { useEffect, useRef } from "react";

export default function GlobalInteractions() {
  const pgbRef = useRef(null);
  const curRef = useRef(null);

  useEffect(() => {
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let rx = 0;
    let ry = 0;
    let animId;

    const handlePointerMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target;
      const isInteractive = target && target.closest && target.closest("a, button, summary, .win");
      if (curRef.current) {
        curRef.current.classList.toggle("h", !!isInteractive);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    const tick = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);

      // Top progress bar
      if (pgbRef.current) {
        pgbRef.current.style.transform = `scaleX(${Math.min(1, y / maxScroll)})`;
      }

      // Cursor position smoothing
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (curRef.current) {
        curRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
      }

      // 3D Hero tilt and spotlight
      const col = document.getElementById("col");
      const tilt = document.getElementById("tilt");
      const home = document.getElementById("home");

      if (col && tilt && home) {
        const hh = home.getBoundingClientRect();
        if (hh.bottom > 0) {
          const hr = col.getBoundingClientRect();
          rx += ((ty - (hr.top + hr.height / 2)) / vh * -9 - rx) * 0.07;
          ry += ((tx - (hr.left + hr.width / 2)) / window.innerWidth * 12 - ry) * 0.07;
          tilt.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
          home.style.setProperty("--sx", `${cx}px`);
          home.style.setProperty("--sy", `${cy - hh.top}px`);
        }

        // Parallax depth on windows
        const wins = tilt.querySelectorAll(".win");
        wins.forEach((w) => {
          const d = parseFloat(w.getAttribute("data-d")) || 0;
          const r = tilt.getBoundingClientRect();
          w.style.transform = `translateY(${(r.top - vh / 2) * d}px)`;
        });
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="pgb" ref={pgbRef} aria-hidden="true"></div>
      <div id="cur" ref={curRef} aria-hidden="true"></div>
    </>
  );
}
