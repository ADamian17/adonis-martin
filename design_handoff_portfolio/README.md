# Handoff: Adonis D. Martin — Portfolio Website (4 pages)

## Overview
A multi-page personal portfolio site for **Adonis D. Martin**, a frontend-focused software engineer. Warm "beige" light theme with a purple accent and a dark faceted hero graphic. Four linked pages share one sticky navbar and footer:
- **Home** — hero, Creative Skills grid, Benefits grid, "My Works" gallery, testimonials, FAQ accordion.
- **About Me** — intro (faceted graphic + bordered stats), My Journey timeline, tech-stack groups, "How I Work" values, CTA.
- **Portfolio** — header, working category filter, 6 project cards, CTA.
- **Contact Me** — working contact form (validation + success state), contact details, socials, availability badge.

The **Home page** sections are documented in full detail under "Screens / Views" below; the three additional pages are documented under "Additional Pages". The shared **Navbar** and **Footer** specs (under Home) apply to all four pages.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior. They are **not production code to copy directly**. The task is to **recreate this design in your target codebase** using its established patterns, component library, and conventions (React, Next.js, Vue, etc.). If no frontend environment exists yet, choose the most appropriate framework (e.g. Next.js + React + TypeScript) and implement there.

The prototypes were authored as streaming HTML components with inline styles (one file per page). In a real codebase you should break them into proper components, lift the shared **Navbar**/**Footer** into a layout, and move styles into your styling solution (CSS Modules, Tailwind, styled-components, etc.).

**Navigation model:** the prototype links pages as separate files (`href="About%20Me.dc.html"` etc.) and highlights the current page's nav item with the active pill. In production, wire these to real routes (`/`, `/about`, `/portfolio`, `/contact`) and drive the active state from the router. The wordmark links to Home.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and layout. Recreate the UI faithfully using your codebase's libraries and patterns. Exact hex values, font sizes, and spacing are given below in Design Tokens.

---

## Screens / Views

### Single page — sections top to bottom

#### 1. Navbar (sticky)
- **Layout**: Sticky top bar, `space-between`. Horizontal padding `clamp(20px, 8.4vw, 162px)`, vertical `20px`. Translucent background `rgba(238,235,229,0.86)` with `backdrop-filter: blur(12px)`, `1px` bottom border `#dad9d3`. `z-index` above content.
- **Left**: **Logo** — bracketed monogram lockup, link to Home. A purple `[` and `]` (Manrope 700, 30px, `#681aff`) bracketing "AM" (Manrope 700, 24px, `#28292c`), followed by the wordmark "Adonis D. Martin." (Manrope 600, 22px, `#28292c`, with the trailing period in `#681aff`), gap 10px, baseline-aligned, `white-space: nowrap`. The standalone `[AM]` mark (no wordmark) is the brand symbol — use it for the favicon / compact contexts. *(See `Logo Exploration.dc.html` in the project for the full set of explored directions.)*
- **Center**: Nav links — "About Me", "Portfolio", "Contact Me". Each Manrope 500, 18px, inactive style: text `#333`, padding `14px 20px`. *(The active-pill style — background `#faf7f1`, radius 8px, padding `14px 24px`, text `#000` — is still defined; apply it to whichever link matches the current route/section.)*
- **Right**: *(spec/optional)* a "Book a Call" button — dark navy `#000d2f`, text `#fcfbf8`, radius 8px, padding `16px 18px`, phone icon (stroke `#fcfbf8`) + label, gap 8px. **Note:** the current prototype's navbar ships with only the wordmark + center links (no right-side button). Add the button if desired.
- **⚠ Mobile:** the navbar does **not** collapse. The links use `white-space: nowrap`, so below ~768px the row overflows horizontally (≈778px of content at a 390px viewport). **You must add a mobile treatment** — collapse the center links into a hamburger/drawer menu at small widths. This is the one section that is not phone-ready in the prototype.

#### 2. Hero
- **Layout**: Two columns via flex-wrap, `min-height: 880px`. Left column `flex: 1 1 560px` (min 340px), right column `flex: 1 1 480px` (min 320px, min-height 480px). Left padding `60px clamp(20px,8.4vw,162px)`.
- **Left column** (vertical stack, gap 50px):
  - **Badge**: white pill, radius 13px, padding `10px 18px`, soft shadow. Text "Hello There 🤗" Manrope 500, 26px, `#28292c`.
  - **H1**: "Adonis D. Martin Welcomes You!" Manrope 600, `clamp(40px,4vw,58px)`, line-height 1.18, `#28292c`, max-width ~12ch.
  - **Paragraph**: "I'm a frontend-focused software engineer who builds fast, accessible, and maintainable web interfaces. Explore my work to see how I turn complex problems into clean, reliable user experiences." Manrope 400, 18px, line-height 1.55, `#4a4a4a`, max-width ~46ch.
  - **Button row** (gap 40px, flex-wrap): the current prototype has a single **"View Portfolio →"** primary button — purple `#681aff`, text `#fcfbf8`, radius 8px, padding `18px 28px`, trailing arrow. *(Spec/optional: pair it with a navy "Book a Call" button — navy `#000d2f`, white text, phone icon stroke `#a06bff` — if you want a two-CTA hero.)*
  - **Stat strip** *(spec/optional — NOT in the current prototype; add if you want a stats row under the hero buttons)*: card background `#fcfbf8`, radius 12px, padding `36px 50px`, 3 equal columns (flex, gap 30px). Each: big number Manrope 600, 38px, `#28292c`; label Manrope 400, 16px, `#4a4a4a`, margin-top 4px. Suggested values: **55+ Projects Shipped**, **20+ Happy Clients**, **08+ Years of Experience**. (Placeholder numbers — client to confirm.)
- **Right column**: Dark decorative panel, radius `0 0 0 30px`, overflow hidden. Background is a layered stack (top→bottom):
  1. `url(assets/hero-grid.png) top left / 64px 128px repeat` (subtle pixel grid tile)
  2. `linear-gradient(220deg, rgba(104,26,255,0.85) -32%, rgba(104,26,255,0) 52%)` (purple wash)
  3. `url(assets/hero-bg.jpg) center / cover no-repeat` (black faceted 3D image)
  4. fallback color `#131519`
  - Two beige notch SVGs (`abstract-1.svg` top-left at `-60px,-20px`; `abstract-2.svg` bottom-right, rotated 180°), width ~300px, that cut into the panel corners.

#### 3. Creative Skills
- **Section**: padding `90px clamp(20px,8.4vw,162px)`.
- **Header** (centered, max-width 640px, margin-bottom 60px): H2 "Creative Skills" Manrope 600, `clamp(34px,3.4vw,48px)`, `#28292c`; subtitle "As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life" — **NOTE: this subtitle copy still says "web designer"; reword to fit the engineer (e.g. "A focused toolkit for building fast, reliable, accessible frontends").** Manrope 400, 18px, `#4a4a4a`.
- **Grid**: `repeat(auto-fit, minmax(300px, 1fr))`, gap 30px. 6 cards.
- **Card**: background `#f9f8f6`, radius 12px, padding 50px, centered column, gap 24px. Each has:
  - **Icon tile**: 77×77, radius 8px, background `linear-gradient(135deg, #9a5cff, #681aff)`, inset glow `inset 0 0 14px 4px rgba(255,255,255,0.45)`, white line icon (40px, stroke-width 1.6) centered.
  - **H3**: Manrope 600, 22px, `#28292c`.
  - **Paragraph**: Manrope 400, 16px, line-height 1.55, `#4a4a4a`.
- **The 6 skills** (title — description — suggested icon):
  1. **JavaScript & TypeScript** — "Deep command of modern ES2023+, TypeScript, and the language fundamentals that keep large codebases safe, typed, and maintainable." — code chevrons `</>`
  2. **React & Component Architecture** — "Building scalable, reusable component systems with React and modern state management for complex, data-driven UIs." — 2×2 boxes grid
  3. **Performance & Web Vitals** — "Optimizing load times, rendering, and Core Web Vitals so interfaces stay fast and responsive at any scale." — activity/pulse line
  4. **Responsive & Accessible UI** — "Crafting layouts that adapt seamlessly across devices and meet WCAG accessibility standards for every user." — monitor + phone
  5. **Testing & CI/CD** — "Unit, integration, and end-to-end testing wired into automated pipelines for confident, continuous delivery." — checkmark in box
  6. **APIs & Developer Tooling** — "Integrating REST and GraphQL APIs and building design systems and tooling that speed up the whole team." — terminal

#### 4. Benefits
- **Section**: padding `90px clamp(20px,8.4vw,162px)`.
- **Header**: H2 "Benefits"; subtitle "By choosing my web design service, you'll enjoy the following benefits" — **reword to engineering (e.g. "What working with me looks like").**
- **Layout**: vertical stack, gap 30px. Row 1 = 2 cards `minmax(320px,1fr)`; row 2 = 3 cards `minmax(280px,1fr)`. All cards background `#fbfbfb`, radius 12px, padding 50px. H3 Manrope 600, 24px `#28292c`; paragraph Manrope 400, 16–17px, line-height 1.6, `#4a4a4a`.
- **The 5 benefits**:
  1. **Clean, Maintainable Code** — "I write well-structured, documented, and tested code that teams can read, extend, and build on with confidence. Your codebase stays healthy long after launch — reducing technical debt and the cost of every future change."
  2. **Pixel-Perfect, Performant Interfaces** — "I translate designs into fast, faithful interfaces — obsessing over performance budgets, smooth interactions, and Core Web Vitals. The result is a product that feels instant and polished on every device, leaving a lasting impression on your users."
  3. **User-Centric Engineering** — "I engineer with the end user in mind — prioritizing accessibility, intuitive flows, and responsiveness. By pairing usability insight with solid implementation, I ship interfaces that are inclusive, easy to use, and convert."
  4. **Responsive & Accessible by Default** — "Every interface I build adapts flawlessly across screen sizes and meets WCAG accessibility standards. Whether on desktop, tablet, or phone, your product looks and works great for everyone — no exceptions."
  5. **Modern Stack & Best Practices** — "With deep command of React, TypeScript, and the modern frontend ecosystem, I bring battle-tested patterns, automated testing, and CI/CD to every project — so you ship faster, with fewer regressions."

#### 5. My Works
- **Section**: padding `90px clamp(20px,8.4vw,162px)`.
- **Header**: H2 "My Works"; subtitle "A selection of products I've designed, built, and shipped on the frontend".
- **Grid**: `repeat(auto-fit, minmax(320px,1fr))`, gap 30px. 3 cards.
- **Card**: background `#f7f6f3`, radius 12px, padding 40px, column gap 24px.
  - **H3** Manrope 600, 20px, `#333`.
  - **Image area** (position relative): a project screenshot, `aspect-ratio: 16/10`, radius 12px. In the prototype these are empty user-fillable drop slots — in production use real project screenshots / `<img>`. A small 44×44 button overlays bottom-right (`right:14px; bottom:14px`): background `#f7f6f3`, `inset 0 0 0 1px #ebe7e0`, radius 8px, with a diagonal arrow ("open/external") icon stroke `#333`.
  - **Thumbnail row**: 4-column grid, gap 16px, each `aspect-ratio:1`, radius 8px, neutral `#dededb` (placeholder secondary shots).
  - **Project titles**: "Realtime Analytics Dashboard", "Component Library & Design System", "E-Commerce Storefront Rebuild" (placeholders — replace with real projects).
- **CTA** (centered, margin-top 50px): "View All Projects →" button — purple `#681aff`, text `#fcfbf8`, radius 8px, padding `18px 24px`.

#### 6. Testimonials
- **Section**: padding `90px clamp(20px,8.4vw,162px)`.
- **Header**: H2 "What My Clients say About Me"; subtitle "Here's what some of my satisfied clients have to say about my work".
- **Sub-bar** (space-between, margin-bottom 30px): left "37 Total Reviews" Manrope 500, 16px `#4a4a4a`; right two circular 44×44 carousel buttons (border `1px #d9d6cf`, chevron icons stroke `#333`). Carousel paging is **not wired up** in the prototype — implement if desired.
- **Grid**: `repeat(auto-fit, minmax(300px,1fr))`, gap 30px. 3 review cards.
- **Card**: background `#f9f8f6`, radius 12px, padding 40px, column gap 20px.
  - **Header row** (space-between): name Manrope 600, 18px `#28292c` + role Manrope/15px `#888`; social icons (LinkedIn, Facebook, Twitter) 20px, color `#681aff`, gap 10px.
  - **Stars**: 5 filled stars `★★★★★`, color `#681aff`, 18px.
  - **Quote**: Manrope 400, 16px, line-height 1.6, `#4a4a4a`.
  - Reviews are **sample/placeholder** (Sarah Thompson · Product Manager; Emily Roberts · Startup Founder; Laura Adams · Engineering Lead). Replace with real ones or remove the section.

#### 7. FAQ
- **Section**: padding `90px clamp(20px,8.4vw,162px)`.
- **Header**: H2 "Frequently Asked Questions"; subtitle "Here are answers to some common questions".
- **Layout**: `repeat(auto-fit, minmax(320px,1fr))`, gap 30px, align-items start. Left = accordion column; right = CTA card.
- **Accordion**: vertical stack gap 16px. Each item: radius 12px, `border-bottom: 1px solid #ddd8cf`. Header is a full-width button (`space-between`, padding `22px 24px`, transparent bg): question Manrope 500, 17px `#28292c`; trailing icon is a **+** (stroke `#333`) when closed, **×** (stroke `#681aff`) when open. **Open** item gets background `#f3eeff` and reveals the answer (Manrope 400, 16px, line-height 1.6, `#4a4a4a`, padding `0 24px 24px`). Single-open behavior (opening one closes others); first item open by default.
- **The 5 FAQ items** (Q — A):
  1. "Do you work remotely with distributed teams?" — "Absolutely. I've collaborated with teams across time zones using async communication, code review, and modern project tooling. I integrate smoothly into your existing workflow, whether that's GitHub, Jira, Slack, or anything else."
  2. "How long does a typical frontend project take?" — "It depends on scope and complexity. A focused feature or landing page can take 1–2 weeks, while a full app or design-system build runs several weeks. After an initial scoping call I'll provide a clear, milestone-based timeline."
  3. "What does your frontend tech stack look like?" — "My core stack is React, TypeScript, and modern tooling (Vite, Next.js, Tailwind, Vitest/Playwright). I adapt to your existing stack and bring best practices for testing, accessibility, and performance to whatever you're already using."
  4. "Can you improve my site's performance and accessibility?" — "Definitely. I audit and optimize Core Web Vitals, bundle size, and rendering, and bring interfaces up to WCAG accessibility standards — so your product is fast, inclusive, and ranks well."
  5. "Can you integrate APIs and third-party services?" — "Yes. From REST and GraphQL APIs to auth, payments, analytics, and CMS platforms, I integrate the services your product relies on cleanly, with proper error handling and types end to end."
- **CTA card** (right): background `#f5f0ff`, `1px` border `#ddccff`, radius 12px, padding 50px, column gap 24px. Purple gradient star-icon tile (60×60). H3 "Still have any Questions ?" Manrope 600, 24px. Paragraph "Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!" (reword to engineering). "Contact Me" button purple `#681aff`, white text, radius 8px, padding `18px 24px`.

#### 8. Footer
- **Section**: padding `70px clamp(20px,8.4vw,162px) 50px`, top border `1px #dad9d3`.
- **Top row** (space-between, wrap): the **bracketed `[AM]` logo lockup** (same as the navbar, links to Home); nav links (Home, About Me, Portfolio, Contact Me — Manrope 500, 17px `#333`); social icons (LinkedIn, Twitter/X, GitHub) — 40×40 squares, radius 8px, background `#681aff`, white glyphs.
- **Contact row** (centered, gaps 30px, margin `40px 0`): email "adonis.martin@gmail.com", phone "+1 (555) 012-3456", location "Remote · Available Worldwide" — each with a small purple-stroke icon. **All placeholders — replace with real details.**
- **Copyright** (centered, top border): "Copyright © 2026 Adonis D. Martin. All rights reserved." Manrope 400, 15px `#888`.

---

## Additional Pages
All three share the **Navbar** (active pill on the current page) and **Footer** specified above, plus the same Design Tokens. Section padding is `clamp(20px,8.4vw,162px)` horizontal; content capped at `max-width:1920px; margin-inline:auto`. Each page header uses the same white pill badge → H1 (`clamp(38px,3.8vw,54px)`, weight 600) → muted subtitle pattern.

### About Me (`About Me.dc.html`)
Recreated to match the Figma "About Page" frame.
- **Intro** (two-column, flex-wrap, gap 80): left = the faceted dark graphic (same layered background as the Home hero — `hero-grid.png` tile + purple gradient wash + `hero-bg.jpg`, radius 20, ~596px tall, with the two beige notch SVGs at opposite corners). Right = a column (gap 60) of: a beige badge pill (`#faf7f1`, radius 8, padding `14px 18px`, 18px/500 `#681aff`) "About Me"; H1 "I'm Adonis D. Martin" (Manrope 600, up to 58px); and a body paragraph (18px, `#4a4a4a`). *(The bordered stats box \u2014 55+ Completed Projects / 20+ Happy Customers / 08+ Years of Experience \u2014 was removed from the hero.)*
- **Milestones of My Career** *(the Figma frame's alternating timeline)*: NOT used in the current prototype — the page keeps the intro hero (faceted graphic + bordered stats) but uses the sections below instead. The Figma timeline spec is preserved at the end of this section for reference.
- **My Journey** (timeline, max-width 880, centered): 3 cards `#f9f8f6`, radius 12, padding `36px 40px`, each with a 6px purple gradient spine + role title (22/600) · company (16/500 `#681aff`) · dates (15 `#888`) + description. Roles: Senior Frontend Engineer · Northwind Labs · 2022–Present; Frontend Engineer · Vela Commerce · 2019–2022; UI Engineer · Bright Studio · 2017–2019. **Placeholder content.**
- **Tools I Work With**: 4 cards (`auto-fit minmax(280px,1fr)`, `#f9f8f6`), each a group heading + pill chips (white `#fff`, radius 8): Languages (TypeScript, JavaScript, HTML, CSS/Sass); Frameworks (React, Next.js, Remix, Vue); Styling (Tailwind, CSS Modules, styled-components); Tooling & Testing (Vite, Vitest, Playwright, Storybook, GitHub Actions).
- **How I Work**: 3 value cards (`auto-fit minmax(300px,1fr)`, `#f9f8f6`, padding 50) with purple gradient icon tiles (64×64): Accessibility First, Performance Obsessed, Clear Communication.
- **CTA band**: `#f5f0ff` + `1px #ddccff`, radius 12, padding 60 — H3 "Have a project in mind?" + "Contact Me" button → Contact.
- *(Reference — Figma timeline, not in the prototype)*: a vertical timeline with a central 2px spine (`#d0b7ff` track + `#681aff` progress) and alternating `1fr 34px 1fr` rows — year pill + navigator dot + content card (with pointer tip) + title pill — each row with a 112×112 colored icon tile (Now/Expanding Horizons `#9e00ff`; 2022/A Collaborative Partnership `#5edc11`; 2021/Entrepreneurial Pursuits `#ffce22`; 2020/A Corporate Adventure `#ff7222`; 2019/Learning and Growing `#ff22e9`; 2018/A World of Possibilities `#2260ff`).

### Portfolio (`Portfolio.dc.html`)
- **Header** (centered): badge "Portfolio" + H1 "Selected work I've designed, built & shipped" + subtitle.
- **Filter bar** (centered chips, gap 12): **All · Dashboards · Design Systems · E-Commerce · Marketing**. Active chip = `#681aff` bg / `#fcfbf8` text / `#681aff` border; inactive = `#fff` bg / `#333` text / `#e4e0d8` border, radius 8, padding `11px 20px`. Clicking filters the grid by category; "All" shows everything.
- **Project grid** (`auto-fit minmax(340px,1fr)`, gap 30): 6 cards `#f7f6f3`, radius 12, padding 30. Each = image slot (`aspect-ratio:16/10`, radius 12) with a category label chip overlaid top-left (`rgba(238,235,229,0.92)` blur, `#681aff` text) → tag pill row (white, 13px) → title (21/600) → description (16/`#4a4a4a`) → "View Project ↗" link (`#681aff`). Projects (placeholders): Realtime Analytics Dashboard, Component Library & Design System, E-Commerce Storefront Rebuild, SaaS Onboarding Flow, Marketing Site & Headless CMS, Booking & Scheduling Platform.
- **State**: one `filter` string (default "All"). **CTA band** identical pattern to About → "Start a Project".

### Contact Me (`Contact Me.dc.html`)
- **Header** (centered): badge "Contact Me" + H1 "Let's build something great together" + subtitle.
- **Body** (two-column `auto-fit minmax(340px,1fr)`, gap 30, align-items start):
  - **Form card** (`#f9f8f6`, radius 12, padding 50): H2 "Send a message" + fields **Name**, **Email**, **Subject** (optional), **Message** (textarea, 5 rows). Inputs: white bg, `1px #e4e0d8`, radius 8, padding `16px 18px`, 16px; focus border `#681aff`. Submit = "Send Message" primary `#681aff` with send icon.
  - **Info column**: "Get in touch" card (`#f5f0ff` + `1px #ddccff`) with Email / Phone / Location rows (48×48 white icon tiles, purple stroke) + social squares (44×44, `#681aff`); plus an availability card (`#f9f8f6`) with a green status dot — "Currently available for new projects · Booking work starting July 2026". **All contact details are placeholders.**
- **Form behavior / state**: controlled fields (`name`, `email`, `subject`, `message`) + `submitted` flag. On submit: validate Name non-empty, Email matches a basic regex, Message non-empty; invalid fields show red helper text (`#c0392b`). On success the card swaps to a confirmation ("Thanks, {firstName}!" + the entered email) with a "Send another message" reset button. The prototype does **not** POST anywhere — wire the submit to your backend/email service (e.g. an API route, Formspree, Resend).

---

## Interactions & Behavior
- **FAQ accordion**: single-open; clicking a header toggles it (clicking the open one closes it). First item open on load. Icon swaps +/×; open item background changes to `#f3eeff` and answer expands.
- **Nav / footer links** navigate between the four page files (`Adonis%20Martin%20Portfolio.dc.html`, `About%20Me.dc.html`, `Portfolio.dc.html`, `Contact%20Me.dc.html`); the wordmark links to Home, and the current page's nav item shows the active pill. In production wire these to routes (`/`, `/about`, `/portfolio`, `/contact`) and drive the active state from the router.
- **Hover states** (not all in prototype — add per your design system): nav links and buttons should darken/lift slightly; project cards can lift with a shadow; social icons can deepen.
- **Carousel arrows** in Testimonials are decorative in the prototype — implement paging if desired.
- **Responsive**: the body sections are fully fluid — flex-wrap (hero) and CSS `grid auto-fit minmax(...)` (all card grids) reflow columns to fewer-per-row then stack on narrow screens without media queries, and horizontal padding scales via `clamp()`. Hero stacks vertically when narrow (panel keeps min-height 480px). These degrade gracefully down through tablet.
  - **Known gaps to address when you implement (the prototype has no media queries):**
    1. **Navbar** — does not collapse; add a hamburger/drawer below ~768px (see Navbar note above). This is the priority fix.
    2. **Card padding** — cards use `40–50px` padding, which is heavy on phones; step it down (e.g. to ~`24–28px`) below ~640px.
    3. **Hero badge/heading** — badge text is a fixed 26px and the stat-strip padding (`36px 50px`) is generous; consider reducing both on small screens.
  - Use your codebase's breakpoint system for these; the fluid grids handle everything else.

## State Management
- Minimal. Only the **FAQ open-index** (which item is expanded; integer, `-1` = all closed; defaults to `0`).
- If you add a working testimonials carousel: current-slide index + next/prev handlers.
- No data fetching in the design. Project, testimonial, skill, benefit, and FAQ data are good candidates to move into typed arrays/JSON and `.map()` over in components.

## Design Tokens
**Colors**
- Page background (beige): `#eeebe5`
- Card surfaces: `#f9f8f6`, `#fbfbfb`, `#f7f6f3`, `#fcfbf8`, `#faf7f1` (subtle warm variants)
- Text primary: `#28292c`
- Text on dark / button label: `#333`
- Text muted: `#4a4a4a`; faint: `#888`
- Accent purple: `#681aff` (gradient pair `#9a5cff → #681aff`)
- Light purple surfaces: `#f5f0ff` (fill), `#f3eeff` (FAQ open), `#ddccff` (border)
- Dark navy button: `#000d2f`; navy icon accent: `#a06bff`
- Hero dark fallback: `#131519`
- Borders: `#dad9d3`, `#ddd8cf`, `#ebe7e0`, `#d9d6cf`
- Neutral placeholder tiles: `#dededb`

**Typography**
- Font: **Manrope** (Google Fonts), weights 400/500/600/700/800. (Original Figma also used Inter; the build standardized on Manrope.)
- H1 hero: 600, `clamp(40px,4vw,58px)`, line-height 1.18
- Section H2: 600, `clamp(34px,3.4vw,48px)`
- Card H3: 600, 20–24px
- Body: 400, 16–18px, line-height 1.55–1.6
- Wordmark: 600, 22px (in the `[AM]` logo lockup; brackets are 700/30px `#681aff`, "AM" 700/24px `#28292c`)

**Spacing**
- Section vertical padding: 90px (70px footer top)
- Section horizontal padding: `clamp(20px, 8.4vw, 162px)` (mirrors the 162px gutter on a 1920px Figma frame)
- Card padding: 40–50px
- Grid/stack gaps: 16 / 20 / 24 / 30 / 50px

**Radius**: 8px (buttons, tiles, small), 12px (cards), 13px (hero badge), `0 0 0 30px` (hero panel).

**Shadows**: soft, low-opacity — badge `0 8px 30px rgba(0,0,0,0.04)`; stat card `0 10px 40px rgba(0,0,0,0.03)`; icon-tile inner glow `inset 0 0 14px 4px rgba(255,255,255,0.45)`.

## Assets
Located in `assets/` in this bundle:
- `hero-bg.jpg` — black 3D faceted background image for the hero panel (from the original Figma template).
- `hero-grid.png` — tiny tiling pixel-grid texture overlaid on the hero panel.
- `abstract-1.svg`, `abstract-2.svg` — beige notch/cutout shapes decorating the hero panel corners.
- Icons used in the build are inline SVG (Feather/Lucide-style line icons + social glyphs) — recreate with your icon library (e.g. `lucide-react`).
- **Project screenshots and testimonial avatars are NOT included** — they're user-supplied. Drop in real assets.

## Files
- `Adonis Martin Portfolio.dc.html` — **Home** page prototype (inline styles + small FAQ accordion script). Source of truth for the shared navbar/footer and Home sections.
- `About Me.dc.html` — **About** page prototype.
- `Portfolio.dc.html` — **Portfolio** page prototype (includes the working category-filter logic).
- `Contact Me.dc.html` — **Contact** page prototype (includes the working form validation + success-state logic).
- `image-slot.js` — the drag-and-drop image placeholder web component used for the project/portrait images in the prototypes. **Not needed in production** — replace slots with real `<img>`/`next/image`.
- `assets/` — see above.

## Recommended implementation notes
- Suggested stack: **Next.js + React + TypeScript** with Tailwind or CSS Modules. (Fitting, since the persona is a React/TS frontend engineer.)
- Componentize: `Navbar`, `Hero`, `StatStrip`, `SkillCard`/`SkillsGrid`, `BenefitCard`/`BenefitsGrid`, `ProjectCard`/`WorksGrid`, `TestimonialCard`/`Testimonials`, `FaqAccordion`, `Footer`.
- Move skills/benefits/projects/testimonials/FAQ into typed data arrays and map over them.
- Load Manrope via `next/font` or a `<link>`; set it as the base font family.
- Reword the few remaining "web designer / web design" subtitles (flagged inline above) to match the engineering persona.
- Replace all placeholder content: stats, project names + screenshots, testimonials, and contact details.
