import React from 'react';

interface RetroPhoneSvgProps {
  className?: string;
}

export const RetroPhoneSvg: React.FC<RetroPhoneSvgProps> = ({ className = 'w-full max-w-sm sm:max-w-md' }) => {
  return (
    <div className={`relative mx-auto ${className} select-none`}>
      {/* Hard Offset Shadow for Neo-Brutalist depth */}
      <div className="absolute inset-0 bg-ink translate-x-3 translate-y-3 rounded-[2.5rem] border-3 border-ink" />

      {/* Sleek Modern Android Hardware Chassis */}
      <div className="relative bg-[#0f1117] border-3 border-ink rounded-[2.5rem] p-3 sm:p-3.5 shadow-2xl overflow-hidden">
        {/* Subtle Glass Glare Reflection on Bezel */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[2.5rem]" />

        {/* Outer Bezel Frame */}
        <div className="relative bg-[#161922] rounded-[2rem] border-2 border-gray-800 overflow-hidden shadow-inner">
          
          {/* Top Status Bar & Punch Hole Camera */}
          <div className="bg-[#12151e] px-4 pt-2 pb-1.5 flex justify-between items-center text-[11px] font-mono text-gray-400 border-b border-gray-800/60">
            <div className="flex items-center gap-1.5 font-bold text-gray-200">
              <span>9:41</span>
            </div>
            
            {/* Center Punch-Hole Selfie Camera */}
            <div className="w-3.5 h-3.5 bg-black rounded-full border border-gray-700/80 flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 bg-blue-950/80 rounded-full" />
            </div>

            {/* Offline status & Battery indicator */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] bg-accent/20 text-accent border border-accent/40 px-1 rounded font-bold">
                OFFLINE
              </span>
              <div className="w-5 h-2.5 border border-gray-400 rounded-sm p-0.5 flex items-center">
                <div className="w-3 h-1.5 bg-accent rounded-xs" />
              </div>
            </div>
          </div>

          {/* SwipePix App Header Inside Device */}
          <div className="bg-[#1a1e2b] px-4 py-2 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center border border-ink text-white font-mono font-bold text-xs">
                S
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white leading-tight">Camera Roll</div>
                <div className="text-[10px] text-gray-400 font-mono">1,420 items · 18.4 GB</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono font-bold bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700">
                All Media
              </span>
            </div>
          </div>

          {/* Triage Deck Canvas Area */}
          <div className="relative bg-[#0d1017] p-3 sm:p-4 h-[22rem] sm:h-[24rem] flex flex-col justify-between overflow-hidden">
            
            {/* Background Layered Cards (Deck Depth) */}
            <div className="absolute inset-x-7 top-6 bottom-14 bg-[#23293b] rounded-2xl border-2 border-gray-700/60 rotate-2 opacity-50 pointer-events-none" />
            <div className="absolute inset-x-6 top-5 bottom-15 bg-[#2d344a] rounded-2xl border-2 border-gray-600/70 -rotate-1 opacity-75 pointer-events-none" />

            {/* Top Swiping Card */}
            <div className="relative z-10 bg-[#1e2333] rounded-2xl border-2 border-white/30 shadow-2xl p-2.5 flex-1 flex flex-col justify-between transform rotate-1 transition-transform">
              
              {/* Media Card Header */}
              <div className="flex justify-between items-center px-1 pb-1.5 text-[11px] font-mono">
                <span className="font-bold text-gray-200 truncate max-w-[140px]">IMG_2026_0916.JPG</span>
                <span className="bg-gray-800 text-accent font-bold px-1.5 py-0.5 rounded text-[10px] border border-gray-700">
                  12.4 MB
                </span>
              </div>

              {/* Realistic Photo Viewport */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700/80 bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 h-44 sm:h-52 flex items-center justify-center">
                {/* Visual Landscape Graphic */}
                <svg className="w-full h-full object-cover" viewBox="0 0 300 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#312E81" />
                      <stop offset="50%" stopColor="#4338CA" />
                      <stop offset="100%" stopColor="#F43F5E" />
                    </linearGradient>
                    <linearGradient id="sun" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE047" />
                      <stop offset="100%" stopColor="#FB923C" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="200" fill="url(#sky)" />
                  <circle cx="150" cy="110" r="42" fill="url(#sun)" />
                  <polygon points="0,200 70,120 140,165 210,105 300,200" fill="#0F172A" opacity="0.9" />
                  <polygon points="60,200 130,135 190,175 250,125 300,200" fill="#1E1B4B" opacity="0.7" />
                </svg>

                {/* Keep Cue Glow (Right) */}
                <div className="absolute top-3 right-3 bg-accent text-ink px-2.5 py-1 rounded-md border-2 border-ink font-mono font-bold text-xs shadow-[0_0_15px_rgba(184,255,0,0.6)] flex items-center gap-1 animate-pulse">
                  <span>KEEP</span>
                  <span>→</span>
                </div>

                {/* Trash Cue Overlay (Left) */}
                <div className="absolute top-3 left-3 bg-warm/90 text-ink px-2.5 py-1 rounded-md border-2 border-ink font-mono font-bold text-xs opacity-40 shadow-sm flex items-center gap-1">
                  <span>←</span>
                  <span>TRASH</span>
                </div>

                {/* Media Metadata Chip on Image */}
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-gray-300 border border-white/10">
                  4032 × 3024 · Golden Hour
                </div>
              </div>

              {/* Quick Action Hints */}
              <div className="flex justify-between items-center pt-2 px-1 text-[11px] font-mono font-bold">
                <span className="text-pink-400 flex items-center gap-1">
                  <span>←</span> Swipe Left to Trash
                </span>
                <span className="text-accent flex items-center gap-1">
                  Swipe Right to Keep <span>→</span>
                </span>
              </div>
            </div>

            {/* Bottom Control Island inside App */}
            <div className="mt-2.5 pt-2 border-t border-gray-800 flex justify-between items-center font-mono text-xs z-20">
              <div className="flex items-center gap-1.5 bg-gray-800/90 text-gray-200 px-2.5 py-1 rounded-lg border border-gray-700 shadow-sm">
                <span className="text-primary font-bold">↺</span>
                <span className="text-[11px]">Undo</span>
              </div>

              <div className="text-[11px] font-bold text-gray-400">
                <span className="text-white">124</span> / 1,420
              </div>

              <div className="flex items-center gap-1 bg-accent/90 text-ink font-bold px-2.5 py-1 rounded-lg border border-ink shadow-sm text-[11px]">
                <span>Review (18)</span>
              </div>
            </div>
          </div>

          {/* Android Modern Gesture Navigation Bar */}
          <div className="bg-[#0d1017] py-2 flex justify-center items-center">
            <div className="w-28 h-1 bg-gray-500 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
