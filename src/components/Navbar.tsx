import { useState, useEffect } from 'react';
import { Menu, X, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenCv?: () => void;
}

export function Navbar({ onOpenCv }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shipped Apps', href: '#apps' },
    { label: 'Superpowers', href: '#expertise' },
    { label: 'Lifecycle', href: '#lifecycle' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research & Education', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-2.5 sm:py-3 shadow-xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            H
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Humza Asif
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                9 Shipped Apps
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
              Flutter &amp; Mobile Engineer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {onOpenCv && (
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>
          )}

          <button
            onClick={() => handleLinkClick('#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800/90 backdrop-blur-2xl animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 mt-3 border-t border-slate-800 flex flex-col gap-2">
            {onOpenCv && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Inspect Resume (CV)</span>
              </button>
            )}

            <button
              onClick={() => handleLinkClick('#contact')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Humza Asif</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
