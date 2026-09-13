import { InstagramSymbolItem } from './types';
import { HEART_SYMBOLS } from './hearts';
import { STAR_SYMBOLS } from './stars';
import { ARROW_SYMBOLS } from './arrows';
import { FLOWER_SYMBOLS } from './flowers';
import { DECORATIVE_SYMBOLS } from './decorative';
import { NATURE_SYMBOLS } from './nature';
import { DOT_SYMBOLS } from './dots';
import { SEPARATOR_SYMBOLS } from './separators';
import { BRACKET_SYMBOLS } from './brackets';
import { CHECK_SYMBOLS } from './checks';
import { AESTHETIC_SYMBOLS } from './aesthetic';
import { MINIMAL_SYMBOLS } from './minimal';
import { SPECIAL_SYMBOLS } from './special';

export * from './types';

export const ALL_INSTAGRAM_SYMBOLS: InstagramSymbolItem[] = [
  ...HEART_SYMBOLS,
  ...STAR_SYMBOLS,
  ...ARROW_SYMBOLS,
  ...FLOWER_SYMBOLS,
  ...DECORATIVE_SYMBOLS,
  ...NATURE_SYMBOLS,
  ...DOT_SYMBOLS,
  ...SEPARATOR_SYMBOLS,
  ...BRACKET_SYMBOLS,
  ...CHECK_SYMBOLS,
  ...AESTHETIC_SYMBOLS,
  ...MINIMAL_SYMBOLS,
  ...SPECIAL_SYMBOLS
];

export const TOTAL_SYMBOL_COUNT = ALL_INSTAGRAM_SYMBOLS.length;

// Development Validation Function
export function validateSymbolRegistry() {
  const ids = new Set<string>();
  const symbolValues = new Set<string>();
  const duplicateIds: string[] = [];
  const duplicateValues: string[] = [];
  const emptySymbols: string[] = [];

  ALL_INSTAGRAM_SYMBOLS.forEach((item) => {
    // Check ID uniqueness
    if (ids.has(item.id)) {
      duplicateIds.push(item.id);
    } else {
      ids.add(item.id);
    }

    // Check symbol value non-emptiness & uniqueness
    if (!item.symbol || !item.symbol.trim()) {
      emptySymbols.push(item.id);
    } else if (symbolValues.has(item.symbol)) {
      duplicateValues.push(item.symbol);
    } else {
      symbolValues.add(item.symbol);
    }
  });

  return {
    isValid: duplicateIds.length === 0 && emptySymbols.length === 0 && duplicateValues.length === 0,
    totalSymbols: TOTAL_SYMBOL_COUNT,
    uniqueIds: ids.size,
    uniqueValues: symbolValues.size,
    duplicateIds,
    duplicateValues,
    emptySymbols
  };
}
