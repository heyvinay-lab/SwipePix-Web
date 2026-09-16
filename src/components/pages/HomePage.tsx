import React from 'react';
import { HeroSection } from '../hero/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { SwipeInteractiveDemo } from '../demo/SwipeInteractiveDemo';
import { FeatureGridSection } from '../sections/FeatureGridSection';
import { SafetySection } from '../sections/SafetySection';
import { PrivacySection } from '../sections/PrivacySection';
import { PerformanceSection } from '../sections/PerformanceSection';
import { DownloadCtaSection } from '../sections/DownloadCtaSection';
import { InstallationSection } from '../sections/InstallationSection';
import { OpenSourceSection } from '../sections/OpenSourceSection';
import { TechStackSection } from '../sections/TechStackSection';
import { FaqSection } from '../sections/FaqSection';
import { CommunityFeedbackSection } from '../sections/CommunityFeedbackSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Stage */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Problem / Contrast Stage */}
      <ProblemSection />

      {/* 3. 3-Step Workflow Stage */}
      <HowItWorksSection onNavigate={onNavigate} />
      
      {/* 4. Interactive Swipe Demo Stage */}
      <section className="py-20 bg-bg border-b-3 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwipeInteractiveDemo />
        </div>
      </section>

      {/* 5. Core Consumer Benefits & Technical Feature Matrix */}
      <FeatureGridSection />

      {/* 6. Deletion Safety & 30-Day Trash */}
      <SafetySection />

      {/* 7. Privacy & Zero-Network Fortress */}
      <PrivacySection onNavigate={onNavigate} />

      {/* 8. Hardware & Memory Fluidity */}
      <PerformanceSection />

      {/* 9. Mid-Page Download Conversion CTA */}
      <DownloadCtaSection onNavigate={onNavigate} />

      {/* 10. Compact Installation Guide & Troubleshooting */}
      <InstallationSection />

      {/* 11. Open Source & Transparency */}
      <OpenSourceSection onNavigate={onNavigate} />

      {/* 12. Built for Android Collapsible Deep-Dive */}
      <TechStackSection />

      {/* 13. Top 10 Frequently Asked Questions */}
      <FaqSection />

      {/* 14. Community Feedback & Support Opportunities */}
      <CommunityFeedbackSection onNavigate={onNavigate} />
    </div>
  );
};
