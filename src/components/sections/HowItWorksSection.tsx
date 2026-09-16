import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { NeoBadge } from '../common/NeoBadge';
import { BrutalistButton } from '../common/BrutalistButton';
import { FolderCheck, MoveRight, ShieldCheck, Download } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../../config/download';

interface HowItWorksSectionProps {
  onNavigate?: (path: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = () => {
  const steps = [
    {
      num: '01',
      badge: 'TARGET',
      title: 'Pick your source',
      desc: 'Choose your entire camera roll or isolate heavy folders like WhatsApp, Screenshots, or Downloads. Filter by photos, videos, or favorites.',
      icon: FolderCheck,
      color: 'bg-primary text-white',
    },
    {
      num: '02',
      badge: 'TRIAGE',
      title: 'Swipe right or left',
      desc: 'Swipe Right to keep. Swipe Left to trash. Videos play with smooth scrub controls right in the card deck, and you can undo any swipe instantly.',
      icon: MoveRight,
      color: 'bg-accent text-ink',
    },
    {
      num: '03',
      badge: 'SAFETY',
      title: 'Review & confirm',
      desc: 'Review staged media, then confirm deletion with Android’s native dialog. Files move to Android system trash where they stay recoverable for 30 days.',
      icon: ShieldCheck,
      color: 'bg-warm text-ink',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="3-STEP FLOW"
          tagVariant="primary"
          title="HOW SWIPEPIX WORKS"
          subtitle="Clean thousands of photos in minutes without accidental deletions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="card-brutal bg-bg p-6 sm:p-8 flex flex-col justify-between relative hover:-translate-y-1 transition-transform"
              >
                {/* Step Number Stamp & Icon */}
                <div className="flex justify-between items-start mb-6 border-b-2 border-ink pb-4">
                  <span className="font-mono text-5xl font-bold tracking-tighter text-ink">
                    {step.num}
                  </span>
                  <div className={`p-3 border-2 border-ink rounded shadow-[2px_2px_0px_#050505] ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <NeoBadge variant="white" rotate={idx % 2 === 0 ? '-1' : '1'} className="text-[10px]">
                    {step.badge}
                  </NeoBadge>
                  <h3 className="font-mono text-xl font-bold text-ink uppercase">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Indicator */}
                <div className="pt-3 border-t border-dashed border-gray-400 text-xs font-mono font-bold text-gray-700 uppercase flex items-center justify-between">
                  <span>STEP {idx + 1} OF 3</span>
                  <span className="text-primary">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Explaining Staging vs Native Trash */}
        <div className="mt-12 p-6 bg-lime-100 border-3 border-ink shadow-brutal flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-ink bg-white px-2 py-0.5 border border-ink uppercase">
              DELETION SAFETY GUARANTEE
            </span>
            <h3 className="font-mono text-lg sm:text-xl font-bold text-ink">
              ZERO SILENT DELETIONS • NATIVE ANDROID SYSTEM TRASH
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-800 max-w-2xl">
              Files are never permanently deleted behind your back. All trashing operations request your approval via Android’s official system dialog, keeping files restorable for 30 days.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <NeoBadge variant="warm" rotate="2" className="text-xs px-3 py-1.5 shadow-brutal-sm">
              30-DAY RESTORE
            </NeoBadge>
            <BrutalistButton
              variant="accent"
              size="md"
              asLink={true}
              href={DOWNLOAD_CONFIG.apkUrl}
              download={DOWNLOAD_CONFIG.fileName}
              aria-label={`Download SwipePix APK v${DOWNLOAD_CONFIG.version}`}
              className="text-xs font-bold whitespace-nowrap shadow-brutal-sm"
            >
              <Download className="w-4 h-4 mr-1.5 inline" />
              Download SwipePix
            </BrutalistButton>
          </div>
        </div>
      </div>
    </section>
  );
};
