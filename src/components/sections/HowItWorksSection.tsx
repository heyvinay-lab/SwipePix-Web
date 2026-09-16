import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { NeoBadge } from '../common/NeoBadge';
import { BrutalistButton } from '../common/BrutalistButton';
import { FolderCheck, MoveRight, BookmarkCheck, ShieldAlert, Download } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../../config/download';

interface HowItWorksSectionProps {
  onNavigate?: (path: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = () => {
  const steps = [
    {
      num: '01',
      badge: 'SELECT & FILTER',
      title: 'OPEN & TARGET AN ALBUM',
      desc: 'Launch SwipePix and choose your entire camera roll or isolate a high-bloat folder (WhatsApp, Screenshots, Downloads). Tap filter chips to view Videos or Favorites.',
      icon: FolderCheck,
      color: 'bg-primary text-white',
    },
    {
      num: '02',
      badge: 'TRIAGE & BATCH',
      title: 'SWIPE DECK OR MULTI-SELECT',
      desc: 'Review photos and watch videos in-deck (Right = Keep, Left = Trash). Videos play seamlessly with precision scrubber and mute controls, or long-press thumbnails to select and batch-trash in seconds.',
      icon: MoveRight,
      color: 'bg-accent text-ink',
    },
    {
      num: '03',
      badge: 'PERSISTENCE',
      title: 'SAVE & EXIT OR UNDO',
      desc: 'Need to pause? Tap Save & Exit. Your review checkpoint is persisted in local SQLite. Resume anytime, and reverse slips with 1-tap Undo.',
      icon: BookmarkCheck,
      color: 'bg-secondary text-white',
    },
    {
      num: '04',
      badge: 'PLATFORM SAFETY',
      title: 'ANDROID SYSTEM TRASH',
      desc: 'SwipePix never deletes files silently. All deletions trigger Android’s official confirmation dialog. Approved files stay recoverable in system trash for 30 days.',
      icon: ShieldAlert,
      color: 'bg-warm text-ink',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="WORKFLOW ARCHITECTURE"
          tagVariant="primary"
          title="HOW SWIPEPIX WORKS IN 4 STEPS"
          subtitle="Designed to eliminate decision fatigue while guaranteeing absolute deletion safety."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="card-brutal bg-bg p-6 flex flex-col justify-between relative hover:-translate-y-1 transition-transform"
              >
                {/* Step Number Stamp */}
                <div className="flex justify-between items-start mb-4 border-b-2 border-ink pb-3">
                  <span className="font-mono text-4xl font-bold tracking-tighter text-ink">
                    {step.num}
                  </span>
                  <div className={`p-2 border-2 border-ink rounded shadow-[2px_2px_0px_#050505] ${step.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <NeoBadge variant="white" rotate={idx % 2 === 0 ? '-1' : '1'} className="text-[10px]">
                    {step.badge}
                  </NeoBadge>
                  <h3 className="font-mono text-base font-bold text-ink uppercase mt-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Connection Wire */}
                <div className="pt-2 border-t border-dashed border-gray-400 text-[10px] font-mono font-bold text-gray-500 uppercase">
                  STEP {idx + 1} OF 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Explaining Staging vs Native Trash */}
        <div className="mt-12 p-5 bg-lime-100 border-3 border-ink shadow-brutal flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-ink bg-white px-2 py-0.5 border border-ink uppercase">
              CRITICAL PRIVACY & SAFETY CONTRACT
            </span>
            <h4 className="font-mono text-lg font-bold text-ink">
              SWIPE LEFT OR BATCH SELECT = STAGED IN DATABASE • ZERO SILENT DELETION
            </h4>
            <p className="font-sans text-xs text-gray-800 max-w-2xl">
              Files are physically untouched on your device until you finish your session or confirm batch trashing via Android’s native platform modal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <NeoBadge variant="warm" rotate="2" className="text-xs px-3 py-1.5 shadow-brutal-sm">
              30-DAY RESTORE GUARANTEE
            </NeoBadge>
            <BrutalistButton
              variant="accent"
              size="sm"
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
