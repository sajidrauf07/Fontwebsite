// 350+ Style Definitions for Letras Bonitas Unicode Fancy Font Generator
// Centralized Registry re-export for full backward compatibility

import { ALL_STYLES, type StyleDefinition } from './styles';

export type CategoryType =
  | 'All'
  | 'Popular'
  | 'Bold'
  | 'Italic'
  | 'Bold Italic'
  | 'Cursive'
  | 'Elegant'
  | 'Gothic'
  | 'Double Struck'
  | 'Monospace'
  | 'Sans Serif'
  | 'Small Caps'
  | 'Tiny'
  | 'Superscript'
  | 'Subscript'
  | 'Circled'
  | 'Squared'
  | 'Parenthesized'
  | 'Fullwidth'
  | 'Bubble'
  | 'Aesthetic'
  | 'Decorative'
  | 'Hearts'
  | 'Stars'
  | 'Symbols'
  | 'Glitch'
  | 'Strikethrough'
  | 'Underline'
  | 'Upside Down'
  | 'Gaming';

export interface FontStyle {
  id: string;
  name: string;
  category: string;
  description: string;
  transform: (text: string) => string;
  tags: string[];
  popularity: number;
  featured?: boolean;
  isExperimental?: boolean;
  supportedCharacters?: string;
}

export const CATEGORIES: { id: CategoryType; label: string; icon?: string }[] = [
  { id: 'All', label: 'Todas las fuentes' },
  { id: 'Popular', label: '🔥 Más Populares' },
  { id: 'Cursive', label: '✒️ Cursiva' },
  { id: 'Elegant', label: '✨ Elegantes' },
  { id: 'Gothic', label: '🏰 Góticas' },
  { id: 'Bold', label: '💪 Negrita' },
  { id: 'Italic', label: '📐 Cursiva simple' },
  { id: 'Bold Italic', label: '⚡ Negrita Cursiva' },
  { id: 'Double Struck', label: '🏛️ Doble Trazo' },
  { id: 'Monospace', label: '💻 Monoespaciado' },
  { id: 'Sans Serif', label: '🔹 Sans Serif' },
  { id: 'Small Caps', label: '🔤 Versalitas' },
  { id: 'Tiny', label: '🔍 Diminutas' },
  { id: 'Superscript', label: '⬆️ Superíndice' },
  { id: 'Subscript', label: '⬇️ Subíndice' },
  { id: 'Circled', label: '⭕ Círculos' },
  { id: 'Squared', label: '🔳 Cuadrados' },
  { id: 'Parenthesized', label: '⒜ Paréntesis' },
  { id: 'Fullwidth', label: '⛩️ Fullwidth / Japonesas' },
  { id: 'Bubble', label: '🫧 Burbujas' },
  { id: 'Aesthetic', label: '🌸 Aesthetic' },
  { id: 'Decorative', label: '👑 Decoradas' },
  { id: 'Hearts', label: '💖 Corazones' },
  { id: 'Stars', label: '⭐ Estrellas' },
  { id: 'Symbols', label: '☯️ Símbolos' },
  { id: 'Glitch', label: '👾 Glitch / Zalgo' },
  { id: 'Strikethrough', label: '̶ Tachado' },
  { id: 'Underline', label: '̲ Subrayado' },
  { id: 'Upside Down', label: '🙃 Al Revés' },
  { id: 'Gaming', label: '🎮 Gaming & Nicknames' }
];

export const ALL_FONT_STYLES: FontStyle[] = ALL_STYLES.map((s) => ({
  id: s.id,
  name: s.name,
  category: s.category,
  description: s.description || s.name,
  transform: s.transform,
  tags: s.tags || [s.category.toLowerCase(), s.name.toLowerCase()],
  popularity: s.popularity || 85,
  featured: s.featured,
  supportedCharacters: 'A-Z, a-z, 0-9, Ñ, ñ'
}));
