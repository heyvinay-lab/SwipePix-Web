import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { NeoBadge } from '../common/NeoBadge';
import { BrutalistButton } from '../common/BrutalistButton';
import { Download, ShieldCheck, Play, HelpCircle, ChevronDown } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../../config/download';

export const InstallationSection: React.FC = () => {
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Download the APK',
      desc: 'Tap the Download button to get the verified SwipePix-1.0.0.apk directly to your device (4.28 MB).',
      icon: <Download className="w-6 h-6 text-ink" />,
      color: 'bg-accent',
    },
    {
      num: '02',
      title: 'Allow Installation',
      desc: 'If prompted by Chrome or your browser, tap "Settings" and toggle "Allow from this source" for this install.',
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      color: 'bg-primary',
    },
    {
      num: '03',
      title: 'Open & Start Cleaning',
      desc: 'Launch SwipePix, grant the native photo and video read permission, and swipe your first photo.',
      icon: <Play className="w-6 h-6 text-ink" />,
      color: 'bg-warm',
    },
  ];

  const tips = [
    {
      device: 'Samsung Galaxy (One UI)',
      advice: 'If Samsung Auto Blocker is enabled: Go to Settings > Security and privacy > Auto Blocker and temporarily turn it off to allow installing downloaded APKs.',
    },
    {
      device: 'Google Pixel',
      advice: 'When downloading via Chrome, tap "Download anyway" when the standard unknown APK notice appears, then tap Open > Install.',
    },
    {
      device: 'Xiaomi / Redmi (MIUI / HyperOS)',
      advice: 'If Xiaomi Package Installer shows a countdown warning, wait 10 seconds, check the acknowledgment box, and tap OK to proceed.',
    },
    {
      device: 'Google Play Protect Notice',
      advice: 'SwipePix is clean and malware-free. If Play Protect displays a "Unrecognized app" sheet, tap "More details" and "Install anyway".',
    },
  ];

  return (
    <section id="installation" className="py-20 bg-white border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="QUICK START"
          tagVariant="accent"
          title="HOW TO INSTALL SWIPEPIX"
          subtitle="Direct APK installation on any Android 13+ device in less than 60 seconds."
        />

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <BrutalistCard
              key={step.num}
              bgColor="bg-bg"
              hoverEffect={true}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6 border-b-2 border-ink pb-4">
                  <span className="font-mono text-5xl font-bold tracking-tighter text-ink">
                    {step.num}
                  </span>
                  <div className={`p-3 border-2 border-ink rounded shadow-[2px_2px_0px_#050505] ${step.color}`}>
                    {step.icon}
                  </div>
                </div>

                <NeoBadge variant="white" rotate={idx % 2 === 0 ? '-1' : '1'} className="text-[10px] mb-3">
                  STEP {step.num}
                </NeoBadge>

                <h3 className="font-mono text-xl font-bold text-ink uppercase mt-2 mb-2">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-gray-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-dashed border-gray-400 font-mono text-xs text-gray-600 uppercase flex items-center justify-between">
                <span>PHASE {idx + 1} OF 3</span>
                <span className="font-bold text-ink">→</span>
              </div>
            </BrutalistCard>
          ))}
        </div>

        {/* Expandable Troubleshooting Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="border-3 border-ink bg-bg shadow-brutal">
            <button
              type="button"
              onClick={() => setShowTroubleshooting(!showTroubleshooting)}
              className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
              aria-expanded={showTroubleshooting}
            >
              <span className="font-mono text-sm sm:text-base font-bold text-ink uppercase flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                Need help installing? Device-specific tips & sideloading FAQ
              </span>
              <div
                className={`w-7 h-7 rounded border-2 border-ink flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  showTroubleshooting ? 'bg-accent rotate-180' : 'bg-white rotate-0'
                }`}
              >
                <ChevronDown className="w-4 h-4 text-ink" />
              </div>
            </button>

            {showTroubleshooting && (
              <div className="p-6 border-t-2 border-dashed border-ink bg-white space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tips.map((tip) => (
                    <div key={tip.device} className="p-4 border-2 border-ink bg-bg space-y-1">
                      <h4 className="font-mono text-xs font-bold uppercase text-ink">
                        {tip.device}
                      </h4>
                      <p className="font-sans text-xs text-gray-700 leading-relaxed">
                        {tip.advice}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <BrutalistButton
                    variant="accent"
                    size="sm"
                    asLink={true}
                    href={DOWNLOAD_CONFIG.apkUrl}
                    download={DOWNLOAD_CONFIG.fileName}
                    aria-label={`Download SwipePix APK v${DOWNLOAD_CONFIG.version}`}
                    className="text-xs font-bold shadow-brutal-sm"
                  >
                    <Download className="w-4 h-4 mr-1.5 inline" />
                    Download SwipePix ({DOWNLOAD_CONFIG.fileSizeFormatted})
                  </BrutalistButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
