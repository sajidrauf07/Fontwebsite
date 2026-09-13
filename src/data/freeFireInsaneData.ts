export interface FreeFireInsaneFaqItem {
  question: string;
  answer: string;
}

export const FREE_FIRE_INSANE_FAQ_ITEMS: FreeFireInsaneFaqItem[] = [
  {
    question: '¿Qué son los nombres insanos para Free Fire?',
    answer:
      'Los nombres insanos son apodos con estilos tipográficos llamativos, oscuros, agresivos o elegantes combinados con símbolos gráficos Pro (como coronas 亗, corchetes 『』, calaveras ☠️, rayos ⚡ y kanjis メ) diseñados para destacar en las partidas de Free Fire.'
  },
  {
    question: '¿Cómo crear un nombre insano para Free Fire?',
    answer:
      'Ingresa tu apodo en nuestro generador insano o explora el catálogo predefinido. Selecciona la categoría deseada (Savage, Dark, Boss, Pro, Símbolos) o añade decoraciones automáticas, y haz clic en "Copiar" para usarlo en tu perfil del juego.'
  },
  {
    question: '¿Puedo copiar estos nombres insanos directamente?',
    answer:
      '¡Sí! Todos los apodos generados cuentan con un botón de copia en un clic que guarda el texto estilizado en tu portapapeles listo para pegar en Android, iOS o emuladores.'
  },
  {
    question: '¿Funcionan todos los símbolos insanos en Free Fire?',
    answer:
      'La gran mayoría de símbolos insanos (coronas, alas, estrellas, kanjis) son compatibles con Free Fire. Te recomendamos mantener el apodo dentro del límite de 12 caracteres del juego.'
  },
  {
    question: '¿Puedo usar letras especiales en un nick insano?',
    answer:
      'Sí, las fuentes Unicode como góticas, negritas, pequeñas mayúsculas y cursivas son compatibles con la mayoría de clientes de juego.'
  },
  {
    question: '¿Cómo crear un nombre savage para Free Fire?',
    answer:
      'Usa combinaciones de palabras agresivas (Viper, Kratos, Venom, Spectre, Reaper) junto con símbolos de armas, rayos o coronas (メ VIPER メ, 亗 KRATOS 亗).'
  },
  {
    question: '¿Puedo comprobar si un nombre insano está disponible?',
    answer:
      'Nuestra herramienta genera estilos y combinaciones estéticas. La disponibilidad real de un apodo específico se comprueba directamente dentro de la pantalla de cambio de nombre de Free Fire.'
  },
  {
    question: '¿Qué son los caracteres Unicode en nombres insanos?',
    answer:
      'Son símbolos universales compatibles con iOS y Android que permiten transformar texto plano en letras góticas, estilizadas o decoradas sin instalar aplicaciones adicionales.'
  }
];

export interface CuratedInsaneIdeaItem {
  id: string;
  name: string;
  category:
    | 'Insanos'
    | 'Savage'
    | 'Dark'
    | 'Pro'
    | 'Boss'
    | 'Royal'
    | 'Aesthetic'
    | 'Símbolos'
    | 'Cursivos'
    | 'Góticos'
    | 'Minimal';
  keywords: string[];
}

