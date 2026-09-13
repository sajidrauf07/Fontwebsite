import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const AESTHETIC_STYLES: StyleDefinition[] = [];

const aestheticBorders = [
  { prefix: '🌸 ', suffix: ' 🌸', name: 'Flor de Cerezo', pop: 98 },
  { prefix: '✨ ', suffix: ' ✨', name: 'Destellos Mágicos', pop: 97 },
  { prefix: '✧･ﾟ: *', suffix: ' *:･ﾟ✧', name: 'Polvo de Estrellas', pop: 96 },
  { prefix: '─── ⋆⋅☆⋅⋆ ───\n', suffix: '\n─── ⋆⋅☆⋅⋆ ───', name: 'Banner Cósmico', pop: 95 },
  { prefix: '☁️ ', suffix: ' ☁️', name: 'Nube Suave', pop: 94 },
  { prefix: '🧸 ', suffix: ' 🧸', name: 'Osito Cute', pop: 93 },
  { prefix: '🍰 ', suffix: ' 🍰', name: 'Pastel Dulce', pop: 92 },
  { prefix: '🧋 ', suffix: ' 🧋', name: 'Boba Tea', pop: 91 },
  { prefix: '🦋 ', suffix: ' 🦋', name: 'Mariposa Azul', pop: 97 },
  { prefix: '🕊️ ', suffix: ' 🕊️', name: 'Paloma de Paz', pop: 89 },
  { prefix: '🌿 ', suffix: ' 🌿', name: 'Naturaleza Botánica', pop: 93 },
  { prefix: '🌙 ', suffix: ' 🌙', name: 'Luna Noche', pop: 95 },
  { prefix: '🎀 ', suffix: ' 🎀', name: 'Lazo Coquette', pop: 96 },
  { prefix: '🕯️ ', suffix: ' 🕯️', name: 'Vela Cálida', pop: 90 },
  { prefix: '🍵 ', suffix: ' 🍵', tag: 'té-matcha', name: 'Té Matcha', pop: 88 },
  { prefix: '💫 ', suffix: ' 💫', name: 'Destello Estelar', pop: 92 },
  { prefix: '🪐 ', suffix: ' 🪐', name: 'Planeta Saturno', pop: 94 },
  { prefix: '🌌 ', suffix: ' 🌌', name: 'Vía Láctea', pop: 91 },
  { prefix: '🍡 ', suffix: ' 🍡', name: 'Dango Japonés', pop: 87 },
  { prefix: '🍬 ', suffix: ' 🍬', name: 'Caramelo Dulce', pop: 89 }
];

const baseStyleKeys: any[] = ['smallCaps', 'boldScript', 'script', 'doubleStruck', 'italic', 'monospace'];

let counter = 1;
aestheticBorders.forEach((border) => {
  baseStyleKeys.forEach((bKey, bIdx) => {
    AESTHETIC_STYLES.push({
      id: `aes-${counter++}`,
      name: `${border.name} (${bKey})`,
      category: 'Aesthetic',
      description: `Estilo aesthetic enmarcado con ${border.prefix}`,
      transform: (t) => border.prefix + mapAlphabet(t, bKey) + border.suffix,
      tags: ['aesthetic', border.name.toLowerCase(), bKey],
      popularity: border.pop - bIdx,
      featured: counter <= 5
    });
  });
});
