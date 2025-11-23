import type { Position } from "../types/position.js";

export interface PositionsModalProps {
  positions: Position[];
}

/**
 * PositionsModal Component
 *
 * Modal overlay displaying all active positions for the selected wallet.
 * Uses Alpine.js for modal animations and htmx for closing.
 */
export function PositionsModal({ positions }: PositionsModalProps) {
  return (
    <div
      x-data="{ show: true }"
      x-show="show"
      class="fixed inset-0 z-50 flex items-start justify-center pt-20"
      style="background-color: rgba(0, 0, 0, 0.8);"
    >
      <div
        class="w-full max-w-3xl rounded-lg bg-gray-300 shadow-xl border border-gray-500"
        {...{
          "x-on:click.outside":
            "show = false; setTimeout(() => document.getElementById('positions-modal').innerHTML = '', 150)",
        }}
      >
        {/* Modal Header */}
        <div class="flex items-center justify-between border-b border-gray-500 p-4">
          <div class="flex items-center gap-2">
            <img
              src="/public/icons/positions-icon.svg"
              alt="Positions"
              width="20"
              height="20"
            />
            <h2 class="text-lg font-bold text-white-1000">Active Positions</h2>
          </div>
          <button
            type="button"
            class="text-gray-700 hover:text-white-1000 transition-colors"
            {...{
              "x-on:click":
                "show = false; setTimeout(() => document.getElementById('positions-modal').innerHTML = '', 150)",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div class="max-h-[60vh] overflow-y-auto">
          {positions.length === 0 ? (
            <div class="p-8 text-center text-gray-700">
              <p class="text-lg">No active positions</p>
            </div>
          ) : (
            <table class="w-full">
              <thead class="sticky top-0 bg-gray-300 border-b border-gray-500">
                <tr class="text-gray-700 text-xs uppercase">
                  <th class="p-3 text-left font-semibold">Token</th>
                  <th class="p-3 text-right font-semibold">
                    SOL{" "}
                    <svg
                      class="inline w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M6 3v6m0 0l3-3m-3 3L3 6" />
                    </svg>
                  </th>
                  <th class="p-3 text-right font-semibold">Holding</th>
                  <th class="p-3 text-right font-semibold">
                    PnL %{" "}
                    <svg
                      class="inline w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M6 3v6" />
                    </svg>
                  </th>
                  <th class="p-3 text-right font-semibold">
                    Liquidity{" "}
                    <svg
                      class="inline w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M6 3v6" />
                    </svg>
                  </th>
                  <th class="p-3 text-right font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {positions.map((position) => (
                  <tr class="border-b border-gray-500 hover:bg-gray-400 transition-colors">
                    <td class="p-3">
                      <div class="flex items-center gap-2">
                        <img
                          src={position.imageUrl}
                          alt={position.symbol}
                          width="32"
                          height="32"
                          class="rounded-full"
                          onerror="this.src='https://dev.cooking.gg/img/tokens/no-image.png'"
                        />
                        <div>
                          <div class="font-bold text-white-1000">
                            {position.symbol}
                          </div>
                          <div class="text-xs text-gray-700">
                            {position.mint}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3 text-right text-white-1000 font-mono">
                      {position.price.toFixed(6)} SOL
                    </td>
                    <td class="p-3 text-right text-white-1000 font-mono">
                      {position.holdings.toFixed(6)} SOL
                    </td>
                    <td class="p-3 text-right font-mono">
                      <span
                        class={
                          position.changePercent >= 0
                            ? "text-green-300"
                            : "text-red-300"
                        }
                      >
                        {position.changePercent > 0 ? "+" : ""}
                        {position.changePercent.toFixed(3)}%
                      </span>
                    </td>
                    <td class="p-3 text-right text-white-1000 font-mono">
                      0 SOL
                    </td>
                    <td class="p-3 text-right">
                      <div class="flex items-center justify-end gap-2">
                        <button class="px-3 py-1.5 bg-button-primary-bg-default hover:bg-button-primary-bg-hover rounded text-white-1000 text-sm font-medium transition-colors">
                          Trade
                        </button>
                        <button class="px-2 py-1.5 bg-gray-400 hover:bg-gray-500 rounded text-white-1000 text-sm transition-colors">
                          •••
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
