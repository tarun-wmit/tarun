import { Category, Course, StudyResource, Testimonial, FAQItem, StudentDashboardData } from '../types.ts';

export const TARUN_PROFILE = {
  name: 'Tarun',
  brand: 'TARUN',
  tagline: 'Learn Smarter. Grow Faster. Build Your Future.',
  subheading: "Welcome to Tarun's educational space — where knowledge meets consistency, curiosity, and real-world growth.",
  philosophy: "Hi, I'm Tarun. I believe education is not just about marks — it's about building knowledge, confidence, skills, and a better future.",
  detailedBio: "As an educator and student mentor, I focus on dismantling overwhelming subjects into crystal-clear intuitions. Whether tackling multivariable calculus, understanding scientific laws, or writing high-impact software, true mastery comes from active inquiry and structured consistency rather than memorization.",
  stats: [
    { label: 'Learning Resources', value: 100, suffix: '+', description: 'Curated notes, formula sheets & tests' },
    { label: 'Topics Covered', value: 50, suffix: '+', description: 'From foundational STEM to career mastery' },
    { label: 'Study Hours Guided', value: 1000, suffix: '+', description: 'Interactive learning & deep practice' },
    { label: 'Learning Mindset', value: 24, suffix: '/7', description: 'Continuous growth & student support' },
  ],
  portraitUrl: '/src/assets/images/tarun_educator_portrait_1790329648124.jpg',
  email: 'tarun.wmit1@gmail.com',
};

export const CATEGORIES: Category[] = [
  {
    id: 'math',
    name: 'Mathematics',
    iconName: 'Calculator',
    description: 'Master calculus, linear algebra, geometry, and problem-solving through visual geometric proofs and first-principle intuitions.',
    topicsCount: 14,
    featuredTopic: 'Calculus & Vectors',
    badge: 'Popular'
  },
  {
    id: 'science',
    name: 'Science',
    iconName: 'Atom',
    description: 'Demystify physics, chemistry, and mechanics with real-life models, laboratory insights, and conceptual experiments.',
    topicsCount: 16,
    featuredTopic: 'Classical Mechanics & Optics',
    badge: 'Core'
  },
  {
    id: 'english',
    name: 'English',
    iconName: 'BookOpen',
    description: 'Refine written articulation, vocabulary, critical reading comprehension, and professional spoken communication.',
    topicsCount: 9,
    featuredTopic: 'Advanced Academic Writing'
  },
  {
    id: 'cs',
    name: 'Computer Science',
    iconName: 'Code',
    description: 'From computational thinking and algorithms to web development, Python, and data structures built from scratch.',
    topicsCount: 12,
    featuredTopic: 'Data Structures & Algorithms',
    badge: 'Trending'
  },
  {
    id: 'gk',
    name: 'General Knowledge',
    iconName: 'Globe',
    description: 'Expand analytical awareness across contemporary global affairs, economic foundations, and scientific breakthroughs.',
    topicsCount: 8,
    featuredTopic: 'World Economics & Tech Trends'
  },
  {
    id: 'competitive',
    name: 'Competitive Exams',
    iconName: 'Target',
    description: 'Strategic time management, high-yield shortcut methods, and rigorous mock test drills for scholastic & entrance tests.',
    topicsCount: 15,
    featuredTopic: 'Aptitude & Logical Reasoning',
    badge: 'High Yield'
  },
  {
    id: 'career',
    name: 'Career & Skills',
    iconName: 'Briefcase',
    description: 'Build resume impact, technical presentation abilities, interview problem-solving, and professional networking habits.',
    topicsCount: 7,
    featuredTopic: 'Technical Interview Mastery'
  },
  {
    id: 'personal_dev',
    name: 'Personal Development',
    iconName: 'Sparkles',
    description: 'Cultivate deep work stamina, morning focus protocols, spaced repetition scheduling, and high-performance study habits.',
    topicsCount: 6,
    featuredTopic: 'Deep Focus & Habit Design'
  }
];

