const bn = {
  nav: {
    services: "সেবা",
    work: "কাজ",
    process: "প্রক্রিয়া",
    pricing: "মূল্য",
    faq: "প্রশ্ন",
    contact: "যোগাযোগ",
    cta: "যোগাযোগ"
  },
  hero: {
    live: "সবসময় খোলা, ঢাকা",
    h1_1: "আমরা তৈরি করি এমন",
    h1_2: "ওয়েবসাইট, যা",
    h1_3: "সত্যিই কাজ করে।",
    sub: "Laravel ও React দিয়ে দ্রুত, নিরাপদ ও প্রিমিয়ম ওয়েবসাইট।",
    cta: "প্রকল্প শুরু করুন",
    seeWork: "কাজ দেখুন",
    meta: ["Laravel", "React", "MySQL", "30-day support included"],
    scroll: "Scroll"
  },
  statement: {
    text: "ক্লায়েন্ট থাকে স্পটলাইটে। আমরা গড়ি অদৃশ্য ভিত্তি: Laravel ব্যাকএন্ড, পরিচ্ছন্ন ডাটাবেস, আর দ্রুত React ইন্টারফেস।",
    stats: [
      { num: "10–20", unit: "", label: "কার্যদিবসে ডেলিভারি", color: "#E7C783", bar: 0.75 },
      { num: "30", unit: "", label: "দিন ফ্রি সাপোর্ট", color: "#6be0c8", bar: 0.55 },
      { num: "100", unit: "%", label: "কোড আপনার", color: "#b9a2ff", bar: 1 },
      { num: "10", unit: "+", label: "প্রোডাকশন প্রকল্প", color: "#ff9b7a", bar: 0.4 }
    ]
  },
  services: {
    title: "যা আমরা তৈরি করি",
    items: [
      {
        id: "business",
        title: "বিজনেস ওয়েবসাইট",
        desc: "বিশ্বাস গড়ে এমন সাইট।",
        bullets: [
          { label: "Custom UI/UX", note: "no templates" },
          { label: "SEO", note: "schema, semantic HTML" },
          { label: "Speed", note: "near-100 PageSpeed" }
        ],
        projectIndex: 4
      },
      {
        id: "ecommerce",
        title: "ই-কমার্স",
        desc: "কার্ট থেকে পেমেন্ট, সবই।",
        bullets: [
          { label: "Checkout", note: "cart, promo codes" },
          { label: "Payments", note: "Stripe, bKash, SSLCommerz" },
          { label: "Admin", note: "stock, orders, customers" }
        ],
        projectIndex: 2
      },
      {
        id: "custom",
        title: "কাস্টম ওয়েব অ্যাপ",
        desc: "আপনার ওয়ার্কফ্লো অনুযায়ী।",
        bullets: [
          { label: "Backend", note: "Laravel API, Sanctum" },
          { label: "Interface", note: "React SPA" },
          { label: "Data", note: "MySQL, PostgreSQL" }
        ],
        projectIndex: 0
      }
    ]
  },
  work: {
    title: "চলমান সিস্টেম"
  },
  process: {
    title: "পাঁচ ধাপ",
    desc: "প্রতিটি ধাপে আপনি জানেন কী হচ্ছে।",
    steps: [
      { title: "ডিসকভারি কল", desc: "লক্ষ্য, বাজেট ও সময়।" },
      { title: "ডিজাইন", desc: "অনুমোদন পর্যন্ত প্রোটোটাইপ।" },
      { title: "ডেভেলপমেন্ট", desc: "পরিচ্ছন্ন Laravel + React।" },
      { title: "লঞ্চ", desc: "স্পিড, সিকিউরিটি, SSL।" },
      { title: "সাপোর্ট", desc: "৩০ দিনের সহায়তা।" }
    ]
  },
  pricing: {
    title: "স্বচ্ছ দাম",
    packages: [
      {
        id: "static",
        title: "স্ট্যাটিক",
        price: "৳7,000",
        period: "এককালীন · ১০ কার্যদিবস",
        isPopular: false,
        bullets: [
          "Landing page, portfolio or agency site",
          "React, Tailwind, Vite",
          "30 days free support",
          "100% code ownership"
        ],
        cta: "শুরু করুন"
      },
      {
        id: "dynamic",
        title: "ডাইনামিক",
        badge: "জনপ্রিয়",
        price: "৳15,000",
        period: "এককালীন · ২০ কার্যদিবস",
        isPopular: true,
        bullets: [
          "Admin dashboard you control",
          "Laravel, React and MySQL",
          "E-commerce, bookings, member portals",
          "30 days free support, 100% code ownership"
        ],
        cta: "শুরু করুন"
      }
    ]
  },
  faq: {
    title: "প্রশ্নোত্তর",
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
    title: "আসুন কথা বলি",
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

export default bn;
