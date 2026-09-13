// Pre-rendered and dynamic ready-to-copy cursive text examples for /letras-cursivas/letras-cursivas-para-copiar-y-pegar/

import { mapAlphabet } from '@/lib/unicode/transformations';

export interface CursiveExampleItem {
  id: string;
  label: string;
  category: 'general' | 'nombres' | 'instagram' | 'elegantes';
  originalText: string;
  cursiveText: string;
  styleName: string;
}

export const READY_TO_COPY_EXAMPLES: CursiveExampleItem[] = [
  {
    id: 'ex-1',
    label: 'Letras Bonitas',
    category: 'general',
    originalText: 'Letras Bonitas',
    cursiveText: mapAlphabet('Letras Bonitas', 'boldScript'),
    styleName: 'Cursiva Clásica'
  },
  {
    id: 'ex-2',
    label: 'Hola Mundo',
    category: 'general',
    originalText: 'Hola Mundo',
    cursiveText: mapAlphabet('Hola Mundo', 'boldScript'),
    styleName: 'Cursiva Clásica'
  },
  {
    id: 'ex-3',
    label: 'Mi Nombre',
    category: 'nombres',
    originalText: 'Mi Nombre',
    cursiveText: mapAlphabet('Mi Nombre', 'script'),
    styleName: 'Cursiva Fina'
  },
  {
    id: 'ex-4',
    label: 'Mi Perfil',
    category: 'instagram',
    originalText: 'Mi Perfil',
    cursiveText: mapAlphabet('Mi Perfil', 'boldScript'),
    styleName: 'Cursiva Clásica'
  },
  {
    id: 'ex-5',
    label: 'Amor',
    category: 'general',
    originalText: 'Amor & Vida',
    cursiveText: mapAlphabet('Amor & Vida', 'boldScript'),
    styleName: 'Cursiva Clásica'
  },
  {
    id: 'ex-6',
    label: 'Feliz Día',
    category: 'general',
    originalText: 'Feliz Día ✨',
    cursiveText: `✨ ${mapAlphabet('Feliz Día', 'boldScript')} ✨`,
    styleName: 'Cursiva con Destellos'
  },
  {
    id: 'ex-7',
    label: 'Buenas Noches',
    category: 'general',
    originalText: 'Buenas Noches 🌙',
    cursiveText: `🌙 ${mapAlphabet('Buenas Noches', 'script')} 🌙`,
    styleName: 'Cursiva Fina Nocturna'
  },
  {
    id: 'ex-8',
    label: 'Instagram Bio',
    category: 'instagram',
    originalText: 'Bienvenido a mi perfil 🌸',
    cursiveText: `🌸 ${mapAlphabet('Bienvenido a mi perfil', 'boldScript')} 🌸`,
    styleName: 'Cursiva Bio Instagram'
  },
  {
    id: 'ex-9',
    label: 'Mi Página',
    category: 'general',
    originalText: 'Mi Página Oficial',
    cursiveText: mapAlphabet('Mi Página Oficial', 'sansSerifItalic'),
    styleName: 'Cursiva Sans'
  },
  {
    id: 'ex-10',
    label: 'Gaming Name',
    category: 'nombres',
    originalText: 'ProGamer_2026',
    cursiveText: mapAlphabet('ProGamer_2026', 'boldItalic'),
    styleName: 'Cursiva Negrita'
  }
];

export const POPULAR_NAME_EXAMPLES = [
  { name: 'Sofía', cursive: mapAlphabet('Sofía', 'boldScript') },
  { name: 'Mateo', cursive: mapAlphabet('Mateo', 'boldScript') },
  { name: 'Valentina', cursive: mapAlphabet('Valentina', 'script') },
  { name: 'Santiago', cursive: mapAlphabet('Santiago', 'script') },
  { name: 'Isabella', cursive: mapAlphabet('Isabella', 'boldItalic') },
  { name: 'Sebastián', cursive: mapAlphabet('Sebastián', 'sansSerifItalic') }
];

export const INSTAGRAM_EXAMPLES = [
  { label: 'Bio Aesthetic', text: `✨ ${mapAlphabet('Creador de Contenido', 'boldScript')} | 📍 ${mapAlphabet('Madrid', 'script')}` },
  { label: 'Frase Fina', text: `🌸 ${mapAlphabet('Persigue tus sueños sin mirar atrás', 'script')}` },
  { label: 'Nombre Destacado', text: `👑 ${mapAlphabet('Reyna de corazones', 'boldScript')}` }
];
