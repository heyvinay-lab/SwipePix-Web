import React from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { MessageSquare, Heart, Bug, Sparkles } from 'lucide-react';

interface CommunityFeedbackSectionProps {
  onNavigate: (path: string) => void;
}

export const CommunityFeedbackSection: React.FC<CommunityFeedbackSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-bg border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Feedback & Bug Reports */}
          <div className="card-brutal bg-white p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-brutal">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-lime-100 border-2 border-ink rounded flex items-center justify-center shadow-[2px_2px_0px_#050505]">
                  <Bug className="w-5 h-5 text-ink" />
                </div>
                <NeoBadge variant="accent" rotate="-1" className="text-[10px]">
                  COMMUNITY DRIVEN
                </NeoBadge>
              </div>

              <h3 className="font-mono text-xl font-bold uppercase text-ink">
                Found a bug or have an idea?
              </h3>

              <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                SwipePix is an active open-source project. If you encounter an unexpected crash, UI glitch, or have an idea for a smarter triage gesture, we want to know.
              </p>
            </div>

            <div className="pt-2">
              <BrutalistButton
                variant="white"
                size="md"
                onClick={() => {
                  onNavigate('/feedback');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                Send Feedback & Bugs
              </BrutalistButton>
            </div>
          </div>

          {/* Card 2: Support Development */}
          <div className="card-brutal bg-white p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-brutal">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-warm/20 border-2 border-ink rounded flex items-center justify-center shadow-[2px_2px_0px_#050505]">
                  <Sparkles className="w-5 h-5 text-warm" />
                </div>
                <NeoBadge variant="warm" rotate="1" className="text-[10px]">
                  100% INDEPENDENT
                </NeoBadge>
              </div>

              <h3 className="font-mono text-xl font-bold uppercase text-ink">
                Help keep SwipePix independent.
              </h3>

              <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                SwipePix will never have video ads, monthly cloud subscriptions, or tracking telemetry. Your voluntary sponsorship directly funds Android test devices and new features.
              </p>
            </div>

            <div className="pt-2">
              <BrutalistButton
                variant="warm"
                size="md"
                onClick={() => {
                  onNavigate('/donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-xs font-bold"
              >
                <Heart className="w-4 h-4 mr-2 text-ink fill-ink/20" />
                Support Development
              </BrutalistButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
