export interface Category {
  id: string;
  name: string;
  iconName: string;
  description: string;
  topicsCount: number;
  featuredTopic: string;
  badge?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'practice';
  isCompleted?: boolean;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessonsCount: number;
  enrolledStudents: number;
  rating: number;
  thumbnail: string;
  progressPercent: number;
  description: string;
  syllabus: {
    moduleTitle: string;
    lessons: Lesson[];
  }[];
  keyTakeaways: string[];
}

export type ResourceType = 
  | 'Notes'
  | 'PDFs'
  | 'Practice Questions'
  | 'Mock Tests'
  | 'Previous Year Papers'
  | 'Important Formulas'
  | 'Study Guides';

export interface StudyResource {
  id: string;
  title: string;
  category: string;
  type: ResourceType;
  fileFormat: 'PDF' | 'DOC' | 'SHEET' | 'TEST';
  fileSize: string;
  pages?: number;
  downloadsCount: number;
  updatedDate: string;
  description: string;
  previewSnippet: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  goalOrExam: string;
  avatar: string;
  rating: number;
  feedback: string;
  keyOutcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StudentDashboardData {
  studentName: string;
  currentStreak: number;
  streakActiveToday: boolean;
  studyHoursThisWeek: number;
  totalHoursCompleted: number;
  completedCoursesCount: number;
  inProgressCoursesCount: number;
  averageQuizScore: number;
  weeklyActivity: { day: string; hours: number; target: number }[];
  recentQuizScores: { subject: string; score: number; date: string; maxScore: number }[];
  upcomingLessons: {
    id: string;
    courseName: string;
    lessonTitle: string;
    scheduledTime: string;
    instructor: string;
  }[];
}
