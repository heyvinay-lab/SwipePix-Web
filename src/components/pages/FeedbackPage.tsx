import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { SWIPEPIX_CONFIG } from '../../config/swipepix';
import { Send, Copy, Check, MessageSquare } from 'lucide-react';

export const FeedbackPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'Bug Report',
    subject: '',
    message: '',
    appVersion: 'SwipePix v1.0',
    androidVersion: 'Android 14',
    deviceModel: '',
  });

  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured mailto link
    const emailSubject = encodeURIComponent(`[SwipePix Feedback: ${formData.feedbackType}] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `From: ${formData.name} (${formData.email})
Feedback Type: ${formData.feedbackType}
App Version: ${formData.appVersion}
Android Version: ${formData.androidVersion}
Device Model: ${formData.deviceModel || 'Unspecified'}

Message:
${formData.message}`
    );

    // Open native email client directly with structured content
    window.location.href = `mailto:${SWIPEPIX_CONFIG.supportEmail}?subject=${emailSubject}&body=${emailBody}`;

    setSubmittedMessage(
      'Your email client has been launched with your structured feedback. If your email client did not open, you can copy the message below and email it directly to hey@heyvinay.in.'
    );
  };

  const handleCopyPayload = () => {
    const payload = `[SwipePix Feedback: ${formData.feedbackType}]
Subject: ${formData.subject}
From: ${formData.name} <${formData.email}>
App Version: ${formData.appVersion}
Android: ${formData.androidVersion}
Device: ${formData.deviceModel || 'Not provided'}

Message:
${formData.message}`;

    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-16 bg-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          tag="USER VOICE"
          tagVariant="primary"
          title="SEND FEEDBACK & REPORT BUGS"
          subtitle="Encountered an issue or have an idea to make gallery triage faster? We read every submission."
        />

        <div className="card-brutal bg-white p-6 sm:p-10 shadow-brutal-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Top Notice */}
            <div className="p-4 bg-lime-50 border-2 border-ink flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-accent-hover shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-gray-800">
                Because SwipePix is 100% offline and possesses zero tracking servers, feedback is transmitted securely via standard email directly to the developer's inbox.
              </p>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-ink mb-1">
                  YOUR NAME <span className="text-warm">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border-2 border-ink bg-bg font-mono text-xs focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase text-ink mb-1">
                  EMAIL ADDRESS <span className="text-warm">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border-2 border-ink bg-bg font-mono text-xs focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Feedback Type & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-ink mb-1">
                  CATEGORY <span className="text-warm">*</span>
                </label>
                <select
                  value={formData.feedbackType}
                  onChange={(e) => setFormData({ ...formData, feedbackType: e.target.value })}
                  className="w-full p-3 border-2 border-ink bg-bg font-mono text-xs focus:bg-white focus:outline-none"
                >
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="UX / Gesture Feedback">UX / Gesture Feedback</option>
                  <option value="Performance / Lag">Performance / Lag</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono text-xs font-bold uppercase text-ink mb-1">
                  SUBJECT <span className="text-warm">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Brief summary of feedback or issue"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-3 border-2 border-ink bg-bg font-mono text-xs focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Hardware & Version Context */}
            <div className="p-4 border-2 border-ink bg-bg space-y-3">
              <span className="font-mono text-xs font-bold text-gray-700 uppercase block">
                DEVICE CONTEXT (HELPFUL FOR DIAGNOSING BUGS):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-mono text-[10px] font-bold text-gray-600 uppercase mb-1">
                    APP VERSION
                  </label>
                  <input
                    type="text"
                    value={formData.appVersion}
                    onChange={(e) => setFormData({ ...formData, appVersion: e.target.value })}
                    className="w-full p-2 border border-ink bg-white font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold text-gray-600 uppercase mb-1">
                    ANDROID VERSION
                  </label>
                  <input
                    type="text"
                    value={formData.androidVersion}
                    onChange={(e) => setFormData({ ...formData, androidVersion: e.target.value })}
                    className="w-full p-2 border border-ink bg-white font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold text-gray-600 uppercase mb-1">
                    DEVICE MODEL
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Galaxy S24, Pixel 8"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full p-2 border border-ink bg-white font-mono text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div>
              <label className="block font-mono text-xs font-bold uppercase text-ink mb-1">
                DETAILED MESSAGE <span className="text-warm">*</span>
              </label>
              <textarea
                rows={5}
                required
                placeholder="Describe what happened, what you expected, or your feature idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border-2 border-ink bg-bg font-mono text-xs focus:bg-white focus:outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <BrutalistButton variant="primary" size="md" type="submit" className="flex-1 sm:flex-initial">
                <Send className="w-4 h-4 mr-2" /> SEND VIA EMAIL CLIENT
              </BrutalistButton>

              <BrutalistButton
                variant="white"
                size="md"
                type="button"
                onClick={handleCopyPayload}
                disabled={!formData.message}
              >
                {copied ? <Check className="w-4 h-4 mr-1 text-accent-hover" /> : <Copy className="w-4 h-4 mr-1" />}
                {copied ? 'COPIED TO CLIPBOARD' : 'COPY TO CLIPBOARD'}
              </BrutalistButton>
            </div>

            {submittedMessage && (
              <div className="p-4 bg-blue-50 border-2 border-primary text-xs font-mono text-primary mt-4">
                {submittedMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
