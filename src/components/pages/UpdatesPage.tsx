import React from 'react';
import { BrutalistCard } from '../common/BrutalistCard';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { SWIPEPIX_CONFIG, DOWNLOAD_CONFIG } from '../../config/swipepix';
import { Download, CheckCircle, Github, ShieldCheck, Terminal, Bug, Heart } from 'lucide-react';

interface UpdatesPageProps {
  onNavigate?: (path: string) => void;
}

export const UpdatesPage: React.FC<UpdatesPageProps> = ({ onNavigate }) => {
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
    <div className="py-12 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="mb-3">
            <NeoBadge variant="accent" rotate="-1">
              RELEASE HEADQUARTERS
            </NeoBadge>
          </div>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-ink mb-3">
            SWIPEPIX UPDATES.
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700">
            Download stable signed releases, verify cryptographic checksums, and track changelogs.
          </p>
        </div>

        {/* Current Active Release Card */}
        <div className="card-brutal bg-white p-6 sm:p-8 shadow-brutal-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-ink pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-mono text-2xl font-bold text-ink">
                  VERSION {SWIPEPIX_CONFIG.currentVersion}
                </h2>
                <NeoBadge variant="accent" rotate="-1">
                  RELEASE CHANNEL: PRODUCTION
                </NeoBadge>
              </div>
              <p className="font-mono text-xs text-gray-600">
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
              SwipePix is distributed directly as an Android APK. Download the APK and install it on a compatible Android 13+ device without creating an account.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <BrutalistButton
                variant="accent"
                size="md"
                asLink={true}
                href={DOWNLOAD_CONFIG.apkUrl}
                download={DOWNLOAD_CONFIG.fileName}
                aria-label={`Download SwipePix APK v${DOWNLOAD_CONFIG.version}`}
                className="font-bold shadow-brutal-sm"
              >
                <Download className="w-4 h-4 mr-2" /> Download SwipePix
              </BrutalistButton>

              <BrutalistButton
                variant="white"
                size="md"
                asLink={true}
                href={SWIPEPIX_CONFIG.githubRepoUrl}
                external={true}
                aria-label="View source code on GitHub"
              >
                <Github className="w-4 h-4 mr-2" /> REPO & SOURCE
              </BrutalistButton>
            </div>

            {/* Checksum & File Verification Details */}
            <div className="pt-3 border-t border-dashed border-gray-400/60 font-mono text-[11px] text-gray-700 space-y-1">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span>
                  <strong className="text-ink">FILE:</strong> <code>{DOWNLOAD_CONFIG.fileName}</code>
                </span>
                <span>
                  <strong className="text-ink">SIZE:</strong> {DOWNLOAD_CONFIG.fileSizeFormatted} ({DOWNLOAD_CONFIG.fileSizeBytes.toLocaleString()} bytes)
                </span>
                <span>
                  <strong className="text-ink">STATUS:</strong> Production Signed APK
                </span>
              </div>
              <div className="break-all pt-0.5">
                <strong className="text-ink">SHA-256 CHECKSUM:</strong>{' '}
                <code className="bg-white px-1.5 py-0.5 border border-gray-300 select-all font-bold text-gray-900">
                  {DOWNLOAD_CONFIG.sha256}
                </code>
              </div>
            </div>
          </div>

          {/* Build Information Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-mono text-xs">
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-700 font-bold uppercase block">PACKAGE ID</span>
              <span className="font-bold text-ink truncate block">in.heyvinay.swipepix</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-700 font-bold uppercase block">MINIMUM SDK</span>
              <span className="font-bold text-ink block">API 33 (Android 13)</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-700 font-bold uppercase block">TARGET SDK</span>
              <span className="font-bold text-ink block">API 35 (Android 15)</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg">
              <span className="text-[10px] text-gray-700 font-bold uppercase block">NETWORK PERMISSION</span>
              <span className="font-bold text-emerald-900 bg-emerald-100 px-1 border border-ink inline-block mt-0.5">NONE (0% Network)</span>
            </div>
          </div>

          {/* Release Notes List */}
          <div className="space-y-4">
            <h3 className="font-mono text-base font-bold uppercase text-ink flex items-center gap-2 border-b-2 border-ink pb-2">
              <Terminal className="w-4 h-4 text-blue-700" /> CHANGELOG / RELEASE NOTES
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs">
              {releaseNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-gray-800">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Release Feedback & Support Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border-3 border-ink shadow-brutal flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] bg-amber-100 text-ink px-2 py-0.5 border border-ink font-bold uppercase">
                QUALITY ASSURANCE
              </span>
              <h3 className="font-mono text-base font-bold text-ink uppercase">
                Found something wrong with this release?
              </h3>
              <p className="font-sans text-xs text-gray-700 leading-relaxed">
                Help us squash it. Report any regression, crash, or unexpected behavior on Android 13-15.
              </p>
            </div>
            <BrutalistButton
              variant="white"
              size="sm"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/feedback');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/feedback';
                }
              }}
              className="text-xs font-bold w-full sm:w-auto"
            >
              <Bug className="w-3.5 h-3.5 mr-1.5 text-rose-600" />
              Report a Bug
            </BrutalistButton>
          </div>

          <div className="p-6 bg-lime-100 border-3 border-ink shadow-brutal flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] bg-white text-ink px-2 py-0.5 border border-ink font-bold uppercase">
                VOLUNTARY PATRONAGE
              </span>
              <h3 className="font-mono text-base font-bold text-ink uppercase">
                Support Independent Maintenance
              </h3>
              <p className="font-sans text-xs text-gray-800 leading-relaxed">
                SwipePix is completely free with zero ads. Help support test devices and continued improvements.
              </p>
            </div>
            <BrutalistButton
              variant="warm"
              size="sm"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/donate';
                }
              }}
              className="text-xs font-bold w-full sm:w-auto"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5 text-ink fill-ink/20" />
              Support Development
            </BrutalistButton>
          </div>
        </div>

        {/* Installation & Sideloading FAQ Card */}
        <BrutalistCard bgColor="bg-white">
          <h2 className="font-mono text-base sm:text-lg font-bold uppercase text-ink mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-hover" /> HOW TO INSTALL SWIPEPIX VIA APK
          </h2>
          <ol className="list-decimal list-inside font-sans text-xs text-gray-700 space-y-2 leading-relaxed">
            <li>Download the official <code>SwipePix-1.0.0.apk</code> from the direct download button above.</li>
            <li>When prompted by your browser, tap <em>"Download anyway"</em>.</li>
            <li>Open the downloaded APK. If your Android system prompts you to <em>"Allow installation from this source"</em>, enable it in your browser settings.</li>
            <li>Tap <strong>Install</strong>. Upon launch, grant read-only photo/video media access.</li>
          </ol>
        </BrutalistCard>
      </div>
    </div>
  );
};
