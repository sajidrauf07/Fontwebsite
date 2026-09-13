import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const BOLD_STYLES: StyleDefinition[] = [
  {
    id: 'bold-1',
    name: 'Negrita Matemática (Serif)',
    category: 'Negritas',
    description: 'Caracteres en negrita de alta visibilidad para títulos.',
    transform: (t) => mapAlphabet(t, 'bold'),
    tags: ['negrita', 'bold', 'gruesa', 'serif'],
    popularity: 98,
    featured: true
  },
  {
    id: 'bold-2',
    name: 'Negrita Sans Serif Moderna',
    category: 'Negritas',
    description: 'Negrita moderna limpia y minimalista sin remates.',
    transform: (t) => mapAlphabet(t, 'sansSerifBold'),
    tags: ['negrita', 'sans', 'bold', 'moderna'],
    popularity: 97,
    featured: true
  },
  {
    id: 'bold-3',
    name: 'Negrita Cursiva Serif',
    category: 'Negritas',
    description: 'Trazo grueso combinado con elegante inclinación.',
    transform: (t) => mapAlphabet(t, 'boldItalic'),
    tags: ['negrita', 'cursiva', 'italic'],
    popularity: 92
  },
  {
    id: 'bold-4',
    name: 'Negrita Cursiva Sans',
    category: 'Negritas',
    description: 'Sans serif inclinada de gran volumen visual.',
    transform: (t) => mapAlphabet(t, 'sansSerifBoldItalic'),
    tags: ['negrita', 'sans', 'italic'],
    popularity: 90
  }
];

// Add 15 framed bold variations
const boldDecorators = [
  { prefix: '🔥 ', suffix: ' 🔥', tag: 'fuego' },
  { prefix: '💪 ', suffix: ' 💪', tag: 'fuerza' },
  { prefix: '⚡ ', suffix: ' ⚡', tag: 'rayo' },
  { prefix: '🚀 ', suffix: ' 🚀', tag: 'cohete' },
  { prefix: '💥 ', suffix: ' 💥', tag: 'explosion' },
  { prefix: '👑 ', suffix: ' 👑', tag: 'corona' },
  { prefix: '🎯 ', suffix: ' 🎯', tag: 'diana' },
  { prefix: '🏆 ', suffix: ' 🏆', tag: 'trofeo' },
  { prefix: '⚔️ ', suffix: ' ⚔️', tag: 'espadas' },
  { prefix: '🛡️ ', suffix: ' 🛡️', tag: 'escudo' },
  { prefix: '✦ ', suffix: ' ✦', tag: 'estrella' },
  { prefix: '【 ', suffix: ' 】', tag: 'corchete' },
  { prefix: '『 ', suffix: ' 』', tag: 'esquina' },
  { prefix: '► ', suffix: ' ◄', tag: 'flechas' },
  { prefix: '┊ ', suffix: ' ┊', tag: 'linea' }
];

boldDecorators.forEach((dec, idx) => {
  BOLD_STYLES.push({
    id: 'bold-dec-' + (idx + 1),
    name: 'Negrita ' + dec.tag,
    category: 'Negritas',
    description: 'Negrita destacada con marco ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'boldSans') + dec.suffix,
    tags: ['negrita', 'bold', dec.tag],
    popularity: 85 - idx
  });
});
