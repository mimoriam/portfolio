import type { AppProject } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { AppCard } from '../components/AppCard';
import { Smartphone, Sparkles } from 'lucide-react';

interface AppsSectionProps {
  apps: AppProject[];
  onOpenCaseStudy: (app: AppProject) => void;
}

export function AppsSection({ apps, onOpenCaseStudy }: AppsSectionProps) {
  const featuredList = apps.filter((a) => a.featured);
  const regularList = apps.filter((a) => !a.featured);

  return (
    <section id="apps" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <SectionHeader
        badge="Live on Google Play"
        title="Production Mobile Apps"
        subtitle="9 fully published Android applications built with Flutter & Dart. Real users, real store listings, and real production engineering challenges."
      />

      {/* Featured Flagship Applications (Deep Cards: TapOkay, Buck, Cube Solver) */}
      {featuredList.length > 0 && (
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800/80 pb-2.5">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Featured Production Flagships</span>
          </div>

          <div className="space-y-6 sm:space-y-8">
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

      {/* Additional Published Applications Grid */}
      {regularList.length > 0 && (
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-2.5">
            <Smartphone className="w-4 h-4 text-slate-400" />
            <span>Additional Published Applications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
    </section>
  );
}
