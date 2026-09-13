import { mapAlphabet } from '@/lib/unicode/transformations';

export interface StyleDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  transform: (text: string) => string;
  tags: string[];
  popularity: number;
  featured?: boolean;
}

export const CURSIVE_STYLES: StyleDefinition[] = [
  {
    id: 'cur-1',
    name: 'Cursiva Clásica Bold',
    category: 'Cursivas',
    description: 'Letras cursivas manuscritas con trazo grueso y elegante.',
    transform: (t) => mapAlphabet(t, 'boldScript'),
    tags: ['cursiva', 'script', 'bold', 'elegante', 'manuscrita'],
    popularity: 99,
    featured: true
  },
  {
    id: 'cur-2',
    name: 'Cursiva Fina Caligráfica',
    category: 'Cursivas',
    description: 'Trazo fino caligráfico para firmas y perfiles de lujo.',
    transform: (t) => mapAlphabet(t, 'script'),
    tags: ['cursiva', 'fina', 'caligrafia', 'elegante'],
    popularity: 97,
    featured: true
  },
  {
    id: 'cur-3',
    name: 'Cursiva Inclinada Itálica',
    category: 'Cursivas',
    description: 'Inclinación estándar elegante para párrafos y descripciones.',
    transform: (t) => mapAlphabet(t, 'italic'),
    tags: ['cursiva', 'italica', 'inclinada'],
    popularity: 92
  },
  {
    id: 'cur-4',
    name: 'Cursiva Negrita Inclinada',
    category: 'Cursivas',
    description: 'Combinación de trazo grueso e inclinación dinámica.',
    transform: (t) => mapAlphabet(t, 'boldItalic'),
    tags: ['cursiva', 'negrita', 'bold italic'],
    popularity: 90
  },
  {
    id: 'cur-5',
    name: 'Cursiva Sans Inclinada',
    category: 'Cursivas',
    description: 'Cursiva moderna limpia sin serifa.',
    transform: (t) => mapAlphabet(t, 'sansSerifItalic'),
    tags: ['cursiva', 'sans', 'moderna'],
    popularity: 88
  },
  {
    id: 'cur-6',
    name: 'Cursiva Sans Negrita Inclinada',
    category: 'Cursivas',
    description: 'Sans serif inclinada de alta densidad visual.',
    transform: (t) => mapAlphabet(t, 'sansSerifBoldItalic'),
    tags: ['cursiva', 'sans', 'bold'],
    popularity: 87
  }
];

// Add 15 framed cursive variations
const cursiveDecorators = [
  { prefix: '✨ ', suffix: ' ✨', tag: 'destellos' },
  { prefix: '🌸 ', suffix: ' 🌸', tag: 'flores' },
  { prefix: '💖 ', suffix: ' 💖', tag: 'corazon' },
  { prefix: '🦋 ', suffix: ' 🦋', tag: 'mariposa' },
  { prefix: '🌿 ', suffix: ' 🌿', tag: 'hojas' },
  { prefix: '🌙 ', suffix: ' 🌙', tag: 'luna' },
  { prefix: '🕊️ ', suffix: ' 🕊️', tag: 'paloma' },
  { prefix: '📜 ', suffix: ' 📜', tag: 'pergamino' },
  { prefix: '💎 ', suffix: ' 💎', tag: 'diamante' },
  { prefix: '👑 ', suffix: ' 👑', tag: 'corona' },
  { prefix: '┊ ', suffix: ' ┊', tag: 'barras' },
  { prefix: '✦ ', suffix: ' ✦', tag: 'estrella' },
  { prefix: '✿ ', suffix: ' ✿', tag: 'flor' },
  { prefix: '♡ ', suffix: ' ♡', tag: 'corazon-lineal' },
  { prefix: '⚡ ', suffix: ' ⚡', tag: 'rayo' }
];

cursiveDecorators.forEach((dec, idx) => {
  CURSIVE_STYLES.push({
    id: 'cur-dec-' + (idx + 1),
    name: 'Cursiva Decorada ' + dec.tag,
    category: 'Cursivas',
    description: 'Cursiva enmarcada con adorno ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'boldScript') + dec.suffix,
    tags: ['cursiva', 'decorada', dec.tag],
    popularity: 85 - idx
  });
});
