# Articulate Allied Health

Marketing and information website for **Articulate Allied Health**, a speech pathology
practice offering personalised, evidence-based therapy for children and adults —
delivered where clients live, learn, work, and play.

The site presents the practice's services, fees, clinical supervision offerings,
preschool screeners, team, FAQs, and policy documents, with animated page
transitions and smooth momentum scrolling.

## Tech stack

- **React 18** + **TypeScript** — UI
- **Vite 4** — dev server & build
- **React Router DOM 7** — client-side routing (SPA)
- **Tailwind CSS 3** — styling (with PostCSS + Autoprefixer)
- **Framer Motion** — page transitions and reveal-on-scroll animations
- **Lenis** — smooth / momentum scrolling
- **Heroicons** & **lucide-react** — icons

## Getting started

### Prerequisites

- **Node.js 18+** (the Docker and Nixpacks builds pin Node 18)
- **npm**

### Install & run

```bash
npm install     # install dependencies
npm run dev     # start the Vite dev server (http://localhost:5173)
```

### Available scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the local dev server with HMR          |
| `npm run build`   | Type-aware production build to `dist/`        |
| `npm run preview` | Serve the production build locally to verify |

## Project structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Router, providers, and page layout
├── index.css             # Global styles / Tailwind directives
├── components/
│   ├── layout/           # Header, Footer (site chrome)
│   ├── sections/         # Home-page sections (Hero, Landing, Services, …)
│   ├── pages/            # Standalone routed pages (About, Fees, FAQs, …)
│   └── ui/               # Reusable UI (Section, Reveal, PillLink,
│                         #   ContactModal, PageTransition, SmoothScroll, …)
├── context/
│   └── ContactModalContext.tsx   # Global contact-modal state
├── data/                 # Content/data layer, separated from presentation
│   ├── navigation.ts     # Nav + footer policy links
│   ├── services.tsx      # Services offered
│   ├── fees.tsx          # Fee schedule
│   ├── policies.tsx      # Policy document content
│   ├── team.tsx          # Team members
│   ├── supervision.ts    # Clinical supervision
│   ├── preschool.ts      # Preschool screeners
│   ├── faqs.tsx          # FAQ entries
│   └── values.ts         # Practice values
└── lib/
    ├── lenis.ts          # Smooth-scroll setup + scrollToTop helper
    └── motion.ts         # Shared Framer Motion variants
```

Site content lives in `src/data/` so copy can be edited without touching the
components that render it.

### Routes

| Path                    | Page                                    |
| ----------------------- | --------------------------------------- |
| `/`                     | Home (hero + landing + services + more) |
| `/about`                | About the practice                      |
| `/services`             | Services we provide                     |
| `/fees`                 | Fees                                    |
| `/supervision`          | Clinical supervision                    |
| `/preschool-screeners`  | Preschool screeners                     |
| `/faq`                  | Frequently asked questions              |
| `/policy`               | Policy index                            |
| `/policy/:slug`         | Individual policy document              |

## Deployment

The app builds to a static SPA in `dist/`. Because routing is client-side, the
host must rewrite unknown paths to `index.html`:

- **Cloudflare Pages** — handled by `public/_redirects` (`/* /index.html 200`).
- **Docker / Nginx** — the multi-stage `Dockerfile` builds the app and serves
  `dist/` with Nginx (`nginx.conf` includes the SPA fallback). Build and run:

  ```bash
  docker build -t articulate-ah .
  docker run -p 8080:80 articulate-ah
  ```

- **Nixpacks** — `nixpacks.toml` runs `npm install && npm run build` for
  platforms that build from source (e.g. Railway).

> `dist/` is generated and not committed — build it as part of deployment.
