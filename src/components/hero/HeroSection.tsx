import React from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { RetroPhoneSvg } from '../illustrations/RetroPhoneSvg';
import { StarburstSvg } from '../illustrations/StarburstSvg';
import { Download, ArrowDown, ShieldCheck, Zap } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../../config/download';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const scrollToDemo = () => {
    const elem = document.getElementById('demo');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-grid-dots border-b-3 border-ink">
      {/* Decorative Background Stamp / Stickers */}
      <div className="hidden lg:block absolute top-8 right-12 pointer-events-none z-10">
        <StarburstSvg text="100% OFFLINE" color="#B8FF00" className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Monumental Neo-Brutalist Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge Row */}
            <div className="flex flex-wrap items-center gap-2">
              <NeoBadge variant="primary" rotate="-1">
                ANDROID UTILITY
              </NeoBadge>
              <NeoBadge variant="accent" rotate="1">
                ZERO CLOUD
              </NeoBadge>
              <NeoBadge variant="warm" rotate="-2">
                ZERO TRACKERS
              </NeoBadge>
              <span className="font-mono text-xs font-bold text-gray-600 bg-white px-2 py-1 border-2 border-ink shadow-[2px_2px_0px_#050505]">
                v{DOWNLOAD_CONFIG.version} STABLE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-ink leading-[1.05]">
              CLEAN YOUR <br />
              <span className="text-primary underline decoration-ink decoration-wavy decoration-2">
                GALLERY.
              </span>{' '}
              <br />
              ONE SWIPE <br />
              <span className="text-ink bg-accent px-2 border-3 border-ink inline-block mt-1 shadow-[4px_4px_0px_#050505] -rotate-1">
                AT A TIME.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-xl text-gray-800 font-medium max-w-2xl leading-relaxed">
              SwipePix is a 100% offline Android gallery and media cleaner. Triage thousands of photos and videos with intuitive swipe gestures, batch multi-select, and an all-new unified in-app video player. Zero ads, zero trackers, zero cloud dependencies, and protected by native 30-day Android system trash.
            </p>

            {/* Micro Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px] font-bold">
              <div className="flex items-center gap-1.5 bg-white p-2 border-2 border-ink shadow-[2px_2px_0px_#050505]">
                <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>NO INTERNET PERM</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-2 border-2 border-ink shadow-[2px_2px_0px_#050505]">
                <Zap className="w-3.5 h-3.5 text-warm shrink-0" />
                <span>IN-APP VIDEO PLAYER</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-2 border-2 border-ink shadow-[2px_2px_0px_#050505]">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-hover shrink-0" />
                <span>NATIVE SYSTEM TRASH</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-2 border-2 border-ink shadow-[2px_2px_0px_#050505]">
                <span className="w-2 h-2 rounded-full bg-accent inline-block shrink-0" />
                <span>PLAY PROTECT CLEAN</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <BrutalistButton
                variant="accent"
                size="lg"
                asLink={true}
                href={DOWNLOAD_CONFIG.apkUrl}
                download={DOWNLOAD_CONFIG.fileName}
                aria-label={`Download SwipePix APK v${DOWNLOAD_CONFIG.version}`}
                className="text-base font-bold shadow-brutal"
              >
                <Download className="w-5 h-5 mr-2 text-ink" /> DOWNLOAD SWIPEPIX
              </BrutalistButton>

              <BrutalistButton
                variant="white"
                size="lg"
                onClick={scrollToDemo}
                className="text-base"
              >
                TRY INTERACTIVE DEMO
              </BrutalistButton>

              <button
                onClick={() => {
                  onNavigate('/updates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-mono text-xs font-bold uppercase underline hover:text-primary transition-colors flex items-center gap-1 text-ink px-2 py-1"
              >
                Release Notes & Updates <ArrowDown className="w-3.5 h-3.5 -rotate-90" />
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Retro Phone Visualization */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Sticker Badges Surrounding the Phone */}
            <div className="absolute -top-4 -left-4 z-30 hidden sm:block">
              <NeoBadge variant="warm" rotate="-4" className="shadow-brutal-sm text-xs">
                SWIPE LEFT = TRASH
              </NeoBadge>
            </div>
            <div className="absolute -bottom-4 -right-2 z-30 hidden sm:block">
              <NeoBadge variant="accent" rotate="3" className="shadow-brutal-sm text-xs">
                SWIPE RIGHT = KEEP
              </NeoBadge>
            </div>

            <RetroPhoneSvg className="w-full max-w-sm sm:max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};
