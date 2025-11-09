import React from 'react';
import { Copy, Check } from 'lucide-react';
import type { ColorPalette } from '@/types/design';

interface ColorPaletteCardProps {
  palette: ColorPalette;
}

export default function ColorPaletteCard({ palette }: ColorPaletteCardProps) {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);
  
  const colors = [
    { name: 'Primary', value: palette.primary },
    { name: 'Secondary', value: palette.secondary },
    { name: 'Accent', value: palette.accent },
    { name: 'Background', value: palette.background },
    { name: 'Text', value: palette.text },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-zinc-900 dark:text-zinc-100">
        {palette.name}
      </h3>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4">
        {palette.description}
      </p>
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center group">
            <button
              onClick={() => copyToClipboard(color.value)}
              className="w-full aspect-square rounded-md sm:rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:scale-105 active:scale-95 transition-all cursor-pointer relative overflow-hidden touch-manipulation"
              style={{ backgroundColor: color.value }}
              title={`Click to copy ${color.value}`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                {copiedColor === color.value ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100" />
                ) : (
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100" />
                )}
              </div>
            </button>
            <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-zinc-700 dark:text-zinc-300 font-medium text-center leading-tight">
              {color.name}
            </span>
            <span className="text-[9px] sm:text-xs text-zinc-500 dark:text-zinc-500 font-mono break-all text-center">
              {color.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
