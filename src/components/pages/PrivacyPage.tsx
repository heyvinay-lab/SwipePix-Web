import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldCheck, EyeOff, FileText, Database, HardDrive } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          tag="ZERO-COMPROMISE POLICY"
          tagVariant="accent"
          title="SWIPEPIX PRIVACY POLICY"
          subtitle="Effective Date: September 2026 • Product Version: 1.0 (Build 1)"
        />

        {/* Commitment Banner */}
        <div className="card-brutal bg-white p-6 sm:p-8 shadow-brutal-lg space-y-6">
          <div className="p-4 bg-lime-100 border-2 border-ink flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-ink shrink-0" />
            <div>
              <h2 className="font-mono text-base font-bold uppercase text-ink">
                THE CORE PRIVACY GUARANTEE
              </h2>
              <p className="font-sans text-xs text-gray-800">
                Your personal photos and videos never leave your smartphone. SwipePix operates 100% offline with zero cloud synchronization, zero user tracking, and zero advertising networks.
              </p>
            </div>
          </div>

          {/* Section 1: Permissions */}
          <div id="manifest" className="space-y-4 pt-4 border-t-2 border-ink">
            <h3 className="font-mono text-lg font-bold uppercase text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> 1. ANDROID SYSTEM PERMISSIONS AUDIT
            </h3>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              SwipePix requests only the modern, granular media permissions introduced in Android 13 (API 33). We never ask for legacy full-storage permissions, location data, or contact access.
            </p>

            <div className="border-2 border-ink overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="p-2.5 border-r border-gray-700">PERMISSION</th>
                    <th className="p-2.5 border-r border-gray-700">STATUS</th>
                    <th className="p-2.5">PURPOSE & BOUNDARY</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-ink bg-white font-sans text-xs">
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-ink border-r-2 border-ink">
                      READ_MEDIA_IMAGES
                    </td>
                    <td className="p-2.5 border-r-2 border-ink font-mono text-accent-hover font-bold">
                      GRANTED
                    </td>
                    <td className="p-2.5 text-gray-700">
                      Allows reading photos and metadata from Android’s MediaStore to populate your gallery grid and cleaning deck.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-ink border-r-2 border-ink">
                      READ_MEDIA_VIDEO
                    </td>
                    <td className="p-2.5 border-r-2 border-ink font-mono text-accent-hover font-bold">
                      GRANTED
                    </td>
                    <td className="p-2.5 text-gray-700">
                      Allows indexing video files and generating video poster thumbnails.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-ink border-r-2 border-ink">
                      READ_MEDIA_VISUAL_USER_SELECTED
                    </td>
                    <td className="p-2.5 border-r-2 border-ink font-mono text-accent-hover font-bold">
                      GRANTED
                    </td>
                    <td className="p-2.5 text-gray-700">
                      Supports Android 14+ partial photo access if you choose to grant access to selected media only.
                    </td>
                  </tr>
                  <tr className="bg-rose-50/70">
                    <td className="p-2.5 font-mono font-bold text-warm border-r-2 border-ink">
                      android.permission.INTERNET
                    </td>
                    <td className="p-2.5 border-r-2 border-ink font-mono text-warm font-bold">
                      EXCLUDED
                    </td>
                    <td className="p-2.5 text-gray-900 font-medium">
                      <strong>Completely omitted from AndroidManifest.xml.</strong> The Android OS physically forbids SwipePix from opening network sockets or transmitting data over Wi-Fi/cellular.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: On-Device Data Storage */}
          <div className="space-y-4 pt-4 border-t-2 border-ink">
            <h3 className="font-mono text-lg font-bold uppercase text-ink flex items-center gap-2">
              <Database className="w-5 h-5 text-secondary" /> 2. LOCAL DATA STORAGE ARCHITECTURE
            </h3>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              All state maintained by SwipePix resides purely on your phone’s internal sandbox storage:
            </p>
            <ul className="list-disc list-inside font-sans text-xs text-gray-700 space-y-1.5 leading-relaxed pl-2">
              <li>
                <strong>Cleaning Session Records:</strong> Active session progress and staged decisions are recorded in an internal SQLite database managed via AndroidX Room. This database is sandboxed in <code>/data/data/in.heyvinay.swipepix/databases/</code> and is inaccessible to other apps.
              </li>
              <li>
                <strong>User Settings:</strong> Your theme preferences and cleaning behavior options are stored locally via Jetpack DataStore Preferences.
              </li>
              <li>
                <strong>Thumbnail Cache:</strong> Coil 3 maintains an in-memory LRU bitmap cache and a 100MB internal disk cache. Cache files are stored in the app’s internal cache directory and can be purged by Android or cleared by the user at any time without data loss.
              </li>
            </ul>
          </div>

          {/* Section 3: Third-Party Services */}
          <div className="space-y-4 pt-4 border-t-2 border-ink">
            <h3 className="font-mono text-lg font-bold uppercase text-ink flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-warm" /> 3. ZERO THIRD-PARTY SDKs & TRACKERS
            </h3>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              SwipePix does not bundle:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px] font-bold text-center">
              <span className="p-2 bg-gray-100 border border-ink">NO Google Analytics</span>
              <span className="p-2 bg-gray-100 border border-ink">NO Firebase SDK</span>
              <span className="p-2 bg-gray-100 border border-ink">NO Crashlytics</span>
              <span className="p-2 bg-gray-100 border border-ink">NO Ad Networks</span>
            </div>
            <p className="font-sans text-xs text-gray-600">
              There is no device fingerprinting, user profiling, or behavioral tracking of any kind.
            </p>
          </div>

          {/* Section 4: Deletion & System Trash */}
          <div className="space-y-4 pt-4 border-t-2 border-ink">
            <h3 className="font-mono text-lg font-bold uppercase text-ink flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-primary" /> 4. FILE DELETIONS & ANDROID TRASH
            </h3>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              SwipePix does not execute direct destructive file deletion (e.g. <code>File.delete()</code>). When you complete a session, SwipePix invokes Android’s official <code>MediaStore.createTrashRequest</code> platform contract. Android moves items to its official 30-day trash storage, ensuring files can be recovered if you change your mind.
            </p>
          </div>

          {/* Section 5: External Links */}
          <div className="space-y-3 pt-4 border-t-2 border-ink">
            <h3 className="font-mono text-base font-bold uppercase text-ink">
              5. EXTERNAL BROWSER LINKS
            </h3>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              When you tap "Check for Updates", "Donate", or "Send Feedback" inside the app's settings screen, SwipePix launches your phone's default external web browser via an explicit HTTPS intent pointing to <code>https://swipepix.heyvinay.in/*</code>. The app itself performs zero background web requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
