export interface FreeFireSymbolFaqItem {
  question: string;
  answer: string;
}

export const FREE_FIRE_SIMBOLOS_FAQ_ITEMS: FreeFireSymbolFaqItem[] = [
  {
    question: '¿Qué son los símbolos para Free Fire?',
    answer:
      'Son caracteres gráficos y símbolos especiales de Unicode (como coronas 亗, corchetes 『』, estrellas ★, kanjis メ y calaveras ☠️) diseñados para copiar y pegar en nombres, apodos y clanes de Free Fire.'
  },
  {
    question: '¿Cómo copiar símbolos para Free Fire?',
    answer:
      'Simplemente toca el botón "Copiar" al lado de cualquier símbolo de nuestro catálogo. Se guardará de inmediato en el portapapeles de tu dispositivo móvil o computadora.'
  },
  {
    question: '¿Puedo usar estos símbolos en mi nombre?',
    answer:
      '¡Sí! Puedes usar nuestro decorador integrado para añadir símbolos antes, después o a ambos lados de tu nick en Free Fire.'
  },
  {
    question: '¿Funcionan todos los símbolos en Free Fire?',
    answer:
      'La gran mayoría de los símbolos tipográficos de este catálogo son ampliamente compatibles con las versiones de Android e iOS de Free Fire. Te sugerimos probar el apodo decorado en el juego.'
  },
  {
    question: '¿Cómo decorar mi nombre con símbolos?',
    answer:
      'Ingresa tu apodo en nuestra herramienta "Decora tu nombre con símbolos", selecciona el tipo de marco (coronas, corchetes, estrellas) y posición deseada, y copia el resultado final.'
  },
  {
    question: '¿Puedo combinar varios símbolos?',
    answer:
      'Sí, la sección "Combina tus símbolos" te permite tocar varios caracteres en secuencia para crear combinaciones únicas listas para copiar.'
  },
  {
    question: '¿Puedo usar símbolos con letras bonitas?',
    answer:
      '¡Por supuesto! Nuestro decorador integra el motor global de más de 350 fuentes Unicode para transformar el texto de tu apodo mientras le añade símbolos decorativos.'
  },
  {
    question: '¿Qué son los símbolos Unicode?',
    answer:
      'Son códigos gráficos estándar reconocidos por smartphones y plataformas de videojuegos que permiten mostrar elementos decorativos sin necesidad de instalar fuentes especiales.'
  },
  {
    question: '¿Puedo usar símbolos para un clan?',
    answer:
      'Sí, los símbolos como coronas (亗), corchetes (『』) y kanjis (メ) son los más populares para crear nombres y tags de clanes.'
  },
  {
    question: '¿Puedo comprobar si un símbolo funciona en Free Fire?',
    answer:
      'Nuestra selección utiliza únicamente símbolos probados en plataformas móviles. La confirmación final de cada caracter se realiza al guardar el nick en la pantalla del juego.'
  }
];

export interface SymbolItem {
  id: string;
  symbol: string;
  category:
    | 'Decorativos'
    | 'Estrellas'
    | 'Corazones'
    | 'Flechas'
    | 'Líneas'
    | 'Círculos'
    | 'Cuadrados'
    | 'Marcos'
    | 'Gaming'
    | 'Góticos'
    | 'Aesthetic'
    | 'Minimalistas'
    | 'Especiales'
    | 'Caras';
  name: string;
  keywords: string[];
}

