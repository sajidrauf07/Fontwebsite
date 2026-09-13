import { mapAlphabet } from '@/lib/unicode/transformations';

export interface InstagramExampleItem {
  category: 'Bio' | 'Nombre' | 'Caption' | 'Destacados';
  title: string;
  rawText: string;
  styledText: string;
}

export const INSTAGRAM_EXAMPLES_COLLECTION: InstagramExampleItem[] = [
  {
    category: 'Bio',
    title: 'Creador de Contenido',
    rawText: 'Creador de Contenido Digital | Viajes y Estilo',
    styledText: `✨ ${mapAlphabet('Creador de Contenido Digital', 'scriptBold')} ✨\n✈️ ${mapAlphabet('Viajes & Lifestyle', 'smallCaps')}`
  },
  {
    category: 'Bio',
    title: 'Aesthetic / Personal',
    rawText: 'Creando mi propia realidad | Fotografías',
    styledText: `🌸 ${mapAlphabet('Creando mi propia realidad', 'script')} 🌸\n📸 ${mapAlphabet('Fotografías y Arte', 'smallCaps')}`
  },
  {
    category: 'Nombre',
    title: 'Nombre de Perfil Elegante',
    rawText: 'Sofía Martínez',
    styledText: mapAlphabet('Sofía Martínez', 'scriptBold')
  },
  {
    category: 'Nombre',
    title: 'Nombre de Perfil Versalitas',
    rawText: 'Carlos Mendoza',
    styledText: mapAlphabet('Carlos Mendoza', 'smallCaps')
  },
  {
    category: 'Destacados',
    title: 'Etiquetas de Historias',
    rawText: 'Viajes • Amigos • Fotos • Lifestyle',
    styledText: `${mapAlphabet('Viajes', 'smallCaps')} ✈️  |  ${mapAlphabet('Amigos', 'smallCaps')} ❤️  |  ${mapAlphabet('Fotos', 'smallCaps')} 📸`
  },
  {
    category: 'Caption',
    title: 'Pie de Foto Inspirador',
    rawText: 'Coleccionando momentos mágicos',
    styledText: mapAlphabet('Coleccionando momentos mágicos', 'scriptBold')
  }
];
