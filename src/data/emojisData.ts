export interface EmojiItem {
  id: string;
  emoji: string;
  name: string;
  category: EmojiCategoryType;
  keywords: string[];
  popular?: boolean;
}

export const EMOJI_CATEGORIES = [
  'Todos',
  'Caritas y Emociones',
  'Corazones y Amor',
  'Manos y Personas',
  'Animales y Naturaleza',
  'Comida y Bebidas',
  'Actividades y Deportes',
  'Viajes y Lugares',
  'Objetos y Tecnología',
  'Símbolos y Signos',
  'Fiestas y Banderas'
] as const;

export type EmojiCategoryType = (typeof EMOJI_CATEGORIES)[number];

export const EMOJIS_DATA: EmojiItem[] = [
  // ══════════════════════════════════════
  // CARITAS Y EMOCIONES
  // ══════════════════════════════════════
  { id: 'em-car-1', emoji: '😀', name: 'Cara Sonriente', category: 'Caritas y Emociones', keywords: ['feliz', 'sonrisa', 'alegria', 'cara', 'contento'], popular: true },
  { id: 'em-car-2', emoji: '😃', name: 'Cara Sonriente con Ojos Grandes', category: 'Caritas y Emociones', keywords: ['alegria', 'entusiasmo', 'abierta', 'boca', 'risa'] },
  { id: 'em-car-3', emoji: '😄', name: 'Cara Sonriente con Ojos Sonrientes', category: 'Caritas y Emociones', keywords: ['feliz', 'sonrisa', 'ojos', 'contento', 'risa'], popular: true },
  { id: 'em-car-4', emoji: '😁', name: 'Cara Radiante con Ojos Sonrientes', category: 'Caritas y Emociones', keywords: ['dientes', 'mueca', 'risa', 'felicidad'] },
  { id: 'em-car-5', emoji: '😆', name: 'Cara con Ojos Cerrados Sonriendo', category: 'Caritas y Emociones', keywords: ['carcajada', 'risa', 'ojos cerrados', 'gracioso'] },
  { id: 'em-car-6', emoji: '🥹', name: 'Cara Aguantando las Lágrimas', category: 'Caritas y Emociones', keywords: ['emocion', 'lagrimas', 'conmovido', 'tierno', 'orgullo'], popular: true },
  { id: 'em-car-7', emoji: '😅', name: 'Cara con Sudor Frío Sonriendo', category: 'Caritas y Emociones', keywords: ['alivio', 'nervios', 'sudor', 'pena', 'risa nerviosa'] },
  { id: 'em-car-8', emoji: '😂', name: 'Cara Llorando de Risa', category: 'Caritas y Emociones', keywords: ['risa', 'carcajada', 'llanto', 'gracioso', 'humor', 'chiste', 'viral'], popular: true },
  { id: 'em-car-9', emoji: '🤣', name: 'Revolcándose de la Risa', category: 'Caritas y Emociones', keywords: ['rofl', 'muerto de risa', 'carcajada', 'meme', 'gracioso'], popular: true },
  { id: 'em-car-10', emoji: '🥲', name: 'Cara Sonriente con Lágrima', category: 'Caritas y Emociones', keywords: ['tristeza feliz', 'nostalgia', 'dolor con sonrisa', 'agridulce'] },
  { id: 'em-car-11', emoji: '😊', name: 'Cara Sonriente con Ojos Sonrientes y Rubor', category: 'Caritas y Emociones', keywords: ['timido', 'rubor', 'tierno', 'amable', 'gracias'], popular: true },
  { id: 'em-car-12', emoji: '😇', name: 'Cara con Aureola de Ángel', category: 'Caritas y Emociones', keywords: ['angel', 'inocente', 'bueno', 'santo', 'aureola'] },
  { id: 'em-car-13', emoji: '🙂', name: 'Cara Ligeramente Sonriente', category: 'Caritas y Emociones', keywords: ['ironia', 'leve', 'ok', 'tranquilo', 'sonrisa leve'] },
  { id: 'em-car-14', emoji: '🙃', name: 'Cara al Revés', category: 'Caritas y Emociones', keywords: ['sarcasmo', 'locura', 'broma', 'ironico', 'al reves'], popular: true },
  { id: 'em-car-15', emoji: '😉', name: 'Cara Guiñando un Ojo', category: 'Caritas y Emociones', keywords: ['guiño', 'complicidad', 'coqueto', 'broma'] },
  { id: 'em-car-16', emoji: '😌', name: 'Cara Aliviada', category: 'Caritas y Emociones', keywords: ['paz', 'alivio', 'zen', 'calma', 'relajado'] },
  { id: 'em-car-17', emoji: '😍', name: 'Cara con Ojos de Corazón', category: 'Caritas y Emociones', keywords: ['enamorado', 'amor', 'me encanta', 'hermoso', 'corazon'], popular: true },
  { id: 'em-car-18', emoji: '🥰', name: 'Cara Sonriente con Corazones', category: 'Caritas y Emociones', keywords: ['amor', 'afecto', 'tierno', 'enamorado', 'romantico'], popular: true },
  { id: 'em-car-19', emoji: '😘', name: 'Cara Lanzando un Beso', category: 'Caritas y Emociones', keywords: ['beso', 'amor', 'cariño', 'corazon', 'despedida'], popular: true },
  { id: 'em-car-20', emoji: '😗', name: 'Cara Besando', category: 'Caritas y Emociones', keywords: ['besito', 'silbar', 'cariño'] },
  { id: 'em-car-21', emoji: '😋', name: 'Cara Saboreando Comida', category: 'Caritas y Emociones', keywords: ['rico', 'delicioso', 'lengua', 'comida', 'antojo'] },
  { id: 'em-car-22', emoji: '😛', name: 'Cara Sacando la Lengua', category: 'Caritas y Emociones', keywords: ['broma', 'lengua', 'juego', 'burla'] },
  { id: 'em-car-23', emoji: '😜', name: 'Cara Guiñando y Sacando la Lengua', category: 'Caritas y Emociones', keywords: ['locura', 'fiesta', 'divertido', 'broma'] },
  { id: 'em-car-24', emoji: '🤪', name: 'Cara Alocada', category: 'Caritas y Emociones', keywords: ['loco', 'descontrol', 'fiesta', 'divertido', 'payaso'] },
  { id: 'em-car-25', emoji: '🤨', name: 'Cara con Ceja Alzada', category: 'Caritas y Emociones', keywords: ['duda', 'desconfianza', 'sospecha', 'ceja', 'incredulo'], popular: true },
  { id: 'em-car-26', emoji: '🧐', name: 'Cara con Monóculo', category: 'Caritas y Emociones', keywords: ['analisis', 'elegante', 'curioso', 'investigar', 'detective'] },
  { id: 'em-car-27', emoji: '🤓', name: 'Cara de Nerd con Gafas', category: 'Caritas y Emociones', keywords: ['nerd', 'gafas', 'estudio', 'inteligente', 'geek'] },
  { id: 'em-car-28', emoji: '😎', name: 'Cara con Gafas de Sol', category: 'Caritas y Emociones', keywords: ['cool', 'pro', 'genial', 'gafas', 'fachero', 'sol'], popular: true },
  { id: 'em-car-29', emoji: '🥸', name: 'Cara Disfrazada con Bigote', category: 'Caritas y Emociones', keywords: ['disfraz', 'incognito', 'bigote', 'gafas', 'oculto'] },
  { id: 'em-car-30', emoji: '🤩', name: 'Cara Deslumbrada con Estrellas en los Ojos', category: 'Caritas y Emociones', keywords: ['estrellas', 'asombro', 'fan', 'deslumbrado', 'wow'], popular: true },
  { id: 'em-car-31', emoji: '🥳', name: 'Cara Festejando con Matasuegras', category: 'Caritas y Emociones', keywords: ['fiesta', 'cumpleaños', 'celebracion', 'gorrito', 'festejo'], popular: true },
  { id: 'em-car-32', emoji: '😏', name: 'Cara con Sonrisa Pícara', category: 'Caritas y Emociones', keywords: ['picaro', 'coqueteo', 'sugerente', 'burla', 'ironia'] },
  { id: 'em-car-33', emoji: '😒', name: 'Cara Descontenta', category: 'Caritas y Emociones', keywords: ['aburrido', 'molesto', 'descontento', 'harto'] },
  { id: 'em-car-34', emoji: '😞', name: 'Cara Decepcionada', category: 'Caritas y Emociones', keywords: ['triste', 'decepcion', 'desanimo', 'bajon'] },
  { id: 'em-car-35', emoji: '😔', name: 'Cara Pensativa y Afligida', category: 'Caritas y Emociones', keywords: ['tristeza', 'arrepentido', 'pesar', 'bajon'] },
  { id: 'em-car-36', emoji: '🥺', name: 'Cara con Ojos Suplicantes', category: 'Caritas y Emociones', keywords: ['por favor', 'tierno', 'suplica', 'perrito', 'ojitos'], popular: true },
  { id: 'em-car-37', emoji: '😢', name: 'Cara Llorando', category: 'Caritas y Emociones', keywords: ['lagrima', 'triste', 'dolor', 'llanto'] },
  { id: 'em-car-38', emoji: '😭', name: 'Cara Llorando a Mares', category: 'Caritas y Emociones', keywords: ['llanto', 'desconsolado', 'dolor', 'lagrimas', 'drama'], popular: true },
  { id: 'em-car-39', emoji: '😤', name: 'Cara con Vapor de la Nariz', category: 'Caritas y Emociones', keywords: ['triunfo', 'orgullo', 'enojo', 'frustrado', 'vapor'] },
  { id: 'em-car-40', emoji: '😡', name: 'Cara Enfadada Roja', category: 'Caritas y Emociones', keywords: ['enojo', 'furia', 'rabia', 'rojo', 'molesto'], popular: true },
  { id: 'em-car-41', emoji: '🤬', name: 'Cara con Símbolos en la Boca', category: 'Caritas y Emociones', keywords: ['maldiciones', 'groserias', 'furia', 'censura', 'enojo'], popular: true },
  { id: 'em-car-42', emoji: '🤯', name: 'Cabeza Explotando', category: 'Caritas y Emociones', keywords: ['mindblown', 'explosion', 'sorpresa', 'impacto', 'shock'], popular: true },
  { id: 'em-car-43', emoji: '😳', name: 'Cara Sonrojada y Asombrada', category: 'Caritas y Emociones', keywords: ['sonrojo', 'pena', 'verguenza', 'sorpresa', 'ojos abiertos'] },
  { id: 'em-car-44', emoji: '🥵', name: 'Cara Acalorada Roja', category: 'Caritas y Emociones', keywords: ['calor', 'sed', 'hot', 'verano', 'ardiente'] },
  { id: 'em-car-45', emoji: '🥶', name: 'Cara Helada Azul', category: 'Caritas y Emociones', keywords: ['frio', 'hielo', 'congelado', 'invierno'] },
  { id: 'em-car-46', emoji: '😱', name: 'Cara Gritando de Miedo', category: 'Caritas y Emociones', keywords: ['miedo', 'terror', 'grito', 'susto', 'el grito'] },
  { id: 'em-car-47', emoji: '🤔', name: 'Cara Pensativa con Mano en la Barbilla', category: 'Caritas y Emociones', keywords: ['pensar', 'duda', 'reflexion', 'curioso', 'idea'], popular: true },
  { id: 'em-car-48', emoji: '🫣', name: 'Cara Mirando Entre los Dedos', category: 'Caritas y Emociones', keywords: ['curiosidad', 'verguenza', 'miedo', 'ojos tapados'] },
  { id: 'em-car-49', emoji: '🤭', name: 'Cara con Mano Tapando la Boca', category: 'Caritas y Emociones', keywords: ['risa contenida', 'ups', 'pena', 'secreto'] },
  { id: 'em-car-50', emoji: '🫡', name: 'Cara Haciendo Saludo Militar', category: 'Caritas y Emociones', keywords: ['respeto', 'saludo militar', 'entendido', 'a la orden', 'si señor'], popular: true },
  { id: 'em-car-51', emoji: '🤫', name: 'Cara Pidiendo Silencio', category: 'Caritas y Emociones', keywords: ['shh', 'silencio', 'secreto', 'callado'] },
  { id: 'em-car-52', emoji: '🫠', name: 'Cara Derritiéndose', category: 'Caritas y Emociones', keywords: ['derretido', 'pena', 'calor', 'humor', 'desaparecer'], popular: true },
  { id: 'em-car-53', emoji: '🤡', name: 'Cara de Payaso', category: 'Caritas y Emociones', keywords: ['payaso', 'broma', 'quede', 'ridiculo', 'meme'], popular: true },
  { id: 'em-car-54', emoji: '💀', name: 'Calavera', category: 'Caritas y Emociones', keywords: ['muerto de risa', 'calavera', 'morir', 'meme', 'esqueleto'], popular: true },
  { id: 'em-car-55', emoji: '☠️', name: 'Calavera con Huesos Cruzados', category: 'Caritas y Emociones', keywords: ['peligro', 'muerte', 'veneno', 'pirata'] },
  { id: 'em-car-56', emoji: '💩', name: 'Caca Sonriente', category: 'Caritas y Emociones', keywords: ['caca', 'poop', 'divertido', 'mierda', 'chiste'] },
  { id: 'em-car-57', emoji: '👻', name: 'Fantasma Divertido', category: 'Caritas y Emociones', keywords: ['fantasma', 'halloween', 'susto', 'gracioso'] },
  { id: 'em-car-58', emoji: '👽', name: 'Alien Extraterrestre', category: 'Caritas y Emociones', keywords: ['alien', 'extraterrestre', 'ovni', 'espacio', 'ufo'] },
  { id: 'em-car-59', emoji: '🤖', name: 'Robot Metálico', category: 'Caritas y Emociones', keywords: ['robot', 'tecnologia', 'ia', 'futuro', 'bot'] },

  // ══════════════════════════════════════
  // CORAZONES Y AMOR
  // ══════════════════════════════════════
  { id: 'em-cor-1', emoji: '❤️', name: 'Corazón Rojo Clásico', category: 'Corazones y Amor', keywords: ['amor', 'pasion', 'rojo', 'clasico', 'te amo'], popular: true },
  { id: 'em-cor-2', emoji: '🩷', name: 'Corazón Rosa Dulce', category: 'Corazones y Amor', keywords: ['rosa', 'dulce', 'tierno', 'coquette', 'pastel'], popular: true },
  { id: 'em-cor-3', emoji: '🧡', name: 'Corazón Naranja', category: 'Corazones y Amor', keywords: ['naranja', 'amistad', 'energia', 'calido'] },
  { id: 'em-cor-4', emoji: '💛', name: 'Corazón Amarillo', category: 'Corazones y Amor', keywords: ['amarillo', 'amistad', 'alegria', 'luz'] },
  { id: 'em-cor-5', emoji: '💚', name: 'Corazón Verde', category: 'Corazones y Amor', keywords: ['verde', 'esperanza', 'naturaleza', 'vida'] },
  { id: 'em-cor-6', emoji: '💙', name: 'Corazón Azul', category: 'Corazones y Amor', keywords: ['azul', 'lealtad', 'paz', 'confianza'] },
  { id: 'em-cor-7', emoji: '🩵', name: 'Corazón Celeste Claro', category: 'Corazones y Amor', keywords: ['celeste', 'azul claro', 'suave', 'tranquilidad'] },
  { id: 'em-cor-8', emoji: '💜', name: 'Corazón Morado', category: 'Corazones y Amor', keywords: ['morado', 'bts', 'magia', 'misterio', 'lujo'] },
  { id: 'em-cor-9', emoji: '🖤', name: 'Corazón Negro', category: 'Corazones y Amor', keywords: ['negro', 'dark', 'goth', 'luto', 'aesthetic'], popular: true },
  { id: 'em-cor-10', emoji: '🩶', name: 'Corazón Gris', category: 'Corazones y Amor', keywords: ['gris', 'neutral', 'minimalista'] },
  { id: 'em-cor-11', emoji: '🤍', name: 'Corazón Blanco Puro', category: 'Corazones y Amor', keywords: ['blanco', 'paz', 'puro', 'angel', 'limpio'], popular: true },
  { id: 'em-cor-12', emoji: '🤎', name: 'Corazón Café Marrón', category: 'Corazones y Amor', keywords: ['cafe', 'marron', 'chocolate', 'tierra'] },
  { id: 'em-cor-13', emoji: '💔', name: 'Corazón Roto', category: 'Corazones y Amor', keywords: ['desamor', 'tristeza', 'ruptura', 'dolor', 'roto'], popular: true },
  { id: 'em-cor-14', emoji: '❤️‍🔥', name: 'Corazón en Llamas', category: 'Corazones y Amor', keywords: ['fuego', 'pasion', 'ardiente', 'intenso'], popular: true },
  { id: 'em-cor-15', emoji: '❤️‍🩹', name: 'Corazón Curándose con Vendaje', category: 'Corazones y Amor', keywords: ['sanando', 'recuperacion', 'vendaje', 'esperanza'] },
  { id: 'em-cor-16', emoji: '❣️', name: 'Exclamación de Corazón', category: 'Corazones y Amor', keywords: ['alerta', 'amor', 'punto', 'exclamacion'] },
  { id: 'em-cor-17', emoji: '💕', name: 'Dos Corazones Flotantes', category: 'Corazones y Amor', keywords: ['pareja', 'flotantes', 'amor', 'rosa', 'romance'] },
  { id: 'em-cor-18', emoji: '💖', name: 'Corazón Brillante con Destellos', category: 'Corazones y Amor', keywords: ['brillo', 'sparkle', 'destellos', 'magico', 'amor'], popular: true },
  { id: 'em-cor-19', emoji: '💗', name: 'Corazón Creciente', category: 'Corazones y Amor', keywords: ['latido', 'creciendo', 'amor', 'emocion'] },
  { id: 'em-cor-20', emoji: '💘', name: 'Corazón Flechado', category: 'Corazones y Amor', keywords: ['cupido', 'flechazo', 'enamorado', 'amor'] },
  { id: 'em-cor-21', emoji: '💝', name: 'Corazón con Listón de Regalo', category: 'Corazones y Amor', keywords: ['regalo', 'moño', 'detalle', 'especial'] },
  { id: 'em-cor-22', emoji: '🫶', name: 'Manos Formando un Corazón', category: 'Corazones y Amor', keywords: ['manos corazon', 'kpop', 'amor', 'cariño', 'apoyo'], popular: true },
  { id: 'em-cor-23', emoji: '💌', name: 'Carta de Amor con Corazón', category: 'Corazones y Amor', keywords: ['carta', 'mensaje', 'sobre', 'declaracion'] },

  // ══════════════════════════════════════
  // MANOS Y PERSONAS
  // ══════════════════════════════════════
  { id: 'em-man-1', emoji: '👍', name: 'Pulgar Arriba / Like', category: 'Manos y Personas', keywords: ['like', 'bueno', 'ok', 'aprobado', 'pulgar'], popular: true },
  { id: 'em-man-2', emoji: '👎', name: 'Pulgar Abajo / Dislike', category: 'Manos y Personas', keywords: ['dislike', 'malo', 'desaprobado', 'no'] },
  { id: 'em-man-3', emoji: '👏', name: 'Manos Aplaudiendo', category: 'Manos y Personas', keywords: ['aplauso', 'felicidades', 'bravo', 'ovacion'], popular: true },
  { id: 'em-man-4', emoji: '🙌', name: 'Manos Arriba Celebrando', category: 'Manos y Personas', keywords: ['festejo', 'alabanza', 'victoria', 'manos'] },
  { id: 'em-man-5', emoji: '🤝', name: 'Apretón de Manos / Trato', category: 'Manos y Personas', keywords: ['trato', 'acuerdo', 'negocio', 'pacto', 'saludo'], popular: true },
  { id: 'em-man-6', emoji: '👊', name: 'Puño de Frente / Golpe', category: 'Manos y Personas', keywords: ['golpe', 'choque de puños', 'fuerza', 'bro'] },
  { id: 'em-man-7', emoji: '✌️', name: 'Mano de Paz y Victoria', category: 'Manos y Personas', keywords: ['paz', 'dos dedos', 'victoria', 'buena onda'], popular: true },
  { id: 'em-man-8', emoji: '🤞', name: 'Dedos Cruzados por Suerte', category: 'Manos y Personas', keywords: ['suerte', 'esperanza', 'ojala', 'promesa'] },
  { id: 'em-man-9', emoji: '🫰', name: 'Dedos Cruzados Mini Corazón Coreano', category: 'Manos y Personas', keywords: ['kpop', 'mini corazon', 'dinero', 'coreano', 'tierno'], popular: true },
  { id: 'em-man-10', emoji: '🤟', name: 'Gesto Te Amo / Rock', category: 'Manos y Personas', keywords: ['te amo', 'rock', 'lengua de señas', 'música'] },
  { id: 'em-man-11', emoji: '🤘', name: 'Cuernos del Rock', category: 'Manos y Personas', keywords: ['rock', 'metal', 'pesado', 'concierto'] },
  { id: 'em-man-12', emoji: '🤙', name: 'Mano de Llamada / Shaka', category: 'Manos y Personas', keywords: ['shaka', 'llamame', 'surfer', 'tranquilo'] },
  { id: 'em-man-13', emoji: '👈', name: 'Dedo Apuntando a la Izquierda', category: 'Manos y Personas', keywords: ['izquierda', 'señalar', 'mira'] },
  { id: 'em-man-14', emoji: '👉', name: 'Dedo Apuntando a la Derecha', category: 'Manos y Personas', keywords: ['derecha', 'señalar', 'aqui', 'mira'], popular: true },
  { id: 'em-man-15', emoji: '👆', name: 'Dedo Apuntando Hacia Arriba', category: 'Manos y Personas', keywords: ['arriba', 'mensaje anterior', 'atencion'] },
  { id: 'em-man-16', emoji: '👇', name: 'Dedo Apuntando Hacia Abajo', category: 'Manos y Personas', keywords: ['abajo', 'link', 'enlace', 'mira abajo'], popular: true },
  { id: 'em-man-17', emoji: '👋', name: 'Mano Saludando', category: 'Manos y Personas', keywords: ['hola', 'adios', 'saludo', 'despedida', 'chao'], popular: true },
  { id: 'em-man-18', emoji: '✍️', name: 'Mano Escribiendo', category: 'Manos y Personas', keywords: ['escribir', 'nota', 'tarea', 'autor'] },
  { id: 'em-man-19', emoji: '💅', name: 'Uñas Pintándose / Diva', category: 'Manos y Personas', keywords: ['diva', 'uñas', 'glamour', 'despreocupado', 'chisme'], popular: true },
  { id: 'em-man-20', emoji: '🤳', name: 'Tomándose una Selfie', category: 'Manos y Personas', keywords: ['selfie', 'foto', 'camara', 'celular', 'pose'] },
  { id: 'em-man-21', emoji: '💪', name: 'Brazo con Músculo Fuerte', category: 'Manos y Personas', keywords: ['fuerza', 'gym', 'musculo', 'motivacion', 'entrenamiento'], popular: true },
  { id: 'em-man-22', emoji: '👀', name: 'Ojos Mirando', category: 'Manos y Personas', keywords: ['mirar', 'chisme', 'atento', 'ojo', 'curiosidad'], popular: true },
  { id: 'em-man-23', emoji: '🧠', name: 'Cerebro Inteligente', category: 'Manos y Personas', keywords: ['mente', 'inteligencia', 'pensar', 'cerebro', 'estrategia'] },
  { id: 'em-man-24', emoji: '👑', name: 'Corona de Rey o Reina', category: 'Manos y Personas', keywords: ['corona', 'rey', 'reina', 'mvp', 'lujo', 'victoria'], popular: true },

  // ══════════════════════════════════════
  // ANIMALES Y NATURALEZA
  // ══════════════════════════════════════
  { id: 'em-ani-1', emoji: '🐶', name: 'Cara de Perro', category: 'Animales y Naturaleza', keywords: ['perrito', 'canino', 'mascota', 'fiel'], popular: true },
  { id: 'em-ani-2', emoji: '🐱', name: 'Cara de Gato', category: 'Animales y Naturaleza', keywords: ['gatito', 'michi', 'felino', 'mascota'], popular: true },
  { id: 'em-ani-3', emoji: '🦁', name: 'Cara de León', category: 'Animales y Naturaleza', keywords: ['leon', 'rey de la selva', 'fuerza', 'valiente'] },
  { id: 'em-ani-4', emoji: '🐯', name: 'Cara de Tigre', category: 'Animales y Naturaleza', keywords: ['tigre', 'fuerza', 'felino', 'salvaje'] },
  { id: 'em-ani-5', emoji: '🦊', name: 'Cara de Zorro', category: 'Animales y Naturaleza', keywords: ['zorro', 'astuto', 'naranja', 'animal'] },
  { id: 'em-ani-6', emoji: '🐼', name: 'Cara de Oso Panda', category: 'Animales y Naturaleza', keywords: ['panda', 'tierno', 'oso', 'bambu'] },
  { id: 'em-ani-7', emoji: '🦄', name: 'Cara de Unicornio Mágico', category: 'Animales y Naturaleza', keywords: ['unicornio', 'fantasia', 'magia', 'arcoiris'], popular: true },
  { id: 'em-ani-8', emoji: '🦋', name: 'Mariposa Azul', category: 'Animales y Naturaleza', keywords: ['mariposa', 'coquette', 'belleza', 'transformacion', 'azul'], popular: true },
  { id: 'em-ani-9', emoji: '🐝', name: 'Abeja Trabajadora', category: 'Animales y Naturaleza', keywords: ['abeja', 'miel', 'polen', 'trabajo'] },
  { id: 'em-ani-10', emoji: '🐢', name: 'Tortuga Marina / Terrestre', category: 'Animales y Naturaleza', keywords: ['tortuga', 'lento', 'paz', 'verde'] },
  { id: 'em-ani-11', emoji: '🐍', name: 'Serpiente', category: 'Animales y Naturaleza', keywords: ['vibora', 'serpiente', 'peligro', 'astuto'] },
  { id: 'em-ani-12', emoji: '🦅', name: 'Águila Real', category: 'Animales y Naturaleza', keywords: ['aguila', 'mexico', 'libertad', 'ave', 'volar'] },
  { id: 'em-ani-13', emoji: '🌸', name: 'Flor de Cerezo Sakura', category: 'Animales y Naturaleza', keywords: ['sakura', 'cerezo', 'flor', 'primavera', 'japon', 'rosa'], popular: true },
  { id: 'em-ani-14', emoji: '🌹', name: 'Rosa Roja', category: 'Animales y Naturaleza', keywords: ['rosa', 'flor', 'romance', 'amor', 'pasion'], popular: true },
  { id: 'em-ani-15', emoji: '🌻', name: 'Girasol Brillante', category: 'Animales y Naturaleza', keywords: ['girasol', 'sol', 'amarillo', 'flor', 'energia'] },
  { id: 'em-ani-16', emoji: '🍀', name: 'Trébol de Cuatro Hojas de la Suerte', category: 'Animales y Naturaleza', keywords: ['suerte', 'trebol', 'cuatro hojas', 'fortuna', 'verde'], popular: true },
  { id: 'em-ani-17', emoji: '🌱', name: 'Brote / Plántula Verde', category: 'Animales y Naturaleza', keywords: ['crecimiento', 'planta', 'nuevo', 'vida', 'verde'] },
  { id: 'em-ani-18', emoji: '🌴', name: 'Palmera Tropical', category: 'Animales y Naturaleza', keywords: ['playa', 'palmera', 'vacaciones', 'verano', 'tropical'] },
  { id: 'em-ani-19', emoji: '🌵', name: 'Cactus del Desierto', category: 'Animales y Naturaleza', keywords: ['cactus', 'desierto', 'mexico', 'planta'] },
  { id: 'em-ani-20', emoji: '✨', name: 'Chispas de Brillo Mágico', category: 'Animales y Naturaleza', keywords: ['sparkles', 'brillo', 'destellos', 'magia', 'aesthetic', 'limpio'], popular: true },
  { id: 'em-ani-21', emoji: '⭐', name: 'Estrella Amarilla', category: 'Animales y Naturaleza', keywords: ['estrella', 'brillante', 'cielo', 'calificacion'] },
  { id: 'em-ani-22', emoji: '🌟', name: 'Estrella Resplandeciente', category: 'Animales y Naturaleza', keywords: ['brillante', 'estrella', 'resplandor', 'especial'], popular: true },
  { id: 'em-ani-23', emoji: '🔥', name: 'Fuego en Llamas', category: 'Animales y Naturaleza', keywords: ['fuego', 'candela', 'flama', 'calor', 'viral', 'tendencia', 'pro'], popular: true },
  { id: 'em-ani-24', emoji: '⚡', name: 'Rayo de Electricidad', category: 'Animales y Naturaleza', keywords: ['rayo', 'flash', 'energia', 'trueno', 'rapido', 'gamer'], popular: true },
  { id: 'em-ani-25', emoji: '🌙', name: 'Media Luna Creciente', category: 'Animales y Naturaleza', keywords: ['luna', 'noche', 'nocturno', 'misterio', 'dormir'], popular: true },
  { id: 'em-ani-26', emoji: '🌈', name: 'Arcoíris Completo', category: 'Animales y Naturaleza', keywords: ['arcoiris', 'colores', 'alegria', 'paz'] },

  // ══════════════════════════════════════
  // COMIDA Y BEBIDAS
  // ══════════════════════════════════════
  { id: 'em-com-1', emoji: '🌮', name: 'Taco Mexicano', category: 'Comida y Bebidas', keywords: ['taco', 'mexico', 'comida', 'antojo', 'cena'], popular: true },
  { id: 'em-com-2', emoji: '🍕', name: 'Rebanada de Pizza', category: 'Comida y Bebidas', keywords: ['pizza', 'queso', 'comida rapida', 'antojo'], popular: true },
  { id: 'em-com-3', emoji: '🍔', name: 'Hamburguesa con Queso', category: 'Comida y Bebidas', keywords: ['hamburguesa', 'burger', 'comida', 'carne'] },
  { id: 'em-com-4', emoji: '🍟', name: 'Papas Fritas', category: 'Comida y Bebidas', keywords: ['papas', 'fritas', 'snack', 'comida'] },
  { id: 'em-com-5', emoji: '🌯', name: 'Burrito', category: 'Comida y Bebidas', keywords: ['burrito', 'comida', 'mexico', 'tortilla'] },
  { id: 'em-com-6', emoji: '🥑', name: 'Aguacate / Palta', category: 'Comida y Bebidas', keywords: ['aguacate', 'guacamole', 'saludable', 'verde'] },
  { id: 'em-com-7', emoji: '🍿', name: 'Palomitas de Maíz', category: 'Comida y Bebidas', keywords: ['palomitas', 'cine', 'pelicula', 'snack'] },
  { id: 'em-com-8', emoji: '🍣', name: 'Sushi Japonés', category: 'Comida y Bebidas', keywords: ['sushi', 'japon', 'pescado', 'arroz'] },
  { id: 'em-com-9', emoji: '🍰', name: 'Rebanada de Pastel con Fresa', category: 'Comida y Bebidas', keywords: ['pastel', 'torta', 'postre', 'dulce', 'fresa'] },
  { id: 'em-com-10', emoji: '🎂', name: 'Pastel de Cumpleaños con Velas', category: 'Comida y Bebidas', keywords: ['cumpleaños', 'pastel', 'fiesta', 'velas', 'celebracion'], popular: true },
  { id: 'em-com-11', emoji: '🍩', name: 'Dona Glaseada', category: 'Comida y Bebidas', keywords: ['dona', 'glaseada', 'postre', 'dulce'] },
  { id: 'em-com-12', emoji: '🍫', name: 'Barra de Chocolate', category: 'Comida y Bebidas', keywords: ['chocolate', 'dulce', 'cacao', 'antojo'] },
  { id: 'em-com-13', emoji: '☕', name: 'Taza de Café Caliente', category: 'Comida y Bebidas', keywords: ['cafe', 'mañana', 'despertar', 'caliente', 'taza'], popular: true },
  { id: 'em-com-14', emoji: '🧋', name: 'Té de Burbujas Boba', category: 'Comida y Bebidas', keywords: ['boba', 'bubble tea', 'te de perlas', 'aesthetic'] },
  { id: 'em-com-15', emoji: '🍻', name: 'Tarros de Cerveza Brindando', category: 'Comida y Bebidas', keywords: ['cerveza', 'brindis', 'fiesta', 'chelas', 'amigos'], popular: true },
  { id: 'em-com-16', emoji: '🍷', name: 'Copa de Vino Tinto', category: 'Comida y Bebidas', keywords: ['vino', 'copa', 'cena', 'elegante', 'brindis'] },

  // ══════════════════════════════════════
  // ACTIVIDADES Y DEPORTES
  // ══════════════════════════════════════
  { id: 'em-act-1', emoji: '⚽', name: 'Balón de Fútbol', category: 'Actividades y Deportes', keywords: ['futbol', 'balon', 'pelota', 'gol', 'partido'], popular: true },
  { id: 'em-act-2', emoji: '🏀', name: 'Balón de Baloncesto', category: 'Actividades y Deportes', keywords: ['basquetbol', 'basket', 'nba', 'canasta'] },
  { id: 'em-act-3', emoji: '🎮', name: 'Control de Videojuegos', category: 'Actividades y Deportes', keywords: ['gamer', 'videojuegos', 'play', 'xbox', 'free fire', 'gaming'], popular: true },
  { id: 'em-act-4', emoji: '🕹️', name: 'Joystick Arcade', category: 'Actividades y Deportes', keywords: ['arcade', 'retro', 'palanca', 'juegos'] },
  { id: 'em-act-5', emoji: '🏆', name: 'Trofeo de Campeón Dorado', category: 'Actividades y Deportes', keywords: ['campeon', 'trofeo', 'primer lugar', 'ganador', 'oro'], popular: true },
  { id: 'em-act-6', emoji: '🥇', name: 'Medalla de Oro Primer Lugar', category: 'Actividades y Deportes', keywords: ['oro', 'primer lugar', 'ganador', 'medalla'] },
  { id: 'em-act-7', emoji: '🎯', name: 'Diana con Flecha en el Blanco', category: 'Actividades y Deportes', keywords: ['tiro al blanco', 'meta', 'objetivo', 'precision'], popular: true },
  { id: 'em-act-8', emoji: '🎲', name: 'Dado de Juego', category: 'Actividades y Deportes', keywords: ['dado', 'juego de mesa', 'azar', 'suerte'] },
  { id: 'em-act-9', emoji: '🎨', name: 'Paleta de Pintor Artístico', category: 'Actividades y Deportes', keywords: ['arte', 'pintura', 'dibujo', 'colores', 'creatividad'] },
  { id: 'em-act-10', emoji: '🎬', name: 'Claqueta de Cine', category: 'Actividades y Deportes', keywords: ['cine', 'pelicula', 'video', 'grabacion', 'accion'] },
  { id: 'em-act-11', emoji: '🎤', name: 'Micrófono de Cantante', category: 'Actividades y Deportes', keywords: ['cantar', 'musica', 'karaoke', 'voz', 'concierto'] },
  { id: 'em-act-12', emoji: '🎧', name: 'Auriculares de Música', category: 'Actividades y Deportes', keywords: ['audifonos', 'musica', 'escuchar', 'sonido'], popular: true },
  { id: 'em-act-13', emoji: '🎸', name: 'Guitarra Eléctrica / Acústica', category: 'Actividades y Deportes', keywords: ['guitarra', 'rock', 'musica', 'acorde', 'tocar'] },

  // ══════════════════════════════════════
  // VIAJES Y LUGARES
  // ══════════════════════════════════════
  { id: 'em-via-1', emoji: '✈️', name: 'Avión de Viaje', category: 'Viajes y Lugares', keywords: ['viaje', 'avion', 'vuelo', 'turismo', 'vacaciones'], popular: true },
  { id: 'em-via-2', emoji: '🚗', name: 'Automóvil Rojo', category: 'Viajes y Lugares', keywords: ['carro', 'auto', 'coche', 'viajar', 'manejar'] },
  { id: 'em-via-3', emoji: '🚀', name: 'Cohete Espacial', category: 'Viajes y Lugares', keywords: ['cohete', 'despegue', 'futuro', 'espacio', 'crypto'], popular: true },
  { id: 'em-via-4', emoji: '🏖️', name: 'Playa con Sombrilla', category: 'Viajes y Lugares', keywords: ['playa', 'mar', 'arena', 'vacaciones', 'verano'] },
  { id: 'em-via-5', emoji: '🏕️', name: 'Campamento en Tienda', category: 'Viajes y Lugares', keywords: ['acampar', 'naturaleza', 'bosque', 'aventura'] },
  { id: 'em-via-6', emoji: '🏠', name: 'Casa Hogar', category: 'Viajes y Lugares', keywords: ['casa', 'hogar', 'familia', 'vivienda'] },
  { id: 'em-via-7', emoji: '🏢', name: 'Edificio de Oficinas', category: 'Viajes y Lugares', keywords: ['edificio', 'oficina', 'trabajo', 'ciudad'] },
  { id: 'em-via-8', emoji: '🗽', name: 'Estatua de la Libertad', category: 'Viajes y Lugares', keywords: ['nueva york', 'usa', 'estatua', 'turismo'] },
  { id: 'em-via-9', emoji: '🗺️', name: 'Mapa Mundial Extendido', category: 'Viajes y Lugares', keywords: ['mapa', 'mundo', 'geografia', 'explorar', 'viajar'] },

  // ══════════════════════════════════════
  // OBJETOS Y TECNOLOGÍA
  // ══════════════════════════════════════
  { id: 'em-obj-1', emoji: '💻', name: 'Computadora Portátil / Laptop', category: 'Objetos y Tecnología', keywords: ['laptop', 'pc', 'computadora', 'trabajo', 'programacion'], popular: true },
  { id: 'em-obj-2', emoji: '📱', name: 'Teléfono Móvil / Smartphone', category: 'Objetos y Tecnología', keywords: ['celular', 'telefono', 'iphone', 'android', 'llamada'], popular: true },
  { id: 'em-obj-3', emoji: '💡', name: 'Foco / Bombilla de Idea', category: 'Objetos y Tecnología', keywords: ['idea', 'luz', 'brillante', 'solucion', 'creatividad'], popular: true },
  { id: 'em-obj-4', emoji: '💰', name: 'Bolsa de Dinero', category: 'Objetos y Tecnología', keywords: ['dinero', 'riqueza', 'plata', 'monedas', 'pesos'], popular: true },
  { id: 'em-obj-5', emoji: '💸', name: 'Dinero Volando con Alas', category: 'Objetos y Tecnología', keywords: ['gasto', 'dinero volando', 'pagar', 'compras'] },
  { id: 'em-obj-6', emoji: '💎', name: 'Diamante Precioso Azul', category: 'Objetos y Tecnología', keywords: ['diamante', 'joya', 'lujo', 'valioso', 'premium'], popular: true },
  { id: 'em-obj-7', emoji: '🔑', name: 'Llave de Oro', category: 'Objetos y Tecnología', keywords: ['llave', 'clave', 'seguridad', 'acceso', 'puerta'] },
  { id: 'em-obj-8', emoji: '🔒', name: 'Candado Cerrado', category: 'Objetos y Tecnología', keywords: ['seguridad', 'candado', 'bloqueado', 'privado'] },
  { id: 'em-obj-9', emoji: '🔓', name: 'Candado Abierto', category: 'Objetos y Tecnología', keywords: ['desbloqueado', 'libre', 'abierto'] },
  { id: 'em-obj-10', emoji: '🎁', name: 'Caja de Regalo con Lazo', category: 'Objetos y Tecnología', keywords: ['regalo', 'obsequio', 'sorpresa', 'cumpleaños', 'navidad'], popular: true },
  { id: 'em-obj-11', emoji: '📚', name: 'Pila de Libros de Estudio', category: 'Objetos y Tecnología', keywords: ['libros', 'estudiar', 'escuela', 'lectura', 'aprender'] },
  { id: 'em-obj-12', emoji: '📷', name: 'Cámara Fotográfica', category: 'Objetos y Tecnología', keywords: ['foto', 'camara', 'recuerdo', 'imagen'] },
  { id: 'em-obj-13', emoji: '⏰', name: 'Reloj Despertador', category: 'Objetos y Tecnología', keywords: ['alarma', 'tiempo', 'hora', 'despertar'] },
  { id: 'em-obj-14', emoji: '📌', name: 'Chincheta de Marcado Roja', category: 'Objetos y Tecnología', keywords: ['fijar', 'marcar', 'pin', 'importante', 'nota'], popular: true },

  // ══════════════════════════════════════
  // SÍMBOLOS Y SIGNOS
  // ══════════════════════════════════════
  { id: 'em-sim-1', emoji: '✅', name: 'Palomita Verde de Verificado', category: 'Símbolos y Signos', keywords: ['check', 'verificado', 'correcto', 'listo', 'aprobado'], popular: true },
  { id: 'em-sim-2', emoji: '❌', name: 'Cruz Roja de Error', category: 'Símbolos y Signos', keywords: ['error', 'cancelar', 'no', 'cruz', 'prohibido'] },
  { id: 'em-sim-3', emoji: '💯', name: 'Puntaje Cien 100', category: 'Símbolos y Signos', keywords: ['cien', 'perfecto', '100', 'excelente', 'nota'], popular: true },
  { id: 'em-sim-4', emoji: '⚠️', name: 'Signo de Advertencia / Alerta', category: 'Símbolos y Signos', keywords: ['alerta', 'cuidado', 'peligro', 'advertencia', 'atencion'], popular: true },
  { id: 'em-sim-5', emoji: '💬', name: 'Burbuja de Diálogo / Mensaje', category: 'Símbolos y Signos', keywords: ['mensaje', 'chat', 'comentario', 'hablar'] },
  { id: 'em-sim-6', emoji: '💭', name: 'Burbuja de Pensamiento', category: 'Símbolos y Signos', keywords: ['pensar', 'sueño', 'idea', 'mente'] },
  { id: 'em-sim-7', emoji: '💤', name: 'Símbolo Zzz de Sueño', category: 'Símbolos y Signos', keywords: ['dormir', 'sueño', 'descanso', 'aburrido'] },
  { id: 'em-sim-8', emoji: '⚡', name: 'Signo de Alto Voltaje', category: 'Símbolos y Signos', keywords: ['rayo', 'energia', 'voltaje', 'flash'] },
  { id: 'em-sim-9', emoji: '🎵', name: 'Nota Musical', category: 'Símbolos y Signos', keywords: ['musica', 'sonido', 'cancion', 'melodia'], popular: true },
  { id: 'em-sim-10', emoji: '🎶', name: 'Notas Musicales Volando', category: 'Símbolos y Signos', keywords: ['musica', 'canciones', 'ritmo', 'baile'] },
  { id: 'em-sim-11', emoji: '🚫', name: 'Signo de Prohibido', category: 'Símbolos y Signos', keywords: ['prohibido', 'no pasar', 'denegado', 'alto'] },
  { id: 'em-sim-12', emoji: '🔄', name: 'Flechas de Recarga / Giro', category: 'Símbolos y Signos', keywords: ['recargar', 'actualizar', 'repetir', 'ciclo'] },
  { id: 'em-sim-13', emoji: '🔞', name: 'Mayor de 18 Años', category: 'Símbolos y Signos', keywords: ['adultos', '18', 'restringido', 'edad'] },

  // ══════════════════════════════════════
  // FIESTAS Y BANDERAS
  // ══════════════════════════════════════
  { id: 'em-fie-1', emoji: '🎉', name: 'Cañón de Confeti de Fiesta', category: 'Fiestas y Banderas', keywords: ['fiesta', 'confeti', 'celebracion', 'exito', 'felicidades'], popular: true },
  { id: 'em-fie-2', emoji: '🎊', name: 'Bola de Confeti Festiva', category: 'Fiestas y Banderas', keywords: ['festejo', 'evento', 'alegria', 'año nuevo'] },
  { id: 'em-fie-3', emoji: '🎈', name: 'Globo Rojo', category: 'Fiestas y Banderas', keywords: ['globo', 'cumpleaños', 'fiesta', 'decoracion'] },
  { id: 'em-fie-4', emoji: '🎃', name: 'Calabaza de Halloween', category: 'Fiestas y Banderas', keywords: ['halloween', 'calabaza', 'terror', 'octubre'] },
  { id: 'em-fie-5', emoji: '🎄', name: 'Árbol de Navidad', category: 'Fiestas y Banderas', keywords: ['navidad', 'arbol', 'diciembre', 'regalos'] },
  { id: 'em-fie-6', emoji: '🇲🇽', name: 'Bandera de México', category: 'Fiestas y Banderas', keywords: ['mexico', 'mexicano', 'patria', 'bandera', 'cdmx'], popular: true },
  { id: 'em-fie-7', emoji: '🇪🇸', name: 'Bandera de España', category: 'Fiestas y Banderas', keywords: ['españa', 'español', 'bandera'] },
  { id: 'em-fie-8', emoji: '🇦🇷', name: 'Bandera de Argentina', category: 'Fiestas y Banderas', keywords: ['argentina', 'argentino', 'bandera'] },
  { id: 'em-fie-9', emoji: '🇨🇴', name: 'Bandera de Colombia', category: 'Fiestas y Banderas', keywords: ['colombia', 'colombiano', 'bandera'] },
  { id: 'em-fie-10', emoji: '🇺🇸', name: 'Bandera de Estados Unidos', category: 'Fiestas y Banderas', keywords: ['usa', 'estados unidos', 'bandera'] },
  { id: 'em-fie-11', emoji: '🏁', name: 'Bandera a Cuadros de Carreras', category: 'Fiestas y Banderas', keywords: ['meta', 'carreras', 'f1', 'ganar', 'fin'] },
  { id: 'em-fie-12', emoji: '🚩', name: 'Bandera Roja / Red Flag', category: 'Fiestas y Banderas', keywords: ['red flag', 'alerta', 'peligro', 'advertencia', 'meme'], popular: true }
];
