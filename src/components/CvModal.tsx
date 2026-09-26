import { useEffect } from 'react';
import {
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
  Award,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { EXPERIENCES } from '../data/experience';
import { EDUCATION } from '../data/education';
import { RESEARCH_PUBLICATION } from '../data/research';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cv-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                Humza Asif — Verified Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400">
                Mobile App Developer • Flutter &amp; Cross-Platform Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="./Humza_Asif_CV.pdf"
              download="Humza_Asif_Mobile_Developer_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-slate-950/40 text-slate-300">
          {/* Candidate Profile Header */}
          <div className="pb-6 border-b border-slate-800">
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
              Humza Asif
            </h1>
            <p className="text-base font-semibold text-blue-400 mb-4">
              Mobile App Developer • Flutter Engineer • Cross-Platform Specialist
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Multan, Pakistan</span>
              </span>
              <a
                href="mailto:humza.cs.asif@gmail.com"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>humza.cs.asif@gmail.com</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>0312 6315604</span>
              </span>
              <a
                href="https://github.com/mimoriam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/mimoriam</span>
              </a>
            </div>
          </div>

          {/* Published Mobile Products Evidence */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-400">
              <Award className="w-4 h-4" />
              <span>Published Google Play Mobile Applications</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Creator and developer of 9 production applications available on the Google Play Store, spanning GPS speed telemetry, cognitive healthcare, personal finance, computer vision, acoustic telemetry, automotive maintenance, and productivity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="font-semibold text-white block truncate">Speedometer PRO</span>
                <span className="text-[11px] text-slate-400">GPS &amp; HUD Telemetry</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="font-semibold text-white block truncate">TapOkay</span>
                <span className="text-[11px] text-slate-400">Cognitive Wellness &amp; Games</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="font-semibold text-white block truncate">Buck</span>
                <span className="text-[11px] text-slate-400">Offline Finance Tracker</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="font-semibold text-white block truncate">Cube Solver</span>
                <span className="text-[11px] text-slate-400">3D Camera Puzzle Solver</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="font-semibold text-white block truncate">Nox Decibel</span>
                <span className="text-[11px] text-slate-400">Acoustic Sound Level Meter</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="font-semibold text-white block truncate">Pot AI</span>
                <span className="text-[11px] text-slate-400">Plant Identifier &amp; Care</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-400">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-400">
              <Award className="w-4 h-4" />
              <span>Peer-Reviewed Research Project</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-sm md:text-base font-bold text-white">
                  {RESEARCH_PUBLICATION.title}
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  {RESEARCH_PUBLICATION.date}
                </span>
              </div>
              <p className="text-xs font-semibold text-purple-400">
                {RESEARCH_PUBLICATION.venue}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {RESEARCH_PUBLICATION.description}
              </p>
              <div className="pt-1">
                <a
                  href={RESEARCH_PUBLICATION.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-mono"
                >
                  <span>DOI: {RESEARCH_PUBLICATION.doi}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-400">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{edu.degree}</h4>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded flex-shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-xs text-blue-400 font-medium">{edu.institution}</p>
                  </div>
                  {edu.details && (
                    <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Authoritative professional record based on verified CV material.
          </span>
          <a
            href="./Humza_Asif_CV.pdf"
            download="Humza_Asif_Mobile_Developer_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
