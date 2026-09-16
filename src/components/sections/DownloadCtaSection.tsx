import React from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { Download, Github, ShieldCheck, Smartphone, FileCheck, HardDrive } from 'lucide-react';
import { SWIPEPIX_CONFIG, DOWNLOAD_CONFIG } from '../../config/swipepix';

interface DownloadCtaSectionProps {
  onNavigate: (path: string) => void;
}

export const DownloadCtaSection: React.FC<DownloadCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-primary text-white border-b-3 border-ink relative overflow-hidden" id="download">
      {/* Background Graphic Accents */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="card-brutal bg-white text-ink p-8 sm:p-12 shadow-brutal-xl text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-2">
            <NeoBadge variant="accent" rotate="-1">
              DIRECT APK DISTRIBUTION
            </NeoBadge>
            <NeoBadge variant="warm" rotate="1">
              SWIPEPIX v{DOWNLOAD_CONFIG.version}
            </NeoBadge>
            <NeoBadge variant="white" rotate="-1">
              NO ACCOUNT REQUIRED
            </NeoBadge>
          </div>

          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-ink">
            READY TO DECLUTTER <br />
            YOUR ENTIRE GALLERY?
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            SwipePix is distributed directly as an Android APK. Download the APK and install it on a compatible Android 13+ device without creating an account.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <BrutalistButton
              variant="accent"
              size="lg"
              asLink={true}
              href={DOWNLOAD_CONFIG.apkUrl}
              download={DOWNLOAD_CONFIG.fileName}
              aria-label={`Download SwipePix APK v${DOWNLOAD_CONFIG.version}`}
              className="text-base font-bold shadow-brutal"
            >
              <Download className="w-5 h-5 mr-2 text-ink" /> DOWNLOAD SWIPEPIX
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="lg"
              onClick={() => {
                onNavigate('/updates');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-base"
            >
              VIEW RELEASE NOTES & CHECKSUM
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="lg"
              asLink={true}
              href={SWIPEPIX_CONFIG.githubRepoUrl}
              external={true}
              aria-label="View source code on GitHub"
              className="text-base"
            >
              <Github className="w-5 h-5 mr-2" /> GITHUB SOURCE
            </BrutalistButton>
          </div>

          {/* Micro Meta Badges with verified facts */}
          <div className="pt-4 border-t-2 border-dashed border-gray-300 flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-mono text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-primary" /> Android 13+ (API 33-35)
            </span>
            <span className="flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-primary" /> {DOWNLOAD_CONFIG.fileSizeFormatted} ({DOWNLOAD_CONFIG.fileSizeBytes.toLocaleString()} bytes)
            </span>
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-accent-hover" /> Direct APK download
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent-hover" /> Zero network permissions
            </span>
            <span>Package: <code>in.heyvinay.swipepix</code></span>
          </div>
        </div>
      </div>
    </section>
  );
};
