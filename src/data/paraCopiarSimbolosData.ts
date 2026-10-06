export interface SimboloParaCopiar {
  id: string;
  symbol: string;
  name: string;
  category: SimboloCategoryType;
  description: string;
  keywords: string[];
  popular?: boolean;
}

export const SIMBOLO_CATEGORIES = [
  'Todos',
  'Estrellas y Destellos',
  'Corazones y Amor',
  'Lazos y Coquette',
  'Flores y Naturaleza',
  'Flechas y Punteros',
  'Cruces y Religiosos',
  'Gamer y Nicks FF',
  'Marcos y Separadores',
  'Geométricos y Formas',
  'Caritas y Kaomoji',
  'Música y Sonido',
  'Monedas y Matemáticas',
  'Manos y Puntos',
  'Zodiaco y Astros'
] as const;

export type SimboloCategoryType = (typeof SIMBOLO_CATEGORIES)[number];

export const SIMBOLOS_PARA_COPIAR_DATA: SimboloParaCopiar[] = [
  // ══════════════════════════════════════
  // ESTRELLAS Y DESTELLOS
  // ══════════════════════════════════════
  { id: 'pc-est-1', symbol: '★', name: 'Estrella Sólida Clásica', category: 'Estrellas y Destellos', description: 'Estrella rellena de cinco puntas clásica y versátil.', keywords: ['estrella', 'star', 'solida', 'cinco puntas', 'clasica', 'negra'], popular: true },
  { id: 'pc-est-2', symbol: '☆', name: 'Estrella de Contorno', category: 'Estrellas y Destellos', description: 'Estrella hueca de trazo limpio para nombres y bios.', keywords: ['estrella', 'hueca', 'blanca', 'contorno', 'delicada'], popular: true },
  { id: 'pc-est-3', symbol: '✦', name: 'Destello de Cuatro Puntas', category: 'Estrellas y Destellos', description: 'Destello elegante y sutil muy popular en redes.', keywords: ['destello', 'brillo', 'sparkle', 'cuatro puntas', 'aesthetic', 'instagram'], popular: true },
  { id: 'pc-est-4', symbol: '✧', name: 'Destello Hueco', category: 'Estrellas y Destellos', description: 'Brillo de cuatro puntas sin relleno, fino y estético.', keywords: ['brillo', 'destello', 'hueco', 'fino', 'blanco', 'aesthetic'], popular: true },
  { id: 'pc-est-5', symbol: '⋆', name: 'Estrella Diminuta', category: 'Estrellas y Destellos', description: 'Micro estrella perfecta para acompañar letras en nicks.', keywords: ['micro', 'diminuta', 'pequeña', 'separador', 'estrella'], popular: true },
  { id: 'pc-est-6', symbol: '✪', name: 'Estrella en Círculo', category: 'Estrellas y Destellos', description: 'Emblema militar o insignia de rango con estrella.', keywords: ['circulo', 'emblema', 'insignia', 'rango', 'militar'] },
  { id: 'pc-est-7', symbol: '✫', name: 'Estrella en Relieve', category: 'Estrellas y Destellos', description: 'Estrella con efecto tridimensional en el contorno.', keywords: ['relieve', '3d', 'sombreada', 'decorativa'] },
  { id: 'pc-est-8', symbol: '✬', name: 'Estrella Asimétrica Fina', category: 'Estrellas y Destellos', description: 'Estrella con corte lateral de estilo gráfico.', keywords: ['asimetrica', 'corte', 'grafica', 'moderna'] },
  { id: 'pc-est-9', symbol: '✭', name: 'Estrella Asimétrica Sólida', category: 'Estrellas y Destellos', description: 'Glifo de estrella enérgica con asimetría sólida.', keywords: ['asimetrica', 'rellena', 'dinamica'] },
  { id: 'pc-est-10', symbol: '✮', name: 'Estrella Biselada Fina', category: 'Estrellas y Destellos', description: 'Estrella de cinco puntas con acento biselado.', keywords: ['biselada', 'fina', 'delicada'] },
  { id: 'pc-est-11', symbol: '✯', name: 'Estrella Molinete', category: 'Estrellas y Destellos', description: 'Estrella decorativa con efecto de giro dinámico.', keywords: ['molinete', 'giro', 'rotacion', 'dinamica'] },
  { id: 'pc-est-12', symbol: '✰', name: 'Estrella Sombreada', category: 'Estrellas y Destellos', description: 'Estrella con sombra proyectada ideal para títulos.', keywords: ['sombra', 'blanca', 'volumen', 'titulos'], popular: true },
  { id: 'pc-est-13', symbol: '✵', name: 'Estrella de Ocho Puntas', category: 'Estrellas y Destellos', description: 'Glifo estelar de ocho destellos brillantes.', keywords: ['ocho puntas', 'brillante', 'solar', 'compleja'] },
  { id: 'pc-est-14', symbol: '✶', name: 'Estrella de Seis Puntas', category: 'Estrellas y Destellos', description: 'Estrella geométrica de seis puntas clásica.', keywords: ['seis puntas', 'estrella', 'brillo'] },
  { id: 'pc-est-15', symbol: '✷', name: 'Destello Explosivo Ocho Puntas', category: 'Estrellas y Destellos', description: 'Símbolo de chispazo radiante enérgico.', keywords: ['chispa', 'explosion', 'destello', 'ocho puntas'] },
  { id: 'pc-est-16', symbol: '✸', name: 'Chispazo Radiante Grueso', category: 'Estrellas y Destellos', description: 'Destello estelar de alto impacto visual.', keywords: ['chispazo', 'grueso', 'impacto', 'destello'] },
  { id: 'pc-est-17', symbol: '✹', name: 'Destello Doce Puntas', category: 'Estrellas y Destellos', description: 'Corona solar de doce rayos para destacar textos.', keywords: ['doce puntas', 'corona', 'solar', 'sol'] },
  { id: 'pc-est-18', symbol: '✺', name: 'Ráfaga Estelar Múltiple', category: 'Estrellas y Destellos', description: 'Explosión de rayos concéntricos ornamentales.', keywords: ['rafaga', 'fuegos artificiales', 'destello', 'multiple'] },
  { id: 'pc-est-19', symbol: '✻', name: 'Flor Estelar de Ocho Hojas', category: 'Estrellas y Destellos', description: 'Fusión armónica entre flor y estrella.', keywords: ['flor', 'ocho hojas', 'estelar', 'ornamento'] },
  { id: 'pc-est-20', symbol: '✼', name: 'Flor Estelar Festoneada', category: 'Estrellas y Destellos', description: 'Adorno estelar de bordes suaves y punteados.', keywords: ['punteada', 'suave', 'adorno', 'festoneada'] },
  { id: 'pc-est-21', symbol: '❄', name: 'Copo de Nieve Clásico', category: 'Estrellas y Destellos', description: 'Copo de nieve cristalino para perfiles invernales.', keywords: ['copo', 'nieve', 'hielo', 'frio', 'invierno'] },
  { id: 'pc-est-22', symbol: '❅', name: 'Copo de Nieve Fino', category: 'Estrellas y Destellos', description: 'Estructura cristalina estilizada de nieve.', keywords: ['nieve', 'cristal', 'fino', 'helado'] },
  { id: 'pc-est-23', symbol: '❆', name: 'Copo de Nieve Ornamentado', category: 'Estrellas y Destellos', description: 'Copo geométrico complejo de alta definición.', keywords: ['cristal', 'ornamentado', 'nieve', 'geometrico'] },
  { id: 'pc-est-24', symbol: '❇', name: 'Destello de Chispa Fina', category: 'Estrellas y Destellos', description: 'Pequeña chispa brillante para remates de líneas.', keywords: ['chispa', 'fina', 'brillante', 'remate'] },

  // ══════════════════════════════════════
  // CORAZONES Y AMOR
  // ══════════════════════════════════════
  { id: 'pc-cor-1', symbol: '♥', name: 'Corazón Negro Relleno', category: 'Corazones y Amor', description: 'El clásico corazón sólido universal para mensajes.', keywords: ['corazon', 'amor', 'solido', 'negro', 'clasico'], popular: true },
  { id: 'pc-cor-2', symbol: '♡', name: 'Corazón Blanco Hueco', category: 'Corazones y Amor', description: 'Contorno de corazón delicado y estético.', keywords: ['corazon', 'hueco', 'blanco', 'delicado', 'aesthetic', 'tierno'], popular: true },
  { id: 'pc-cor-3', symbol: '❥', name: 'Corazón Caligráfico Inclinado', category: 'Corazones y Amor', description: 'Corazón trazado con pluma estilográfica curva.', keywords: ['caligrafico', 'pluma', 'inclinado', 'elegante', 'amor'], popular: true },
  { id: 'pc-cor-4', symbol: '❦', name: 'Corazón Floral / Hoja Hiedra', category: 'Corazones y Amor', description: 'Adorno tipográfico histórico en forma de hoja corazón.', keywords: ['floral', 'hiedra', 'hoja', 'vintage', 'adorno'] },
  { id: 'pc-cor-5', symbol: '❧', name: 'Hoja de Corazón Rotada', category: 'Corazones y Amor', description: 'Fleuron clásico horizontal para enmarcar frases.', keywords: ['fleuron', 'vintage', 'clasico', 'adorno', 'marco'] },
  { id: 'pc-cor-6', symbol: 'ღ', name: 'Corazón Georgiano de Lazo', category: 'Corazones y Amor', description: 'Letra georgiana Ghani convertida en icono de amor.', keywords: ['georgiano', 'lazo', 'ghani', 'amor', 'romantico'], popular: true },
  { id: 'pc-cor-7', symbol: 'დ', name: 'Corazón Georgiano Doble', category: 'Corazones y Amor', description: 'Carácter georgiano que forma un corazón doble simétrico.', keywords: ['georgiano', 'doble', 'tierno', 'simetrico'] },
  { id: 'pc-cor-8', symbol: 'ꨄ', name: 'Corazón Minimalista', category: 'Corazones y Amor', description: 'Símbolo sutil de corazón limpio para bios de Instagram.', keywords: ['minimalista', 'moderno', 'limpio', 'instagram', 'bio'], popular: true },
  { id: 'pc-cor-9', symbol: 'ᥫ᭡', name: 'Corazón Cham Viral', category: 'Corazones y Amor', description: 'El corazón aesthetic más viral de TikTok e Instagram.', keywords: ['cham', 'viral', 'tiktok', 'instagram', 'tendencia', 'aesthetic'], popular: true },
  { id: 'pc-cor-10', symbol: '𓆩♡𓆪', name: 'Corazón con Alas Alado', category: 'Corazones y Amor', description: 'Alas egipcias que abrazan un corazón central.', keywords: ['alas', 'alado', 'egipcio', 'angel', 'aesthetic', 'nick'], popular: true },
  { id: 'pc-cor-11', symbol: '❣', name: 'Exclamación de Corazón', category: 'Corazones y Amor', description: 'Punto de exclamación coronado por un corazón.', keywords: ['exclamacion', 'alerta', 'amor', 'admiracion'] },
  { id: 'pc-cor-12', symbol: 'ෆ', name: 'Corazón Suave Telugú', category: 'Corazones y Amor', description: 'Carácter telugú curvo con silueta dulce de corazón.', keywords: ['telugu', 'dulce', 'tierno', 'redondo'] },
  { id: 'pc-cor-13', symbol: 'ᰔ', name: 'Corazón Canadiense Abierto', category: 'Corazones y Amor', description: 'Glifo silábico abierto que emula un corazón sutil.', keywords: ['silabico', 'abierto', 'fino', 'coquette'] },
  { id: 'pc-cor-14', symbol: '🤍', name: 'Corazón Blanco Emoji', category: 'Corazones y Amor', description: 'Emoji de corazón blanco puro de paz y ternura.', keywords: ['blanco', 'paz', 'puro', 'emoji', 'ternura'] },
  { id: 'pc-cor-15', symbol: '🖤', name: 'Corazón Negro Dark', category: 'Corazones y Amor', description: 'Emoji de corazón negro para estilo grunge o dark.', keywords: ['negro', 'dark', 'grunge', 'goth', 'emoji'] },
  { id: 'pc-cor-16', symbol: '💖', name: 'Corazón con Destellos', category: 'Corazones y Amor', description: 'Corazón rosa radiante con chispas mágicas.', keywords: ['destellos', 'brillo', 'magico', 'sparkle', 'rosa'] },
  { id: 'pc-cor-17', symbol: '💗', name: 'Corazón Palpitante', category: 'Corazones y Amor', description: 'Tres siluetas concéntricas de corazón que late.', keywords: ['latido', 'creciente', 'palpitante', 'rosa'] },
  { id: 'pc-cor-18', symbol: '💘', name: 'Corazón Flechado de Cupido', category: 'Corazones y Amor', description: 'Corazón atravesado por la flecha de Cupido.', keywords: ['cupido', 'flecha', 'enamorado', 'romantico'] },

  // ══════════════════════════════════════
  // LAZOS Y COQUETTE
  // ══════════════════════════════════════
  { id: 'pc-coq-1', symbol: '୨୧', name: 'Lazo Coquette Japonés', category: 'Lazos y Coquette', description: 'El lazo estético por excelencia de la tendencia coquette.', keywords: ['lazo', 'coquette', 'moño', 'tierno', 'cinta', 'japon'], popular: true },
  { id: 'pc-coq-2', symbol: 'ೀ', name: 'Rizo Floral Telugú', category: 'Lazos y Coquette', description: 'Carácter telugú con silueta de cinta o flor.', keywords: ['rizo', 'cinta', 'flor', 'coquette', 'adorno'], popular: true },
  { id: 'pc-coq-3', symbol: '𐙚', name: 'Moño de Cinta Dulce', category: 'Lazos y Coquette', description: 'Glifo viral de moño para nombres y biografías.', keywords: ['moño', 'cinta', 'dulce', 'viral', 'coquette'], popular: true },
  { id: 'pc-coq-4', symbol: '౨ৎ', name: 'Alas de Mariposa Gemelas', category: 'Lazos y Coquette', description: 'Alas sutiles que recuerdan a un moño delicado.', keywords: ['mariposa', 'alas', 'moño', 'coquette', 'dulce'], popular: true },
  { id: 'pc-coq-5', symbol: '𓍢ִ໋', name: 'Adorno de Espiral Botánica', category: 'Lazos y Coquette', description: 'Glifo decorativo con espiral botánica y brillo.', keywords: ['espiral', 'botanica', 'adorno', 'aesthetic'] },
  { id: 'pc-coq-6', symbol: 'ʚɞ', name: 'Alitas de Ángel Simétricas', category: 'Lazos y Coquette', description: 'Par de alas inocentes para rodear palabras clave.', keywords: ['alitas', 'angel', 'simetricas', 'tiernas', 'coquette'], popular: true },
  { id: 'pc-coq-7', symbol: 'ʚ', name: 'Alita Izquierda', category: 'Lazos y Coquette', description: 'Ala angelical izquierda para inicio de nick o frase.', keywords: ['alita', 'izquierda', 'angel', 'marco'] },
  { id: 'pc-coq-8', symbol: 'ɞ', name: 'Alita Derecha', category: 'Lazos y Coquette', description: 'Ala angelical derecha para cierre de frase.', keywords: ['alita', 'derecha', 'angel', 'cierre'] },
  { id: 'pc-coq-9', symbol: '𓆩', name: 'Ala Egipcia Izquierda', category: 'Lazos y Coquette', description: 'Ala arqueada para enmarcar nombres gamer y perfiles.', keywords: ['ala', 'egipcia', 'izquierda', 'marco', 'dark'] },
  { id: 'pc-coq-10', symbol: '𓆪', name: 'Ala Egipcia Derecha', category: 'Lazos y Coquette', description: 'Ala arqueada de cierre para nicks y títulos.', keywords: ['ala', 'egipcia', 'derecha', 'marco', 'dark'] },
  { id: 'pc-coq-11', symbol: '🎀', name: 'Moño Rosa Emoji', category: 'Lazos y Coquette', description: 'Lazo rosa tradicional de tela para adornar textos.', keywords: ['moño', 'rosa', 'lazo', 'coquette', 'cinta'] },

  // ══════════════════════════════════════
  // FLORES Y NATURALEZA
  // ══════════════════════════════════════
  { id: 'pc-flo-1', symbol: '✿', name: 'Flor Blanca Cinco Pétalos', category: 'Flores y Naturaleza', description: 'Flor estilizada de contorno limpio y equilibrado.', keywords: ['flor', 'cinco petalos', 'primavera', 'botanica', 'blanca'], popular: true },
  { id: 'pc-flo-2', symbol: '❀', name: 'Flor Blanca Detallada', category: 'Flores y Naturaleza', description: 'Flor de flor de cerezo sakura de ocho pétalos.', keywords: ['sakura', 'cerezo', 'japon', 'flor', 'detallada'], popular: true },
  { id: 'pc-flo-3', symbol: '❁', name: 'Flor de Ocho Pétalos Abierta', category: 'Flores y Naturaleza', description: 'Glifo floral de ocho pétalos geométrico.', keywords: ['ocho petalos', 'abierta', 'geometria', 'flor'] },
  { id: 'pc-flo-4', symbol: '❃', name: 'Flor de Rayos Suaves', category: 'Flores y Naturaleza', description: 'Flor con pétalos alargados en forma de hélice.', keywords: ['helice', 'rayos', 'suave', 'petalos'] },
  { id: 'pc-flo-5', symbol: '✾', name: 'Flor de Seis Pétalos Hueca', category: 'Flores y Naturaleza', description: 'Flor hueca elegante de seis puntas redondeadas.', keywords: ['seis petalos', 'hueca', 'delicada'] },
  { id: 'pc-flo-6', symbol: '✽', name: 'Flor de Asterisco Grueso', category: 'Flores y Naturaleza', description: 'Flor de ocho ramas gruesas como viñeta destacada.', keywords: ['viñeta', 'asterisco', 'ocho ramas', 'gruesa'] },
  { id: 'pc-flo-7', symbol: '⚘', name: 'Flor con Tallo', category: 'Flores y Naturaleza', description: 'Silueta clásica de una flor completa con tallo y hojas.', keywords: ['tallo', 'flor', 'hoja', 'planta', 'botanica'], popular: true },
  { id: 'pc-flo-8', symbol: '☘', name: 'Trébol de Tres Hojas', category: 'Flores y Naturaleza', description: 'Trébol irlandés tradicional de buena fortuna.', keywords: ['trebol', 'tres hojas', 'suerte', 'verde', 'irlanda'] },
  { id: 'pc-flo-9', symbol: '✤', name: 'Fleuron de Cuatro Hojas Sólido', category: 'Flores y Naturaleza', description: 'Ornamento floral compacto de cuatro esquinas.', keywords: ['fleuron', 'cuatro hojas', 'solido', 'viñeta'] },
  { id: 'pc-flo-10', symbol: '✥', name: 'Fleuron de Cuatro Hojas Hueco', category: 'Flores y Naturaleza', description: 'Versión hueca y lineal del fleuron clásico.', keywords: ['fleuron', 'hueco', 'lineal', 'fino'] },
  { id: 'pc-flo-11', symbol: '𑁍', name: 'Flor Cham Real', category: 'Flores y Naturaleza', description: 'Símbolo floral sagrado tradicional de diseño único.', keywords: ['cham', 'sagrado', 'real', 'antiguo', 'flor'], popular: true },
  { id: 'pc-flo-12', symbol: '𖤣', name: 'Planta Brote Botánico', category: 'Flores y Naturaleza', description: 'Pequeña ramita de naturaleza brotando.', keywords: ['planta', 'brote', 'ramita', 'hojas', 'verde'] },
  { id: 'pc-flo-13', symbol: '𖥧', name: 'Hierba Silvestre Minimalista', category: 'Flores y Naturaleza', description: 'Glifo de espiga silvestre para biografías limpias.', keywords: ['hierba', 'silvestre', 'espiga', 'campo'] },
  { id: 'pc-flo-14', symbol: '🌱', name: 'Plántula Creciendo', category: 'Flores y Naturaleza', description: 'Brote verde tierno que nace de la tierra.', keywords: ['brote', 'plantula', 'crecimiento', 'verde', 'nuevo'] },
  { id: 'pc-flo-15', symbol: '🌸', name: 'Flor de Cerezo Sakura', category: 'Flores y Naturaleza', description: 'Flor de sakura japonesa rosa pastel.', keywords: ['sakura', 'cerezo', 'rosa', 'japon', 'primavera'] },

  // ══════════════════════════════════════
  // FLECHAS Y PUNTEROS
  // ══════════════════════════════════════
  { id: 'pc-fle-1', symbol: '➔', name: 'Flecha Sólida Gruesa Derecha', category: 'Flechas y Punteros', description: 'Flecha direccional estándar de alta visibilidad.', keywords: ['flecha', 'derecha', 'solida', 'guia', 'puntero'], popular: true },
  { id: 'pc-fle-2', symbol: '➜', name: 'Flecha Triángulo Relleno', category: 'Flechas y Punteros', description: 'Flecha moderna con punta triangular nítida.', keywords: ['triangulo', 'moderna', 'puntero', 'direccion'] },
  { id: 'pc-fle-3', symbol: '➤', name: 'Puntero de Flecha Dinámico', category: 'Flechas y Punteros', description: 'Flecha estilo cursor para llamadas a la acción.', keywords: ['cursor', 'cta', 'dinamica', 'puntero', 'link'], popular: true },
  { id: 'pc-fle-4', symbol: '➥', name: 'Flecha Curva Superior', category: 'Flechas y Punteros', description: 'Flecha que nace con curva inferior y apunta a la derecha.', keywords: ['curva', 'retorno', 'siguiente', 'vuelta'] },
  { id: 'pc-fle-5', symbol: '➳', name: 'Flecha Emplumada Clásica', category: 'Flechas y Punteros', description: 'Flecha de arquero con plumas traseras detalladas.', keywords: ['arquero', 'emplumada', 'arco', 'vintage', 'plumas'], popular: true },
  { id: 'pc-fle-6', symbol: '➵', name: 'Flecha con Pluma Fina', category: 'Flechas y Punteros', description: 'Flecha delgada con aletas de dirección suaves.', keywords: ['fina', 'delicada', 'aletas', 'arqueria'] },
  { id: 'pc-fle-7', symbol: '➸', name: 'Flecha Emplumada Gruesa', category: 'Flechas y Punteros', description: 'Flecha de caza con remate triangular de plumas.', keywords: ['caza', 'gruesa', 'impacto', 'arqueria'] },
  { id: 'pc-fle-8', symbol: '➲', name: 'Flecha Circulada de Avance', category: 'Flechas y Punteros', description: 'Flecha insertada en anillo de avance rápido.', keywords: ['anillo', 'avance', 'circulada', 'rapida'] },
  { id: 'pc-fle-9', symbol: '➮', name: 'Flecha Curva con Sombra', category: 'Flechas y Punteros', description: 'Flecha con curvatura tridimensional suave.', keywords: ['curva', 'sombra', '3d', 'direccion'] },
  { id: 'pc-fle-10', symbol: '➱', name: 'Flecha en Perspectiva', category: 'Flechas y Punteros', description: 'Flecha con fuga angular de profundidad.', keywords: ['perspectiva', 'fuga', 'angulo', 'fondo'] },
  { id: 'pc-fle-11', symbol: '↬', name: 'Flecha con Bucle', category: 'Flechas y Punteros', description: 'Flecha con lazo curvo decorativo al inicio.', keywords: ['bucle', 'lazo', 'curva', 'elegante'] },
  { id: 'pc-fle-12', symbol: '↫', name: 'Flecha con Bucle Izquierda', category: 'Flechas y Punteros', description: 'Flecha hacia la izquierda con lazo superior.', keywords: ['izquierda', 'bucle', 'retorno', 'elegante'] },
  { id: 'pc-fle-13', symbol: '⥤', name: 'Flechas Paralelas Dobles', category: 'Flechas y Punteros', description: 'Doble trazo de avance sincronizado hacia la derecha.', keywords: ['doble', 'paralela', 'sincronizada', 'rapido'] },
  { id: 'pc-fle-14', symbol: '⇄', name: 'Flechas de Intercambio Bidireccional', category: 'Flechas y Punteros', description: 'Símbolo de intercambio de doble sentido horizontal.', keywords: ['intercambio', 'transferencia', 'bidireccional', 'ida y vuelta'] },
  { id: 'pc-fle-15', symbol: '↳', name: 'Flecha de Salto de Línea', category: 'Flechas y Punteros', description: 'Flecha de esquina que desciende a la derecha para listas.', keywords: ['esquina', 'subitem', 'lista', 'salto', 'jerarquia'], popular: true },
  { id: 'pc-fle-16', symbol: '↵', name: 'Flecha de Retorno / Enter', category: 'Flechas y Punteros', description: 'Símbolo de tecla enter o retorno de carro.', keywords: ['enter', 'retorno', 'volver', 'intro'] },

  // ══════════════════════════════════════
  // CRUCES Y RELIGIOSOS
  // ══════════════════════════════════════
  { id: 'pc-cru-1', symbol: '✝', name: 'Cruz Latina Tradicional', category: 'Cruces y Religiosos', description: 'Cruz cristiana estándar de proporción clásica.', keywords: ['cruz', 'latina', 'cristiana', 'fe', 'clasica'], popular: true },
  { id: 'pc-cru-2', symbol: '†', name: 'Daga Tipográfica / Cruz Fina', category: 'Cruces y Religiosos', description: 'Símbolo de daga fina usado para biografías y nombres.', keywords: ['daga', 'cruz', 'fina', 'obituario', 'estilo'], popular: true },
  { id: 'pc-cru-3', symbol: '✞', name: 'Cruz Latina con Sombra', category: 'Cruces y Religiosos', description: 'Cruz con borde hueco y sombra lateral.', keywords: ['sombra', 'latina', 'fe', 'volumen'] },
  { id: 'pc-cru-4', symbol: '✟', name: 'Cruz Latina de Contorno', category: 'Cruces y Religiosos', description: 'Cruz hueca delineada con trazo equilibrado.', keywords: ['contorno', 'hueca', 'lineal', 'delicada'] },
  { id: 'pc-cru-5', symbol: '♱', name: 'Cruz Patriarcal Sólida', category: 'Cruces y Religiosos', description: 'Cruz de doble travesaño con doble jerarquía.', keywords: ['patriarcal', 'ortodoxa', 'doble cruz', 'antigua'] },
  { id: 'pc-cru-6', symbol: '♰', name: 'Cruz Patriarcal Hueca', category: 'Cruces y Religiosos', description: 'Variante delineada de la cruz arzobispal.', keywords: ['arzobispal', 'hueca', 'doble', 'gotica'] },
  { id: 'pc-cru-7', symbol: '༒', name: 'Cruz Tibetana Mística', category: 'Cruces y Religiosos', description: 'El símbolo místico más cotizado para nicks de Free Fire.', keywords: ['tibetana', 'mistica', 'free fire', 'insano', 'clan', 'nick'], popular: true },
  { id: 'pc-cru-8', symbol: '✙', name: 'Cruz Griega Patada', category: 'Cruces y Religiosos', description: 'Cruz de brazos iguales con ensanchamiento en extremos.', keywords: ['griega', 'patada', 'templaria', 'brazos iguales'] },
  { id: 'pc-cru-9', symbol: '✚', name: 'Cruz Griega Gruesa / Primeros Auxilios', category: 'Cruces y Religiosos', description: 'Símbolo de suma simétrica de alto contraste.', keywords: ['primeros auxilios', 'medica', 'gruesa', 'suma', 'cruz'] },
  { id: 'pc-cru-10', symbol: '✛', name: 'Cruz Floreada de Esquinas', category: 'Cruces y Religiosos', description: 'Cruz decorativa de estilo gótico medieval.', keywords: ['floreada', 'medieval', 'gotica', 'adorno'] },
  { id: 'pc-cru-11', symbol: '✜', name: 'Cruz de Malta Compacta', category: 'Cruces y Religiosos', description: 'Emblema heráldico de honor y caballería.', keywords: ['malta', 'caballeria', 'heraldica', 'honor'] },
  { id: 'pc-cru-12', symbol: '✢', name: 'Cruz de Cuatro Puntas Afiladas', category: 'Cruces y Religiosos', description: 'Cruz estelar de remates en punta fina.', keywords: ['afilada', 'puntas', 'estelar', 'destello'] },

  // ══════════════════════════════════════
  // GAMER Y NICKS FF
  // ══════════════════════════════════════
  { id: 'pc-gam-1', symbol: '亗', name: 'Corona Insana Veterana', category: 'Gamer y Nicks FF', description: 'La corona insana legendaria de jugadores de Free Fire.', keywords: ['corona', 'free fire', 'insano', 'competitivo', 'veterano', 'ff'], popular: true },
  { id: 'pc-gam-2', symbol: '〆', name: 'Marca Shime / Tag de Clan', category: 'Gamer y Nicks FF', description: 'Glifo japonés usado como remate de clan gamer.', keywords: ['shime', 'clan', 'tag', 'free fire', 'japon', 'pro'], popular: true },
  { id: 'pc-gam-3', symbol: '么', name: 'Letra Me / Cuerno Agresivo', category: 'Gamer y Nicks FF', description: 'Glifo angular usado como cuerno frontal o inicial.', keywords: ['cuerno', 'angular', 'nick', 'agresivo', 'espartano'], popular: true },
  { id: 'pc-gam-4', symbol: 'メ', name: 'Katakana Me / Cruz Katana', category: 'Gamer y Nicks FF', description: 'Cruz afilada que simula el corte de una katana.', keywords: ['katana', 'ninja', 'corte', 'espada', 'cruz', 'gamer'], popular: true },
  { id: 'pc-gam-5', symbol: '彡', name: 'Tres Cortes / Ráfaga Ninja', category: 'Gamer y Nicks FF', description: 'Tres líneas de velocidad o ráfaga de viento cortante.', keywords: ['cortes', 'rafaga', 'ninja', 'viento', 'velocidad'], popular: true },
  { id: 'pc-gam-6', symbol: '乡', name: 'Carácter Xiang / Escudo', category: 'Gamer y Nicks FF', description: 'Glifo con silueta de escudo protector de batalla.', keywords: ['escudo', 'xiang', 'defensa', 'tanque', 'clan'] },
  { id: 'pc-gam-7', symbol: '𖣘', name: 'Sello Sagrado de Poder', category: 'Gamer y Nicks FF', description: 'Emblema circular de poder místico para escuadras.', keywords: ['sello', 'emblema', 'poder', 'rueda', 'magia'], popular: true },
  { id: 'pc-gam-8', symbol: '⚡', name: 'Rayo Eléctrico Flash', category: 'Gamer y Nicks FF', description: 'Símbolo de rapidez fulminante y disparo certero.', keywords: ['rayo', 'electrico', 'flash', 'trueno', 'rapido'], popular: true },
  { id: 'pc-gam-9', symbol: '☣', name: 'Riesgo Biológico / Biohazard', category: 'Gamer y Nicks FF', description: 'Símbolo de advertencia tóxica e intimidación.', keywords: ['biohazard', 'toxico', 'peligro', 'veneno', 'radioactivo'], popular: true },
  { id: 'pc-gam-10', symbol: '☠', name: 'Calavera con Huesos Cruzados', category: 'Gamer y Nicks FF', description: 'Símbolo de eliminación, muerte o bandera pirata.', keywords: ['calavera', 'huesos', 'muerte', 'pirata', 'peligro'], popular: true },
  { id: 'pc-gam-11', symbol: '☬', name: 'Khanda / Espadas de Guerrero', category: 'Gamer y Nicks FF', description: 'Espadas cruzadas con escudo circular central.', keywords: ['khanda', 'espadas', 'guerrero', 'escudo', 'batalla'], popular: true },
  { id: 'pc-gam-12', symbol: '♨', name: 'Vapor Caliente / Llamas de Furia', category: 'Gamer y Nicks FF', description: 'Símbolo japonés de aguas termales usado como vapor o furia.', keywords: ['vapor', 'fuego', 'calor', 'furia', 'termas'] },
  { id: 'pc-gam-13', symbol: '⚓', name: 'Ancla Marina de Fuerza', category: 'Gamer y Nicks FF', description: 'Emblema de resistencia inamovible para capitanes.', keywords: ['ancla', 'barco', 'marina', 'fuerza', 'capitan'] },
  { id: 'pc-gam-14', symbol: '👑', name: 'Corona Real de Oro', category: 'Gamer y Nicks FF', description: 'Emoji de corona imperial para el MVP de la partida.', keywords: ['corona', 'rey', 'oro', 'mvp', 'victoria', 'imperial'], popular: true },

  // ══════════════════════════════════════
  // MARCOS Y SEPARADORES
  // ══════════════════════════════════════
  { id: 'pc-mar-1', symbol: '༺༻', name: 'Alas Ornamentales Tibetanas', category: 'Marcos y Separadores', description: 'Marco simétrico de alas curvas para rodear nicks pro.', keywords: ['alas', 'marco', 'tibetana', 'adorno', 'simetrico'], popular: true },
  { id: 'pc-mar-2', symbol: '꧁꧂', name: 'Ornamento de Lazo Floral Victoriano', category: 'Marcos y Separadores', description: 'Elegante adorno de rizos para encabezados de lujo.', keywords: ['lazo', 'victoriano', 'floral', 'marco', 'clan', 'lujo'], popular: true },
  { id: 'pc-mar-3', symbol: '─── ❖ ───', name: 'Divisor con Rombo Floral', category: 'Marcos y Separadores', description: 'Línea de corte elegante con rombo central destacado.', keywords: ['divisor', 'linea', 'rombo', 'separador', 'bio'], popular: true },
  { id: 'pc-mar-4', symbol: '•┈••✦••┈•', name: 'Divisor con Brillo y Puntos', category: 'Marcos y Separadores', description: 'Separador centrado con destello brillante sutil.', keywords: ['separador', 'brillo', 'puntos', 'centrado', 'aesthetic'], popular: true },
  { id: 'pc-mar-5', symbol: '─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───', name: 'Línea Celestial con Luna y Estrellas', category: 'Marcos y Separadores', description: 'Separador nocturno para biografías mágicas.', keywords: ['celestial', 'luna', 'estrellas', 'separador', 'nocturno'], popular: true },
  { id: 'pc-mar-6', symbol: '〖〗', name: 'Corchetes Lenticulares Huecos', category: 'Marcos y Separadores', description: 'Corchetes asiáticos limpios para tags de usuario.', keywords: ['corchetes', 'huecos', 'lenticulares', 'tag', 'marco'] },
  { id: 'pc-mar-7', symbol: '【】', name: 'Corchetes Lenticulares Sólidos', category: 'Marcos y Separadores', description: 'Corchetes negros de alto grosor para destacar palabras.', keywords: ['corchetes', 'solidos', 'negros', 'destacar', 'titulos'], popular: true },
  { id: 'pc-mar-8', symbol: '「」', name: 'Comillas de Esquina Manga', category: 'Marcos y Separadores', description: 'Comillas de diálogo en estilo manga y anime japonés.', keywords: ['comillas', 'manga', 'anime', 'esquina', 'japones'], popular: true },
  { id: 'pc-mar-9', symbol: '『』', name: 'Comillas Dobles Japonesas', category: 'Marcos y Separadores', description: 'Comillas dobles para títulos y citas destacadas.', keywords: ['comillas', 'dobles', 'titulos', 'citas', 'asia'] },
  { id: 'pc-mar-10', symbol: '≪≫', name: 'Comillas Angulares Dobles Finas', category: 'Marcos y Separadores', description: 'Chevrons dobles para envolver frases sutiles.', keywords: ['chevron', 'angulares', 'comillas', 'dobles', 'finas'] },
  { id: 'pc-mar-11', symbol: '《》', name: 'Paréntesis Angulares de Cita', category: 'Marcos y Separadores', description: 'Paréntesis angulares anchos tradicionales.', keywords: ['parentesis', 'angulares', 'citas', 'ancho'] },
  { id: 'pc-mar-12', symbol: '〔〕', name: 'Paréntesis de Caparazón de Tortuga', category: 'Marcos y Separadores', description: 'Soportes de caparazón japoneses elegantes.', keywords: ['tortuga', 'parentesis', 'asiatico', 'soporte'] },

  // ══════════════════════════════════════
  // GEOMÉTRICOS Y FORMAS
  // ══════════════════════════════════════
  { id: 'pc-geo-1', symbol: '◆', name: 'Rombo Negro Sólido', category: 'Geométricos y Formas', description: 'Diamante negro de lados perfectos para viñetas.', keywords: ['rombo', 'diamante', 'negro', 'solido', 'viñeta'], popular: true },
  { id: 'pc-geo-2', symbol: '◇', name: 'Rombo Blanco Hueco', category: 'Geométricos y Formas', description: 'Diamante de contorno fino para listas estilizadas.', keywords: ['rombo', 'diamante', 'hueco', 'blanco', 'lista'] },
  { id: 'pc-geo-3', symbol: '◈', name: 'Rombo con Punto Central', category: 'Geométricos y Formas', description: 'Rombo hueco con núcleo sólido en su centro.', keywords: ['rombo', 'punto', 'nucleo', 'ojo', 'diana'] },
  { id: 'pc-geo-4', symbol: '■', name: 'Cuadrado Negro Sólido', category: 'Geométricos y Formas', description: 'Bloque cuadrado negro para diagramas y títulos.', keywords: ['cuadrado', 'bloque', 'negro', 'solido', 'caja'] },
  { id: 'pc-geo-5', symbol: '□', name: 'Cuadrado Blanco Hueco', category: 'Geométricos y Formas', description: 'Casilla de verificación vacía para checklists.', keywords: ['cuadrado', 'hueco', 'casilla', 'checkbox', 'blanco'] },
  { id: 'pc-geo-6', symbol: '▲', name: 'Triángulo Negro Hacia Arriba', category: 'Geométricos y Formas', description: 'Puntero triangular sólido de dirección vertical.', keywords: ['triangulo', 'arriba', 'solido', 'puntero', 'subir'] },
  { id: 'pc-geo-7', symbol: '△', name: 'Triángulo Blanco Hacia Arriba', category: 'Geométricos y Formas', description: 'Triángulo hueco con vértice hacia arriba.', keywords: ['triangulo', 'arriba', 'hueco', 'blanco', 'delta'] },
  { id: 'pc-geo-8', symbol: '▼', name: 'Triángulo Negro Hacia Abajo', category: 'Geométricos y Formas', description: 'Puntero triangular sólido de despliegue inferior.', keywords: ['triangulo', 'abajo', 'solido', 'desplegable', 'bajar'] },
  { id: 'pc-geo-9', symbol: '▽', name: 'Triángulo Blanco Hacia Abajo', category: 'Geométricos y Formas', description: 'Triángulo de contorno con vértice inferior.', keywords: ['triangulo', 'abajo', 'hueco', 'blanco'] },
  { id: 'pc-geo-10', symbol: '◉', name: 'Círculo Ojo de Buey / Diana', category: 'Geométricos y Formas', description: 'Círculo concéntrico con punto central prominente.', keywords: ['circulo', 'diana', 'ojo', 'punto', 'radar'], popular: true },
  { id: 'pc-geo-11', symbol: '◯', name: 'Círculo Grande Limpio', category: 'Geométricos y Formas', description: 'Anillo circular de trazo suave y amplio.', keywords: ['anillo', 'circulo', 'grande', 'limpio', 'zen'] },
  { id: 'pc-geo-12', symbol: '⬡', name: 'Hexágono Blanco Hueco', category: 'Geométricos y Formas', description: 'Glifo hexagonal de panal de abeja o química.', keywords: ['hexagono', 'panal', 'quimica', 'hueco', 'seis lados'] },
  { id: 'pc-geo-13', symbol: '⬢', name: 'Hexágono Negro Sólido', category: 'Geométricos y Formas', description: 'Hexágono relleno de estilo tecnológico.', keywords: ['hexagono', 'solido', 'tech', 'futurista'] },

  // ══════════════════════════════════════
  // CARITAS Y KAOMOJI
  // ══════════════════════════════════════
  { id: 'pc-kao-1', symbol: '(｡♥‿♥｡)', name: 'Kaomoji Enamorado', category: 'Caritas y Kaomoji', description: 'Carita tierna con ojos de corazón radiantes de amor.', keywords: ['kaomoji', 'enamorado', 'ojos corazon', 'tierno', 'amor'], popular: true },
  { id: 'pc-kao-2', symbol: '(✿◠‿◠)', name: 'Kaomoji Feliz con Flor', category: 'Caritas y Kaomoji', description: 'Sonrisa serena adornada con una flor primaveral.', keywords: ['kaomoji', 'flor', 'feliz', 'paz', 'sonrisa'], popular: true },
  { id: 'pc-kao-3', symbol: '(づ｡◕‿‿◕｡)づ', name: 'Kaomoji de Abrazo Tierno', category: 'Caritas y Kaomoji', description: 'Carita que extiende sus brazos para regalar un abrazo.', keywords: ['abrazo', 'tierno', 'brazos', 'cariño', 'lindo'], popular: true },
  { id: 'pc-kao-4', symbol: '(•‿•)', name: 'Carita Sonriente Simple', category: 'Caritas y Kaomoji', description: 'Sonrisa minimalista limpia y simpática.', keywords: ['sonrisa', 'simple', 'minimalista', 'feliz'] },
  { id: 'pc-kao-5', symbol: '(¬_¬)', name: 'Kaomoji de Mirada Escéptica', category: 'Caritas y Kaomoji', description: 'Mirada de reojo para momentos de duda o sarcasmo.', keywords: ['duda', 'sarcasmo', 'de reojo', 'desconfianza'] },
  { id: 'pc-kao-6', symbol: '(ง •_•)ง', name: 'Kaomoji Luchador / Motivación', category: 'Caritas y Kaomoji', description: 'Carita con puños en guardia lista para luchar y vencer.', keywords: ['lucha', 'motivacion', 'puños', 'animo', 'fuerza'], popular: true },
  { id: 'pc-kao-7', symbol: '(•̀ᴗ•́)و', name: 'Kaomoji de Victoria Determinada', category: 'Caritas y Kaomoji', description: 'Gesto de triunfo y determinación con puño alzado.', keywords: ['victoria', 'triunfo', 'determinacion', 'exito'] },
  { id: 'pc-kao-8', symbol: '(づ￣ ³￣)づ', name: 'Kaomoji Mandando Beso', category: 'Caritas y Kaomoji', description: 'Carita mandando un beso volador con cariño.', keywords: ['beso', 'cariño', 'amor', 'volador'] },
  { id: 'pc-kao-9', symbol: '(T_T)', name: 'Carita Llorando Clásica', category: 'Caritas y Kaomoji', description: 'Expresión clásica de lágrimas y llanto.', keywords: ['llanto', 'triste', 'lagrimas', 'drama'] },
  { id: 'pc-kao-10', symbol: '(⊙_☉)', name: 'Carita de Asombro Total', category: 'Caritas y Kaomoji', description: 'Ojos desorbitados por sorpresa o impacto inesperado.', keywords: ['sorpresa', 'asombro', 'shock', 'ojos'] },

  // ══════════════════════════════════════
  // MÚSICA Y SONIDO
  // ══════════════════════════════════════
  { id: 'pc-mus-1', symbol: '♪', name: 'Nota Musical Corchea', category: 'Música y Sonido', description: 'Nota musical individual para biografías melómanas.', keywords: ['musica', 'nota', 'corchea', 'sonido', 'cancion'], popular: true },
  { id: 'pc-mus-2', symbol: '♫', name: 'Notas Musicales Dobles Unidas', category: 'Música y Sonido', description: 'Par de notas conectadas por una plica superior.', keywords: ['notas', 'dobles', 'melodia', 'musica', 'canciones'], popular: true },
  { id: 'pc-mus-3', symbol: '♬', name: 'Semicorcheas Dobles Unidas', category: 'Música y Sonido', description: 'Notas musicales rápidas con doble barra de unión.', keywords: ['semicorcheas', 'ritmo', 'rapido', 'musica'] },
  { id: 'pc-mus-4', symbol: '♩', name: 'Nota Musical Negra', category: 'Música y Sonido', description: 'Nota de compás base clásica en notación musical.', keywords: ['negra', 'compas', 'partitura', 'solfeo'] },
  { id: 'pc-mus-5', symbol: '♭', name: 'Signo de Bemol', category: 'Música y Sonido', description: 'Alteración armónica que baja un semitono la nota.', keywords: ['bemol', 'alteracion', 'armonia', 'tono'] },
  { id: 'pc-mus-6', symbol: '♮', name: 'Signo de Becuadro', category: 'Música y Sonido', description: 'Signo musical que anula bemoles y sostenidos.', keywords: ['becuadro', 'natural', 'anular', 'tono'] },
  { id: 'pc-mus-7', symbol: '♯', name: 'Signo de Sostenido', category: 'Música y Sonido', description: 'Alteración que eleva medio tono la escala musical.', keywords: ['sostenido', 'sharp', 'tono', 'escala'], popular: true },
  { id: 'pc-mus-8', symbol: '🎵', name: 'Nota Musical Emoji', category: 'Música y Sonido', description: 'Emoji de nota musical colorida y brillante.', keywords: ['emoji', 'nota', 'cancion', 'reproductor'] },
  { id: 'pc-mus-9', symbol: '🎶', name: 'Notas Flotantes Emoji', category: 'Música y Sonido', description: 'Conjunto de notas musicales flotando en el aire.', keywords: ['notas', 'flotando', 'baile', 'fiesta', 'cancion'] },

  // ══════════════════════════════════════
  // MONEDAS Y MATEMÁTICAS
  // ══════════════════════════════════════
  { id: 'pc-mat-1', symbol: '∞', name: 'Símbolo de Infinito', category: 'Monedas y Matemáticas', description: 'El lazo de Möbius que representa la eternidad.', keywords: ['infinito', 'eternidad', 'lemniscata', 'siempre', 'amor'], popular: true },
  { id: 'pc-mat-2', symbol: '≈', name: 'Casi Igual / Aproximado', category: 'Monedas y Matemáticas', description: 'Doble tilde ondulada de equivalencia aproximada.', keywords: ['aproximado', 'casi igual', 'estimado', 'matematicas'] },
  { id: 'pc-mat-3', symbol: '≠', name: 'Desigual / No es Igual', category: 'Monedas y Matemáticas', description: 'Signo igual tachado para contrastar diferencias.', keywords: ['desigual', 'diferente', 'no igual', 'comparacion'] },
  { id: 'pc-mat-4', symbol: '≤', name: 'Menor o Igual que', category: 'Monedas y Matemáticas', description: 'Operador matemático de límite superior.', keywords: ['menor o igual', 'limite', 'matematicas'] },
  { id: 'pc-mat-5', symbol: '≥', name: 'Mayor o Igual que', category: 'Monedas y Matemáticas', description: 'Operador matemático de límite inferior.', keywords: ['mayor o igual', 'matematicas', 'comparacion'] },
  { id: 'pc-mat-6', symbol: '±', name: 'Más o Menos / Tolerancia', category: 'Monedas y Matemáticas', description: 'Signo de margen de error o variación.', keywords: ['mas o menos', 'tolerancia', 'margen', 'variacion'] },
  { id: 'pc-mat-7', symbol: '×', name: 'Multiplicación / Aspa Matemática', category: 'Monedas y Matemáticas', description: 'Cruz de producto matemático o dimensiones.', keywords: ['multiplicacion', 'por', 'dimensiones', 'producto'] },
  { id: 'pc-mat-8', symbol: '÷', name: 'División / Óbelo Clásico', category: 'Monedas y Matemáticas', description: 'Signo aritmético tradicional de división.', keywords: ['division', 'entre', 'obelo', 'aritmetica'] },
  { id: 'pc-mat-9', symbol: '√', name: 'Raíz Cuadrada / Radical', category: 'Monedas y Matemáticas', description: 'Símbolo matemático de extracción de raíz.', keywords: ['raiz', 'cuadrada', 'radical', 'calculo'] },
  { id: 'pc-mat-10', symbol: '∑', name: 'Sumatoria Sigma Griega', category: 'Monedas y Matemáticas', description: 'Letra griega mayúscula sigma de adición total.', keywords: ['sumatoria', 'sigma', 'total', 'griego'] },
  { id: 'pc-mat-11', symbol: '∫', name: 'Signo de Integral', category: 'Monedas y Matemáticas', description: 'S larga de cálculo infinitesimal e integral.', keywords: ['integral', 'calculo', 'matematicas', 'area'] },
  { id: 'pc-mat-12', symbol: '‰', name: 'Por Mil / Promilaje', category: 'Monedas y Matemáticas', description: 'Signo de proporción fraccionaria por cada mil.', keywords: ['por mil', 'porcentaje', 'fraccion', 'promilaje'] },
  { id: 'pc-mat-13', symbol: '€', name: 'Euro Europeo', category: 'Monedas y Matemáticas', description: 'Símbolo monetario oficial de la Unión Europea.', keywords: ['euro', 'moneda', 'europa', 'dinero', 'precio'] },
  { id: 'pc-mat-14', symbol: '£', name: 'Libra Esterlina', category: 'Monedas y Matemáticas', description: 'Símbolo oficial de la moneda británica.', keywords: ['libra', 'esterlina', 'uk', 'reino unido', 'dinero'] },
  { id: 'pc-mat-15', symbol: '¥', name: 'Yen Japonés / Yuan Chino', category: 'Monedas y Matemáticas', description: 'Signo monetario de Japón y China.', keywords: ['yen', 'yuan', 'japon', 'china', 'dinero'] },
  { id: 'pc-mat-16', symbol: '₿', name: 'Bitcoin Criptomoneda', category: 'Monedas y Matemáticas', description: 'Signo oficial del activo digital Bitcoin.', keywords: ['bitcoin', 'btc', 'cripto', 'blockchain', 'dinero'], popular: true },

  // ══════════════════════════════════════
  // MANOS Y PUNTOS
  // ══════════════════════════════════════
  { id: 'pc-man-1', symbol: '✌', name: 'Mano de Paz y Victoria', category: 'Manos y Puntos', description: 'Gesto de dos dedos en V de concordia y saludo.', keywords: ['paz', 'victoria', 'dos dedos', 'saludo', 'buena onda'], popular: true },
  { id: 'pc-man-2', symbol: '✍', name: 'Mano Escribiendo con Pluma', category: 'Manos y Puntos', description: 'Símbolo de redacción, autoría o firma de contrato.', keywords: ['escribir', 'firma', 'autor', 'pluma', 'redaccion'] },
  { id: 'pc-man-3', symbol: '☞', name: 'Mano Apuntando a la Derecha', category: 'Manos y Puntos', description: 'Manecilla de índice apuntando para guiar la lectura.', keywords: ['indice', 'apuntar', 'derecha', 'atencion', 'guia'], popular: true },
  { id: 'pc-man-4', symbol: '☜', name: 'Mano Apuntando a la Izquierda', category: 'Manos y Puntos', description: 'Manecilla indicadora de dirección izquierda.', keywords: ['indice', 'izquierda', 'volver', 'guia'] },
  { id: 'pc-man-5', symbol: '☝', name: 'Mano Apuntando Hacia Arriba', category: 'Manos y Puntos', description: 'Dedo índice alzado llamando la atención al mensaje anterior.', keywords: ['arriba', 'indice', 'atencion', 'importante'], popular: true },
  { id: 'pc-man-6', symbol: '☟', name: 'Mano Apuntando Hacia Abajo', category: 'Manos y Puntos', description: 'Índice señalando enlace o contenido inferior.', keywords: ['abajo', 'link', 'enlace', 'ver mas', 'descargar'], popular: true },
  { id: 'pc-man-7', symbol: '✎', name: 'Lápiz en Ángulo', category: 'Manos y Puntos', description: 'Icono de edición, notas personales o borrador.', keywords: ['lapiz', 'editar', 'escribir', 'nota'] },
  { id: 'pc-man-8', symbol: '✉', name: 'Sobre de Correo Postal', category: 'Manos y Puntos', description: 'Icono tradicional de carta o buzón de contacto.', keywords: ['carta', 'correo', 'email', 'mensaje', 'contacto'], popular: true },
  { id: 'pc-man-9', symbol: '✄', name: 'Tijeras de Corte', category: 'Manos y Puntos', description: 'Símbolo de corte, cupón de descuento o sastre.', keywords: ['tijeras', 'corte', 'cupon', 'recortar'] },
  { id: 'pc-man-10', symbol: '✔', name: 'Palomita / Check de Aprobado', category: 'Manos y Puntos', description: 'Marca de verificación de tarea completada con éxito.', keywords: ['check', 'palomita', 'verificado', 'aprobado', 'correcto'], popular: true },
  { id: 'pc-man-11', symbol: '✖', name: 'Aspa / Cruz de Cancelación', category: 'Manos y Puntos', description: 'Marca de cierre, error o eliminación de elemento.', keywords: ['cruz', 'cancelar', 'cerrar', 'eliminar', 'incorrecto'] },

  // ══════════════════════════════════════
  // ZODIACO Y ASTROS
  // ══════════════════════════════════════
  { id: 'pc-zod-1', symbol: '♈', name: 'Aries / El Carnero', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Aries de fuego y liderazgo.', keywords: ['aries', 'zodiaco', 'fuego', 'carnero', 'horoscopo'] },
  { id: 'pc-zod-2', symbol: '♉', name: 'Tauro / El Toro', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Tauro de tierra y firmeza.', keywords: ['tauro', 'zodiaco', 'tierra', 'toro', 'horoscopo'] },
  { id: 'pc-zod-3', symbol: '♊', name: 'Géminis / Los Gemelos', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Géminis de aire y comunicación.', keywords: ['geminis', 'zodiaco', 'aire', 'gemelos', 'horoscopo'] },
  { id: 'pc-zod-4', symbol: '♋', name: 'Cáncer / El Cangrejo', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Cáncer de agua y emoción.', keywords: ['cancer', 'zodiaco', 'agua', 'cangrejo', 'horoscopo'] },
  { id: 'pc-zod-5', symbol: '♌', name: 'Leo / El León', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Leo de fuego y nobleza.', keywords: ['leo', 'zodiaco', 'fuego', 'leon', 'horoscopo'], popular: true },
  { id: 'pc-zod-6', symbol: '♍', name: 'Virgo / La Virgen', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Virgo de tierra y detalle.', keywords: ['virgo', 'zodiaco', 'tierra', 'perfeccion', 'horoscopo'] },
  { id: 'pc-zod-7', symbol: '♎', name: 'Libra / La Balanza', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Libra de aire y equilibrio.', keywords: ['libra', 'zodiaco', 'aire', 'balanza', 'justicia'] },
  { id: 'pc-zod-8', symbol: '♏', name: 'Escorpio / El Escorpión', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Escorpio de agua y misterio.', keywords: ['escorpio', 'zodiaco', 'agua', 'escorpion', 'misterio'], popular: true },
  { id: 'pc-zod-9', symbol: '♐', name: 'Sagitario / El Centauro Arquero', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Sagitario de fuego y aventura.', keywords: ['sagitario', 'zodiaco', 'fuego', 'arquero', 'horoscopo'] },
  { id: 'pc-zod-10', symbol: '♑', name: 'Capricornio / La Cabra Marina', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Capricornio de tierra y ambición.', keywords: ['capricornio', 'zodiaco', 'tierra', 'cabra', 'horoscopo'] },
  { id: 'pc-zod-11', symbol: '♒', name: 'Acuario / El Portador del Agua', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Acuario de aire y originalidad.', keywords: ['acuario', 'zodiaco', 'aire', 'agua', 'original'] },
  { id: 'pc-zod-12', symbol: '♓', name: 'Piscis / Los Dos Peces', category: 'Zodiaco y Astros', description: 'Signo zodiacal de Piscis de agua y empatía.', keywords: ['piscis', 'zodiaco', 'agua', 'peces', 'empatia'] },
  { id: 'pc-zod-13', symbol: '☽', name: 'Luna Creciente Hueca', category: 'Zodiaco y Astros', description: 'Silueta de media luna nocturna fina y estética.', keywords: ['luna', 'creciente', 'noche', 'astros', 'cielo'], popular: true },
  { id: 'pc-zod-14', symbol: '☾', name: 'Luna Menguante Hueca', category: 'Zodiaco y Astros', description: 'Silueta de luna en fase menguante inversa.', keywords: ['luna', 'menguante', 'noche', 'magia', 'astros'] },
  { id: 'pc-zod-15', symbol: '☼', name: 'Sol Radiante Hueco', category: 'Zodiaco y Astros', description: 'Disco solar rodeado de rayos energéticos.', keywords: ['sol', 'radiante', 'luz', 'dia', 'energia'], popular: true }
];
