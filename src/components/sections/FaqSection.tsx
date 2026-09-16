import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // First two open by default

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const prioritizedFaqs = [
    {
      question: 'Is SwipePix free?',
      answer: 'Yes. SwipePix is 100% free with zero ads, subscriptions, or locked features. If SwipePix helps you reclaim storage, voluntary support can be given via GitHub Sponsors or UPI on our Donate page.',
    },
    {
      question: 'Does SwipePix upload my photos?',
      answer: 'No. Not a single byte of your photos or metadata ever leaves your phone. All media indexing, thumbnail caching, and swipe decisions stay strictly on your local device.',
    },
    {
      question: 'Does SwipePix work offline?',
      answer: 'Yes, completely offline. SwipePix does not request or declare the android.permission.INTERNET permission in its manifest. The Android system restricts the app from making any network connections.',
    },
    {
      question: 'What happens when I swipe left?',
      answer: 'Swiping left does NOT delete the photo immediately. It stages the file as TRASH_PENDING in a local SQLite table. Only when you finish your session or batch-trash does Android’s official system prompt appear for confirmation.',
    },
    {
      question: 'Can I undo an accidental swipe?',
      answer: 'Yes. Every swipe can be reversed instantly by tapping the floating Undo button during your session. The photo immediately snaps back onto your deck and its pending state is removed.',
    },
    {
      question: 'Can I clean videos as well as photos?',
      answer: 'Yes. SwipePix includes a unified in-app video engine. You can watch clips, seek with the precision scrubber, mute audio, and swipe right to keep or left to trash directly inside the deck.',
    },
    {
      question: 'Can I clean specific albums?',
      answer: 'Yes. You can target your entire camera roll or isolate heavy folders like WhatsApp Media, Screenshots, or Downloads to declutter specific sources without touching others.',
    },
    {
      question: 'What Android versions are supported?',
      answer: 'SwipePix supports Android 13 (API 33), Android 14 (API 34), and Android 15 (API 35). Android 12 and below are unsupported because they lack modern Scoped Storage and granular media permissions.',
    },
    {
      question: 'Why is SwipePix distributed as a direct APK?',
      answer: 'Distributing directly via verified APK lets us deliver fast, independent, privacy-first software without third-party store telemetry, account requirements, or artificial commercial constraints.',
    },
    {
      question: 'Is SwipePix open source?',
      answer: 'Yes. SwipePix is developed openly under the Apache 2.0 license. The full codebase, issue tracker, and release binaries are hosted transparently on GitHub.',
    },
  ];

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
          {prioritizedFaqs.map((item, idx) => {
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
