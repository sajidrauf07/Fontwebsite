import { ALL_STYLES, TOTAL_STYLE_COUNT } from '@/data/styles';

export interface StyleValidationResult {
  isValid: boolean;
  totalStyles: number;
  uniqueIds: number;
  duplicateIds: string[];
  invalidTransformations: string[];
}

export function validateStyleRegistry(): StyleValidationResult {
  const ids = new Set<string>();
  const duplicateIds: string[] = [];
  const invalidTransformations: string[] = [];

  const sampleTestText = 'Hola España Árbol 123 ✨';

  ALL_STYLES.forEach((style) => {
    // Check duplicate ID
    if (ids.has(style.id)) {
      duplicateIds.push(style.id);
    } else {
      ids.add(style.id);
    }

    // Check transformation validity
    try {
      const res = style.transform(sampleTestText);
      if (!res || typeof res !== 'string') {
        invalidTransformations.push(style.id);
      }
    } catch {
      invalidTransformations.push(style.id);
    }
  });

  const isValid =
    TOTAL_STYLE_COUNT >= 350 &&
    ids.size >= 350 &&
    duplicateIds.length === 0 &&
    invalidTransformations.length === 0;

  return {
    isValid,
    totalStyles: TOTAL_STYLE_COUNT,
    uniqueIds: ids.size,
    duplicateIds,
    invalidTransformations
  };
}