export const FEATURED_COURSES: Course[] = [
  {
    id: 'math-mastery',
    title: 'Mathematics Mastery',
    subtitle: 'From Fundamental Logic to Advanced Calculus with Visual Proofs',
    category: 'Mathematics',
    difficulty: 'Intermediate',
    duration: '24 hrs',
    lessonsCount: 36,
    enrolledStudents: 1420,
    rating: 4.95,
    thumbnail: '/src/assets/images/course_math_mastery_1790329662783.jpg',
    progressPercent: 68,
    description: 'A comprehensive journey into algebraic structures, visual calculus, coordinate geometry, and real-world optimization problems without dry formula memorization.',
    syllabus: [
      {
        moduleTitle: 'Module 1: Intuitive Foundations of Limits & Functions',
        lessons: [
          { id: 'm1-1', title: 'Geometric Meaning of Rates of Change', duration: '28 min', type: 'video', isCompleted: true },
          { id: 'm1-2', title: 'Continuity & Epsilon-Delta Visualized', duration: '35 min', type: 'reading', isCompleted: true },
          { id: 'm1-3', title: 'Problem Set: Tangent Lines & Approximations', duration: '40 min', type: 'practice', isCompleted: true },
        ]
      },
      {
        moduleTitle: 'Module 2: Derivatives & Optimization in Real Life',
        lessons: [
          { id: 'm2-1', title: 'Product & Chain Rules with Spatial Grids', duration: '32 min', type: 'video', isCompleted: true },
          { id: 'm2-2', title: 'Minima, Maxima, and Inflection Points in Engineering', duration: '45 min', type: 'video', isCompleted: false },
          { id: 'm2-3', title: 'Hands-on Challenge: Gradient Descent by Hand', duration: '50 min', type: 'practice', isCompleted: false },
        ]
      },
      {
        moduleTitle: 'Module 3: Integration & Area Accumulation',
        lessons: [
          { id: 'm3-1', title: 'Riemann Sums to Definite Integrals', duration: '30 min', type: 'video', isCompleted: false },
          { id: 'm3-2', title: 'Techniques of Integration & Substitution', duration: '42 min', type: 'reading', isCompleted: false },
        ]
      }
    ],
    keyTakeaways: [
      'Master the geometric intuition behind differentiation and integrals',
      'Solve non-trivial optimization and physics rate problems',
      'Gain high computational speed with rigorous analytical verification',
      'Build confidence for engineering math and college entrance exams'
    ]
  },
  {
    id: 'science-simplified',
    title: 'Science Simplified',
    subtitle: 'Core Physics & Chemistry Mechanics Explained in Plain English',
    category: 'Science',
    difficulty: 'Beginner',
    duration: '18 hrs',
    lessonsCount: 28,
    enrolledStudents: 1180,
    rating: 4.92,
    thumbnail: '/src/assets/images/course_science_simplified_1790329677180.jpg',
    progressPercent: 42,
    description: 'Transform intimidating physics equations and chemical reaction kinetics into logical narratives using real-world analogies, interactive simulations, and experiments.',
    syllabus: [
      {
        moduleTitle: 'Module 1: Mechanics, Kinematics & Newton’s Laws',
        lessons: [
          { id: 's1-1', title: 'Forces in Equilibrium & Free Body Diagrams', duration: '30 min', type: 'video', isCompleted: true },
          { id: 's1-2', title: 'Conservation of Momentum and Energy Transformations', duration: '38 min', type: 'video', isCompleted: true },
          { id: 's1-3', title: 'Interactive Drill: Projectile Trajectory Calculator', duration: '45 min', type: 'practice', isCompleted: false },
        ]
      },
      {
        moduleTitle: 'Module 2: Electromagnetism & Field Theory',
        lessons: [
          { id: 's2-1', title: 'Coulomb’s Law and Electric Potential Wells', duration: '34 min', type: 'video', isCompleted: false },
          { id: 's2-2', title: 'Magnetic Fields, Induction & Lenz’s Law in Action', duration: '40 min', type: 'reading', isCompleted: false },
        ]
      }
    ],
    keyTakeaways: [
      'Deconstruct complex physical forces into clear free-body diagrams',
      'Understand chemical bonding thermodynamics intuitively',
      'Eliminate exam anxiety around multi-concept science questions'
    ]
  },
  {
    id: 'computer-fundamentals',
    title: 'Computer Fundamentals',
    subtitle: 'Computational Thinking, Algorithms & Clean Code Architecture',
    category: 'Computer Science',
    difficulty: 'Beginner',
    duration: '32 hrs',
    lessonsCount: 44,
    enrolledStudents: 1950,
    rating: 4.98,
    thumbnail: '/src/assets/images/course_computer_fundamentals_1790329698422.jpg',
    progressPercent: 85,
    description: 'A practical, modern developer roadmap for students and aspiring engineers: from how memory works down to binary to constructing data structures and web APIs.',
    syllabus: [
      {
        moduleTitle: 'Module 1: How Computers Think — Memory, CPU & Logic',
        lessons: [
          { id: 'c1-1', title: 'Bits, Bytes & Memory Allocation Demystified', duration: '25 min', type: 'video', isCompleted: true },
          { id: 'c1-2', title: 'Time & Space Complexity: Big-O without Confusion', duration: '35 min', type: 'reading', isCompleted: true },
          { id: 'c1-3', title: 'Building Arrays and Hash Tables from Scratch', duration: '50 min', type: 'practice', isCompleted: true },
        ]
      },
      {
        moduleTitle: 'Module 2: Modern Software Engineering Practices',
        lessons: [
          { id: 'c2-1', title: 'Clean Functions, Modular Design, and Git Flow', duration: '40 min', type: 'video', isCompleted: true },
          { id: 'c2-2', title: 'Real-world Project: Interactive Data Engine', duration: '60 min', type: 'practice', isCompleted: true },
        ]
      }
    ],
    keyTakeaways: [
      'Grasp fundamental computer memory and algorithmic efficiency',
      'Write structured, clean, scalable code in modern languages',
      'Build a portfolio-worthy project step by step'
    ]
  },
  {
    id: 'english-communication',
    title: 'English Communication',
    subtitle: 'Confident Articulation, Professional Writing & Precision Speech',
    category: 'English',
    difficulty: 'Beginner',
    duration: '16 hrs',
    lessonsCount: 24,
    enrolledStudents: 890,
    rating: 4.88,
    thumbnail: '/src/assets/images/tarun_educator_portrait_1790329648124.jpg',
    progressPercent: 25,
    description: 'Communicate your ideas with clarity, persuasiveness, and executive poise. Perfect for students preparing for seminars, viva exams, and college presentations.',
    syllabus: [
      {
        moduleTitle: 'Module 1: Clear Sentence Structure & Active Voice',
        lessons: [
          { id: 'e1-1', title: 'Eliminating Fluff: The Art of Concise Prose', duration: '22 min', type: 'video', isCompleted: true },
          { id: 'e1-2', title: 'Structuring High-Impact Essays and Proposals', duration: '30 min', type: 'reading', isCompleted: false },
        ]
      },
      {
        moduleTitle: 'Module 2: Verbal Confidence & Presentation Delivery',
        lessons: [
          { id: 'e2-1', title: 'Voice Modulation, Pacing & Body Language', duration: '28 min', type: 'video', isCompleted: false },
          { id: 'e2-2', title: 'Impromptu Speaking Frameworks (PREP method)', duration: '35 min', type: 'practice', isCompleted: false },
        ]
      }
    ],
    keyTakeaways: [
      'Eliminate filler words and speak with authoritative calm',
      'Format professional academic papers and emails effortlessly',
      'Deliver persuasive talks with well-timed story arcs'
    ]
  },
  {
    id: 'competitive-exam-prep',
    title: 'Competitive Exam Preparation',
    subtitle: 'Strategic Speed Tactics, Question Triaging & High-Yield Drills',
    category: 'Competitive Exams',
    difficulty: 'Advanced',
    duration: '26 hrs',
    lessonsCount: 40,
    enrolledStudents: 1640,
    rating: 4.96,
    thumbnail: '/src/assets/images/course_math_mastery_1790329662783.jpg',
    progressPercent: 55,
    description: 'Learn the meta-skills of testing: how to triage questions, avoid negative marking traps, master mental math shortcuts, and build timed endurance.',
    syllabus: [
      {
        moduleTitle: 'Module 1: Test Strategy & Question Triaging',
        lessons: [
          { id: 'ce1-1', title: 'The 3-Pass Exam Algorithm for High Scores', duration: '30 min', type: 'video', isCompleted: true },
          { id: 'ce1-2', title: 'Mental Math Shortcuts for Complex Calculations', duration: '40 min', type: 'reading', isCompleted: true },
        ]
      },
      {
        moduleTitle: 'Module 2: Full-Length Timed Sectional Mocks',
        lessons: [
          { id: 'ce2-1', title: 'Timed Mock Test 1: Quantitative & Reasoning', duration: '90 min', type: 'practice', isCompleted: false },
          { id: 'ce2-2', title: 'Error Log Diagnostics: Turning Mistakes into Mastery', duration: '35 min', type: 'reading', isCompleted: false },
        ]
      }
    ],
    keyTakeaways: [
      'Save 20-30 seconds per question with algebraic shortcuts',
      'Build a personalized error log that targets weak spots',
      'Simulate exam pressure through standardized mock schedules'
    ]
  }
];

