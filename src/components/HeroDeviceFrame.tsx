import { useState, useEffect } from 'react';
import type { AppProject } from '../types';
import { ExternalLink, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface HeroDeviceFrameProps {
  apps: AppProject[];
  onOpenCaseStudy: (app: AppProject) => void;
}

export function HeroDeviceFrame({ apps, onOpenCaseStudy }: HeroDeviceFrameProps) {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const featuredApps = apps.filter((app) => app.featured);
  const currentApp = featuredApps[activeAppIndex] || apps[0];

  // Auto-advance screenshots every 4s unless paused / hovered
  useEffect(() => {
    if (isPaused || !currentApp?.screenshots?.length) return;

    const timer = setInterval(() => {
      setActiveScreenshotIndex((prev) => (prev + 1) % currentApp.screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentApp, isPaused]);

  // Reset screenshot index when app changes
  const handleAppSelect = (index: number) => {
    setActiveAppIndex(index);
    setActiveScreenshotIndex(0);
  };

  const handlePrevScreenshot = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentApp?.screenshots?.length) return;
    setActiveScreenshotIndex(
      (prev) => (prev - 1 + currentApp.screenshots.length) % currentApp.screenshots.length
    );
  };

  const handleNextScreenshot = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentApp?.screenshots?.length) return;
    setActiveScreenshotIndex((prev) => (prev + 1) % currentApp.screenshots.length);
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-[360px] mx-auto">
      {/* Dynamic Ambient Glow matching active app accent color */}
      <div
        className="absolute -inset-4 sm:-inset-8 rounded-[48px] opacity-40 blur-3xl transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentApp.accentColor}55 0%, rgba(59,130,246,0.15) 60%, transparent 100%)`,
        }}
      />

      {/* App Switcher Tabs above phone */}
      <div className="flex items-center gap-1.5 p-1 mb-5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-xl max-w-full overflow-x-auto z-10">
        {featuredApps.map((app, idx) => {
          const isActive = idx === activeAppIndex;
          return (
            <button
              key={app.id}
              onClick={() => handleAppSelect(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-slate-800 text-white shadow-md border border-slate-700/80 scale-[1.02]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <img
                src={app.icon}
                alt=""
                className="w-4 h-4 rounded-md object-cover shadow-sm"
                loading="lazy"
              />
              <span>{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* Smartphone Chassis - Calibrated to 9:16 aspect ratio so zero pixels are cropped */}
      <div
        className="relative w-[280px] sm:w-[320px] rounded-[38px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-slate-700/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(59,130,246,0.2)] select-none transition-transform duration-300 hover:scale-[1.01]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Speaker Ear-piece & Ambient Sensor Bar */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-12 h-1 rounded-full bg-slate-700/80" />
          <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
        </div>

        {/* Screen Area: Perfect 9:16 Aspect Ratio matching Google Play showcase cards */}
        <div className="relative w-full aspect-[9/16] rounded-[26px] overflow-hidden bg-slate-950 border border-slate-800/70 shadow-inner group">
          {currentApp.screenshots && currentApp.screenshots.length > 0 ? (
            <img
              key={`${currentApp.id}-${activeScreenshotIndex}`}
              src={currentApp.screenshots[activeScreenshotIndex]}
              alt={`${currentApp.name} showcase preview ${activeScreenshotIndex + 1}`}
              className="w-full h-full object-contain bg-slate-950 transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
              Live Showcase Available
            </div>
          )}

          {/* Quick Floating Badge on Top of Screen */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[10px] font-semibold text-slate-200 shadow-md">
              <Sparkles className="w-2.5 h-2.5 text-blue-400" />
              <span>{currentApp.name}</span>
            </span>

            {currentApp.rating ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 backdrop-blur-md border border-amber-500/30 text-[10px] font-bold text-amber-400 shadow-md">
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <span>{currentApp.rating}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-[10px] font-medium text-emerald-400 shadow-md">
                Live App
              </span>
            )}
          </div>

          {/* Navigation Chevron Buttons */}
          {currentApp.screenshots && currentApp.screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrevScreenshot}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/80 shadow-lg transition-transform active:scale-95 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextScreenshot}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/80 shadow-lg transition-transform active:scale-95 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Hover Overlay with Instant CTAs */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3.5 z-10">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onOpenCaseStudy(currentApp)}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Read Case Study &amp; Specs</span>
              </button>
              <a
                href={currentApp.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-[11px] font-medium transition-all flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3 h-3 text-blue-400" />
                <span>Open in Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Screenshot Dots Navigation Bar */}
        <div className="pt-2.5 pb-1 flex items-center justify-between px-2 text-slate-400">
          <div className="flex items-center gap-1.5">
            {currentApp.screenshots?.slice(0, 6).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveScreenshotIndex(dotIdx)}
                aria-label={`View screenshot ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === activeScreenshotIndex
                    ? 'w-5 bg-blue-500'
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => onOpenCaseStudy(currentApp)}
            className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
          >
            <span>Specs</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Realistic Home Indicator Bar */}
        <div className="w-24 h-1 rounded-full bg-slate-600/50 mx-auto mt-1" />
      </div>
    </div>
  );
}
