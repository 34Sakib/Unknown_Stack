const en = {
  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    cta: "Start a project"
  },
  hero: {
    live: "Taking projects · Dhaka, Bangladesh",
    h1_1: "We build sites",
    h1_2: "that mean",
    h1_3: "business.",
    sub: "Fast, secure, premium websites built with Laravel and React, for businesses that want to be taken seriously online.",
    cta: "Start a project",
    seeWork: "See the work",
    meta: ["Laravel", "React", "MySQL", "30-day support included"],
    scroll: "Scroll"
  },
  statement: {
    text: "The client takes the spotlight. We build the part nobody sees: a Laravel backend, clean schemas and a fast React interface, with no templates and no lock-in.",
    stats: [
      { num: "10–20", unit: "", label: "working days to launch", color: "#E7C783", bar: 0.75 },
      { num: "30", unit: "", label: "days of free support", color: "#6be0c8", bar: 0.55 },
      { num: "100", unit: "%", label: "of the code is yours", color: "#b9a2ff", bar: 1 },
      { num: "10", unit: "+", label: "systems in production", color: "#ff9b7a", bar: 0.4 }
    ]
  },
  services: {
    title: "What we build",
    items: [
      {
        id: "business",
        title: "Business websites",
        desc: "Sites that earn trust in the first five seconds and turn visitors into clients.",
        bullets: [
          { label: "Custom UI/UX", note: "no templates" },
          { label: "SEO", note: "schema, semantic HTML" },
          { label: "Speed", note: "near-100 PageSpeed" }
        ],
        projectIndex: 4 // CodexLabAsia
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        desc: "Stores with cart, checkout, payments and an admin panel your team can run.",
        bullets: [
          { label: "Checkout", note: "cart, promo codes" },
          { label: "Payments", note: "Stripe, bKash, SSLCommerz" },
          { label: "Admin", note: "stock, orders, customers" }
        ],
        projectIndex: 2 // Kino Atelier
      },
      {
        id: "custom",
        title: "Custom web apps",
        desc: "Software built around how your company actually works: ERP, bookings, marketplaces.",
        bullets: [
          { label: "Backend", note: "Laravel API, Sanctum" },
          { label: "Interface", note: "React SPA" },
          { label: "Data", note: "MySQL, PostgreSQL" }
        ],
        projectIndex: 0 // ERP & HR Management
      }
    ]
  },
  work: {
    title: "Systems running in production"
  },
  process: {
    title: "Five steps, no surprises",
    desc: "You see progress at every stage through live preview links.",
    steps: [
      { title: "Discovery call", desc: "We map goals, audience, budget and timeline." },
      { title: "Design", desc: "Interactive prototypes, refined until you approve." },
      { title: "Development", desc: "Clean Laravel and React code, shared through live previews." },
      { title: "Launch", desc: "Speed, security, SSL and cross-browser testing." },
      { title: "Support", desc: "30 days of included help after launch." }
    ]
  },
  pricing: {
    title: "Fixed prices, no hidden fees",
    packages: [
      {
        id: "static",
        title: "Static website",
        price: "৳7,000",
        period: "One-time · 10 working days",
        isPopular: false,
        bullets: [
          "Landing page, portfolio or agency site",
          "React, Tailwind, Vite",
          "30 days free support",
          "100% code ownership"
        ],
        cta: "Get started"
      },
      {
        id: "dynamic",
        title: "Dynamic website",
        badge: "Most popular",
        price: "৳15,000",
        period: "One-time · 20 working days",
        isPopular: true,
        bullets: [
          "Admin dashboard you control",
          "Laravel, React and MySQL",
          "E-commerce, bookings, member portals",
          "30 days free support, 100% code ownership"
        ],
        cta: "Get started"
      }
    ]
  },
  faq: {
    title: "Questions we get",
    items: [
      {
        q: "How long does a project take?",
        a: "Static sites ship in 10 working days. Dynamic apps and custom systems take 15 to 20, depending on scope."
      },
      {
        q: "Do you support the site after delivery?",
        a: "Yes. Every project includes 30 days of free support for questions, configuration and small changes."
      },
      {
        q: "Can I update content myself?",
        a: "Yes. The Dynamic package includes an admin dashboard for products, images, text and prices. No code needed."
      },
      {
        q: "What if I need custom features?",
        a: "We scope ERPs, booking engines, marketplaces and API integrations with a proposal built around your workflow."
      }
    ]
  },
  contact: {
    title: "Tell us what you’re building.",
    email: "unknown.stack.dev@gmail.com",
    whatsappBtn: "WhatsApp 01570-208953",
    facebookBtn: "Facebook",
    formName: "Your name",
    formEmail: "Email",
    formMsg: "What do you need built?",
    formSubmit: "Send via WhatsApp"
  },
  footer: {
    copyright: "© 2026 Unknown Stack · Dhaka, Bangladesh",
    tagline: "Precision in every layer."
  },
  modal: {
    close: "✕",
    cta: "Build something similar"
  }
};

export default en;
