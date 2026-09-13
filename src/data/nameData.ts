export interface QuickNameExample {
  label: string;
  name: string;
  category: 'personales' | 'apodos' | 'aesthetic' | 'elegantes' | 'gaming' | 'creadores' | 'marcas';
}

export const QUICK_NAME_PRESETS: QuickNameExample[] = [
  { label: 'Alex', name: 'Alex', category: 'personales' },
  { label: 'Sofía', name: 'Sofía', category: 'elegantes' },
  { label: 'Carlos', name: 'Carlos', category: 'personales' },
  { label: 'Luna', name: 'Luna', category: 'aesthetic' },
  { label: 'Creator', name: 'Creator', category: 'creadores' },
  { label: 'Gamer', name: 'Gamer', category: 'gaming' },
  { label: 'Digital Creator', name: 'Digital Creator', category: 'creadores' },
  { label: 'Photography', name: 'Photography', category: 'marcas' },
  { label: 'Traveler', name: 'Traveler', category: 'aesthetic' },
  { label: 'Ángel', name: 'Ángel', category: 'elegantes' },
  { label: 'Valeria', name: 'Valeria', category: 'elegantes' },
  { label: 'Shadow', name: 'Shadow', category: 'gaming' }
];

export interface NicheNameCategory {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export const NICHE_NAME_CATEGORIES: NicheNameCategory[] = [
  {
    id: 'personales',
    title: 'Nombres Personales',
    description: 'Estilos limpios, elegantes y legibles ideales para nombres propios en perfiles personales.',
    examples: ['Alex Martínez', 'Sofía Gómez', 'Mateo Silva', 'Lucía Fernández', 'Daniela Ríos']
  },
  {
    id: 'apodos',
    title: 'Apodos y Nicknames',
    description: 'Formatos creativos con símbolos y caracteres especiales para apodos únicos.',
    examples: ['Sofi', 'Alexito', 'Manu', 'Luni', 'Nico', 'Fer']
  },
  {
    id: 'aesthetic',
    title: 'Nombres Aesthetic',
    description: 'Combinaciones visuales suaves con marcos, estrellas, flores y símbolos sutiles.',
    examples: ['Luna ✨', '🌸 Sofía 🌸', '·.★ Alex ★.·', '┊✨ Mateo ✨┊', '˚📑 Lucía ˚📑']
  },
  {
    id: 'elegantes',
    title: 'Nombres Elegantes',
    description: 'Letras cursivas y de caligrafía elegante para dar un toque sofisticado a tu perfil.',
    examples: ['𝒱𝒶𝓁𝑒𝓇𝒾𝒶', '𝒮𝑜𝒻𝒾́𝒶 𝑀𝒶𝓇𝓉𝒾́𝓃𝑒𝓏', '𝓐𝓁𝓮𝓍 𝓜𝓮𝓷𝒹𝓸𝓯𝒶', 'ℂ𝒶𝓇𝓁𝑜𝓈 𝒮𝒾𝓁𝓋𝒶']
  },
  {
    id: 'gaming',
    title: 'Nombres para Gaming',
    description: 'Estilos impactantes con símbolos de batalla, corchetes y caracteres góticos.',
    examples: ['꧁༺Shadow༻꧂', '⚡Viper⚡', '⚔️Nexus⚔️', '✦Kratos✦', '『Apex』']
  },
  {
    id: 'creadores',
    title: 'Nombres de Creadores',
    description: 'Formato profesional para perfiles de creadores de contenido, fotografía y arte.',
    examples: ['Digital Creator | Alex', 'Photography • Sofía', 'Design • Carlos Silva', 'Art & Style • Luna']
  },
  {
    id: 'marcas',
    title: 'Nombres para Marcas',
    description: 'Estilos versalitas y limpios recomendados para proyectos personales, tiendas y marcas.',
    examples: ['STUDIO 84', 'LUNA JEWELRY', 'AESTHETIC BOUTIQUE', 'URBAN FLOW']
  }
];

export interface DecoratedNameItem {
  id: string;
  title: string;
  prefix: string;
  suffix: string;
  sample: string;
}

export const NAME_DECORATIONS: DecoratedNameItem[] = [
  { id: 'dec-1', title: 'Estrellas Dobles', prefix: '★彡 ', suffix: ' 彡★', sample: '★彡 Alex 彡★' },
  { id: 'dec-2', title: 'Corazones Sutiles', prefix: '♡ ', suffix: ' ♡', sample: '♡ Sofía ♡' },
  { id: 'dec-3', title: 'Corchetes Góticos', prefix: '『 ', suffix: ' 』', sample: '『 Carlos 』' },
  { id: 'dec-4', title: 'Chispas Sparkles', prefix: '✨ ', suffix: ' ✨', sample: '✨ Luna ✨' },
  { id: 'dec-5', title: 'Marco de Flores', prefix: '🌸 ', suffix: ' 🌸', sample: '🌸 Valeria 🌸' },
  { id: 'dec-6', title: 'Crown Royalty', prefix: '👑 ', suffix: ' 👑', sample: '👑 Mateo 👑' },
  { id: 'dec-7', title: 'Barra Minimalista', prefix: '·.★ ', suffix: ' ★.·', sample: '·.★ Lucas ★.·' },
  { id: 'dec-8', title: 'Líneas Punteadas', prefix: '┊ ', suffix: ' ┊', sample: '┊ Daniela ┊' },
  { id: 'dec-9', title: 'Game Wings', prefix: '꧁༺ ', suffix: ' ༻꧂', sample: '꧁༺ Viper ༻꧂' },
  { id: 'dec-10', title: 'Rayo Energy', prefix: '⚡ ', suffix: ' ⚡', sample: '⚡ Nexus ⚡' },
  { id: 'dec-11', title: 'Cruces Elegantes', prefix: '† ', suffix: ' †', sample: '† Adrián †' },
  { id: 'dec-12', title: 'Diamantes', prefix: '✦ ', suffix: ' ✦', sample: '✦ Camila ✦' }
];

export interface NameSymbolGroup {
  category: string;
  symbols: string[];
}

export const NAME_SYMBOLS_COLLECTION: NameSymbolGroup[] = [
  {
    category: 'Hearts (Corazones)',
    symbols: ['♡', '♥', '❣', '❥', '💕', '💖', '💗', '🖤', '🤍', '🤎', '💜', '💙', '💚', '💛', '🧡']
  },
  {
    category: 'Stars (Estrellas)',
    symbols: ['★', '☆', '✦', '✧', '✨', '⭐', '🌟', '💫', '⚡', '🌌', '🌠', '✪', '✫', '✬', '✭']
  },
  {
    category: 'Arrows & Pointers',
    symbols: ['→', '⇒', '➔', '✈', '▲', '▼', '►', '◄', '⚡', '↺', '↻', '➲', '➹', '➺', '➻']
  },
  {
    category: 'Dots & Brackets',
    symbols: ['•', '·', '°', '▫', '▪', '『', '』', '【', '】', '〖', '〗', '〚', '〛', '〔', '〕']
  },
  {
    category: 'Decorative & Aesthetic',
    symbols: ['🌸', '🌺', '🌹', '🌿', '🍃', '👑', '🦋', '🧸', '📑', '✉️', '🕯️', '🥂', '🔮', '🧸', '🎀']
  },
  {
    category: 'Minimal & Separators',
    symbols: ['┊', '┆', '│', '┃', '╱', '╲', '⚡', '†', '‡', '§', '¶', '⚓', '⚖️', '✦', '✧']
  }
];

export interface NameFaqItem {
  question: string;
  answer: string;
}

export const NAME_FAQ_ITEMS: NameFaqItem[] = [
  {
    question: '¿Cómo crear letras bonitas para nombres?',
    answer:
      'Solo necesitas escribir tu nombre o apodo en el cuadro del generador al inicio de esta página. El sistema transformará automáticamente tu texto en más de 350 estilos tipográficos. Haz clic en "Copiar" en el estilo que más te guste y pégalo directamente en la casilla de nombre de tu perfil.'
  },
  {
    question: '¿Puedo usar estas letras en mi nombre de Instagram?',
    answer:
      'Sí, el campo de nombre de perfil (Display Name) de Instagram admite la mayoría de caracteres estilizados Unicode. No obstante, ten en cuenta que el nombre de usuario (@handle) tiene reglas más estrictas y solo acepta letras estándar, números, puntos y guiones bajos.'
  },
  {
    question: '¿Cuál es la diferencia entre nombre y nombre de usuario en Instagram?',
    answer:
      'El "Nombre" de Instagram es el título que aparece en la parte superior de tu perfil y en los resultados de búsqueda. Admite mayúsculas, espacios, caracteres decorativos y emojis. El "Nombre de usuario" (@handle) es la dirección única de tu cuenta, sujeta a restricciones estrictas de caracteres estándar.'
  },
  {
    question: '¿Puedo copiar y pegar estos nombres?',
    answer:
      '¡Absolutamente! Todos los estilos de esta herramienta utilizan símbolos Unicode estándar compatibles con copiar y pegar. Al hacer clic en el botón "Copiar", el texto enriquecido se guardará en tu portapapeles listo para pegarse en Instagram, TikTok, WhatsApp o Facebook.'
  },
  {
    question: '¿Qué son las letras Unicode?',
    answer:
      'Las letras Unicode no son archivos de fuentes (.ttf o .otf), sino símbolos gráficos definidos dentro del estándar universal de codificación Unicode. Por este motivo, se pueden copiar y pegar en casi cualquier aplicación sin necesidad de instalar fuentes adicionales.'
  },
  {
    question: '¿Funcionan todas las letras en Instagram?',
    answer:
      'La gran mayoría de los 350+ estilos funcionan perfectamente en la casilla de Nombre de Instagram. En raras ocasiones, algunos dispositivos o sistemas operativos antiguos pueden mostrar un rectángulo o signo de interrogación () si no disponen del glifo correspondiente.'
  },
  {
    question: '¿Puedo usar emojis y símbolos en mi nombre?',
    answer:
      'Sí. Puedes combinar cualquier estilo de letras con emojis, estrellas, corazones y separadores decorativos para darle un toque único a tu perfil sin romper el formato.'
  },
  {
    question: '¿Por qué algunos caracteres aparecen diferentes?',
    answer:
      'El aspecto final del texto puede variar ligeramente según la fuente del sistema operativo de tu teléfono (iOS, Android o Windows). Sin embargo, el significado del carácter y el estilo visual se conservan en todas las plataformas.'
  },
  {
    question: '¿Puedo crear nombres aesthetic?',
    answer:
      'Sí. Disponemos de categorías específicas para estilos Aesthetic, Góticos, Cursivas Elegantes y Marcos decorativos que te permitirán crear un nombre aesthetic en pocos segundos.'
  }
];
