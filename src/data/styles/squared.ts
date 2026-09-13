import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const SQUARED_STYLES: StyleDefinition[] = [
  {
    id: 'sq-1',
    name: 'Cuadrado Blanco Enmarcado',
    category: 'Cuadrados',
    description: 'Letras enmarcadas en cajas cuadradas.',
    transform: (t) => mapAlphabet(t, 'squared'),
    tags: ['cuadrado', 'caja', 'squared'],
    popularity: 90,
    featured: true
  },
  {
    id: 'sq-2',
    name: 'Cuadrado Negro Relleno',
    category: 'Cuadrados',
    description: 'Cajas cuadradas oscuras destacadas.',
    transform: (t) => mapAlphabet(t, 'negativeSquared'),
    tags: ['cuadrado negro', 'caja negra'],
    popularity: 91,
    featured: true
  },
  {
    id: 'sq-3',
    name: 'Entre Paréntesis',
    category: 'Cuadrados',
    description: 'Letras encerradas individualmente entre paréntesis.',
    transform: (t) => mapAlphabet(t, 'parenthesized'),
    tags: ['parentesis', 'enmarcada'],
    popularity: 85
  }
];

const sqDecorators = [
  { prefix: '🔳 ', suffix: ' 🔳', tag: 'caja-oscura' },
  { prefix: '🔲 ', suffix: ' 🔲', tag: 'caja-clara' },
  { prefix: '📦 ', suffix: ' 📦', tag: 'paquete' },
  { prefix: '▫️ ', suffix: ' ▫️', tag: 'punto-cuadrado' },
  { prefix: '▪️ ', suffix: ' ▪️', tag: 'punto-negro' },
  { prefix: '◾ ', suffix: ' ◾', tag: 'cuadrado-mediano' },
  { prefix: '◽ ', suffix: ' ◽', tag: 'cuadrado-blanco-mediano' },
  { prefix: '◼️ ', suffix: ' ◼️', tag: 'cuadrado-grande' },
  { prefix: '◻️ ', suffix: ' ◻️', tag: 'cuadrado-blanco-grande' },
  { prefix: '📐 ', suffix: ' 📐', tag: 'escuadra' },
  { prefix: '🟩 ', suffix: ' 🟩', tag: 'cuadrado-verde' },
  { prefix: '🟦 ', suffix: ' 🟦', tag: 'cuadrado-azul' },
  { prefix: '🟨 ', suffix: ' 🟨', tag: 'cuadrado-amarillo' },
  { prefix: '🟪 ', suffix: ' 🟪', tag: 'cuadrado-morado' },
  { prefix: '🟧 ', suffix: ' 🟧', tag: 'cuadrado-naranja' }
];

sqDecorators.forEach((dec, idx) => {
  SQUARED_STYLES.push({
    id: 'sq-dec-' + (idx + 1),
    name: 'Cuadrado ' + dec.tag,
    category: 'Cuadrados',
    description: 'Estilo cuadrado con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'squared') + dec.suffix,
    tags: ['cuadrado', dec.tag],
    popularity: 84 - idx
  });
});
