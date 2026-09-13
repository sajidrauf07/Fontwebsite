import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const DOUBLE_STRUCK_STYLES: StyleDefinition[] = [
  {
    id: 'ds-1',
    name: 'Doble Trazo Blackboard',
    category: 'Doble Trazo',
    description: 'Estilo de pizarra matemática con contorno doble.',
    transform: (t) => mapAlphabet(t, 'doubleStruck'),
    tags: ['doble trazo', 'blackboard', 'pizarra', 'aesthetic'],
    popularity: 96,
    featured: true
  }
];

const dsDecorators = [
  { prefix: '🏛️ ', suffix: ' 🏛️', tag: 'columna' },
  { prefix: '🌸 ', suffix: ' 🌸', tag: 'aesthetic-flor' },
  { prefix: '✨ ', suffix: ' ✨', tag: 'brillo' },
  { prefix: '💖 ', suffix: ' 💖', tag: 'corazon' },
  { prefix: '☁️ ', suffix: ' ☁️', tag: 'nube' },
  { prefix: '🪐 ', suffix: ' 🪐', tag: 'planeta' },
  { prefix: '✦ ', suffix: ' ✦', tag: 'estrella' },
  { prefix: '☕ ', suffix: ' ☕', tag: 'cafe' },
  { prefix: '🧸 ', suffix: ' 🧸', tag: 'osito' },
  { prefix: '📚 ', suffix: ' 📚', tag: 'libros' },
  { prefix: '🎨 ', suffix: ' 🎨', tag: 'arte' },
  { prefix: '🍃 ', suffix: ' 🍃', tag: 'hoja' },
  { prefix: '⚡ ', suffix: ' ⚡', tag: 'rayo' },
  { prefix: '🎀 ', suffix: ' 🎀', tag: 'lazo' },
  { prefix: '🕯️ ', suffix: ' 🕯️', tag: 'vela' }
];

dsDecorators.forEach((dec, idx) => {
  DOUBLE_STRUCK_STYLES.push({
    id: 'ds-dec-' + (idx + 1),
    name: 'Doble Trazo ' + dec.tag,
    category: 'Doble Trazo',
    description: 'Doble trazo enmarcado con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'doubleStruck') + dec.suffix,
    tags: ['doble trazo', dec.tag],
    popularity: 85 - idx
  });
});
