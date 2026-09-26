import { Mail, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Positioning */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
            <span className="text-base font-extrabold text-white tracking-tight">
              Humza Asif
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs font-semibold text-blue-400">
              Mobile App &amp; Flutter Developer
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Architecting and shipping production mobile products from idea to the Google Play Store.
          </p>
        </div>

        {/* Links & Channels */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a
            href="https://github.com/mimoriam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:humza.cs.asif@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>humza.cs.asif@gmail.com</span>
          </a>

          <a
            href="tel:03126315604"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>0312 6315604</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
        <span>&copy; {currentYear} Humza Asif. All rights reserved.</span>
        <span>Available for Mobile &amp; Flutter Engineering Opportunities</span>
      </div>
    </footer>
  );
}
