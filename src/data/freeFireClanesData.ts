export interface FreeFireClanesFaqItem {
  question: string;
  answer: string;
}

export const FREE_FIRE_CLANES_FAQ_ITEMS: FreeFireClanesFaqItem[] = [
  {
    question: '¿Cómo crear un nombre para un clan de Free Fire?',
    answer:
      'Ingresa el nombre o iniciales de tu equipo en nuestro generador o explora nuestro catálogo de ideas para clanes. Selecciona la categoría adecuada (Originales, Pro, Insanos, Cortos) y copia el diseño para tu clan.'
  },
  {
    question: '¿Qué nombre puedo ponerle a mi clan?',
    answer:
      'Puedes usar combinaciones de palabras imponentes (como Shadow Warriors, Apex Legends, Dark Kings, Titan Squad) acompanadas de corchetes 『』, coronas 亗 o estrellas ★.'
  },
  {
    question: '¿Puedo copiar directamente los nombres?',
    answer:
      '¡Sí! Cada opción dispone de un botón de copia inmediata que guarda el texto estilizado en tu portapapeles listo para usar en la creación del clan.'
  },
  {
    question: '¿Puedo añadir símbolos al nombre del clan?',
    answer:
      'Por supuesto, la mayoría de clanes en Free Fire utilizan símbolos como coronas (亗), corchetes (『』) y kanjis (メ) para dar un aspecto competitivo.'
  },
  {
    question: '¿Qué es un tag de clan?',
    answer:
      'Un tag de clan es una abreviatura o siglas cortas (habitualmente de 2 a 4 letras, como SW para Shadow Warriors) que los miembros colocan antes de sus nombres individuales.'
  },
  {
    question: '¿Cómo crear un tag para mi clan?',
    answer:
      'Utiliza nuestro generador de tags integrado. Introduce el nombre de tu clan y generaremos siglas automáticas estilizadas con marcos Unicode.'
  },
  {
    question: '¿Funcionan todos los símbolos en Free Fire?',
    answer:
      'La inmensa mayoría de caracteres y tipografías Unicode que ofrecemos son totalmente compatibles con la interfaz de clanes de Free Fire.'
  },
  {
    question: '¿Puedo usar emojis?',
    answer:
      'Sí, puedes incluir emojis (como 🔥, 👑, ⚡, ⚔️) en la descripción o nombre del clan.'
  },
  {
    question: '¿Puedo comprobar si un nombre o tag está disponible?',
    answer:
      'Nuestra herramienta genera estilos y diseños estéticos. La comprobación en vivo de disponibilidad se realiza directamente al registrar el clan en el juego.'
  },
  {
    question: '¿Qué son los caracteres Unicode?',
    answer:
      'Son símbolos universales aceptados por iOS, Android y motores de juego que permiten aplicar tipografías especiales sin alterar el sistema.'
  }
];

export interface CuratedClanItem {
  id: string;
  name: string;
  category:
    | 'Originales'
    | 'Pro'
    | 'Insanos'
    | 'Aesthetic'
    | 'Elegantes'
    | 'Góticos'
    | 'Cursivos'
    | 'Símbolos'
    | 'Minimalistas'
    | 'Cortos';
  keywords: string[];
}

