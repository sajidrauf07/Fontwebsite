// Cursive-specific style definitions for /letras-cursivas/ SILO page

import { mapAlphabet, addCombining, wrapFrame, type AlphabetStyleKey } from '@/lib/unicode/transformations';
import { COMBINING } from '@/lib/unicode/mappings';

export interface CursiveStyle {
  id: string;
  name: string;
  description: string;
  transform: (text: string) => string;
  popularity: number;
  tags: string[];
}

export const CURSIVE_STYLES: CursiveStyle[] = [
  // ── Core Unicode Script/Cursive alphabets ──
  {
    id: 'bold-script',
    name: 'Cursiva Bonita (Clásica)',
    description: 'La cursiva más popular con trazos manuscritos gruesos y elegantes.',
    transform: (t) => mapAlphabet(t, 'boldScript'),
    popularity: 100,
    tags: ['cursiva', 'clasica', 'bonita', 'popular', 'instagram']
  },
  {
    id: 'script-light',
    name: 'Cursiva Fina',
    description: 'Manuscrita delicada de trazo fino y refinado.',
    transform: (t) => mapAlphabet(t, 'script'),
    popularity: 97,
    tags: ['cursiva', 'fina', 'elegante', 'suave']
  },
  {
    id: 'italic-math',
    name: 'Cursiva Inclinada',
    description: 'Inclinación clásica tipo editorial, ideal para énfasis.',
    transform: (t) => mapAlphabet(t, 'italic'),
    popularity: 93,
    tags: ['italic', 'inclinada', 'simple']
  },
  {
    id: 'bold-italic',
    name: 'Cursiva Negrita',
    description: 'Combinación de inclinación cursiva con trazo grueso impactante.',
    transform: (t) => mapAlphabet(t, 'boldItalic'),
    popularity: 95,
    tags: ['negrita', 'bold', 'cursiva', 'impactante']
  },
  {
    id: 'sans-italic',
    name: 'Cursiva Sans Serif',
    description: 'Cursiva moderna y limpia sin serifas.',
    transform: (t) => mapAlphabet(t, 'sansSerifItalic'),
    popularity: 88,
    tags: ['sans', 'moderna', 'limpia']
  },
  {
    id: 'sans-bold-italic',
    name: 'Cursiva Sans Negrita',
    description: 'Cursiva moderna negrita ideal para títulos y nicknames.',
    transform: (t) => mapAlphabet(t, 'sansSerifBoldItalic'),
    popularity: 90,
    tags: ['sans', 'negrita', 'moderna', 'titulo']
  },

  // ── Decorative Cursive Combinations ──
  {
    id: 'cursive-sparkles',
    name: 'Cursiva con Destellos ✨',
    description: 'Manuscrita elegante rodeada de destellos mágicos.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '✨ ', ' ✨'),
    popularity: 96,
    tags: ['destellos', 'magica', 'aesthetic', 'instagram']
  },
  {
    id: 'cursive-flower',
    name: 'Cursiva Floral 🌸',
    description: 'Cursiva decorada con flores de cerezo.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '🌸 ', ' 🌸'),
    popularity: 95,
    tags: ['floral', 'aesthetic', 'cute', 'instagram']
  },
  {
    id: 'cursive-butterfly',
    name: 'Cursiva Mariposa 🦋',
    description: 'Cursiva fina adornada con mariposas azules.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '🦋 ', ' 🦋'),
    popularity: 94,
    tags: ['mariposa', 'aesthetic', 'bonita']
  },
  {
    id: 'cursive-hearts',
    name: 'Cursiva con Corazones 💖',
    description: 'Estilo romántico con corazones brillantes.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '💖 ', ' 💖'),
    popularity: 94,
    tags: ['corazones', 'romantico', 'amor']
  },
  {
    id: 'cursive-moon',
    name: 'Cursiva Nocturna 🌙',
    description: 'Manuscrita envuelta en luna creciente.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '🌙 ', ' 🌙'),
    popularity: 89,
    tags: ['nocturna', 'luna', 'aesthetic']
  },
  {
    id: 'cursive-stars-banner',
    name: 'Cursiva Cósmica',
    description: 'Estilo con marco de estrellas superior e inferior.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '✧･ﾟ: *', '* :･ﾟ✧'),
    popularity: 92,
    tags: ['cosmica', 'estrellas', 'banner', 'aesthetic']
  },
  {
    id: 'cursive-crown',
    name: 'Cursiva Real 👑',
    description: 'Cursiva con corona para perfiles que quieren destacar.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '👑 ', ' 👑'),
    popularity: 91,
    tags: ['corona', 'real', 'gaming', 'perfil']
  },
  {
    id: 'cursive-elegant-frame',
    name: 'Cursiva Enmarcada',
    description: 'Cursiva fina con marco oriental decorativo.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '『 ', ' 』'),
    popularity: 88,
    tags: ['enmarcada', 'elegante', 'oriental']
  },
  {
    id: 'cursive-arrow',
    name: 'Cursiva Directa ╰➤',
    description: 'Manuscrita con flecha indicativa.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '╰┈➤ ', ''),
    popularity: 86,
    tags: ['flecha', 'directa', 'lista']
  },
  {
    id: 'cursive-wave',
    name: 'Cursiva Onda ≋',
    description: 'Cursiva con acento ondulado sobre cada letra.',
    transform: (t) => addCombining(mapAlphabet(t, 'boldScript'), COMBINING.tildeAbove),
    popularity: 82,
    tags: ['onda', 'tilde', 'decorativa']
  },
  {
    id: 'cursive-underline',
    name: 'Cursiva Subrayada',
    description: 'Cursiva con línea de subrayado continuo.',
    transform: (t) => addCombining(mapAlphabet(t, 'boldScript'), COMBINING.underline),
    popularity: 85,
    tags: ['subrayada', 'underline', 'enfasis']
  },
  {
    id: 'cursive-overline',
    name: 'Cursiva con Línea Superior',
    description: 'Manuscrita con barra superior sobre cada carácter.',
    transform: (t) => addCombining(mapAlphabet(t, 'script'), COMBINING.overline),
    popularity: 80,
    tags: ['overline', 'linea', 'decorativa']
  },
  {
    id: 'cursive-romantic',
    name: 'Cursiva Romántica ꧁༺ ༻꧂',
    description: 'Manuscrita enmarcada en ornamentos tibetanos.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '꧁༺ ', ' ༻꧂'),
    popularity: 93,
    tags: ['romantica', 'ornamental', 'elegante', 'gaming']
  },
  {
    id: 'cursive-love',
    name: 'Cursiva de Amor ♥',
    description: 'Cursiva clásica con corazones simples.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '♥ ', ' ♥'),
    popularity: 87,
    tags: ['amor', 'corazon', 'romantico']
  },
  {
    id: 'cursive-leaf',
    name: 'Cursiva Botánica 🌿',
    description: 'Estilo natural con hojas verdes.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '🌿 ', ' 🌿'),
    popularity: 84,
    tags: ['naturaleza', 'botanica', 'verde']
  },
  {
    id: 'cursive-dove',
    name: 'Cursiva Pacífica 🕊️',
    description: 'Manuscrita suave con paloma de la paz.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '🕊️ ', ' 🕊️'),
    popularity: 83,
    tags: ['paz', 'paloma', 'suave']
  },
  {
    id: 'cursive-star-ninja',
    name: 'Cursiva Gamer ★彡',
    description: 'Estilo gaming con estrella angular para nicknames.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '★彡[ ', ' ]彡★'),
    popularity: 91,
    tags: ['gaming', 'estrella', 'nickname', 'free fire']
  },
  {
    id: 'cursive-fire',
    name: 'Cursiva en Fuego 🔥',
    description: 'Cursiva rodeada de llamas para nombres intensos.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '🔥 ', ' 🔥'),
    popularity: 90,
    tags: ['fuego', 'intenso', 'gaming']
  },
  {
    id: 'cursive-thunder',
    name: 'Cursiva Eléctrica ⚡',
    description: 'Manuscrita con rayos de energía.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '⚡ ', ' ⚡'),
    popularity: 88,
    tags: ['electrica', 'rayo', 'energia', 'gaming']
  },
];
