import React, { useState } from 'react';
import { 
  Flame, 
  Clock, 
  Award, 
  CheckCircle2, 
  Calendar, 
  BarChart2, 
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Play
} from 'lucide-react';
import { INITIAL_DASHBOARD_DATA } from '../data/mockData.ts';
import { StudentDashboardData } from '../types.ts';

interface StudyDashboardProps {
  onJoinLesson: (lessonTitle: string) => void;
  onTakeQuiz: () => void;
}

export const StudyDashboard: React.FC<StudyDashboardProps> = ({ onJoinLesson, onTakeQuiz }) => {
  const [data, setData] = useState<StudentDashboardData>(INITIAL_DASHBOARD_DATA);
  const [checkedInToday, setCheckedInToday] = useState(data.streakActiveToday);
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'quizzes'>('overview');

  const handleStreakCheckIn = () => {
    if (!checkedInToday) {
      setCheckedInToday(true);
      setData((prev) => ({
        ...prev,
        currentStreak: prev.currentStreak + 1,
        streakActiveToday: true,
      }));
    } else {
      setCheckedInToday(false);
      setData((prev) => ({
        ...prev,
        currentStreak: Math.max(1, prev.currentStreak - 1),
        streakActiveToday: false,
      }));
    }
  };

  // Find max weekly study hours for scaling the chart
  const maxWeeklyHours = Math.max(...data.weeklyActivity.map((d) => Math.max(d.hours, d.target)), 4);

  return (
    <section id="dashboard" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              <span>06</span>
              <span className="text-slate-600">·</span>
              <span>LIVE STUDENT PORTAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Student Study Dashboard
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Interactive cockpit for monitoring your learning streak, weekly study hours, quiz mastery rates, and upcoming live problem-solving sessions.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-sky-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-sky-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Study Hours
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'quizzes'
                  ? 'bg-sky-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quiz Scores
            </button>
          </div>
        </div>

        {/* Top Metric Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          
          {/* Card 1: Streak */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Current Streak</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Flame className="w-4 h-4 fill-amber-400" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                {data.currentStreak}
              </span>
              <span className="text-xs text-slate-400 font-medium">Consecutive Days</span>
            </div>
            <button
              onClick={handleStreakCheckIn}
              className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                checkedInToday
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{checkedInToday ? 'Streak Verified Today' : 'Tap to Check-in Today'}</span>
            </button>
          </div>

          {/* Card 2: Weekly Hours */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Weekly Hours</span>
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                {data.studyHoursThisWeek}
              </span>
              <span className="text-xs text-slate-400 font-medium">/ 14.0 Target Hrs</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-sky-400 h-full rounded-full"
                style={{ width: `${Math.min(100, (data.studyHoursThisWeek / 14) * 100)}%` }}
              />
            </div>
          </div>

          {/* Card 3: Completed Courses */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Course Milestones</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                {data.completedCoursesCount}
              </span>
              <span className="text-xs text-slate-400 font-medium">Completed · {data.inProgressCoursesCount} Active</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Total 142 hrs logged on platform
            </div>
          </div>

          {/* Card 4: Quiz Score */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Quiz Precision</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                {data.averageQuizScore}%
              </span>
              <span className="text-xs text-slate-400 font-medium">Accuracy Rating</span>
            </div>
            <button
              onClick={onTakeQuiz}
              className="text-[11px] font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Take Daily 5-min Diagnostic</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Dashboard Dynamic View Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Chart / Analytics Area (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Weekly Study Cadence
                </h3>
                <p className="text-xs text-slate-400">
                  Daily study hours compared against your personal 2-hour daily focus goal.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-sky-500" />
                  <span>Logged</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-slate-600" />
                  <span>Target</span>
                </div>
              </div>
            </div>

            {/* SVG Interactive Bar Chart */}
            <div className="h-64 w-full flex items-end justify-between gap-3 sm:gap-6 pt-6 pb-2 px-2 border-b border-slate-800">
              {data.weeklyActivity.map((day) => {
                const heightPercent = Math.min(100, Math.round((day.hours / maxWeeklyHours) * 100));
                const targetPercent = Math.min(100, Math.round((day.target / maxWeeklyHours) * 100));

                return (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-slate-700 text-[10px] text-white py-1 px-1.5 rounded shadow whitespace-nowrap font-mono">
                      {day.hours}h / {day.target}h
                    </div>

                    <div className="w-full max-w-[42px] bg-slate-900 rounded-t-lg relative h-48 flex items-end justify-center overflow-hidden">
                      {/* Target dotted line */}
                      <div
                        className="absolute left-0 right-0 border-t border-dashed border-slate-500 z-10"
                        style={{ bottom: `${targetPercent}%` }}
                      />

                      {/* Actual hours filled bar */}
                      <div
                        className="w-full bg-gradient-to-t from-sky-600 via-sky-500 to-indigo-400 rounded-t-lg transition-all duration-500 group-hover:brightness-110"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>

                    <span className="text-xs font-mono text-slate-400 group-hover:text-sky-400 transition-colors">
                      {day.day}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Goal: 14 hrs/week</span>
              <span className="text-emerald-400 font-semibold">+32% over target pace</span>
            </div>
          </div>

          {/* Side Column: Upcoming Lessons & Quiz Diagnostics (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Upcoming Live Sessions Card */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <h3 className="text-sm font-bold text-white">Upcoming Guided Sessions</h3>
                </div>
                <span className="text-[11px] font-mono text-sky-400">TARUN LIVE</span>
              </div>

              <div className="space-y-3">
                {data.upcomingLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-[11px] font-mono text-sky-400 mb-0.5">
                        {lesson.courseName}
                      </div>
                      <div className="text-xs font-semibold text-white line-clamp-1">
                        {lesson.lessonTitle}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                        <span>{lesson.scheduledTime}</span>
                        <span>·</span>
                        <span>with {lesson.instructor}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onJoinLesson(lesson.lessonTitle)}
                      className="shrink-0 p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 border border-sky-500/20 transition-all cursor-pointer"
                      title="Join lesson session"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz Performance Log */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-bold text-white">Recent Quiz Diagnostics</h3>
                </div>
                <button
                  onClick={onTakeQuiz}
                  className="text-xs text-sky-400 hover:underline cursor-pointer"
                >
                  New Quiz
                </button>
              </div>

              <div className="space-y-3">
                {data.recentQuizScores.map((quiz, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-medium text-slate-200">{quiz.subject}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{quiz.date}</div>
                    </div>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="font-bold text-white tabular-nums">{quiz.score}</span>
                      <span className="text-slate-500">/ {quiz.maxScore}</span>
                      <span className={`text-[11px] font-semibold ${quiz.score >= 90 ? 'text-emerald-400' : 'text-sky-400'}`}>
                        {quiz.score >= 90 ? 'Mastered' : 'Passed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