export const CURATED_CLANES_IDEAS_LIBRARY: CuratedClanItem[] = [
  // Originales / Pro
  { id: 'cl-1', name: '亗 SHADOW KINGS 亗', category: 'Originales', keywords: ['shadow', 'kings', 'pro', 'corona'] },
  { id: 'cl-2', name: '『NOVA SQUAD』', category: 'Originales', keywords: ['nova', 'squad', 'corchete'] },
  { id: 'cl-3', name: '★彡DARK WARRIORS彡★', category: 'Pro', keywords: ['dark', 'warriors', 'pro', 'estrellas'] },
  { id: 'cl-4', name: '么APEX LEGENDS么', category: 'Pro', keywords: ['apex', 'legends', 'pro', 'kanji'] },
  { id: 'cl-5', name: '꧁༺TITAN FORCE༻꧂', category: 'Pro', keywords: ['titan', 'force', 'alas', 'pro'] },

  // Insanos
  { id: 'cl-6', name: '亗 𝕾𝕺𝖀𝕷 𝕽𝕰𝕬𝖅𝕰𝕽𝕾 亗', category: 'Insanos', keywords: ['soul', 'reapers', 'gotico', 'insano'] },
  { id: 'cl-7', name: '☠️ SAVAGE CREW ☠️', category: 'Insanos', keywords: ['savage', 'crew', 'calavera', 'insano'] },
  { id: 'cl-8', name: 'メ VIPER ARMY メ', category: 'Insanos', keywords: ['viper', 'army', 'kanji', 'insano'] },
  { id: 'cl-9', name: '⚡ VORTEX TEAM ⚡', category: 'Insanos', keywords: ['vortex', 'team', 'rayo', 'insano'] },

  // Aesthetic / Elegantes
  { id: 'cl-10', name: '🌸 LUNA SQUAD 🌸', category: 'Aesthetic', keywords: ['luna', 'squad', 'flor', 'aesthetic'] },
  { id: 'cl-11', name: '✨ AURA TEAM ✨', category: 'Aesthetic', keywords: ['aura', 'team', 'sparkle', 'aesthetic'] },
  { id: 'cl-12', name: '👑 ROYAL EMPIRE 👑', category: 'Elegantes', keywords: ['royal', 'empire', 'corona', 'elegante'] },
  { id: 'cl-13', name: '𝒱𝒶𝓁𝑒𝓇𝒾𝒶 𝒞𝓁𝒶𝓃', category: 'Elegantes', keywords: ['valeria', 'clan', 'cursiva', 'elegante'] },

  // Góticos / Cursivos
  { id: 'cl-14', name: '𝕾𝖍𝖆𝖉𝖔𝖜 𝕲𝖚𝖎𝖑𝖉', category: 'Góticos', keywords: ['shadow', 'guild', 'gotico', 'fraktur'] },
  { id: 'cl-15', name: '𝕶𝖎𝖓𝖌𝖘 𝕷𝖊𝖌𝖎𝖔𝖓', category: 'Góticos', keywords: ['kings', 'legion', 'gotico'] },
  { id: 'cl-16', name: '𝓐𝓁𝓮𝓍 𝓢𝓆𝓊𝒶𝒹', category: 'Cursivos', keywords: ['alex', 'squad', 'cursiva'] },

  // Símbolos / Minimalistas / Cortos
  { id: 'cl-17', name: '☬ DRACO CLAN ☬', category: 'Símbolos', keywords: ['draco', 'clan', 'simbolos'] },
  { id: 'cl-18', name: '✦ PHANTOM CREW ✦', category: 'Símbolos', keywords: ['phantom', 'crew', 'sparkle'] },
  { id: 'cl-19', name: '· SHADOWS ·', category: 'Minimalistas', keywords: ['shadows', 'minimal', 'punto'] },
  { id: 'cl-20', name: '• APEX •', category: 'Minimalistas', keywords: ['apex', 'minimal', 'bullet'] },
  { id: 'cl-21', name: '亗 REX 亗', category: 'Cortos', keywords: ['rex', 'corto', 'corona'] },
  { id: 'cl-22', name: '『ZED』', category: 'Cortos', keywords: ['zed', 'corto', 'corchete'] },
  { id: 'cl-23', name: '⚡NEO⚡', category: 'Cortos', keywords: ['neo', 'corto', 'rayo'] }
];

export const CLAN_POWER_WORDS = [
  'SHADOW',
  'LEGENDS',
  'WARRIORS',
  'TITANS',
  'KINGS',
  'ELITE',
  'GHOST',
  'STORM',
  'VORTEX',
  'PHOENIX',
  'DRAGONS',
  'KNIGHTS',
  'RIVALS',
  'INVADERS',
  'HUNTERS',
  'REBELS',
  'EMPIRE',
  'INFINITY',
  'NOVA',
  'PREDATORS'
];

export const CLAN_TEAM_WORDS = [
  'SQUAD',
  'TEAM',
  'CLAN',
  'FORCE',
  'GUILD',
  'CREW',
  'ARMY',
  'UNIT',
  'LEGION',
  'ALLIANCE'
];

export const CLAN_DECORATIVE_DECK = [
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
