import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isPrivacy ? 'Privacy Policy & Student Data Protection' : 'Terms of Academic Service & Ethics'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At <strong>TARUN</strong>, we treat student trust and data privacy with utmost priority. We believe educational tools should empower curious minds without monetization through third-party ad networks or tracking brokers.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">1. Data We Process</h4>
              <p className="text-xs text-slate-400">
                Any local study progress, streak tallies, and quiz results stored during your visit remain confidential and client-authoritative. We do not sell or trade your email or study records.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">2. Communication &amp; Inquiries</h4>
              <p className="text-xs text-slate-400">
                Emails submitted via the contact form are used exclusively by Tarun to answer your academic queries and provide study guidance.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>TARUN</strong>. By accessing our masterclasses, formula sheets, and study repositories, you agree to our fair academic code.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">1. Open Learning &amp; Attribution</h4>
              <p className="text-xs text-slate-400">
                All study summaries and formula maps authored by Tarun are provided free for personal study, revision, and academic growth. You are free to print and share them with fellow students provided attribution remains intact.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">2. Respectful Mentorship Community</h4>
              <p className="text-xs text-slate-400">
                We foster a collaborative, inquisitive culture where every learner is encouraged to ask conceptual questions and celebrate daily progress.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
