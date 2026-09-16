import React from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { Download, Github, ShieldCheck, Smartphone } from 'lucide-react';
import { SWIPEPIX_CONFIG, DOWNLOAD_CONFIG } from '../../config/swipepix';

interface DownloadCtaSectionProps {
  onNavigate: (path: string) => void;
}

export const DownloadCtaSection: React.FC<DownloadCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-primary text-white border-b-3 border-ink relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="card-brutal bg-white text-ink p-8 sm:p-12 shadow-brutal-xl text-center space-y-6">
          <div className="flex justify-center gap-2">
            <NeoBadge variant="accent" rotate="-1">
              OFFICIAL RELEASE
            </NeoBadge>
            <NeoBadge variant="warm" rotate="1">
              FREE & UNLIMITED
            </NeoBadge>
          </div>

          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-ink">
            READY TO DECLUTTER <br />
            YOUR ENTIRE GALLERY?
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the speed of card-based photo triage. 100% offline, zero cloud uploads, zero subscriptions, and native Android system trash protection.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <BrutalistButton
              variant="accent"
              size="lg"
              asLink={true}
              href={DOWNLOAD_CONFIG.apkUrl}
              download="SwipePix-1.0.0.apk"
              className="text-base"
            >
              <Download className="w-5 h-5 mr-2" /> GET SWIPEPIX v{DOWNLOAD_CONFIG.version} (APK)
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
              VIEW RELEASE NOTES & CHECKSUMS
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="lg"
              asLink={true}
              href={SWIPEPIX_CONFIG.githubReleaseUrl}
              external={true}
              className="text-base"
            >
              <Github className="w-5 h-5 mr-2" /> GITHUB RELEASES
            </BrutalistButton>
          </div>

          {/* Micro Meta Badges */}
          <div className="pt-4 border-t-2 border-dashed border-gray-300 flex flex-wrap justify-center items-center gap-6 font-mono text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-primary" /> Requires Android 13+ (API 33-35)
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent-hover" /> No internet permission declared
            </span>
            <span>Package: <code>in.heyvinay.swipepix</code></span>
          </div>
        </div>
      </div>
    </section>
  );
};
