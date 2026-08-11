const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    work: "Work",
    process: "Process",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get a Quote",
  },
  hero: {
    eyebrow: "Web Development Studio",
    titleStart: "We build websites that ",
    titleHighlight: "mean business.",
    subtitle: "Unknown Stack builds fast, secure, premium-quality websites with Laravel and React for businesses that want to be taken seriously online.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Work",
    badgeStack: "Built with React + Laravel",
    highlights: [
      {
        tag: "CORE TECH STACK",
        title: "Laravel 11 + React 18",
        desc: "Modern, decoupled architecture built for ultra-fast performance, rock-solid security, and seamless scalability."
      },
      {
        tag: "CRAFT PHILOSOPHY",
        title: "Zero Bloat, 100% Owned",
        desc: "No heavy templates or slow page builders. Clean, maintainable codebase that belongs entirely to your business."
      },
      {
        tag: "GUARANTEED DELIVERY",
        title: "10 to 20 Working Days",
        desc: "Structured milestone workflows ensure on-time delivery with complimentary 30-day post-launch support."
      }
    ]
  },
  about: {
    tag: "THE PHILOSOPHY",
    title: "Built in layers you never see.",
    body: "Unknown Stack operates on quiet luxury: we don't put ego in front of the work. Clients get the credit while our craft speaks quietly. A stable, invisible foundation holds up the polished interface you see.",
    stats: [
      {
        title: "Fast-loading by default",
        subtitle: "Zero bloat, light speed score"
      },
      {
        title: "Secure, modern architecture",
        subtitle: "Laravel + React rock-solid stack"
      },
      {
        title: "Fully responsive",
        subtitle: "Flawless on phone, tablet & desktop"
      },
      {
        title: "Support after delivery",
        subtitle: "30 days post-launch assistance"
      }
    ]
  },
  services: {
    tag: "SERVICES",
    title: "Crafted for performance and growth.",
    footnote: "Built with React.js + Laravel.",
    items: [
      {
        id: "business",
        title: "Business Website",
        desc: "Clean, professional sites that build trust and convert visitors into long-term clients.",
        features: ["Custom UI Design", "SEO Optimized", "Fast Performance", "Mobile Responsive"],
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        desc: "Full online stores with cart, smooth checkout, payment integration, and intuitive admin panel.",
        features: ["Cart & Checkout", "Custom Admin Panel", "Payment Integration", "Inventory Management"],
      },
      {
        id: "custom",
        title: "Custom Web App",
        desc: "Bespoke web applications and software systems built around your company's exact workflow.",
        features: ["Laravel API Backend", "React Dynamic UI", "Tailored Database", "Scalable System"],
      }
    ]
  },
  work: {
    tag: "PORTFOLIO",
    title: "Selected Work",
    subtitle: "Real-world web applications and e-commerce platforms engineered with Laravel and React.",
    viewProject: "View Project Details →",
    closeModal: "Close Details",
    projects: [
      {
        id: 12,
        title: "Enterprise ERP & HR Management System",
        category: "Enterprise System",
        desc: "Full-stack enterprise resource planning platform featuring multi-company RBAC, automated payroll, HRIS, CRM, inventory, and financial accounting modules.",
        features: [
          "Architected a full-stack Enterprise Resource Planning (ERP) platform utilizing Laravel 12, Blade components, and Tailwind CSS 4.",
          "Built comprehensive HRIS & Workforce modules including employee directory, web punch attendance, shift scheduling, and leave approvals.",
          "Engineered an automated payroll system with customizable salary structures, loans/advances management, and PDF payslip generation.",
          "Integrated core enterprise operational tools: Inventory with multi-warehouse support, CRM deals pipeline, and Project time-tracking.",
          "Designed role-based access control (RBAC) with Spatie permissions, multi-tenant company data scoping, and activity audit logging."
        ],
        image: "/projects/erp.png",
        tags: ["Laravel 12", "PHP 8.2", "Tailwind CSS 4", "Vite 7", "Spatie RBAC", "Blade", "SQLite / MySQL"],
        metrics: "Multi-Tenant RBAC · Automated Payroll",
        demoLink: "#"
      },
      {
        id: 11,
        title: "Nuvara E-commerce Platform",
        category: "E-commerce Store",
        desc: "Full-stack modern e-commerce platform with multi-language RTL support, promo code engine, and dynamic theme customization.",
        features: [
          "Built a full-stack e-commerce web app with a React 19 SPA frontend and Laravel RESTful API backend.",
          "Implemented secure user authentication, product catalog, customer reviews, wishlist management, and order processing.",
          "Developed an interactive cart and checkout workflow with real-time promo code engine powered by Zustand.",
          "Integrated multi-language localization (i18n) supporting English, Spanish, Bengali, and native RTL Arabic layout.",
          "Designed a mobile-responsive UI with light/dark theme toggle, Framer Motion animations, and an admin dashboard."
        ],
        image: "/projects/Nuvara.png",
        tags: ["React 19", "Vite", "Laravel 12", "Tailwind CSS", "Zustand", "i18next", "MySQL"],
        metrics: "Multi-language i18n & RTL · Zustand Cart",
        demoLink: "#"
      },
      {
        id: 10,
        title: "Kino Atelier",
        category: "Luxury E-commerce",
        desc: "Elegant e-commerce storefront specializing in curated handcrafted travertine, white oak, and fluted earthenware home decor.",
        features: [
          "Designed and developed a high-fidelity Single Page Application (SPA) frontend focused on premium design aesthetics, fluid transitions, and dynamic scroll-responsive navigation.",
          "Built a comprehensive administration dashboard panel utilizing Filament to manage product inventory, categories, active coupon codes, and shipping logs.",
          "Developed secure RESTful API endpoints using Laravel 12 to handle user authentication, product catalogs, and cart state management.",
          "Integrated Stripe Checkout for seamless, secure transaction processing and payment verification.",
          "Optimized database models and media libraries to manage product variations, galleries, and client review media."
        ],
        image: "/projects/kino.png",
        tags: ["Laravel 12", "React.js", "Tailwind CSS", "Zustand", "MySQL", "Stripe API"],
        metrics: "Stripe Checkout · Filament Admin",
        demoLink: "#"
      },
      {
        id: 1,
        title: "FruitMart E-commerce",
        category: "E-commerce Store",
        desc: "Laravel-based platform for fresh fruit sales with inventory, orders, and vendor management.",
        features: [
          "Built a complete e-commerce platform for online fruit sales.",
          "Implemented secure authentication, product management, cart, and order system.",
          "Developed a custom admin dashboard for product and vendor management.",
          "Designed responsive UI for mobile and desktop users."
        ],
        image: "/projects/fruitmart.png",
        tags: ["Laravel 10", "MySQL", "JavaScript", "Bootstrap 5"],
        metrics: "Complete Order & Vendor Pipeline",
        demoLink: "#"
      },
      {
        id: 2,
        title: "CodexLabAsia Business Hub",
        category: "Corporate System",
        desc: "Official business system for CodexLabAsia, featuring CMS, portfolios, and job tracking.",
        features: [
          "Developed a Laravel-based business management system with frontend and admin modules.",
          "Implemented role-based authentication using Laravel Sanctum and Spatie Permission.",
          "Created CMS for services, portfolio, team, and career sections.",
          "Integrated job application system with file uploads and application tracking."
        ],
        image: "/projects/codexlabasia.png",
        tags: ["Laravel", "MySQL", "Blade", "Bootstrap 5", "jQuery"],
        metrics: "Job Application Tracking & CMS",
        demoLink: "#"
      },
      {
        id: 3,
        title: "CRM E-Commerce Suite (ShopVerse)",
        category: "Custom Web App",
        desc: "Full-stack e-commerce system featuring API-driven checkouts and role access permissions.",
        features: [
          "Designed and implemented RESTful APIs to handle product management, cart, and order processing.",
          "Built dynamic, responsive user interfaces with React.js for product browsing and checkout.",
          "Implemented secure authentication and role-based access for users and administrators.",
          "Integrated product inventory management, order tracking, and admin dashboard functionalities."
        ],
        image: "/projects/crm.png?v=2",
        tags: ["Laravel 10", "React.js", "REST API", "MySQL", "Bootstrap 5"],
        metrics: "RESTful API & Dynamic React UI",
        demoLink: "#"
      },
      {
        id: 4,
        title: "Coffee Blend Cafe",
        category: "Hospitality System",
        desc: "Responsive cafe customer ordering and menu administration site.",
        features: [
          "Built a coffee shop website with user registration and ordering system.",
          "Developed admin dashboard for menu and content management.",
          "Designed responsive pages for menu, services, about, and contact sections."
        ],
        image: "/projects/coffeeblend.png?v=2",
        tags: ["PHP", "MySQL", "JavaScript", "Bootstrap 5"],
        metrics: "Order Pipeline & Menu Admin",
        demoLink: "#"
      },
      {
        id: 6,
        title: "Hospital Management System",
        category: "Healthcare System",
        desc: "Laravel-based panel for doctor assignments, appointments, and billing.",
        features: [
          "Designed complete relational database schema for doctor scheduling and patient records.",
          "Implemented secure registration pipelines and patient scheduling controls.",
          "Built clean dashboard control panels using Bootstrap 5 for administrators, doctors, and patients."
        ],
        image: "/projects/erp.png",
        tags: ["PHP", "Laravel", "Bootstrap 5", "MySQL"],
        metrics: "Doctor & Patient Schedule Control",
        demoLink: "#"
      },
      {
        id: 8,
        title: "Online Learning System Backend",
        category: "API Backend",
        desc: "Structured NestJS API backend for student registrations and course enrollments.",
        features: [
          "Designed and implemented structured REST APIs using NestJS and TypeScript.",
          "Configured secure JWT role-based authentication guards.",
          "Structured entity relationships and database operations with PostgreSQL using TypeORM."
        ],
        image: "/projects/codexlabasia.png",
        tags: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
        metrics: "NestJS + TypeORM PostgreSQL API",
        demoLink: "#"
      }
    ]
  },
  process: {
    tag: "METHODOLOGY",
    title: "How We Work",
    steps: [
      {
        number: "01",
        title: "Discovery Call",
        desc: "We analyze your business goals, target audience, budget, and project timeline to map out the strategy."
      },
      {
        number: "02",
        title: "Design",
        desc: "Interactive visual wireframes and prototypes crafted and refined until you give 100% approval."
      },
      {
        number: "03",
        title: "Development",
        desc: "Clean, robust code constructed in Laravel and React with regular live preview updates."
      },
      {
        number: "04",
        title: "Launch",
        desc: "Rigorously tested for speed, security, and mobile responsiveness before deploying to production."
      },
      {
        number: "05",
        title: "Support",
        desc: "30 days post-launch assistance, regular security maintenance, and dedicated guidance."
      }
    ]
  },
  pricing: {
    tag: "INVESTMENT",
    title: "Simple, Transparent Packages",
    footnote: "Not sure which one fits? Get a free consultation.",
    packages: [
      {
        id: "static",
        title: "Static Website",
        price: "৳7,000",
        period: "one-time",
        delivery: "10 working days",
        isPopular: false,
        bullets: [
          "Professional & clean design",
          "Fast loading speed",
          "Mobile-friendly on all devices",
          "Great for business/portfolio/service pages",
          "Delivery within 10 working days"
        ],
        cta: "Choose Static Package"
      },
      {
        id: "dynamic",
        title: "Dynamic Website",
        badge: "Most Popular",
        price: "৳15,000",
        period: "one-time",
        delivery: "20 working days",
        isPopular: true,
        bullets: [
          "Admin panel included",
          "Database-driven system",
          "Built with Laravel + React",
          "E-commerce / booking-ready",
          "Scales with your business",
          "Delivery within 20 working days"
        ],
        cta: "Choose Dynamic Package"
      }
    ]
  },
  faq: {
    tag: "QUESTIONS",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "How long does a project take?",
        a: "Static websites are delivered within 10 working days, while dynamic web applications typically take 15 to 20 working days depending on complexity."
      },
      {
        q: "Do you offer support after delivery?",
        a: "Yes, all projects include 30 days of complimentary post-launch support to assist with operational questions or minor adjustments."
      },
      {
        q: "Can I update the website content myself?",
        a: "With our Dynamic package, you get a custom, user-friendly admin panel where you can easily update products, images, and text without writing code."
      },
      {
        q: "What if I need custom web application features?",
        a: "We specialize in bespoke Laravel + React systems! Send us your requirements for a custom, tailored proposal."
      }
    ]
  },
  contact: {
    tag: "GET IN TOUCH",
    title: "Let's build something that works.",
    subtitle: "Ready to elevate your online presence? Send us a message or request a direct consultation.",
    form: {
      name: "Your Name",
      namePlaceholder: "Your name",
      contact: "Email or WhatsApp Number",
      contactPlaceholder: "your email@gmail.com",
      projectType: "Project Type",
      selectDefault: "Select project type...",
      optionStatic: "Static Website (৳7,000)",
      optionDynamic: "Dynamic Website (৳15,000)",
      optionCustom: "Custom Solution / Not sure",
      message: "Project Details",
      messagePlaceholder: "Briefly describe your project goals, scope, and target launch date...",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Thank you! Your message has been received. We will get back to you within 24 hours.",
    },
    direct: {
      title: "Direct Channels",
      emailLabel: "Email Us",
      emailValue: "unknown.stack.dev@gmail.com",
      phoneLabel: "Phone / WhatsApp",
      phoneValue: "01570-208953",
      phoneRaw: "8801570208953",
      locationLabel: "Studio Base",
      locationValue: "Dhaka, Bangladesh",
      availability: "Always Open",
    }
  },
  footer: {
    tagline: "Precision in every layer.",
    navHeading: "Navigation",
    legalHeading: "Tech Stack",
    copyright: "© 2026 Unknown Stack. All rights reserved.",
  }
};

export default en;
