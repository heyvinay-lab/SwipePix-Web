import { useState } from 'react';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { UpiPaymentCard } from '../donate/UpiPaymentCard';
import { GithubSponsorsCard } from '../donate/GithubSponsorsCard';
import { DONATION_CONFIG } from '../../config/donation';
import { SWIPEPIX_CONFIG } from '../../config/swipepix';
import { Heart, QrCode, Github, ShieldCheck, ArrowDown } from 'lucide-react';

export const DonatePage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<'UPI' | 'GITHUB'>('UPI');
  const cardConfig = DONATION_CONFIG.card;

  const scrollToPayment = () => {
    const el = document.getElementById('payment-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center gap-2">
            <NeoBadge variant="accent" rotate="-1">
              COMMUNITY BACKING
            </NeoBadge>
            <NeoBadge variant="warm" rotate="1">
              100% INDEPENDENT
            </NeoBadge>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase tracking-tight text-ink">
            SUPPORT SWIPEPIX.
          </h1>

          <p className="font-mono text-base sm:text-lg font-bold text-primary">
            Keep gallery cleanup private, local, and improving.
          </p>

          <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
            SwipePix is built for people who want a simpler way to clean up their photo library without sending their photos to the cloud. If SwipePix saves you time, you can help support continued development.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <BrutalistButton
              variant="accent"
              size="md"
              onClick={scrollToPayment}
            >
              <Heart className="w-4 h-4 mr-2 text-warm fill-warm" /> SUPPORT SWIPEPIX <ArrowDown className="w-4 h-4 ml-1" />
            </BrutalistButton>

            <BrutalistButton
              variant="white"
              size="md"
              asLink={true}
              href={SWIPEPIX_CONFIG.githubRepoUrl}
              external={true}
            >
              <Github className="w-4 h-4 mr-2" /> VIEW ON GITHUB
            </BrutalistButton>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div id="payment-section" className="space-y-6 pt-4">
          <div className="border-b-3 border-ink pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-accent border border-ink inline-block" />
              HOW DO YOU WANT TO SUPPORT?
            </span>
            <span className="font-mono text-[11px] text-gray-500">
              SELECT YOUR PREFERRED CHANNEL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* UPI Option */}
            <button
              type="button"
              onClick={() => setSelectedMethod('UPI')}
              className={`p-4 border-3 border-ink text-left transition-all ${
                selectedMethod === 'UPI'
                  ? 'bg-accent text-ink shadow-brutal -translate-y-1'
                  : 'bg-white text-ink hover:bg-gray-50 shadow-brutal-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-base font-bold uppercase flex items-center gap-2">
                  <QrCode className="w-5 h-5" /> [ UPI ]
                </span>
                {selectedMethod === 'UPI' && (
                  <span className="font-mono text-[10px] bg-ink text-accent px-1.5 py-0.5 border border-ink font-bold">
                    SELECTED
                  </span>
                )}
              </div>
              <p className="font-sans text-xs text-gray-800">
                Fast payment with any UPI app (GPay, PhonePe, Paytm, BHIM, CRED).
              </p>
            </button>

            {/* GitHub Sponsors Option */}
            <button
              type="button"
              onClick={() => setSelectedMethod('GITHUB')}
              className={`p-4 border-3 border-ink text-left transition-all ${
                selectedMethod === 'GITHUB'
                  ? 'bg-secondary text-white shadow-brutal -translate-y-1'
                  : 'bg-white text-ink hover:bg-gray-50 shadow-brutal-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-base font-bold uppercase flex items-center gap-2">
                  <Github className="w-5 h-5" /> [ GITHUB SPONSORS ]
                </span>
                {selectedMethod === 'GITHUB' && (
                  <span className="font-mono text-[10px] bg-white text-secondary px-1.5 py-0.5 border border-white font-bold">
                    SELECTED
                  </span>
                )}
              </div>
              <p className={`font-sans text-xs ${selectedMethod === 'GITHUB' ? 'text-gray-100' : 'text-gray-800'}`}>
                Support through GitHub with one-time or monthly sponsorship tiers.
              </p>
            </button>

            {/* Card payment: Only rendered if CARD_PAYMENT_URL is configured */}
            {cardConfig.enabled && cardConfig.paymentUrl && (
              <a
                href={cardConfig.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-3 border-ink text-left bg-white hover:bg-gray-50 shadow-brutal-sm"
              >
                <div className="font-mono text-base font-bold uppercase">
                  [ PAY WITH CARD ]
                </div>
                <p className="font-sans text-xs text-gray-800">
                  Credit/Debit Card via configured provider.
                </p>
              </a>
            )}
          </div>

          {/* Active Payment Experience Card */}
          <div className="pt-2">
            {selectedMethod === 'UPI' ? <UpiPaymentCard /> : <GithubSponsorsCard />}
          </div>
        </div>

        {/* Why Support SwipePix Section */}
        <div className="card-brutal bg-white p-6 sm:p-8 shadow-brutal-lg space-y-6">
          <div className="border-b-3 border-ink pb-3 flex justify-between items-center">
            <h2 className="font-mono text-xl font-bold uppercase text-ink flex items-center gap-2">
              <Heart className="w-5 h-5 text-warm fill-warm" /> WHY SUPPORT SWIPEPIX?
            </h2>
            <span className="font-mono text-xs text-gray-500 font-bold hidden sm:inline">
              100% AD-FREE & LOCAL-FIRST
            </span>
          </div>

          <div className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
            <p>
              Most smartphone cleaners exist to show video ads, sell monthly subscriptions, or monetize your photo metadata by shipping it to cloud servers.
            </p>
            <p>
              <strong>SwipePix was built on a different principle:</strong> essential utilities should be honest, local-first, lightning fast, and completely free of predatory practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 border-2 border-ink bg-lime-50 space-y-1.5">
              <span className="font-mono text-xs font-bold text-ink uppercase block">
                01. TEST HARDWARE
              </span>
              <p className="font-sans text-xs text-gray-700">
                Testing across diverse Android 13, 14, and 15 physical devices (Samsung, Pixel, OnePlus) to eliminate frame hitches.
              </p>
            </div>

            <div className="p-4 border-2 border-ink bg-blue-50 space-y-1.5">
              <span className="font-mono text-xs font-bold text-ink uppercase block">
                02. PLATFORM UPDATES
              </span>
              <p className="font-sans text-xs text-gray-700">
                Ongoing maintenance as Android evolves modern MediaStore and Scoped Storage privacy APIs.
              </p>
            </div>

            <div className="p-4 border-2 border-ink bg-purple-50 space-y-1.5">
              <span className="font-mono text-xs font-bold text-ink uppercase block">
                03. FUTURE ROADMAP
              </span>
              <p className="font-sans text-xs text-gray-700">
                Refining storage savings analytics, custom date filters, and 100% offline on-device AI duplicate clustering.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy & Payment Disclaimer */}
        <div className="p-4 border-2 border-ink bg-amber-50/80 shadow-brutal-sm font-mono text-xs space-y-1.5 text-amber-950">
          <div className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
            <span>PAYMENT TRANSPARENCY & PRIVACY NOTICE:</span>
          </div>
          <p className="font-sans text-xs text-gray-800">
            SwipePix does not receive, process, or store your UPI credentials, bank passwords, or card details. Your payment is handled directly by your selected UPI banking application or GitHub Sponsors. After tapping <strong>Pay Now</strong>, you will be redirected to a compatible UPI application on your device.
          </p>
        </div>
      </div>
    </div>
  );
};
