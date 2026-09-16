import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { websiteData } from '../../data/websiteData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]); // First three open by default

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-bg border-b-3 border-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="CLEAR ANSWERS"
          tagVariant="warm"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about offline architecture, deletion safety, and compatibility."
        />

        <div className="space-y-4">
          {websiteData.faq.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={item.question}
                className={`border-3 border-ink transition-all ${
                  isOpen ? 'bg-white shadow-brutal' : 'bg-white/80 shadow-brutal-sm hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-sm sm:text-base font-bold text-ink uppercase flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded border-2 border-ink flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-accent rotate-180' : 'bg-bg rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-ink" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t-2 border-dashed border-gray-300 font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
