export interface SymbolFaqItem {
  question: string;
  answer: string;
}

export const SYMBOL_FAQ_ITEMS: SymbolFaqItem[] = [
  {
    question: '¿Qué son los símbolos para Instagram?',
    answer:
      'Son caracteres alfanuméricos y gráficos pertenecientes al estándar universal Unicode (estrellas, corazones, flechas, flores, separadores) que se pueden copiar y pegar directamente en tu perfil de Instagram sin instalar aplicaciones.'
  },
  {
    question: '¿Cómo copiar símbolos para Instagram?',
    answer:
      'Toca o haz clic en cualquier tarjeta de símbolo o en el botón "Copiar". El carácter se guardará instantáneamente en tu portapapeles listo para pegarlo en tu biografía, nombre o comentarios.'
  },
  {
    question: '¿Puedo usar estos símbolos en mi bio?',
    answer:
      '¡Sí! La biografía de Instagram admite perfectamente símbolos Unicode, emojis y separadores decorativos para estructurar la información de tu perfil.'
  },
  {
    question: '¿Puedo usar símbolos en mi nombre de Instagram?',
    answer:
      'Sí, en la casilla de Nombre de Perfil (Display Name) puedes incluir estrellas, corazones y marcos decorativos. Recuerda que el Nombre de Usuario (@handle) no acepta caracteres especiales.'
  },
  {
    question: '¿Funcionan todos los símbolos en Instagram?',
    answer:
      'La gran mayoría de los símbolos Unicode son 100% compatibles. No obstante, algunos dispositivos antiguos o versiones de sistema operativo pueden mostrar un recuadro () si carecen del glifo correspondiente.'
  },
  {
    question: '¿Qué son los símbolos Unicode?',
    answer:
      'Unicode es el código internacional estandarizado para representar texto y símbolos en todas las plataformas digitales (iOS, Android, Windows, Mac), garantizando que se vean igual en casi cualquier pantalla.'
  },
  {
    question: '¿Por qué algunos símbolos se ven diferentes?',
    answer:
      'La apariencia visual de los símbolos y emojis puede variar ligeramente dependiendo de la fuente del sistema operativo de cada smartphone.'
  },
  {
    question: '¿Cómo usar símbolos aesthetic en Instagram?',
    answer:
      'Puedes combinarlos al inicio o final de tus líneas de bio, como separadores entre palabras clave, o para enmarcar el título principal de tu perfil.'
  },
  {
    question: '¿Puedo combinar varios símbolos?',
    answer:
      'Sí. Utiliza nuestra herramienta de "Mi Selección" o el "Combinador de Símbolos" para juntar varias estrellas, corazones o separadores y copiarlos todos juntos.'
  }
];

export interface SymbolCombinationItem {
  id: string;
  title: string;
  combo: string;
}

export const CURATED_SYMBOL_COMBINATIONS: SymbolCombinationItem[] = [
  { id: 'cb-1', title: 'Estrellas Dobles', combo: '★ ✦ ★' },
  { id: 'cb-2', title: 'Corazones Místicos', combo: '♡ ✧ ♡' },
  { id: 'cb-3', title: 'Flechas de Rumbo', combo: '→ ✦ →' },
  { id: 'cb-4', title: 'Alas Góticas', combo: '꧁༺ ★ ༻꧂' },
  { id: 'cb-5', title: 'Marco de Cerezo', combo: '🌸 ·.★ 🌸' },
  { id: 'cb-6', title: 'Chispas Enmarcadas', combo: '┊✨ ✦ ✨┊' },
  { id: 'cb-7', title: 'Flor de Línea', combo: '🌸━━🌸' },
  { id: 'cb-8', title: 'Apuntes Aesthetic', combo: '˚📑 ♡ ˚📑' },
  { id: 'cb-9', title: 'Rayo Místico', combo: '⚡ ✦ ⚡' },
  { id: 'cb-10', title: 'Corona Royalty', combo: '👑 ✨ 👑' }
];

export interface HighlightCategoryGroup {
  category: string;
  icon: string;
  symbols: string[];
}

export const HIGHLIGHT_SYMBOLS_COLLECTION: HighlightCategoryGroup[] = [
  { category: 'Viajes / Travel', icon: '✈️', symbols: ['✈️', '🌴', '🏖️', '🗺️', '📍', '🌍', '📸', '🌄'] },
  { category: 'Fotografía / Arte', icon: '📸', symbols: ['📸', '🎨', '🖌️', '🖼️', '🎞️', '📽️', '📷', '✨'] },
  { category: 'Música / Beats', icon: '🎵', symbols: ['🎵', '🎶', '🎧', '🎤', '🎷', '🎸', '🎹', '🔊'] },
  { category: 'Comida / Foodie', icon: '🍕', symbols: ['☕', '🍷', '🍕', '🍰', '🍣', '🥑', '🥂', '🥐'] },
  { category: 'Estilo / Fashion', icon: '💄', symbols: ['💄', '👗', '🛍️', '👠', '👑', '💎', '💅', '🎀'] },
  { category: 'Fitness / Salud', icon: '🏋️', symbols: ['🏋️', '🏃', '🚴', '🥇', '⚡', '💪', '🧘', '🥑'] },
  { category: 'Trabajo / Negocios', icon: '💼', symbols: ['💼', '💻', '📑', '✉️', '📊', '🚀', '💡', '⚖️'] },
  { category: 'Amigos / Lifestyle', icon: '🥂', symbols: ['❤️', '✨', '🐾', '🧸', '☀️', '🌙', '🎉', '🥂'] }
];
