import React from 'react';
import { 
  Lightbulb, 
  Layers, 
  PenTool, 
  CalendarCheck, 
  TrendingUp, 
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { WHY_LEARN_CARDS } from '../data/mockData.ts';

export const WhyLearnWithTarun: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-sky-400" };
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'CalendarCheck': return <CalendarCheck {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      default: return <Lightbulb {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            <span>05</span>
            <span className="text-slate-600">·</span>
            <span>PEDAGOGICAL ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Why Learn With Tarun?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most educational programs confuse memorizing steps with authentic understanding. Here, our structured methodology is built around building permanent mental models that solve unseen problems.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_LEARN_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="group relative rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                {/* Top index and metric */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 group-hover:bg-sky-500/10 flex items-center justify-center transition-colors">
                    {getIcon(card.iconName)}
                  </div>
                  
                  <span className="text-xs font-mono text-slate-500 group-hover:text-sky-400 transition-colors">
                    {card.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom verification proof */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified in Student Mastery Reviews</span>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Proof Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-indigo-950/40 to-slate-950 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs sm:text-sm text-slate-200">
              <strong className="text-white">Active Student Community:</strong> Over 1,000+ study hours clocked with a 98.4% concept satisfaction index.
            </p>
          </div>
          <div className="text-xs font-mono text-sky-400 whitespace-nowrap">
            TARUN PEDAGOGICAL STANDARD
          </div>
        </div>

      </div>
    </section>
  );
};
