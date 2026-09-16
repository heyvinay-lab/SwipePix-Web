import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { NeoBadge } from '../common/NeoBadge';
import { websiteData } from '../../data/websiteData';
import { 
  Sparkles, 
  Layers, 
  FolderSearch, 
  FolderHeart, 
  Save, 
  PlayCircle, 
  RotateCcw, 
  ShieldCheck, 
  Trash2, 
  Cpu, 
  Eye, 
  SlidersHorizontal, 
  BrainCircuit,
  CheckSquare,
  Maximize2,
  Heart,
  Scan
} from 'lucide-react';

export const FeatureGridSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'CORE' | 'SAFETY' | 'PERFORMANCE' | 'ROADMAP'>('ALL');

  const iconMap: Record<string, React.ReactNode> = {
    'swipe-triage': <Layers className="w-5 h-5 text-primary" />,
    'adaptive-media-surface': <Scan className="w-5 h-5 text-accent-hover" />,
    'gallery-multi-select': <CheckSquare className="w-5 h-5 text-primary" />,
    'next-gen-viewer': <Maximize2 className="w-5 h-5 text-secondary" />,
    'mediastore-favorite-sync': <Heart className="w-5 h-5 text-warm" />,
    'chronological-grid': <FolderSearch className="w-5 h-5 text-secondary" />,
    'album-exploration': <FolderHeart className="w-5 h-5 text-warm" />,
    'scoped-cleaning-sessions': <SlidersHorizontal className="w-5 h-5 text-primary" />,
    'save-and-exit': <Save className="w-5 h-5 text-accent-hover" />,
    'resume-or-fresh': <PlayCircle className="w-5 h-5 text-secondary" />,
    'instant-undo': <RotateCcw className="w-5 h-5 text-warm" />,
    'native-trash-modal': <ShieldCheck className="w-5 h-5 text-accent-hover" />,
    '30-day-recovery': <Trash2 className="w-5 h-5 text-warm" />,
    'instant-counts': <Cpu className="w-5 h-5 text-primary" />,
    'category-filters': <SlidersHorizontal className="w-5 h-5 text-secondary" />,
    'fullscreen-viewer': <Eye className="w-5 h-5 text-primary" />,
    'video-playback': <PlayCircle className="w-5 h-5 text-warm" />,
    'adaptive-themes': <Sparkles className="w-5 h-5 text-secondary" />,
    'ai-duplicate-clustering': <BrainCircuit className="w-5 h-5 text-warm" />,
  };

  const filteredFeatures = websiteData.features.filter((f) => {
    if (filterCategory === 'ALL') return true;
    return f.category === filterCategory;
  });

  return (
    <section id="features" className="py-20 bg-bg border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="VERIFIED PRODUCT CAPABILITIES"
          tagVariant="accent"
          title="FEATURE MATRIX & TECHNICAL SPECS"
          subtitle="Every feature listed is grounded in the Android 13+ production codebase. Zero marketing exaggerations."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono text-xs font-bold">
          {(['ALL', 'CORE', 'SAFETY', 'PERFORMANCE', 'ROADMAP'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 border-2 border-ink uppercase transition-all ${
                filterCategory === cat
                  ? 'bg-ink text-accent shadow-brutal-sm -translate-y-0.5'
                  : 'bg-white text-ink hover:bg-gray-100 shadow-[2px_2px_0px_#050505]'
              }`}
            >
              {cat === 'ROADMAP' ? 'ROADMAP (PLANNED)' : cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Neo-Brutalist Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, idx) => {
            const isRoadmap = feature.status === 'PLANNED';
            const badgeVariant = isRoadmap ? 'warm' : feature.category === 'SAFETY' ? 'accent' : 'white';

            return (
              <BrutalistCard
                key={feature.id}
                bgColor={isRoadmap ? 'bg-amber-50/70 border-dashed' : 'bg-white'}
                hoverEffect={true}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex justify-between items-start mb-3 border-b-2 border-ink pb-2">
                    <div className="p-2 border-2 border-ink bg-bg rounded shadow-[2px_2px_0px_#050505]">
                      {iconMap[feature.id] || <Layers className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <NeoBadge variant={badgeVariant} rotate={idx % 2 === 0 ? '-1' : '1'} className="text-[9px]">
                        {feature.status}
                      </NeoBadge>
                      <span className="font-mono text-[9px] text-gray-500 font-bold uppercase">
                        {feature.category}
                      </span>
                    </div>
                  </div>

                  {/* Feature Title & Tagline */}
                  <h3 className="font-mono text-base font-bold text-ink uppercase">
                    {feature.name}
                  </h3>
                  <div className="font-mono text-xs text-primary font-bold mt-0.5 mb-2">
                    {feature.tagline}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Technical Grounding Footer */}
                <div className="pt-3 border-t border-dashed border-gray-400 font-mono text-[10px] text-gray-600 bg-gray-50 -mx-6 -mb-6 p-4 rounded-b">
                  <span className="font-bold text-ink block mb-0.5">TECHNICAL IMPLEMENTATION:</span>
                  <p className="text-gray-800 line-clamp-2" title={feature.technicalDetails}>
                    {feature.technicalDetails}
                  </p>
                </div>
              </BrutalistCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
