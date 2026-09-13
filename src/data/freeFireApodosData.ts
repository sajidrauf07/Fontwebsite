export interface FreeFireApodosFaqItem {
  question: string;
  answer: string;
}

export const FREE_FIRE_APODOS_FAQ_ITEMS: FreeFireApodosFaqItem[] = [
  {
    question: '¿Qué es un apodo para Free Fire?',
    answer:
      'Un apodo para Free Fire es el nombre de usuario o pseudónimo (nick) que utilizas para identificarte en tus partidas. Puede personalizarse con símbolos, letras especiales Unicode y tipografías originales para destacar en el juego.'
  },
  {
    question: '¿Cómo crear un apodo para Free Fire?',
    answer:
      'Solo debes escribir tu nombre o palabra clave en nuestro generador o explorar el catálogo de apodos. Elige tu estilo favorito (Aesthetic, Bonito, Pro, Símbolos, Gótico) y presiona "Copiar" para usarlo en tu perfil.'
  },
  {
    question: '¿Cómo copiar un apodo?',
    answer:
      'Haz clic en el botón "Copiar" al lado del apodo que te guste. El texto estilizado se guardará instantáneamente en tu portapapeles listo para pegar en el juego.'
  },
  {
    question: '¿Puedo usar letras bonitas en mi apodo?',
    answer:
      'Sí, Free Fire admite caracteres Unicode estilizados que transforman el texto plano en letras bonitas, negritas, cursivas o góticas.'
  },
  {
    question: '¿Puedo añadir símbolos a mi apodo?',
    answer:
      '¡Por supuesto! Disponemos de un decorador especial con coronas (亗, 👑), corchetes (『』), estrellas (★) y kanjis (メ) para decorar tu apodo.'
  },
  {
    question: '¿Funcionan todos los símbolos en Free Fire?',
    answer:
      'La inmensa mayoría de símbolos y caracteres gráficos de nuestro catálogo son compatibles con la app de Free Fire en Android e iOS.'
  },
  {
    question: '¿Puedo usar emojis?',
    answer:
      'Sí, los emojis integrados en tu teclado (como 🔥, 👑, ⚡, 🌸) se mantienen intactos junto con los estilos de letras Unicode.'
  },
  {
    question: '¿Puedo comprobar si un apodo está disponible?',
    answer:
      'Esta herramienta genera formatos estéticos y estilos visuales. La disponibilidad real de un nick en vivo se verifica al ingresar el apodo directamente en la pantalla de edición de Free Fire.'
  },
  {
    question: '¿Qué son los caracteres Unicode?',
    answer:
      'Son símbolos de estándares universales reconocidos por dispositivos móviles que permiten personalizar textos y apodos sin instalar apps externas.'
  }
];

export interface CuratedApodoItem {
  id: string;
  name: string;
  category:
    | 'Bonitos'
    | 'Aesthetic'
    | 'Originales'
    | 'Pro'
    | 'Gaming'
    | 'Elegantes'
    | 'Cursivos'
    | 'Góticos'
    | 'Símbolos'
    | 'Minimalistas';
  keywords: string[];
}

