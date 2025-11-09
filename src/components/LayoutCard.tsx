import React from 'react';
import type { LayoutSuggestion } from '@/types/design';

interface LayoutCardProps {
  layout: LayoutSuggestion;
}

export default function LayoutCard({ layout }: LayoutCardProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-zinc-900 dark:text-zinc-100">
        {layout.name}
      </h3>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-2.5 sm:mb-3 leading-relaxed">
        {layout.description}
      </p>
      <div className="space-y-1.5 sm:space-y-2">
        <div>
          <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Best for:
          </span>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
            {layout.bestFor}
          </p>
        </div>
        <div>
          <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Structure:
          </span>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
            {layout.structure}
          </p>
        </div>
      </div>
    </div>
  );
}
