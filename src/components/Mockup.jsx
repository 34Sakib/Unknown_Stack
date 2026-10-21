import React from "react";
import { PROJECTS } from "../data/projects";

export default function Mockup({ projectIndex, className = "" }) {
  const project = PROJECTS[projectIndex];
  if (!project) return null;

  return (
    <div className={`mk ${className}`}>
      <div className="bar">
        <i></i>
        <i></i>
        <i></i>
        <b>{project.shortTitle}</b>
      </div>
      <div className="fr">
        <img
          src={project.image}
          alt={`${project.fullTitle || project.shortTitle} website screenshot`}
          decoding="async"
          draggable="false"
        />
      </div>
    </div>
  );
}
