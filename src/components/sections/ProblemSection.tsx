import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { StorageMeterSvg } from '../illustrations/StorageMeterSvg';
import { NeoBadge } from '../common/NeoBadge';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-bg border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="THE CLUTTER CRISIS"
          tagVariant="warm"
          title="GALLERIES GROW FASTER THAN YOU CAN CLEAN THEM."
          subtitle="48-megapixel sensors, endless WhatsApp forwards, and accidental screenshots turn your phone into a digital landfill."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Storage Meter & Live Metrics */}
          <div className="lg:col-span-5 space-y-4">
            <StorageMeterSvg />
            <div className="p-4 bg-amber-50 border-2 border-ink shadow-brutal-sm font-mono text-xs">
              <span className="font-bold text-ink block mb-1">
                ⚠ THE PROBLEM WITH STANDARD APPS:
              </span>
              <p className="text-gray-700 font-sans">
                Default gallery apps force you to zoom in, tap microscopic checkboxes across thousands of thumbnails, and pray you didn't accidentally select a cherished photo.
              </p>
            </div>
          </div>

          {/* Right: Brutalist Contrast Comparison Table */}
          <div className="lg:col-span-7">
            <div className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex justify-between items-center border-b-2 border-ink pb-3 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500">
                  // THE CLEANER APP DILEMMA
                </span>
                <NeoBadge variant="accent" rotate="1">
                  NO COMPROMISE
                </NeoBadge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column 1: Typical Cleaner Apps */}
                <div className="p-4 border-2 border-ink bg-rose-50/50 space-y-3">
                  <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
                    <XCircle className="w-5 h-5 text-warm shrink-0" />
                    <span className="font-mono text-xs font-bold uppercase text-ink">
                      OTHER CLEANER APPS
                    </span>
                  </div>
                  <ul className="font-sans text-xs space-y-2 text-gray-800">
                    <li className="flex items-start gap-1.5">
                      <span className="text-warm font-bold font-mono">✕</span>
                      <span>Full-screen unskippable video ads</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-warm font-bold font-mono">✕</span>
                      <span>Upload photos to cloud for "AI scanning"</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-warm font-bold font-mono">✕</span>
                      <span>Demand invasive contact & storage root access</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-warm font-bold font-mono">✕</span>
                      <span>Silent destructive deletions without undo</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-warm font-bold font-mono">✕</span>
                      <span>Monthly subscription paywalls for basic triage</span>
                    </li>
                  </ul>
                </div>

                {/* Column 2: SwipePix */}
                <div className="p-4 border-2 border-ink bg-lime-50 space-y-3 shadow-brutal-sm">
                  <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-hover shrink-0" />
                    <span className="font-mono text-xs font-bold uppercase text-ink">
                      SWIPEPIX PHILOSOPHY
                    </span>
                  </div>
                  <ul className="font-sans text-xs space-y-2 text-gray-900 font-medium">
                    <li className="flex items-start gap-1.5">
                      <span className="text-ink font-bold font-mono">✓</span>
                      <span><strong>100% ad-free & tracker-free</strong></span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-ink font-bold font-mono">✓</span>
                      <span><strong>Zero internet permission</strong> declared</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-ink font-bold font-mono">✓</span>
                      <span>Standard scoped media access only</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-ink font-bold font-mono">✓</span>
                      <span><strong>Native Android System Trash</strong> (30-day safety)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-ink font-bold font-mono">✓</span>
                      <span><strong>100% free</strong> with mid-session Save & Exit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Punchline */}
              <div className="mt-6 p-3 bg-ink text-white font-mono text-xs text-center border-2 border-ink">
                SWIPEPIX TURNS TEDIOUS GALLERY CLEANUP INTO EFFORTLESS VISUAL TRIAGE.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
