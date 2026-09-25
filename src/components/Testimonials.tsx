import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData.ts';
import { Testimonial } from '../types.ts';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            <span>07</span>
            <span className="text-slate-600">·</span>
            <span>VERIFIED STUDENT SUCCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Real Transformations, Measured in Mastery
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Read direct reflections from students who replaced rote memorization with Tarun&apos;s first-principles method.
          </p>
        </div>

        {/* Testimonials Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-7 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Top Row: Star Rating & Verifiable Outcome */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{t.keyOutcome}</span>
                  </div>
                </div>

                {/* Feedback Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{t.feedback}&rdquo;
                </p>
              </div>

              {/* Author Lockup */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-700 shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{t.name}</h3>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-mono text-sky-400 block">{t.goalOrExam}</span>
                  <span className="text-[10px] text-slate-500">Verified Learner</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