export const STUDY_RESOURCES: StudyResource[] = [
  {
    id: 'res-1',
    title: 'Complete Calculus & Differential Equations Formula Sheet',
    category: 'Mathematics',
    type: 'Important Formulas',
    fileFormat: 'PDF',
    fileSize: '2.4 MB',
    pages: 14,
    downloadsCount: 3840,
    updatedDate: 'Sep 2026',
    description: 'High-density, beautifully structured reference guide covering limits, standard derivatives, substitution rules, Laplace transforms, and series expansions.',
    previewSnippet: 'd/dx [sin(u)] = cos(u) du/dx | Integration by parts: ∫ u dv = uv - ∫ v du | Taylor Series: f(x) = ∑ f^(n)(a)/n! (x-a)^n',
    tags: ['Calculus', 'Formula Map', 'STEM Prep']
  },
  {
    id: 'res-2',
    title: 'Physics Mechanics: First Principles Revision Notes',
    category: 'Science',
    type: 'Notes',
    fileFormat: 'PDF',
    fileSize: '4.8 MB',
    pages: 32,
    downloadsCount: 2950,
    updatedDate: 'Sep 2026',
    description: 'Concise, illustrated lecture summaries of rotational dynamics, center of mass, angular momentum, gravitation, and harmonic oscillations.',
    previewSnippet: 'Key Insight: Torque is the rotational analog of force (τ = r × F = Iα). Always identify fixed pivots before taking moment equations.',
    tags: ['Physics', 'Mechanics', 'Cheat Sheet']
  },
  {
    id: 'res-3',
    title: 'All-in-One Data Structures & Algorithms Blueprint',
    category: 'Computer Science',
    type: 'Study Guides',
    fileFormat: 'PDF',
    fileSize: '6.1 MB',
    pages: 45,
    downloadsCount: 4620,
    updatedDate: 'Sep 2026',
    description: 'Visual breakdowns of Arrays, Linked Lists, Binary Trees, Graph Traversals (BFS/DFS), Dynamic Programming tabular states, and Big-O trade-offs.',
    previewSnippet: 'DP Strategy: 1. Identify subproblems. 2. Define recurrence relation. 3. Base cases. 4. Choose memoization vs tabulation.',
    tags: ['Coding', 'Algorithms', 'Tech Interviews']
  },
  {
    id: 'res-4',
    title: 'Scholastic Aptitude & Reasoning Full Mock Test (Series A)',
    category: 'Competitive Exams',
    type: 'Mock Tests',
    fileFormat: 'TEST',
    fileSize: '1.2 MB',
    pages: 18,
    downloadsCount: 1890,
    updatedDate: 'Sep 2026',
    description: '60 curated timed questions featuring quantitative aptitude, logical deductions, data interpretation graphs, and comprehensive solution steps.',
    previewSnippet: 'Includes: 25 Math Questions, 20 Logical Reasoning, 15 Verbal Reasoning with detailed percentile conversion table and step-by-step key.',
    tags: ['Exam Drill', 'Timed Test', 'Rank Booster']
  },
  {
    id: 'res-5',
    title: 'Official Previous 5-Year Questions with Worked Solutions',
    category: 'Competitive Exams',
    type: 'Previous Year Papers',
    fileFormat: 'PDF',
    fileSize: '8.5 MB',
    pages: 76,
    downloadsCount: 5120,
    updatedDate: 'Aug 2026',
    description: 'Historical exam papers categorized by topic frequency with alternative shortcut methods and common traps flagged in red callouts.',
    previewSnippet: 'Frequency analysis reveals: 34% of calculus marks belong to definite integrals. See Section 3 for 12 repeated question variations.',
    tags: ['PYQ', 'Solved Papers', 'High Yield']
  },
  {
    id: 'res-6',
    title: '200 High-Yield Practice Questions for Organic Reaction Mechanisms',
    category: 'Science',
    type: 'Practice Questions',
    fileFormat: 'PDF',
    fileSize: '3.7 MB',
    pages: 28,
    downloadsCount: 2210,
    updatedDate: 'Aug 2026',
    description: 'Graded problem set ranging from SN1/SN2 kinetics to electrophilic aromatic substitutions and carbonyl addition mechanisms with answer hints.',
    previewSnippet: 'Question 42: Predict the major product of 2-bromobutane with sodium ethoxide in ethanol. (Hint: Regioselectivity follows Zaitsev rule).',
    tags: ['Chemistry', 'Drills', 'Problem Sets']
  },
  {
    id: 'res-7',
    title: 'Executive English: 100 Power Phrases for Academic Presentations',
    category: 'English',
    type: 'Notes',
    fileFormat: 'DOC',
    fileSize: '1.1 MB',
    pages: 12,
    downloadsCount: 1470,
    updatedDate: 'Sep 2026',
    description: 'Curated transition phrases, rebuttals, data presentation templates, and thesis statement frameworks for research defense and public speaking.',
    previewSnippet: 'Instead of saying "This proves that...", say "This empirical distribution substantiates the hypothesis that...".',
    tags: ['Vocabulary', 'Public Speaking', 'Writing']
  },
  {
    id: 'res-8',
    title: 'The Deep Work Student Protocol: Habit & Spaced Repetition Guide',
    category: 'Personal Development',
    type: 'Study Guides',
    fileFormat: 'PDF',
    fileSize: '2.9 MB',
    pages: 20,
    downloadsCount: 3100,
    updatedDate: 'Aug 2026',
    description: 'A neuroscience-backed framework for 90-minute study blocks, digital distraction elimination, active recall flashcard scheduling, and circadian sleep alignment.',
    previewSnippet: 'The 3-Day Retention Rule: Review tough concepts at Hour 24, Day 3, and Day 7 to cement neurological synaptic consolidation.',
    tags: ['Productivity', 'Habit Tracker', 'Study Method']
  }
];

