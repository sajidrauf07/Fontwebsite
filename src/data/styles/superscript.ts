import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const SUPERSCRIPT_STYLES: StyleDefinition[] = [
  {
    id: 'super-1',
    name: 'Superíndice Elevado (Tiny Top)',
    category: 'Superíndice',
    description: 'Texto diminuto flotante arriba.',
    transform: (t) => mapAlphabet(t, 'superscript'),
    tags: ['superindice', 'diminuta', 'pequeña', 'tiny'],
    popularity: 90,
    featured: true
  },
  {
    id: 'sub-1',
    name: 'Subíndice Inferior (Tiny Bottom)',
    category: 'Subíndice',
    description: 'Texto diminuto inferior.',
    transform: (t) => mapAlphabet(t, 'subscript'),
    tags: ['subindice', 'pequeña', 'subscript'],
    popularity: 88,
    featured: true
  }
];

const subDecorators = [
  { prefix: '⬆️ ', suffix: ' ⬆️', tag: 'flecha-arriba' },
  { prefix: '⬇️ ', suffix: ' ⬇️', tag: 'flecha-abajo' },
  { prefix: '🔝 ', suffix: ' 🔝', tag: 'top' },
  { prefix: '🔍 ', suffix: ' 🔍', tag: 'lupa' },
  { prefix: '🧪 ', suffix: ' 🧪', tag: 'quimica' },
  { prefix: '📐 ', suffix: ' 📐', tag: 'matematicas' },
  { prefix: '⚡ ', suffix: ' ⚡', tag: 'rayo' },
  { prefix: '✦ ', suffix: ' ✦', tag: 'estrella' },
  { prefix: '💫 ', suffix: ' 💫', tag: 'brillo' },
  { prefix: '🔬 ', suffix: ' 🔬', tag: 'microscopio' },
  { prefix: '📊 ', suffix: ' 📊', tag: 'grafico' },
  { prefix: '📌 ', suffix: ' 📌', tag: 'pin' },
  { prefix: '💡 ', suffix: ' 💡', tag: 'bombilla' },
  { prefix: '⚙️ ', suffix: ' ⚙️', tag: 'engranaje' },
  { prefix: '🏷️ ', suffix: ' 🏷️', tag: 'etiqueta' }
];

subDecorators.forEach((dec, idx) => {
  SUPERSCRIPT_STYLES.push({
    id: 'sub-dec-' + (idx + 1),
    name: 'Diminuta ' + dec.tag,
    category: 'Superíndice',
    description: 'Texto diminuto con ' + dec.prefix,
    transform: (t) => dec.prefix + mapAlphabet(t, 'superscript') + dec.suffix,
    tags: ['diminuta', 'superindice', dec.tag],
    popularity: 83 - idx
  });
});
