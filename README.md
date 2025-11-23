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
│   ├── server.ts          # Fastify server entry point
│   ├── components.tsx     # KitaJS components (Layout, CounterComponent)
│   └── styles.css         # Tailwind CSS directives
├── public/
│   └── .gitkeep          # Placeholder (output.css will be generated here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

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

## Components

### Layout Component

Full HTML wrapper with:
- Tailwind CSS (`/public/output.css`)
- htmx (from CDN)
- Alpine.js (from CDN)

### CounterComponent

Demonstrates both htmx and Alpine.js:
- **htmx button**: Server-side interaction with `hx-post`, `hx-target`, `hx-swap`
- **Alpine.js dropdown**: Client-side reactivity with `x-data`, `x-show`, `x-transition`

## Routes

- `GET /` - Main page with counter component
- `POST /increment` - Increment counter (placeholder logic)

## Next Steps

This is a **scaffolding project** with placeholder business logic. To build your application:

1. Add actual state management in `src/server.ts`
2. Create additional components in `src/components.tsx` or separate files
3. Add more routes and handlers
4. Customize Tailwind configuration
5. Add database integration
6. Implement authentication/authorization

## License

ISC
