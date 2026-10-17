# UNKNOWN STACK — Comprehensive Website & Studio Knowledge Base

> **Version:** 1.0.0  
> **Brand:** Unknown Stack (`UNKNOWN.STACK`)  
> **Core Stack:** Laravel + React  
> **Primary Locale:** English (`en`) & Bengali (`bn`)  
> **Audience:** AI Agents, Developers, Designers, Content Strategists, and Collaborators  
> **Purpose:** Exhaustive training and reference document covering brand identity, visual design system, color palette, technical architecture, copy guidelines, project portfolio, pricing, and system prompts.

---

## Table of Contents
1. [Brand Overview & Core Philosophy](#1-brand-overview--core-philosophy)
2. [Contact Channels & Studio Information](#2-contact-channels--studio-information)
3. [Design System & Complete Color Palette](#3-design-system--complete-color-palette)
4. [Typography & Fonts](#4-typography--fonts)
5. [Signature UI Components & Styling Utilities](#5-signature-ui-components--styling-utilities)
6. [Technical Architecture & Repository Map](#6-technical-architecture--repository-map)
7. [Routing & Navigation Model](#7-routing--navigation-model)
8. [Internationalization (i18n) Engine](#8-internationalization-i18n-engine)
9. [Services & Capabilities](#9-services--capabilities)
10. [Pricing Packages & Deliverables](#10-pricing-packages--deliverables)
11. [5-Step Delivery Methodology](#11-5-step-delivery-methodology)
12. [Portfolio Catalogue (Projects Knowledge)](#12-portfolio-catalogue-projects-knowledge)
13. [FAQ Knowledge Base](#13-faq-knowledge-base)
14. [Brand Voice, Tone & Copywriting Rules](#14-brand-voice-tone--copywriting-rules)
15. [AI Agent Prompting & Execution Guidelines](#15-ai-agent-prompting--execution-guidelines)

---

## 1. Brand Overview & Core Philosophy

### 1.1 Brand Identity
- **Studio Name:** Unknown Stack
- **Stylized Mark:** `UNKNOWN.STACK` (with signature gold dot `.` between UNKNOWN and STACK)
- **Primary Subtitle / Descriptor:** `Laravel + React Web Development Studio`
- **Motto / Tagline:**
  - *English:* "Precision in every layer."
  - *Bengali:* "প্রতিটি স্তরে নিখুঁত প্রযুক্তি।"
- **Hero Headline:**
  - *English:* "We build websites that **mean business.**"
  - *Bengali:* "আমরা তৈরি করি এমন ওয়েবসাইট, যা **সত্যিই কাজ করে।**"
- **Mission Statement:**
  "Unknown Stack builds fast, secure, premium-quality websites with Laravel and React for businesses that want to be taken seriously online."

### 1.2 Craft Philosophy: "Quiet Luxury"
Unknown Stack operates on the ethos of **quiet luxury**:
1. **Zero Ego:** We don't put ego in front of the work. Clients get 100% of the spotlight and credit while our engineering speaks quietly through performance, stability, and polish.
2. **Invisible Foundation:** A stable, invisible foundation (Laravel backend, clean database schemas, secure authentication) holds up an ultra-responsive, fluid interface (React 18/19 SPA).
3. **Zero Bloat, 100% Owned:** No bloated multi-purpose themes, no sluggish visual page-builders, and no proprietary vendor lock-in. Every client receives clean, maintainable, modern code that belongs entirely to their business.
4. **Guaranteed Delivery & Support:** Fast 10 to 20 working day delivery schedules backed by 30 days of complimentary post-launch support.

---

## 2. Contact Channels & Studio Information

All official contact channels and studio touchpoints:

| Channel | Value / Detail | Deep Link | Notes |
| :--- | :--- | :--- | :--- |
| **Email** | `unknown.stack.dev@gmail.com` | `mailto:unknown.stack.dev@gmail.com` | Primary inquiry inbox |
| **Phone / WhatsApp** | `01570-208953` | `https://wa.me/8801570208953` | Direct messaging & consultation |
| **Raw Phone Number**| `8801570208953` | `tel:+8801570208953` | International format |
| **Studio Base** | Dhaka, Bangladesh | N/A | Operating globally |
| **Availability** | "Always Open" (24/7 client communication) | `#contact` | Visual indicator with pulsating green beacon |
| **Facebook Page** | Unknown Stack Official | `https://www.facebook.com/profile.php?id=61592640717418` | Official social media presence |

---

## 3. Design System & Complete Color Palette

The Unknown Stack visual identity is built on a dark luxury, high-contrast palette pairing deep matte obsidian tones with rich metallic champagnes, brushed gold, and cool slate steel.

### 3.1 Color Tokens & Values

```
========================================================================================
TOKEN NAME           HEX / VALUE                  TAILWIND CLASS         ROLE / USAGE
========================================================================================
[BACKGROUNDS]
--bg-deep            #07080B                      bg-bg-deep             Deepest obsidian base canvas
--bg-mid             #0F1116                      bg-bg-mid              Secondary section background
--bg-elevated        #161921                      bg-bg-elevated         Elevated cards, dropdowns, modals
--bg-glass           rgba(15, 17, 22, 0.75)       bg-bg-glass            Translucent header / navigation

[CARDS & SURFACES]
--card               #12141A                      bg-card                Default card surface
--card-alt           #171921                      bg-card-alt            Alternate card surface
--card-glass         rgba(21, 23, 29, 0.65)       bg-card-glass          Frosted glass card surface
card-hover           rgba(22, 25, 33, 0.85)       (custom hover)         Hover card elevation

[GOLD PALETTE — LUXURY ACCENTS]
--gold-1             #8E6F3E                      text/bg/border-gold-1  Deep rich bronze gold
--gold-2             #E7C783                      text/bg/border-gold-2  Luminous champagne gold (PRIMARY ACCENT)
--gold-3             #FBF0D2                      text/bg/border-gold-3  Light cream gold / highlight sheen
--gold-glow          rgba(231, 199, 131, 0.18)    bg-gold-glow           Ambient radial lighting & halos
border-gold          rgba(231, 199, 131, 0.30)    border-border-gold     Delicate gold frame lines

[STEEL & SLATE NEUTRALS]
--steel-1            #5C6472                      text/bg-steel-1        Medium charcoal slate (Layer 2 icon)
--steel-2            #8B93A1                      text/bg-steel-2        Cool slate grey (tags, inactive icons)

[TEXT & CONTENT]
--text-primary       #F5F3EF                      text-content-primary   Off-white warm luxury text (headings/body)
--text-secondary     #D9DCE2                      text-content-secondary Soft silver grey for body paragraphs
--text-muted         #8B93A1                      text-content-muted     Muted captions, labels, timestamps

[BORDERS & HAIRLINES]
--border-hairline    #2B303C                      border-border-hairline Subtle 1px structural grid & card outline
border-hairline-sub  rgba(255, 255, 255, 0.07)    (glass border)         Frosted border on glass components

[STATUS & INTERACTIVE]
status-online        #4ADE80 (Green-400)          text-green-400         Live pulse indicator ("Always Open")
selection-bg         #8E6F3E                      selection:bg-gold-1    Highlighted text background
selection-text       #FFFFFF                      selection:text-white   Highlighted text color
========================================================================================
```

### 3.2 Gradient Formulations

1. **Horizontal Metallic Gold Gradient (`gold-gradient`):**
   ```css
   linear-gradient(90deg, #8E6F3E 0%, #E7C783 28%, #FBF0D2 50%, #E7C783 72%, #8E6F3E 100%)
   ```
   *Usage:* Used for highlighted heading text, shimmer badges, and luxury button backgrounds.

2. **Vertical Gold Gradient (`gold-gradient-vertical`):**
   ```css
   linear-gradient(180deg, #8E6F3E 0%, #E7C783 50%, #FBF0D2 100%)
   ```
   *Usage:* Accent dividers and vertical timeline indicators.

3. **Ambient Gold Glow (`gold-glow`):**
   ```css
   radial-gradient(circle, rgba(231, 199, 131, 0.18) 0%, rgba(7, 8, 11, 0) 70%)
   ```
   *Usage:* Atmospheric backdrop lighting behind hero visual and headers.

4. **Mesh Ambient Glow (`mesh-glow`):**
   ```css
   radial-gradient(at 40% 20%, rgba(142, 111, 62, 0.15) 0px, transparent 50%),
   radial-gradient(at 80% 0%, rgba(231, 199, 131, 0.1) 0px, transparent 50%),
   radial-gradient(at 0% 50%, rgba(26, 28, 34, 0.5) 0px, transparent 50%)
   ```

5. **Subtle Background Grid (`bg-grid-pattern`):**
   ```css
   background-size: 40px 40px;
   background-image: 
     linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
   ```

### 3.3 Shadow Tokens

- **`shadow-glow-gold`:** `0 0 25px rgba(231, 199, 131, 0.22)`
- **`shadow-glow-gold-lg`:** `0 0 50px rgba(231, 199, 131, 0.35)`
- **`shadow-card-luxury`:** `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px rgba(231, 199, 131, 0.05)`
- **`shadow-glass-glow`:** `0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.08)`

---

## 4. Typography & Fonts

The website uses Google Fonts with clean weights and tight letter spacing.

| Family | CSS Declaration | Weights | Role |
| :--- | :--- | :--- | :--- |
| **Inter** | `'Inter', system-ui, sans-serif` | 300, 400, 500, 600, 700, 800 | Primary body text, UI controls, navigation |
| **Plus Jakarta Sans** | `'Plus Jakarta Sans', 'Inter', sans-serif` | 400, 500, 600, 700, 800 | Section titles, `h1`-`h4`, project titles |
| **Noto Sans Bengali** | `'Noto Sans Bengali', 'Inter', sans-serif` | 400, 500, 600, 700 | Rendered for all text when locale is switched to `bn` |
| **Monospace** | `font-mono, ui-monospace, SFMono-Regular` | 400, 600, 700 | Tags, badges, step numbers (01..05), pricing labels |

### Letter Spacing Rules
- Body: `-0.01em` (`letter-spacing: -0.01em`)
- Headings: `-0.02em` (`letter-spacing: -0.02em`)
- Badges & Eyebrows: `tracking-widest` (uppercase, `0.1em` to `0.2em`)

---

## 5. Signature UI Components & Styling Utilities

### 5.1 The Hairline Frame (`hairline-frame`)
The cornerstone visual motif of Unknown Stack. A box bordered with hairline grey `#2B303C` featuring **metallic gold corner brackets** in the top-left and bottom-right corners:
- Standard bracket dimensions: `10px x 10px`
- Hover state: expands to `14px x 14px` with a subtle gold glow `0 0 8px rgba(231, 199, 131, 0.6)`.
- Applied to: Service cards, project cards, pricing cards, process cards, contact forms.

### 5.2 Metallic Gold Button (`btn-gold`)
- Background: `linear-gradient(135deg, #8E6F3E 0%, #E7C783 50%, #8E6F3E 100%)` with `background-size: 200% 200%`.
- Text: Black / Deep obsidian `#07080B`, bold weight.
- Inner light: `inset 0 1px 0 rgba(255, 255, 255, 0.4)`.
- Shadow: `0 4px 15px rgba(142, 111, 62, 0.25)`.
- Hover behavior: Background position shifts, shadow intensifies to `0 8px 30px rgba(231, 199, 131, 0.4)`, and element lifts `-2px`.

### 5.3 Animated Gold Shimmer Text (`text-gold-gradient`)
- Applied to key brand highlights (e.g., price numbers, hero keyword highlights).
- Animated with `shimmer 6s linear infinite` across a 200% background gradient width.

### 5.4 The Isometric Logo Mark (`LogoMark`)
A bespoke 3-layer isometric 3D stack rendered in inline SVG:
- **Bottom Layer (Foundation):** Solid gold fill (`url(#gold_grad_mark)` from `#8E6F3E` to `#E7C783`) — represents rock-solid backend & security.
- **Middle Layer (Core Engine):** Slate steel fill `#5C6472` with `#8B93A1` border — represents data structure & APIs.
- **Top Layer (Interface):** Dashed gold wireframe stroke `strokeDasharray="3 2"` (`url(#gold_grad_top)`) — represents the lightweight, dynamic React UI layer.

---

## 6. Technical Architecture & Repository Map

### 6.1 Technology Stack
- **Bundler & Build Tool:** Vite 5 (`^5.4.1`)
- **Frontend Framework:** React 18 (`^18.3.1`) & React DOM 18
- **Styling:** Tailwind CSS 3 (`^3.4.10`), PostCSS, Autoprefixer
- **Icons:** Lucide React (`^0.427.0`) + custom handcrafted SVG icons (`ServiceIcons.jsx`, `LogoMark.jsx`, `LogoLockup.jsx`)
- **State Management:** Native React Context (`LanguageContext`), local state hooks, window hash listener
- **Fonts:** Google Fonts CDN preconnect (`Inter`, `Plus Jakarta Sans`, `Noto Sans Bengali`)

### 6.2 Repository Structure
```
c:\Users\admin\Documents\Sakib\Unknown/
├── index.html                   # HTML entry point, Google Fonts, OpenGraph tags, dark mode class
├── package.json                 # Scripts: dev, build, preview, postinstall
├── tailwind.config.js           # Full theme extensions (colors, keyframes, shadows, fonts)
├── postcss.config.js            # PostCSS plugins
├── vite.config.js               # Vite React plugin setup
├── public/
│   ├── icon.svg                 # Browser favicon (Unknown Stack 3D isometric mark)
│   ├── projects/                # High-res project mockup screenshots
│   │   ├── erp.png              # Enterprise ERP & HR Management System
│   │   ├── Nuvara.png           # Nuvara E-commerce Platform
│   │   ├── kino.png             # Kino Atelier Luxury E-commerce
│   │   ├── fruitmart.png        # FruitMart E-commerce Store
│   │   ├── codexlabasia.png     # CodexLabAsia Business Hub
│   │   └── crm.png              # ShopVerse CRM E-Commerce Suite
│   └── work/                    # Additional showcase assets
└── src/
    ├── main.jsx                 # Mounts App inside LanguageProvider
    ├── index.css                # Tailwind directives, CSS variables, custom classes
    ├── App.jsx                  # Main orchestrator & hash route switcher
    ├── context/
    │   └── LanguageContext.jsx  # i18n context provider with localStorage caching
    ├── hooks/
    │   └── useInView.js         # IntersectionObserver hook for fade-in animations
    ├── i18n/
    │   ├── en.js                # Full English copy dictionary
    │   └── bn.js                # Full Bengali copy dictionary
    └── components/
        ├── Navbar.jsx           # Fixed navigation header with blur backdrop & mobile drawer
        ├── Hero.jsx             # Hero section with badges, CTAs, and highlight points
        ├── HeroStackVisual.jsx  # Interactive 3D layer visualization (UI, API, Foundation)
        ├── About.jsx            # "Quiet Luxury" philosophy & 4 pillar cards
        ├── Services.jsx         # 3 primary service offerings
        ├── ServiceCard.jsx      # Card component with custom SVG icons
        ├── Work.jsx             # Portfolio grid container
        ├── ProjectCard.jsx      # Portfolio card with image, category, and metric tags
        ├── ProjectDetailPage.jsx# Full dedicated detail page for deep project inspection
        ├── Process.jsx          # 5-step delivery methodology timeline
        ├── Pricing.jsx          # Pricing section container
        ├── PricingCard.jsx      # Static vs Dynamic comparison card
        ├── FAQ.jsx              # Interactive accordion for client inquiries
        ├── Contact.jsx          # Contact section with form & direct WhatsApp/Email cards
        ├── Footer.jsx           # Bottom footer with social links & copyright
        ├── LanguageToggle.jsx   # EN / BN toggle pill button
        └── icons/
            ├── LogoMark.jsx     # 3-layer isometric SVG stack
            ├── LogoLockup.jsx   # Logo mark + text combo
            └── ServiceIcons.jsx # Handcrafted SVG icons for services & features
```

---

## 7. Routing & Navigation Model

The application uses an ultra-fast, zero-dependency **hash-based routing model**:
- **Main Landing Page:** Default route `/` or `#home`
- **Section Anchors:**
  - `#home` → Hero section
  - `#about` → Philosophy & Pillars
  - `#services` → 3 Core Services
  - `#work` → Selected Work Portfolio
  - `#process` → 5-Step Methodology
  - `#pricing` → Transparent Packages
  - `#faq` → Frequently Asked Questions
  - `#contact` → Inquiries & Direct Channels
- **Project Detail Deep Links:**
  - When a user clicks a project card, the hash changes to `#project-{id}` (e.g. `#project-12`).
  - `App.jsx` listens to `window.onhashchange`. When `#project-{id}` is present, the app unmounts the landing page and renders `ProjectDetailPage.jsx`.
  - The detail page includes:
    1. Dedicated Sticky Navbar with "Back to Work" button and language toggle.
    2. Category badge & live metric pill.
    3. H1 Project Title & extended description.
    4. CTAs: "Live Demo ↗" (if active) and "Start Project Consultation".
    5. Mockup browser window preview with red/yellow/green control buttons.
    6. Categorized Tech Stack tags (Frontend, Backend, Database, Tools).
    7. 5 Key Engineering Accomplishments & Architecture Bullet points.
    8. Previous / Next Project navigation carousel.
    9. "Ready to build something similar?" conversion box.

---

## 8. Internationalization (i18n) Engine

The application features complete first-class bilingual support:
- **Languages:** English (`en`) and Bengali (`bn`).
- **Context:** Managed via `src/context/LanguageContext.jsx`.
- **Persistence:** Saved in browser `localStorage.getItem("preferred-lang")`.
- **Dynamic Font Switching:**
  - When `lang === "bn"`, the document adds class `font-bengali` to `document.body` and updates `<html lang="bn">`.
  - Automatically activates Google Font **'Noto Sans Bengali'** for all headings, body text, and badges.

---

## 9. Services & Capabilities

Unknown Stack focuses exclusively on high-performance web engineering:

### 1. Business Website (`id: "business"`)
- **Headline:** Clean, professional sites that build trust and convert visitors into long-term clients.
- **Key Features:**
  - Custom UI/UX Design (Tailored to brand, no templates)
  - SEO Optimized (Metadata, schema markup, semantic HTML)
  - Fast Performance (Near 100 PageSpeed scores)
  - Fully Mobile-Responsive

### 2. E-commerce (`id: "ecommerce"`)
- **Headline:** Full online stores with cart, smooth checkout, payment integration, and intuitive admin panel.
- **Key Features:**
  - Cart & Checkout Workflow (Zustand or Redux state)
  - Custom Admin Panel (Manage products, inventory, orders)
  - Payment Gateway Integration (Stripe, bKash, SSLCommerz)
  - Inventory & Customer Management

### 3. Custom Web App (`id: "custom"`)
- **Headline:** Bespoke web applications and software systems built around your company's exact workflow.
- **Key Features:**
  - Laravel API Backend (RESTful endpoints, Sanctum auth)
  - React Dynamic UI (Fast, state-driven SPA experience)
  - Tailored Relational Database (MySQL, PostgreSQL)
  - Scalable, Decoupled System Architecture

---

## 10. Pricing Packages & Deliverables

Unknown Stack provides two clear, fixed-price starter packages alongside custom enterprise engagements:

| Feature / Metric | Static Website Package | Dynamic Website Package (MOST POPULAR) |
| :--- | :--- | :--- |
| **Price** | **৳7,000** (BDT) | **৳15,000** (BDT) |
| **Payment Frequency** | One-time investment | One-time investment |
| **Delivery Timeline** | **10 working days** | **20 working days** |
| **Target Use Case** | Business landing page, portfolio, agency showcase, service page | E-commerce, booking systems, database-driven sites, member portals |
| **Admin Panel** | Not included (static code) | **Included** (User-friendly admin dashboard) |
| **Database** | None | Full relational database (MySQL/SQLite) |
| **Tech Stack** | React / Tailwind / Vite | **Laravel + React + MySQL** |
| **Post-Launch Support** | **30 days complimentary** | **30 days complimentary** |
| **Code Ownership** | 100% full code ownership | 100% full code ownership |

---

## 11. 5-Step Delivery Methodology

Every project follows a transparent, disciplined 5-stage lifecycle:

```
[01 DISCOVERY CALL] ──► [02 DESIGN] ──► [03 DEVELOPMENT] ──► [04 LAUNCH] ──► [05 SUPPORT]
      │                       │                 │                   │                 │
Analyze goals,          Wireframes &      Clean Laravel +      Testing speed,     30 days post-launch
budget, timeline,       interactive UI    React coding with    security & mobile  assistance &
target audience         prototypes        live preview links   responsiveness     maintenance
```

1. **Step 01 — Discovery Call:** Analysis of business goals, user personas, technical requirements, and target timeline.
2. **Step 02 — Design:** High-fidelity interactive prototypes and layouts refined until 100% client approval.
3. **Step 03 — Development:** Clean, modular code construction with Laravel REST API and React UI with continuous live preview milestones.
4. **Step 04 — Launch:** Comprehensive QA for mobile responsiveness, cross-browser compatibility, Lighthouse speed score, and SSL security before production deployment.
5. **Step 05 — Support:** 30 days of included post-launch operational guidance, minor tweaks, and security assurance.

---

## 12. Portfolio Catalogue (Projects Knowledge)

This portfolio reflects real, production-grade applications engineered by Unknown Stack:

### Project 1: Enterprise ERP & HR Management System (`id: 12`)
- **Category:** Enterprise System
- **Key Metric:** `Multi-Tenant RBAC · Automated Payroll`
- **Tech Stack:** `Laravel 12`, `PHP 8.2`, `Tailwind CSS 4`, `Vite 7`, `Spatie RBAC`, `Blade`, `SQLite / MySQL`
- **Overview:** Full-stack enterprise resource planning platform featuring multi-company role-based access control, automated payroll calculation, HRIS workforce management, CRM deal pipelines, and inventory.
- **Key Engineering Highlights:**
  - Full-stack ERP built on cutting-edge Laravel 12 & Tailwind CSS 4.
  - Complete HRIS with employee directories, web punch attendance, shift scheduling, and leave approvals.
  - Automated payroll with custom salary matrices, advance loans, and dynamic PDF payslips.
  - Multi-warehouse inventory tracking and CRM deal stages.
  - Granular RBAC using Spatie Permissions and multi-tenant company data scoping.

### Project 2: Nuvara E-commerce Platform (`id: 11`)
- **Category:** E-commerce Store
- **Key Metric:** `Multi-language i18n & RTL · Zustand Cart`
- **Tech Stack:** `React 19`, `Vite`, `Laravel 12`, `Tailwind CSS`, `Zustand`, `i18next`, `MySQL`
- **Overview:** Modern e-commerce web platform featuring dynamic theme switching, internationalization with RTL Arabic support, interactive cart, and promo code engine.
- **Key Engineering Highlights:**
  - React 19 SPA frontend integrated with Laravel 12 REST API.
  - Real-time client-side cart & promo engine powered by Zustand.
  - 4-language i18n: English, Spanish, Bengali, and native RTL Arabic.
  - Admin dashboard with inventory and orders management.

### Project 3: Kino Atelier (`id: 10`)
- **Category:** Luxury E-commerce
- **Key Metric:** `Stripe Checkout · Filament Admin`
- **Tech Stack:** `Laravel 12`, `React.js`, `Tailwind CSS`, `Zustand`, `MySQL`, `Stripe API`
- **Overview:** High-end boutique e-commerce storefront for handcrafted travertine, white oak, and fluted earthenware home decor.
- **Key Engineering Highlights:**
  - High-fidelity SPA with fluid transitions and scroll-responsive navigation.
  - Filament Admin panel for inventory, categories, coupons, and shipping logs.
  - Secure Laravel 12 RESTful API with Stripe Checkout integration.
  - Optimized database schema for variations, galleries, and client reviews.

### Project 4: FruitMart E-commerce (`id: 1`)
- **Category:** E-commerce Store
- **Key Metric:** `Complete Order & Vendor Pipeline`
- **Tech Stack:** `Laravel 10`, `MySQL`, `JavaScript`, `Bootstrap 5`
- **Overview:** Complete online fruit sales platform with multi-vendor management, shopping cart, and order dispatch pipelines.

### Project 5: CodexLabAsia Business Hub (`id: 2`)
- **Category:** Corporate System
- **Key Metric:** `Job Application Tracking & CMS`
- **Tech Stack:** `Laravel`, `MySQL`, `Blade`, `Bootstrap 5`, `jQuery`
- **Overview:** Corporate business portal with content management system (CMS), dynamic project portfolios, team directory, and an applicant tracking system (ATS) for careers.

### Project 6: CRM E-Commerce Suite / ShopVerse (`id: 3`)
- **Category:** Custom Web App
- **Key Metric:** `RESTful API & Dynamic React UI`
- **Tech Stack:** `Laravel 10`, `React.js`, `REST API`, `MySQL`, `Bootstrap 5`
- **Overview:** Full-stack e-commerce engine with dedicated CRM capabilities, role-based user management, and seamless API checkout workflows.

### Project 7: Coffee Blend Cafe (`id: 4`)
- **Category:** Hospitality System
- **Key Metric:** `Order Pipeline & Menu Admin`
- **Tech Stack:** `PHP`, `MySQL`, `JavaScript`, `Bootstrap 5`
- **Overview:** Digital ordering and table reservation management system for cafe and restaurant environments with real-time menu dashboard.

### Project 8: Hospital Management System (`id: 6`)
- **Category:** Healthcare System
- **Key Metric:** `Doctor & Patient Schedule Control`
- **Tech Stack:** `PHP`, `Laravel`, `Bootstrap 5`, `MySQL`
- **Overview:** Clinical management platform coordinating doctor rosters, outpatient bookings, patient record histories, and billing pipelines.

### Project 9: Online Learning System Backend (`id: 8`)
- **Category:** API Backend
- **Key Metric:** `NestJS + TypeORM PostgreSQL API`
- **Tech Stack:** `TypeScript`, `NestJS`, `PostgreSQL`, `TypeORM`
- **Overview:** Scalable modular backend API powering student registrations, course catalogs, video progress tracking, and JWT role-guarded endpoints.

---

## 13. FAQ Knowledge Base

Quick answers to the most common prospective client questions:

**Q1: How long does a project take?**  
*Answer:* Static websites are delivered within **10 working days**. Dynamic web applications and custom systems typically take **15 to 20 working days**, depending on scope and feature complexity.

**Q2: Do you offer support after delivery?**  
*Answer:* Yes. All Unknown Stack projects include **30 days of complimentary post-launch support** to resolve questions, handle configuration, or make minor adjustments.

**Q3: Can I update the website content myself?**  
*Answer:* Yes! With our **Dynamic package (৳15,000)** or custom solutions, you receive a tailored, user-friendly admin dashboard where you can easily update products, images, text, and pricing without writing a single line of code.

**Q4: What if I need custom web application features?**  
*Answer:* We specialize in bespoke **Laravel + React systems**. Whether you need an ERP, booking engine, multi-vendor marketplace, or custom API integrations, we provide custom scoping and proposals tailored to your exact workflow.

---

## 14. Brand Voice, Tone & Copywriting Rules

When generating copy, social media posts, email proposals, or design proposals on behalf of Unknown Stack, adhere strictly to these voice rules:

### Tone Characteristics
1. **Confident & Understated:** We do not yell, use excessive exclamation marks, or make hollow claims like "we are the #1 best agency in the universe." We state facts calmly with technical precision.
2. **Technically Authoritative:** We speak with expertise about modern architecture (Laravel, React, Vite, MySQL, REST APIs, Tailwind CSS). We emphasize clean code, zero bloat, and security.
3. **Transparent & Direct:** We state our pricing clearly (৳7,000 for static, ৳15,000 for dynamic). No hidden setup fees, no deceptive upselling.
4. **Client-Centric ("Quiet Luxury"):** The client's business is the hero. We build the invisible, rock-solid infrastructure that empowers their brand to thrive online.

### Approved Vocabulary & Key Phrases
- *"Precision in every layer."*
- *"We build websites that mean business."*
- *"Quiet luxury: clean code, zero bloat, 100% owned."*
- *"Laravel 11/12 + React 18/19 rock-solid stack."*
- *"Lightweight, decoupled architecture."*
- *"No heavy page builders, no slow templates."*
- *"30-day complimentary post-launch support."*

### Words & Concepts to Avoid
- ❌ *"Cheap websites / low-budget developers"* (We are accessible, high-value, and premium, not "cheap")
- ❌ *"WordPress drag-and-drop templates / Elementor"* (We engineer custom code)
- ❌ *"Overnight miracle / get rich quick"*
- ❌ Cluttered, buzzword-heavy agency jargon (e.g. "synergistic paradigm shifts")

---

## 15. AI Agent Prompting & Execution Guidelines

If you are an AI Agent tasked with extending, fixing, or modifying the Unknown Stack codebase, follow these non-negotiable technical directives:

### 15.1 Styling & UI Rules
1. **Dark Theme Exclusivity:** Unknown Stack is exclusively designed with a dark luxury aesthetic (`#07080B` base). Never introduce stark white page backgrounds or standard blue/red bootstrap colors.
2. **Use Established Color Tokens:** Always use defined Tailwind classes (`bg-bg-deep`, `bg-bg-mid`, `text-gold-2`, `text-content-primary`, `border-border-hairline`).
3. **Corner Brackets:** New card components should adopt the `.hairline-frame` utility to preserve the signature gold corner accents.
4. **Typography Consistency:** Headings use `font-heading` (`Plus Jakarta Sans`), tags/metadata use `font-mono`, and body uses `Inter`.

### 15.2 State & Code Modification Rules
1. **Bilingual Completeness:** Whenever you add a new project, service, or FAQ item, you **MUST** update BOTH `src/i18n/en.js` AND `src/i18n/bn.js`. Never leave one language desynchronized.
2. **Hash Navigation:** Route switches should respect hash navigation (`window.location.hash = "#project-{id}"` or section anchors).
3. **No Heavy Dependencies:** Do not install heavy routing libraries (like full React Router DOM or Redux Toolkit) unless explicitly requested; the lightweight hash listener and React Context meet all requirements with near-zero bundle overhead.
4. **Performance:** Ensure all image tags have fallback handlers, appropriate `alt` tags, and responsive container constraints.

---

*Document compiled for Unknown Stack (`UNKNOWN.STACK`) • Dhaka, Bangladesh • 2026*
