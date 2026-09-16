import React from 'react';
import { BrutalistCard } from '../common/BrutalistCard';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { User, Code2, Globe, Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="mb-3">
            <NeoBadge variant="primary" rotate="-1">
              CREATOR PROFILE
            </NeoBadge>
          </div>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-ink mb-3">
            ABOUT SWIPEPIX.
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700">
            Independent, privacy-first software engineered with modern craft.
          </p>
        </div>

        {/* Developer Bio Card */}
        <BrutalistCard bgColor="bg-white" className="p-8 sm:p-10 shadow-brutal-lg">
          <div className="flex flex-col sm:flex-row items-start gap-6 border-b-3 border-ink pb-8 mb-8">
            <div className="w-20 h-20 bg-accent border-3 border-ink rounded-full flex items-center justify-center shadow-brutal shrink-0">
              <User className="w-10 h-10 text-ink" />
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <NeoBadge variant="accent" rotate="-1">
                  INDEPENDENT ENGINEER
                </NeoBadge>
                <NeoBadge variant="white" rotate="1">
                  BENGALURU, INDIA
                </NeoBadge>
              </div>

              <h2 className="font-mono text-3xl font-bold uppercase text-ink">
                VINAY
              </h2>
              <p className="font-sans text-base text-gray-800 leading-relaxed font-medium">
                SwipePix is designed and built by <strong>Vinay</strong>, an independent software engineer focused on Android architecture, responsive web systems, and high-performance offline tools.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <BrutalistButton
                  variant="primary"
                  size="sm"
                  asLink={true}
                  href="https://portfolio.heyvinay.in/"
                  external={true}
                >
                  <Globe className="w-4 h-4 mr-2" /> VISIT PORTFOLIO
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-80" />
                </BrutalistButton>

                <BrutalistButton
                  variant="white"
                  size="sm"
                  asLink={true}
                  href="https://github.com/heyvinay"
                  external={true}
                >
                  <Code2 className="w-4 h-4 mr-2" /> GITHUB
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-80" />
                </BrutalistButton>
              </div>
            </div>
          </div>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 border-2 border-ink bg-bg">
              <h3 className="font-mono text-sm font-bold uppercase text-ink flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-700" /> LOCAL-FIRST CRAFT
              </h3>
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                Smartphones are powerful computers. Mobile utilities should run fast and locally on-device without leaking data to cloud servers or imposing recurring subscriptions.
              </p>
            </div>

            <div className="p-4 border-2 border-ink bg-bg">
              <h3 className="font-mono text-sm font-bold uppercase text-ink flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-rose-600" /> DELIGHTFUL MOTION
              </h3>
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                Utility software doesn't need to be dry or sterile. SwipePix combines reactive Android gesture physics with a high-contrast neo-brutalist aesthetic to make curation effortless.
              </p>
            </div>
          </div>
        </BrutalistCard>

        {/* Support Development CTA */}
        <div className="p-6 bg-lime-100 border-3 border-ink shadow-brutal flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-xs font-bold text-ink uppercase bg-white px-2 py-0.5 border border-ink">
              OPEN SOURCE & VOLUNTARY PATRONAGE
            </span>
            <h3 className="font-mono text-lg font-bold text-ink">
              WANT TO SUPPORT INDEPENDENT SOFTWARE?
            </h3>
            <p className="font-sans text-xs text-gray-800 max-w-xl">
              SwipePix is 100% free with zero ads. If it helped you clean your storage, consider supporting ongoing development.
            </p>
          </div>

          <BrutalistButton
            variant="accent"
            size="md"
            onClick={() => {
              if (onNavigate) {
                onNavigate('/donate');
              } else {
                window.location.href = '/donate';
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0"
          >
            <Heart className="w-4 h-4 mr-2 text-ink" /> SUPPORT VINAY
          </BrutalistButton>
        </div>
      </div>
    </div>
  );
};
