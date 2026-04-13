---
description: "Workspace instructions for this Vite React app. Use when modifying frontend React pages, components, routing, styling, build/test scripts, or project structure."
---

# Workspace Instructions for codespaces-react

This repository is a frontend-only React application bootstrapped with Vite and intended for GitHub Codespaces.

## What this project is

- Vite-based React app using ESM (`type: module` in `package.json`).
- Frontend code lives under `src/`.
- Reusable UI is in `src/components/`.
- Route pages are in `src/pages/`.
- App entry point is `src/index.jsx`; application wiring is in `src/App.jsx`.
- Uses React Router v7 via `react-router` and `react-router-dom`.
- Uses Material UI and Tailwind via the `@tailwindcss/vite` plugin.
- `public/` contains static assets such as `manifest.json`.

## Primary workflows

- `npm start` — development server on port `3000` with browser auto-open disabled.
- `npm run build` — production build.
- `npm run preview` — preview build output.
- `npm test` — run Vitest tests.

## Conventions

- Keep code idiomatic, functional React with hooks.
- Prefer small reusable components for UI elements in `src/components/`.
- Keep page-level layouts in `src/pages/` and route configuration in `src/App.jsx`.
- Use ESM imports and exports consistently.
- Keep styling aligned with the existing Tailwind and MUI patterns.
- Do not add a second package manager; the repository is configured for npm.

## When to use these instructions

- Editing or extending React components and pages.
- Working on Vite configuration, app routing, or build/test script behavior.
- Updating dependencies or frontend tooling in `package.json`.
- Adding new user-facing UI, routes, or static assets.

## When not to use these instructions

- If the task is about unrelated tooling or external infrastructure not present in this repo.
- If a new backend or API service is being added outside the current frontend-only app.
