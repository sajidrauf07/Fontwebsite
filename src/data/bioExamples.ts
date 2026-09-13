import { mapAlphabet } from '@/lib/unicode/transformations';

export interface BioTemplateItem {
  id: string;
  niche: string;
  styledTitle: string;
  styledDesc: string;
  ctaText: string;
  fullText: string;
}

export const BIO_EXAMPLES_DATA: BioTemplateItem[] = [
  {
    id: 'creador-digital',
    niche: 'Creador Digital',
    styledTitle: mapAlphabet('Creador Digital', 'scriptBold'),
    styledDesc: `🎥 ${mapAlphabet('Vídeos & Contenido de Estilo de Vida', 'smallCaps')}\n📍 ${mapAlphabet('Madrid, España', 'smallCaps')}`,
    ctaText: 'Mira mi nuevo vídeo ⬇️',
    fullText: `${mapAlphabet('Creador Digital', 'scriptBold')}\n🎥 ${mapAlphabet('Vídeos & Contenido de Estilo de Vida', 'smallCaps')}\n📍 ${mapAlphabet('Madrid, España', 'smallCaps')}\nMira mi nuevo vídeo ⬇️`
  },
  {
    id: 'fotografia-arte',
    niche: 'Fotografía & Arte',
    styledTitle: mapAlphabet('Fotografía & Retratos', 'scriptBold'),
    styledDesc: `📸 ${mapAlphabet('Capturando momentos reales', 'smallCaps')}\n🎨 ${mapAlphabet('Edición de Luz & Color', 'smallCaps')}`,
    ctaText: 'Reserva tu sesión aquí ⬇️',
    fullText: `${mapAlphabet('Fotografía & Retratos', 'scriptBold')}\n📸 ${mapAlphabet('Capturando momentos reales', 'smallCaps')}\n🎨 ${mapAlphabet('Edición de Luz & Color', 'smallCaps')}\nReserva tu sesión aquí ⬇️`
  },
  {
    id: 'viajes-lifestyle',
    niche: 'Viajes & Aventura',
    styledTitle: mapAlphabet('Viajes & Aventura', 'scriptBold'),
    styledDesc: `✈️ ${mapAlphabet('Explorando el mundo paso a paso', 'smallCaps')}\n🌍 ${mapAlphabet('+25 países visitados', 'smallCaps')}`,
    ctaText: 'Guía de viajes gratis ⬇️',
    fullText: `${mapAlphabet('Viajes & Aventura', 'scriptBold')}\n✈️ ${mapAlphabet('Explorando el mundo paso a paso', 'smallCaps')}\n🌍 ${mapAlphabet('+25 países visitados', 'smallCaps')}\nGuía de viajes gratis ⬇️`
  },
  {
    id: 'minimalista-personal',
    niche: 'Minimalista Personal',
    styledTitle: mapAlphabet('Sofía R.', 'smallCaps'),
    styledDesc: `✨ ${mapAlphabet('Amante de los detalles simples', 'italic')}\n☕ ${mapAlphabet('Café, Libros & Diseño', 'smallCaps')}`,
    ctaText: 'Mi espacio web ⬇️',
    fullText: `${mapAlphabet('Sofía R.', 'smallCaps')}\n✨ ${mapAlphabet('Amante de los detalles simples', 'italic')}\n☕ ${mapAlphabet('Café, Libros & Diseño', 'smallCaps')}\nMi espacio web ⬇️`
  }
];

export const BIO_HEADINGS_LIST = [
  'Sobre mí',
  'Creador',
  'Fotografía',
  'Contacto',
  'Mi mundo',
  'Servicios',
  'Lifestyle',
  'Viajes'
];
