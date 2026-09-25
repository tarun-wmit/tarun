import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TARUN_PROFILE } from '../data/mockData.ts';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Resources', href: '#resources' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    if (href === '#') {
      scrollToTop();
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/90 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-extrabold tracking-wider text-white font-display inline-block"
            >
              TARUN<span className="text-sky-400">.</span>
            </a>
            
            <p className="text-sm font-medium text-sky-400 font-mono tracking-wide">
              &ldquo;Learn. Practice. Improve. Repeat.&rdquo;
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An educational platform dedicated to conceptual clarity, rigorous problem-solving, and democratizing high-level STEM and analytical mastery.
            </p>
          </div>

          {/* Quick Links (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="hover:text-sky-300 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => onOpenLegal('privacy')}
                className="text-left hover:text-sky-300 transition-colors py-0.5 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenLegal('terms')}
                className="text-left hover:text-sky-300 transition-colors py-0.5 cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Educational Channels & Newsletter (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Academic Updates
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Receive newly released formula sheets, weekly study challenges, and exam breakdown summaries.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="your.email@edu"
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
              <button
                onClick={() => alert("Thank you! You are subscribed to Tarun's study release notifications.")}
                className="px-3 py-2 text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} TARUN Educational Platform. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms &amp; Ethics
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
