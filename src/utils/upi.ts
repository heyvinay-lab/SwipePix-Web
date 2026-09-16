import { UpiConfig } from '../config/donation';

export interface AmountValidationResult {
  isValid: boolean;
  amount: number | null;
  error?: string;
}

/**
 * Validates a user-supplied amount for UPI payment.
 * Rules:
 * - Numeric input only
 * - No negative values
 * - No zero
 * - Reject invalid decimal formats (max 2 decimal places)
 * - Must be between minAmount and maxAmount
 */
export function validateUpiAmount(
  input: string | number,
  minAmount = 1,
  maxAmount = 100000
): AmountValidationResult {
  if (typeof input === 'number') {
    if (isNaN(input) || !isFinite(input)) {
      return { isValid: false, amount: null, error: 'Please enter a valid numeric amount' };
    }
    if (input < minAmount) {
      return { isValid: false, amount: null, error: `Amount must be at least ₹${minAmount}` };
    }
    if (input > maxAmount) {
      return { isValid: false, amount: null, error: `Amount cannot exceed ₹${maxAmount.toLocaleString('en-IN')}` };
    }
    // Round to 2 decimals max if decimal
    const rounded = Math.round(input * 100) / 100;
    return { isValid: true, amount: rounded };
  }

  const trimmed = input.trim();
  if (!trimmed) {
    return { isValid: false, amount: null, error: 'Please enter an amount' };
  }

  // Check if string contains only digits and optional single decimal point
  const numericRegex = /^\d+(\.\d{1,2})?$/;
  if (!numericRegex.test(trimmed)) {
    return { isValid: false, amount: null, error: 'Please enter a valid amount (e.g. 300)' };
  }

  const parsed = parseFloat(trimmed);
  if (isNaN(parsed) || parsed <= 0) {
    return { isValid: false, amount: null, error: 'Amount must be greater than zero' };
  }

  if (parsed < minAmount) {
    return { isValid: false, amount: null, error: `Amount must be at least ₹${minAmount}` };
  }

  if (parsed > maxAmount) {
    return { isValid: false, amount: null, error: `Amount cannot exceed ₹${maxAmount.toLocaleString('en-IN')}` };
  }

  return { isValid: true, amount: parsed };
}

/**
 * Generates the official UPI deep-link URI with proper query encoding.
 * Example format:
 * upi://pay?pa=6204078366@kotak&pn=Vinay%20Kumar&mc=0000&mode=01&purpose=00&am=300&cu=INR
 */
export function buildUpiUri(config: UpiConfig, amount: number | string): string {
  const params = new URLSearchParams();
  params.set('pa', config.id);
  params.set('pn', config.payeeName);
  params.set('mc', config.merchantCode);
  params.set('mode', config.mode);
  params.set('purpose', config.purpose);

  // If amount is valid number or non-empty string, set am
  if (amount !== undefined && amount !== null && amount !== '') {
    params.set('am', String(amount));
  }

  params.set('cu', config.currency);

  // Return formatted URI with decoded @ for broad UPI app compatibility
  const queryString = params.toString().replace(/%40/g, '@');
  return `upi://pay?${queryString}`;
}

/**
 * Formats a number as INR currency (e.g. ₹300 or ₹1,000)
 */
export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Safe clipboard copy with legacy fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
