<div align="center">
  <img src="./kasa-app/public/Logo.svg" alt="Northwestern KASA logo" width="96" />
  <h1>Northwestern KASA</h1>
  <p><strong>Northwestern Korean American Student Association website</strong></p>
  <p>Built with React, TypeScript, Vite, Tailwind CSS, and Contentful.</p>
  <p>
    <img alt="Bun" src="https://img.shields.io/badge/Bun-1.1+-000000?logo=bun&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white">
  </p>
</div>

---

![Northwestern KASA homepage preview](./kasa-app/assets/HomePage.webp)

## Overview

This repository contains the public-facing website for Northwestern KASA. The
site includes organization information, family history, events, applications,
contact information, and executive profiles.

The frontend application lives in [`kasa-app`](./kasa-app/).

## Updating website content

Routine content updates do not require editing code. For beginner-friendly
instructions covering homepage banners, events, executive members, publishing,
image preparation, and troubleshooting, read the
**[Contentful update guide](./kasa-app/CONTENTFUL_README.md)**.

## Features

- Responsive layouts for desktop and mobile
- Lazy-loaded secondary pages
- Contentful-managed banners, events, and executive profiles
- Responsive, optimized images
- GitHub Pages deployment from the `main` branch

## Tech stack

| Category | Tooling |
| --- | --- |
| Framework | React 18 |
| Language | TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS |
| Routing | React Router |
| Content | Contentful |
| Linting | ESLint |
| Package manager | Bun |
| Hosting | GitHub Pages |

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) 1.1 or newer
- Node.js 20 or newer
- Contentful delivery credentials

### Install and run the site

From the repository root:

```bash
cd kasa-app
bun install
bun run dev
```

The development server normally starts at
[`http://localhost:5173`](http://localhost:5173).

## Environment variables

Create `kasa-app/.env` with the following values:

```bash
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN=your_delivery_token
VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_optional_preview_token
VITE_CONTENTFUL_USE_PREVIEW=false
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_CONTENTFUL_SPACE_ID` | Yes | Identifies the Contentful space |
| `VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN` | Yes | Reads published content |
| `VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN` | No | Reads draft content during preview |
| `VITE_CONTENTFUL_USE_PREVIEW` | No | Uses preview content when set to `true` |

Never commit real credentials or paste them into issues, pull requests, or
screenshots.

## Available commands

Run these commands from `kasa-app/`:

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the local development server |
| `bun run build` | Type-check and create a production build |
| `bun run lint` | Check the code for lint errors |
| `bun run preview` | Preview the production build locally |

## Repository structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
├── kasa-app/
│   ├── assets/              # Imported images and fonts
│   ├── public/              # Public static files
│   ├── src/
│   │   ├── components/      # Shared interface components
│   │   ├── pages/           # Route-level pages
│   │   ├── App.tsx          # Route definitions
│   │   ├── contentful.ts    # Contentful data helpers
│   │   └── main.tsx         # Application entry point
│   ├── CONTENTFUL_README.md # Content editor guide
│   ├── package.json
│   └── vite.config.ts
└── README.md                # This file
```

## Contentful development notes

Contentful access is centralized in
[`kasa-app/src/contentful.ts`](./kasa-app/src/contentful.ts). Current helpers
include:

- `fetchExecutives`
- `fetchEvents`
- `fetchBanners`
- `fetchEventById`

New pages should reuse these helpers instead of creating additional Contentful
clients.

## Deployment

Pushing to `main` runs
[`deploy.yml`](./.github/workflows/deploy.yml), which installs dependencies,
builds `kasa-app`, and publishes `kasa-app/dist` to GitHub Pages.

Before merging:

```bash
cd kasa-app
bun run lint
bun run build
```

## Contributing

1. Create a focused branch.
2. Keep changes small and relevant.
3. Do not commit `.env` files or credentials.
4. Run lint and the production build.
5. Include screenshots when changing visible interface behavior.

## License

Internal project for Northwestern KASA unless otherwise specified.
