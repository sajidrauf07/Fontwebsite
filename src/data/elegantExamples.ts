// Data for ready-to-copy elegant cursive terms, names, and Instagram bios

import { mapAlphabet } from '@/lib/unicode/transformations';

export interface ElegantExampleItem {
  id: string;
  label: string;
  originalText: string;
  cursiveText: string;
  styleName: string;
}

export const READY_TO_COPY_ELEGANT: ElegantExampleItem[] = [
  {
    id: 'ele-1',
    label: 'Letras Bonitas',
    originalText: 'Letras Bonitas',
    cursiveText: mapAlphabet('Letras Bonitas', 'boldScript'),
    styleName: 'Cursiva Clásica'
  },
  {
    id: 'ele-2',
    label: 'Mi Nombre',
    originalText: 'Mi Nombre',
    cursiveText: mapAlphabet('Mi Nombre', 'script'),
    styleName: 'Cursiva Fina'
  },
  {
    id: 'ele-3',
    label: 'Hola Mundo',
    originalText: 'Hola Mundo',
    cursiveText: mapAlphabet('Hola Mundo', 'boldScript'),
    styleName: 'Cursiva Clásica'
  },
  {
    id: 'ele-4',
    label: 'Mi Perfil',
    originalText: 'Mi Perfil Elegante',
    cursiveText: mapAlphabet('Mi Perfil Elegante', 'boldItalic'),
    styleName: 'Cursiva Negrita'
  },
  {
    id: 'ele-5',
    label: 'Feliz Día',
    originalText: 'Feliz Día ✨',
    cursiveText: `✨ ${mapAlphabet('Feliz Día', 'boldScript')} ✨`,
    styleName: 'Cursiva con Destellos'
  },
  {
    id: 'ele-6',
    label: 'Buenas Noches',
    originalText: 'Buenas Noches 🌙',
    cursiveText: `🌙 ${mapAlphabet('Buenas Noches', 'script')} 🌙`,
    styleName: 'Cursiva Fina Nocturna'
  },
  {
    id: 'ele-7',
    label: 'Mi Bio',
    originalText: 'Mi Bio Oficial ✦',
    cursiveText: `✦ ${mapAlphabet('Mi Bio Oficial', 'boldScript')} ✦`,
    styleName: 'Cursiva Bio'
  },
  {
    id: 'ele-8',
    label: 'Mi Página',
    originalText: 'Mi Página Web',
    cursiveText: mapAlphabet('Mi Página Web', 'sansSerifItalic'),
    styleName: 'Cursiva Sans'
  },
  {
    id: 'ele-9',
    label: 'Sueños',
    originalText: 'Persigue tus sueños 🌸',
    cursiveText: `🌸 ${mapAlphabet('Persigue tus sueños', 'script')} 🌸`,
    styleName: 'Cursiva Floral'
  },
  {
    id: 'ele-10',
    label: 'Siempre adelante',
    originalText: 'Siempre adelante',
    cursiveText: mapAlphabet('Siempre adelante', 'italic'),
    styleName: 'Cursiva Inclinada'
  }
];

export const ELEGANT_NAMES = [
  { name: 'María', cursive: mapAlphabet('María', 'boldScript') },
  { name: 'Sofía', cursive: mapAlphabet('Sofía', 'script') },
  { name: 'Daniel', cursive: mapAlphabet('Daniel', 'boldScript') },
  { name: 'Alex', cursive: mapAlphabet('Alex', 'boldItalic') },
  { name: 'Luna', cursive: mapAlphabet('Luna', 'script') },
  { name: 'Valentina', cursive: mapAlphabet('Valentina', 'boldScript') }
];

export const ELEGANT_BIO_TEMPLATES = [
  {
    id: 'bio-1',
    label: 'Aesthetic & Magia',
    template: `✨ ${mapAlphabet('Mi mundo', 'boldScript')} | 📍 ${mapAlphabet('Madrid', 'script')} \n✦ ${mapAlphabet('Creando arte todos los días', 'script')}`
  },
  {
    id: 'bio-2',
    label: 'Minimalista Sueños',
    template: `♡ ${mapAlphabet('Sueña en grande', 'boldScript')} \n✨ ${mapAlphabet('Vive con propósito', 'script')}`
  },
  {
    id: 'bio-3',
    label: 'Bienvenida Perfil',
    template: `✦ ${mapAlphabet('Bienvenido a mi perfil', 'boldScript')} ✦\n🌸 ${mapAlphabet('Moda, viajes & estilo de vida', 'script')}`
  }
];
