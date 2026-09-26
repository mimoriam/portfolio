import { EXPERIENCES } from '../data/experience';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <SectionHeader
        badge="Career Track Record"
        title="Professional Experience"
        subtitle="Real-world software engineering across mobile product studios, industrial systems digitization, and enterprise infrastructure."
      />

      {/* Editorial Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-6 sm:space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-6 md:pl-10 group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:border-blue-400 group-hover:scale-125 transition-all shadow-md shadow-blue-500/30" />

            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-xl space-y-4">
              {/* Header: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-blue-400">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 text-xs font-mono text-slate-300 self-start sm:self-auto border border-slate-700/60">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Pill Row */}
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-400 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
