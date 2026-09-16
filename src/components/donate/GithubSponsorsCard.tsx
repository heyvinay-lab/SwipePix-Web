import React from 'react';
import { DONATION_CONFIG } from '../../config/donation';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { Github, ExternalLink, Globe, CreditCard, Heart } from 'lucide-react';

export const GithubSponsorsCard: React.FC = () => {
  const config = DONATION_CONFIG.githubSponsors;

  return (
    <div className="card-brutal bg-white p-6 sm:p-8 shadow-brutal-lg space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b-3 border-ink pb-4">
        <div>
          <div className="flex items-center gap-2">
            <NeoBadge variant="secondary" rotate="-1">
              INTERNATIONAL & OPEN SOURCE
            </NeoBadge>
            <span className="font-mono text-xs text-gray-700 font-bold hidden sm:inline">
              // RECURRING OR ONE-TIME
            </span>
          </div>
          <h3 className="font-mono text-2xl font-bold uppercase text-ink mt-1">
            SUPPORT ON GITHUB SPONSORS
          </h3>
          <p className="font-sans text-xs text-gray-700 mt-0.5">
            Prefer supporting open-source development? Sponsor SwipePix through GitHub.
          </p>
        </div>

        <div className="p-2 border-2 border-ink bg-purple-100 rounded shadow-[2px_2px_0px_#050505]">
          <Github className="w-6 h-6 text-secondary" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Information & Features */}
        <div className="md:col-span-8 space-y-4">
          <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
            GitHub Sponsors allows developers and contributors worldwide to support SwipePix with one-time contributions or monthly sponsorship tiers using international credit/debit cards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 border-2 border-ink bg-bg flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary shrink-0" />
              <span>International Cards (USD / Global)</span>
            </div>
            <div className="p-3 border-2 border-ink bg-bg flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-accent-hover shrink-0" />
              <span>Zero Transaction Fees on Sponsors</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <BrutalistButton
              variant="secondary"
              size="md"
              asLink={true}
              href={config.profileUrl}
              external={true}
              className="text-sm"
            >
              <Github className="w-4 h-4 mr-2" /> SPONSOR ON GITHUB <ExternalLink className="w-3.5 h-3.5 ml-1.5 inline" />
            </BrutalistButton>

            {/* Official GitHub Sponsor Iframe Embed */}
            <div className="p-1 border-2 border-ink bg-bg shadow-[2px_2px_0px_#050505] inline-flex items-center">
              <iframe
                src={config.embedUrl}
                title="Sponsor heyvinay-lab"
                height="32"
                width="114"
                style={{ border: 0, borderRadius: '6px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right: Badge Stamp Callout */}
        <div className="md:col-span-4 p-5 bg-purple-50 border-2 border-ink shadow-brutal-sm text-center space-y-2">
          <Heart className="w-8 h-8 text-warm fill-warm mx-auto" />
          <p className="font-mono text-xs font-bold uppercase text-ink">
            OPEN SOURCE ADVOCATE
          </p>
          <p className="font-sans text-[11px] text-gray-600">
            Sponsorships are directly managed by GitHub's secure infrastructure under <code>heyvinay-lab</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
