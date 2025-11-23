import { PositionButton } from "./PositionButton.js";
import type { Position } from "../types/position.js";

export interface PositionsListProps {
  positions: Position[];
}

/**
 * PositionsList Component
 *
 * Displays a list of position buttons with separators.
 * Used in the header to show the user's current positions.
 */
export function PositionsList({ positions }: PositionsListProps) {
  return (
    <>
      {positions.map((position, index) => (
        <>
          <PositionButton position={position} className="max-lg:hidden" />
          {index !== positions.length - 1 && (
            <div class="my-1.5 h-auto min-h-6 w-px bg-gray-700"></div>
          )}
        </>
      ))}
    </>
  );
}
