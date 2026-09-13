import { mapAlphabet } from '@/lib/unicode/transformations';
import { type StyleDefinition } from './cursive';

export const SYMBOLS_STYLES: StyleDefinition[] = [];

const symbolFrames = [
  { prefix: '💖 ', suffix: ' 💖', name: 'Corazón Rosa', cat: 'Corazones', pop: 99 },
  { prefix: '❤️ ', suffix: ' ❤️', name: 'Corazón Rojo', cat: 'Corazones', pop: 98 },
  { prefix: '🖤 ', suffix: ' 🖤', name: 'Corazón Negro', cat: 'Corazones', pop: 97 },
  { prefix: '🤍 ', suffix: ' 🤍', name: 'Corazón Blanco', cat: 'Corazones', pop: 96 },
  { prefix: '💜 ', suffix: ' 💜', name: 'Corazón Morado', cat: 'Corazones', pop: 95 },
  { prefix: '💙 ', suffix: ' 💙', name: 'Corazón Azul', cat: 'Corazones', pop: 94 },
  { prefix: '💚 ', suffix: ' 💚', name: 'Corazón Verde', cat: 'Corazones', pop: 93 },
  { prefix: '💛 ', suffix: ' 💛', name: 'Corazón Amarillo', cat: 'Corazones', pop: 92 },
  { prefix: '🧡 ', suffix: ' 🧡', name: 'Corazón Naranja', cat: 'Corazones', pop: 91 },
  { prefix: '🤎 ', suffix: ' 🤎', name: 'Corazón Marrón', cat: 'Corazones', pop: 90 },

  { prefix: '⭐ ', suffix: ' ⭐', name: 'Estrella Dorada', cat: 'Estrellas', pop: 98 },
  { prefix: '🌟 ', suffix: ' 🌟', name: 'Superestrella', cat: 'Estrellas', pop: 97 },
  { prefix: '✨ ', suffix: ' ✨', name: 'Destello Estelar', cat: 'Estrellas', pop: 96 },
  { prefix: '✦ ', suffix: ' ✦', name: 'Constelación Cuatro', cat: 'Estrellas', pop: 95 },
  { prefix: '✧ ', suffix: ' ✧', name: 'Estrella Fina', cat: 'Estrellas', pop: 94 },
  { prefix: '✪ ', suffix: ' ✪', name: 'Estrella Circulo', cat: 'Estrellas', pop: 93 },

  { prefix: '⚔️ ', suffix: ' ⚔️', name: 'Espadas Gaming', cat: 'Gaming', pop: 99 },
  { prefix: '👑 ', suffix: ' 👑', name: 'Corona Real', cat: 'Gaming', pop: 98 },
  { prefix: '🔥 ', suffix: ' 🔥', name: 'Fuego Gaming', cat: 'Gaming', pop: 97 },
  { prefix: '⚡ ', suffix: ' ⚡', name: 'Rayo Trueno', cat: 'Gaming', pop: 96 },
  { prefix: '🎯 ', suffix: ' 🎯', name: 'Sniper Diana', cat: 'Gaming', pop: 95 },
  { prefix: '☠️ ', suffix: ' ☠️', name: 'Calavera Pirata', cat: 'Gaming', pop: 94 },
  { prefix: '🎮 ', suffix: ' 🎮', name: 'Mando Gamer', cat: 'Gaming', pop: 93 }
];

const baseStyleKeys: any[] = ['boldScript', 'smallCaps', 'boldSans', 'doubleStruck', 'fraktur'];

let counter = 1;
symbolFrames.forEach((frame) => {
  baseStyleKeys.forEach((bKey, bIdx) => {
    SYMBOLS_STYLES.push({
      id: `sym-${counter++}`,
      name: `${frame.name} (${bKey})`,
      category: frame.cat,
      description: `Decorado con símbolo ${frame.prefix}`,
      transform: (t) => frame.prefix + mapAlphabet(t, bKey) + frame.suffix,
      tags: ['simbolo', frame.cat.toLowerCase(), frame.name.toLowerCase()],
      popularity: frame.pop - bIdx,
      featured: counter <= 5
    });
  });
});