export const CURATED_INSANE_IDEAS_LIBRARY: CuratedInsaneIdeaItem[] = [
  // Insanos
  { id: 'ii-1', name: '亗 𝕾𝕺𝖀𝕷 𝕽𝕰𝕬𝖅𝕰𝕽 亗', category: 'Insanos', keywords: ['soul', 'reaper', 'gotico', 'corona', 'insano'] },
  { id: 'ii-2', name: '『INSANO』 么', category: 'Insanos', keywords: ['insano', 'kanji', 'pro', 'corchete'] },
  { id: 'ii-3', name: '★彡 𝕯𝕬𝕽𝕶 𝕶𝕴𝕹𝕲 彡★', category: 'Insanos', keywords: ['dark', 'king', 'gotico', 'estrella'] },
  { id: 'ii-4', name: '☠️ SAVAGE ☠️', category: 'Insanos', keywords: ['savage', 'calavera', 'agresivo'] },
  { id: 'ii-5', name: '꧁༺ INSANE ༻꧂', category: 'Insanos', keywords: ['insane', 'alas', 'pro'] },
  { id: 'ii-6', name: 'メ KRATOS メ', category: 'Insanos', keywords: ['kratos', 'kanji', 'warrior'] },

  // Savage
  { id: 'ii-7', name: '⚡ VIPER ⚡', category: 'Savage', keywords: ['viper', 'rayo', 'venom', 'savage'] },
  { id: 'ii-8', name: '✦ REAPER ✦', category: 'Savage', keywords: ['reaper', 'muerte', 'dark', 'savage'] },
  { id: 'ii-9', name: '☬ VENOM ☬', category: 'Savage', keywords: ['venom', 'simbolo', 'pro', 'savage'] },
  { id: 'ii-10', name: '⚔️ TITAN ⚔️', category: 'Savage', keywords: ['titan', 'espadas', 'warrior'] },
  { id: 'ii-11', name: '🔥 HYDRA 🔥', category: 'Savage', keywords: ['hydra', 'fuego', 'dragon'] },

  // Dark
  { id: 'ii-12', name: '𝕾𝖍𝖆𝖉𝖔𝖜 𝕶𝖎𝖑𝖑𝖊𝖗', category: 'Dark', keywords: ['shadow', 'killer', 'gotico', 'dark'] },
  { id: 'ii-13', name: '💀 SPECTRE 💀', category: 'Dark', keywords: ['spectre', 'fantasma', 'calavera'] },
  { id: 'ii-14', name: '✦ VOID ✦', category: 'Dark', keywords: ['void', 'oscuro', 'space'] },
  { id: 'ii-15', name: '│ GHOST │', category: 'Dark', keywords: ['ghost', 'fantasma', 'minimal'] },
  { id: 'ii-16', name: '𝕹𝖎𝖌𝖍𝖙𝖒𝖆𝖗𝖊', category: 'Dark', keywords: ['nightmare', 'gotico', 'dark'] },

  // Pro
  { id: 'ii-17', name: '亗 SHADOW 亗', category: 'Pro', keywords: ['shadow', 'corona', 'pro'] },
  { id: 'ii-18', name: '『KING』', category: 'Pro', keywords: ['king', 'corchetes', 'esports'] },
  { id: 'ii-19', name: '么APEX么', category: 'Pro', keywords: ['apex', 'kanji', 'pro'] },
  { id: 'ii-20', name: '★彡NEXUS彡★', category: 'Pro', keywords: ['nexus', 'estrellas', 'legend'] },
  { id: 'ii-21', name: '☬DRACO☬', category: 'Pro', keywords: ['draco', 'dragon', 'simbolo'] },

  // Boss
  { id: 'ii-22', name: '👑 GODFATHER 👑', category: 'Boss', keywords: ['godfather', 'corona', 'boss'] },
  { id: 'ii-23', name: '亗 EMPEROR 亗', category: 'Boss', keywords: ['emperor', 'corona', 'lider'] },
  { id: 'ii-24', name: '『MAFIA』', category: 'Boss', keywords: ['mafia', 'corchete', 'boss'] },
  { id: 'ii-25', name: '☬ PATRÓN ☬', category: 'Boss', keywords: ['patron', 'lider', 'boss'] },

  // Royal
  { id: 'ii-26', name: '👑 KING SOUL 👑', category: 'Royal', keywords: ['king', 'soul', 'corona'] },
  { id: 'ii-27', name: '✦ QUEEN NOVA ✦', category: 'Royal', keywords: ['queen', 'nova', 'reina'] },
  { id: 'ii-28', name: '亗 ROYAL REX 亗', category: 'Royal', keywords: ['royal', 'rex', 'corona'] },

  // Aesthetic
  { id: 'ii-29', name: '🌸 LUNA 🌸', category: 'Aesthetic', keywords: ['luna', 'sakura', 'aesthetic'] },
  { id: 'ii-30', name: '✨ SOFÍA ✨', category: 'Aesthetic', keywords: ['sofia', 'sparkle', 'aesthetic'] },
  { id: 'ii-31', name: '·.★ ALEX ★.·', category: 'Aesthetic', keywords: ['alex', 'estrella', 'aesthetic'] },
  { id: 'ii-32', name: '┊✨ MATEO ✨┊', category: 'Aesthetic', keywords: ['mateo', 'linea', 'aesthetic'] },

  // Símbolos
  { id: 'ii-33', name: '꧁༺VORTEX༻꧂', category: 'Símbolos', keywords: ['vortex', 'alas', 'simbolo'] },
  { id: 'ii-34', name: '★彡BLAZE彡★', category: 'Símbolos', keywords: ['blaze', 'estrellas', 'simbolo'] },
  { id: 'ii-35', name: '么COBRA么', category: 'Símbolos', keywords: ['cobra', 'kanji', 'simbolo'] },

  // Cursivos & Góticos
  { id: 'ii-36', name: '𝒱𝒾𝓅𝑒𝓇', category: 'Cursivos', keywords: ['viper', 'cursiva', 'script'] },
  { id: 'ii-37', name: '𝕶𝖗𝖆𝖙𝖔𝖘', category: 'Góticos', keywords: ['kratos', 'gotico', 'fraktur'] },

  // Minimal
  { id: 'ii-38', name: '亗 REX 亗', category: 'Minimal', keywords: ['rex', 'corto', 'minimal'] },
  { id: 'ii-39', name: '『ZED』', category: 'Minimal', keywords: ['zed', 'corto', 'minimal'] },
  { id: 'ii-40', name: '⚡ACE⚡', category: 'Minimal', keywords: ['ace', 'corto', 'rayo'] }
];

export const INSANE_POWER_WORDS = [
  'SHADOW',
  'INSANO',
  'SAVAGE',
  'DARK',
  'KRATOS',
  'VIPER',
  'VENOM',
  'REAPER',
  'SPECTRE',
  'TITAN',
  'APEX',
  'VORTEX',
  'GHOST',
  'DRACO',
  'INFERNO',
  'HYDRA',
  'KING',
  'COBRA',
  'ZERO',
  'NEXUS'
];

export const INSANE_DECORATIVE_FRAMES = [
  { prefix: '亗 ', suffix: ' 亗' },
  { prefix: '『', suffix: '』' },
  { prefix: '★彡 ', suffix: ' 彡★' },
  { prefix: 'メ ', suffix: ' メ' },
  { prefix: '☬ ', suffix: ' ☬' },
  { prefix: '⚡ ', suffix: ' ⚡' },
  { prefix: '☠️ ', suffix: ' ☠️' },
  { prefix: '꧁༺ ', suffix: ' ༻꧂' },
  { prefix: '✦ ', suffix: ' ✦' },
  { prefix: '👑 ', suffix: ' 👑' }
];
