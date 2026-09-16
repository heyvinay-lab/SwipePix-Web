import React from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { Github, MessageSquare, Lightbulb, ShieldCheck, GitPullRequest } from 'lucide-react';
import { SWIPEPIX_CONFIG } from '../../config/swipepix';

interface OpenSourceSectionProps {
  onNavigate: (path: string) => void;
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({ onNavigate }) => {
  return (
    <section id="open-source" className="py-20 bg-bg border-b-3 border-ink">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-brutal bg-white p-8 sm:p-12 shadow-brutal-lg text-center space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <NeoBadge variant="primary" rotate="-1">
              OPEN SOURCE
            </NeoBadge>
            <NeoBadge variant="accent" rotate="1">
              TRANSPARENT & AUDITABLE
            </NeoBadge>
            <NeoBadge variant="white" rotate="-1">
              APACHE 2.0
            </NeoBadge>
          </div>

          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-ink">
            Built openly.
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Inspect the source. Understand the permissions. See how SwipePix works. No hidden telemetry, no tracking algorithms, and no closed-door data harvesting.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <BrutalistButton
              variant="accent"
              size="lg"
              asLink={true}
              href={SWIPEPIX_CONFIG.githubRepoUrl}
              external={true}
              aria-label="View SwipePix source code on GitHub"
              className="text-sm font-bold shadow-brutal"
            >
              <Github className="w-5 h-5 mr-2 text-ink inline" />
              View Source on GitHub
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="lg"
              onClick={() => {
                onNavigate('/feedback');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Report a bug or send feedback"
              className="text-sm font-bold"
            >
              <MessageSquare className="w-5 h-5 mr-2 text-primary inline" />
              Report a Bug
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="lg"
              asLink={true}
              href={`${SWIPEPIX_CONFIG.githubRepoUrl}/issues`}
              external={true}
              aria-label="Request a feature on GitHub"
              className="text-sm font-bold"
            >
              <Lightbulb className="w-5 h-5 mr-2 text-amber-500 inline" />
              Request a Feature
            </BrutalistButton>
          </div>

          {/* Micro Trust Matrix */}
          <div className="pt-6 border-t-2 border-dashed border-gray-300 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-xs">
            <div className="p-3 bg-bg border-2 border-ink shadow-[2px_2px_0px_#050505] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-ink">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero Closed Binary Blobs</span>
              </div>
              <p className="font-sans text-[11px] text-gray-600">
                All media algorithms are open source Kotlin coroutines.
              </p>
            </div>

            <div className="p-3 bg-bg border-2 border-ink shadow-[2px_2px_0px_#050505] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-ink">
                <GitPullRequest className="w-4 h-4 text-secondary" />
                <span>Community Contributions</span>
              </div>
              <p className="font-sans text-[11px] text-gray-600">
                Feedback, UI refinements, and bug reports are welcome.
              </p>
            </div>

            <div className="p-3 bg-bg border-2 border-ink shadow-[2px_2px_0px_#050505] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-ink">
                <Github className="w-4 h-4 text-ink" />
                <span>Reproducible Releases</span>
              </div>
              <p className="font-sans text-[11px] text-gray-600">
                Build directly with Gradle 8.9 and modern Android Studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
