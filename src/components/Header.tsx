import { mockPositions } from '../types/position.js';
import { PositionButton } from './PositionButton.js';
import { WalletSelector } from './WalletSelector.js';
import type { Wallet } from '../types/wallet.js';

export interface HeaderProps {
  wallets: Wallet[];
  selectedWallet?: Wallet;
}

/**
 * Header Component
 *
 * Main navigation header with positions display, search, currency toggle, and user controls.
 * Uses Alpine.js for interactive elements like mobile menu, currency toggle, and wallet selector.
 */
export function Header({ wallets, selectedWallet }: HeaderProps) {
  return (
    <header class="col-span-1 row-span-1 overflow-y-hidden bg-black lg:col-span-2">
      <div
        class="relative flex items-center justify-between gap-4 overflow-x-hidden bg-black p-2 max-lg:m-2 max-lg:rounded-lg max-lg:border max-lg:border-gray-400 max-lg:bg-gray-300"
        x-data="{ mobileNavbarOpen: false, showPricesInUsd: false, walletSelectorOpen: false }"
      >
        {/* Hidden placeholder for measuring positions width */}
        <div class="absolute left-0 top-[-40%] flex flex-1 items-stretch justify-start gap-1 opacity-0">
          {mockPositions.map((position, index) => (
            <>
              <PositionButton position={position} className="inline-flex self-center" />
              {index !== mockPositions.length - 1 && (
                <div class="my-2 h-auto min-h-6 w-px bg-gray-500"></div>
              )}
            </>
          ))}
        </div>

        {/* Main content container */}
        <div class="flex h-auto flex-1 items-center gap-4">
          {/* Left section: Modal buttons */}
          <div class="flex items-center justify-between gap-2">
            {/* Positions Modal Button */}
            <button
              class="bg-button-ghost-bg-default hover:bg-button-ghost-bg-hover disabled:bg-button-ghost-bg-disabled active:bg-button-ghost-bg-selected shadow-[0_0_0_1px_var(--tw-shadow-color)] shadow-button-ghost-stroke text-text-primary disabled:text-text-tertiary px-3 py-1.75 rounded-xs"
              type="button"
            >
              <div class="align-center flex items-center flex-row justify-center gap-1">
                <img src="/public/icons/positions-icon.svg" alt="Positions" width="18" height="18" />
                <p class="m-0 font-normal text-3.5 leading-5 tracking-0 text-left">
                  Positions
                </p>
              </div>
            </button>

            {/* Search Modal Button */}
            <button
              class="bg-button-ghost-bg-default hover:bg-button-ghost-bg-hover disabled:bg-button-ghost-bg-disabled active:bg-button-ghost-bg-selected shadow-[0_0_0_1px_var(--tw-shadow-color)] shadow-button-ghost-stroke text-icon-primary disabled:text-icon-quaternary p-2 rounded-2 hidden lg:inline-flex"
              type="button"
            >
              <img src="/public/icons/search-icon.svg" alt="Search" width="18" height="18" />
            </button>
          </div>

          {/* Middle section: Positions display */}
          <div class="flex items-center justify-start gap-1">
            {mockPositions.map((position, index) => (
              <>
                <PositionButton position={position} className="max-lg:hidden" />
                {index !== mockPositions.length - 1 && (
                  <div class="my-1.5 h-auto min-h-6 w-px bg-gray-700"></div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* Right section: Controls */}
        <div class="flex items-center justify-center">
          {/* Currency Toggle */}
          <div class="ml-auto">
            <div class="flex h-full items-center gap-2 rounded-1.5 bg-button-ghost-bg-default p-2 shadow-[0_0_0_1px_var(--tw-shadow-color)] shadow-button-ghost-stroke">
              <p class="text-3.25 text-white-1000">USD</p>
              <button
                type="button"
                role="switch"
                x-on:click="showPricesInUsd = !showPricesInUsd"
                x-bind:aria-checked="showPricesInUsd"
                class="inline-flex items-center gap-2.25 rounded-md text-white-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <div
                  class="inline-flex items-center rounded-full transition-colors duration-200 ease-in-out h-4.5 w-8"
                  x-bind:class="showPricesInUsd ? 'bg-button-primary-bg-default' : 'bg-gray-500'"
                >
                  <div
                    class="flex h-full w-full items-center transition-all duration-200 ease-in-out px-0.5"
                    x-bind:class="showPricesInUsd ? 'justify-end' : 'justify-start'"
                  >
                    <span class="flex-shrink-0 rounded-full bg-white-1000 shadow h-3.5 w-3.5"></span>
                  </div>
                </div>
              </button>
              <p class="text-3.25 font-semibold" x-bind:class="showPricesInUsd ? 'text-white-1000' : 'text-gray-700'">SOL</p>
            </div>
          </div>

          {/* Wallet Popover */}
          <div class="mx-2 max-lg:hidden relative">
            <button
              type="button"
              x-on:click="walletSelectorOpen = !walletSelectorOpen"
              class="text-white-1000 flex items-center gap-2 rounded-1.5 bg-gray-300 py-2 pl-2.5 pr-2 shadow-[0_0_0_1px_var(--tw-shadow-color)] shadow-button-ghost-stroke hover:cursor-pointer hover:bg-gray-500 active:bg-gray-400 disabled:pointer-events-none"
            >
              <div class="flex flex-row items-center gap-1 font-bold">
                <p class="m-0 text-3.25 leading-4.5 tracking-0 text-left font-bold text-text-primary">
                  {selectedWallet?.solBalance.toFixed(6) || '0.000000'}
                </p>
                <img
                  alt="Solana Token Image"
                  loading="lazy"
                  width="18"
                  height="18"
                  decoding="async"
                  class="rounded-full aspect-square"
                  src="https://dev.cooking.gg/img/tokens/sol.png"
                />
              </div>
              <img
                src="/public/icons/chevron-down.svg"
                alt="Expand"
                width="14"
                height="14"
                x-bind:class="walletSelectorOpen ? 'rotate-180' : ''"
                class="transition-transform duration-200"
              />
            </button>

            {/* Wallet Selector Popover */}
            <div x-show="walletSelectorOpen" x-cloak>
              <WalletSelector wallets={wallets} selectedWallet={selectedWallet} />
            </div>
          </div>

          {/* User Avatar */}
          <button
            class="disabled:bg-button-primary-bg-disabled active:bg-button-primary-bg-selected text-text-primary disabled:text-text-tertiary relative mr-0 h-8.5 min-h-8.5 w-8.5 min-w-8.5 cursor-default rounded-full border-0.5 border-gray-500 bg-gray-300 p-0 hover:bg-gray-500 max-lg:hidden"
            style="background-image: url('https://lh3.googleusercontent.com/a/ACg8ocKeJJ5UzwNHGdWEpQqFqc8883cEd9RFqZywose97bTkyTAh_Q=s96-c?v=1763904865'); background-size: cover; background-position: center center;"
          >
          </button>

          {/* Mobile Logo */}
          <div class="ml-2 flex h-full items-center lg:hidden">
            <img src="/public/icons/cooking-chef.svg" alt="Cooking Chef" class="mr-1 size-[26px]" width="30" height="28" />
            <img src="/public/icons/cooking-logo-text.svg" alt="COOKING" width="88" height="16" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            class="bg-button-primary-bg-default hover:bg-button-primary-bg-hover disabled:bg-button-primary-bg-disabled active:bg-button-primary-bg-selected text-text-primary disabled:text-text-tertiary px-3 py-1.75 rounded-xs mr-2 lg:hidden"
            x-on:click="mobileNavbarOpen = !mobileNavbarOpen"
          >
            <div class="align-center flex items-center flex-row justify-center gap-1">
              <img
                src="/public/icons/list-icon.svg"
                alt="Menu"
                class="fill-white-1000"
                width="16"
                height="16"
                x-show="!mobileNavbarOpen"
              />
              <span x-show="mobileNavbarOpen" x-cloak>✕</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
