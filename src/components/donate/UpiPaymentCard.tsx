import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { DONATION_CONFIG } from '../../config/donation';
import { validateUpiAmount, buildUpiUri, formatInr, copyToClipboard } from '../../utils/upi';
import { BrutalistButton } from '../common/BrutalistButton';
import { NeoBadge } from '../common/NeoBadge';
import { Copy, Check, QrCode, Smartphone, ShieldCheck, AlertCircle } from 'lucide-react';

export const UpiPaymentCard: React.FC = () => {
  const upiConfig = DONATION_CONFIG.upi;
  const [selectedPreset, setSelectedPreset] = useState<number | null>(upiConfig.defaultAmount);
  const [amountInput, setAmountInput] = useState<string>(String(upiConfig.defaultAmount));
  const [validatedAmount, setValidatedAmount] = useState<number>(upiConfig.defaultAmount);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<boolean>(false);

  // Re-validate and update amount when user enters input
  const handleAmountChange = (raw: string) => {
    setAmountInput(raw);
    const result = validateUpiAmount(raw, upiConfig.minAmount, upiConfig.maxAmount);

    if (result.isValid && result.amount !== null) {
      setValidatedAmount(result.amount);
      setValidationError(null);
      // Check if it matches a preset
      if (upiConfig.suggestedAmounts.includes(result.amount)) {
        setSelectedPreset(result.amount);
      } else {
        setSelectedPreset(null);
      }
    } else {
      setValidationError(result.error || 'Invalid amount');
      setSelectedPreset(null);
    }
  };

  const handlePresetSelect = (preset: number) => {
    setSelectedPreset(preset);
    setAmountInput(String(preset));
    setValidatedAmount(preset);
    setValidationError(null);
  };

  // Generate dynamic URI based on validated amount
  const currentUpiUri = buildUpiUri(upiConfig, validatedAmount);

  // Re-generate QR code whenever the URI changes
  useEffect(() => {
    let isMounted = true;
    if (validatedAmount > 0 && !validationError) {
      QRCode.toDataURL(currentUpiUri, {
        errorCorrectionLevel: 'M',
        margin: 2,
        width: 320,
        color: {
          dark: '#050505',
          light: '#FFFFFF',
        },
      })
        .then((url) => {
          if (isMounted) setQrDataUrl(url);
        })
        .catch(() => {
          if (isMounted) setQrDataUrl('');
        });
    }

    return () => {
      isMounted = false;
    };
  }, [currentUpiUri, validatedAmount, validationError]);

  const handleCopyUpiId = async () => {
    const success = await copyToClipboard(upiConfig.id);
    if (success) {
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2500);
    } else {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  const handlePayNow = () => {
    if (validationError || validatedAmount <= 0) return;
    // Launch deep link to trigger Android/browser UPI app chooser
    window.location.href = currentUpiUri;
  };

  return (
    <div className="card-brutal bg-white p-6 sm:p-8 shadow-brutal-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b-3 border-ink pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <NeoBadge variant="accent" rotate="-1">
              FAST & DIRECT
            </NeoBadge>
            <span className="font-mono text-xs text-gray-700 font-bold hidden sm:inline">
              // ZERO INTERMEDIARY FEES
            </span>
          </div>
          <h3 className="font-mono text-2xl font-bold uppercase text-ink mt-1">
            PAY WITH UPI
          </h3>
          <p className="font-sans text-xs text-gray-700 mt-0.5">
            Enter an amount, scan the QR code from your phone, or open your UPI app directly.
          </p>
        </div>

        <div className="font-mono text-xs text-right">
          <span className="bg-lime-100 px-2.5 py-1 border-2 border-ink font-bold shadow-[2px_2px_0px_#050505]">
            PAYEE: {upiConfig.payeeName}
          </span>
        </div>
      </div>

      {/* Main Grid: Left Controls, Right QR on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Controls Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Preset Buttons */}
          <div>
            <label className="block font-mono text-xs font-bold uppercase text-ink mb-2">
              SELECT AMOUNT (INR):
            </label>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {upiConfig.suggestedAmounts.map((preset) => {
                const isSelected = selectedPreset === preset;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetSelect(preset)}
                    className={`py-2.5 px-2 border-2 border-ink font-mono text-sm sm:text-base font-bold transition-all ${
                      isSelected
                        ? 'bg-accent text-ink shadow-brutal-sm -translate-y-0.5'
                        : 'bg-bg text-ink hover:bg-white shadow-[2px_2px_0px_#050505]'
                    }`}
                  >
                    {formatInr(preset)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Amount Input */}
          <div>
            <label htmlFor="custom-amount" className="block font-mono text-xs font-bold uppercase text-ink mb-1">
              OR ENTER CUSTOM AMOUNT:
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-base font-bold text-gray-700">
                ₹
              </span>
              <input
                id="custom-amount"
                type="text"
                inputMode="numeric"
                value={amountInput}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="Enter amount (e.g. 750)"
                className={`w-full pl-8 pr-4 py-3 border-2 font-mono text-base font-bold text-ink focus:outline-none transition-colors ${
                  validationError
                    ? 'border-warm bg-rose-50'
                    : 'border-ink bg-bg focus:bg-white'
                }`}
              />
            </div>
            {validationError ? (
              <p className="mt-1.5 font-mono text-xs text-rose-700 font-bold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {validationError}
              </p>
            ) : (
              <p className="mt-1 font-mono text-[11px] text-gray-700">
                Supports ₹{upiConfig.minAmount} to ₹{upiConfig.maxAmount.toLocaleString('en-IN')}. The QR code updates automatically.
              </p>
            )}
          </div>

          {/* UPI ID Info Box & Copy Action */}
          <div className="p-4 border-2 border-ink bg-bg space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[10px] text-gray-700 font-bold uppercase block">
                  OFFICIAL UPI ID
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-ink select-all">
                  {upiConfig.id}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyUpiId}
                className="btn-brutal-base bg-white text-ink hover:bg-gray-100 text-xs px-3 py-1.5 self-start sm:self-auto"
                aria-label="Copy UPI ID to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1 text-accent-hover" />
                    COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1" />
                    COPY UPI ID
                  </>
                )}
              </button>
            </div>

            {copyError && (
              <p className="font-mono text-[11px] text-rose-700 font-bold">
                Couldn't auto-copy. Please manually copy {upiConfig.id}
              </p>
            )}
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-2 pt-1">
            <BrutalistButton
              variant="accent"
              size="lg"
              onClick={handlePayNow}
              disabled={Boolean(validationError) || validatedAmount <= 0}
              className="w-full text-base"
            >
              <Smartphone className="w-5 h-5 mr-2" /> PAY {formatInr(validatedAmount)} NOW (OPEN UPI APP)
            </BrutalistButton>
            <p className="font-sans text-[11px] text-gray-600 text-center">
              On mobile devices, tapping <strong>Pay Now</strong> launches your installed UPI application (GPay, PhonePe, Paytm, BHIM, CRED).
            </p>
          </div>

          {/* Privacy & Safe Handoff Note */}
          <div className="p-3 bg-blue-50 border border-primary text-[11px] font-mono text-primary flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              SwipePix does not collect, receive, or store your UPI PIN or bank credentials. All transactions execute strictly inside your banking application.
            </span>
          </div>
        </div>

        {/* Right Column: High-Contrast QR Code Stage */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="card-brutal bg-white p-5 text-center w-full max-w-xs sm:max-w-sm shadow-brutal flex flex-col items-center">
            {/* Stamp */}
            <div className="mb-2">
              <span className="font-mono text-[11px] bg-ink text-accent px-2 py-0.5 border border-ink font-bold uppercase tracking-wider">
                SCAN TO PAY
              </span>
            </div>

            <div className="font-mono text-2xl font-bold text-ink mb-2">
              {formatInr(validatedAmount)}
            </div>

            {/* QR Code Container (High Scan Reliability) */}
            <div className="bg-white p-3 border-2 border-ink rounded-lg shadow-inner my-1">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt={`UPI payment QR code for ${formatInr(validatedAmount)} to SwipePix`}
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto"
                />
              ) : (
                <div className="w-56 h-56 sm:w-64 sm:h-64 flex flex-col items-center justify-center bg-gray-50 border border-gray-200 text-gray-400 font-mono text-xs">
                  <QrCode className="w-12 h-12 mb-2 text-gray-400" />
                  Generating QR...
                </div>
              )}
            </div>

            {/* Payee Info */}
            <div className="mt-3 font-mono text-xs text-gray-700 space-y-0.5">
              <div className="font-bold text-ink">{upiConfig.payeeName}</div>
              <div className="text-[11px] text-gray-700 font-bold">{upiConfig.id}</div>
            </div>

            {/* Supported App Badges */}
            <div className="mt-3 pt-3 border-t border-dashed border-gray-300 w-full">
              <span className="text-[9px] font-mono uppercase text-gray-700 font-bold block mb-1.5">
                SUPPORTED UPI APPS:
              </span>
              <div className="flex flex-wrap justify-center gap-1 text-[10px] font-mono font-bold">
                <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-300">GPay</span>
                <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-300">PhonePe</span>
                <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-300">Paytm</span>
                <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-300">BHIM</span>
                <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-300">CRED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
