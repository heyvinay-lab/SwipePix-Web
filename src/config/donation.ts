/**
 * Centralized donation and patronage configuration for SwipePix.
 *
 * All payment parameters are centralized here.
 * No payment gateways, cards, or unverified merchant links are active unless configured here.
 */

export interface UpiConfig {
  id: string;
  payeeName: string;
  currency: string;
  merchantCode: string;
  mode: string;
  purpose: string;
  minAmount: number;
  maxAmount: number;
  suggestedAmounts: number[];
  defaultAmount: number;
}

export interface GithubSponsorsConfig {
  profileUrl: string;
  embedUrl: string;
}

export interface CardPaymentConfig {
  enabled: boolean;
  paymentUrl: string | null;
}

export interface DonationConfig {
  upi: UpiConfig;
  githubSponsors: GithubSponsorsConfig;
  card: CardPaymentConfig;
}

export const DONATION_CONFIG: DonationConfig = {
  upi: {
    id: '6204078366@kotak',
    payeeName: 'Vinay Kumar',
    currency: 'INR',
    merchantCode: '0000',
    mode: '01',
    purpose: '00',
    minAmount: 1,
    maxAmount: 100000,
    suggestedAmounts: [100, 300, 500, 1000],
    defaultAmount: 300,
  },
  githubSponsors: {
    profileUrl: 'https://github.com/sponsors/heyvinay-lab',
    embedUrl: 'https://github.com/sponsors/heyvinay-lab/button',
  },
  card: {
    // Strictly false and null until a real provider URL is supplied
    enabled: false,
    paymentUrl: null,
  },
};
