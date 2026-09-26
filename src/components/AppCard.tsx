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
      <div className="relative group rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 p-6 md:p-8 lg:p-10 overflow-hidden shadow-2xl">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: app.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Product Details & Specs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {app.category}
                </span>

                {app.rating ? (
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{app.rating} Google Play Rating</span>
                  </div>
                ) : (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production App
                  </span>
                )}

                <span className="text-xs text-slate-500 font-mono">
                  {app.packageId}
                </span>
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={app.icon}
                  alt={`${app.name} Icon`}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    {app.publicTitle}
                  </p>
                </div>
              </div>

              {/* Tagline & Description */}
              <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed mb-3">
                {app.tagline}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {app.caseStudy.overview}
              </p>

              {/* Key Metrics Grid */}
              {app.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/60">
                  {app.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        {metric.label}
                      </span>
                      <span className="text-sm md:text-base font-bold text-slate-100">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Capability Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/70 border border-slate-700/60 text-slate-300"
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
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group/btn"
              >
                <span>Explore Technical Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <GooglePlayButton url={app.playStoreUrl} variant="badge" />
            </div>
          </div>

          {/* Right Column: Device Screenshot Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              {/* Primary Smartphone Mockup */}
              <div className="device-frame w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] flex flex-col relative shadow-2xl">
                <div className="device-notch flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#111] mr-1.5" />
                  <div className="w-1 h-1 rounded-full bg-[#00E676]/60" />
                </div>

                <div className="pt-3 px-5 pb-1 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                  <span>9:41</span>
                  <span>100%</span>
                </div>

                <div className="relative flex-1 mx-2.5 mb-2.5 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={app.screenshots[0]}
                    alt={`${app.name} preview`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="w-20 h-1 rounded-full bg-slate-600/40 mx-auto mb-2" />
              </div>

              {/* Secondary Layered Screenshot (Desktop preview depth) */}
              {app.screenshots[1] && (
                <div className="hidden sm:block absolute -right-8 bottom-8 w-[160px] h-[320px] rounded-2xl border-2 border-slate-700/80 bg-slate-950 overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 z-10 pointer-events-none">
                  <img
                    src={app.screenshots[1]}
                    alt={`${app.name} secondary preview`}
                    className="w-full h-full object-cover object-top opacity-90"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Compact Card Layout for remaining apps
  return (
    <div className="group rounded-3xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between p-6 shadow-xl relative overflow-hidden">
      {/* Top Accent Gradient Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${app.accentColor}, transparent)` }}
      />

      <div>
        {/* Card Header: Icon, Title, Rating */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={app.icon}
              alt={`${app.name} Icon`}
              className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-md group-hover:scale-105 transition-transform"
              loading="lazy"
            />
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
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
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[11px] font-medium flex-shrink-0">
              Shipped
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-slate-200 mb-2 leading-snug">
          {app.tagline}
        </p>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-3">
          {app.oneLiner}
        </p>

        {/* Visual Miniature Screenshot Strip */}
        <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800/60 mb-4 group/img cursor-pointer" onClick={() => onOpenCaseStudy(app)}>
          <img
            src={app.screenshots[0]}
            alt={`${app.name} UI Screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
            <span className="text-[11px] font-medium text-blue-400 bg-slate-950/90 px-2 py-1 rounded-md border border-slate-800">
              Click to view case study &amp; specs &rarr;
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {app.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300"
            >
              {tag}
            </span>
          ))}
          {app.tags.length > 4 && (
            <span className="px-1.5 py-0.5 rounded-md text-[11px] text-slate-500">
              +{app.tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-800/80">
        <button
          onClick={() => onOpenCaseStudy(app)}
          className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
        >
          <span>Deep Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <GooglePlayButton url={app.playStoreUrl} variant="secondary" size="sm" />
      </div>
    </div>
  );
}
