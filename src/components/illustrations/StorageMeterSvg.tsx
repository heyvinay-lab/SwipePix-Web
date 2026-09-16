import React from 'react';

export const StorageMeterSvg: React.FC<{ className?: string }> = ({ className = 'w-full' }) => {
  return (
    <div className={`card-brutal bg-white p-5 ${className}`}>
      <div className="flex justify-between items-center border-b-2 border-ink pb-2 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-warm border border-ink inline-block animate-pulse" />
          STORAGE_STATUS.LOG
        </span>
        <span className="font-mono text-[11px] bg-accent px-1.5 py-0.5 border border-ink font-bold">
          LIVE METRICS
        </span>
      </div>

      <div className="space-y-4 font-mono text-xs">
        {/* Before: Cluttered */}
        <div>
          <div className="flex justify-between mb-1 font-bold">
            <span className="text-ink">BEFORE SWIPEPIX:</span>
            <span className="text-rose-900 bg-rose-100 font-bold px-1.5 py-0.5 border border-ink">94% FULL (120.3 GB / 128 GB)</span>
          </div>
          <div className="h-6 bg-gray-200 border-2 border-ink flex overflow-hidden p-0.5">
            <div className="h-full bg-warm border-r-2 border-ink" style={{ width: '60%' }} title="Photos & Screenshots" />
            <div className="h-full bg-secondary border-r-2 border-ink" style={{ width: '25%' }} title="Videos" />
            <div className="h-full bg-primary border-r-2 border-ink" style={{ width: '9%' }} title="Apps" />
            <div className="h-full bg-gray-300" style={{ width: '6%' }} title="Free Space" />
          </div>
          <div className="flex gap-3 text-[10px] mt-1 text-gray-800 font-bold">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-warm border border-ink inline-block" /> 72 GB Photos & Memes</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-secondary border border-ink inline-block" /> 30 GB Videos</span>
          </div>
        </div>

        {/* After: Decluttered */}
        <div className="pt-2 border-t border-dashed border-gray-400">
          <div className="flex justify-between mb-1 font-bold">
            <span className="text-ink">AFTER 10-MIN TRIAGE:</span>
            <span className="text-blue-900 bg-blue-100 font-bold px-1.5 py-0.5 border border-ink">58% USED (74.8 GB / 128 GB)</span>
          </div>
          <div className="h-6 bg-gray-200 border-2 border-ink flex overflow-hidden p-0.5">
            <div className="h-full bg-primary border-r-2 border-ink" style={{ width: '25%' }} title="Curated Photos" />
            <div className="h-full bg-secondary border-r-2 border-ink" style={{ width: '20%' }} title="Kept Videos" />
            <div className="h-full bg-ink border-r-2 border-ink" style={{ width: '13%' }} title="Apps" />
            <div className="h-full bg-accent flex items-center justify-center font-bold text-[10px]" style={{ width: '42%' }}>
              +45.5 GB RECLAIMED
            </div>
          </div>
          <div className="mt-1 text-[11px] font-bold text-accent bg-ink p-1 border border-ink text-center">
            ✓ 0 UNWANTED CLOUD SYNC • 100% LOCAL SAFEGUARD
          </div>
        </div>
      </div>
    </div>
  );
};
