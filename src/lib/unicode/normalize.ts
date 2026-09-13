// Text normalization and character safety helper module

import { ACCENT_MAP, toCharArray } from './mappings';

/**
 * Normalizes Spanish accented characters (á -> a, é -> e, etc.) while preserving Ñ/ñ,
 * emojis, symbols, numbers, and spacing intact.
 */
export function normalizeSpanishText(input: string): string {
  if (!input) return '';
  const chars = toCharArray(input);
  return chars.map((char) => ACCENT_MAP[char] || char).join('');
}

/**
 * Sanitizes input text for character safety:
 * Ensures string bounds, removes unsafe control characters, preserves emojis & symbols.
 */
export function sanitizeInput(input: string, maxLength: number = 300): string {
  if (typeof input !== 'string') return '';
  const clean = input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
  return clean.slice(0, maxLength);
}
