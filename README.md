# Cookhtmx

A modern, server-driven web application scaffolding using **Fastify**, **KitaJS HTML**, **Tailwind CSS**, **htmx**, and **Alpine.js**.

## Tech Stack

- **[Fastify](https://fastify.dev/)** - Fast and low overhead web framework for Node.js
- **[KitaJS HTML](https://github.com/kitajs/html)** - Type-safe JSX/TSX for server-side HTML rendering
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[htmx](https://htmx.org/)** - High-power tools for HTML
- **[Alpine.js](https://alpinejs.dev/)** - Lightweight JavaScript framework for interactivity

## Project Structure

```
Cookhtmx/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Layout.tsx     # Main HTML wrapper
│   │   └── Counter.tsx    # Counter component (htmx + Alpine.js example)
│   ├── views/             # Page-level views
│   │   └── HomePage.tsx   # Home page view
│   ├── controllers/       # Route handlers and business logic
│   │   └── counterController.ts
│   ├── types/             # Shared TypeScript types
│   │   └── index.ts
│   ├── server.ts          # Fastify server entry point
│   └── styles.css         # Tailwind CSS directives
├── public/
│   └── .gitkeep          # Placeholder (output.css will be generated here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Folder Structure Explanation

- **`components/`** - Reusable UI components that can be used across multiple views
- **`views/`** - Page-level components that represent complete pages
- **`controllers/`** - Business logic and route handlers, following MVC pattern
- **`types/`** - Shared TypeScript interfaces and types

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

This single command runs both:
- **Server** with hot reload (watches TypeScript files)
- **Tailwind CSS** compiler (watches for style changes)

The server will start at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload (runs both server and CSS watcher)
- `npm run dev:server` - Run only the server with hot reload
- `npm run dev:css` - Run only the Tailwind CSS watcher
- `npm run build` - Compile TypeScript and build CSS for production
- `npm run build:css` - Build Tailwind CSS (minified for production)
- `npm run start` - Run production build
- `npm run type-check` - Type check without emitting files

## Architecture

### Components (`src/components/`)

Reusable UI components:

- **`Layout.tsx`** - Full HTML wrapper with Tailwind CSS, htmx, and Alpine.js from CDN
- **`Counter.tsx`** - Example component demonstrating both htmx and Alpine.js

### Views (`src/views/`)

Page-level components:

- **`HomePage.tsx`** - Main landing page that composes Layout and Counter components

### Controllers (`src/controllers/`)

Route handlers with business logic:

- **`counterController.ts`** - Handles home page rendering and counter increment logic

## Routes

- `GET /` - Main page with counter component
- `POST /increment` - Increment counter (placeholder logic)

## Next Steps

This is a **scaffolding project** with placeholder business logic. To build your application:

1. Add actual state management in `src/controllers/`
2. Create additional components in `src/components/`
3. Create new views in `src/views/`
4. Add more routes and controllers
5. Define your domain types in `src/types/`
6. Customize Tailwind configuration
7. Add database integration
8. Implement authentication/authorization

## License

ISC
