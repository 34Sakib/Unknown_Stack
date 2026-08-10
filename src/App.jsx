import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetailPage from "./components/ProjectDetailPage";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Synchronize routing state with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#project-")) {
        const idStr = hash.replace("#project-", "");
        const id = parseInt(idStr, 10);
        if (!isNaN(id)) {
          setActiveProjectId(id);
          return;
        }
      }
      setActiveProjectId(null);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const selectedProject = t.work.projects.find((p) => p.id === activeProjectId);

  const navigateToProject = (proj) => {
    window.location.hash = `#project-${proj.id}`;
  };

  const navigateBackToWork = () => {
    window.location.hash = "#work";
    setTimeout(() => {
      const workEl = document.getElementById("work");
      if (workEl) {
        workEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  // If a project detail page is active, render ProjectDetailPage
  if (selectedProject) {
    return (
      <ProjectDetailPage
        project={selectedProject}
        onBack={navigateBackToWork}
        onNavigateProject={navigateToProject}
      />
    );
  }

  return (
    <div className="min-h-screen bg-bg-deep text-content-primary selection:bg-gold-1 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Work onSelectProject={navigateToProject} />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
