import { useState } from 'react';
import type { AppProject } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { AppCard } from '../components/AppCard';
import { Smartphone, Sparkles } from 'lucide-react';

interface AppsSectionProps {
  apps: AppProject[];
  onOpenCaseStudy: (app: AppProject) => void;
}

export function AppsSection({ apps, onOpenCaseStudy }: AppsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Shipped Apps', count: apps.length },
    { id: 'featured', label: 'Featured Flagships', count: apps.filter((a) => a.featured).length },
    { id: 'ai-vision', label: 'AI & Computer Vision', count: apps.filter((a) => a.id === 'cube' || a.id === 'plant').length },
    { id: 'sensors', label: 'Sensors & Hardware', count: apps.filter((a) => a.id === 'decibel' || a.id === 'cube').length },
    { id: 'productivity', label: 'Productivity & Finance', count: apps.filter((a) => a.id === 'buck' || a.id === 'pomodoro' || a.id === 'car' || a.id === 'nofap').length },
  ];

  const filteredApps = apps.filter((app) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return app.featured;
    if (selectedFilter === 'ai-vision') return app.id === 'cube' || app.id === 'plant';
    if (selectedFilter === 'sensors') return app.id === 'decibel' || app.id === 'cube';
    if (selectedFilter === 'productivity') return app.id === 'buck' || app.id === 'pomodoro' || app.id === 'car' || app.id === 'nofap';
    return true;
  });

  const featuredList = filteredApps.filter((a) => a.featured);
  const regularList = filteredApps.filter((a) => !a.featured);

  return (
    <section id="apps" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <SectionHeader
        badge="Live on Google Play"
        title="Production Mobile Apps"
        subtitle="8 fully published Android applications built with Flutter. Real users, real store listings, and real production engineering challenges."
      />

      {/* Filter Tabs Bar */}
      <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2">
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    isActive ? 'bg-blue-700/60 text-white' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Flagship Applications (Deep Cards) */}
      {featuredList.length > 0 && (
        <div className="space-y-10 md:space-y-12 mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800/80 pb-3">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Featured Production Flagships</span>
          </div>

          <div className="space-y-12">
            {featuredList.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onOpenCaseStudy={onOpenCaseStudy}
                featuredLayout={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Standard Product Cards Grid */}
      {regularList.length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-3">
            <Smartphone className="w-4 h-4 text-slate-400" />
            <span>Additional Published Applications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularList.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onOpenCaseStudy={onOpenCaseStudy}
                featuredLayout={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Verification Notice Strip */}
      <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-white mb-1">
            Verified Google Play App Store Listings
          </h4>
          <p className="text-xs text-slate-400">
            Every application displayed above is live on the Google Play Store with verified package identifiers and active APK / AAB releases.
          </p>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.app.tapokay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-400 hover:text-blue-300 whitespace-nowrap bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20"
        >
          Verify TapOkay on Play Store &rarr;
        </a>
      </div>
    </section>
  );
}