export const CURATED_APODOS_IDEAS_LIBRARY: CuratedApodoItem[] = [
  // Originales / Pro
  { id: 'ap-1', name: '亗 SHADOW 亗', category: 'Originales', keywords: ['shadow', 'corona', 'pro', 'original'] },
  { id: 'ap-2', name: '『NOVA』', category: 'Originales', keywords: ['nova', 'corchete', 'estrella'] },
  { id: 'ap-3', name: '★彡BLAZE彡★', category: 'Pro', keywords: ['blaze', 'estrellas', 'pro'] },
  { id: 'ap-4', name: '么STORM么', category: 'Pro', keywords: ['storm', 'kanji', 'pro'] },
  { id: 'ap-5', name: '꧁༺GHOST༻꧂', category: 'Pro', keywords: ['ghost', 'alas', 'pro'] },

  // Aesthetic / Bonitos
  { id: 'ap-6', name: '🌸 LUNA 🌸', category: 'Aesthetic', keywords: ['luna', 'flor', 'aesthetic'] },
  { id: 'ap-7', name: '✨ SOFÍA ✨', category: 'Aesthetic', keywords: ['sofia', 'brillo', 'aesthetic'] },
  { id: 'ap-8', name: '♡ VALERIA ♡', category: 'Bonitos', keywords: ['valeria', 'corazon', 'bonito'] },
  { id: 'ap-9', name: '👑 MATEO 👑', category: 'Bonitos', keywords: ['mateo', 'corona', 'bonito'] },
  { id: 'ap-10', name: '·.★ ALEX ★.·', category: 'Aesthetic', keywords: ['alex', 'estrella', 'aesthetic'] },
  { id: 'ap-11', name: '🌸 DANIELA 🌸', category: 'Bonitos', keywords: ['daniela', 'flor', 'bonito'] },

  // Gaming
  { id: 'ap-12', name: '⚡TITAN⚡', category: 'Gaming', keywords: ['titan', 'rayo', 'gaming'] },
  { id: 'ap-13', name: '⚔️LEGEND⚔️', category: 'Gaming', keywords: ['legend', 'espadas', 'gaming'] },
  { id: 'ap-14', name: '☬WOLF☬', category: 'Gaming', keywords: ['wolf', 'lobo', 'gaming'] },
  { id: 'ap-15', name: '✦DRAGON✦', category: 'Gaming', keywords: ['dragon', 'fuego', 'gaming'] },

  // Elegantes / Cursivos
  { id: 'ap-16', name: '𝒱𝒶𝓁𝑒𝓇𝒾𝒶', category: 'Elegantes', keywords: ['valeria', 'cursiva', 'elegante'] },
  { id: 'ap-17', name: '𝒮𝑜𝒻𝒾́𝒶', category: 'Elegantes', keywords: ['sofia', 'cursiva', 'manuscrita'] },
  { id: 'ap-18', name: '𝓐𝓁𝓮𝓍', category: 'Cursivos', keywords: ['alex', 'script', 'cursiva'] },
  { id: 'ap-19', name: '𝒞𝒶𝓇𝓁𝑜𝓈', category: 'Cursivos', keywords: ['carlos', 'script', 'cursiva'] },

  // Góticos / Símbolos
  { id: 'ap-20', name: '𝕾𝖍𝖆𝖉𝖔𝖜', category: 'Góticos', keywords: ['shadow', 'gotico', 'fraktur'] },
  { id: 'ap-21', name: '𝕶𝖎𝖓𝖌', category: 'Góticos', keywords: ['king', 'gotico', 'fraktur'] },
  { id: 'ap-22', name: 'メ PHANTOM メ', category: 'Símbolos', keywords: ['phantom', 'kanji', 'simbolos'] },
  { id: 'ap-23', name: '☠️ ROGUE ☠️', category: 'Símbolos', keywords: ['rogue', 'calavera', 'simbolos'] },

  // Minimalistas
  { id: 'ap-24', name: '亗 REX 亗', category: 'Minimalistas', keywords: ['rex', 'corto', 'minimal'] },
  { id: 'ap-25', name: '『ACE』', category: 'Minimalistas', keywords: ['ace', 'corto', 'minimal'] },
  { id: 'ap-26', name: '⚡MAX⚡', category: 'Minimalistas', keywords: ['max', 'corto', 'minimal'] },
  { id: 'ap-27', name: '· VORTEX ·', category: 'Minimalistas', keywords: ['vortex', 'minimal', 'punto'] }
];

export const APODOS_WORD_LIST = [
  'SHADOW',
  'NOVA',
  'BLAZE',
  'STORM',
  'GHOST',
  'TITAN',
  'LEGEND',
  'WOLF',
  'DRAGON',
  'KNIGHT',
  'PHANTOM',
  'ROGUE',
  'KING',
  'QUEEN',
  'STAR',
  'DARK',
  'FIRE',
  'FROST',
  'VORTEX',
  'ACE'
];

export const APODOS_DECORATIVE_DECK = [
  { prefix: '亗 ', suffix: ' 亗' },
  { prefix: '『', suffix: '』' },
  { prefix: '★彡 ', suffix: ' 彡★' },
  { prefix: 'メ ', suffix: ' メ' },
  { prefix: '☬ ', suffix: ' ☬' },
  { prefix: '⚡ ', suffix: ' ⚡' },
  { prefix: '✦ ', suffix: ' ✦' },
  { prefix: '🌸 ', suffix: ' 🌸' },
  { prefix: '♡ ', suffix: ' ♡' }
];
