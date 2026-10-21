import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalInteractions from "./components/GlobalInteractions";
import { TEXTURE_URL } from "./data/assets";

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);

  useEffect(() => {
    if (TEXTURE_URL) {
      document.documentElement.style.setProperty("--tex", `url("${TEXTURE_URL}")`);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#project-")) {
        const id = parseInt(hash.replace("#project-", ""), 10);
        if (!isNaN(id)) {
          setActiveProjectId(id);
          return;
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectProject = (index) => {
    setActiveProjectId(index);
  };

  const handleCloseProject = () => {
    setActiveProjectId(null);
    if (window.location.hash.startsWith("#project-")) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <div className="min-h-screen bg-bg-deep text-content-primary selection:bg-gold-1 selection:text-white">
      <Navbar />

      <main>
        <Hero onSelectProject={handleSelectProject} />
        <Marquee />
        <Statement />
        <Services />
        <Work
          activeProjectId={activeProjectId}
          onSelectProject={handleSelectProject}
          onCloseProject={handleCloseProject}
        />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <GlobalInteractions />
    </div>
  );
}