export const FREE_FIRE_SYMBOLS_LIBRARY: SymbolItem[] = [
  // Gaming / Pro
  { id: 'sym-1', symbol: '亗', category: 'Gaming', name: 'Corona Pro', keywords: ['corona', 'pro', 'gaming', 'king', 'reyno'] },
  { id: 'sym-2', symbol: '么', category: 'Gaming', name: 'Kanji Me', keywords: ['kanji', 'japones', 'gaming', 'pro'] },
  { id: 'sym-3', symbol: 'メ', category: 'Gaming', name: 'Kanji Me Cruz', keywords: ['kanji', 'cruz', 'savage', 'gaming'] },
  { id: 'sym-4', symbol: '々', category: 'Gaming', name: 'Kanji Noma', keywords: ['kanji', 'noma', 'gaming', 'pro'] },
  { id: 'sym-5', symbol: 'ツ', category: 'Gaming', name: 'Carita Sonriente', keywords: ['smile', 'carita', 'gaming', 'tzu'] },
  { id: 'sym-6', symbol: '彡', category: 'Gaming', name: 'Plumas San', keywords: ['plumas', 'estrellas', 'gaming'] },
  { id: 'sym-7', symbol: '☬', category: 'Gaming', name: 'Símbolo Khanda', keywords: ['khanda', 'escudo', 'místico', 'gaming'] },
  { id: 'sym-8', symbol: '☠️', category: 'Gaming', name: 'Calavera Danger', keywords: ['calavera', 'death', 'dark', 'gaming'] },

  // Marcos / Brackets
  { id: 'sym-9', symbol: '『』', category: 'Marcos', name: 'Corchetes Asiáticos', keywords: ['corchetes', 'marcos', 'brackets', 'pro'] },
  { id: 'sym-10', symbol: '【】', category: 'Marcos', name: 'Corchetes Negros', keywords: ['corchetes', 'marcos', 'solidos'] },
  { id: 'sym-11', symbol: '꧁꧂', category: 'Marcos', name: 'Alas Leyenda', keywords: ['alas', 'legend', 'marcos', 'pro'] },
  { id: 'sym-12', symbol: '༺༻', category: 'Marcos', name: 'Ondas Florales', keywords: ['ondas', 'marcos', 'alas'] },
  { id: 'sym-13', symbol: '⟨⟩', category: 'Marcos', name: 'Ángulos Simples', keywords: ['angulos', 'flechas', 'marcos'] },

  // Estrellas
  { id: 'sym-14', symbol: '★', category: 'Estrellas', name: 'Estrella Sólida', keywords: ['estrella', 'star', 'solida'] },
  { id: 'sym-15', symbol: '☆', category: 'Estrellas', name: 'Estrella Delineada', keywords: ['estrella', 'star', 'linea'] },
  { id: 'sym-16', symbol: '✦', category: 'Estrellas', name: 'Destello Cuatro Puntas', keywords: ['destello', 'sparkle', 'estrella'] },
  { id: 'sym-17', symbol: '✧', category: 'Estrellas', name: 'Destello Blanco', keywords: ['destello', 'sparkle', 'blanco'] },
  { id: 'sym-18', symbol: '✪', category: 'Estrellas', name: 'Estrella en Círculo', keywords: ['estrella', 'circulo', 'badge'] },
  { id: 'sym-19', symbol: '✯', category: 'Estrellas', name: 'Estrella Mágica', keywords: ['estrella', 'magia', 'puntas'] },

  // Corazones
  { id: 'sym-20', symbol: '♡', category: 'Corazones', name: 'Corazón Delineado', keywords: ['corazon', 'heart', 'aesthetic'] },
  { id: 'sym-21', symbol: '♥', category: 'Corazones', name: 'Corazón Sólido', keywords: ['corazon', 'heart', 'solido'] },
  { id: 'sym-22', symbol: '❣', category: 'Corazones', name: 'Corazón Exclamación', keywords: ['corazon', 'exclamacion', 'bonito'] },
  { id: 'sym-23', symbol: '💕', category: 'Corazones', name: 'Dos Corazones', keywords: ['corazones', 'amor', 'emoji'] },

  // Flechas
  { id: 'sym-24', symbol: '➔', category: 'Flechas', name: 'Flecha Derecha', keywords: ['flecha', 'arrow', 'derecha'] },
  { id: 'sym-25', symbol: '🏹', category: 'Flechas', name: 'Arco y Flecha', keywords: ['arco', 'flecha', 'bow', 'gaming'] },
  { id: 'sym-26', symbol: '⚡', category: 'Flechas', name: 'Rayo Eléctrico', keywords: ['rayo', 'lightning', 'electric', 'flecha'] },
  { id: 'sym-27', symbol: '➻', category: 'Flechas', name: 'Flecha Pluma', keywords: ['flecha', 'pluma', 'decorativa'] },

  // Aesthetic & Decorativos
  { id: 'sym-28', symbol: '🌸', category: 'Aesthetic', name: 'Flor de Cerezo', keywords: ['flor', 'sakura', 'aesthetic', 'bonito'] },
  { id: 'sym-29', symbol: '✨', category: 'Aesthetic', name: 'Destellos Mágicos', keywords: ['destellos', 'brillo', 'sparkle', 'aesthetic'] },
  { id: 'sym-30', symbol: '👑', category: 'Decorativos', name: 'Corona Real', keywords: ['corona', 'king', 'queen', 'royal'] },
  { id: 'sym-31', symbol: '🔥', category: 'Decorativos', name: 'Fuego Insano', keywords: ['fuego', 'fire', 'insano', 'hot'] },
  { id: 'sym-32', symbol: '⚔️', category: 'Gaming', name: 'Espadas Cruzadas', keywords: ['espadas', 'swords', 'battle', 'warrior'] },
  { id: 'sym-33', symbol: '🛡️', category: 'Gaming', name: 'Escudo Real', keywords: ['escudo', 'shield', 'defense'] },

  // Góticos & Especiales
  { id: 'sym-34', symbol: '✙', category: 'Góticos', name: 'Cruz Gótica', keywords: ['cruz', 'cross', 'gotico', 'dark'] },
  { id: 'sym-35', symbol: '✝', category: 'Góticos', name: 'Cruz Latina', keywords: ['cruz', 'gotico', 'dark'] },
  { id: 'sym-36', symbol: '☯', category: 'Especiales', name: 'Yin Yang', keywords: ['yinyang', 'equilibrio', 'oriental'] },
  { id: 'sym-37', symbol: '☣️', category: 'Especiales', name: 'Biohazard Danger', keywords: ['biohazard', 'danger', 'toxic'] },

  // Líneas & Círculos & Minimalistas
  { id: 'sym-38', symbol: '┊', category: 'Líneas', name: 'Línea Punteada', keywords: ['linea', 'separador', 'vertical'] },
  { id: 'sym-39', symbol: '│', category: 'Líneas', name: 'Línea Continua', keywords: ['linea', 'vertical', 'minimal'] },
  { id: 'sym-40', symbol: '•', category: 'Círculos', name: 'Punto Círculo', keywords: ['punto', 'bullet', 'circulo'] },
  { id: 'sym-41', symbol: '·', category: 'Minimalistas', name: 'Punto Central', keywords: ['punto', 'dot', 'minimal'] },
  { id: 'sym-42', symbol: '◼', category: 'Cuadrados', name: 'Cuadrado Negro', keywords: ['cuadrado', 'square', 'box'] },
  { id: 'sym-43', symbol: '◻', category: 'Cuadrados', name: 'Cuadrado Blanco', keywords: ['cuadrado', 'square', 'blanco'] }
];
