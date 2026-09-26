import { useState } from 'react';
import type { AppProject } from './types';
import { APPS_DATA } from './data/apps';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AppsSection } from './sections/AppsSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { LifecycleSection } from './sections/LifecycleSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationResearchSection } from './sections/EducationResearchSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { AppModal } from './components/AppModal';
import { CvModal } from './components/CvModal';

export function App() {
  const [selectedApp, setSelectedApp] = useState<AppProject | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a10] text-slate-100 selection:bg-blue-600/30 selection:text-white flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          apps={APPS_DATA}
          onOpenCaseStudy={(app) => setSelectedApp(app)}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* 2. Shipped Apps Showcase (Centerpiece) */}
        <AppsSection
          apps={APPS_DATA}
          onOpenCaseStudy={(app) => setSelectedApp(app)}
        />

        {/* 3. Mobile Engineering Expertise & Architecture */}
        <ExpertiseSection />

        {/* 4. From Idea to App Store Lifecycle */}
        <LifecycleSection />

        {/* 5. Professional Experience Timeline */}
        <ExperienceSection />

        {/* 6. Education & IEEE Research */}
        <EducationResearchSection />

        {/* 7. Recruiter-First Contact Section */}
        <ContactSection onOpenCv={() => setIsCvOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Case Study Modal */}
      <AppModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
      />

      {/* Verified CV / Resume Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />
    </div>
  );
}

export default App;
