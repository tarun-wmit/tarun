import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Play, 
  FileText, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { Course, Lesson } from '../types.ts';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!course) return null;

  const handleEnrollClick = () => {
    setIsEnrolled(true);
    onEnroll(course.title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header / Hero Thumbnail banner */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950">
          <img
            src={course.thumbnail}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and metadata on banner bottom */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
              <span>{course.category}</span>
              <span className="text-slate-500">·</span>
              <span>{course.difficulty}</span>
              <span className="text-slate-500">·</span>
              <span>{course.duration}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Subtitle & Mentor note */}
          <div>
            <p className="text-base text-slate-200 leading-relaxed mb-4">
              {course.description}
            </p>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Authored &amp; Mentored by <strong className="text-white">Tarun</strong>. Designed for deep conceptual retention.</span>
            </div>
          </div>

          {/* Key Takeaways */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-3 font-mono">
              Key Learning Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.keyTakeaways.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Course Syllabus */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 font-mono">
                Curriculum Syllabus ({course.lessonsCount} Total Lessons)
              </h3>
              <span className="text-xs text-slate-400 font-mono">Click any lesson to preview</span>
            </div>

            <div className="space-y-4">
              {course.syllabus.map((mod, modIdx) => (
                <div key={modIdx} className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center justify-between">
                    <span>{mod.moduleTitle}</span>
                    <span className="text-[11px] font-mono text-slate-500 font-normal">
                      {mod.lessons.length} Lessons
                    </span>
                  </h4>

                  <div className="space-y-2">
                    {mod.lessons.map((lesson) => {
                      const isSelected = activeLesson?.id === lesson.id;
                      return (
                        <div
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-sky-500/10 border-sky-500/50 text-sky-300'
                              : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                              {lesson.type === 'video' ? (
                                <Play className="w-3 h-3 fill-current text-sky-400" />
                              ) : lesson.type === 'reading' ? (
                                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                              ) : (
                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                              )}
                            </div>
                            <span className="text-xs font-medium text-slate-200">
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 shrink-0">
                            <span>{lesson.duration}</span>
                            {lesson.isCompleted && (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Lesson Simulation Preview */}
          {activeLesson && (
            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                  Now Previewing Lesson:
                </span>
                <span className="text-xs font-mono text-slate-400">{activeLesson.duration}</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">{activeLesson.title}</h4>
              <p className="text-xs text-slate-300 mb-4">
                This lesson is fully unlocked in the free study archive. In this section, Tarun guides you through the intuitive geometry, common traps, and step-by-step problem sets.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Starting player for "${activeLesson.title}"`)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Lesson Player</span>
                </button>
                <button
                  onClick={() => setActiveLesson(null)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Dismiss Preview
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span className="font-semibold text-white block">Free Open Access</span>
            <span>All curriculums and problem sets are accessible without paywalls.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={handleEnrollClick}
              disabled={isEnrolled}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-80 flex items-center justify-center gap-1.5"
            >
              {isEnrolled ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Enrolled In Course</span>
                </>
              ) : (
                <>
                  <span>Enroll In Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
