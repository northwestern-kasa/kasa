<div align="center">
  <img src="./public/Logo.svg" alt="KASA logo" width="96" />
  <h1>KASA Frontend</h1>
  <p><strong>USC Korean American Student Association website</strong></p>
  <p>Built with React, TypeScript, Vite, TailwindCSS, and Contentful.</p>
  <p>
    <img alt="Bun" src="https://img.shields.io/badge/Bun-1.1+-000000?logo=bun&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white">
    <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white">
  </p>
</div>

---

<!-- ![KASA homepage preview](./assets/HomePage.webp) -->

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [1) Install dependencies](#1-install-dependencies)
  - [2) Configure environment variables](#2-configure-environment-variables)
  - [3) Start development server](#3-start-development-server)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contentful Notes](#contentful-notes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview
KASA Frontend is the public-facing website for USC KASA. It includes:
- route-based pages for club information and applications
- dynamic event and executive data fetched from Contentful
- responsive UI components built with Tailwind and Radix-based primitives

## Features
- Fast Vite dev/build pipeline
- Bun-first development workflow
- Lazy-loaded non-critical routes for better initial load
- Contentful integration with lightweight in-memory response caching
- Responsive navigation and page layouts for mobile and desktop

## Tech Stack
| Category | Tooling |
| --- | --- |
| Framework | React 18 |
| Language | TypeScript |
| Bundler | Vite 6 |
| Styling | TailwindCSS, custom globals |
| UI Primitives | Radix UI |
| Routing | React Router |
| CMS | Contentful |
| Linting | ESLint 9 + typescript-eslint |
| Package Manager | Bun |

## Quick Start
### Prerequisites
- Bun 1.1+ installed
- Node.js 20+ recommended for tooling compatibility

### 1) Install dependencies
```bash
bun install
```

### 2) Configure environment variables
Create `.env` in project root:

```bash
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN=your_delivery_token
VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_optional
VITE_CONTENTFUL_USE_PREVIEW=false
```

### 3) Start development server
```bash
bun run dev
```

The app runs on Vite's local dev server (default `http://localhost:5173`).

## Environment Variables
| Variable | Required | Description |
| --- | --- | --- |
| `VITE_CONTENTFUL_SPACE_ID` | Yes | Contentful space ID |
| `VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN` | Yes | Content Delivery API token (production content) |
| `VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN` | No | Content Preview API token |
| `VITE_CONTENTFUL_USE_PREVIEW` | No | Set `true` to force preview host/token |

## Scripts
| Command | Purpose |
| --- | --- |
| `bun run dev` | Run dev server with host exposure |
| `bun run build` | Type-check (`tsc -b`) and production build |
| `bun run lint` | Lint all source files |
| `bun run preview` | Serve production build locally |

## Project Structure
```text
kasa-app/
├─ src/
│  ├─ App.tsx                # Routes + lazy loading
│  ├─ main.tsx               # React entrypoint
│  ├─ contentful.ts          # CMS client + cached fetch helpers
│  ├─ pages/                 # Route-level pages
│  ├─ components/            # Shared components
│  └─ globals.css            # Tailwind + global styles
├─ public/                   # Static assets served directly
├─ assets/                   # Images/fonts imported into app
├─ vite.config.ts
└─ package.json
```

## Contentful Notes
- Data access is centralized in `src/contentful.ts`.
- Current helpers include:
  - `fetchExecutives`
  - `fetchEvents`
  - `fetchBanners`
  - `fetchEventById`
- Route pages should reuse these helpers rather than creating new client instances.

## Deployment
This is a static Vite app and can be deployed to common static hosts.

Standard production steps:
```bash
bun run lint
bun run build
```

Deploy the generated `dist/` directory.

## Contributing
1. Create a feature branch.
2. Keep changes scoped and easy to review.
3. Run `bun run lint` and `bun run build` before opening a PR.
4. Include screenshots for visible UI changes.

## License
Internal project for KASA/USC unless otherwise specified.
