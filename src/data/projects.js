import { IMAGES } from "./assets";

export const PROJECTS = [
  {
    id: 0,
    shortTitle: "ERP & HR Management",
    category: "Enterprise system",
    badge: "",
    highlight: "Multi-tenant RBAC · Automated payroll",
    desc: "Full-stack enterprise resource planning platform with multi-company role-based access control, automated payroll, HRIS workforce management, CRM deal pipelines and inventory tracking.",
    tags: ["Laravel 12", "PHP 8.2", "Tailwind CSS 4", "Vite 7", "Spatie RBAC", "Blade", "SQLite / MySQL"],
    deliverables: [
      "HRIS with employee directories, web punch attendance, shift scheduling and leave approvals",
      "Automated payroll with custom salary matrices, loan advances and PDF payslips",
      "Multi-warehouse inventory tracking and CRM deal pipeline",
      "Spatie RBAC with multi-tenant company data isolation and audit logging"
    ],
    imageKey: "erp",
    image: IMAGES.erp,
    fullTitle: "Enterprise ERP & HR Management System"
  },
  {
    id: 1,
    shortTitle: "Nuvara",
    category: "E-commerce store",
    badge: "",
    highlight: "Multi-language i18n & RTL · Zustand cart",
    desc: "Modern e-commerce platform with dynamic theme switching, RTL Arabic layout support, an interactive cart and a promo code engine.",
    tags: ["React 19", "Vite", "Laravel 12", "Tailwind CSS", "Zustand", "i18next", "MySQL"],
    deliverables: [
      "React 19 SPA frontend integrated with a Laravel 12 REST API",
      "Real-time client-side cart and promo code engine powered by Zustand",
      "4-language i18n: English, Spanish, Bengali and native RTL Arabic",
      "Secure authentication, customer reviews, wishlist and admin dashboard"
    ],
    imageKey: "nuvara",
    image: IMAGES.nuvara,
    fullTitle: "Nuvara E-commerce Platform"
  },
  {
    id: 2,
    shortTitle: "Kino Atelier",
    category: "Luxury e-commerce",
    badge: "",
    highlight: "Stripe Checkout · Filament Admin",
    desc: "High-end boutique storefront for handcrafted travertine, white oak and fluted earthenware home decor.",
    tags: ["Laravel 12", "React.js", "Tailwind CSS", "Zustand", "MySQL", "Stripe API"],
    deliverables: [
      "High-fidelity SPA with fluid transitions and scroll-responsive navigation",
      "Filament Admin panel for inventory, categories, coupons and shipping logs",
      "Secure Laravel 12 REST API with Stripe Checkout integration",
      "Optimized schema for product variations, galleries and reviews"
    ],
    imageKey: "kino",
    image: IMAGES.kino,
    fullTitle: "Kino Atelier"
  },
  {
    id: 3,
    shortTitle: "FruitMart",
    category: "E-commerce store",
    badge: "",
    highlight: "Complete order & vendor pipeline",
    desc: "Online fruit marketplace with inventory, shopping cart, multi-vendor support and order dispatch pipelines.",
    tags: ["Laravel 10", "MySQL", "JavaScript", "Bootstrap 5"],
    deliverables: [
      "Complete vendor and inventory management workflow",
      "Order tracking, customer authentication and a responsive mobile-first UI"
    ],
    imageKey: "fruit",
    image: IMAGES.fruit,
    fullTitle: "FruitMart E-commerce"
  },
  {
    id: 4,
    shortTitle: "CodexLabAsia",
    category: "Corporate system",
    badge: "",
    highlight: "Job application tracking & CMS",
    desc: "Corporate portal with a dynamic content management system, team directory, portfolio showcase and an applicant tracking system for careers.",
    tags: ["Laravel", "MySQL", "Blade", "Bootstrap 5", "jQuery"],
    deliverables: [
      "Role-based authentication using Laravel Sanctum and Spatie Permission",
      "Dynamic CMS for services, case studies and corporate blogs",
      "Career portal with resume upload and application tracking"
    ],
    imageKey: "codex",
    image: IMAGES.codex,
    fullTitle: "CodexLabAsia Business Hub"
  },
  {
    id: 5,
    shortTitle: "ShopVerse CRM",
    category: "Custom web app",
    badge: "",
    highlight: "RESTful API & dynamic React UI",
    desc: "Full-stack e-commerce engine with integrated CRM capabilities, customer relationship management and API checkout workflows.",
    tags: ["Laravel 10", "React.js", "REST API", "MySQL", "Bootstrap 5"],
    deliverables: [
      "Decoupled REST API backend handling cart, orders and authentication",
      "Dynamic React.js UI for responsive product browsing and checkout",
      "Administrative dashboard for order tracking and user roles"
    ],
    imageKey: "crm",
    image: IMAGES.crm,
    fullTitle: "CRM E-Commerce Suite (ShopVerse)"
  },
  {
    id: 6,
    shortTitle: "Coffee Blend Cafe",
    category: "Hospitality system",
    badge: "",
    highlight: "Order pipeline & menu admin",
    desc: "Digital ordering and table reservation system for cafes and restaurants, with a real-time menu dashboard.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap 5"],
    deliverables: [
      "Customer ordering flow with user accounts and reservation booking",
      "Admin dashboard for food and beverage menu management and content updates"
    ],
    imageKey: "coffee",
    image: IMAGES.coffee,
    fullTitle: "Coffee Blend Cafe"
  },
  {
    id: 7,
    shortTitle: "Hospital Management",
    category: "Healthcare system",
    badge: "",
    highlight: "Doctor & patient schedule control",
    desc: "Clinical management platform coordinating doctor rosters, outpatient bookings, patient record histories and billing pipelines.",
    tags: ["PHP", "Laravel", "Bootstrap 5", "MySQL"],
    deliverables: [
      "Relational schema linking doctors, specialties, appointments and billing",
      "Dedicated role-based portals for administrators, doctors and patients"
    ],
    imageKey: "hospital",
    image: IMAGES.hospital,
    fullTitle: "Hospital Management System"
  },
  {
    id: 8,
    shortTitle: "Online Learning API",
    category: "API backend",
    badge: "",
    highlight: "NestJS + TypeORM PostgreSQL API",
    desc: "Scalable modular backend API powering student registrations, course catalogs, video progress tracking and JWT role-guarded endpoints.",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
    deliverables: [
      "Modular enterprise architecture using NestJS dependency injection",
      "JWT role authentication guards protecting instructor and admin routes",
      "PostgreSQL database management with TypeORM migrations and entities"
    ],
    imageKey: "learning",
    image: IMAGES.learning,
    fullTitle: "Online Learning System Backend"
  },
  {
    id: 9,
    shortTitle: "Mentors Global",
    category: "Education & migration portal",
    badge: "",
    highlight: "Courses · migration · PTE & IELTS coaching",
    desc: "Consultancy website for Australian education, migration and PTE / IELTS coaching, with trust statistics and student success stories.",
    tags: [],
    deliverables: [
      "Education, migration, PTE and IELTS coaching sections",
      "Trust statistics and filterable student success stories",
      "Free consultation booking with sign-up and login"
    ],
    imageKey: "mentors",
    image: IMAGES.mentors,
    fullTitle: "Mentors Global"
  }
];

// 3D Hero Cluster Layout
export const CLUSTER_WINDOWS = [
  { index: 0, left: 0, top: 3, origin: 'left top', factor: -0.03 },
  { index: 2, left: 0, top: 37, origin: 'left center', factor: 0.02 },
  { index: 7, left: 0, top: 71, origin: 'left bottom', factor: -0.05 },
  { index: 1, left: 35, top: 9, origin: 'center top', factor: 0.05 },
  { index: 4, left: 35, top: 43, origin: 'center center', factor: -0.02 },
  { index: 9, left: 35, top: 77, origin: 'center bottom', factor: 0.04 },
  { index: 5, left: 70, top: 5, origin: 'right top', factor: -0.04 },
  { index: 3, left: 70, top: 39, origin: 'right center', factor: 0.03 },
  { index: 6, left: 70, top: 73, origin: 'right bottom', factor: 0.06 }
];
