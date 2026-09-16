import React from 'react';
import { HeroSection } from '../hero/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { SwipeInteractiveDemo } from '../demo/SwipeInteractiveDemo';
import { FeatureGridSection } from '../sections/FeatureGridSection';
import { SafetySection } from '../sections/SafetySection';
import { PrivacySection } from '../sections/PrivacySection';
import { PerformanceSection } from '../sections/PerformanceSection';
import { TechStackSection } from '../sections/TechStackSection';
import { FaqSection } from '../sections/FaqSection';
import { DownloadCtaSection } from '../sections/DownloadCtaSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <HowItWorksSection />
      
      {/* Interactive Swipe Demo Stage */}
      <section className="py-20 bg-bg border-b-3 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwipeInteractiveDemo />
        </div>
      </section>

      <FeatureGridSection />
      <SafetySection />
      <PrivacySection onNavigate={onNavigate} />
      <PerformanceSection />
      <TechStackSection />
      <FaqSection />
      <DownloadCtaSection onNavigate={onNavigate} />
    </div>
  );
};
