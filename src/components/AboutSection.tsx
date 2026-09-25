import React, { useEffect, useState, useRef } from 'react';
import { Target, Compass, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { TARUN_PROFILE } from '../data/mockData.ts';

export const AboutSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    resources: 0,
    topics: 0,
    hours: 0,
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate statistics counters
          const duration = 1600;
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep += 1;
            const progress = currentStep / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              resources: Math.round(easeOut * 100),
              topics: Math.round(easeOut * 50),
              hours: Math.round(easeOut * 1000),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ resources: 100, topics: 50, hours: 1000 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-slate-900/60 relative border-t border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            <span>01</span>
            <span className="text-slate-600">·</span>
            <span>EDUCATOR PHILOSOPHY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Building Knowledge That Lasts Beyond the Exam Room.
          </h2>
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border-l-4 border-sky-400">
            <p className="text-lg sm:text-xl font-medium text-slate-100 italic leading-relaxed">
              &ldquo;{TARUN_PROFILE.philosophy}&rdquo;
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Credibility Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle back illumination */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-60" />

              {/* Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl aspect-[4/3] sm:aspect-[4/3.2]">
                <img
                  src={TARUN_PROFILE.portraitUrl}
                  alt="Tarun Educator"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Overlay Nameplate */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Tarun</h3>
                    <p className="text-xs text-sky-400">Educational Mentor & Creator</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>Verified Educator</span>
                  </div>
                </div>
              </div>

              {/* Mentorship Philosophy Quote Pill Box removed in favor of clean highlight */}
              <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-300 font-medium">Primary Focus</span>
                <span>STEM · Engineering Math · Algorithms · Exam Tactics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Principles */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {TARUN_PROFILE.detailedBio}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Over the past years of intensive mentoring, I noticed that students don't struggle because they lack aptitude; they struggle because typical courses throw formulas at them without visual context. At TARUN, every topic starts with physical intuition and ends with rigorous execution.
            </p>

            {/* Core Teaching Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">First-Principles Thinking</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Deconstruct complex proofs into intuitive atomic assumptions so you can reconstruct answers spontaneously.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Deliberate Practice Loops</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Immediate feedback cycles on problem sets. Mistakes are diagnosed and filed into an active error log.
                </p>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Personalized Diagnostic Roadmaps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Real-Time Conceptual Q&amp;A</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Zero Subscription Paywalls on Notes</span>
              </div>
            </div>

          </div>
        </div>

        {/* Statistics Grid - Prompted: 100+ Resources, 50+ Topics, 1000+ Study Hours, 24/7 Learning Mindset */}
        <div className="mt-16 pt-12 border-t border-slate-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-md">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mb-1 flex items-baseline">
              <span>{counts.resources}</span>
              <span className="text-sky-400 text-2xl font-sans">+</span>
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">Learning Resources</div>
            <p className="text-xs text-slate-400">Curated notes, formula sheets &amp; mock drills</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-md">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mb-1 flex items-baseline">
              <span>{counts.topics}</span>
              <span className="text-sky-400 text-2xl font-sans">+</span>
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">Topics Mastered</div>
            <p className="text-xs text-slate-400">From foundation STEM to advanced systems</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-md">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mb-1 flex items-baseline">
              <span>{counts.hours}</span>
              <span className="text-sky-400 text-2xl font-sans">+</span>
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">Study Hours Guided</div>
            <p className="text-xs text-slate-400">Interactive live problem-solving sessions</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-md">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mb-1 flex items-baseline">
              <span>24</span>
              <span className="text-sky-400 text-2xl font-sans">/7</span>
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">Learning Mindset</div>
            <p className="text-xs text-slate-400">Continuous self-directed intellectual curiosity</p>
          </div>

        </div>

      </div>
    </section>
  );
};
