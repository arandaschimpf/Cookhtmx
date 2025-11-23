import type { PropsWithChildren } from "@kitajs/html";
import { Header } from "./Header.js";
import type { Wallet } from "../types/wallet.js";

export interface LayoutProps extends PropsWithChildren {
  wallets: Wallet[];
}

/**
 * Layout Component
 *
 * Full HTML wrapper with all necessary scripts and stylesheets.
 * Includes Tailwind CSS, htmx, and Alpine.js from CDN.
 */
export function Layout({ children, wallets }: LayoutProps) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
        <body class="bg-black min-h-screen">
          <Header wallets={wallets} />
          {children}
        </body>
      </html>
    </>
  );
}
