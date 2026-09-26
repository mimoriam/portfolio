import type { AppProject } from '../types';
import { HeroDeviceFrame } from '../components/HeroDeviceFrame';
import {
  ArrowDown,
  Download,
  FileText,
  Mail,
  Smartphone,
  Star,
  Sparkles,
  CheckCircle,
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
    <section className="relative flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-12 overflow-hidden">
      {/* Background Radial Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Positioning & Recruiter Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-4 self-start backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-white">Humza Asif</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">Available for Mobile / Flutter Roles</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
              I Build &amp; Ship{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Production Mobile Apps
              </span>{' '}
              That Live on Real Devices.
            </h1>

            {/* Crisp Recruiter Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal mb-5 max-w-2xl">
              Mobile Software Engineer specializing in cross-platform <strong>Flutter &amp; Dart</strong>. Creator of <strong>9 published Google Play applications</strong> — engineered from scratch with offline-first SQLite architectures, real-time hardware sensors, and production store deployments.
            </p>

            {/* Recruiter 5-Second Scan Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                <span>9 Shipped Apps</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Flutter &amp; Dart Core</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>Offline SQLite &amp; Sensors</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>IEEE Published Researcher</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={scrollToApps}
                className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore Shipped Apps (9)</span>
                <ArrowDown className="w-3.5 h-3.5 ml-0.5" />
              </button>

              <button
                onClick={onOpenCv}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all flex items-center gap-2 hover:border-slate-600 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Inspect CV / Resume</span>
              </button>

              <a
                href="./Humza_Asif_CV.pdf"
                download="Humza_Asif_Mobile_Developer_CV.pdf"
                className="p-3.5 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                title="Download PDF Resume"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">PDF</span>
              </a>

              <button
                onClick={scrollToContact}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Humza</span>
              </button>
            </div>

            {/* Credibility Metric Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  9 Apps
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Live on Google Play
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    4.5+
                  </span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Average Store Rating
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-blue-400 tracking-tight">
                  Flutter
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Cross-Platform &amp; Dart
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">
                  IEEE
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Published ML Author
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Properly Proportioned 9:16 Interactive Smartphone Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroDeviceFrame apps={apps} onOpenCaseStudy={onOpenCaseStudy} />
          </div>
        </div>
      </div>
    </section>
  );
}
