export interface FreeFireSubFaqItem {
  question: string;
  answer: string;
}

export const FREE_FIRE_SUB_FAQ_ITEMS: FreeFireSubFaqItem[] = [
  {
    question: '¿Cómo crear un nombre para Free Fire?',
    answer:
      'Ingresa tu nombre o apodo en el cuadro del generador o explora nuestro catálogo de ideas. Selecciona tu estilo preferido (Bonitos, Aesthetic, Pro, Símbolos, Góticos) y haz clic en "Copiar" para pegarlo en tu perfil del juego.'
  },
  {
    question: '¿Cómo copiar nombres para Free Fire?',
    answer:
      'Solo necesitas tocar el botón "Copiar" en la tarjeta del nombre o estilo deseado. El texto se guardará inmediatamente en el portapapeles de tu teléfono o computadora.'
  },
  {
    question: '¿Puedo usar letras bonitas en Free Fire?',
    answer:
      'Sí, Free Fire es compatible con la mayoría de símbolos gráficos y fuentes de Unicode.'
  },
  {
    question: '¿Puedo usar símbolos en mi nombre?',
    answer:
      '¡Por supuesto! Disponemos de estilos con coronas (亗, 👑), alas (꧁༺ ༻꧂), corchetes (『』) y estrellas (★).'
  },
  {
    question: '¿Funcionan todos los nombres en Free Fire?',
    answer:
      'La inmensa mayoría de formatos Unicode son compatibles. No obstante, recomendamos verificar la longitud (máximo 12 caracteres) directamente en la casilla de apodo de Free Fire.'
  },
  {
    question: '¿Cómo crear un nombre aesthetic?',
    answer:
      'Filtra por la categoría "Aesthetic" o "Bonitos" para ver nombres formateados con flores de cerezo (🌸), destellos (✨) y caracteres suaves de versalitas.'
  },
  {
    question: '¿Puedo comprobar si un nombre está disponible?',
    answer:
      'Esta herramienta genera formatos y combinaciones estéticas. La disponibilidad final de un nick dentro de Free Fire se comprueba al guardar el nombre en el juego.'
  },
  {
    question: '¿Qué son las letras Unicode?',
    answer:
      'Son símbolos gráficos universales reconocidos por iOS, Android y motores de juego que permiten copiar y pegar apodos estilizados sin descargar apps.'
  }
];

export interface CuratedNameIdeaItem {
  id: string;
  name: string;
  category: 'Bonitos' | 'Aesthetic' | 'Elegantes' | 'Símbolos' | 'Cortos' | 'Gaming' | 'Pro' | 'Cursivos' | 'Góticos' | 'Minimalistas';
  keywords: string[];
}

