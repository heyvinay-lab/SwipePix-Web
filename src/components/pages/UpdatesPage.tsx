import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { SWIPEPIX_CONFIG } from '../../config/swipepix';
import { Download, CheckCircle, Github, ShieldCheck, Terminal } from 'lucide-react';

export const UpdatesPage: React.FC = () => {
  const releaseNotes = [
    'Initial production stable release for modern Android (13, 14, 15).',
    'Unified In-App Video Player System: Native playback in both fullscreen viewer and cleaning card deck with tactile seek scrubber, mute controls, and "Open with" system player fallback.',
    'Direct Video Swipe Triage: Seamless in-deck video preview allowing users to watch, scrub, and swipe right (Keep) or swipe left (Trash) on video cards with immediate engine unbind.',
    'Physics-driven card deck swipe triage (Swipe Right to Keep, Swipe Left to Trash, Reversible Undo).',
    'Adaptive zero-letterbox media surface dynamically matching image aspect ratio with 0 pillarbox/letterbox.',
    'Interactive long-press multi-selection with batch deletion and animated selection bar in gallery & albums.',
    'Next-Gen liquid glass photo viewer with atmospheric ambient glow, 5x zoom pill, 2.5x toggle, and filmstrip.',
    'System-level MediaStore favorite synchronization (heart toggle directly integrates with Android platform).',
    'Mid-session "Save & Exit" persistence with deterministic checkpoint continuation or start-fresh dialog.',
    'Chronological 4-column photo and video gallery grid with sticky relative date headers.',
    '2-column album explorer with non-truncating MediaStore photo and video counts.',
    'Native Android System Trash integration via official MediaStore.createTrashRequest API.',
    'Dedicated built-in In-App Trash screen with 30-day restore and permanent purge actions.',
    'Quick filter chips for All Media, Videos, Favorites, and Screenshots.',
    'Liquid Glass theme engine supporting System Default, Crisp Light, and Deep Slate Dark modes.',
    '100% offline local-first architecture with zero internet permission declared in AndroidManifest.',
    'Cryptographically signed with dedicated RSA 4096-bit release keystore; verified clean by Google Play Protect.',
  ];

  return (
    <div className="py-16 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          tag="RELEASE HEADQUARTERS"
          tagVariant="accent"
          title="OFFICIAL UPDATE CENTER"
          subtitle="Download stable signed releases, verify cryptographic checksums, and track changelogs."
        />

        {/* Current Active Release Card */}
        <div className="card-brutal bg-white p-6 sm:p-10 shadow-brutal-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-3 border-ink pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <NeoBadge variant="accent" rotate="-1">
                  CURRENT STABLE
                </NeoBadge>
                <span className="font-mono text-xs text-gray-500 font-bold">
                  RELEASE CHANNEL: PRODUCTION
                </span>
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase text-ink mt-2">
                SWIPEPIX v{SWIPEPIX_CONFIG.currentVersion} (BUILD {SWIPEPIX_CONFIG.versionCode})
              </h2>
              <p className="font-mono text-xs text-gray-600 mt-1">
                Released: {SWIPEPIX_CONFIG.releaseDate} • Target: {SWIPEPIX_CONFIG.minimumAndroidVersion}
              </p>
            </div>

            <div className="text-right sm:text-right font-mono text-xs">
              <span className="inline-block bg-lime-100 text-ink px-3 py-1 border-2 border-ink font-bold shadow-[2px_2px_0px_#050505]">
                ✓ VERIFIED PRODUCTION BUILD
              </span>
            </div>
          </div>

          {/* Download Action Area */}
          <div className="p-6 bg-lime-50 border-2 border-ink shadow-brutal-sm mb-8 space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase text-ink flex items-center gap-2">
              <Download className="w-4 h-4 text-primary" /> DIRECT APK DISTRIBUTION
            </h3>
            <p className="font-sans text-xs text-gray-800 leading-relaxed">
              SwipePix is distributed directly as an Android APK. Because it requires zero network permissions, you can sideload it safely on any compatible Android 13+ phone without creating accounts.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {SWIPEPIX_CONFIG.apkDownloadUrl ? (
                <BrutalistButton
                  variant="accent"
                  size="md"
                  asLink={true}
                  href={SWIPEPIX_CONFIG.apkDownloadUrl}
                  download="SwipePix-1.0.0.apk"
                >
                  <Download className="w-4 h-4 mr-2" /> DOWNLOAD SWIPEPIX v{SWIPEPIX_CONFIG.currentVersion} APK
                </BrutalistButton>
              ) : (
                <BrutalistButton
                  variant="accent"
                  size="md"
                  asLink={true}
                  href={SWIPEPIX_CONFIG.githubReleaseUrl}
                  external={true}
                >
                  <Download className="w-4 h-4 mr-2" /> GET RELEASE FROM GITHUB
                </BrutalistButton>
              )}

              <BrutalistButton
                variant="white"
                size="md"
                asLink={true}
                href={SWIPEPIX_CONFIG.githubRepoUrl}
                external={true}
              >
                <Github className="w-4 h-4 mr-2" /> REPO & SOURCE
              </BrutalistButton>
            </div>
          </div>

          {/* Build Information Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-mono text-xs">
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-500 uppercase block">PACKAGE ID</span>
              <span className="font-bold text-ink truncate block">in.heyvinay.swipepix</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-500 uppercase block">MINIMUM SDK</span>
              <span className="font-bold text-ink block">API 33 (Android 13)</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-500 uppercase block">TARGET SDK</span>
              <span className="font-bold text-ink block">API 35 (Android 15)</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-500 uppercase block">NETWORK PERMISSION</span>
              <span className="font-bold text-warm block">NONE (0% Network)</span>
            </div>
          </div>

          {/* Release Notes List */}
          <div className="space-y-4">
            <h3 className="font-mono text-base font-bold uppercase text-ink flex items-center gap-2 border-b-2 border-ink pb-2">
              <Terminal className="w-4 h-4 text-primary" /> CHANGELOG / RELEASE NOTES
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs">
              {releaseNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded">
                  <CheckCircle className="w-4 h-4 text-accent-hover shrink-0 mt-0.5" />
                  <span className="text-gray-800">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Installation & Sideloading FAQ Card */}
        <BrutalistCard bgColor="bg-white">
          <h3 className="font-mono text-base font-bold uppercase text-ink mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-hover" /> HOW TO INSTALL SWIPEPIX VIA APK
          </h3>
          <ol className="list-decimal list-inside font-sans text-xs text-gray-700 space-y-2 leading-relaxed">
            <li>Download the official <code>SwipePix-v1.0.apk</code> from the official release link above.</li>
            <li>When prompted by your browser, tap <em>"Download anyway"</em>.</li>
            <li>Open the downloaded APK. If your Android system prompts you to <em>"Allow installation from this source"</em>, enable it in your browser settings.</li>
            <li>Tap <strong>Install</strong>. Upon launch, grant read-only photo/video media access.</li>
          </ol>
        </BrutalistCard>
      </div>
    </div>
  );
};
