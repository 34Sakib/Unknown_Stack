import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import LogoLockup from "./icons/LogoLockup";
import LanguageToggle from "./LanguageToggle";
import Footer from "./Footer";

export default function ProjectDetailPage({ project, onBack, onNavigateProject, onNavigateContact }) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  const projects = t.work.projects;
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Helper to categorize skills & tech tags
  const categorizeSkills = (tags) => {
    const frontend = tags.filter(t => /react|vite|tailwind|blade|bootstrap|jquery|i18n|zustand/i.test(t));
    const backend = tags.filter(t => /laravel|php|nestjs|typescript|spatie|rest api/i.test(t));
    const database = tags.filter(t => /mysql|postgres|sqlite|typeorm/i.test(t));
    const other = tags.filter(t => !frontend.includes(t) && !backend.includes(t) && !database.includes(t));
    
    return { frontend, backend, database, other };
  };

  const skills = categorizeSkills(project.tags);

  return (
    <div className="min-h-screen bg-bg-deep text-content-primary selection:bg-gold-1 selection:text-white flex flex-col justify-between">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-bg-deep/90 backdrop-blur-md border-b border-border-hairline py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-2 hover:text-content-primary transition-colors px-3.5 py-2 rounded-lg bg-card border border-border-hairline hover:border-gold-2/60"
          >
            ← {lang === "bn" ? "পোর্টফোলিওতে ফিরে যান" : "Back to Selected Work"}
          </button>

          <LogoLockup />

          <LanguageToggle />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Project Header Info */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase font-mono tracking-widest text-gold-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-gold-2/40 font-bold shadow-glow-gold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-content-primary bg-bg-elevated/80 px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
              ⚡ {project.metrics}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-content-primary tracking-tight leading-tight font-heading">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-3xl font-normal">
            {project.desc}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {project.demoLink && project.demoLink !== "#" && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>{lang === "bn" ? "লাইভ ডেমো দেখুন" : "Live Demo"}</span>
                <span>↗</span>
              </a>
            )}

            <button
              onClick={onNavigateContact || onBack}
              className="px-6 py-3.5 rounded-lg bg-bg-elevated hover:bg-card border border-border-hairline hover:border-gold-2/60 text-xs font-mono text-content-primary transition-all cursor-pointer"
            >
              {lang === "bn" ? "প্রজেক্ট সার্ভিস শুরু করুন" : "Start Project Consultation"}
            </button>
          </div>
        </div>

        {/* Edge-to-Edge Mock Browser Frame (Fully Filled Image) */}
        <div className="hairline-frame rounded-2xl overflow-hidden bg-bg-mid shadow-card-luxury border border-white/10">
          {/* Mock Browser Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-bg-deep border-b border-border-hairline">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <div className="text-[11px] font-mono text-content-muted truncate max-w-xs sm:max-w-md">
              https://unknownstack.com/projects/{project.id}
            </div>
            <div className="text-xs font-mono text-gold-2 font-semibold">Full Edge-to-Edge View</div>
          </div>

          {/* Edge-to-Edge Image Container (Zero Free Space) */}
          <div className="w-full bg-bg-mid overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[380px] sm:h-[520px] lg:h-[620px] object-cover object-top block"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            ) : null}
          </div>
        </div>

        {/* Deep Descriptive Specs & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Project Overview & Features */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview & Purpose */}
            <div className="hairline-frame rounded-2xl p-8 bg-card space-y-4">
              <h3 className="text-xl font-bold text-content-primary flex items-center gap-2.5 border-b border-border-hairline pb-4">
                <span className="text-gold-2 text-lg">✦</span>
                {lang === "bn" ? "প্রজেক্ট বিবরণ ও উদ্দেশ্য" : "Project Overview & Business Goal"}
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed font-normal">
                {project.desc}
              </p>
              <p className="text-xs font-mono text-content-muted leading-relaxed pt-2">
                {lang === "bn"
                  ? "উচ্চমানের কোডিং ও আধুনিক আর্কিটেকচারের মাধ্যমে ব্যবহারকারীর সর্বোচ্চ সন্তুষ্টি ও দীর্ঘস্থায়ী পারফরম্যান্স নিশ্চিত করা হয়েছে।"
                  : "Engineered with modern decoupled architecture to guarantee maximum speed, high security standards, and seamless user experience."}
              </p>
            </div>

            {/* Detailed Features Breakdown */}
            <div className="hairline-frame rounded-2xl p-8 bg-card space-y-6">
              <h3 className="text-xl font-bold text-content-primary flex items-center gap-2.5 border-b border-border-hairline pb-4">
                <span className="text-gold-2 text-lg">✦</span>
                {lang === "bn" ? "আর্কিটেকচার ও কাস্টম ফিচারসমূহ" : "Architectural & Core Features"}
              </h3>

              {project.features && project.features.length > 0 ? (
                <div className="space-y-4">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-bg-deep border border-border-hairline/70 hover:border-gold-2/50 transition-all flex items-start gap-3.5 group"
                    >
                      <span className="w-6 h-6 rounded-lg bg-gold-gradient/20 border border-gold-2/60 text-gold-2 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-gold-gradient group-hover:text-bg-deep transition-all">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-content-secondary leading-relaxed font-mono">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

          </div>

          {/* Right Column: Categorized Skills & Technologies Used */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Categorized Skills & Tech Stack */}
            <div className="hairline-frame rounded-2xl p-6 bg-card space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold-2 font-bold border-b border-border-hairline pb-3">
                {lang === "bn" ? "ব্যবহৃত টেকনোলজি ও স্কিলস" : "Skills & Technologies Used"}
              </h4>

              {/* Frontend Skills */}
              {skills.frontend.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-content-muted block">
                    Frontend Engineering:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.frontend.map((s, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-deep border border-border-hairline text-gold-2 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend Skills */}
              {skills.backend.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-border-hairline/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-content-muted block">
                    Backend Architecture:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.backend.map((s, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-deep border border-border-hairline text-gold-2 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Database Skills */}
              {skills.database.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-border-hairline/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-content-muted block">
                    Database & ORM:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.database.map((s, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-deep border border-border-hairline text-gold-2 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Skills */}
              {skills.other.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-border-hairline/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-content-muted block">
                    Core Specifications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.other.map((s, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-deep border border-border-hairline text-steel-2 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quality Standard Info */}
            <div className="hairline-frame rounded-2xl p-6 bg-card space-y-3 font-mono text-xs text-content-muted">
              <div className="text-content-primary font-bold text-sm mb-2 pb-2 border-b border-border-hairline">
                System Standards
              </div>
              <div className="flex items-center justify-between">
                <span>Codebase:</span>
                <span className="text-gold-2">100% Client Owned</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Performance:</span>
                <span className="text-gold-2">Light Speed Load</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Security:</span>
                <span className="text-green-400">Enterprise Grade</span>
              </div>
            </div>

          </div>

        </div>

        {/* Previous / Next Project Nav */}
        <div className="pt-8 border-t border-border-hairline flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigateProject(prevProject)}
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border-hairline hover:border-gold-2/60 transition-all text-left group flex-1 max-w-xs"
          >
            <span className="text-gold-2 text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <div className="truncate">
              <span className="text-[10px] font-mono text-content-muted uppercase block">
                {lang === "bn" ? "পূর্ববর্তী প্রজেক্ট" : "Previous Project"}
              </span>
              <span className="text-xs font-bold text-content-primary group-hover:text-gold-2 transition-colors truncate block">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={() => onNavigateProject(nextProject)}
            className="flex items-center justify-end gap-3 p-4 rounded-xl bg-card border border-border-hairline hover:border-gold-2/60 transition-all text-right group flex-1 max-w-xs"
          >
            <div className="truncate">
              <span className="text-[10px] font-mono text-content-muted uppercase block">
                {lang === "bn" ? "পরবর্তী প্রজেক্ট" : "Next Project"}
              </span>
              <span className="text-xs font-bold text-content-primary group-hover:text-gold-2 transition-colors truncate block">
                {nextProject.title}
              </span>
            </div>
            <span className="text-gold-2 text-xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Direct Consultation Banner */}
        <div className="hairline-frame rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-bg-elevated via-card to-bg-elevated text-center space-y-5 shadow-card-luxury border border-gold-2/30">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-content-primary font-heading">
            {lang === "bn" ? "আপনার প্রজেক্টের জন্য যোগাযোগ করুন" : "Ready for your custom web application?"}
          </h3>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl mx-auto font-normal">
            {lang === "bn"
              ? "Unknown Stack দিয়ে আপনার ব্যবসার জন্য তৈরি করুন দ্রুত, নিরাপদ ও নির্ভরযোগ্য ওয়েবসাইট।"
              : "Let Unknown Stack build a fast, secure, and custom Laravel + React website for your business."}
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateContact || onBack}
              className="btn-gold px-9 py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest inline-block cursor-pointer shadow-glow-gold hover:shadow-glow-gold-lg"
            >
              {lang === "bn" ? "প্রজেক্ট শুরু করুন" : "Start Project Consultation"}
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