export const CURATED_NAME_IDEAS_LIBRARY: CuratedNameIdeaItem[] = [
  // Pro / Gaming
  { id: 'ni-1', name: '亗 SHADOW 亗', category: 'Pro', keywords: ['shadow', 'pro', 'corona', 'dark'] },
  { id: 'ni-2', name: '『KING』', category: 'Pro', keywords: ['king', 'rey', 'corchete', 'pro'] },
  { id: 'ni-3', name: '么VIPER么', category: 'Pro', keywords: ['viper', 'kanji', 'gaming'] },
  { id: 'ni-4', name: '★彡APEX彡★', category: 'Pro', keywords: ['apex', 'estrellas', 'legend'] },
  { id: 'ni-5', name: '꧁༺KRATOS༻꧂', category: 'Pro', keywords: ['kratos', 'alas', 'warrior'] },
  { id: 'ni-6', name: '⚡NEXUS⚡', category: 'Gaming', keywords: ['nexus', 'rayo', 'electric'] },
  { id: 'ni-7', name: '⚔️TITAN⚔️', category: 'Gaming', keywords: ['titan', 'espadas', 'warrior'] },
  { id: 'ni-8', name: '💀SPECTRE💀', category: 'Gaming', keywords: ['spectre', 'fantasma', 'dark'] },
  { id: 'ni-9', name: '✦BLAZE✦', category: 'Gaming', keywords: ['blaze', 'fuego', 'sparkle'] },
  { id: 'ni-10', name: '☬DRACO☬', category: 'Gaming', keywords: ['draco', 'dragon', 'simbolo'] },

  // Aesthetic / Bonitos
  { id: 'ni-11', name: '🌸 LUNA 🌸', category: 'Aesthetic', keywords: ['luna', 'flor', 'sakura', 'aesthetic'] },
  { id: 'ni-12', name: '✨ SOFÍA ✨', category: 'Aesthetic', keywords: ['sofia', 'brillo', 'sparkle'] },
  { id: 'ni-13', name: '·.★ ALEX ★.·', category: 'Aesthetic', keywords: ['alex', 'estrella', 'minimal'] },
  { id: 'ni-14', name: '┊✨ MATEO ✨┊', category: 'Aesthetic', keywords: ['mateo', 'linea', 'brillo'] },
  { id: 'ni-15', name: '˚📑 LUCÍA ˚📑', category: 'Aesthetic', keywords: ['lucia', 'apuntes', 'cozy'] },
  { id: 'ni-16', name: '♡ VALERIA ♡', category: 'Bonitos', keywords: ['valeria', 'corazon', 'bonito'] },
  { id: 'ni-17', name: '👑 MATEO 👑', category: 'Bonitos', keywords: ['mateo', 'corona', 'rey'] },
  { id: 'ni-18', name: '🌸 DANIELA 🌸', category: 'Bonitos', keywords: ['daniela', 'flor', 'bonito'] },
  { id: 'ni-19', name: '✨ CARLOS ✨', category: 'Bonitos', keywords: ['carlos', 'brillo', 'estrella'] },
  { id: 'ni-20', name: '♡ CAMILA ♡', category: 'Bonitos', keywords: ['camila', 'corazon', 'amor'] },

  // Elegantes / Cursivos
  { id: 'ni-21', name: '𝒱𝒶𝓁𝑒𝓇𝒾𝒶', category: 'Elegantes', keywords: ['valeria', 'cursiva', 'elegante'] },
  { id: 'ni-22', name: '𝒮𝑜𝒻𝒾́𝒶 𝑀𝒶𝓇𝓉𝒾́𝓃𝑒𝓏', category: 'Elegantes', keywords: ['sofia', 'cursiva', 'manuscrita'] },
  { id: 'ni-23', name: '𝓐𝓁𝓮𝓍 𝓜𝓮𝓷𝒹𝓸𝓯𝒶', category: 'Cursivos', keywords: ['alex', 'script', 'negrita'] },
  { id: 'ni-24', name: '𝒞𝒶𝓇𝓁𝑜𝓈 𝒮𝒾𝓁𝓋𝒶', category: 'Cursivos', keywords: ['carlos', 'cursiva', 'script'] },
  { id: 'ni-25', name: '𝐻𝑜𝓁𝒶 𝑀𝓊𝓃𝒹𝑜', category: 'Cursivos', keywords: ['hola', 'italica', 'cursiva'] },

  // Cortos
  { id: 'ni-26', name: '亗 REX 亗', category: 'Cortos', keywords: ['rex', 'corto', 'pro'] },
  { id: 'ni-27', name: '『ZED』', category: 'Cortos', keywords: ['zed', 'corto', 'gant'] },
  { id: 'ni-28', name: '么NEO么', category: 'Cortos', keywords: ['neo', 'corto', 'kanji'] },
  { id: 'ni-29', name: '★MAX★', category: 'Cortos', keywords: ['max', 'corto', 'estrella'] },
  { id: 'ni-30', name: '⚡ACE⚡', category: 'Cortos', keywords: ['ace', 'corto', 'rayo'] },
  { id: 'ni-31', name: '✦KAI✦', category: 'Cortos', keywords: ['kai', 'corto', 'sparkle'] },
  { id: 'ni-32', name: '🌸LUX🌸', category: 'Cortos', keywords: ['lux', 'corto', 'flor'] },

  // Góticos / Minimalistas
  { id: 'ni-33', name: '𝕾𝖍𝖆𝖉𝖔𝖜', category: 'Góticos', keywords: ['shadow', 'gotico', 'blackletter'] },
  { id: 'ni-34', name: '𝕶𝖎𝖓𝖌', category: 'Góticos', keywords: ['king', 'gotico', 'fraktur'] },
  { id: 'ni-35', name: '𝕯𝖆𝖗𝖐 𝕷𝖔𝖗𝖉', category: 'Góticos', keywords: ['dark', 'gotico', 'lord'] },
  { id: 'ni-36', name: '· SHADOW ·', category: 'Minimalistas', keywords: ['shadow', 'minimal', 'punto'] },
  { id: 'ni-37', name: '• LEGEND •', category: 'Minimalistas', keywords: ['legend', 'minimal', 'bullet'] },
  { id: 'ni-38', name: '│ VORTEX │', category: 'Minimalistas', keywords: ['vortex', 'minimal', 'linea'] }
];
