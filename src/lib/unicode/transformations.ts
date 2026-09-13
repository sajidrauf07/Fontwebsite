// Transformation helper utilities for Letras Bonitas Unicode Engine

import {
  NORMAL_UPPER,
  NORMAL_LOWER,
  NORMAL_DIGITS,
  UNICODE_MAPS,
  ACCENT_MAP,
  UPSIDE_DOWN_MAP,
  ZALGO_UPPER,
  ZALGO_LOWER,
  ZALGO_MIDDLE,
  toCharArray,
  type AlphabetStyleKey
} from './mappings';

export type { AlphabetStyleKey };

/**
 * Transforms text using mapped Unicode character sets.
 * Safely preserves emojis, spaces, unsupported symbols, and numbers.
 */
export function mapAlphabet(text: string, styleKey: AlphabetStyleKey): string {
  const mapData = UNICODE_MAPS[styleKey];
  if (!mapData) return text;

  const upperMapped = mapData.upper;
  const lowerMapped = mapData.lower;
  const digitsMapped = mapData.digits;

  const chars = toCharArray(text);

  return chars.map(char => {
    // Normalization check for Spanish accents
    const normalizedChar = ACCENT_MAP[char] || char;

    const uIdx = NORMAL_UPPER.indexOf(normalizedChar);
    if (uIdx !== -1 && upperMapped[uIdx]) {
      return upperMapped[uIdx];
    }

    const lIdx = NORMAL_LOWER.indexOf(normalizedChar);
    if (lIdx !== -1 && lowerMapped[lIdx]) {
      return lowerMapped[lIdx];
    }

    const dIdx = NORMAL_DIGITS.indexOf(normalizedChar);
    if (dIdx !== -1 && digitsMapped[dIdx]) {
      return digitsMapped[dIdx];
    }

    return char; // Preserve original emoji, symbol, space or punctuation
  }).join('');
}

/**
 * Applies combining Unicode diacritic marks to each letter (strikethrough, underline, etc.)
 */
export function addCombining(text: string, mark: string): string {
  const chars = toCharArray(text);
  return chars.map(c => {
    // Skip combining on spaces for clean rendering
    if (/\s/.test(c)) return c;
    return c + mark;
  }).join('');
}

/**
 * Turns text upside down and reverses character order
 */
export function transformUpsideDown(text: string): string {
  const chars = toCharArray(text);
  const inverted = chars.map(c => UPSIDE_DOWN_MAP[c] || c);
  return inverted.reverse().join('');
}

/**
 * Creates Zalgo / Glitch effect text (deterministic to avoid hydration mismatch)
 */
export function transformGlitch(text: string, intensity: 'low' | 'medium' | 'high' = 'medium'): string {
  const count = intensity === 'low' ? 1 : intensity === 'medium' ? 2 : 4;
  const chars = toCharArray(text);

  return chars.map((c, charIdx) => {
    if (/\s/.test(c)) return c;
    let res = c;
    const seed = c.codePointAt(0) || 0;
    for (let i = 0; i < count; i++) {
      const h = (seed * 31 + charIdx * 17 + i * 13) & 0x7fffffff;
      const up = ZALGO_UPPER[h % ZALGO_UPPER.length];
      const mid = ZALGO_MIDDLE[(h >> 4) % ZALGO_MIDDLE.length];
      const low = ZALGO_LOWER[(h >> 8) % ZALGO_LOWER.length];
      res += up + (i % 2 === 0 ? mid : low);
    }
    return res;
  }).join('');
}

/**
 * Wraps generated text in decorative prefix and suffix frames
 */
export function wrapFrame(text: string, prefix: string, suffix: string): string {
  return `${prefix}${text}${suffix}`;
}

/**
 * Adds custom spacing between characters
 */
export function spaceOut(text: string, separator: string = ' '): string {
  return toCharArray(text).join(separator);
}
