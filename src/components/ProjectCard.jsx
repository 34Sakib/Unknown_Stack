import React from "react";

export default function ProjectCard({ project, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="hairline-frame rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 hover:border-gold-2/80 transition-all duration-300 flex flex-col justify-between glass-card-hover shadow-card-luxury"
    >
      {/* Project Image Banner */}
      <div className="relative h-56 sm:h-64 bg-bg-mid border-b border-border-hairline overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        ) : null}

        {/* Gradient Overlay & Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-2 px-3 py-1 rounded-full bg-bg-deep/90 border border-gold-2/40 backdrop-blur-md font-bold shadow-md">
              {project.category}
            </span>
          </div>

          <div className="self-start">
            <span className="text-[10px] font-mono text-content-primary bg-bg-deep/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
              <span className="text-gold-2">⚡</span> {project.metrics}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-card/90">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-content-primary group-hover:text-gold-2 transition-colors duration-200 mb-2 font-heading">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed line-clamp-2 font-normal">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-bg-elevated/90 border border-border-hairline text-steel-2 font-medium group-hover:border-gold-2/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* View Details Action Indicator */}
        <div className="pt-3 border-t border-border-hairline/60 flex items-center justify-between text-xs font-mono text-gold-2 font-semibold">
          <span className="group-hover:underline">View Details</span>
          <span className="w-7 h-7 rounded-full bg-gold-2/10 flex items-center justify-center group-hover:bg-gold-2 group-hover:text-bg-deep transition-all duration-200">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
