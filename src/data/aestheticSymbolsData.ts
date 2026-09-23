export interface AestheticSymbol {
  id: string;
  symbol: string;
  name: string;
  category: AestheticCategoryType;
  description: string;
  tags: string[];
  popular?: boolean;
}

export const AESTHETIC_CATEGORIES = [
  'Todos',
  'Coquette y Lazos',
  'Lunas y Cielo',
  'Corazones Suaves',
  'Flores y Mariposas',
  'Separadores y Marcos',
  'Kaomoji Cute',
  'Chispas y Destellos'
] as const;

export type AestheticCategoryType = (typeof AESTHETIC_CATEGORIES)[number];

export const AESTHETIC_SYMBOLS: AestheticSymbol[] = [
  // --- COQUETTE Y LAZOS ---
  {
    id: 'coq-1',
    symbol: '୨୧',
    name: 'Lazo Coquette Clásico',
    category: 'Coquette y Lazos',
    description: 'El lazo o moño aesthetic más popular de Instagram, TikTok y Pinterest.',
    tags: ['lazo', 'coquette', 'moño', 'tierno', 'cute'],
    popular: true
  },
  {
    id: 'coq-2',
    symbol: 'ೀ',
    name: 'Listón Floral Telugú',
    category: 'Coquette y Lazos',
    description: 'Carácter telugú que simula un delicado listón o rizo coquette.',
    tags: ['liston', 'rizo', 'coquette', 'telugu'],
    popular: true
  },
  {
    id: 'coq-3',
    symbol: '𐙚',
    name: 'Moño Coquette Épico',
    category: 'Coquette y Lazos',
    description: 'Glifo estilizado de lazo perfecto para bios y fotos de perfil.',
    tags: ['moño', 'lazo', 'coquette', 'cinta'],
    popular: true
  },
  {
    id: 'coq-4',
    symbol: '౨ৎ',
    name: 'Lazo Doble Coquette',
    category: 'Coquette y Lazos',
    description: 'Combinación suave de rizo doble para acompañar nombres bonitos.',
    tags: ['lazo doble', 'coquette', 'cinta', 'adorno'],
    popular: true
  },
  {
    id: 'coq-5',
    symbol: '𓍢ִ໋',
    name: 'Filigrana Suave',
    category: 'Coquette y Lazos',
    description: 'Espirales ornamentales vintage para perfiles limpios y románticos.',
    tags: ['filigrana', 'adorno', 'espiral', 'elegante']
  },
  {
    id: 'coq-6',
    symbol: '🎀',
    name: 'Moño Rosa Emoji',
    category: 'Coquette y Lazos',
    description: 'Lazo rosa tradicional para títulos y descripciones femeninas.',
    tags: ['moño', 'rosa', 'emoji', 'regalo']
  },

  // --- LUNAS Y CIELO ---
  {
    id: 'lun-1',
    symbol: '☾',
    name: 'Luna Creciente',
    category: 'Lunas y Cielo',
    description: 'Luna hueca estilizada, reina de los perfiles nocturnos y aesthetic.',
    tags: ['luna', 'noche', 'cielo', 'espacio', 'moon'],
    popular: true
  },
  {
    id: 'lun-2',
    symbol: '☽',
    name: 'Luna Menguante',
    category: 'Lunas y Cielo',
    description: 'Contorno de luna orientada hacia la izquierda.',
    tags: ['luna', 'menguante', 'misterio', 'noche']
  },
  {
    id: 'lun-3',
    symbol: '☁',
    name: 'Nube Algodón',
    category: 'Lunas y Cielo',
    description: 'Nube esponjosa para estéticas suaves, soñadoras y vaporwave.',
    tags: ['nube', 'cielo', 'suave', 'cloud', 'blanco'],
    popular: true
  },
  {
    id: 'lun-4',
    symbol: '⋆',
    name: 'Punto Estelar Diminuto',
    category: 'Lunas y Cielo',
    description: 'Polvo de estrellas ideal para separar palabras delicadamente.',
    tags: ['estrella', 'polvo', 'punto', 'espaciador'],
    popular: true
  },
  {
    id: 'lun-5',
    symbol: '｡',
    name: 'Burbuja Flotante',
    category: 'Lunas y Cielo',
    description: 'Círculo miniatura para darle aire y dinamismo a tus frases.',
    tags: ['burbuja', 'punto', 'espaciador', 'kawaii']
  },
  {
    id: 'lun-6',
    symbol: '°',
    name: 'Esfera Celestial',
    category: 'Lunas y Cielo',
    description: 'Grado elevado que aporta ligereza a las combinaciones aesthetic.',
    tags: ['grado', 'esfera', 'flotante', 'suave']
  },
  {
    id: 'lun-7',
    symbol: '☼',
    name: 'Sol con Corona de Luz',
    category: 'Lunas y Cielo',
    description: 'Sol radiante minimalista para bios optimistas y cálidas.',
    tags: ['sol', 'sun', 'luz', 'calor', 'verano']
  },
  {
    id: 'lun-8',
    symbol: '⋆｡°✩',
    name: 'Cielo Estelar Completo',
    category: 'Lunas y Cielo',
    description: 'Frase cósmica lista para copiar: estrella, burbujas y destello.',
    tags: ['cielo', 'constelacion', 'estrellas', 'combo'],
    popular: true
  },

  // --- CORAZONES SUAVES ---
  {
    id: 'cor-1',
    symbol: '♡',
    name: 'Corazón Blanco Suave',
    category: 'Corazones Suaves',
    description: 'El clásico indiscutible: corazón de línea fina no saturado.',
    tags: ['corazon', 'blanco', 'amor', 'tierno', 'cute'],
    popular: true
  },
  {
    id: 'cor-2',
    symbol: 'ᥫ᭡',
    name: 'Corazón Minimalista Cham',
    category: 'Corazones Suaves',
    description: 'Corazón caligráfico muy viral en Instagram y WhatsApp.',
    tags: ['cham', 'corazon', 'caligrafico', 'moderno'],
    popular: true
  },
  {
    id: 'cor-3',
    symbol: 'ꨄ',
    name: 'Corazón Árabe Estético',
    category: 'Corazones Suaves',
    description: 'Silueta de corazón delicado derivado de glifos decorativos.',
    tags: ['arabe', 'corazon', 'minimalista', 'elegante'],
    popular: true
  },
  {
    id: 'cor-4',
    symbol: '𓆩♡𓆪',
    name: 'Corazón con Alas Grandes',
    category: 'Corazones Suaves',
    description: 'El diseño alado más buscado para enmarcar apodos y bios.',
    tags: ['alas', 'corazon', 'angel', 'aesthetic'],
    popular: true
  },
  {
    id: 'cor-5',
    symbol: '❥',
    name: 'Corazón Inclinado',
    category: 'Corazones Suaves',
    description: 'Corazón ladeado tipo caligrafía artística.',
    tags: ['inclinado', 'romantico', 'caligrafia', 'amor']
  },
  {
    id: 'cor-6',
    symbol: 'დ',
    name: 'Corazón Georgiano Doble',
    category: 'Corazones Suaves',
    description: 'Letra con forma de corazón suave y redondeado.',
    tags: ['georgiano', 'redondo', 'tierno', 'amor']
  },
  {
    id: 'cor-7',
    symbol: 'ღ',
    name: 'Corazón Rizado Georgiano',
    category: 'Corazones Suaves',
    description: 'Adorno que simula un lazo y corazón continuo.',
    tags: ['lazo', 'georgiano', 'vintage', 'dulce']
  },
  {
    id: 'cor-8',
    symbol: 'ʚ♡⃛ɞ',
    name: 'Corazón con Alas Tiernas',
    category: 'Corazones Suaves',
    description: 'Variante dulce de corazón alado kawaii.',
    tags: ['kawaii', 'alas', 'tierno', 'corazon']
  },

  // --- FLORES Y MARIPOSAS ---
  {
    id: 'flo-1',
    symbol: 'ʚïɞ',
    name: 'Mariposa Kaomoji',
    category: 'Flores y Mariposas',
    description: 'Mariposa de tres caracteres predilecta en bios aesthetic.',
    tags: ['mariposa', 'butterfly', 'cute', 'kawaii'],
    popular: true
  },
  {
    id: 'flo-2',
    symbol: '❀',
    name: 'Flor de Cerezo Sakura',
    category: 'Flores y Mariposas',
    description: 'Flor abierta inspirada en la primavera japonesa.',
    tags: ['sakura', 'cerezo', 'flor', 'japon'],
    popular: true
  },
  {
    id: 'flo-3',
    symbol: '✿',
    name: 'Flor Blanca Clásica',
    category: 'Flores y Mariposas',
    description: 'Flor de cinco pétalos simétricos.',
    tags: ['flor', 'blanca', 'primavera', 'jardin'],
    popular: true
  },
  {
    id: 'flo-4',
    symbol: '🌸',
    name: 'Flor de Cerezo Emoji',
    category: 'Flores y Mariposas',
    description: 'Flor rosa fresca con degradado.',
    tags: ['sakura', 'rosa', 'emoji', 'primavera']
  },
  {
    id: 'flo-5',
    symbol: '𓆸',
    name: 'Flor de Loto Egipcia',
    category: 'Flores y Mariposas',
    description: 'Jeroglífico sagrado de renacimiento y elegancia mística.',
    tags: ['loto', 'egipcio', 'sagrado', 'espiritual']
  },
  {
    id: 'flo-6',
    symbol: '𓇚',
    name: 'Ramo Botánico',
    category: 'Flores y Mariposas',
    description: 'Tallo de hojas botánicas para encabezados vintage.',
    tags: ['ramo', 'tallo', 'botanica', 'vintage']
  },
  {
    id: 'flo-7',
    symbol: '𓆝',
    name: 'Pez Pequeño Nadando',
    category: 'Flores y Mariposas',
    description: 'Pez jeroglífico muy usado en temáticas oceánicas aesthetic.',
    tags: ['pez', 'oceano', 'mar', 'agua']
  },
  {
    id: 'flo-8',
    symbol: '🍃',
    name: 'Hojas al Viento',
    category: 'Flores y Mariposas',
    description: 'Hojas verdes ondeando para transmitir ligereza natural.',
    tags: ['hojas', 'viento', 'organico', 'fresco']
  },

  // --- SEPARADORES Y MARCOS ---
  {
    id: 'sep-1',
    symbol: '─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───',
    name: 'Separador Cósmico Completo',
    category: 'Separadores y Marcos',
    description: 'La línea divisoria aesthetic más aclamada para biografías de Instagram.',
    tags: ['separador', 'linea', 'luna', 'estrellas', 'divider'],
    popular: true
  },
  {
    id: 'sep-2',
    symbol: '⋆┈┈｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆',
    name: 'Divisor de Nubes y Luna',
    category: 'Separadores y Marcos',
    description: 'Línea de ensueño con nubes y noche estelar.',
    tags: ['nubes', 'luna', 'divisor', 'cielo'],
    popular: true
  },
  {
    id: 'sep-3',
    symbol: '╭┈─────── ೄྀ࿐ ˊˎ-',
    name: 'Encabezado con Flecha Elegante',
    category: 'Separadores y Marcos',
    description: 'Marco superior para comenzar una lista o presentación personal.',
    tags: ['marco', 'encabezado', 'lista', 'intro'],
    popular: true
  },
  {
    id: 'sep-4',
    symbol: '╰┈➤ ❝ [...] ❞',
    name: 'Cierre con Comillas Aesthetic',
    category: 'Separadores y Marcos',
    description: 'Remate de bloque para citas, frases o enlaces importantes.',
    tags: ['cierre', 'comillas', 'frase', 'cita']
  },
  {
    id: 'sep-5',
    symbol: '｡ﾟ•┈୨♡୧┈•ﾟ｡',
    name: 'Marco de Lazo y Corazón',
    category: 'Separadores y Marcos',
    description: 'Divisor coquette centrado con lazos y corazón.',
    tags: ['coquette', 'lazo', 'corazon', 'divisor'],
    popular: true
  },
  {
    id: 'sep-6',
    symbol: '┊ ┊ ┊ ┊',
    name: 'Columnas de Puntos Sutiles',
    category: 'Separadores y Marcos',
    description: 'Líneas verticales discretas para estructurar historias o bios.',
    tags: ['columnas', 'lineas', 'verticales', 'estructura']
  },
  {
    id: 'sep-7',
    symbol: '༺ ༻',
    name: 'Alas Ornamentales Tibetanas',
    category: 'Separadores y Marcos',
    description: 'Glifos para rodear un nombre o título con elegancia.',
    tags: ['alas', 'tibet', 'marco', 'apodo']
  },
  {
    id: 'sep-8',
    symbol: '『 』',
    name: 'Corchetes Japoneses Delicados',
    category: 'Separadores y Marcos',
    description: 'Esquinas huecas para destacar el nombre de usuario.',
    tags: ['corchetes', 'japones', 'marco', 'enfoque']
  },

  // --- KAOMOJI CUTE ---
  {
    id: 'kao-1',
    symbol: '( ˶ˆ꒳ˆ˵ )',
    name: 'Sonrisa Sonrojada',
    category: 'Kaomoji Cute',
    description: 'Expresión de ternura y timidez dulce.',
    tags: ['sonrojo', 'tierno', 'dulce', 'cute'],
    popular: true
  },
  {
    id: 'kao-2',
    symbol: '(｡♥‿♥｡)',
    name: 'Ojos de Corazón Enamorado',
    category: 'Kaomoji Cute',
    description: 'Mirada llena de amor para mensajes afectuosos.',
    tags: ['amor', 'enamorado', 'corazones', 'ojos'],
    popular: true
  },
  {
    id: 'kao-3',
    symbol: '₍ᐢ. ̫.ᐢ₎',
    name: 'Conejito Minimalista',
    category: 'Kaomoji Cute',
    description: 'Conejito tierno con orejas diminutas.',
    tags: ['conejo', 'bunny', 'animalito', 'kawaii'],
    popular: true
  },
  {
    id: 'kao-4',
    symbol: '(づ ᴗ _ᴗ)づ',
    name: 'Abrazo Suave y Calmado',
    category: 'Kaomoji Cute',
    description: 'Kaomoji que ofrece un abrazo reconfortante.',
    tags: ['abrazo', 'tierno', 'apoyo', 'calidez'],
    popular: true
  },
  {
    id: 'kao-5',
    symbol: '( ˘ ³˘)♥',
    name: 'Beso con Corazón',
    category: 'Kaomoji Cute',
    description: 'Carita lanzando un beso romántico.',
    tags: ['beso', 'corazon', 'amor', 'romance']
  },
  {
    id: 'kao-6',
    symbol: '(˶ᵔ ᵕ ᵔ˶)',
    name: 'Sonrisa de Calidez',
    category: 'Kaomoji Cute',
    description: 'Felicidad pacífica y relajada.',
    tags: ['feliz', 'paz', 'sonrisa', 'tranquilidad']
  },
  {
    id: 'kao-7',
    symbol: '(つ✧ω✧)つ',
    name: 'Entusiasmo con Destellos',
    category: 'Kaomoji Cute',
    description: 'Emoción desbordante con ojos brillantes.',
    tags: ['brillo', 'emocion', 'abierto', 'sparkle']
  },
  {
    id: 'kao-8',
    symbol: '꒰ᐢ. .ᐢ꒱',
    name: 'Osito con Manos Juntas',
    category: 'Kaomoji Cute',
    description: 'Carita kawaii tímida que pide un favor.',
    tags: ['oso', 'timido', 'favor', 'kawaii']
  },

  // --- CHISPAS Y DESTELLOS ---
  {
    id: 'chi-1',
    symbol: '✦',
    name: 'Destello Negro Fuerte',
    category: 'Chispas y Destellos',
    description: 'Destello de cuatro puntas con gran presencia visual.',
    tags: ['destello', 'chispa', 'cuatro puntas', 'estrella'],
    popular: true
  },
  {
    id: 'chi-2',
    symbol: '✧',
    name: 'Destello Blanco Hueco',
    category: 'Chispas y Destellos',
    description: 'Luz brillante sutil para acompañar palabras clave.',
    tags: ['destello', 'blanco', 'luz', 'suave'],
    popular: true
  },
  {
    id: 'chi-3',
    symbol: '⋆ ˚｡⋆୨୧˚',
    name: 'Destellos con Lazo',
    category: 'Chispas y Destellos',
    description: 'Composición mágica de polvo estelar y lazo coquette.',
    tags: ['lazo', 'estrellas', 'magia', 'combo'],
    popular: true
  },
  {
    id: 'chi-4',
    symbol: '*ੈ✩‧₊˚',
    name: 'Lluvia de Estrellas',
    category: 'Chispas y Destellos',
    description: 'Estela brillante en movimiento para perfiles aesthetic.',
    tags: ['estela', 'lluvia', 'estrellas', 'magico'],
    popular: true
  },
  {
    id: 'chi-5',
    symbol: '✧*̥˚',
    name: 'Ráfaga de Chispas',
    category: 'Chispas y Destellos',
    description: 'Aura mágica para fotos y textos destacados.',
    tags: ['chispas', 'aura', 'brillo', 'magia']
  },
  {
    id: 'chi-6',
    symbol: '✩₊˚.⋆☾⋆⁺₊✧',
    name: 'Galaxia Nocturna Completa',
    category: 'Chispas y Destellos',
    description: 'Cadena cósmica lista para pegar en el encabezado de tu perfil.',
    tags: ['galaxia', 'nocturna', 'combo', 'luna'],
    popular: true
  },
  {
    id: 'chi-7',
    symbol: '˗ˏˋ ˎˊ˗',
    name: 'Rayos de Destello Enmarcador',
    category: 'Chispas y Destellos',
    description: 'Comillas de destellos para colocar una palabra en medio.',
    tags: ['enmarcador', 'destello', 'comillas', 'foco']
  },
  {
    id: 'chi-8',
    symbol: '⇢',
    name: 'Flecha de Puntos Aesthetic',
    category: 'Chispas y Destellos',
    description: 'Flecha discontinua suave para señalar enlaces en tu bio.',
    tags: ['flecha', 'enlace', 'bio', 'puntos']
  }
];

export const TOTAL_AESTHETIC_SYMBOLS = AESTHETIC_SYMBOLS.length;
