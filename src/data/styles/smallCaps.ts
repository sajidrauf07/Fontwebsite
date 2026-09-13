import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const SMALL_CAPS_STYLES: StyleDefinition[] = [
  {
    id: 'sc-1',
    name: 'Versalitas (Small Caps)',
    category: 'Versalitas',
    description: 'Letras mayúsculas en tamaño reducido muy populares en Instagram.',
    transform: (t) => mapAlphabet(t, 'smallCaps'),
    tags: ['versalitas', 'small caps', 'instagram', 'bio', 'aesthetic'],
    popularity: 98,
    featured: true
  }
];

const scDecorators = [
  { prefix: '✨ ', suffix: ' ✨', tag: 'destellos' },
  { prefix: '🌸 ', suffix: ' 🌸', tag: 'flor' },
  { prefix: '💖 ', suffix: ' 💖', tag: 'corazon' },
  { prefix: '✈️ ', suffix: ' ✈️', tag: 'viajes' },
  { prefix: '📸 ', suffix: ' 📸', tag: 'fotos' },
  { prefix: '☕ ', suffix: ' ☕', tag: 'cafe' },
  { prefix: '🧸 ', suffix: ' 🧸', tag: 'osito' },
  { prefix: '🌿 ', suffix: ' 🌿', tag: 'botanica' },
  { prefix: '🌙 ', suffix: ' 🌙', tag: 'luna' },
  { prefix: '🕊️ ', suffix: ' 🕊️', tag: 'paz' },
  { prefix: '🎨 ', suffix: ' 🎨', tag: 'arte' },
  { prefix: '🦋 ', suffix: ' 🦋', tag: 'mariposa' },
  { prefix: '✦ ', suffix: ' ✦', tag: 'estrella' },
  { prefix: '┊ ', suffix: ' ┊', tag: 'barras' },
  { prefix: '⚡ ', suffix: ' ⚡', tag: 'rayo' }
];

scDecorators.forEach((dec, idx) => {
  SMALL_CAPS_STYLES.push({
    id: 'sc-dec-' + (idx + 1),
    name: 'Versalitas ' + dec.tag,
    category: 'Versalitas',
    description: 'Versalitas enmarcadas con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'smallCaps') + dec.suffix,
    tags: ['versalitas', dec.tag],
    popularity: 88 - idx
  });
});
