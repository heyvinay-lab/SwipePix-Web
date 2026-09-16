import React, { useState } from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { Menu, X, Smartphone, Download, MessageSquare, Heart } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../../config/download';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const id = href.replace('/#', '');
          const elem = document.getElementById(id);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = href.replace('/#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Updates', href: '/updates' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg border-b-3 border-ink">
      {/* Top Ticker Tape Strip */}
      <div className="bg-ink text-white font-mono text-[11px] py-1 px-4 overflow-hidden whitespace-nowrap flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-ping" />
          <span className="font-bold text-accent">SWIPEPIX v{DOWNLOAD_CONFIG.version} PRODUCTION</span>
          <span className="text-gray-400 hidden sm:inline">•</span>
          <span className="text-gray-300 hidden sm:inline">100% OFFLINE ZERO-TRACKER ANDROID GALLERY CLEANER</span>
        </div>
        <div className="font-bold text-warm hidden md:block">
          ANDROID 13+ (API 33-35)
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="w-10 h-10 bg-primary border-2 border-ink rounded flex items-center justify-center shadow-[2px_2px_0px_#050505] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xl font-bold tracking-tight text-ink">
              SwipePix
            </span>
            <NeoBadge variant="accent" rotate="-2" className="hidden sm:inline-flex text-[10px]">
              OFFLINE
            </NeoBadge>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider text-ink">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`hover:text-primary transition-colors py-1 relative ${
                  isActive ? 'text-primary underline decoration-2 underline-offset-4' : ''
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Group: [Feedback] [Support] [Download] */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <BrutalistButton
            variant="white"
            size="sm"
            onClick={() => {
              onNavigate('/feedback');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Send Feedback & Bugs"
            aria-label="Send Feedback & Bugs"
            className="text-xs font-bold px-2.5 py-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1 text-primary inline" />
            Feedback
          </BrutalistButton>

          <BrutalistButton
            variant="warm"
            size="sm"
            onClick={() => {
              onNavigate('/donate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Support Development"
            aria-label="Support Development"
            className="text-xs font-bold px-2.5 py-1.5"
          >
            <Heart className="w-3.5 h-3.5 mr-1 text-ink fill-ink/20 inline" />
            Support
          </BrutalistButton>

          <BrutalistButton
            variant="accent"
            size="sm"
            asLink={true}
            href={DOWNLOAD_CONFIG.apkUrl}
            download="SwipePix-1.0.0.apk"
            title={`Download SwipePix v${DOWNLOAD_CONFIG.version} APK`}
            aria-label="Download SwipePix APK"
            className="text-xs font-bold px-3 py-1.5"
          >
            <Download className="w-3.5 h-3.5 mr-1 text-ink inline" />
            Download
          </BrutalistButton>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 border-2 border-ink bg-white shadow-brutal-sm text-ink focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-3 border-ink bg-white p-4 shadow-brutal-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2 font-mono font-bold text-sm uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="p-2.5 border-2 border-ink bg-bg hover:bg-primary-light transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-gray-400">→</span>
              </a>
            ))}

            {/* Mobile Support & Action Section */}
            <div className="pt-3 mt-1 border-t-2 border-dashed border-gray-300 flex flex-col gap-2.5">
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-bold">
                Support & Actions
              </span>

              <BrutalistButton
                variant="white"
                size="md"
                className="w-full justify-center text-xs font-bold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/feedback');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <MessageSquare className="w-4 h-4 mr-2 text-primary shrink-0" />
                Send Feedback & Bugs
              </BrutalistButton>

              <BrutalistButton
                variant="warm"
                size="md"
                className="w-full justify-center text-xs font-bold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Heart className="w-4 h-4 mr-2 text-ink fill-ink/20 shrink-0" />
                Support Development
              </BrutalistButton>

              <BrutalistButton
                variant="accent"
                size="md"
                asLink={true}
                href={DOWNLOAD_CONFIG.apkUrl}
                download="SwipePix-1.0.0.apk"
                className="w-full justify-center text-xs font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4 mr-2 text-ink shrink-0" />
                Download APK v{DOWNLOAD_CONFIG.version}
              </BrutalistButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
