import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { NeoBadge } from '../common/NeoBadge';
import { Cpu, Zap, HardDrive, FastForward, Check } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  const perfSpecs = [
    {
      title: 'PLATFORM HARDWARE THUMBNAILS',
      problem: 'Directly decoding 12MP-48MP raw images into a grid consumes ~48MB RAM per photo, triggering garbage collection freezes.',
      solution: 'Custom Coil 3 fetcher utilizing Android ContentResolver.loadThumbnail (256x256), reading the platform OS hardware-accelerated cache.',
      icon: Cpu,
      badge: 'RAM SAFE',
      badgeVariant: 'accent' as const,
    },
    {
      title: 'DUAL-TIER CACHING PIPELINE',
      problem: 'Frequent re-fetching of image files during rapid scrolling strains the CPU, increases heat, and drains battery life.',
      solution: 'Coil 3 ImageLoader configured with 25% of available JVM heap for in-memory bitmaps and a dedicated 100MB local disk cache.',
      icon: HardDrive,
      badge: 'ZERO RE-READS',
      badgeVariant: 'primary' as const,
    },
    {
      title: '0ms PROGRESSIVE VIEWER BRIDGE',
      problem: 'Opening a photo in fullscreen viewer traditionally shows a black or white blank flash while the full-resolution file decodes.',
      solution: 'Viewer immediately paints the in-memory 256px grid thumbnail on Frame 0 while loading full-resolution media seamlessly in the background.',
      icon: Zap,
      badge: 'FLASH FREE',
      badgeVariant: 'warm' as const,
    },
    {
      title: 'CARD DECK PRE-EMPTIVE BUFFERING',
      problem: 'Rapid swiping can cause noticeable stutter if upcoming photos are decoded on-the-fly during gesture transitions.',
      solution: 'CleanupViewModel asynchronously pre-fetches and decodes the next 2 cards in background coroutines, ensuring zero card-flip latency.',
      icon: FastForward,
      badge: 'FLUID FLINGS',
      badgeVariant: 'white' as const,
    },
  ];

  return (
    <section className="py-20 bg-bg border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="ENGINEERING DEEP DIVE"
          tagVariant="secondary"
          title="BUILT FOR FLUIDITY & STABILITY"
          subtitle="How SwipePix manages 10,000+ photo collections without memory crashes, UI hitches, or battery drain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {perfSpecs.map((spec) => {
            const Icon = spec.icon;
            return (
              <BrutalistCard key={spec.title} className="flex flex-col justify-between" hoverEffect={true}>
                <div>
                  <div className="flex justify-between items-start mb-3 border-b-2 border-ink pb-2">
                    <div className="p-2 border-2 border-ink bg-bg rounded shadow-[2px_2px_0px_#050505]">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <NeoBadge variant={spec.badgeVariant} rotate="1" className="text-[10px]">
                      {spec.badge}
                    </NeoBadge>
                  </div>

                  <h3 className="font-mono text-base font-bold text-ink uppercase mb-2">
                    {spec.title}
                  </h3>

                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-950">
                      <strong className="font-mono text-[10px] text-warm block uppercase">THE BOTTLENECK:</strong>
                      {spec.problem}
                    </div>
                    <div className="p-2.5 bg-lime-50 border border-lime-200 text-lime-950">
                      <strong className="font-mono text-[10px] text-accent-hover block uppercase">SWIPEPIX ARCHITECTURE:</strong>
                      {spec.solution}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-gray-300 flex items-center gap-1.5 text-[11px] font-mono font-bold text-ink">
                  <Check className="w-3.5 h-3.5 text-accent-hover" />
                  <span>VERIFIED ON PHYSICAL SAMSUNG S24 ULTRA HARDWARE</span>
                </div>
              </BrutalistCard>
            );
          })}
        </div>

        {/* Benchmarking Transparency Note */}
        <div className="mt-10 p-4 border-2 border-ink bg-white shadow-brutal-sm font-mono text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="font-bold text-ink">
            BENCHMARK TRUTH POLICY:
          </span>
          <span className="text-gray-700 font-sans text-xs">
            We avoid marketing claims like "Guaranteed 120 FPS" because real framerates vary across device chips and screen refresh rates. We focus on low memory footprints and platform-native caches.
          </span>
        </div>
      </div>
    </section>
  );
};
