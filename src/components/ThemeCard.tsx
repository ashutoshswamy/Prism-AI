import React from 'react';
import type { ThemeSuggestion } from '@/types/design';

interface ThemeCardProps {
  theme: ThemeSuggestion;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-zinc-900 dark:text-zinc-100">
        {theme.name}
      </h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
        <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
          {theme.style}
        </span>
        <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">
          {theme.mood}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 leading-relaxed">
        {theme.description}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {theme.keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}
