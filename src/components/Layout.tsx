import type { PropsWithChildren } from '@kitajs/html';
import { Header } from './Header.js';
import type { Wallet } from '../types/wallet.js';

export interface LayoutProps extends PropsWithChildren {
  wallets: Wallet[];
  selectedWallet?: Wallet;
}

/**
 * Layout Component
 *
 * Full HTML wrapper with all necessary scripts and stylesheets.
 * Includes Tailwind CSS, htmx, and Alpine.js from CDN.
 */
export function Layout({ children, wallets, selectedWallet }: LayoutProps) {
  return (
    <>
      {'<!DOCTYPE html>'}
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
        <body class="bg-black min-h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr] lg:grid-rows-1 gap-0 h-screen overflow-hidden">
          <Header wallets={wallets} selectedWallet={selectedWallet} />
          {children}
        </body>
      </html>
    </>
  );
}
