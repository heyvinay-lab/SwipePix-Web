import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { FloppyDiskSvg } from '../illustrations/FloppyDiskSvg';
import { BrutalistButton } from '../common/BrutalistButton';
import { Lock, EyeOff, Radio, Database } from 'lucide-react';

interface PrivacySectionProps {
  onNavigate: (path: string) => void;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ onNavigate }) => {
  return (
    <section id="privacy" className="py-24 bg-dark text-white border-b-3 border-ink relative overflow-hidden bg-grid-dots-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="THE ZERO-NETWORK FORTRESS"
          tagVariant="accent"
          title="YOUR PHOTOS STAY YOUR PHOTOS."
          subtitle="Engineered with absolute privacy. No marketing spin. Here is the actual technical proof."
          darkTheme={true}
        />

        {/* 4 Brutalist Pillar Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono text-center">
          <div className="p-4 bg-darkSurface border-2 border-accent shadow-[4px_4px_0px_#B8FF00]">
            <Radio className="w-6 h-6 mx-auto mb-2 text-accent" />
            <span className="text-xs font-bold uppercase block text-accent">
              NO INTERNET PERMISSION
            </span>
            <span className="text-[10px] text-gray-400 font-sans block mt-1">
              Physically blocked by Android OS
            </span>
          </div>

          <div className="p-4 bg-darkSurface border-2 border-warm shadow-[4px_4px_0px_#FF4FD8]">
            <Lock className="w-6 h-6 mx-auto mb-2 text-warm" />
            <span className="text-xs font-bold uppercase block text-warm">
              NO CLOUD UPLOADS
            </span>
            <span className="text-[10px] text-gray-400 font-sans block mt-1">
              Zero bytes leave your phone
            </span>
          </div>

          <div className="p-4 bg-darkSurface border-2 border-primary shadow-[4px_4px_0px_#2F6BFF]">
            <EyeOff className="w-6 h-6 mx-auto mb-2 text-primary" />
            <span className="text-xs font-bold uppercase block text-primary-light">
              NO TRACKERS
            </span>
            <span className="text-[10px] text-gray-400 font-sans block mt-1">
              No Firebase, ads, or analytics
            </span>
          </div>

          <div className="p-4 bg-darkSurface border-2 border-white shadow-[4px_4px_0px_#FFFFFF]">
            <Database className="w-6 h-6 mx-auto mb-2 text-white" />
            <span className="text-xs font-bold uppercase block text-white">
              LOCAL SQLITE ONLY
            </span>
            <span className="text-[10px] text-gray-400 font-sans block mt-1">
              On-device sandboxed storage
            </span>
          </div>
        </div>

        {/* Code Proof Terminal & Architectural Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Manifest Code Box */}
          <div className="lg:col-span-7 bg-black border-3 border-white p-5 shadow-[6px_6px_0px_#B8FF00] font-mono text-xs">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-3">
              <span className="text-accent font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
                AndroidManifest.xml (VERIFIED SOURCE)
              </span>
              <span className="text-gray-400 text-[10px]">API 33-35 COMPLIANT</span>
            </div>

            <pre className="text-gray-300 overflow-x-auto leading-relaxed py-2">
              <code>{`<!-- Media permissions (Modern Android 13+) -->
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
<uses-permission android:name="android.permission.READ_MEDIA_VISUAL_USER_SELECTED" />

<!-- NOTICE: INTERNET PERMISSION IS COMPLETELY EXCLUDED -->
<!-- <uses-permission android:name="android.permission.INTERNET" /> -->
<!-- The Android kernel physically denies all socket & network calls -->`}</code>
            </pre>

            <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between items-center text-[10px] text-gray-400">
              <span>Audited against \`c:/Users/vinay/AndroidStudioProjects/SwipePix\`</span>
              <span className="text-accent font-bold">100% VERIFIED</span>
            </div>
          </div>

          {/* Right: Technical Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <FloppyDiskSvg className="w-16 h-16 shrink-0" />
              <div>
                <h4 className="font-mono text-lg font-bold uppercase text-white">
                  PHYSICAL DISK ISOLATION
                </h4>
                <p className="font-sans text-xs text-gray-300 mt-1">
                  Your photos never touch an external server because the app lacks the physical permission to establish a socket.
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-gray-300 leading-relaxed">
              When you use SwipePix, thumbnail decoding happens via your device’s GPU and MediaStore cache. Session decisions are recorded in an encrypted, on-device SQLite database created via AndroidX Room. 
            </p>

            <div className="pt-2">
              <BrutalistButton
                variant="accent"
                size="sm"
                onClick={() => {
                  onNavigate('/privacy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                READ TECHNICAL PRIVACY AUDIT →
              </BrutalistButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
