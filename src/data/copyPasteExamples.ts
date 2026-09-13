// Ready-to-copy examples data for /conversor-de-letras/letras-para-copiar-y-pegar/

import { mapAlphabet } from '@/lib/unicode/transformations';

export const COPYABLE_WORDS = [
  { label: 'Amor', cursive: mapAlphabet('Amor', 'boldScript'), smallCaps: mapAlphabet('Amor', 'smallCaps') },
  { label: 'Hola', cursive: mapAlphabet('Hola', 'boldScript'), smallCaps: mapAlphabet('Hola', 'smallCaps') },
  { label: 'Gracias', cursive: mapAlphabet('Gracias', 'script'), smallCaps: mapAlphabet('Gracias', 'smallCaps') },
  { label: 'Feliz', cursive: mapAlphabet('Feliz', 'boldScript'), smallCaps: mapAlphabet('Feliz', 'smallCaps') },
  { label: 'Sueños', cursive: mapAlphabet('Sueños', 'script'), smallCaps: mapAlphabet('Sueños', 'smallCaps') },
  { label: 'Bonito', cursive: mapAlphabet('Bonito', 'boldScript'), smallCaps: mapAlphabet('Bonito', 'smallCaps') },
  { label: 'Éxito', cursive: mapAlphabet('Éxito', 'boldItalic'), smallCaps: mapAlphabet('Éxito', 'smallCaps') },
  { label: 'Instagram', cursive: mapAlphabet('Instagram', 'boldScript'), smallCaps: mapAlphabet('Instagram', 'smallCaps') },
  { label: 'Mi Perfil', cursive: mapAlphabet('Mi Perfil', 'script'), smallCaps: mapAlphabet('Mi Perfil', 'smallCaps') },
  { label: 'Bienvenido', cursive: mapAlphabet('Bienvenido', 'boldScript'), smallCaps: mapAlphabet('Bienvenido', 'smallCaps') }
];

export const COPYABLE_NAMES = [
  { name: 'María', cursive: mapAlphabet('María', 'boldScript'), aesthetic: `✨ ${mapAlphabet('María', 'script')} ✨` },
  { name: 'Sofía', cursive: mapAlphabet('Sofía', 'script'), aesthetic: `🌸 ${mapAlphabet('Sofía', 'boldScript')} 🌸` },
  { name: 'Daniel', cursive: mapAlphabet('Daniel', 'boldScript'), aesthetic: `⚡ ${mapAlphabet('Daniel', 'boldItalic')} ⚡` },
  { name: 'Alex', cursive: mapAlphabet('Alex', 'boldItalic'), aesthetic: `👑 ${mapAlphabet('Alex', 'boldScript')} 👑` },
  { name: 'Luna', cursive: mapAlphabet('Luna', 'script'), aesthetic: `🌙 ${mapAlphabet('Luna', 'boldScript')} 🌙` },
  { name: 'Mateo', cursive: mapAlphabet('Mateo', 'boldScript'), aesthetic: `✦ ${mapAlphabet('Mateo', 'script')} ✦` },
  { name: 'Santiago', cursive: mapAlphabet('Santiago', 'script'), aesthetic: `✨ ${mapAlphabet('Santiago', 'boldScript')} ✨` },
  { name: 'Valentina', cursive: mapAlphabet('Valentina', 'boldScript'), aesthetic: `💖 ${mapAlphabet('Valentina', 'script')} 💖` }
];

export const COPYABLE_PHRASES = [
  { label: 'Bio Inspiradora', text: `✨ ${mapAlphabet('Creando momentos mágicos', 'boldScript')} | 📍 ${mapAlphabet('Madrid', 'script')}` },
  { label: 'Frase Motivacional', text: `🌸 ${mapAlphabet('Persigue tus sueños con pasión', 'script')}` },
  { label: 'Estado Cursivo', text: `✦ ${mapAlphabet('Viviendo un día a la vez', 'boldScript')} ✦` },
  { label: 'Bio Minimalista', text: `♡ ${mapAlphabet('Amor, paz & buena vibra', 'script')}` }
];
