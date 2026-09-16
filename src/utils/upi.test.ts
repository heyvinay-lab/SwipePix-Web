import { describe, it, expect } from 'vitest';
import { validateUpiAmount, buildUpiUri, formatInr } from './upi';
import { DONATION_CONFIG } from '../config/donation';

describe('UPI Utility Functions', () => {
  const upiConfig = DONATION_CONFIG.upi;

  describe('buildUpiUri', () => {
    it('1. Generates correct URI for default amount (300)', () => {
      const uri = buildUpiUri(upiConfig, 300);
      expect(uri).toContain('pa=6204078366@kotak');
      expect(uri).toContain('pn=Vinay+Kumar');
      expect(uri).toContain('am=300');
      expect(uri).toContain('cu=INR');
      expect(uri).toContain('mc=0000');
      expect(uri).toContain('mode=01');
      expect(uri).toContain('purpose=00');
    });

    it('2. Generates correct URI for ₹100', () => {
      const uri = buildUpiUri(upiConfig, 100);
      expect(uri).toContain('am=100');
    });

    it('3. Generates correct URI for ₹300', () => {
      const uri = buildUpiUri(upiConfig, 300);
      expect(uri).toContain('am=300');
    });

    it('4. Generates correct URI for ₹500', () => {
      const uri = buildUpiUri(upiConfig, 500);
      expect(uri).toContain('am=500');
    });

    it('5. Generates correct URI for custom amount (e.g. 750)', () => {
      const uri = buildUpiUri(upiConfig, 750);
      expect(uri).toContain('am=750');
      expect(uri).toContain('cu=INR');
    });

    it('6. UPI ID is accurately preserved', () => {
      const uri = buildUpiUri(upiConfig, 300);
      expect(uri).toContain('pa=6204078366@kotak');
    });

    it('7. Payee name is properly encoded', () => {
      const uri = buildUpiUri(upiConfig, 300);
      expect(uri).toContain('pn=Vinay+Kumar');
    });

    it('8. Currency is set to INR', () => {
      const uri = buildUpiUri(upiConfig, 300);
      expect(uri).toContain('cu=INR');
    });

    it('9. URIs differ when amount changes', () => {
      const uri100 = buildUpiUri(upiConfig, 100);
      const uri300 = buildUpiUri(upiConfig, 300);
      expect(uri100).not.toEqual(uri300);
    });
  });

  describe('validateUpiAmount', () => {
    it('validates standard positive integers', () => {
      const res = validateUpiAmount('300', upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(true);
      expect(res.amount).toBe(300);
    });

    it('validates number inputs directly', () => {
      const res = validateUpiAmount(500, upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(true);
      expect(res.amount).toBe(500);
    });

    it('rejects zero', () => {
      const res = validateUpiAmount('0', upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('rejects negative numbers', () => {
      const res = validateUpiAmount('-50', upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('rejects non-numeric characters', () => {
      const res = validateUpiAmount('abc', upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('rejects amounts exceeding maxAmount', () => {
      const res = validateUpiAmount('150000', upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(false);
      expect(res.error).toContain('cannot exceed');
    });

    it('accepts valid decimal amounts with up to 2 decimal places', () => {
      const res = validateUpiAmount('150.50', upiConfig.minAmount, upiConfig.maxAmount);
      expect(res.isValid).toBe(true);
      expect(res.amount).toBe(150.5);
    });
  });

  describe('formatInr', () => {
    it('formats 300 as ₹300', () => {
      expect(formatInr(300)).toBe('₹300');
    });

    it('formats 1000 as ₹1,000', () => {
      expect(formatInr(1000)).toBe('₹1,000');
    });
  });
});
