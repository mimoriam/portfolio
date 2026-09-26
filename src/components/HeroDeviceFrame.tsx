import { useState, useEffect } from 'react';
import type { AppProject } from '../types';
import { ExternalLink, Star } from 'lucide-react';

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

  // Auto-advance screenshots every 3.5s unless hovered
  useEffect(() => {
    if (isPaused || !currentApp?.screenshots?.length) return;

    const timer = setInterval(() => {
      setActiveScreenshotIndex((prev) => (prev + 1) % currentApp.screenshots.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [currentApp, isPaused]);

  // Reset screenshot index when app changes
  const handleAppSelect = (index: number) => {
    setActiveAppIndex(index);
    setActiveScreenshotIndex(0);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Glow Backdrop */}
      <div
        className="absolute -inset-4 md:-inset-8 rounded-[48px] opacity-40 blur-3xl transition-colors duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentApp.accentColor}44 0%, rgba(59,130,246,0.1) 70%, transparent 100%)`,
        }}
      />

      {/* App Switcher Tabs above phone */}
      <div className="flex items-center gap-1.5 p-1 mb-6 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-xl max-w-full overflow-x-auto">
        {featuredApps.map((app, idx) => {
          const isActive = idx === activeAppIndex;
          return (
            <button
              key={app.id}
              onClick={() => handleAppSelect(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-slate-800 text-white shadow-md border border-slate-700/80 scale-[1.02]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <img
                src={app.icon}
                alt=""
                className="w-4 h-4 rounded-md object-cover"
                loading="lazy"
              />
              <span className="hidden sm:inline">{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* Smartphone Chassis */}
      <div
        className="device-frame w-[280px] sm:w-[320px] md:w-[340px] h-[580px] sm:h-[640px] md:h-[680px] flex flex-col relative select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Dynamic Island / Top Camera Pill */}
        <div className="device-notch flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-slate-800 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00E676]/60" />
        </div>

        {/* Mobile Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-300 z-10">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] tracking-tighter font-mono">5G</span>
            <div className="w-5 h-2.5 rounded-[4px] border border-slate-400 p-[1px] flex items-center">
              <div className="w-full h-full bg-slate-200 rounded-[2px]" />
            </div>
          </div>
        </div>

        {/* Active App Header Pill */}
        <div className="px-4 py-2 mx-3 mb-2 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={currentApp.icon}
              alt={currentApp.name}
              className="w-7 h-7 rounded-lg object-cover border border-white/10 shadow-sm"
            />
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-white truncate leading-tight">
                {currentApp.name}
              </h4>
              <p className="text-[10px] text-slate-400 truncate">
                {currentApp.category}
              </p>
            </div>
          </div>
          {currentApp.rating ? (
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold">
              <Star className="w-2.5 h-2.5 fill-amber-400" />
              <span>{currentApp.rating}</span>
            </div>
          ) : (
            <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-medium">
              Live
            </span>
          )}
        </div>

        {/* Main Screenshot Screen Area */}
        <div className="relative flex-1 mx-3 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/50 shadow-inner group">
          {currentApp.screenshots && currentApp.screenshots.length > 0 ? (
            <img
              key={`${currentApp.id}-${activeScreenshotIndex}`}
              src={currentApp.screenshots[activeScreenshotIndex]}
              alt={`${currentApp.name} screenshot ${activeScreenshotIndex + 1}`}
              className="w-full h-full object-cover object-top transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
              Preview Available
            </div>
          )}

          {/* Quick Action Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onOpenCaseStudy(currentApp)}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Read Full Case Study</span>
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

        {/* Screenshot Dots & Navigation Bar */}
        <div className="p-3 flex items-center justify-between text-slate-400 z-10">
          <div className="flex items-center gap-1.5">
            {currentApp.screenshots?.slice(0, 5).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveScreenshotIndex(dotIdx)}
                aria-label={`View screenshot ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === activeScreenshotIndex
                    ? 'w-5 bg-blue-500'
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => onOpenCaseStudy(currentApp)}
            className="text-[11px] font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>Specs</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-28 h-1 rounded-full bg-slate-600/60 mx-auto mb-2" />
      </div>
    </div>
  );
}