export const WHY_LEARN_CARDS = [
  {
    id: 'simple-explanations',
    title: 'Simple Explanations',
    description: 'Complex equations and theoretical concepts are distilled into plain intuitions and relatable analogies before writing a single formula.',
    iconName: 'Lightbulb',
    metric: 'Zero Jargon',
  },
  {
    id: 'concept-based',
    title: 'Concept-Based Learning',
    description: 'We prioritize the foundational "why" over mechanical rote memorization, helping you solve novel questions you have never seen before.',
    iconName: 'Layers',
    metric: 'Deep Retention',
  },
  {
    id: 'practice-oriented',
    title: 'Practice-Oriented Study',
    description: 'Theory is immediately validated with targeted challenge sets, step-by-step problem dissection, and progressive difficulty escalations.',
    iconName: 'PenTool',
    metric: 'Active Drills',
  },
  {
    id: 'regular-learning',
    title: 'Regular Learning',
    description: 'Consistent, bite-sized daily study cadences beat frantic last-minute cramming every single time. Structured schedules keep you on track.',
    iconName: 'CalendarCheck',
    metric: 'Habit Engine',
  },
  {
    id: 'career-focused',
    title: 'Career-Focused Guidance',
    description: 'Bridge classroom academics with industry realities. Develop technical problem-solving, project presentation, and interview poise.',
    iconName: 'TrendingUp',
    metric: 'Future-Ready',
  },
  {
    id: 'student-friendly',
    title: 'Student-Friendly Resources',
    description: 'Cleanly formatted cheat sheets, searchable formula sheets, and printable revision summaries crafted specifically for students.',
    iconName: 'FileCheck',
    metric: '100% Free Access',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aarav Sharma',
    role: 'Computer Engineering Student',
    goalOrExam: 'Scored 99.4 Percentile in Mathematics',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    feedback: "Tarun's visual approach to calculus completely transformed how I think about rates of change. What used to take me 2 hours of confusing textbook reading clicked in a 30-minute session.",
    keyOutcome: '+34 Marks in Engineering Math'
  },
  {
    id: 't-2',
    name: 'Priya Iyer',
    role: 'Medical Aspirant',
    goalOrExam: 'Physics & Chemistry Mastery',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    feedback: "Science Simplified gave me the confidence I was missing in mechanics and thermodynamics. Tarun breaks down free-body diagrams like nobody else. My test anxiety vanished.",
    keyOutcome: 'Top 1% Score in Physics'
  },
  {
    id: 't-3',
    name: 'Rohan Mehta',
    role: 'Competitive Exam Candidate',
    goalOrExam: 'Aptitude & Speed Optimization',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    feedback: "The 3-pass exam strategy and formula cheat sheets alone shaved 25 minutes off my mock tests. You don't just learn subjects here — you learn how to perform under real exam clocks.",
    keyOutcome: 'Time per Question Cut by 40%'
  },
  {
    id: 't-4',
    name: 'Ananya Verma',
    role: 'Software Developer Intern',
    goalOrExam: 'Tech Interview & DS/Algo Prep',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    feedback: "The Computer Fundamentals course bridged my theoretical university lectures with real software development. Tarun's emphasis on clean design patterns helped me crack my dream internship.",
    keyOutcome: 'Secured Tier-1 SDE Internship'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Getting Started',
    question: 'How can I start learning on Tarun’s platform?',
    answer: 'Starting is effortless and instant. Browse the Learning Categories or Featured Courses above, choose the topic you want to master, and click "View Course" or "Explore Resources". You can access video roadmaps, interactive problem sets, and download formula sheets without any tedious sign-up walls.'
  },
  {
    id: 'faq-2',
    category: 'Pricing & Access',
    question: 'Are the resources and study materials free?',
    answer: 'Yes! All core study notes, high-yield formula sheets, previous year papers, and practice sets curated by Tarun are 100% accessible to every student. Our mission is to make quality, concept-first education democratized and accessible.'
  },
  {
    id: 'faq-3',
    category: 'Progress & Tracking',
    question: 'How can I track my study progress?',
    answer: 'The interactive Study Dashboard (previewed below) provides real-time tracking for your daily learning streak, course completion percentages, quiz scores, and weekly study hour targets. You can mark lessons complete and check in every day to keep your streak alive.'
  },
  {
    id: 'faq-4',
    category: 'Platform Accessibility',
    question: 'Can I access the website on mobile and tablet devices?',
    answer: 'Absolutely. The platform is engineered with responsive mobile-first architecture. Whether you are reviewing formula sheets on your phone during transit or taking mock exams on your desktop, the interface adjusts fluidly with high contrast and zero lag.'
  },
  {
    id: 'faq-5',
    category: 'Content Updates',
    question: 'How often are new resources and course modules added?',
    answer: 'New high-yield question sets, updated formula sheets, and module video lessons are added every single week. Before major exam windows, specialized crash revision guides and mock tests are published regularly.'
  },
  {
    id: 'faq-6',
    category: 'Pedagogy',
    question: 'What makes Tarun’s teaching methodology unique?',
    answer: 'Tarun focuses on first-principles reasoning: connecting abstract mathematics and science to visual, intuitive models before introducing formal symbology. By eliminating dry rote memorization and incorporating active testing drills, students build lasting conceptual confidence.'
  }
];

