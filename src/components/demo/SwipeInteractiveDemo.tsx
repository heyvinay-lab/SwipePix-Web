import React, { useState, useRef } from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { RotateCcw, Check, Trash2, Info, Play, Volume2 } from 'lucide-react';

interface DemoCard {
  id: number;
  filename: string;
  filesize: string;
  category: string;
  description: string;
  imageBg: string;
  recommended: 'KEEP' | 'TRASH';
  isVideo?: boolean;
  duration?: string;
}

const DEMO_CARDS: DemoCard[] = [
  {
    id: 1,
    filename: 'IMG_2026_BLURRY_BURST_3.JPG',
    filesize: '14.2 MB',
    category: 'Burst Photo / Blurry',
    description: 'Out-of-focus duplicate shot taken during low-light concert.',
    imageBg: 'from-amber-200 to-orange-300',
    recommended: 'TRASH',
  },
  {
    id: 2,
    filename: 'DSC_MOUNTAIN_SUMMIT_KEEPER.JPG',
    filesize: '28.6 MB',
    category: 'Camera Roll • High Res',
    description: 'Sharp panoramic view of Alpine ridge at golden hour.',
    imageBg: 'from-blue-300 to-indigo-400',
    recommended: 'KEEP',
  },
  {
    id: 3,
    filename: 'VID_2026_SUNSET_DRIVE.MP4',
    filesize: '48.2 MB',
    category: 'Camera Roll • In-App Video',
    description: 'Scenic highway sunset footage (In-deck playback & seek slider).',
    imageBg: 'from-purple-300 via-pink-400 to-amber-300',
    recommended: 'KEEP',
    isVideo: true,
    duration: '00:18',
  },
  {
    id: 4,
    filename: 'SCREENSHOT_2026_RECEIPT_EXP.PNG',
    filesize: '4.8 MB',
    category: 'Screenshots Folder',
    description: 'Expired parking receipt screenshot from 8 months ago.',
    imageBg: 'from-gray-300 to-slate-400',
    recommended: 'TRASH',
  },
  {
    id: 5,
    filename: 'PXL_FAMILY_BIRTHDAY_SMILE.JPG',
    filesize: '18.1 MB',
    category: 'Favorites • Portrait',
    description: 'Portrait shot with natural depth of field and crisp focus.',
    imageBg: 'from-pink-200 to-rose-300',
    recommended: 'KEEP',
  },
];

