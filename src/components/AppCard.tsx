import type { AppProject } from '../types';
import { Star, ArrowRight } from 'lucide-react';
import { GooglePlayButton } from './GooglePlayButton';

interface AppCardProps {
  app: AppProject;
  onOpenCaseStudy: (app: AppProject) => void;
  featuredLayout?: boolean;
}

export function AppCard({ app, onOpenCaseStudy, featuredLayout = false }: AppCardProps) {
  if (featuredLayout) {
    return (
      <div className="relative group rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
        {/* Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: app.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Left Column: Product Details & Recruiter Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {app.category}
                </span>

                {app.rating ? (
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{app.rating} Google Play Rating</span>
                  </div>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Production App
                  </span>
                )}

                <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                  {app.packageId}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={app.icon}
                  alt={`${app.name} Icon`}
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {app.publicTitle}
                  </p>
                </div>
              </div>

              {/* Punchy Recruiter Tagline */}
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mb-4">
                {app.tagline}
              </p>

              {/* 2-Column Problem & Solution Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                    Problem Solved
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {app.caseStudy.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Engineering Solution
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {app.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              {app.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/70">
                  {app.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        {metric.label}
                      </span>
                      <span className="text-sm font-bold text-slate-100">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Capability Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {app.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onOpenCaseStudy(app)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group/btn cursor-pointer"
              >
                <span>Read Technical Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <GooglePlayButton url={app.playStoreUrl} variant="badge" />
            </div>
          </div>

          {/* Right Column: Properly Sized 9:16 Device Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              className="relative w-[260px] sm:w-[280px] rounded-[34px] p-2.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-slate-700/90 shadow-2xl cursor-pointer group/mockup"
              onClick={() => onOpenCaseStudy(app)}
            >
              {/* Speaker Bar */}
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <div className="w-10 h-1 rounded-full bg-slate-700/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700" />
              </div>

              {/* Screen Area calibrated to 9:16 with zero cropping */}
              <div className="relative w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-slate-950 border border-slate-800/70 shadow-inner">
                <img
                  src={app.screenshots[0]}
                  alt={`${app.name} preview`}
                  className="w-full h-full object-contain bg-slate-950 transition-transform duration-300 group-hover/mockup:scale-[1.02]"
                  loading="lazy"
                />

                {/* Click hint pill */}
                <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover/mockup:opacity-100 transition-opacity">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-semibold backdrop-blur-md shadow-lg flex items-center gap-1">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="w-20 h-1 rounded-full bg-slate-600/50 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid Card Layout for remaining apps
  return (
    <div className="group rounded-3xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 shadow-xl relative overflow-hidden">
      {/* Top Accent Gradient Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${app.accentColor}, transparent)` }}
      />

      <div>
        {/* Card Header: Icon, Title, Rating */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            <img
              src={app.icon}
              alt={`${app.name} Icon`}
              className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-md group-hover:scale-105 transition-transform"
              loading="lazy"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {app.name}
              </h3>
              <span className="text-xs text-slate-400">{app.category}</span>
            </div>
          </div>

          {app.rating ? (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold flex-shrink-0">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{app.rating}</span>
            </div>
          ) : (
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px] font-medium flex-shrink-0">
              Live
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-medium text-slate-200 mb-3 leading-snug line-clamp-2">
          {app.tagline}
        </p>

        {/* Visual Screenshot Preview (Well-proportioned portrait aspect ratio) */}
        <div
          className="relative aspect-[4/5] sm:aspect-[9/16] max-h-64 sm:max-h-72 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4 group/img cursor-pointer flex items-center justify-center"
          onClick={() => onOpenCaseStudy(app)}
        >
          <img
            src={app.screenshots[0]}
            alt={`${app.name} UI Preview`}
            className="w-full h-full object-contain bg-slate-950 transition-transform duration-300 group-hover/img:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
            <span className="text-[11px] font-medium text-white bg-blue-600/90 px-2.5 py-1 rounded-lg backdrop-blur-sm shadow flex items-center gap-1">
              <span>View Specs &amp; Screens</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {app.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800/80 border border-slate-700/50 text-slate-300"
            >
              {tag}
            </span>
          ))}
          {app.tags.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md text-[10px] text-slate-500">
              +{app.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
        <button
          onClick={() => onOpenCaseStudy(app)}
          className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <GooglePlayButton url={app.playStoreUrl} variant="secondary" size="sm" />
      </div>
    </div>
  );
}
