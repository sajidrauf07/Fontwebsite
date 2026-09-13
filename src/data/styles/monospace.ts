import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const MONOSPACE_STYLES: StyleDefinition[] = [
  {
    id: 'mono-1',
    name: 'Monoespaciado Código',
    category: 'Monoespacio',
    description: 'Fuente de programación tipo máquina de escribir.',
    transform: (t) => mapAlphabet(t, 'monospace'),
    tags: ['monoespacio', 'codigo', 'retro', 'terminal'],
    popularity: 94,
    featured: true
  }
];

const monoDecorators = [
  { prefix: '💻 ', suffix: ' 💻', tag: 'laptop' },
  { prefix: '⌨️ ', suffix: ' ⌨️', tag: 'teclado' },
  { prefix: '👾 ', suffix: ' 👾', tag: 'alien' },
  { prefix: '⚙️ ', suffix: ' ⚙️', tag: 'engranaje' },
  { prefix: '🕹️ ', suffix: ' 🕹️', tag: 'joystick' },
  { prefix: '🤖 ', suffix: ' 🤖', tag: 'robot' },
  { prefix: '📟 ', suffix: ' 📟', tag: 'pager' },
  { prefix: '🔌 ', suffix: ' 🔌', tag: 'enchufe' },
  { prefix: '🔋 ', suffix: ' 🔋', tag: 'bateria' },
  { prefix: '💾 ', suffix: ' 💾', tag: 'disquete' },
  { prefix: '📡 ', suffix: ' 📡', tag: 'antena' },
  { prefix: '🧪 ', suffix: ' 🧪', tag: 'tubo-ensayo' },
  { prefix: '⚡ ', suffix: ' ⚡', tag: 'rayo' },
  { prefix: '🛰️ ', suffix: ' 🛰️', tag: 'satelite' },
  { prefix: '🔍 ', suffix: ' 🔍', tag: 'lupa' }
];

monoDecorators.forEach((dec, idx) => {
  MONOSPACE_STYLES.push({
    id: 'mono-dec-' + (idx + 1),
    name: 'Monoespacio ' + dec.tag,
    category: 'Monoespacio',
    description: 'Fuente monoespacio con marco ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'monospace') + dec.suffix,
    tags: ['monoespacio', 'codigo', dec.tag],
    popularity: 84 - idx
  });
});
