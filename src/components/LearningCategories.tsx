import React from 'react';
import { 
  Calculator, 
  Atom, 
  BookOpen, 
  Code, 
  Globe, 
  Target, 
  Briefcase, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../data/mockData.ts';
import { Category } from '../types.ts';

interface LearningCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const LearningCategories: React.FC<LearningCategoriesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case 'Calculator': return <Calculator {...props} />;
      case 'Atom': return <Atom {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      default: return <BookOpen {...props} />;
    }
  };

  return (
    <section id="categories" className="py-24 bg-slate-950 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              <span>02</span>
              <span className="text-slate-600">·</span>
              <span>STRUCTURED LEARNING DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Explore Learning Categories
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Curated conceptual pathways designed to build rock-solid foundational principles and advanced mastery across 8 critical disciplines.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            <span>8 DOMAINS AVAILABLE</span>
          </div>
        </div>

        {/* 8 Interactive Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat: Category) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              {/* Top Row: Icon and metadata */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 text-sky-400 group-hover:text-sky-300 flex items-center justify-center transition-all duration-300">
                    {getIcon(cat.iconName)}
                  </div>

                  <span className="text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                    {cat.topicsCount} Topics
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Row: Featured Topic & Explore Button */}
              <div className="pt-4 border-t border-slate-800/70">
                <div className="text-[11px] text-slate-500 mb-3 truncate">
                  <span className="text-slate-400 font-medium">Highlight:</span> {cat.featuredTopic}
                </div>

                <button
                  onClick={() => onSelectCategory(cat.name)}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-semibold text-sky-400 group-hover:text-white bg-slate-800/40 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-indigo-600 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
