import React, { useState } from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, TrendingUp, Play } from 'lucide-react';
import { TARUN_PROFILE } from '../data/mockData.ts';

interface HeroProps {
  onStartLearning: () => void;
  onExploreResources: () => void;
  onOpenSampleLesson: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreResources,
  onOpenSampleLesson,
}) => {
  const [activeSimulation, setActiveSimulation] = useState<'calculus' | 'physics' | 'code'>('calculus');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background radial glow gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[560px] h-[560px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Hero Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean unboxed brand kicker (No static pill!) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>THE EDUCATIONAL SPACE OF TARUN</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">CONCEPT-FIRST PEDAGOGY</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display max-w-2xl text-balance">
              Learn Smarter.{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Grow Faster.
              </span>{' '}
              Build Your Future.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
              {TARUN_PROFILE.subheading}
            </p>

            {/* Action Zone */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreResources}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Explore Resources</span>
              </button>
            </div>

            {/* Key trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-2 border-t border-slate-800/80 w-full max-w-xl">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Rote Learning</span>
              </div>
              <span className="hidden sm:inline text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Interactive Visual Proofs</span>
              </div>
              <span className="hidden sm:inline text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Free Core Library</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Education-Themed Visual */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-80" />

              {/* Interactive Educational Sandbox Window */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-sky-400/40 shrink-0">
                      <img
                        src={TARUN_PROFILE.portraitUrl}
                        alt="Tarun Educator"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">Tarun</span>
                        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <p className="text-xs text-slate-400">Lead Educator & Mentor</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>LIVE STUDY ROOM</span>
                  </div>
                </div>

                {/* Concept Visualizer Tabs */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Interactive Concept Sandbox
                    </span>
                    <span className="text-[11px] text-sky-400 font-mono">v3.2 Visualizer</span>
                  </div>

                  {/* Interactive toggle buttons */}
                  <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-medium">
                    <button
                      onClick={() => setActiveSimulation('calculus')}
                      className={`py-1.5 px-2 rounded-md transition-all cursor-pointer truncate ${
                        activeSimulation === 'calculus'
                          ? 'bg-slate-800 text-sky-300 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Calculus
                    </button>
                    <button
                      onClick={() => setActiveSimulation('physics')}
                      className={`py-1.5 px-2 rounded-md transition-all cursor-pointer truncate ${
                        activeSimulation === 'physics'
                          ? 'bg-slate-800 text-sky-300 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Mechanics
                    </button>
                    <button
                      onClick={() => setActiveSimulation('code')}
                      className={`py-1.5 px-2 rounded-md transition-all cursor-pointer truncate ${
                        activeSimulation === 'code'
                          ? 'bg-slate-800 text-sky-300 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Algorithms
                    </button>
                  </div>
                </div>

                {/* Animated Visual Canvas */}
                <div className="mt-4 relative h-48 bg-slate-950/90 rounded-xl border border-slate-800/80 p-3 overflow-hidden flex flex-col justify-between">
                  {activeSimulation === 'calculus' && (
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>f(x) = x³ - 3x + 2</span>
                        <span className="text-sky-400">dy/dx = 3x² - 3</span>
                      </div>
                      
                      {/* SVG calculus curve with animated tangent line */}
                      <div className="relative h-28 w-full flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 300 120">
                          {/* Grid lines */}
                          <line x1="0" y1="60" x2="300" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="150" y1="0" x2="150" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                          
                          {/* Smooth cubic curve */}
                          <path
                            d="M 20 100 C 80 15, 120 15, 150 60 C 180 105, 220 105, 280 20"
                            fill="none"
                            stroke="url(#gradientMath)"
                            strokeWidth="3"
                          />
                          
                          {/* Animated Tangent line */}
                          <line
                            x1="90"
                            y1="90"
                            x2="210"
                            y2="30"
                            stroke="#38bdf8"
                            strokeWidth="2"
                            strokeDasharray="3 3"
                            className="animate-pulse"
                          />
                          
                          {/* Tangent point */}
                          <circle cx="150" cy="60" r="5" fill="#38bdf8" />
                          <circle cx="150" cy="60" r="10" fill="#38bdf8" fillOpacity="0.2" className="animate-ping" />

                          <defs>
                            <linearGradient id="gradientMath" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#38bdf8" />
                              <stop offset="50%" stopColor="#818cf8" />
                              <stop offset="100%" stopColor="#c084fc" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Tangent slope at inflection point: 0</span>
                        <span className="text-emerald-400 font-mono">Continuous</span>
                      </div>
                    </div>
                  )}

                  {activeSimulation === 'physics' && (
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Newtonian Equilibrium</span>
                        <span className="text-purple-400">Σ F = m·a</span>
                      </div>

                      <div className="relative h-28 w-full flex items-center justify-center">
                        {/* Orbital atom / force visual */}
                        <div className="relative w-24 h-24 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-spin [animation-duration:8s]" />
                          <div className="absolute inset-2 rounded-full border border-purple-400/40 animate-spin [animation-duration:12s] [animation-direction:reverse]" />
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-sky-500/50">
                            m₁
                          </div>
                          {/* Satellite node */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-300 animate-ping" />
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Centripetal acceleration</span>
                        <span className="text-sky-400 font-mono">ac = v²/r</span>
                      </div>
                    </div>
                  )}

                  {activeSimulation === 'code' && (
                    <div className="h-full flex flex-col justify-between font-mono text-xs">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>binarySearch(arr, target)</span>
                        <span className="text-emerald-400">O(log n)</span>
                      </div>

                      <div className="p-2 bg-slate-900/90 rounded border border-slate-800 text-[11px] leading-relaxed">
                        <p className="text-slate-400"><span className="text-purple-400">while</span> (low &lt;= high) &#123;</p>
                        <p className="text-slate-300 pl-3">mid = Math.<span className="text-sky-300">floor</span>((low + high) / 2);</p>
                        <p className="text-slate-400 pl-3"><span className="text-purple-400">if</span> (arr[mid] === target) <span className="text-emerald-300">return mid;</span></p>
                        <p className="text-slate-400">&#125;</p>
                      </div>

                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Space Complexity: O(1)</span>
                        <span className="text-sky-400">Optimized</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom preview strip with quick action */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-sky-400" />
                    <span className="text-xs text-slate-300">Next Live Drill: Calculus Series</span>
                  </div>
                  <button
                    onClick={onOpenSampleLesson}
                    className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Preview</span>
                  </button>
                </div>
              </div>

              {/* Floating mini stat card */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/95 border border-slate-700/80 rounded-xl p-3.5 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono tabular-nums">1,000+ Hours</div>
                  <div className="text-[11px] text-slate-400">Conceptual Mentorship</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
