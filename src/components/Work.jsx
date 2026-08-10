import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import ProjectCard from "./ProjectCard";

export default function Work({ onSelectProject }) {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();

  return (
    <section id="work" className="py-24 bg-bg-mid relative border-t border-b border-border-hairline/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-semibold">
              {t.work.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">
              {t.work.title}
            </h2>
            <p className="text-sm sm:text-base text-content-secondary">
              {t.work.subtitle}
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.work.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => onSelectProject(proj)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
