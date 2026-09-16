import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { NeoBadge } from '../common/NeoBadge';
import { websiteData } from '../../data/websiteData';
import { 
  ChevronDown, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  PlayCircle, 
  Lock, 
  Code2, 
  Terminal, 
  Database, 
  Image, 
  Settings, 
  Navigation 
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('architecture');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const deepDiveTopics = [
    {
      id: 'architecture',
      title: 'Modern Architecture & Concurrency',
      icon: <Layers className="w-5 h-5 text-primary" />,
      tag: 'MVVM + UDF',
      summary: 'Strict unidirectional data flow with Kotlin 2.0.21, Jetpack Compose, and Dagger Hilt.',
      details: 'SwipePix adopts Google’s Modern Android Architecture guidelines. Compose views observe immutable UI states emitted by Hilt-injected ViewModels via Kotlin Coroutines StateFlows. Heavy I/O, SQLite operations, and MediaStore cursors execute exclusively off the main thread on Dispatchers.IO.',
    },
    {
      id: 'performance',
      title: 'Memory Optimization & Fast Rendering',
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      tag: '0ms LATENCY',
      summary: 'Platform hardware thumbnail decoding, dual-tier caching, and pre-emptive card buffering.',
      details: 'Directly decoding 48MP photos causes rapid GC spikes. SwipePix bypasses this by delegating thumbnail rendering to ContentResolver.loadThumbnail (256×256 hardware cache). Combined with Coil 3 memory pools (25% JVM heap) and 2-card forward prefetching, swiping remains butter-smooth at 120Hz.',
    },
    {
      id: 'media',
      title: 'Scoped Storage & Android MediaStore',
      icon: <ShieldCheck className="w-5 h-5 text-accent-hover" />,
      tag: 'API 33-35',
      summary: 'Zero legacy file-path hacks. Built exclusively around Android 13+ Scoped Storage contracts.',
      details: 'SwipePix requests modern granular permissions: READ_MEDIA_IMAGES and READ_MEDIA_VIDEO. Deletions pass through MediaStore.createTrashRequest, delegating destructive operations to the Android operating system confirmation sheet and preserving files in system trash for 30 days.',
    },
    {
      id: 'video',
      title: 'Unified In-Deck Video Engine',
      icon: <PlayCircle className="w-5 h-5 text-warm" />,
      tag: 'PHASE 47',
      summary: 'Instant playback, precision scrubbing, and mute controls directly inside the swipe deck.',
      details: 'Video files are integrated directly into the card deck triage surface. Users can watch high-bitrate MP4 and MKV clips, drag the seek bar to check specific frames, and toggle audio mute without ever bouncing out to an external video player.',
    },
    {
      id: 'privacy',
      title: 'Zero Network Permission Audit',
      icon: <Lock className="w-5 h-5 text-primary" />,
      tag: 'NO INTERNET',
      summary: 'Complete physical exclusion of android.permission.INTERNET from the app manifest.',
      details: 'Because android.permission.INTERNET is never declared, the Android kernel denies all socket creation requests at the OS level. No background telemetry, crash reporters, ad networks, or cloud synchronizers can operate in SwipePix.',
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    'Kotlin': <Code2 className="w-5 h-5 text-primary" />,
    'Jetpack Compose & Material 3': <Layers className="w-5 h-5 text-secondary" />,
    'Dagger Hilt': <Terminal className="w-5 h-5 text-ink" />,
    'AndroidX Room': <Database className="w-5 h-5 text-accent-hover" />,
    'Coil 3': <Image className="w-5 h-5 text-warm" />,
    'Android MediaStore': <ShieldCheck className="w-5 h-5 text-primary" />,
    'Jetpack DataStore Preferences': <Settings className="w-5 h-5 text-secondary" />,
    'Navigation Compose': <Navigation className="w-5 h-5 text-ink" />,
  };

  return (
    <section id="tech" className="py-20 bg-white border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="UNDER THE HOOD"
          tagVariant="primary"
          title="BUILT FOR ANDROID."
          subtitle="Modern Android architecture engineered for local-first performance, zero battery drain, and memory safety."
        />

        {/* Collapsible Architecture Accordions */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {deepDiveTopics.map((topic) => {
            const isOpen = openAccordion === topic.id;
            return (
              <div
                key={topic.id}
                className={`border-3 border-ink transition-all ${
                  isOpen ? 'bg-white shadow-brutal' : 'bg-bg shadow-brutal-sm hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(topic.id)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 border-2 border-ink rounded bg-white shadow-[2px_2px_0px_#050505]">
                      {topic.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-mono text-sm sm:text-base font-bold text-ink uppercase">
                          {topic.title}
                        </h3>
                        <NeoBadge variant="accent" className="text-[9px] hidden sm:inline-flex">
                          {topic.tag}
                        </NeoBadge>
                      </div>
                      <p className="font-sans text-xs text-gray-600 mt-0.5">
                        {topic.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded border-2 border-ink flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-accent rotate-180' : 'bg-white rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-ink" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t-2 border-dashed border-gray-300 font-sans text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3 bg-white">
                    <p>{topic.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tech Stack Component Grid */}
        <div className="pt-4 border-t-2 border-dashed border-gray-300">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-bold text-ink bg-bg px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_#050505] uppercase">
              PRODUCTION STACK LIBRARIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteData.technology.map((tech, idx) => (
              <BrutalistCard
                key={tech.name}
                bgColor="bg-bg"
                hoverEffect={true}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3 border-b-2 border-ink pb-2">
                    <div className="p-2 border-2 border-ink bg-white rounded shadow-[2px_2px_0px_#050505]">
                      {iconMap[tech.name] || <Terminal className="w-5 h-5 text-primary" />}
                    </div>
                    <NeoBadge variant="accent" rotate={idx % 2 === 0 ? '-1' : '1'} className="text-[9px]">
                      {tech.category}
                    </NeoBadge>
                  </div>

                  <h4 className="font-mono text-sm font-bold text-ink uppercase">
                    {tech.name}
                  </h4>
                  <div className="font-mono text-[11px] text-primary font-bold mb-2">
                    {tech.version}
                  </div>

                  <p className="font-sans text-xs text-gray-700 leading-relaxed">
                    {tech.purpose}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-dashed border-gray-400 font-mono text-[10px] text-gray-600">
                  <span className="font-bold text-ink">SCOPE:</span> {tech.whereUsed}
                </div>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
