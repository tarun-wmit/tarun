import React, { useState } from 'react';
import { Clock, BookOpen, Star, ArrowUpRight, CheckCircle, BarChart3, Users } from 'lucide-react';
import { FEATURED_COURSES } from '../data/mockData.ts';
import { Course } from '../types.ts';

interface FeaturedCoursesProps {
  onSelectCourse: (course: Course) => void;
  selectedCategoryFilter?: string | null;
  onClearFilter?: () => void;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({
  onSelectCourse,
  selectedCategoryFilter,
  onClearFilter,
}) => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const filteredCourses = FEATURED_COURSES.filter((course) => {
    const matchesCategory = selectedCategoryFilter
      ? course.category.toLowerCase() === selectedCategoryFilter.toLowerCase()
      : true;
    const matchesDiff = filterDifficulty === 'All' ? true : course.difficulty === filterDifficulty;
    return matchesCategory && matchesDiff;
  });

  return (
    <section id="courses" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              <span>03</span>
              <span className="text-slate-600">·</span>
              <span>CURATED MASTERCLASSES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Featured Courses
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Deep, comprehensive curriculums authored by Tarun. Each masterclass contains step-by-step video roadmaps, interactive exercises, and downloadable summaries.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800 self-start md:self-auto">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  filterDifficulty === diff
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Active Indicator */}
        {selectedCategoryFilter && (
          <div className="mb-8 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-between text-xs text-sky-300">
            <span>
              Showing courses in <strong className="text-white">{selectedCategoryFilter}</strong>
            </span>
            <button
              onClick={onClearFilter}
              className="text-xs font-semibold underline hover:text-white cursor-pointer ml-3"
            >
              Clear Category Filter
            </button>
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="group rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              <div>
                {/* Course Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category unboxed tag on top */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-sky-300 border border-slate-700/80">
                    {course.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-slate-700/80 flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{course.rating.toFixed(2)}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Metadata Row: Clean Unboxed Separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                    <span>{course.difficulty}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {course.duration}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-slate-500" />
                      {course.lessonsCount} Lessons
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {course.title}
                  </h3>

                  {/* Course Subtitle/Description */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {course.subtitle}
                  </p>

                  {/* Progress Indicator */}
                  <div className="pt-2 pb-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
                        <span>Completion Rate</span>
                      </span>
                      <span className="font-mono text-slate-200">{course.progressPercent}% Active</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${course.progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>{course.enrolledStudents.toLocaleString()} Students</span>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-600 transition-all duration-200 cursor-pointer"
                >
                  <span>View Course</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-slate-950/60 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm mb-3">No courses match the selected filters.</p>
            <button
              onClick={() => {
                setFilterDifficulty('All');
                if (onClearFilter) onClearFilter();
              }}
              className="text-xs font-semibold text-sky-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
