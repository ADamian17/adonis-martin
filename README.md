# Adonis D. Martin — Portfolio

[![ci](https://github.com/ADamian17/adonis-martin/actions/workflows/ci.yml/badge.svg)](https://github.com/ADamian17/adonis-martin/actions/workflows/ci.yml)

Hi, I'm **Adonis D. Martin** — a frontend-focused software engineer who builds fast, accessible, and maintainable web interfaces. This is the source for my personal portfolio: a content-driven single-page app whose pages are composed in [Builder.io](https://www.builder.io/) and rendered by a small, strongly-typed React shell.

🔗 **Live site:** [adonismartin.com](https://adonismartin.com)

## Tech stack

| Area | Choice |
| --- | --- |
| Build tool | [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) |
| UI | [React 19](https://react.dev/) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Data / forms | [TanStack Query](https://tanstack.com/query) · [TanStack Form](https://tanstack.com/form) |
| State | [Valtio](https://valtio.pmnd.rs/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Accessible primitives | [React Aria Components](https://react-spectrum.adobe.com/react-aria/) |
| CMS | [Builder.io](https://www.builder.io/) |
| Contact form | [FormKeep](https://formkeep.com/) |
| Lint / format | [Biome](https://biomejs.dev/) |
| E2E tests | [Playwright](https://playwright.dev/) |
| Hosting | [Vercel](https://vercel.com/) |

## Architecture

Pages are **modeled and edited in Builder.io**, not hardcoded. A single catch-all TanStack route (`src/routes/$.tsx`) fetches the matching `page` entry by URL and renders its registered components. This keeps content editable in the CMS while the code stays a thin, typed rendering layer.

- **Routes:** `/` (home), `/about-me`, `/portfolio`, `/contact-me`
- **Custom Builder components** (hero, works grid, contact form, etc.) are registered so they can be dropped into pages from the Builder visual editor.
- **Navigation** (navbar + footer) is driven by a Builder `menu` model via a Valtio store.

## Getting started

### Prerequisites

- **Node.js 24** (see `.nvmrc`; `engines` enforces it and `.npmrc` sets `engine-strict`)
- **pnpm** (this repo is pnpm-managed — the lockfile and the `packageManager` field pin it)

### Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Configure environment variables
cp env.example .env
#    then fill in the values (see below)

# 3. Start the dev server
pnpm run dev
```

The app runs at <http://localhost:5173>.

### Environment variables

Copy `env.example` to `.env` and provide:

| Variable | Purpose |
| --- | --- |
| `VITE_BUILDER_API_KEY` | Builder.io public API key — required to fetch page content |
| `VITE_GQL_API_ENDPOINT` | Builder.io GraphQL endpoint |
| `VITE_FORMKEEP_URL` | FormKeep endpoint the contact form submits to |

## Scripts

| Command | Description |
| --- | --- |
| `pnpm run dev` | Start the Vite dev server |
| `pnpm run build` | Type-check (`tsc -b`) and build for production |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run lint` | Lint with Biome |
| `pnpm run format` | Format with Biome |
| `pnpm run test:e2e` | Run the Playwright end-to-end suite |
| `pnpm run test:e2e:ui` | Open Playwright's interactive UI mode |
| `pnpm run test:e2e:report` | Open the last HTML test report |

## Testing

End-to-end tests live in [`e2e/`](./e2e) and run with Playwright against the real dev server (auto-started by `playwright.config.ts`). They cover page loads, client-side routing, and the contact form (whose external submission is intercepted so no real request is sent).

```bash
pnpm run test:e2e        # headless run
pnpm run test:e2e:ui     # watch it interactively — best for debugging
```

Every pull request into `main` runs this suite via GitHub Actions alongside a
build job that prerenders every page and asserts the output
([`.github/workflows/ci.yml`](./.github/workflows/ci.yml)). Both are required
checks, so a red run blocks merging.

Note the suite runs against the dev server, so it covers routing and behaviour
but never the built `404.html` — that is what the build job's output assertions
are for.

## Project structure

```
src/
├── components/    # Shared, cross-page components (Navbar, Footer, …)
├── config/        # App configuration
├── features/      # Page-specific feature modules (home, about, portfolio, contact)
├── layouts/       # Page layout shells
├── routes/        # TanStack file-based routes ($ catch-all renders Builder pages)
├── services/      # External integrations (builderIO, FormKeep)
├── store/         # Valtio stores (e.g. navigation menus)
├── ui/            # Reusable UI primitives (Link, Button, Section, TextField, …)
└── utils/         # Helpers (form validation, …)
```

## Deployment

The site deploys to **Vercel**. Pushes to `main` trigger a production deploy; pull requests get preview deployments automatically.

---

_Built by Adonis D. Martin._
