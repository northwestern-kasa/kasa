# AGENTS.md

## Purpose
This file tells coding agents how to work in this repo safely and consistently.
Keep changes focused, minimal, and easy to review.

## Project Snapshot
- App: KASA website frontend
- Stack: React 18 + TypeScript + Vite + TailwindCSS
- Routing: `react-router-dom` (defined in `src/App.tsx`)
- CMS/Data: Contentful (`src/contentful.ts`)
- Package manager/runtime: Bun (primary)

## Environment
- Node-compatible environment is required for Vite tooling.
- Bun is the default package manager in this repo.
- Required env vars (via `.env`):
  - `VITE_CONTENTFUL_SPACE_ID`
  - `VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN`
  - `VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN` (optional, for preview mode)
  - `VITE_CONTENTFUL_USE_PREVIEW` (`true`/`false`, optional)
- Never log, paste, or commit secret values in PRs/issues.

## Source Layout
- `src/main.tsx`: app bootstrap
- `src/App.tsx`: route table + lazy route loading
- `src/pages/*`: page-level routes
- `src/components/*`: reusable UI sections
- `src/components/ui/*`: shared UI primitives
- `src/contentful.ts`: Contentful client + fetch helpers + in-memory cache
- `src/globals.css`: Tailwind and global styles
- `public/`: static files served as-is
- `assets/`: images/fonts used by app code

## Commands (Bun)
- Install deps: `bun install`
- Start dev server: `bun run dev`
- Lint: `bun run lint`
- Build: `bun run build`
- Preview build: `bun run preview`

## Agent Workflow
1. Read relevant files first; avoid broad refactors unless requested.
2. Reuse existing patterns in nearby files (imports, component style, naming).
3. Prefer small, surgical edits over rewriting whole files.
4. Run checks before finishing:
   - `bun run lint`
   - `bun run build`
5. If checks fail, fix issues introduced by your change (do not hide with ignores).
6. Report what changed, why, and any follow-up needed.

## Coding Conventions
- TypeScript: keep strict-safe typings; avoid `any` unless unavoidable.
- React: functional components + hooks.
- Imports:
  - Use `@/` alias for `src/*` when practical.
  - Keep import ordering consistent with surrounding file style.
- Styling:
  - Prefer Tailwind utility classes.
  - Keep custom global CSS in `src/globals.css` minimal and intentional.
- Routing:
  - Add new pages under `src/pages`.
  - Register route in `src/App.tsx`.
  - Keep lazy-loading approach for non-critical routes unless there is a clear reason not to.
- Data fetching:
  - Use helpers in `src/contentful.ts` instead of duplicating CMS client setup.
  - Preserve cache behavior unless a task explicitly requires changing it.

## Dependency and Lockfile Rules
- Use Bun commands (`bun add`, `bun remove`, `bun install`).
- Treat `bun.lockb` as the lockfile of record.
- Do not manually edit lockfiles.
- Do not introduce npm/yarn/pnpm-specific workflow changes unless explicitly requested.

## Change Safety
- Do not commit secrets or tokens.
- Do not change `.env` defaults unless the task requires it.
- Avoid destructive file operations unless explicitly asked.
- If unrelated local changes already exist, do not revert them.

## PR / Handoff Checklist
- [ ] Scope matches request.
- [ ] No unrelated file churn.
- [ ] Lint/build pass locally.
- [ ] UI changes checked at mobile and desktop widths.
- [ ] Notes include risks, assumptions, and follow-ups.

## How To Update This File
When project standards change, update these sections in this order:
1. `Commands (Bun)` if scripts/workflows changed.
2. `Source Layout` if folders moved.
3. `Coding Conventions` for new architecture rules.
4. `PR / Handoff Checklist` for new quality gates.

Keep instructions concrete and command-oriented. Avoid vague guidance.
