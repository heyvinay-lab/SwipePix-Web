import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { NeoBadge } from '../common/NeoBadge';
import { websiteData } from '../../data/websiteData';
import { Terminal, Code2, Layers, Database, Image, Shield, Settings, Navigation } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Kotlin': <Code2 className="w-5 h-5 text-primary" />,
    'Jetpack Compose & Material 3': <Layers className="w-5 h-5 text-secondary" />,
    'Dagger Hilt': <Terminal className="w-5 h-5 text-ink" />,
    'AndroidX Room': <Database className="w-5 h-5 text-accent-hover" />,
    'Coil 3': <Image className="w-5 h-5 text-warm" />,
    'Android MediaStore': <Shield className="w-5 h-5 text-primary" />,
    'Jetpack DataStore Preferences': <Settings className="w-5 h-5 text-secondary" />,
    'Navigation Compose': <Navigation className="w-5 h-5 text-ink" />,
  };

  return (
    <section id="tech" className="py-20 bg-white border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="ENGINEERING FOUNDATION"
          tagVariant="primary"
          title="MODERN ANDROID ARCHITECTURE"
          subtitle="Built strictly in compliance with Google's Modern Android Architecture guidelines (MAD). No legacy hacky workarounds."
        />

        {/* 8-Card Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteData.technology.map((tech, idx) => {
            return (
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

                  <h3 className="font-mono text-sm font-bold text-ink uppercase">
                    {tech.name}
                  </h3>
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
            );
          })}
        </div>

        {/* Architecture Pattern Banner */}
        <div className="mt-12 card-brutal bg-ink text-white p-6 sm:p-8 shadow-brutal-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-gray-800 pb-3">
            <span className="font-mono text-xs font-bold text-accent tracking-wider uppercase">
              // ARCHITECTURAL PATTERN
            </span>
            <span className="font-mono text-xs text-warm bg-darkSurface px-2 py-1 border border-warm">
              MVVM + UDF + REPOSITORY PATTERN
            </span>
          </div>
          <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-4xl">
            SwipePix enforces strict unidirectional data flow: Compose layouts observe immutable StateFlows emitted by Hilt-injected ViewModels. All MediaStore queries execute on Dispatchers.IO with explicit SQLite projections. Mutations pass safely through platform contracts.
          </p>
        </div>
      </div>
    </section>
  );
};
