import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const CIRCLED_STYLES: StyleDefinition[] = [
  {
    id: 'circ-1',
    name: 'Burbujas Blancas (Circled)',
    category: 'Burbujas',
    description: 'Letras dentro de círculos transparentes.',
    transform: (t) => mapAlphabet(t, 'circled'),
    tags: ['circulo', 'bubble', 'burbujas', 'redonda'],
    popularity: 96,
    featured: true
  },
  {
    id: 'circ-2',
    name: 'Burbujas Negras (Negative)',
    category: 'Burbujas',
    description: 'Letras en círculos oscuros destacados.',
    transform: (t) => mapAlphabet(t, 'negativeCircled'),
    tags: ['circulo negro', 'bubble dark', 'burbujas'],
    popularity: 94,
    featured: true
  }
];

const circDecorators = [
  { prefix: '🫧 ', suffix: ' 🫧', tag: 'burbujas-agua' },
  { prefix: '⚪ ', suffix: ' ⚪', tag: 'circulo-blanco' },
  { prefix: '⚫ ', suffix: ' ⚫', tag: 'circulo-negro' },
  { prefix: '🔴 ', suffix: ' 🔴', tag: 'circulo-rojo' },
  { prefix: '🔵 ', suffix: ' 🔵', tag: 'circulo-azul' },
  { prefix: '🟡 ', suffix: ' 🟡', tag: 'circulo-amarillo' },
  { prefix: '🟢 ', suffix: ' 🟢', tag: 'circulo-verde' },
  { prefix: '🟣 ', suffix: ' 🟣', tag: 'circulo-morado' },
  { prefix: '🟤 ', suffix: ' 🟤', tag: 'circulo-marron' },
  { prefix: '🟠 ', suffix: ' 🟠', tag: 'circulo-naranja' },
  { prefix: '⭕ ', suffix: ' ⭕', tag: 'aro-redondo' },
  { prefix: '🔘 ', suffix: ' 🔘', tag: 'boton-redondo' },
  { prefix: '💫 ', suffix: ' 💫', tag: 'mareo-brillo' },
  { prefix: '🎯 ', suffix: ' 🎯', tag: 'blanco-diana' },
  { prefix: '🔮 ', suffix: ' 🔮', tag: 'bola-cristal' }
];

circDecorators.forEach((dec, idx) => {
  CIRCLED_STYLES.push({
    id: 'circ-dec-' + (idx + 1),
    name: 'Burbujas ' + dec.tag,
    category: 'Burbujas',
    description: 'Burbujas enmarcadas con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'circled') + dec.suffix,
    tags: ['burbujas', 'circulo', dec.tag],
    popularity: 86 - idx
  });
});
