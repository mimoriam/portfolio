import { EDUCATION } from '../data/education';
import { RESEARCH_PUBLICATION } from '../data/research';
import { SectionHeader } from '../components/SectionHeader';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

export function EducationResearchSection() {
  return (
    <section id="credentials" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <SectionHeader
        badge="Credentials"
        title="Education &amp; Research"
        subtitle="Formal Computer Science foundation coupled with peer-reviewed research in machine learning telemetry."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Education (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Academic Background</span>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-1.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-blue-400 font-medium">
                  {edu.institution}
                </p>
                {edu.details && (
                  <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Research Publication (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Peer-Reviewed Publication (IEEE)</span>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-purple-500/20 shadow-xl space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase tracking-wide">
                  Final Year Research
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-2 leading-snug">
                  {RESEARCH_PUBLICATION.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md flex-shrink-0">
                {RESEARCH_PUBLICATION.date}
              </span>
            </div>

            <p className="text-xs font-semibold text-purple-400">
              Presented at: {RESEARCH_PUBLICATION.venue}
            </p>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {RESEARCH_PUBLICATION.description}
            </p>

            {/* DOI Link Button */}
            <div className="pt-2">
              <a
                href={RESEARCH_PUBLICATION.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono transition-colors group"
              >
                <span>DOI: {RESEARCH_PUBLICATION.doi}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