export const SwipeInteractiveDemo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<{ card: DemoCard; action: 'KEEP' | 'TRASH' }[]>([]);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const currentCard = currentIndex < DEMO_CARDS.length ? DEMO_CARDS[currentIndex] : null;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!currentCard) return;
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !currentCard) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setDragOffset({ x: dx, y: dy * 0.3 }); // dampen Y
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    if (dragOffset.x > 80) {
      applyDecision('KEEP');
    } else if (dragOffset.x < -80) {
      applyDecision('TRASH');
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const applyDecision = (action: 'KEEP' | 'TRASH') => {
    if (!currentCard) return;
    setHistory([...history, { card: currentCard, action }]);
    setDragOffset({ x: 0, y: 0 });
    setCurrentIndex(currentIndex + 1);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    setHistory(history.slice(0, -1));
    setCurrentIndex(currentIndex - 1);
    setDragOffset({ x: 0, y: 0 });
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setHistory([]);
    setDragOffset({ x: 0, y: 0 });
  };

  // Rotation angle calculation based on drag
  const rotation = Math.max(-14, Math.min(14, dragOffset.x * 0.08));
  const isKeepActive = dragOffset.x > 40;
  const isTrashActive = dragOffset.x < -40;

  const keptCount = history.filter((h) => h.action === 'KEEP').length;
  const trashedCount = history.filter((h) => h.action === 'TRASH').length;

  return (
    <div id="demo" className="card-brutal bg-white p-6 sm:p-8 max-w-4xl mx-auto shadow-brutal-lg">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b-3 border-ink pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <NeoBadge variant="warm" rotate="-1">
              TRY IT YOURSELF
            </NeoBadge>
            <span className="font-mono text-xs text-gray-700 font-bold hidden sm:inline">
              [ REAL-TIME ENGINE DEMO ]
            </span>
          </div>
          <h3 className="font-mono text-2xl font-bold uppercase text-ink mt-1">
            EXPERIENCE THE SWIPE TRIAGE FLOW
          </h3>
        </div>

        {/* Live Counter Pill */}
        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          <span className="bg-pink-100 text-ink px-2.5 py-1 border-2 border-ink shadow-[2px_2px_0px_#050505]">
            TRASHED: {trashedCount}
          </span>
          <span className="bg-lime-100 text-ink px-2.5 py-1 border-2 border-ink shadow-[2px_2px_0px_#050505]">
            KEPT: {keptCount}
          </span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Instruction Panel */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-4 border-2 border-ink bg-bg">
            <p className="font-mono text-sm font-bold uppercase text-blue-800 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-blue-800 inline-block" /> HOW TO TEST:
            </p>
            <ul className="font-sans text-xs space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-accent bg-ink px-1 border border-ink text-[10px]">
                  RIGHT
                </span>
                <span>
                  Drag or click <strong>Keep</strong> to preserve memory in gallery.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-warm bg-ink px-1 border border-ink text-[10px]">
                  LEFT
                </span>
                <span>
                  Drag or click <strong>Trash</strong> to stage photo for Android system trash.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-white bg-ink px-1 border border-ink text-[10px]">
                  UNDO
                </span>
                <span>
                  Tapping Undo immediately pops the photo back onto the deck.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-300 text-[11px] font-mono text-amber-900">
            <Info className="w-4 h-4 shrink-0 text-amber-700" />
            <span>Interactive simulation only. No files on your phone are touched.</span>
          </div>

          {/* Action Buttons for Accessible Click/Keyboard Trigger */}
          <div className="pt-2 flex flex-wrap gap-2">
            <BrutalistButton
              variant="warm"
              size="sm"
              onClick={() => applyDecision('TRASH')}
              disabled={!currentCard}
              className="flex-1"
            >
              <Trash2 className="w-3.5 h-3.5 mr-1" aria-hidden="true" /> ← TRASH
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="sm"
              onClick={handleUndo}
              disabled={history.length === 0}
              aria-label="Undo last swipe"
              className="px-3 font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1 inline" aria-hidden="true" /> UNDO
            </BrutalistButton>

            <BrutalistButton
              variant="accent"
              size="sm"
              onClick={() => applyDecision('KEEP')}
              disabled={!currentCard}
              className="flex-1"
            >
              KEEP → <Check className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
            </BrutalistButton>
          </div>
        </div>

        {/* Right Card Stage */}
        <div className="md:col-span-7 flex justify-center items-center relative py-6 select-none">
          {/* Deck Boundaries */}
          <div className="w-72 sm:w-80 h-96 relative flex items-center justify-center">
            {currentCard ? (
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{
                  transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) rotate(${rotation}deg)`,
                  transition: isDragging ? 'none' : 'transform 200ms cubic-bezier(0.2, 0, 0, 1)',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  touchAction: 'none',
                }}
                className="w-full h-full bg-white border-3 border-ink rounded-2xl shadow-brutal p-4 flex flex-col justify-between absolute z-20"
              >
                {/* Visual Status Indicator Badges Overlay */}
                <div className="flex justify-between items-center z-30">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 border-2 border-ink uppercase transition-opacity duration-150 ${
                      isTrashActive
                        ? 'opacity-100 bg-warm text-ink shadow-[2px_2px_0px_#050505]'
                        : 'opacity-0'
                    }`}
                  >
                    ← TRASH STAGED
                  </span>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 border-2 border-ink uppercase transition-opacity duration-150 ${
                      isKeepActive
                        ? 'opacity-100 bg-accent text-ink shadow-[2px_2px_0px_#050505]'
                        : 'opacity-0'
                    }`}
                  >
                    KEEP IN GALLERY →
                  </span>
                </div>

                {/* Simulated Photo / Video Graphic */}
                <div
                  className={`w-full h-44 rounded-lg border-2 border-ink bg-gradient-to-br ${currentCard.imageBg} p-3 flex flex-col justify-between relative overflow-hidden shadow-inner`}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                    <span className="bg-white/90 border border-ink px-1.5 py-0.5 rounded shadow-[1px_1px_0px_#050505]">
                      {currentCard.category}
                    </span>
                    {currentCard.isVideo && (
                      <span className="bg-ink text-accent border border-ink px-1.5 py-0.5 rounded font-mono text-[9px] flex items-center gap-1 shadow-[1px_1px_0px_#050505]">
                        <Volume2 className="w-2.5 h-2.5" /> IN-APP VIDEO
                      </span>
                    )}
                  </div>

                  {currentCard.isVideo ? (
                    <div className="my-auto text-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-black/70 border-2 border-white flex items-center justify-center text-white mx-auto shadow-md">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                      <div className="w-full bg-black/75 backdrop-blur-xs p-1.5 rounded border border-white/20 text-left space-y-1">
                        <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden relative">
                          <div className="h-full bg-accent rounded-full w-1/3" />
                        </div>
                        <div className="flex justify-between items-center text-[9px] text-white font-mono">
                          <span>00:06</span>
                          <span className="text-gray-300">{currentCard.duration}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-black/80 text-white font-mono text-[10px] p-1.5 rounded border border-white/20">
                      {currentCard.description}
                    </div>
                  )}
                </div>

                {/* Card Meta Footer */}
                <div className="border-t-2 border-ink pt-3 font-mono text-xs space-y-1">
                  <div className="flex justify-between font-bold text-ink">
                    <span className="truncate max-w-[180px]">{currentCard.filename}</span>
                    <span className="text-gray-600">{currentCard.filesize}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-gray-500">
                    <span>Card {currentIndex + 1} of {DEMO_CARDS.length}</span>
                    <span className="text-primary font-bold">DRAG LEFT OR RIGHT</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Session Completed State */
              <div className="w-full h-full bg-white border-3 border-ink rounded-2xl shadow-brutal p-6 flex flex-col justify-between items-center text-center">
                <div className="my-auto space-y-3">
                  <div className="w-16 h-16 bg-accent border-3 border-ink rounded-full mx-auto flex items-center justify-center shadow-brutal-sm">
                    <Check className="w-8 h-8 text-ink" />
                  </div>
                  <p className="font-mono text-xl font-bold uppercase text-ink">
                    DEMO BATCH COMPLETE!
                  </p>
                  <p className="font-sans text-xs text-gray-600 max-w-xs">
                    You reviewed <strong>{DEMO_CARDS.length} items</strong>. In the real Android app, SwipePix would now present Android's official system confirmation dialog.
                  </p>
                  <div className="pt-2 flex justify-center gap-3 font-mono text-xs">
                    <span className="bg-lime-200 border-2 border-ink px-2 py-1 font-bold">
                      Kept: {keptCount}
                    </span>
                    <span className="bg-pink-200 border-2 border-ink px-2 py-1 font-bold">
                      Trashed: {trashedCount}
                    </span>
                  </div>
                </div>

                <BrutalistButton variant="primary" size="sm" onClick={handleReset} className="w-full">
                  <RotateCcw className="w-3.5 h-3.5 mr-1" /> RESTART DEMO
                </BrutalistButton>
              </div>
            )}

            {/* Background Static Card for Deck Depth */}
            <div className="w-full h-full bg-gray-100 border-3 border-ink rounded-2xl absolute z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
