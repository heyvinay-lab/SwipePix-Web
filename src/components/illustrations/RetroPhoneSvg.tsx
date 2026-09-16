import React from 'react';

interface RetroPhoneSvgProps {
  className?: string;
}

export const RetroPhoneSvg: React.FC<RetroPhoneSvgProps> = ({ className = 'w-full max-w-sm' }) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Hard Offset Shadow */}
      <div className="absolute inset-0 bg-ink translate-x-3 translate-y-3 rounded-3xl border-3 border-ink" />

      {/* Phone Body */}
      <div className="relative bg-white border-3 border-ink rounded-3xl p-4 overflow-hidden">
        {/* Top Speaker & Camera Island */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-ink border-dashed">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ink inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent border border-ink inline-block" />
          </div>
          <div className="w-16 h-3 bg-ink rounded-full" />
          <div className="font-mono text-[10px] font-bold text-ink">OFFLINE</div>
        </div>

        {/* Triage Deck Area */}
        <div className="relative bg-bg border-2 border-ink rounded-xl p-3 h-72 flex flex-col justify-between overflow-hidden">
          {/* Background Card (Shadow effect) */}
          <div className="absolute inset-x-5 top-5 bottom-8 bg-purple-100 border-2 border-ink rounded-lg opacity-60 rotate-2 pointer-events-none" />

          {/* Active Front Card */}
          <div className="relative z-10 bg-white border-2 border-ink rounded-lg p-3 shadow-brutal-sm flex-1 flex flex-col justify-between -rotate-1">
            {/* Card Header */}
            <div className="flex justify-between items-center border-b border-ink pb-1 text-xs font-mono">
              <span className="font-bold text-blue-800">IMG_2026_0916.JPG</span>
              <span className="bg-gray-100 px-1 border border-ink text-[10px] font-bold text-ink">12.4 MB</span>
            </div>

            {/* Photo Illustration Inside Card */}
            <div className="my-2 bg-blue-50 border-2 border-ink rounded h-28 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-warm border border-ink" />
              <svg className="w-full h-full text-primary" viewBox="0 0 100 60" preserveAspectRatio="none">
                <polygon points="0,60 30,25 55,45 75,20 100,60" fill="#2F6BFF" stroke="#050505" strokeWidth="2" />
                <polygon points="40,60 65,35 85,50 100,60" fill="#8B5CF6" stroke="#050505" strokeWidth="2" />
              </svg>
              <span className="absolute bottom-1 right-2 text-[9px] font-mono bg-white px-1 border border-ink font-bold text-ink">
                CAMERA ROLL
              </span>
            </div>

            {/* Gesture Guide Arrow Prompts */}
            <div className="flex justify-between items-center pt-1 font-mono text-[11px] font-bold">
              <span className="text-ink bg-warm px-1.5 py-0.5 border border-ink font-bold">
                ← TRASH
              </span>
              <span className="text-ink bg-accent px-1.5 py-0.5 border border-ink font-bold">
                KEEP →
              </span>
            </div>
          </div>

          {/* Action Footer Bar */}
          <div className="mt-2 flex justify-between items-center text-xs font-mono font-bold z-20">
            <span className="bg-white px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#050505]">
              UNDO ↺
            </span>
            <span className="text-ink">124 / 1,420</span>
            <span className="bg-accent text-ink px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#050505]">
              SAVE & EXIT
            </span>
          </div>
        </div>

        {/* Bottom Hardware Home Bar */}
        <div className="mt-3 flex justify-center">
          <div className="w-24 h-1 bg-ink rounded-full" />
        </div>
      </div>
    </div>
  );
};
