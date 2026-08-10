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

    // Simulate standard async static form submit (Formspree/Web3Forms)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", contact: "", projectType: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-mid relative border-t border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`fade-in-section ${isInView ? "is-visible" : ""}`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-2 font-mono font-semibold">
                  {t.contact.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-content-primary mt-2 mb-4">
                  {t.contact.title}
                </h2>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                  {t.contact.subtitle}
                </p>
              </div>

              {/* Direct Info Box */}
              <div className="hairline-frame rounded-lg p-6 bg-card space-y-6">
                <div className="flex items-center gap-3 border-b border-border-hairline pb-4">
                  <LogoMark className="w-6 h-6" />
                  <span className="font-bold text-content-primary text-sm">
                    {t.contact.direct.title}
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-content-muted block">{t.contact.direct.emailLabel}:</span>
                    <a
                      href="mailto:unknownstack.bd@gmail.com"
                      className="text-gold-2 hover:underline text-sm font-semibold mt-0.5 block"
                    >
                      unknownstack.bd@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-content-muted block">{t.contact.direct.phoneLabel}:</span>
                    <a
                      href="https://wa.me/8801700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-2 hover:underline text-sm font-semibold mt-0.5 block"
                    >
                      +880 1700-000000 (WhatsApp)
                    </a>
                  </div>

                  <div>
                    <span className="text-content-muted block">{t.contact.direct.locationLabel}:</span>
                    <span className="text-content-primary mt-0.5 block">
                      {t.contact.direct.locationValue}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border-hairline flex items-center gap-2 text-[10px] text-green-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  {t.contact.direct.availability}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="hairline-frame rounded-lg p-8 bg-card shadow-2xl">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gold-1/20 border border-gold-2 text-gold-2 flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-content-primary">
                      Message Received
                    </h3>
                    <p className="text-sm text-content-secondary max-w-md mx-auto">
                      {t.contact.form.success}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-gold px-6 py-2.5 rounded text-xs uppercase font-bold tracking-wider mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full bg-bg-deep border border-border-hairline rounded px-4 py-3 text-sm text-content-primary focus:outline-none focus:border-gold-2 transition-colors"
                      />
                    </div>

                    {/* Contact (Email/Phone) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2">
                        {t.contact.form.contact} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder={t.contact.form.contactPlaceholder}
                        className="w-full bg-bg-deep border border-border-hairline rounded px-4 py-3 text-sm text-content-primary focus:outline-none focus:border-gold-2 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2">
                        {t.contact.form.projectType}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-bg-deep border border-border-hairline rounded px-4 py-3 text-sm text-content-primary focus:outline-none focus:border-gold-2 transition-colors"
                      >
                        <option value="">{t.contact.form.selectDefault}</option>
                        <option value="static">{t.contact.form.optionStatic}</option>
                        <option value="dynamic">{t.contact.form.optionDynamic}</option>
                        <option value="custom">{t.contact.form.optionCustom}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-2">
                        {t.contact.form.message} *
                      </label>
                      <textarea
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.form.messagePlaceholder}
                        className="w-full bg-bg-deep border border-border-hairline rounded px-4 py-3 text-sm text-content-primary focus:outline-none focus:border-gold-2 transition-colors"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 rounded text-xs font-bold uppercase tracking-wider text-center"
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
