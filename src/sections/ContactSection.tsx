import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import {
  Mail,
  Phone,
  MapPin,
  Download,
  FileText,
  Copy,
  Check,
  Send,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

interface ContactSectionProps {
  onOpenCv: () => void;
}

export function ContactSection({ onOpenCv }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('humza.cs.asif@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Mobile Developer Inquiry from ${name || 'Recruiter'}${company ? ` (${company})` : ''}`
    );
    const body = encodeURIComponent(
      `Hi Humza,\n\n${message || 'I reviewed your portfolio and would like to discuss a mobile development role.'}\n\nBest regards,\n${name || 'Recruiter'}\n${company || ''}`
    );
    window.location.href = `mailto:humza.cs.asif@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <SectionHeader
        badge="Let's Connect"
        title="Looking for a Flutter Developer Who Ships?"
        subtitle="Currently open to Mobile App Developer, Flutter Developer, and Cross-Platform Mobile roles. Let's discuss your product roadmap."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Channels Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Primary Direct Email
              </span>
              <button
                onClick={handleCopyEmail}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href="mailto:humza.cs.asif@gmail.com"
              className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="truncate">humza.cs.asif@gmail.com</span>
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-lg space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Phone / WhatsApp
            </span>
            <a
              href="tel:03126315604"
              className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>0312 6315604</span>
            </a>
            <p className="text-[11px] text-slate-400">
              +92 312 6315604 (International)
            </p>
          </div>

          {/* Location & GitHub */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
              <span className="text-slate-400 block mb-1">Location</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                Multan, Pakistan
              </span>
            </div>

            <a
              href="https://github.com/mimoriam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-xs transition-colors group"
            >
              <span className="text-slate-400 block mb-1">GitHub Profile</span>
              <span className="font-semibold text-white flex items-center gap-1 group-hover:text-blue-400">
                <GithubIcon className="w-3.5 h-3.5" />
                mimoriam
              </span>
            </a>
          </div>

          {/* CV Action Buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="./Humza_Asif_CV.pdf"
              download="Humza_Asif_Mobile_Developer_CV.pdf"
              className="w-full py-3 px-4 rounded-2xl bg-slate-850 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700/80 shadow-md transition-all flex items-center justify-center gap-2 hover:border-slate-600"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <button
              onClick={onOpenCv}
              className="w-full py-3 px-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold text-xs border border-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Inspect CV on Screen</span>
            </button>
          </div>
        </div>

        {/* Quick Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSendMessage}
            className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Send Direct Inquiry</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Company / Team
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Mobile"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Message / Opportunity Details
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="We are looking for a Flutter developer to build/scale our mobile application..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Compose Email to Humza Asif</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center">
              Launches your email client directly with pre-formatted message details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
