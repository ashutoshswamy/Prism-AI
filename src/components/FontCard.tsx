import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { FontSuggestion } from '@/types/design';

interface FontCardProps {
  font: FontSuggestion;
}

export default function FontCard({ font }: FontCardProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900">
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {font.name}
          </h3>
          <span className="inline-block mt-1 px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
            {font.category}
          </span>
        </div>
      </div>
      
      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold">Usage:</span> {font.usage}
        </p>
        {font.pairing && (
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Pairs well with:</span> {font.pairing}
          </p>
        )}
      </div>

      <a
        href={font.googleFontUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline touch-manipulation"
      >
        View on Google Fonts
        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </a>
    </div>
  );
}
