export interface FreeFireFaqItem {
  question: string;
  answer: string;
}

export const FREE_FIRE_FAQ_ITEMS: FreeFireFaqItem[] = [
  {
    question: '¿Cómo crear un nombre para Free Fire?',
    answer:
      'Ingresa tu nombre, apodo o palabra base en el cuadro del generador al inicio de esta página. Elige la categoría o modo de estilo que prefieras (Pro, Gaming, Dark, Aesthetic, Símbolos) y haz clic en "Copiar" para guardar tu nuevo nickname.'
  },
  {
    question: '¿Cómo copiar un nombre para Free Fire?',
    answer:
      'Solo tienes que hacer clic o tocar en el botón "Copiar" al lado del nombre generado. El texto formateado con sus símbolos se guardará en tu portapapeles listo para pegarlo en el juego.'
  },
  {
    question: '¿Puedo usar letras bonitas en Free Fire?',
    answer:
      'Sí. La mayoría de los símbolos y caracteres de Unicode incluidos en este generador son aceptados en la casilla de apodo de Free Fire.'
  },
  {
    question: '¿Funcionan todos los símbolos en Free Fire?',
    answer:
      'La gran mayoría de los caracteres y marcos Unicode funcionan correctamente. Sin embargo, Free Fire puede actualizar sus normas de caracteres permitidos o aplicar un límite de longitud (habitualmente 12 caracteres), por lo que recomendamos probar el apodo copiado en la casilla del juego.'
  },
  {
    question: '¿Cómo crear nombres aesthetic para Free Fire?',
    answer:
      'Selecciona el modo "Aesthetic" o la pestaña de categoría "✨ Aesthetic" en nuestro generador para obtener estilos con tipografías suaves, flores, coronas y separadores limpios.'
  },
  {
    question: '¿Puedo crear un nombre con símbolos?',
    answer:
      '¡Por supuesto! Puedes utilizar la sección "Decora tu nombre" o el modo "Gaming" para añadir alas góticas (꧁༺ ༻꧂), coronas (👑), estrellas (★), corchetes (『』) y símbolos Pro (亗, 么).'
  },
  {
    question: '¿Cómo saber si un nombre está disponible?',
    answer:
      'Este generador crea formatos y combinaciones estéticas de texto. La disponibilidad final de un nick dentro de Free Fire se verifica directamente al pegar y guardar el nombre en el juego.'
  },
  {
    question: '¿Qué son las letras Unicode?',
    answer:
      'Son símbolos del estándar universal Unicode reconocidos de forma nativa por iOS, Android y motores de juego, permitiendo copiar y pegar apodos estilizados sin descargar aplicaciones externas.'
  }
];

export const FREE_FIRE_PRESETS = [
  'Shadow',
  'Dragon',
  'Sniper',
  'Alex',
  'Dark King',
  'Viper',
  'Kratos',
  'Apex',
  'Nexus',
  'Legend'
];

export const RANDOM_NAME_WORDS = [
  'Shadow',
  'Legend',
  'Storm',
  'Ghost',
  'King',
  'Wolf',
  'Nova',
  'Titan',
  'Blaze',
  'Viper',
  'Nexus',
  'Kratos',
  'Apex',
  'Vortex',
  'Phantom',
  'Cyber',
  'Venom',
  'Rogue',
  'Hunter',
  'Spectre',
  'Hydra',
  'Omega',
  'Kaiser',
  'Draco',
  'Savage',
  'Valiant',
  'Zeus',
  'Ares',
  'Valkyrie',
  'Ronin'
];

export const RANDOM_SYMBOL_PREFIXES = [
  '亗 ',
  '么 ',
  '『 ',
  '꧁༺ ',
  '★彡 ',
  '⚡ ',
  '👑 ',
  '✦ ',
  '⚔️ ',
  '💀 '
];

export const RANDOM_SYMBOL_SUFFIXES = [
  ' 亗',
  ' 么',
  ' 』',
  ' ༻꧂',
  ' 彡★',
  ' ⚡',
  ' 👑',
  ' ✦',
  ' ⚔️',
  ' 💀'
];

export interface NicheNameIdeaGroup {
  title: string;
  description: string;
  examples: string[];
}

export const FREE_FIRE_NICHE_IDEAS: NicheNameIdeaGroup[] = [
  {
    title: 'Nombres Pro para Free Fire',
    description: 'Estilos limpios e impactantes con corchetes y coronas para jugadores competitivos.',
    examples: ['亗 SHADOW 亗', '『KING』', '么VIPER么', '★彡APEX彡★', '✦KRATOS✦']
  },
  {
    title: 'Nombres Aesthetic para Free Fire',
    description: 'Formatos suaves con flores, estrellas y versalitas para perfiles aesthetic.',
    examples: ['🌸 LUNA 🌸', '✨ SOFÍA ✨', '·.★ ALEX ★.·', '┊✨ MATEO ✨┊', '˚📑 LUCÍA ˚📑']
  },
  {
    title: 'Nombres Cortos para Free Fire',
    description: 'Nicknames de 3 a 5 letras ideales para encajar fácilmente dentro del límite del juego.',
    examples: ['REX', 'ZED', 'NEO', 'MAX', 'ACE', 'ASH', 'KAI', 'LUX']
  },
  {
    title: 'Nombres para Clanes',
    description: 'Prefijos y formatos coordinados recomendados para escuadras y clanes.',
    examples: ['[TEAM] SHADOW', '『 clan 』 LEGEND', '⚡ VORTEX TEAM', '亗 GODS CLAN 亗']
  },
  {
    title: 'Nombres Estilo Warrior / Dark',
    description: 'Combinaciones con caracteres góticos, dagas y símbolos de batalla.',
    examples: ['꧁༺DARK KING༻꧂', '⚔️NEXUS⚔️', '💀SPECTRE💀', '†DRACO†', '☬RONIN☬']
  }
];
