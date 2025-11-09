'use client';

import Link from 'next/link';
import { Palette, Sparkles, Zap, Code, Layout, Type, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Palette,
      title: 'AI-Generated Color Palettes',
      description: 'Get perfectly harmonized color schemes tailored to your brand identity and target audience.',
    },
    {
      icon: Type,
      title: 'Smart Font Pairing',
      description: 'Discover Google Font combinations that enhance readability and match your design aesthetic.',
    },
    {
      icon: Layout,
      title: 'Layout Suggestions',
      description: 'Receive proven layout patterns and structures optimized for your specific use case.',
    },
    {
      icon: Code,
      title: 'Ready-to-Use Code',
      description: 'Get production-ready CSS and Tailwind code snippets you can implement immediately.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Powered by Google Gemini AI to generate comprehensive design systems in seconds.',
    },
    {
      icon: Sparkles,
      title: 'Theme Variations',
      description: 'Explore multiple theme options with different moods and styles for your project.',
    },
  ];

  const benefits = [
    'Save hours of design research and experimentation',
    'Get professional design suggestions instantly',
    'Ensure accessibility and color contrast compliance',
    'Generate consistent design systems',
    'Perfect for developers and designers alike',
    'Completely free to use',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)]">
                Prism AI
              </h1>
            </div>
            <Link
              href="/app"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              Launch App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgMTE0aDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDkwaDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDY2aDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDQyaDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDE4aDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 dark:opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Powered by Google Gemini AI
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-sixtyfour)]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Design Smarter,
              </span>
              <br />
              <span className="text-zinc-900 dark:text-zinc-100">
                Ship Faster
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into beautiful design systems instantly. Get AI-powered color palettes, typography, layouts, and code snippets tailored to your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/app"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-lg group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-4 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-lg border border-zinc-200 dark:border-zinc-700"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: '10s', label: 'Generation Time' },
                { value: '100%', label: 'Free Forever' },
                { value: 'AI', label: 'Powered' },
                { value: '∞', label: 'Possibilities' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 font-[family-name:var(--font-sixtyfour)]">
              Everything You Need
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A complete design toolkit powered by advanced AI to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 font-[family-name:var(--font-sixtyfour)]">
                Why Choose Prism AI?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Stop wasting time on design research and experimentation. Let AI do the heavy lifting while you focus on building amazing products.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Creating Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 p-8">
                <div className="space-y-6">
                  {/* Mock UI */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-32" />
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'].map((color, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full" />
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex-1" />
                    <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-20" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTM0aDEydjEySDM2em0yNCAwaDEydjEySDYwek0xMiAxMTRoMTJ2MTJIMTJ6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDkwaDEydjEySDEyem0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYwek0xMiA2NmgxMnYxMkgxMnptMjQgMGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgNDJoMTJ2MTJIMTJ6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDE4aDEydjEySDEyem0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-sixtyfour)]">
            Ready to Transform Your Designs?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the future of design and start creating beautiful, AI-powered design systems in seconds.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-50 text-blue-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all text-lg group"
          >
            Launch Prism AI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)]">
                  Prism AI
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  AI-Powered Design Assistant
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Powered by Google Gemini AI
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Built with Next.js, Tailwind CSS & Lucide Icons
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              © 2025 Prism AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
