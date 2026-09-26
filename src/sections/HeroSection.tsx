import type { AppProject } from '../types';
import { HeroDeviceFrame } from '../components/HeroDeviceFrame';
import {
  ArrowDown,
  FileText,
  Mail,
  Smartphone,
  Star,
} from 'lucide-react';

interface HeroSectionProps {
  apps: AppProject[];
  onOpenCaseStudy: (app: AppProject) => void;
  onOpenCv: () => void;
}

export function HeroSection({ apps, onOpenCaseStudy, onOpenCv }: HeroSectionProps) {
  const scrollToApps = () => {
    const el = document.getElementById('apps');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Radial Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-6 self-start backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-white">Humza Asif</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Mobile &amp; Flutter Developer</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              I Engineer &amp; Ship{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Mobile Products
              </span>{' '}
              That Live on Real Devices.
            </h1>

            {/* Concise Professional Positioning */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              Specialized in cross-platform <strong>Flutter &amp; Dart</strong> engineering. Taking mobile applications from initial concept and UI/UX design to hardware sensor integration, offline-first SQLite architecture, and production release on the <strong>Google Play Store</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={scrollToApps}
                className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore Shipped Apps (9)</span>
                <ArrowDown className="w-3.5 h-3.5 ml-0.5" />
              </button>

              <button
                onClick={onOpenCv}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all flex items-center gap-2 hover:border-slate-600 shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Inspect Verified CV</span>
              </button>

              <button
                onClick={scrollToContact}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Credibility Metric Badges */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  9 Apps
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Shipped on Google Play
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    4.5+
                  </span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Average Store Rating
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">
                  Flutter
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  100% Cross-Platform
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                  IEEE
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Published ML Researcher
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroDeviceFrame apps={apps} onOpenCaseStudy={onOpenCaseStudy} />
          </div>
        </div>
      </div>
    </section>
  );
}
