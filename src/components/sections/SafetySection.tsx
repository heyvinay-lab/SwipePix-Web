import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { TrashCanSvg } from '../illustrations/TrashCanSvg';
import { ShieldCheck, Undo2, AlertOctagon, RefreshCw } from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <section id="safety" className="py-20 bg-white border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="ZERO SILENT DELETIONS"
          tagVariant="warm"
          title="HOW SWIPEPIX PROTECTS YOUR PHOTOS"
          subtitle="A 4-stage pipeline that guarantees you never lose a memory by accident."
        />

        {/* The 5-Step Visual Safety Pipeline */}
        <div className="card-brutal bg-bg p-6 sm:p-8 mb-12 shadow-brutal-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center font-mono">
            {/* Step 1 */}
            <div className="flex-1 p-4 bg-white border-2 border-ink shadow-brutal-sm w-full">
              <span className="text-[10px] text-gray-500 font-bold block">STAGE 1</span>
              <span className="font-bold text-warm text-sm block mt-1">SWIPE LEFT</span>
              <span className="text-[11px] text-gray-700 font-sans block mt-1">
                Triggered during cleaning session
              </span>
            </div>

            <div className="font-bold text-ink text-xl hidden lg:block">→</div>
            <div className="font-bold text-ink text-xl lg:hidden">↓</div>

            {/* Step 2 */}
            <div className="flex-1 p-4 bg-white border-2 border-ink shadow-brutal-sm w-full">
              <span className="text-[10px] text-gray-500 font-bold block">STAGE 2</span>
              <span className="font-bold text-secondary text-sm block mt-1">TRASH_PENDING</span>
              <span className="text-[11px] text-gray-700 font-sans block mt-1">
                Staged in local SQLite database
              </span>
            </div>

            <div className="font-bold text-ink text-xl hidden lg:block">→</div>
            <div className="font-bold text-ink text-xl lg:hidden">↓</div>

            {/* Step 3 */}
            <div className="flex-1 p-4 bg-white border-2 border-ink shadow-brutal-sm w-full">
              <span className="text-[10px] text-gray-500 font-bold block">STAGE 3</span>
              <span className="font-bold text-primary text-sm block mt-1">SESSION REVIEW</span>
              <span className="text-[11px] text-gray-700 font-sans block mt-1">
                Inspect summary of kept vs trashed
              </span>
            </div>

            <div className="font-bold text-ink text-xl hidden lg:block">→</div>
            <div className="font-bold text-ink text-xl lg:hidden">↓</div>

            {/* Step 4 */}
            <div className="flex-1 p-4 bg-accent border-2 border-ink shadow-brutal-sm w-full">
              <span className="text-[10px] text-ink font-bold block">STAGE 4</span>
              <span className="font-bold text-ink text-sm block mt-1">OS CONFIRMATION</span>
              <span className="text-[11px] text-gray-900 font-sans block mt-1">
                Android system confirmation prompt
              </span>
            </div>

            <div className="font-bold text-ink text-xl hidden lg:block">→</div>
            <div className="font-bold text-ink text-xl lg:hidden">↓</div>

            {/* Step 5 */}
            <div className="flex-1 p-4 bg-white border-2 border-ink shadow-brutal-sm w-full">
              <span className="text-[10px] text-gray-500 font-bold block">STAGE 5</span>
              <span className="font-bold text-accent-hover text-sm block mt-1">30-DAY TRASH</span>
              <span className="text-[11px] text-gray-700 font-sans block mt-1">
                Recoverable anytime for 30 days
              </span>
            </div>
          </div>
        </div>

        {/* Detailed 3-Column Safety Pillars with Integrated TrashCanSvg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Pillar 1 */}
          <div className="card-brutal bg-white p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-pink-100 border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_#050505]">
                <Undo2 className="w-6 h-6 text-warm" />
              </div>
              <h3 className="font-mono text-base font-bold text-ink uppercase">
                INSTANT REAL-TIME UNDO
              </h3>
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                Swiped the wrong way? Tap the floating Undo button at any point during a session. The photo immediately snaps back into your deck, and its pending status is removed from the SQLite table.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-dashed border-gray-300 font-mono text-[11px] font-bold text-primary">
              ✓ REVERSIBLE IN 1 TAP
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="card-brutal bg-white p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-lime-100 border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_#050505]">
                <ShieldCheck className="w-6 h-6 text-accent-hover" />
              </div>
              <h3 className="font-mono text-base font-bold text-ink uppercase">
                ANDROID OS SYSTEM PROMPT
              </h3>
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                SwipePix utilizes Android’s official <code>MediaStore.createTrashRequest</code> platform API. The operating system itself asks you to confirm moving the selected photos to trash. No background deletion can ever happen.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-dashed border-gray-300 font-mono text-[11px] font-bold text-accent-hover">
              ✓ OS-LEVEL CONSENT REQUIRED
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="card-brutal bg-white p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-purple-100 border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_#050505]">
                <RefreshCw className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-mono text-base font-bold text-ink uppercase">
                30-DAY RECOVERY & IN-APP TRASH
              </h3>
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                Photos moved to system trash are not permanently deleted right away. They stay safe in Android’s 30-day trash folder. You can restore them from your device gallery or directly inside SwipePix’s dedicated Trash screen.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-dashed border-gray-300 font-mono text-[11px] font-bold text-secondary flex items-center justify-between">
              <span>✓ 30 DAYS TO RESTORE</span>
              <TrashCanSvg className="w-7 h-7 inline-block" />
            </div>
          </div>
        </div>

        {/* Transparency Alert Box */}
        <div className="mt-10 p-4 border-2 border-ink bg-amber-50 shadow-brutal-sm flex items-start gap-3">
          <AlertOctagon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="font-mono text-xs text-amber-950">
            <span className="font-bold block mb-0.5">PERMANENT DELETION DISCLOSURE:</span>
            <span className="font-sans text-xs">
              Permanent deletion only occurs after 30 days elapse in Android’s system trash, or if you explicitly select <em>"Empty Trash"</em> or <em>"Delete Permanently"</em> inside Android’s native trash manager. SwipePix never bypasses this safety protocol.
            </span>
          </div>
        </div>

        {/* Google Play Protect Verification Box */}
        <div className="mt-6 p-4 border-2 border-ink bg-lime-50 shadow-brutal-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-accent-hover shrink-0 mt-0.5" />
          <div className="font-mono text-xs text-gray-900">
            <span className="font-bold block mb-0.5 text-ink">GOOGLE PLAY PROTECT VERIFIED:</span>
            <span className="font-sans text-xs text-gray-800">
              SwipePix production releases are cryptographically signed with a dedicated RSA 4096-bit release keystore (SHA-256 fingerprint verified). Full on-device Google Play Protect security scans on physical Samsung Galaxy S24 Ultra hardware confirm: <strong>"No harmful apps found"</strong> with zero security risks and zero hostile downloader flags.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
