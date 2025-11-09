'use client';

import { useState } from 'react';
import { Palette, Sparkles, Loader2, Lightbulb, Type, Layout, Code, Triangle } from 'lucide-react';
import type { BrandInput, DesignResponse } from '@/types/design';
import ColorPaletteCard from '@/components/ColorPaletteCard';
import FontCard from '@/components/FontCard';
import CodeSnippetCard from '@/components/CodeSnippetCard';
import ThemeCard from '@/components/ThemeCard';
import LayoutCard from '@/components/LayoutCard';

export default function Home() {
  const [formData, setFormData] = useState<BrandInput>({
    description: '',
    industry: '',
    targetAudience: '',
    style: '',
    additionalNotes: '',
  });
  const [loading, setLoading] = useState(false);
  const [designResponse, setDesignResponse] = useState<DesignResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDesignResponse(null);

    try {
      const response = await fetch('/api/generate-design', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate design');
      }

      const data: DesignResponse = await response.json();
      setDesignResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Triangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-2.5xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)]">
                Prism AI
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                AI-Powered Design Assistant
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Input Form */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)]">
            Describe Your Brand or Project
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Brand/Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={handleInputChange}
                placeholder="e.g., A modern fitness app for millennials focused on mental wellness and yoga..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 touch-manipulation"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Health & Wellness, Tech, E-commerce"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 touch-manipulation"
                />
              </div>

              <div>
                <label
                  htmlFor="targetAudience"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Target Audience
                </label>
                <input
                  type="text"
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  placeholder="e.g., Young professionals, 25-35"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 touch-manipulation"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="style"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Preferred Style
              </label>
              <select
                id="style"
                name="style"
                value={formData.style}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 touch-manipulation"
              >
                <option value="">Select a style...</option>
                <option value="modern">Modern</option>
                <option value="minimal">Minimal</option>
                <option value="bold">Bold</option>
                <option value="elegant">Elegant</option>
                <option value="playful">Playful</option>
                <option value="professional">Professional</option>
                <option value="creative">Creative</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={3}
                value={formData.additionalNotes}
                onChange={handleInputChange}
                placeholder="Any specific requirements, preferences, or constraints..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 touch-manipulation"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !formData.description}
              className="w-full px-5 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg touch-manipulation"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Generating Design Suggestions...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Generate Design Suggestions</span>
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-red-800 dark:text-red-200">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {/* Results */}
        {designResponse && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-5 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)]">
                Design Overview
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {designResponse.overview}
              </p>
            </div>

            {/* Themes */}
            {designResponse.themes && designResponse.themes.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)] flex items-center gap-2 sm:gap-3">
                  <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  Theme Suggestions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {designResponse.themes.map((theme, index) => (
                    <ThemeCard key={index} theme={theme} />
                  ))}
                </div>
              </section>
            )}

            {/* Color Palettes */}
            {designResponse.colorPalettes && designResponse.colorPalettes.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)] flex items-center gap-2 sm:gap-3">
                  <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  Color Palettes
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {designResponse.colorPalettes.map((palette, index) => (
                    <ColorPaletteCard key={index} palette={palette} />
                  ))}
                </div>
              </section>
            )}

            {/* Fonts */}
            {designResponse.fonts && designResponse.fonts.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)] flex items-center gap-2 sm:gap-3">
                  <Type className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  Font Suggestions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {designResponse.fonts.map((font, index) => (
                    <FontCard key={index} font={font} />
                  ))}
                </div>
              </section>
            )}

            {/* Layouts */}
            {designResponse.layouts && designResponse.layouts.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)] flex items-center gap-2 sm:gap-3">
                  <Layout className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  Layout Suggestions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {designResponse.layouts.map((layout, index) => (
                    <LayoutCard key={index} layout={layout} />
                  ))}
                </div>
              </section>
            )}

            {/* Code Snippets */}
            {designResponse.codeSnippets && designResponse.codeSnippets.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-zinc-900 dark:text-zinc-100 font-[family-name:var(--font-sixtyfour)] flex items-center gap-2 sm:gap-3">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  Code Snippets
                </h2>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {designResponse.codeSnippets.map((snippet, index) => (
                    <CodeSnippetCard key={index} snippet={snippet} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && !designResponse && !error && (
          <div className="text-center py-12 sm:py-16 md:py-20 px-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 font-[family-name:var(--font-sixtyfour)]">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
              Fill out the form above to get AI-powered design suggestions including themes, colors, fonts, layouts, and code snippets.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12 sm:mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8">
          <p className="text-center text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Powered by Google Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
}

