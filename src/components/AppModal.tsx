import { useEffect, useState } from 'react';
import type { AppProject } from '../types';
import {
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Smartphone,
  ShieldAlert,
} from 'lucide-react';
import { GooglePlayButton } from './GooglePlayButton';

interface AppModalProps {
  app: AppProject | null;
  onClose: () => void;
}

export function AppModal({ app, onClose }: AppModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedPackage, setCopiedPackage] = useState(false);


  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && app) {
        setActiveImageIndex((prev) => (prev + 1) % app.screenshots.length);
      }
      if (e.key === 'ArrowLeft' && app) {
        setActiveImageIndex((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length);
      }
    };

    if (app) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [app, onClose]);

  if (!app) return null;

  const handleCopyPackage = () => {
    navigator.clipboard.writeText(app.packageId);
    setCopiedPackage(true);
    setTimeout(() => setCopiedPackage(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={app.icon}
              alt={app.name}
              className="w-10 h-10 rounded-xl object-cover border border-white/10 shadow-sm flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 id="case-study-title" className="text-base sm:text-lg font-bold text-white truncate">
                  {app.name}
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {app.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate">
                {app.publicTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <GooglePlayButton url={app.playStoreUrl} size="sm" variant="primary" label="Open Store" />

            <button
              onClick={onClose}
              aria-label="Close case study dialog"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6">
          {/* Main Visual & Overview Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Screenshot Viewer (Left 5 Cols) - Calibrated to 9:16 with zero cropping */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/16] rounded-[32px] p-2 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-center">
                {/* Speaker indicator */}
                <div className="w-10 h-1 rounded-full bg-slate-700/80 mx-auto mb-2" />

                {/* Screenshot Image Container with object-contain */}
                <div className="relative w-full flex-1 rounded-[22px] overflow-hidden bg-slate-950 border border-slate-800/60 flex items-center justify-center">
                  <img
                    src={app.screenshots[activeImageIndex]}
                    alt={`${app.name} preview ${activeImageIndex + 1}`}
                    className="w-full h-full object-contain bg-slate-950 select-none"
                  />

                  {/* Nav Arrows Overlay */}
                  {app.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveImageIndex(
                            (prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length
                          )
                        }
                        aria-label="Previous screenshot"
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700 shadow-lg transition-transform active:scale-95 cursor-pointer z-10"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          setActiveImageIndex((prev) => (prev + 1) % app.screenshots.length)
                        }
                        aria-label="Next screenshot"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700 shadow-lg transition-transform active:scale-95 cursor-pointer z-10"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                <div className="w-16 h-1 rounded-full bg-slate-600/50 mx-auto mt-2" />
              </div>

              {/* Thumbnail Strip */}
              {app.screenshots.length > 1 && (
                <div className="flex items-center gap-2 mt-4 max-w-full overflow-x-auto py-1 px-2">
                  {app.screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Show screenshot ${idx + 1}`}
                      className={`relative w-11 h-18 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        idx === activeImageIndex
                          ? 'border-blue-500 scale-105 shadow-md shadow-blue-500/20'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={shot} alt="" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Case Study Content (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Meta Tags Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {app.rating && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{app.rating} / 5.0 Rating</span>
                    </div>
                  )}

                  <span className="flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-medium text-xs">
                    <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{app.platform}</span>
                  </span>
                </div>

                {/* Package ID Copyable Pill */}
                <button
                  onClick={handleCopyPackage}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors cursor-pointer"
                  title="Click to copy package ID"
                >
                  <span>{app.packageId}</span>
                  {copiedPackage ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {app.caseStudy.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Product Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {app.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & System Design */}
              <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                  <Layers className="w-4 h-4" />
                  <span>Technical Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {app.caseStudy.technicalArchitecture}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <Cpu className="w-4 h-4" />
                  <span>Key Technical Highlights</span>
                </div>
                <div className="space-y-2">
                  {app.caseStudy.engineeringHighlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Role */}
              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-0.5">
                    Engineering Role
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {app.caseStudy.role}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 max-w-md">
                  {app.caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer Bar */}
        <div className="px-5 sm:px-6 py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Published on Google Play • Live &amp; Verified APK</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
            <GooglePlayButton url={app.playStoreUrl} size="md" variant="primary" label="Open Google Play Listing" />
          </div>
        </div>
      </div>
    </div>
  );
}
