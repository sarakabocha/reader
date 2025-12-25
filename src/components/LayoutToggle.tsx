import React from "react";
import { Rows2, Columns2 } from "lucide-react";

type LayoutToggleProps = {
  isVertical: boolean;
  onToggle: () => void;
};

export function LayoutToggle({ isVertical, onToggle }: LayoutToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-16 md:right-16 z-40 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={isVertical ? "Switch to side-by-side layout" : "Switch to vertical layout"}
      title={isVertical ? "Side-by-side layout" : "Vertical layout"}
    >
      {isVertical ? (
        <Columns2 size={20} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Rows2 size={20} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}

