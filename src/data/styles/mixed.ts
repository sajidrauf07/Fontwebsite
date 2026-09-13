import { mapAlphabet, transformUpsideDown, transformGlitch } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const MIXED_STYLES: StyleDefinition[] = [
  {
    id: 'mix-1',
    name: 'Al Revés 180 (Upside Down)',
    category: 'Especiales',
    description: 'Texto invertido patas arriba de 180 grados.',
    transform: (t) => transformUpsideDown(t),
    tags: ['al reves', 'invertido', 'upside down'],
    popularity: 92,
    featured: true
  },
  {
    id: 'mix-2',
    name: 'Glitch Hacker Zalgo Medium',
    category: 'Glitch',
    description: 'Efecto de texto corrupto / matrix / zalgo.',
    transform: (t) => transformGlitch(t, 'medium'),
    tags: ['glitch', 'zalgo', 'hacker', 'corrupto'],
    popularity: 94,
    featured: true
  },
  {
    id: 'mix-3',
    name: 'Glitch Caótico Extremo',
    category: 'Glitch',
    description: 'Distorsión máxima de caracteres.',
    transform: (t) => transformGlitch(t, 'high'),
    tags: ['glitch extremo', 'zalgo', 'caos'],
    popularity: 88
  }
];

// Generate bracketed, kaomoji, and mixed enclosers
const mixedEnclosers = [
  { prefix: '꧁༺ ', suffix: ' ༻꧂', name: 'Escudo Royale', cat: 'Especiales', pop: 98 },
  { prefix: '★彡[ ', suffix: ' ]彡★', name: 'Estrella Ninja', cat: 'Especiales', pop: 97 },
  { prefix: '【 ', suffix: ' 】', name: 'Corchetes Japoneses', cat: 'Especiales', pop: 95 },
  { prefix: '『 ', suffix: ' 』', name: 'Esquinas Anime', cat: 'Especiales', pop: 94 },
  { prefix: '❮ ', suffix: ' ❯', name: 'Flechas Angulares', cat: 'Especiales', pop: 91 },
  { prefix: '╰► ', suffix: '', name: 'Puntero Lista', cat: 'Especiales', pop: 92 },
  { prefix: '(( ', suffix: ' ))', name: 'Onda Sonora', cat: 'Especiales', pop: 89 },
  { prefix: '┊ ', suffix: ' ┊', name: 'Línea de Estilo', cat: 'Especiales', pop: 90 },
  { prefix: '(✿◠‿◠) ', suffix: '', name: 'Kaomoji Sonrisa', cat: 'Especiales', pop: 93 },
  { prefix: '(｡♥‿♥｡) ', suffix: '', name: 'Kaomoji Enamorado', cat: 'Especiales', pop: 94 },
  { prefix: 'ᕦ(ò_óˇ)ᕤ ', suffix: '', name: 'Kaomoji Fuerza', cat: 'Especiales', pop: 88 },
  { prefix: '(っ◔◡◔)っ ', suffix: '', name: 'Kaomoji Abrazo', cat: 'Especiales', pop: 91 }
];

const baseStyleKeys: any[] = ['boldScript', 'smallCaps', 'boldFraktur', 'doubleStruck', 'sansSerifBold', 'monospace'];

let counter = 1;
mixedEnclosers.forEach((enc) => {
  baseStyleKeys.forEach((bKey, bIdx) => {
    MIXED_STYLES.push({
      id: `mix-enc-${counter++}`,
      name: `${enc.name} (${bKey})`,
      category: enc.cat,
      description: `Especial enmarcado ${enc.name}`,
      transform: (t) => enc.prefix + mapAlphabet(t, bKey) + enc.suffix,
      tags: ['especial', enc.name.toLowerCase(), bKey],
      popularity: enc.pop - bIdx,
      featured: counter <= 5
    });
  });
});
