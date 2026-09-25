import React, { useState } from 'react';
import { Sparkles, ArrowRight, Quote, RefreshCw } from 'lucide-react';
import { MOTIVATIONAL_QUOTES } from '../data/mockData.ts';

interface DailyMotivationProps {
  onKeepLearning: () => void;
}

export const DailyMotivation: React.FC<DailyMotivationProps> = ({ onKeepLearning }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
  };

  const currentQuote = MOTIVATIONAL_QUOTES[quoteIndex];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Subtle animated gradient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-sky-500/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 border border-slate-700/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Subtle grid texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DAILY STUDY MINDFRAME</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">TARUN&apos;S REFLECTION</span>
            </div>

            {/* Motivational Banner Heading */}
            <div className="relative mb-6">
              <Quote className="w-10 h-10 text-sky-500/20 absolute -top-6 -left-6 -rotate-12 pointer-events-none" />
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display max-w-3xl leading-tight">
                &ldquo;{currentQuote.quote}&rdquo;
              </h2>
            </div>

            {/* Context Narrative */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-8 leading-relaxed">
              {currentQuote.context}
            </p>

            {/* Actions: "Keep Learning" and "Next Quote" */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onKeepLearning}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Keep Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={nextQuote}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition-colors cursor-pointer"
                title="View another study reflection"
              >
                <RefreshCw className="w-3.5 h-3.5 text-sky-400" />
                <span>Next Reflection</span>
              </button>
            </div>

            {/* Bottom Subtle Signature */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 text-xs text-slate-500 font-mono">
              TARUN EDUCATIONAL ETHOS · CONSISTENCY OVER SPEED
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
