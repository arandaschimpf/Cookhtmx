import type { Position } from '../types/position.js';

export interface PositionButtonProps {
  position: Position;
  className?: string;
}

/**
 * Format a number with subscript notation for small numbers
 * Example: 0.00010 -> "0.0₃10"
 */
function formatWithSubscript(num: number): string {
  const str = num.toString();
  const match = str.match(/^0\.0+/);

  if (match) {
    const zeros = match[0].length - 2; // Subtract "0."
    if (zeros >= 2) {
      const rest = str.substring(match[0].length);
      return `0.0₃${rest}`;
    }
  }

  return num.toFixed(6);
}

/**
 * PositionButton Component
 *
 * Displays a single token position with image, symbol, holdings, and price change
 */
export function PositionButton({ position, className = '' }: PositionButtonProps) {
  const isPositive = position.changePercent >= 0;
  const changeColor = isPositive ? 'text-green-300' : 'text-red-300';
  const arrowIcon = isPositive ? '/public/icons/arrow-bullish.svg' : '/public/icons/arrow-bearish.svg';
  const arrowColorClass = isPositive ? 'stroke-green-300' : 'stroke-red-300';

  const formattedChange = position.changePercent >= 0
    ? `+${position.changePercent.toFixed(1)}%`
    : `${position.changePercent.toFixed(1)}%`;

  return (
    <button
      class={`items-center justify-center whitespace-nowrap rounded font-medium ring-offset-gray-000 transition-colors duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent h-8 min-w-8 text-xs ml-0 gap-1 px-1 hover:bg-white-6p inline-flex self-center ${className}`}
    >
      <img
        alt={`${position.symbol} image`}
        loading="lazy"
        width="24"
        height="24"
        decoding="async"
        class="rounded-full aspect-square"
        src={position.imageUrl}
      />
      <span class="ml-1 text-sm text-gray-700">{position.symbol}</span>
      <span
        class="ml-1 flex items-center gap-1 text-sm text-white-1000"
        title="Current Holdings"
      >
        {formatWithSubscript(position.holdings)}
        <img
          src="/public/icons/sol-icon.svg"
          alt="SOL"
          class="mr-1 fill-gray-700"
          width="16"
          height="13"
        />
      </span>
      <span class={`text-3.5 ${changeColor}`}>{formattedChange}</span>
      <img
        src={arrowIcon}
        alt={isPositive ? 'Bullish' : 'Bearish'}
        class={`h-4 w-4 ${arrowColorClass}`}
        width="15"
        height="16"
      />
    </button>
  );
}
