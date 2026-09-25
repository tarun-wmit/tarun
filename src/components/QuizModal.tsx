import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Award, RotateCcw } from 'lucide-react';

interface QuizModalProps {
  onClose: () => void;
  onFinishQuiz: (score: number) => void;
}

interface Question {
  id: number;
  question: string;
  category: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Mathematics (Calculus)',
    question: 'What is the derivative of f(x) = ln(3x² + 1) with respect to x?',
    options: [
      '1 / (3x² + 1)',
      '6x / (3x² + 1)',
      '3x / (3x² + 1)',
      '6x · ln(3x² + 1)'
    ],
    correctIndex: 1,
    explanation: 'By the Chain Rule: d/dx[ln(u)] = (1/u) · du/dx. Here u = 3x² + 1, so du/dx = 6x. The derivative is 6x / (3x² + 1).'
  },
  {
    id: 2,
    category: 'Science (Physics Mechanics)',
    question: 'If net external force acting on a system of particles is zero, which quantity is strictly conserved?',
    options: [
      'Total Kinetic Energy',
      'Total Linear Momentum',
      'Total Potential Energy',
      'Instantaneous Velocity of each particle'
    ],
    correctIndex: 1,
    explanation: 'By Newton’s Second Law for systems (F_net = dP/dt), if F_net = 0, the total linear momentum P remains constant in time regardless of internal collisions.'
  },
  {
    id: 3,
    category: 'Computer Science (Algorithms)',
    question: 'What is the worst-case time complexity of searching in a balanced Binary Search Tree (AVL or Red-Black)?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n log n)'
    ],
    correctIndex: 1,
    explanation: 'Because the tree maintains a height bounded strictly by O(log n), search, insert, and delete operations take O(log n) worst-case time.'
  }
];

export const QuizModal: React.FC<QuizModalProps> = ({ onClose, onFinishQuiz }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentQ = SAMPLE_QUESTIONS[currentIdx];

  const handleSelect = (optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optionIdx,
    }));
  };

  const handleNext = () => {
    if (currentIdx < SAMPLE_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setSubmitted(true);
      // calculate score
      let correct = 0;
      SAMPLE_QUESTIONS.forEach((q, i) => {
        if (selectedAnswers[i] === q.correctIndex) correct++;
      });
      const scorePct = Math.round((correct / SAMPLE_QUESTIONS.length) * 100);
      onFinishQuiz(scorePct);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
  };

  let totalCorrect = 0;
  if (submitted) {
    SAMPLE_QUESTIONS.forEach((q, i) => {
      if (selectedAnswers[i] === q.correctIndex) totalCorrect++;
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
              <span>TARUN DIAGNOSTICS</span>
              <span className="text-slate-600">·</span>
              <span>RAPID CONCEPT DRILL</span>
            </div>
            <h3 className="text-xl font-bold text-white">Daily 5-Minute Mastery Diagnostic</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!submitted ? (
            <div>
              {/* Question Progress Tracker */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                <span>Question {currentIdx + 1} of {SAMPLE_QUESTIONS.length}</span>
                <span className="text-sky-400">{currentQ.category}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-sky-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / SAMPLE_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question text */}
              <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, optIdx) => {
                  const isChosen = selectedAnswers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(optIdx)}
                      className={`w-full p-4 rounded-xl text-left text-sm transition-all border flex items-center justify-between cursor-pointer ${
                        isChosen
                          ? 'bg-sky-500/10 border-sky-400 text-white shadow-md'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{opt}</span>
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-mono shrink-0 ml-3 ${
                        isChosen ? 'border-sky-400 bg-sky-400 text-slate-950 font-bold' : 'border-slate-700'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mx-auto text-sky-400">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white mb-1">Diagnostic Completed!</h4>
                <p className="text-sm text-slate-400">
                  You scored <span className="text-emerald-400 font-bold font-mono">{totalCorrect} / {SAMPLE_QUESTIONS.length}</span> ({Math.round((totalCorrect / SAMPLE_QUESTIONS.length) * 100)}% accuracy)
                </p>
              </div>

              {/* Review List */}
              <div className="space-y-4 text-left pt-2">
                {SAMPLE_QUESTIONS.map((q, qIdx) => {
                  const isCorrect = selectedAnswers[qIdx] === q.correctIndex;
                  return (
                    <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <div className="flex items-center justify-between mb-1.5 font-mono">
                        <span className="text-slate-400">Q{qIdx + 1}: {q.category}</span>
                        <span className={isCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                          {isCorrect ? 'Correct ✓' : 'Needs Review ✗'}
                        </span>
                      </div>
                      <p className="font-semibold text-white mb-2">{q.question}</p>
                      <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                        <span className="text-sky-400 font-bold">Concept Insight:</span> {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {submitted ? 'Done' : 'Cancel'}
          </button>

          {!submitted ? (
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentIdx] === undefined}
              className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer disabled:opacity-50"
            >
              <span>{currentIdx === SAMPLE_QUESTIONS.length - 1 ? 'Finish & Check' : 'Next Question'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleRestart}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
              <span>Retry Diagnostic</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
