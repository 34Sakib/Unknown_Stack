import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Unknown Stack, I’m ${name} (${email}).\n${message}`;
    const url = `https://wa.me/8801570208953?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="ct" id="contact">
      <div className="w">
        <h2>{t.contact.title}</h2>
        <a className="m" href={`mailto:${t.contact.email}`}>
          {t.contact.email}
        </a>

        <div className="row">
          <a
            className="btn"
            href="https://wa.me/8801570208953"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contact.whatsappBtn}
          </a>
          <a
            className="btn o"
            href="https://www.facebook.com/profile.php?id=61592640717418"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contact.facebookBtn}
          </a>
        </div>

        <form id="cf" onSubmit={handleSubmit}>
          <input
            name="n"
            placeholder={t.contact.formName}
            aria-label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            name="e"
            type="email"
            placeholder={t.contact.formEmail}
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="m"
            rows={4}
            placeholder={t.contact.formMsg}
            aria-label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="btn" type="submit">
            {t.contact.formSubmit}
          </button>
        </form>
      </div>
    </section>
  );
}
