import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const FULLWIDTH_STYLES: StyleDefinition[] = [
  {
    id: 'fw-1',
    name: 'Fullwidth Vaporwave',
    category: 'Fullwidth',
    description: 'Espaciado ancho estilo estético japonés / vaporwave.',
    transform: (t) => mapAlphabet(t, 'fullwidth'),
    tags: ['fullwidth', 'vaporwave', 'japonesa', 'aesthetic', 'espaciada'],
    popularity: 95,
    featured: true
  }
];

const fwDecorators = [
  { prefix: '⛩️ ', suffix: ' ⛩️', tag: 'torii-japones' },
  { prefix: '🌸 ', suffix: ' 🌸', tag: 'sakura' },
  { prefix: '🏮 ', suffix: ' 🏮', tag: 'linterna' },
  { prefix: '🎎 ', suffix: ' 🎎', tag: 'muñecas' },
  { prefix: '🎏 ', suffix: ' 🎏', tag: 'bandera-pez' },
  { prefix: '🎑 ', suffix: ' 🎑', tag: 'luna-japon' },
  { prefix: '🍡 ', suffix: ' 🍡', tag: 'dango' },
  { prefix: '🍵 ', suffix: ' 🍵', tag: 'té-verde' },
  { prefix: '🍜 ', suffix: ' 🍜', tag: 'ramen' },
  { prefix: '🍣 ', suffix: ' 🍣', tag: 'sushi' },
  { prefix: '🍙 ', suffix: ' 🍙', tag: 'onigiri' },
  { prefix: '🌋 ', suffix: ' 🌋', tag: 'fuji' },
  { prefix: '🌊 ', suffix: ' 🌊', tag: 'gran-ola' },
  { prefix: '🎋 ', suffix: ' 🎋', tag: 'tanabata' },
  { prefix: '☯️ ', suffix: ' ☯️', tag: 'yin-yang' }
];

fwDecorators.forEach((dec, idx) => {
  FULLWIDTH_STYLES.push({
    id: 'fw-dec-' + (idx + 1),
    name: 'Fullwidth ' + dec.tag,
    category: 'Fullwidth',
    description: 'Vaporwave ancho con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'fullwidth') + dec.suffix,
    tags: ['fullwidth', 'vaporwave', dec.tag],
    popularity: 87 - idx
  });
});
