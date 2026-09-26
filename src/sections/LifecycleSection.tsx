import { LIFECYCLE_PHASES } from '../data/lifecycle';
import { SectionHeader } from '../components/SectionHeader';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function LifecycleSection() {
  return (
    <section id="lifecycle" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeader
        badge="End-to-End Delivery"
        title="From Blank Workspace to Google Play"
        subtitle="I build complete, functioning mobile applications across every phase of delivery — not merely converting mockups into static widgets."
      />

      {/* 4 Step Lifecycle Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {LIFECYCLE_PHASES.map((phase) => (
          <div
            key={phase.step}
            className="group p-6 rounded-3xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

            <div>
              {/* Step Number Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 border border-slate-700/80 text-blue-400 font-mono text-xs font-bold mb-4 shadow-sm">
                <span>Phase</span>
                <span>{phase.step}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {phase.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                {phase.description}
              </p>
            </div>

            {/* Checkpoints */}
            <div className="space-y-2 pt-3 border-t border-slate-800/60">
              {phase.capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proven Autonomous Delivery Banner */}
      <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-slate-900/50 to-indigo-900/20 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-white mb-1">
            Proven Autonomous Shipping Capability
          </h4>
          <p className="text-xs text-slate-400 max-w-2xl">
            Having built and shipped 9 independent apps on Google Play, I handle every constraint: memory overhead, offline fallbacks, Google Play policies, keystore signing, and cross-device responsiveness.
          </p>
        </div>
        <a
          href="#apps"
          className="text-xs font-semibold text-blue-400 hover:text-blue-300 whitespace-nowrap bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2.5 rounded-xl border border-blue-500/30 flex items-center gap-1.5 transition-colors"
        >
          <span>See Shipped Proof (9)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
