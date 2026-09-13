// Elegant cursive style definitions for /letras-cursivas/letras-cursivas-elegantes/

import { mapAlphabet, wrapFrame } from '@/lib/unicode/transformations';

export interface ElegantCursiveStyle {
  id: string;
  name: string;
  category: 'elegante' | 'script' | 'fina' | 'clasica' | 'decorativa' | 'caligrafica';
  description: string;
  transform: (text: string) => string;
  isRecommended?: boolean;
  tags: string[];
}

export const ELEGANT_CURSIVE_STYLES: ElegantCursiveStyle[] = [
  {
    id: 'script-fine',
    name: 'Cursiva Fina Elegante',
    category: 'fina',
    description: 'Manuscrita delicada de trazo fino y acabados caligráficos refinados.',
    transform: (t) => mapAlphabet(t, 'script'),
    isRecommended: true,
    tags: ['fina', 'elegante', 'script', 'delicada', 'caligrafica']
  },
  {
    id: 'bold-script-classic',
    name: 'Cursiva Clásica Sofisticada',
    category: 'clasica',
    description: 'La cursiva más elegante con trazo grueso uniforme y bucles armónicos.',
    transform: (t) => mapAlphabet(t, 'boldScript'),
    isRecommended: true,
    tags: ['clasica', 'elegante', 'sofisticada', 'bold', 'popular']
  },
  {
    id: 'italic-editorial',
    name: 'Cursiva Inclinada Editorial',
    category: 'elegante',
    description: 'Tipografía inclinada limpia tipo revista de lujo o firma.',
    transform: (t) => mapAlphabet(t, 'italic'),
    isRecommended: true,
    tags: ['inclinada', 'editorial', 'elegante', 'limpia']
  },
  {
    id: 'bold-italic-luxury',
    name: 'Cursiva Negrita Elegante',
    category: 'elegante',
    description: 'Trazo grueso inclinado ideado para nombres de alta distinción.',
    transform: (t) => mapAlphabet(t, 'boldItalic'),
    isRecommended: true,
    tags: ['negrita', 'elegante', 'destacada', 'impactante']
  },
  {
    id: 'cursive-sparkles-luxury',
    name: 'Cursiva con Destellos ✨',
    category: 'decorativa',
    description: 'Estilo manuscrito enmarcado con sutiles destellos brillantes.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '✨ ', ' ✨'),
    isRecommended: true,
    tags: ['decorativa', 'destellos', 'aesthetic', 'instagram']
  },
  {
    id: 'cursive-crown-royal',
    name: 'Cursiva Real 👑',
    category: 'decorativa',
    description: 'Cursiva refinada con corona dorada decorativa.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'boldScript'), '👑 ', ' 👑'),
    isRecommended: true,
    tags: ['decorativa', 'corona', 'premium', 'royal']
  },
  {
    id: 'cursive-flower-aesthetic',
    name: 'Cursiva Floral 🌸',
    category: 'decorativa',
    description: 'Cursiva sutil adornada con flores caligráficas.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '🌸 ', ' 🌸'),
    tags: ['decorativa', 'floral', 'fina', 'aesthetic']
  },
  {
    id: 'cursive-wings-feather',
    name: 'Cursiva de Pluma 🕊️',
    category: 'script',
    description: 'Caligrafía ligera que evoca la escritura antigua con pluma.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '🕊️ ', ' 🕊️'),
    tags: ['script', 'pluma', 'manuscrita', 'suave']
  },
  {
    id: 'cursive-sans-modern',
    name: 'Cursiva Sans Elegante',
    category: 'elegante',
    description: 'Cursiva contemporánea sin serifas de corte minimalista.',
    transform: (t) => mapAlphabet(t, 'sansSerifItalic'),
    tags: ['sans', 'moderna', 'minimalista', 'elegante']
  },
  {
    id: 'cursive-sans-bold',
    name: 'Cursiva Sans Negrita Premium',
    category: 'elegante',
    description: 'Cursiva sans serif negrita de alta legibilidad.',
    transform: (t) => mapAlphabet(t, 'sansSerifBoldItalic'),
    tags: ['sans', 'negrita', 'premium', 'limpia']
  },
  {
    id: 'cursive-brackets-chic',
    name: 'Cursiva Chic en Marcos 『 』',
    category: 'decorativa',
    description: 'Cursiva elegante enmarcada al estilo editorial japonés.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '『 ', ' 』'),
    tags: ['decorativa', 'marcos', 'chic', 'aesthetic']
  },
  {
    id: 'cursive-heart-delicate',
    name: 'Cursiva Romántica ♡',
    category: 'decorativa',
    description: 'Cursiva fina enmarcada con sutiles corazones contorneados.',
    transform: (t) => wrapFrame(mapAlphabet(t, 'script'), '♡ ', ' ♡'),
    tags: ['decorativa', 'corazones', 'romantica', 'delicada']
  }
];
