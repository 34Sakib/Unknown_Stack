import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import LogoMark from "./icons/LogoMark";

export default function Contact() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard async static form submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", contact: "", projectType: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-mid relative border-t border-border-hairline bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-bold px-3.5 py-1 rounded-full bg-card border border-gold-2/30 shadow-glow-gold">
                  {t.contact.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary font-heading mt-4 mb-4">
                  {t.contact.title}
                </h2>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                  {t.contact.subtitle}
                </p>
              </div>

              {/* Direct Info Box */}
              <div className="hairline-frame rounded-2xl p-7 bg-card/80 backdrop-blur-md space-y-6 shadow-card-luxury">
                <div className="flex items-center gap-3 border-b border-border-hairline/80 pb-4">
                  <LogoMark className="w-6 h-6 text-gold-2" />
                  <span className="font-extrabold text-content-primary text-sm font-heading">
                    {t.contact.direct.title}
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-content-muted block">{t.contact.direct.emailLabel}:</span>
                    <a
                      href={`mailto:${t.contact.direct.emailValue}`}
                      className="text-gold-2 hover:underline text-sm font-semibold mt-0.5 block tracking-wide"
                    >
                      {t.contact.direct.emailValue}
                    </a>
                  </div>

                  <div>
                    <span className="text-content-muted block">{t.contact.direct.phoneLabel}:</span>
                    <a
                      href={`https://wa.me/${t.contact.direct.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-2 hover:underline text-sm font-semibold mt-0.5 block tracking-wide"
                    >
                      {t.contact.direct.phoneValue}
                    </a>
                  </div>

                  <div>
                    <span className="text-content-muted block">{t.contact.direct.locationLabel}:</span>
                    <span className="text-content-primary mt-0.5 block font-medium">
                      {t.contact.direct.locationValue}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-hairline/80 flex items-center gap-2.5 text-xs text-green-400 font-mono font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-md shadow-green-400/50"></span>
                  {t.contact.direct.availability}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="hairline-frame rounded-2xl p-8 sm:p-10 bg-card/90 backdrop-blur-md shadow-card-luxury border border-white/10">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gold-2/20 border border-gold-2 text-gold-2 flex items-center justify-center mx-auto text-2xl font-bold shadow-glow-gold">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-content-primary font-heading">
                      Message Received
                    </h3>
                    <p className="text-sm text-content-secondary max-w-md mx-auto">
                      {t.contact.form.success}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-gold px-8 py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider mt-4 shadow-glow-gold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2 font-semibold">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full bg-bg-deep/80 border border-border-hairline rounded-xl px-4 py-3.5 text-sm text-content-primary focus:outline-none focus:border-gold-2 focus:ring-1 focus:ring-gold-2/50 transition-all font-sans"
                      />
                    </div>

                    {/* Contact (Email/Phone) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2 font-semibold">
                        {t.contact.form.contact} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder={t.contact.form.contactPlaceholder}
                        className="w-full bg-bg-deep/80 border border-border-hairline rounded-xl px-4 py-3.5 text-sm text-content-primary focus:outline-none focus:border-gold-2 focus:ring-1 focus:ring-gold-2/50 transition-all font-sans"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2 font-semibold">
                        {t.contact.form.projectType}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-bg-deep/80 border border-border-hairline rounded-xl px-4 py-3.5 text-sm text-content-primary focus:outline-none focus:border-gold-2 focus:ring-1 focus:ring-gold-2/50 transition-all font-sans"
                      >
                        <option value="">{t.contact.form.selectDefault}</option>
                        <option value="static">{t.contact.form.optionStatic}</option>
                        <option value="dynamic">{t.contact.form.optionDynamic}</option>
                        <option value="custom">{t.contact.form.optionCustom}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2 font-semibold">
                        {t.contact.form.message} *
                      </label>
                      <textarea
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.form.messagePlaceholder}
                        className="w-full bg-bg-deep/80 border border-border-hairline rounded-xl px-4 py-3.5 text-sm text-content-primary focus:outline-none focus:border-gold-2 focus:ring-1 focus:ring-gold-2/50 transition-all font-sans"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest text-center shadow-glow-gold hover:shadow-glow-gold-lg cursor-pointer"
                    >
                      {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
