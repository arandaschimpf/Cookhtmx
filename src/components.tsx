import type { PropsWithChildren } from '@kitajs/html';

// Layout component - Full HTML wrapper
export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Cookhtmx - Modern Server-Driven Web App</title>

          {/* Tailwind CSS */}
          <link rel="stylesheet" href="/public/output.css" />

          {/* htmx */}
          <script
            src="https://unpkg.com/htmx.org@2.0.4"
            integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+"
            crossorigin="anonymous"
          ></script>

          {/* Alpine.js */}
          <script
            defer
            src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.3/dist/cdn.min.js"
          ></script>
        </head>
        <body class="bg-gray-50 min-h-screen">
          {children}
        </body>
      </html>
    </>
  );
}

// CounterComponent props interface
export interface CounterComponentProps {
  count: number;
}

// CounterComponent - Reusable component with htmx and Alpine.js
export function CounterComponent({ count }: CounterComponentProps) {
  return (
    <div id="counter" class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-semibold mb-2">Counter Component</h2>
        <p class="text-gray-600">Current count: <span class="font-bold text-blue-600">{count}</span></p>
      </div>

      {/* htmx button */}
      <div class="mb-6">
        <button
          hx-post="/increment"
          hx-target="#counter"
          hx-swap="outerHTML"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Increment (htmx)
        </button>
      </div>

      {/* Alpine.js dropdown example */}
      <div
        x-data="{ open: false }"
        class="relative"
      >
        <button
          x-on:click="open = !open"
          class="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-between"
        >
          <span>Toggle Dropdown (Alpine.js)</span>
          <svg
            x-bind:class="open ? 'rotate-180' : ''"
            class="w-5 h-5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <div
          x-show="open"
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 transform scale-95"
          x-transition:enter-end="opacity-100 transform scale-100"
          x-transition:leave="transition ease-in duration-150"
          x-transition:leave-start="opacity-100 transform scale-100"
          x-transition:leave-end="opacity-0 transform scale-95"
          class="absolute mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
          x-cloak
        >
          <ul class="py-1">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition-colors">Option 1</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition-colors">Option 2</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition-colors">Option 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
