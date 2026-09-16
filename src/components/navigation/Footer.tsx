import React from 'react';
import { NeoBadge } from '../common/NeoBadge';
import { Smartphone, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      onNavigate('/');
      setTimeout(() => {
        const id = path.replace('/#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t-3 border-ink bg-dark text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b-2 border-gray-800">
          {/* Col 1: Brand & Positioning (2 cols wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary border-2 border-white rounded flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="font-mono text-2xl font-bold tracking-tight text-white">
                SwipePix
              </span>
              <NeoBadge variant="accent" rotate="1" className="text-[10px]">
                OFFLINE v1.0
              </NeoBadge>
            </div>
            <p className="font-sans text-sm text-gray-300 max-w-sm leading-relaxed">
              The privacy-first, local-only Android gallery cleaner. Rapid card-based swipe triage with native Android system trash safety. Zero internet permission, zero cloud uploads, zero telemetry.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 font-mono text-xs bg-black text-accent px-2 py-1 border border-accent">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% On-Device
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs bg-black text-warm px-2 py-1 border border-warm">
                Android 13+ (API 33-35)
              </span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-accent mb-4 border-b border-gray-700 pb-1">
              PRODUCT
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="/downloads/SwipePix-1.0.0.apk" download="SwipePix-1.0.0.apk" className="text-gray-300 hover:text-white transition-colors">
                  Download APK v1.0.0
                </a>
              </li>
              <li>
                <a href="/updates" onClick={(e) => handleNav(e, '/updates')} className="text-gray-300 hover:text-white transition-colors">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="https://github.com/heyvinay-lab/SwipePix/releases" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1">
                  GitHub Releases <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/#features" onClick={(e) => handleNav(e, '/#features')} className="text-gray-300 hover:text-white transition-colors">
                  Feature Grid
                </a>
              </li>
              <li>
                <a href="/#demo" onClick={(e) => handleNav(e, '/#demo')} className="text-gray-300 hover:text-white transition-colors">
                  Interactive Swipe Demo
                </a>
              </li>
              <li>
                <a href="/#tech" onClick={(e) => handleNav(e, '/#tech')} className="text-gray-300 hover:text-white transition-colors">
                  Architecture Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Safety */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-warm mb-4 border-b border-gray-700 pb-1">
              TRUST & SAFETY
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="/privacy" onClick={(e) => handleNav(e, '/privacy')} className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacy#manifest" onClick={(e) => handleNav(e, '/privacy')} className="text-gray-300 hover:text-white transition-colors">
                  Zero-Internet Audit
                </a>
              </li>
              <li>
                <a href="/#safety" onClick={(e) => handleNav(e, '/#safety')} className="text-gray-300 hover:text-white transition-colors">
                  30-Day System Trash
                </a>
              </li>
              <li>
                <a href="/#faq" onClick={(e) => handleNav(e, '/#faq')} className="text-gray-300 hover:text-white transition-colors">
                  Safety FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Project & Community */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary-light mb-4 border-b border-gray-700 pb-1">
              COMMUNITY
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="/feedback" onClick={(e) => handleNav(e, '/feedback')} className="text-gray-300 hover:text-white transition-colors">
                  Send Feedback & Bugs
                </a>
              </li>
              <li>
                <a href="https://github.com/heyvinay-lab/SwipePix/issues" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1">
                  GitHub Issues <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/donate" onClick={(e) => handleNav(e, '/donate')} className="text-gray-300 hover:text-white transition-colors">
                  Support Development
                </a>
              </li>
              <li>
                <a href="https://github.com/sponsors/heyvinay-lab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1">
                  GitHub Sponsors <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleNav(e, '/about')} className="text-gray-300 hover:text-white transition-colors">
                  About the Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <span>SwipePix Android Application • Independently developed by Vinay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-warm fill-warm inline" /> for Android Users
            </span>
            <span>Apache 2.0 Open Source Components</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
