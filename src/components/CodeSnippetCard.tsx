'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CodeSnippet } from '@/types/design';

interface CodeSnippetCardProps {
  snippet: CodeSnippet;
}

export default function CodeSnippetCard({ snippet }: CodeSnippetCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 px-4 sm:px-5 md:px-6 py-3 sm:py-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 truncate">
            {snippet.filename || `${snippet.language} snippet`}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 sm:mt-1 line-clamp-2">
            {snippet.description}
          </p>
        </div>
        <button
          onClick={copyToClipboard}
          className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 text-zinc-900 dark:text-zinc-100 rounded-md transition-all flex items-center justify-center gap-2 whitespace-nowrap touch-manipulation"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Copy Code</span>
              <span className="sm:hidden">Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="max-h-80 sm:max-h-96 overflow-auto">
        <SyntaxHighlighter
          language={snippet.language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: '0.8rem',
          }}
        >
          {snippet.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
