// Cursive alphabet data for /letras-cursivas/abecedario-cursivo/

import { UNICODE_MAPS, type AlphabetStyleKey } from '@/lib/unicode/mappings';

export interface AlphabetLetter {
  original: string;
  cursive: string;
  isSpecial?: boolean; // true for Ñ/ñ (no Unicode cursive equivalent)
}

export interface CursiveAlphabetStyle {
  id: string;
  name: string;
  description: string;
  styleKey: AlphabetStyleKey;
}

// Spanish alphabet including Ñ
const SPANISH_UPPER = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const SPANISH_LOWER = 'abcdefghijklmnñopqrstuvwxyz';

// Standard A-Z for Unicode map lookup
const STANDARD_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const STANDARD_LOWER = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Build an array of AlphabetLetter objects for a given style.
 * Ñ/ñ is preserved as-is since it has no Unicode cursive equivalent.
 */
export function buildAlphabet(
  styleKey: AlphabetStyleKey,
  caseType: 'upper' | 'lower'
): AlphabetLetter[] {
  const mapData = UNICODE_MAPS[styleKey];
  if (!mapData) return [];

  const spanish = caseType === 'upper' ? SPANISH_UPPER : SPANISH_LOWER;
  const standard = caseType === 'upper' ? STANDARD_UPPER : STANDARD_LOWER;
  const mapped = caseType === 'upper' ? mapData.upper : mapData.lower;

  return Array.from(spanish).map((char) => {
    const stdIndex = standard.indexOf(char);
    if (stdIndex !== -1 && mapped[stdIndex]) {
      return { original: char, cursive: mapped[stdIndex] };
    }
    // Ñ/ñ or any character without a mapping
    return { original: char, cursive: char, isSpecial: true };
  });
}

/**
 * Build the full cursive alphabet string for copy (uppercase + lowercase).
 */
export function buildFullAlphabetString(styleKey: AlphabetStyleKey): string {
  const upper = buildAlphabet(styleKey, 'upper');
  const lower = buildAlphabet(styleKey, 'lower');
  const upperStr = upper.map((l) => l.cursive).join(' ');
  const lowerStr = lower.map((l) => l.cursive).join(' ');
  return `${upperStr}\n${lowerStr}`;
}

// Cursive styles available for the alphabet viewer
export const ALPHABET_STYLES: CursiveAlphabetStyle[] = [
  {
    id: 'boldScript',
    name: 'Cursiva Clásica',
    description: 'La cursiva más popular con trazos manuscritos gruesos.',
    styleKey: 'boldScript'
  },
  {
    id: 'script',
    name: 'Cursiva Fina',
    description: 'Manuscrita delicada de trazo fino y refinado.',
    styleKey: 'script'
  },
  {
    id: 'italic',
    name: 'Cursiva Inclinada',
    description: 'Inclinación clásica tipo editorial.',
    styleKey: 'italic'
  },
  {
    id: 'boldItalic',
    name: 'Cursiva Negrita',
    description: 'Cursiva con trazo grueso e impactante.',
    styleKey: 'boldItalic'
  },
  {
    id: 'sansSerifItalic',
    name: 'Cursiva Sans',
    description: 'Cursiva moderna y limpia sin serifas.',
    styleKey: 'sansSerifItalic'
  },
  {
    id: 'sansSerifBoldItalic',
    name: 'Cursiva Sans Negrita',
    description: 'Cursiva moderna negrita para títulos.',
    styleKey: 'sansSerifBoldItalic'
  }
];
