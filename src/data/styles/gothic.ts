import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const GOTHIC_STYLES: StyleDefinition[] = [
  {
    id: 'goth-1',
    name: 'Gótica Medieval Fraktur',
    category: 'Góticas',
    description: 'Estilo tipográfico medieval alemán clásico.',
    transform: (t) => mapAlphabet(t, 'fraktur'),
    tags: ['gotica', 'gothic', 'medieval', 'fraktur'],
    popularity: 96,
    featured: true
  },
  {
    id: 'goth-2',
    name: 'Gótica Negrita Intensa',
    category: 'Góticas',
    description: 'Trazo grueso medieval de máximo impacto visual.',
    transform: (t) => mapAlphabet(t, 'boldFraktur'),
    tags: ['gotica', 'negrita', 'dark', 'gaming'],
    popularity: 98,
    featured: true
  }
];

// Add 15 framed gothic variations
const gothicDecorators = [
  { prefix: '🏰 ', suffix: ' 🏰', tag: 'castillo' },
  { prefix: '⚔️ ', suffix: ' ⚔️', tag: 'espadas' },
  { prefix: '☠️ ', suffix: ' ☠️', tag: 'calavera' },
  { prefix: '🥀 ', suffix: ' 🥀', tag: 'rosa-negra' },
  { prefix: '🍷 ', suffix: ' 🍷', tag: 'copa' },
  { prefix: '🦇 ', suffix: ' 🦇', tag: 'murcielago' },
  { prefix: '🕷️ ', suffix: ' 🕷️', tag: 'araña' },
  { prefix: '🗡️ ', suffix: ' 🗡️', tag: 'daga' },
  { prefix: '🖤 ', suffix: ' 🖤', tag: 'corazon-negro' },
  { prefix: '📜 ', suffix: ' 📜', tag: 'manuscrito' },
  { prefix: '꧁༺ ', suffix: ' ༻꧂', tag: 'escudo-real' },
  { prefix: '⦅ ', suffix: ' ⦆', tag: 'parentesis-medieval' },
  { prefix: '✙ ', suffix: ' ✙', tag: 'cruz-gotica' },
  { prefix: '⛓️ ', suffix: ' ⛓️', tag: 'cadenas' },
  { prefix: '👑 ', suffix: ' 👑', tag: 'corona-real' }
];

gothicDecorators.forEach((dec, idx) => {
  GOTHIC_STYLES.push({
    id: 'goth-dec-' + (idx + 1),
    name: 'Gótica ' + dec.tag,
    category: 'Góticas',
    description: 'Estilo gótico enmarcado con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'boldFraktur') + dec.suffix,
    tags: ['gotica', 'medieval', dec.tag],
    popularity: 88 - idx
  });
});
