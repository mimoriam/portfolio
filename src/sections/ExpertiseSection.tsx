import { EXPERTISE_PILLARS, TECH_STACK } from '../data/expertise';
import { SectionHeader } from '../components/SectionHeader';
import {
  Smartphone,
  Cpu,
  Database,
  Cloud,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const getPillarIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Smartphone className="w-5 h-5 text-blue-400" />;
    case 1:
      return <Cpu className="w-5 h-5 text-emerald-400" />;
    case 2:
      return <Database className="w-5 h-5 text-purple-400" />;
    default:
      return <Cloud className="w-5 h-5 text-amber-400" />;
  }
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeader
        badge="Engineering Competencies"
        title="Mobile Engineering Superpowers"
        subtitle="Specialized in building high-performance cross-platform Flutter applications backed by native device integrations, offline SQLite engines, and production store delivery."
      />

      {/* 4 Superpower Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
        {EXPERTISE_PILLARS.map((pillar, idx) => (
          <div
            key={pillar.number}
            className="group p-6 sm:p-7 rounded-3xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Right Step Index */}
            <div className="absolute top-5 right-6 text-2xl font-black text-slate-800/60 select-none group-hover:text-slate-700/60 transition-colors">
              {pillar.number}
            </div>

            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-md">
                  {getPillarIcon(idx)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-xs font-semibold text-slate-300 mb-2 leading-snug">
                {pillar.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                {pillar.description}
              </p>

              {/* Concrete Competency Bullet Points */}
              <div className="space-y-2 pt-3 border-t border-slate-800/60">
                {pillar.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Structured Technology Stack at a Glance */}
      <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span>Technology Stack</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Mobile-First Tech Stack at a Glance
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Production-verified technologies utilized across 9 published Google Play applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Mobile */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Core Mobile (Flutter)</span>
            </div>
            <div className="space-y-1.5">
              {TECH_STACK.core.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs">
                  <span className="font-semibold text-white">{tech.name}</span>
                  <span className="text-[10px] text-emerald-400/80 font-medium">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & Persistence */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Sensors &amp; Persistence</span>
            </div>
            <div className="space-y-1.5">
              {TECH_STACK.hardware.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs">
                  <span className="font-semibold text-white">{tech.name}</span>
                  <span className="text-[10px] text-blue-400/80 font-medium">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery & Backend */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Delivery &amp; Systems</span>
            </div>
            <div className="space-y-1.5">
              {TECH_STACK.delivery.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs">
                  <span className="font-semibold text-white">{tech.name}</span>
                  <span className="text-[10px] text-purple-400/80 font-medium">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
