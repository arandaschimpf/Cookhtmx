# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cookhtmx is a server-driven web application using Fastify, KitaJS HTML (JSX/TSX for server-side rendering), htmx, Alpine.js, and Tailwind CSS. It follows an MVC-like architecture pattern with server-side rendering and minimal client-side JavaScript.

## Key Commands

**Development:**
```bash
pnpm run dev          # Start both server (with hot reload) and Tailwind CSS watcher
pnpm run dev:server   # Run only server with tsx watch
pnpm run dev:css      # Run only Tailwind CSS watcher
```

**Production:**
```bash
pnpm run build        # Compile TypeScript and build minified CSS
pnpm start            # Run production server from dist/
```

**Type Checking:**
```bash
pnpm run type-check   # TypeScript type checking without emitting files
```

## Architecture

### Server-Side JSX with KitaJS

This project uses **KitaJS HTML** for server-side JSX/TSX rendering, not React:

- Components are TSX files that return HTML strings
- JSX is compiled using `"jsx": "react-jsx"` with `"jsxImportSource": "@kitajs/html"` in tsconfig.json
- No React imports needed - KitaJS provides its own JSX factory
- Controllers return HTML via `reply.html(<Component />)`

### File Structure Pattern

```
src/
├── components/          # Reusable UI components (Layout, Counter, etc.)
├── views/              # Full page views that compose components
├── controllers/        # Route handlers with business logic
├── types/             # Shared TypeScript types
├── server.ts          # Fastify server entry point
└── styles.css         # Tailwind directives
```

### Component Architecture

**Components** (`src/components/`): Reusable pieces like Layout, Counter
- `Layout.tsx`: Full HTML wrapper with head, scripts (htmx, Alpine.js), and Tailwind CSS
- Export typed props interfaces

**Views** (`src/views/`): Complete pages that compose components
- Example: `HomePage.tsx` wraps `Counter` in `Layout`
- Should be complete, renderable pages

**Controllers** (`src/controllers/`): Fastify route handlers
- Import views and components
- Handle request/response logic
- Return HTML using `reply.html(<Component />)`
- Note: Controllers use `.tsx` extension when they render JSX components

### Request Flow

1. Request hits Fastify route in `server.ts`
2. Route delegates to controller function
3. Controller renders view/component with KitaJS JSX
4. Returns HTML string via `reply.html()`
5. htmx handles partial updates on client

### htmx + Alpine.js Pattern

- **htmx**: Server interactions (POST requests, DOM swapping)
  - Example: `hx-post="/increment" hx-target="#counter" hx-swap="outerHTML"`
  - Server returns HTML fragment that replaces target element

- **Alpine.js**: Client-side reactivity (dropdowns, toggles, local state)
  - Example: `x-data="{ open: false }" x-show="open"`
  - No server round-trip needed

## Critical Configuration

### TypeScript JSX Setup

The tsconfig.json **must** have:
```json
{
  "jsx": "react-jsx",
  "jsxImportSource": "@kitajs/html"
}
```

Using `"jsx": "react"` will cause "React is not defined" errors.

### Fastify Plugins

Essential plugins registered in `server.ts`:
1. `@fastify/formbody` - Parse `application/x-www-form-urlencoded` (form submissions)
2. `@kitajs/fastify-html-plugin` - Enable `reply.html()` method
3. `@fastify/static` - Serve static files from `public/` directory

### Using tsx for Development

When working with JSX/TSX files, always use `tsx` (not `ts-node`) for running TypeScript files that contain JSX:
- Development uses `tsx watch src/server.ts` for hot reload
- The `tsx` package handles JSX transformation automatically

## Package Manager

This project uses **pnpm** (version 10.19.0+). Always use `pnpm install`, `pnpm add`, etc.

## Server Details

- Server runs on `http://localhost:3000` (port 3000, host 0.0.0.0)
- Static files served from `public/` at `/public/` prefix
- Tailwind CSS output: `public/output.css`
