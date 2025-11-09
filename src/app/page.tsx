'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Palette, Sparkles, Zap, Code, Layout, Type, ArrowRight, CheckCircle2, Triangle } from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll effect for header
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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
      <header className={`border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2 sm:py-3' : 'py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-10 sm:h-10'
              }`}>
                <Triangle className={`text-white transition-all duration-300 ${
                  scrolled ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-5 h-5 sm:w-6 sm:h-6'
                }`} fill="currentColor" />
              </div>
              <h1 className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)] transition-all duration-300 ${
                scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>
                Prism AI
              </h1>
            </div>
            <Link
              href="/app"
              className="px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 sm:gap-2 hover:scale-105 touch-manipulation"
            >
              <span className="hidden xs:inline">Launch App</span>
              <span className="xs:hidden">Launch</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgMTE0aDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDkwaDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDY2aDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDQyaDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDE4aDEydjEySDF6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 dark:opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in [animation-delay:100ms]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Powered by Google Gemini AI
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-[family-name:var(--font-sixtyfour)] animate-fade-in [animation-delay:200ms] px-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Design Smarter,
              </span>
              <br />
              <span className="text-zinc-900 dark:text-zinc-100">
                Ship Faster
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:300ms] px-4">
              Transform your ideas into beautiful design systems instantly. Get AI-powered color palettes, typography, layouts, and code snippets tailored to your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in [animation-delay:400ms] px-4">
              <Link
                href="/app"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base sm:text-lg group hover:scale-105 touch-manipulation"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 active:scale-95 text-zinc-900 dark:text-zinc-100 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-base sm:text-lg border border-zinc-200 dark:border-zinc-700 hover:scale-105 touch-manipulation"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-fade-in [animation-delay:500ms] px-4">
              {[
                { value: '100%', label: 'Free Forever' },
                { value: 'AI', label: 'Powered' },
                { value: 'Infinite', label: 'Possibilities' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)] group-hover:scale-110 transition-transform ${
                    stat.value === 'Infinite' ? 'text-xl sm:text-2xl md:text-3xl' : 'text-2xl sm:text-3xl md:text-4xl'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-header"
            data-animate
            className={`text-center mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ${
              isVisible['features-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4 font-[family-name:var(--font-sixtyfour)] px-4">
              Everything You Need
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
              A complete design toolkit powered by advanced AI to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  id={`feature-${index}`}
                  data-animate
                  className={`p-6 sm:p-7 md:p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 group ${
                    isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div
              id="benefits-content"
              data-animate
              className={`transition-all duration-700 ${
                isVisible['benefits-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6 font-[family-name:var(--font-sixtyfour)] px-4 lg:px-0">
                Why Choose Prism AI?
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 px-4 lg:px-0">
                Stop wasting time on design research and experimentation. Let AI do the heavy lifting while you focus on building amazing products.
              </p>
              <div className="space-y-3 sm:space-y-4 px-4 lg:px-0">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible['benefits-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 px-6 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto mx-4 lg:mx-0 touch-manipulation"
              >
                Start Creating Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
            <div 
              id="benefits-mockup"
              data-animate
              className={`relative transition-all duration-700 px-4 lg:px-0 ${
                isVisible['benefits-mockup'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 p-6 sm:p-7 md:p-8 hover:scale-105 transition-transform duration-500">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Mock UI */}
                  <div className="flex items-center gap-3 animate-pulse-subtle">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="h-5 sm:h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-24 sm:w-32" />
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                    {['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'].map((color, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
                        style={{ 
                          backgroundColor: color,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-3 sm:h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 animate-pulse-subtle" />
                    <div className="h-3 sm:h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full animate-pulse-subtle" style={{ animationDelay: '100ms' }} />
                    <div className="h-3 sm:h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6 animate-pulse-subtle" style={{ animationDelay: '200ms' }} />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-7 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex-1" />
                    <div className="h-7 sm:h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-16 sm:w-20" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl opacity-20 animate-float-delayed" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTM0aDEydjEySDM2em0yNCAwaDEydjEySDYwek0xMiAxMTRoMTJ2MTJIMTJ6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDkwaDEydjEySDEyem0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYwek0xMiA2NmgxMnYxMkgxMnptMjQgMGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgNDJoMTJ2MTJIMTJ6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDE4aDEydjEySDEyem0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div 
          id="cta-content"
          data-animate
          className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            isVisible['cta-content'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-4 sm:mb-5 md:mb-6 animate-pulse-subtle" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 font-[family-name:var(--font-sixtyfour)] px-4">
            Ready to Transform Your Designs?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-9 md:mb-10 max-w-2xl mx-auto px-4">
            Join the future of design and start creating beautiful, AI-powered design systems in seconds.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-zinc-50 active:scale-95 text-blue-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all text-base sm:text-lg group hover:scale-105 w-full sm:w-auto mx-4 sm:mx-0 touch-manipulation"
          >
            Launch Prism AI
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Triangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-[family-name:var(--font-sixtyfour)]">
                  Prism AI
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  AI-Powered Design Assistant
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Powered by Google Gemini AI
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-7 md:mt-8 pt-6 sm:pt-7 md:pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
              © 2025 Prism AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
