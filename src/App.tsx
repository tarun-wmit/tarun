import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LearningCategories } from './components/LearningCategories.tsx';
import { FeaturedCourses } from './components/FeaturedCourses.tsx';
import { StudyResources } from './components/StudyResources.tsx';
import { WhyLearnWithTarun } from './components/WhyLearnWithTarun.tsx';
import { DailyMotivation } from './components/DailyMotivation.tsx';
import { StudyDashboard } from './components/StudyDashboard.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CourseModal } from './components/CourseModal.tsx';
import { ResourceModal } from './components/ResourceModal.tsx';
import { QuizModal } from './components/QuizModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { Toast, ToastMessage } from './components/Toast.tsx';
import { Course, StudyResource } from './types.ts';
import { FEATURED_COURSES } from './data/mockData.ts';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedResource, setSelectedResource] = useState<StudyResource | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  const showToast = (title: string, description?: string) => {
    setToast({
      id: Date.now().toString(),
      title,
      description,
      type: 'success',
    });
  };

  const handleStartLearning = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreResources = () => {
    const el = document.getElementById('resources');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategoryFilter(categoryName);
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Filtered for ${categoryName}`, 'Displaying matched masterclasses and materials.');
  };

  const handleEnrollCourse = (courseTitle: string) => {
    showToast(`Enrolled in "${courseTitle}"!`, 'Study syllabus unlocked. Track your progress on the dashboard.');
  };

  const handleDownloadResource = (res: StudyResource) => {
    // Simulate real download
    showToast(`Downloaded "${res.title}"`, `File size: ${res.fileSize} (${res.fileFormat})`);
    if (selectedResource) setSelectedResource(null);
  };

  const handleFinishQuiz = (score: number) => {
    showToast(`Diagnostic Score: ${score}%`, 'Results successfully synced to your student study profile.');
  };

  const handleMessageSent = (name: string) => {
    showToast(`Message Sent, ${name}!`, 'Tarun has received your note and will review your academic question.');
  };

  const handleOpenSampleLesson = () => {
    if (FEATURED_COURSES.length > 0) {
      setSelectedCourse(FEATURED_COURSES[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-200">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onStartLearning={handleStartLearning} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero
          onStartLearning={handleStartLearning}
          onExploreResources={handleExploreResources}
          onOpenSampleLesson={handleOpenSampleLesson}
        />

        {/* 2. ABOUT TARUN */}
        <AboutSection />

        {/* 3. LEARNING CATEGORIES */}
        <LearningCategories onSelectCategory={handleCategorySelect} />

        {/* 4. FEATURED COURSES */}
        <FeaturedCourses
          onSelectCourse={(course) => setSelectedCourse(course)}
          selectedCategoryFilter={selectedCategoryFilter}
          onClearFilter={() => setSelectedCategoryFilter(null)}
        />

        {/* 5. STUDY RESOURCES */}
        <StudyResources
          onSelectResource={(res) => setSelectedResource(res)}
          onDownloadResource={handleDownloadResource}
        />

        {/* 6. WHY LEARN WITH TARUN? */}
        <WhyLearnWithTarun />

        {/* 7. DAILY MOTIVATION SECTION */}
        <DailyMotivation onKeepLearning={handleStartLearning} />

        {/* 8. STUDY DASHBOARD */}
        <StudyDashboard
          onJoinLesson={(title) => {
            showToast(`Joined Session: "${title}"`, 'Opening Tarun live room buffer...');
          }}
          onTakeQuiz={() => setIsQuizModalOpen(true)}
        />

        {/* 9. TESTIMONIALS */}
        <Testimonials />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. CONTACT SECTION */}
        <ContactSection onMessageSent={handleMessageSent} />
      </main>

      {/* 12. FOOTER */}
      <Footer onOpenLegal={(type) => setLegalType(type)} />

      {/* Interactive Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />

      <ResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
        onDownload={handleDownloadResource}
      />

      {isQuizModalOpen && (
        <QuizModal
          onClose={() => setIsQuizModalOpen(false)}
          onFinishQuiz={handleFinishQuiz}
        />
      )}

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      {/* Interactive Toast Notifications */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