export const INITIAL_DASHBOARD_DATA: StudentDashboardData = {
  studentName: 'Learner',
  currentStreak: 14,
  streakActiveToday: true,
  studyHoursThisWeek: 18.5,
  totalHoursCompleted: 142,
  completedCoursesCount: 2,
  inProgressCoursesCount: 3,
  averageQuizScore: 92,
  weeklyActivity: [
    { day: 'Mon', hours: 2.5, target: 2.0 },
    { day: 'Tue', hours: 3.0, target: 2.0 },
    { day: 'Wed', hours: 1.8, target: 2.0 },
    { day: 'Thu', hours: 3.2, target: 2.0 },
    { day: 'Fri', hours: 2.6, target: 2.0 },
    { day: 'Sat', hours: 3.5, target: 3.0 },
    { day: 'Sun', hours: 1.9, target: 2.0 },
  ],
  recentQuizScores: [
    { subject: 'Calculus Limits & Continuity', score: 95, date: 'Yesterday', maxScore: 100 },
    { subject: 'Newtonian Dynamics Free-Body', score: 88, date: '3 days ago', maxScore: 100 },
    { subject: 'Big-O & Recursion Algorithms', score: 94, date: '5 days ago', maxScore: 100 },
    { subject: 'Quantitative Aptitude Series', score: 91, date: '1 week ago', maxScore: 100 }
  ],
  upcomingLessons: [
    {
      id: 'up-1',
      courseName: 'Mathematics Mastery',
      lessonTitle: 'Minima, Maxima, and Inflection Points in Engineering',
      scheduledTime: 'Today at 5:00 PM',
      instructor: 'Tarun'
    },
    {
      id: 'up-2',
      courseName: 'Science Simplified',
      lessonTitle: 'Electromagnetism: Electric Potential Wells',
      scheduledTime: 'Tomorrow at 10:30 AM',
      instructor: 'Tarun'
    },
    {
      id: 'up-3',
      courseName: 'Computer Fundamentals',
      lessonTitle: 'Modular Design and Git Flow Demonstration',
      scheduledTime: 'Saturday at 4:00 PM',
      instructor: 'Tarun'
    }
  ]
};

export const MOTIVATIONAL_QUOTES = [
  {
    quote: "Small Steps Every Day. Big Results Tomorrow.",
    author: "Tarun",
    context: "Consistency beats talent when talent forgets to show up daily."
  },
  {
    quote: "Do not study to merely pass an exam. Study to understand how the universe functions.",
    author: "Tarun",
    context: "Real confidence is the byproduct of authentic comprehension."
  },
  {
    quote: "When an equation looks impossible, break it down to its first physical principle.",
    author: "Tarun",
    context: "Complex problems are just simple ideas strung together."
  },
  {
    quote: "Your error log is your greatest academic asset. Cherish every mistake.",
    author: "Tarun",
    context: "Every error diagnosed is an exam mark permanently secured."
  }
];
