import { addCombining } from '@/lib/unicode/transformations';
import { COMBINING } from '@/lib/unicode/mappings';
import { type StyleDefinition } from './cursive';

export const DECORATIVE_STYLES: StyleDefinition[] = [
  {
    id: 'dec-comb-1',
    name: 'Tachado Continuo',
    category: 'Decorativas',
    description: 'Línea sobrepuesta atravesando las letras.',
    transform: (t) => addCombining(t, COMBINING.strikethrough),
    tags: ['tachado', 'linea', 'strikethrough'],
    popularity: 91,
    featured: true
  },
  {
    id: 'dec-comb-2',
    name: 'Subrayado Simple Inferior',
    category: 'Decorativas',
    description: 'Línea por debajo del texto.',
    transform: (t) => addCombining(t, COMBINING.underline),
    tags: ['subrayado', 'underline'],
    popularity: 90,
    featured: true
  },
  {
    id: 'dec-comb-3',
    name: 'Subrayado Doble Línea',
    category: 'Decorativas',
    description: 'Doble línea de subrayado inferior.',
    transform: (t) => addCombining(t, COMBINING.doubleUnderline),
    tags: ['doble subrayado', 'underline'],
    popularity: 87
  },
  {
    id: 'dec-comb-4',
    name: 'Línea Superior Overline',
    category: 'Decorativas',
    description: 'Línea superior sobre las letras.',
    transform: (t) => addCombining(t, COMBINING.overline),
    tags: ['overline', 'linea superior'],
    popularity: 85
  },
  {
    id: 'dec-comb-5',
    name: 'Puntos Flotantes Umlaut',
    category: 'Decorativas',
    description: 'Puntos flotantes sobre cada letra.',
    transform: (t) => addCombining(t, COMBINING.umlaut),
    tags: ['puntos', 'punteado'],
    popularity: 84
  }
];

// Add combining diacritic mark variations
const combiningMarks = [
  { mark: '\u0300', name: 'Acento Grave Above', idSuffix: 'grave' },
  { mark: '\u0301', name: 'Acento Agudo Above', idSuffix: 'acute' },
  { mark: '\u0302', name: 'Circunflejo Above', idSuffix: 'flex' },
  { mark: '\u0303', name: 'Tilde Ondulada Above', idSuffix: 'tilde' },
  { mark: '\u0304', name: 'Macron Line Above', idSuffix: 'macron' },
  { mark: '\u0305', name: 'Overline Bar', idSuffix: 'overbar' },
  { mark: '\u0306', name: 'Breve Arc Above', idSuffix: 'breve' },
  { mark: '\u0307', name: 'Punto Superior Single', idSuffix: 'dotabove' },
  { mark: '\u0308', name: 'Diéresis Doble Punto', idSuffix: 'dieresis' },
  { mark: '\u030A', name: 'Anillo Ring Above', idSuffix: 'ringabove' },
  { mark: '\u030B', name: 'Doble Acento Agudo', idSuffix: 'doubleacute' },
  { mark: '\u030C', name: 'Caron V Above', idSuffix: 'caron' },
  { mark: '\u030D', name: 'Línea Vertical Above', idSuffix: 'vertabove' },
  { mark: '\u030E', name: 'Doble Línea Vertical', idSuffix: 'doublevert' },
  { prefix: '̲', name: 'Línea Baja Under Score', idSuffix: 'underscore' },
  { mark: '\u0332', name: 'Subrayado Suave', idSuffix: 'softunder' },
  { mark: '\u0333', name: 'Subrayado Grueso Doble', idSuffix: 'thickdouble' },
  { mark: '\u0334', name: 'Tachado Onda Tilde', idSuffix: 'tildestrike' },
  { mark: '\u0335', name: 'Tachado Corto Slash', idSuffix: 'shortslash' },
  { mark: '\u0336', name: 'Tachado Largo Bar', idSuffix: 'longbar' },
  { mark: '\u0337', name: 'Diagonal Inclinada Slash', idSuffix: 'diagslash' },
  { mark: '\u0338', name: 'Diagonal Inversa Overlay', idSuffix: 'diagoverlay' }
];

combiningMarks.forEach((m, idx) => {
  DECORATIVE_STYLES.push({
    id: 'dec-mark-' + m.idSuffix,
    name: 'Efecto ' + m.name,
    category: 'Decorativas',
    description: 'Efecto decorativo ' + m.name,
    transform: (t) => addCombining(t, m.mark || m.prefix || ''),
    tags: ['decorativa', 'efecto', m.idSuffix],
    popularity: 82 - idx
  });
});
