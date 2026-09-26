import { EXPERTISE_PILLARS, TECH_STACK } from '../data/expertise';
import { SectionHeader } from '../components/SectionHeader';
import {
  Smartphone,
  Cpu,
  Database,
  Cloud,
  CheckCircle2,
  Sparkles,
  Layers,
  Terminal,
} from 'lucide-react';

export function ExpertiseSection() {
  const pillarIcons = [
    <Smartphone className="w-5 h-5 text-blue-400" />,
    <Cpu className="w-5 h-5 text-emerald-400" />,
    <Database className="w-5 h-5 text-purple-400" />,
    <Cloud className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="expertise" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeader
        badge="Engineering Competencies"
        title="Mobile Engineering Expertise"
        subtitle="Specialized in building high-performance cross-platform Flutter applications backed by native device integrations and scalable architecture."
      />

      {/* 4 Pillars of Mobile Engineering Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
        {EXPERTISE_PILLARS.map((pillar, idx) => (
          <div
            key={pillar.number}
            className="group p-6 sm:p-8 rounded-3xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Right Step Index */}
            <div className="absolute top-6 right-8 text-3xl font-black text-slate-800/60 select-none group-hover:text-slate-700/60 transition-colors">
              {pillar.number}
            </div>

            <div>
              {/* Pillar Header with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-md">
                  {pillarIcons[idx]}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-xs font-semibold text-slate-300 mb-2 leading-snug">
                {pillar.tagline}
              </p>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-400 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Concrete Competency Bullet Points */}
              <div className="space-y-2 pt-2 border-t border-slate-800/60">
                {pillar.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Structured Technology Stack (Mobile-First Hierarchy) */}
      <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 md:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span>Technology Architecture</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Organized Stack: Mobile-First Hierarchy
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Mobile development is the primary identity. Supporting backend, database, and cloud skills reinforce complete product shipping capability.
          </p>
        </div>

        <div className="space-y-8">
          {/* Primary Mobile Stack */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Primary Specialization (Core Mobile &amp; Flutter)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TECH_STACK.primary.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-emerald-500/40 transition-colors shadow-sm"
                >
                  <span className="text-xs font-bold text-white block mb-0.5">
                    {tech.name}
                  </span>
                  <span className="text-[11px] text-emerald-400/80 font-medium">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Infrastructure Stack */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>Supporting Infrastructure (Backend, AI, Security &amp; Delivery)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {TECH_STACK.supporting.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs hover:border-slate-700 transition-colors"
                >
                  <span className="font-semibold text-slate-200 block truncate">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
