import type { Wallet } from '../types/wallet.js';

export interface WalletSelectorProps {
  wallets: Wallet[];
  selectedWallet?: Wallet;
}

/**
 * WalletSelector Component
 *
 * Displays a list of wallets with their balances.
 * Uses htmx to update the selected wallet on the backend.
 */
export function WalletSelector({ wallets, selectedWallet }: WalletSelectorProps) {
  return (
    <div
      id="wallet-selector"
      class="absolute right-0 top-full mt-2 w-[360px] bg-gray-300 rounded-lg shadow-xl border border-gray-500 overflow-hidden z-50"
    >
      {/* Wallet List */}
      <div class="p-3 space-y-2 max-h-[400px] overflow-y-auto">
        {wallets.map((wallet) => (
          <button
            class={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              wallet.isSelected
                ? 'bg-gray-500 border border-gray-700'
                : 'bg-gray-400 hover:bg-gray-500'
            }`}
            hx-post="/wallet/select"
            hx-vals={`{"walletId": "${wallet.id}"}`}
            hx-target="#wallet-selector"
            hx-swap="outerHTML"
          >
            <div class="flex flex-col items-start">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium text-white-1000">{wallet.name}</span>
                {wallet.isSelected && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    class="text-green-300"
                  >
                    <path
                      d="M13.3333 4L6 11.3333L2.66667 8"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span class="text-xs text-gray-700 flex items-center gap-1">
                {wallet.address}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M9 9H3V3h3V2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V6H9v3zM6.5 2v1H8.59L4.76 6.83l.71.71L9.3 3.71V6h1V2H6.5z"/>
                </svg>
              </span>
            </div>
            <div class="flex flex-col items-end">
              <span class="text-sm font-bold text-white-1000">{wallet.solBalance.toFixed(6)}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div class="border-t border-gray-500 p-3 flex gap-2">
        <button
          class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded-lg transition-colors text-white-1000 font-medium text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 8h5m0 0l-2-2m2 2l-2 2m9-2H9m0 0l2-2m-2 2l2 2"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Convert
        </button>
        <button
          class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-button-primary-bg-default hover:bg-button-primary-bg-hover rounded-lg transition-colors text-white-1000 font-medium text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10m0 0l3-3m-3 3l-3-3"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Deposit
        </button>
      </div>
    </div>
  );
}
