import { ALL_STYLES, type StyleDefinition } from '@/data/styles';
import { sanitizeInput } from './normalize';

/**
 * Transforms text using the requested style ID from the master registry.
 */
export function transformText(text: string, styleInput: string | StyleDefinition): string {
  const cleanInput = sanitizeInput(text.trim() || 'Texto de Ejemplo', 300);
  const style = typeof styleInput === 'string'
    ? ALL_STYLES.find((s) => s.id === styleInput)
    : styleInput;
  if (!style) return cleanInput;
  return style.transform(cleanInput);
}

/**
 * Retrieves all styles in the registry.
 */
export function getAllStyles(): StyleDefinition[] {
  return ALL_STYLES;
}

/**
 * Retrieves styles filtered by category.
 */
export function getStylesByCategory(category: string): StyleDefinition[] {
  if (!category || category === 'all' || category === 'Todas' || category === 'Todos') {
    return ALL_STYLES;
  }
  return ALL_STYLES.filter((s) => s.category.toLowerCase() === category.toLowerCase());
}

/**
 * Searches styles by keyword in name, category, or tags.
 */
export function searchStyles(query: string, category: string = 'all'): StyleDefinition[] {
  const trimmed = query.trim().toLowerCase();

  return ALL_STYLES.filter((style) => {
    const matchesCategory =
      category === 'all' || category === 'Todas' || category === 'Todos'
        ? true
        : style.category.toLowerCase() === category.toLowerCase();

    const matchesQuery =
      trimmed === '' ||
      style.name.toLowerCase().includes(trimmed) ||
      style.category.toLowerCase().includes(trimmed) ||
      style.tags.some((tag) => tag.toLowerCase().includes(trimmed));

    return matchesCategory && matchesQuery;
  });
}

/**
 * Retrieves featured styles.
 */
export function getFeaturedStyles(): StyleDefinition[] {
  return ALL_STYLES.filter((s) => s.featured);
}
