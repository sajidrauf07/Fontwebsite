export interface EspecialSymbol {
  id: string;
  symbol: string;
  name: string;
  category: EspecialCategoryType;
  description: string;
  keywords: string[];
  popular?: boolean;
}

export const ESPECIAL_CATEGORIES = [
  'Todos',
  'Más Usados',
  'Estrellas y Destellos',
  'Corazones',
  'Cruces y Religiosos',
  'Flechas y Punteros',
  'Coronas y Realeza',
  'Checks y Marcas',
  'Música y Arte',
  'Monedas y Finanzas',
  'Matemáticas y Ciencia',
  'Zodiaco y Astrología',
  'Formas Geométricas',
  'Marcos y Separadores',
  'Lazos y Coquette',
  'Gamer y Nicks'
] as const;

export type EspecialCategoryType = (typeof ESPECIAL_CATEGORIES)[number];

export const ESPECIALES_SYMBOLS: EspecialSymbol[] = [
  // ══════════════════════════════════════
  // MÁS USADOS / DESTACADOS
  // ══════════════════════════════════════
  { id: 'esp-top-1', symbol: '⚡', name: 'Rayo Eléctrico', category: 'Más Usados', description: 'Rayo de energía y velocidad para nicks y perfiles.', keywords: ['rayo', 'trueno', 'energia', 'electricidad', 'free fire'], popular: true },
  { id: 'esp-top-2', symbol: '👑', name: 'Corona Dorada', category: 'Más Usados', description: 'Corona real de campeón y realeza.', keywords: ['corona', 'rey', 'reina', 'realeza', 'campeon'], popular: true },
  { id: 'esp-top-3', symbol: '亗', name: 'Corona Gamer Japonesa', category: 'Más Usados', description: 'Caracter asiático usado como corona de clan y nick pro.', keywords: ['corona', 'free fire', 'gamer', 'japones', 'clan'], popular: true },
  { id: 'esp-top-4', symbol: '♥', name: 'Corazón Negro / Relleno', category: 'Más Usados', description: 'Corazón clásico sólido de amor.', keywords: ['corazon', 'amor', 'clasico', 'relleno'], popular: true },
  { id: 'esp-top-5', symbol: '♡', name: 'Corazón Blanco / Hueco', category: 'Más Usados', description: 'Corazón tierno y minimalista para bios.', keywords: ['corazon', 'blanco', 'lindo', 'tierno', 'bio'], popular: true },
  { id: 'esp-top-6', symbol: '★', name: 'Estrella Rellena', category: 'Más Usados', description: 'Estrella de cinco puntas clásica.', keywords: ['estrella', 'brillo', 'noche', 'calificacion'], popular: true },
  { id: 'esp-top-7', symbol: '✦', name: 'Destello de Cuatro Puntas', category: 'Más Usados', description: 'Símbolo de brillo elegante y moderno.', keywords: ['destello', 'brillo', 'estrella', 'sparkle'], popular: true },
  { id: 'esp-top-8', symbol: '✓', name: 'Checkmark / Visto Bueno', category: 'Más Usados', description: 'Palomita de verificación y acierto.', keywords: ['check', 'visto', 'palomita', 'verificado'], popular: true },
  { id: 'esp-top-9', symbol: '†', name: 'Cruz Clásica Daga', category: 'Más Usados', description: 'Cruz latina elegante para nicks y nombres.', keywords: ['cruz', 'daga', 'religioso', 'gamer'], popular: true },
  { id: 'esp-top-10', symbol: '∞', name: 'Infinito', category: 'Más Usados', description: 'Símbolo del amor y la eternidad infinita.', keywords: ['infinito', 'eternidad', 'amor', 'matematica'], popular: true },
  { id: 'esp-top-11', symbol: 'ᥫ᭡', name: 'Corazón Cham', category: 'Más Usados', description: 'Corazón aesthetic moderno muy viral en redes.', keywords: ['corazon', 'cham', 'aesthetic', 'instagram'], popular: true },
  { id: 'esp-top-12', symbol: '𓆩♡𓆪', name: 'Corazón con Alas', category: 'Más Usados', description: 'Combinación alada jeroglífica con corazón.', keywords: ['alas', 'angel', 'corazon', 'aesthetic'], popular: true },

  // ══════════════════════════════════════
  // ESTRELLAS Y DESTELLOS
  // ══════════════════════════════════════
  { id: 'esp-est-1', symbol: '★', name: 'Estrella Sólida', category: 'Estrellas y Destellos', description: 'Estrella negra de cinco puntas.', keywords: ['estrella', 'cinco puntas', 'solida'], popular: true },
  { id: 'esp-est-2', symbol: '☆', name: 'Estrella Hueca', category: 'Estrellas y Destellos', description: 'Estrella de contorno fino.', keywords: ['estrella', 'contorno', 'blanca'], popular: true },
  { id: 'esp-est-3', symbol: '✦', name: 'Destello Cuádruple Negro', category: 'Estrellas y Destellos', description: 'Brillo de diamante relleno.', keywords: ['destello', 'diamante', 'brillo'], popular: true },
  { id: 'esp-est-4', symbol: '✧', name: 'Destello Cuádruple Blanco', category: 'Estrellas y Destellos', description: 'Brillo fino de diamante hueco.', keywords: ['destello', 'blanco', 'delicado'], popular: true },
  { id: 'esp-est-5', symbol: '✩', name: 'Estrella Redondeada', category: 'Estrellas y Destellos', description: 'Estrella dulce de esquinas suaves.', keywords: ['estrella', 'redonda', 'suave'] },
  { id: 'esp-est-6', symbol: '✪', name: 'Estrella en Círculo', category: 'Estrellas y Destellos', description: 'Insignia militar o de capitán.', keywords: ['circulo', 'emblema', 'estrella', 'insignia'] },
  { id: 'esp-est-7', symbol: '✫', name: 'Estrella de Centro Abierto', category: 'Estrellas y Destellos', description: 'Estrella con detalle interior.', keywords: ['estrella', 'adorno', 'detalle'] },
  { id: 'esp-est-8', symbol: '✬', name: 'Estrella Punteada', category: 'Estrellas y Destellos', description: 'Estrella decorativa asimétrica.', keywords: ['estrella', 'decoracion'] },
  { id: 'esp-est-9', symbol: '✭', name: 'Estrella con Sombra', category: 'Estrellas y Destellos', description: 'Estrella con efecto tridimensional.', keywords: ['estrella', 'sombra', '3d'] },
  { id: 'esp-est-10', symbol: '✮', name: 'Estrella Pesada', category: 'Estrellas y Destellos', description: 'Estrella gruesa de gran impacto.', keywords: ['estrella', 'gruesa', 'pesada'] },
  { id: 'esp-est-11', symbol: '✯', name: 'Estrella Pinwheel', category: 'Estrellas y Destellos', description: 'Estrella en giro dinámico.', keywords: ['estrella', 'giro', 'dinamica'] },
  { id: 'esp-est-12', symbol: '✰', name: 'Estrella con Sombra Hueca', category: 'Estrellas y Destellos', description: 'Estrella sombreada elegante.', keywords: ['estrella', 'sombreada', 'elegante'] },
  { id: 'esp-est-13', symbol: '✵', name: 'Estrella de Ocho Puntas', category: 'Estrellas y Destellos', description: 'Estrella solar radiante.', keywords: ['ocho puntas', 'sol', 'radiante'] },
  { id: 'esp-est-14', symbol: '✶', name: 'Estrella de Seis Puntas', category: 'Estrellas y Destellos', description: 'Estrella hexagonal geométrica.', keywords: ['seis puntas', 'hexagonal'] },
  { id: 'esp-est-15', symbol: '✷', name: 'Estrella de Ocho Puntas Gruesa', category: 'Estrellas y Destellos', description: 'Estrella estelar brillante.', keywords: ['ocho puntas', 'brillante'] },
  { id: 'esp-est-16', symbol: '✸', name: 'Estrella de Doce Puntas', category: 'Estrellas y Destellos', description: 'Emblema solar de doce rayos.', keywords: ['doce puntas', 'sol', 'rayos'] },
  { id: 'esp-est-17', symbol: '✹', name: 'Explosión de Doce Puntas', category: 'Estrellas y Destellos', description: 'Destello de explosión estelar.', keywords: ['explosion', 'destello', 'supernova'] },
  { id: 'esp-est-18', symbol: '✺', name: 'Sol Radiante de Dieciséis Puntas', category: 'Estrellas y Destellos', description: 'Gran estrella floral radiante.', keywords: ['dieciseis puntas', 'flor', 'sol'] },
  { id: 'esp-est-19', symbol: '✻', name: 'Gota de Estrella', category: 'Estrellas y Destellos', description: 'Asteroide con puntas en gota.', keywords: ['gota', 'asterisco', 'flor'] },
  { id: 'esp-est-20', symbol: '✼', name: 'Estrella Floral Punteada', category: 'Estrellas y Destellos', description: 'Adorno botánico de estrella.', keywords: ['floral', 'botanico', 'adorno'] },
  { id: 'esp-est-21', symbol: '❅', name: 'Copo de Nieve Ligero', category: 'Estrellas y Destellos', description: 'Cristal de hielo y nieve sutil.', keywords: ['nieve', 'invierno', 'copo', 'frio'] },
  { id: 'esp-est-22', symbol: '❆', name: 'Copo de Nieve Detallado', category: 'Estrellas y Destellos', description: 'Cristal invernal completo.', keywords: ['nieve', 'copo', 'invierno', 'navidad'] },
  { id: 'esp-est-23', symbol: '❇', name: 'Chispa Verde / Brillo', category: 'Estrellas y Destellos', description: 'Chispa geométrica limpia.', keywords: ['chispa', 'brillo', 'limpio'] },
  { id: 'esp-est-24', symbol: '❈', name: 'Chispa en Flor', category: 'Estrellas y Destellos', description: 'Brillo floral ornamental.', keywords: ['chispa', 'flor', 'adorno'] },

  // ══════════════════════════════════════
  // CORAZONES
  // ══════════════════════════════════════
  { id: 'esp-cor-1', symbol: '♥', name: 'Corazón Clásico', category: 'Corazones', description: 'Corazón sólido y elegante de toda la vida.', keywords: ['corazon', 'amor', 'clasico'], popular: true },
  { id: 'esp-cor-2', symbol: '♡', name: 'Corazón Bonito', category: 'Corazones', description: 'Corazón hueco suave para biografías.', keywords: ['corazon', 'blanco', 'lindo', 'tierno'], popular: true },
  { id: 'esp-cor-3', symbol: '❥', name: 'Corazón Caligráfico', category: 'Corazones', description: 'Corazón inclinado trazado con pluma.', keywords: ['corazon', 'caligrafico', 'pluma', 'elegante'] },
  { id: 'esp-cor-4', symbol: '❣', name: 'Exclamación de Amor', category: 'Corazones', description: 'Signo de admiración rematado en corazón.', keywords: ['exclamacion', 'amor', 'alerta'] },
  { id: 'esp-cor-5', symbol: '❦', name: 'Corazón Floral / Hiedra', category: 'Corazones', description: 'Adorno botánico clásico en corazón.', keywords: ['floral', 'hiedra', 'vintage', 'adorno'] },
  { id: 'esp-cor-6', symbol: '❧', name: 'Hoja de Corazón', category: 'Corazones', description: 'Hoja de vid decorativa con forma de corazón.', keywords: ['hoja', 'vid', 'decorativa'] },
  { id: 'esp-cor-7', symbol: 'დ', name: 'Corazón Georgiano', category: 'Corazones', description: 'Letra del alfabeto georgiano con forma de corazón.', keywords: ['georgiano', 'doble', 'tierno'] },
  { id: 'esp-cor-8', symbol: 'ღ', name: 'Corazón de Lazo', category: 'Corazones', description: 'Elegante glifo georgiano con corazón entrelazado.', keywords: ['lazo', 'entrelazado', 'georgiano', 'amor'], popular: true },
  { id: 'esp-cor-9', symbol: 'ꨄ', name: 'Corazón Minimalista', category: 'Corazones', description: 'Símbolo sutil y delicado.', keywords: ['minimalista', 'sutil', 'moderno'] },
  { id: 'esp-cor-10', symbol: 'ᥫ᭡', name: 'Corazón Cham Moderno', category: 'Corazones', description: 'El corazón aesthetic más usado en Instagram.', keywords: ['cham', 'aesthetic', 'instagram', 'tiktok'], popular: true },
  { id: 'esp-cor-11', symbol: '𓆩♡𓆪', name: 'Corazón con Alas', category: 'Corazones', description: 'Corazón celestial con alas protectoras.', keywords: ['alas', 'angel', 'celestial', 'corazon'], popular: true },
  { id: 'esp-cor-12', symbol: '💕', name: 'Dos Corazones', category: 'Corazones', description: 'Dos corazones rosas flotando juntos.', keywords: ['pareja', 'enamorados', 'flotantes'] },
  { id: 'esp-cor-13', symbol: '💖', name: 'Corazón Brillante', category: 'Corazones', description: 'Corazón con chispas de brillo mágico.', keywords: ['brillo', 'magia', 'sparkle'] },
  { id: 'esp-cor-14', symbol: '💗', name: 'Corazón Creciente', category: 'Corazones', description: 'Corazón que late y se expande.', keywords: ['latido', 'creciente', 'amor'] },
  { id: 'esp-cor-15', symbol: '💘', name: 'Corazón con Flecha', category: 'Corazones', description: 'Corazón flechado por Cupido.', keywords: ['cupido', 'flecha', 'enamorado'] },
  { id: 'esp-cor-16', symbol: '🖤', name: 'Corazón Negro', category: 'Corazones', description: 'Corazón oscuro elegante, rockero o gótico.', keywords: ['negro', 'gotico', 'rockero', 'dark'] },
  { id: 'esp-cor-17', symbol: '🤍', name: 'Corazón Blanco Puro', category: 'Corazones', description: 'Corazón de pureza, calma y sinceridad.', keywords: ['blanco', 'pureza', 'paz', 'limpio'] },
  { id: 'esp-cor-18', symbol: '🩷', name: 'Corazón Rosa Pastel', category: 'Corazones', description: 'Tono pastel dulce para redes sociales.', keywords: ['rosa', 'pastel', 'dulce'] },

  // ══════════════════════════════════════
  // CRUCES Y RELIGIOSOS
  // ══════════════════════════════════════
  { id: 'esp-cru-1', symbol: '✝', name: 'Cruz Latina', category: 'Cruces y Religiosos', description: 'Cruz cristiana tradicional.', keywords: ['cruz', 'cristiana', 'religion', 'fe'], popular: true },
  { id: 'esp-cru-2', symbol: '†', name: 'Cruz Daga', category: 'Cruces y Religiosos', description: 'Cruz estilizada en forma de daga para nicks.', keywords: ['daga', 'cruz', 'gamer', 'nombre'], popular: true },
  { id: 'esp-cru-3', symbol: '‡', name: 'Doble Cruz / Doble Daga', category: 'Cruces y Religiosos', description: 'Cruz con dos barras horizontales.', keywords: ['doble cruz', 'daga doble', 'simbolo'] },
  { id: 'esp-cru-4', symbol: '✞', name: 'Cruz Contorneada Sombreada', category: 'Cruces y Religiosos', description: 'Cruz cristiana con relieve y sombra.', keywords: ['cruz', 'sombra', 'relieve'] },
  { id: 'esp-cru-5', symbol: '✟', name: 'Cruz Latina Contorneada', category: 'Cruces y Religiosos', description: 'Cruz estilizada con borde limpio.', keywords: ['cruz', 'borde', 'contorno'] },
  { id: 'esp-cru-6', symbol: '✠', name: 'Cruz de Malta', category: 'Cruces y Religiosos', description: 'Cruz de la orden de Malta o templaria.', keywords: ['malta', 'templaria', 'orden', 'emblema'] },
  { id: 'esp-cru-7', symbol: '✚', name: 'Cruz Griega Gruesa', category: 'Cruces y Religiosos', description: 'Cruz de brazos iguales de gran peso visual.', keywords: ['griega', 'cruz', 'gruesa', 'mas'] },
  { id: 'esp-cru-8', symbol: '✛', name: 'Cruz Fina Centrada', category: 'Cruces y Religiosos', description: 'Cruz simétrica de trazo fino.', keywords: ['fina', 'simetrica', 'centrada'] },
  { id: 'esp-cru-9', symbol: '✜', name: 'Cruz Griega Decorativa', category: 'Cruces y Religiosos', description: 'Cruz ornamental con remates cuadrados.', keywords: ['ornamental', 'remate', 'cruz'] },
  { id: 'esp-cru-10', symbol: '♱', name: 'Cruz con Base Sagrada', category: 'Cruces y Religiosos', description: 'Cruz de altar con pie.', keywords: ['altar', 'sagrada', 'pie'] },
  { id: 'esp-cru-11', symbol: '♰', name: 'Cruz de Altar Sólida', category: 'Cruces y Religiosos', description: 'Cruz negra montada sobre peana.', keywords: ['altar', 'peana', 'cruz'] },
  { id: 'esp-cru-12', symbol: '༒', name: 'Cruz Tibetana Mística', category: 'Cruces y Religiosos', description: 'Glifo tibetano usado ampliamente en nicks insanos.', keywords: ['tibetana', 'mistica', 'free fire', 'insano'], popular: true },
  { id: 'esp-cru-13', symbol: '☦', name: 'Cruz Ortodoxa', category: 'Cruces y Religiosos', description: 'Cruz bizantina con tres barras transversales.', keywords: ['ortodoxa', 'bizantina', 'tres barras'] },
  { id: 'esp-cru-14', symbol: '☨', name: 'Cruz Patriarcal / Lorena', category: 'Cruces y Religiosos', description: 'Cruz con dos barras paralelas de heráldica.', keywords: ['lorena', 'patriarcal', 'heraldica'] },
  { id: 'esp-cru-15', symbol: '☩', name: 'Cruz de Jerusalén', category: 'Cruces y Religiosos', description: 'Cruz de las cruzadas con crucetas en los extremos.', keywords: ['jerusalen', 'cruzadas', 'caballero'] },

  // ══════════════════════════════════════
  // FLECHAS Y PUNTEROS
  // ══════════════════════════════════════
  { id: 'esp-fle-1', symbol: '➔', name: 'Flecha Gruesa a la Derecha', category: 'Flechas y Punteros', description: 'Flecha sólida indicadora de dirección.', keywords: ['flecha', 'derecha', 'direccion'], popular: true },
  { id: 'esp-fle-2', symbol: '➜', name: 'Flecha Redondeada a la Derecha', category: 'Flechas y Punteros', description: 'Flecha moderna de puntas suaves.', keywords: ['flecha', 'suave', 'moderna'] },
  { id: 'esp-fle-3', symbol: '➝', name: 'Flecha Triangular', category: 'Flechas y Punteros', description: 'Flecha con punta de triángulo recto.', keywords: ['flecha', 'triangular', 'recta'] },
  { id: 'esp-fle-4', symbol: '➞', name: 'Flecha Rectangular', category: 'Flechas y Punteros', description: 'Flecha ancha para listas y menús.', keywords: ['flecha', 'ancha', 'lista'] },
  { id: 'esp-fle-5', symbol: '➛', name: 'Flecha Inclinada hacia Arriba', category: 'Flechas y Punteros', description: 'Flecha diagonal ascendente.', keywords: ['inclinada', 'ascendente', 'diagonal'] },
  { id: 'esp-fle-6', symbol: '🏹', name: 'Arco y Flecha', category: 'Flechas y Punteros', description: 'Arma de arquero para gamers.', keywords: ['arco', 'flecha', 'arquero', 'gamer'] },
  { id: 'esp-fle-7', symbol: '➳', name: 'Flecha con Plumas Delicada', category: 'Flechas y Punteros', description: 'Flecha estilizada con remate emplumado.', keywords: ['plumas', 'emplumada', 'delicada'], popular: true },
  { id: 'esp-fle-8', symbol: '➵', name: 'Flecha Emplumada Fina', category: 'Flechas y Punteros', description: 'Trazo fino de flecha de cazador.', keywords: ['cazador', 'fina', 'flecha'] },
  { id: 'esp-fle-9', symbol: '➸', name: 'Flecha Emplumada Gruesa', category: 'Flechas y Punteros', description: 'Flecha completa con punta de lanza.', keywords: ['lanza', 'pesada', 'flecha'] },
  { id: 'esp-fle-10', symbol: '➼', name: 'Flecha de Lanza Curva', category: 'Flechas y Punteros', description: 'Flecha dinámica en movimiento.', keywords: ['movimiento', 'lanza', 'curva'] },
  { id: 'esp-fle-11', symbol: '➺', name: 'Flecha Floral / Hoja', category: 'Flechas y Punteros', description: 'Flecha decorada con hojas en el extremo.', keywords: ['hojas', 'floral', 'botanica'] },
  { id: 'esp-fle-12', symbol: '➻', name: 'Flecha Tridente', category: 'Flechas y Punteros', description: 'Flecha terminada en tres puntas.', keywords: ['tridente', 'tres puntas'] },
  { id: 'esp-fle-13', symbol: '➲', name: 'Flecha en Anillo', category: 'Flechas y Punteros', description: 'Flecha tridimensional saliendo de un aro.', keywords: ['anillo', 'aro', 'circulo', '3d'] },
  { id: 'esp-fle-14', symbol: '➢', name: 'Puntero Triángulo Sólido', category: 'Flechas y Punteros', description: 'Marcador de viñeta moderno.', keywords: ['puntero', 'viñeta', 'lista'] },
  { id: 'esp-fle-15', symbol: '➤', name: 'Puntero Grande Sólido', category: 'Flechas y Punteros', description: 'Viñeta clásica para llamadas a la acción.', keywords: ['viñeta', 'cta', 'boton', 'derecha'], popular: true },
  { id: 'esp-fle-16', symbol: '➥', name: 'Flecha en Ángulo Gruesa', category: 'Flechas y Punteros', description: 'Flecha de respuesta o salto de bloque.', keywords: ['angulo', 'salto', 'respuesta'] },
  { id: 'esp-fle-17', symbol: '➦', name: 'Flecha en Ángulo Abierta', category: 'Flechas y Punteros', description: 'Flecha de retorno o enlace saliente.', keywords: ['retorno', 'enlace', 'saliente'] },
  { id: 'esp-fle-18', symbol: '↠', name: 'Doble Flecha hacia la Derecha', category: 'Flechas y Punteros', description: 'Flecha de avance rápido.', keywords: ['doble', 'avance', 'rapido'] },
  { id: 'esp-fle-19', symbol: '↞', name: 'Doble Flecha hacia la Izquierda', category: 'Flechas y Punteros', description: 'Flecha de retroceso rápido.', keywords: ['doble', 'retroceso', 'izquierda'] },
  { id: 'esp-fle-20', symbol: '↟', name: 'Doble Flecha hacia Arriba', category: 'Flechas y Punteros', description: 'Flecha de ascenso doble.', keywords: ['arriba', 'subir', 'ascenso'] },
  { id: 'esp-fle-21', symbol: '↡', name: 'Doble Flecha hacia Abajo', category: 'Flechas y Punteros', description: 'Flecha de descenso doble.', keywords: ['abajo', 'bajar', 'descenso'] },
  { id: 'esp-fle-22', symbol: '⇄', name: 'Flechas Opuestas Horizontales', category: 'Flechas y Punteros', description: 'Símbolo de intercambio y reciprocidad.', keywords: ['intercambio', 'opuestas', 'bidireccional'] },
  { id: 'esp-fle-23', symbol: '⇅', name: 'Flechas Opuestas Verticales', category: 'Flechas y Punteros', description: 'Símbolo de fluctuación o cambio.', keywords: ['vertical', 'cambio', 'arriba abajo'] },
  { id: 'esp-fle-24', symbol: '↯', name: 'Flecha en Relámpago hacia Abajo', category: 'Flechas y Punteros', description: 'Flecha en zigzag de voltaje o impacto.', keywords: ['zigzag', 'relampago', 'impacto', 'voltaje'] },

  // ══════════════════════════════════════
  // CORONAS Y REALEZA
  // ══════════════════════════════════════
  { id: 'esp-crn-1', symbol: '👑', name: 'Corona Imperial Emoji', category: 'Coronas y Realeza', description: 'Corona de oro con gemas incrustadas.', keywords: ['corona', 'oro', 'rey', 'reina', 'gemas'], popular: true },
  { id: 'esp-crn-2', symbol: '亗', name: 'Corona Japonesa Kanji', category: 'Coronas y Realeza', description: 'El símbolo de corona más famoso de Free Fire.', keywords: ['corona', 'kanji', 'free fire', 'nick', 'insano'], popular: true },
  { id: 'esp-crn-3', symbol: '♔', name: 'Rey de Ajedrez Blanco', category: 'Coronas y Realeza', description: 'Corona real contorneada de ajedrez.', keywords: ['rey', 'ajedrez', 'blanco', 'corona'] },
  { id: 'esp-crn-4', symbol: '♕', name: 'Reina de Ajedrez Blanca', category: 'Coronas y Realeza', description: 'Corona de dama contorneada de ajedrez.', keywords: ['reina', 'dama', 'ajedrez', 'corona'], popular: true },
  { id: 'esp-crn-5', symbol: '♚', name: 'Rey de Ajedrez Negro', category: 'Coronas y Realeza', description: 'Corona sólida de rey de ajedrez.', keywords: ['rey', 'negro', 'solido', 'ajedrez'] },
  { id: 'esp-crn-6', symbol: '♛', name: 'Reina de Ajedrez Negra', category: 'Coronas y Realeza', description: 'Corona sólida de reina de ajedrez.', keywords: ['reina', 'negra', 'solida', 'ajedrez'], popular: true },
  { id: 'esp-crn-7', symbol: '𓆩👑𓆪', name: 'Corona Egipcia con Alas', category: 'Coronas y Realeza', description: 'Diseño alado de alta realeza para nicks.', keywords: ['corona', 'alas', 'egipcio', 'clan', 'free fire'], popular: true },
  { id: 'esp-crn-8', symbol: '⚜️', name: 'Flor de Lis', category: 'Coronas y Realeza', description: 'Emblema heráldico de la realeza francesa.', keywords: ['flor de lis', 'realeza', 'emblema', 'francia'] },

  // ══════════════════════════════════════
  // CHECKS Y MARCAS
  // ══════════════════════════════════════
  { id: 'esp-chk-1', symbol: '✓', name: 'Checkmark Básico', category: 'Checks y Marcas', description: 'Palomita clásica de verificación.', keywords: ['check', 'palomita', 'verificado', 'si'], popular: true },
  { id: 'esp-chk-2', symbol: '✔', name: 'Checkmark Grueso', category: 'Checks y Marcas', description: 'Palomita de verificación con peso grueso.', keywords: ['check', 'grueso', 'verificado', 'aprobado'], popular: true },
  { id: 'esp-chk-3', symbol: '☑', name: 'Casilla con Check', category: 'Checks y Marcas', description: 'Caja marcada de confirmación de tareas.', keywords: ['casilla', 'cuadro', 'tarea', 'marcado'] },
  { id: 'esp-chk-4', symbol: '✕', name: 'Cruz de Cancelación', category: 'Checks y Marcas', description: 'Equis de error o desactivación.', keywords: ['equis', 'error', 'cancelado', 'no'] },
  { id: 'esp-chk-5', symbol: '✖', name: 'Cruz Pesada', category: 'Checks y Marcas', description: 'Equis gruesa de advertencia o rechazo.', keywords: ['equis', 'gruesa', 'rechazado', 'eliminar'] },
  { id: 'esp-chk-6', symbol: '✗', name: 'Marca de Equis Fina', category: 'Checks y Marcas', description: 'Tachadura fina de revisión.', keywords: ['tachado', 'fino', 'error'] },
  { id: 'esp-chk-7', symbol: '✘', name: 'Marca de Equis Gruesa', category: 'Checks y Marcas', description: 'Tachadura firme y destacada.', keywords: ['tachado', 'grueso', 'no', 'cancelar'] },
  { id: 'esp-chk-8', symbol: '☒', name: 'Casilla con Equis', category: 'Checks y Marcas', description: 'Caja de verificación con equis tachada.', keywords: ['casilla', 'equis', 'tachada'] },
  { id: 'esp-chk-9', symbol: '✢', name: 'Asterisco de Cuatro Rayos', category: 'Checks y Marcas', description: 'Marca limpia para destacar puntos.', keywords: ['asterisco', 'viñeta', 'destacar'] },
  { id: 'esp-chk-10', symbol: '✣', name: 'Marca Cuádruple en Flor', category: 'Checks y Marcas', description: 'Punto ornamental de verificación.', keywords: ['ornamental', 'punto', 'flor'] },
  { id: 'esp-chk-11', symbol: '✤', name: 'Marca Cuádruple Cerrada', category: 'Checks y Marcas', description: 'Rombo floral de gran legibilidad.', keywords: ['rombo', 'floral', 'viñeta'] },
  { id: 'esp-chk-12', symbol: '✥', name: 'Marca Cuádruple con Borde', category: 'Checks y Marcas', description: 'Emblema cuadrado de selección.', keywords: ['cuadrado', 'seleccion', 'viñeta'] },

  // ══════════════════════════════════════
  // MÚSICA Y ARTE
  // ══════════════════════════════════════
  { id: 'esp-mus-1', symbol: '♪', name: 'Nota Musical Corchea', category: 'Música y Arte', description: 'Sola nota musical clásica para nombres y bios.', keywords: ['nota', 'musica', 'cancion', 'corchea'], popular: true },
  { id: 'esp-mus-2', symbol: '♫', name: 'Dos Corcheas Unidas', category: 'Música y Arte', description: 'Par de notas musicales unidas por barra.', keywords: ['notas', 'musica', 'cancion', 'melodia'], popular: true },
  { id: 'esp-mus-3', symbol: '♬', name: 'Dos Semicorcheas Unidas', category: 'Música y Arte', description: 'Doble barra de ritmo musical.', keywords: ['semicorcheas', 'ritmo', 'musica'] },
  { id: 'esp-mus-4', symbol: '♭', name: 'Bemol Musical', category: 'Música y Arte', description: 'Signo de alteración bemol.', keywords: ['bemol', 'teoria', 'partitura'] },
  { id: 'esp-mus-5', symbol: '♮', name: 'Becuadro Musical', category: 'Música y Arte', description: 'Signo de anulación becuadro.', keywords: ['becuadro', 'partitura', 'natural'] },
  { id: 'esp-mus-6', symbol: '♯', name: 'Sostenido Musical', category: 'Música y Arte', description: 'Signo de alteración sostenido.', keywords: ['sostenido', 'sharp', 'musica'] },
  { id: 'esp-mus-7', symbol: '🎵', name: 'Nota Musical Brillante', category: 'Música y Arte', description: 'Emoji musical vibrante.', keywords: ['musica', 'cancion', 'emoji'] },
  { id: 'esp-mus-8', symbol: '🎶', name: 'Múltiples Notas Flotantes', category: 'Música y Arte', description: 'Armonía y notas en vuelo.', keywords: ['notas', 'flotantes', 'armonia'] },
  { id: 'esp-mus-9', symbol: '🎼', name: 'Clave de Sol en Pentagrama', category: 'Música y Arte', description: 'Partitura con clave de sol.', keywords: ['clave de sol', 'pentagrama', 'composicion'] },
  { id: 'esp-mus-10', symbol: '🎨', name: 'Paleta de Pintor', category: 'Música y Arte', description: 'Arte, pintura y creatividad visual.', keywords: ['arte', 'paleta', 'pintura', 'colores'] },
  { id: 'esp-mus-11', symbol: '🎭', name: 'Máscaras de Teatro', category: 'Música y Arte', description: 'Comedia y tragedia dramática.', keywords: ['teatro', 'mascaras', 'actuacion', 'drama'] },
  { id: 'esp-mus-12', symbol: '🎬', name: 'Claqueta de Cine', category: 'Música y Arte', description: 'Cine, grabación y dirección audiovisual.', keywords: ['cine', 'claqueta', 'pelicula', 'video'] },

  // ══════════════════════════════════════
  // MONEDAS Y FINANZAS
  // ══════════════════════════════════════
  { id: 'esp-mon-1', symbol: '$', name: 'Signo de Peso / Dólar', category: 'Monedas y Finanzas', description: 'Moneda oficial de México (peso mexicano) y dólar.', keywords: ['peso', 'dolar', 'dinero', 'mexico'], popular: true },
  { id: 'esp-mon-2', symbol: '€', name: 'Signo del Euro', category: 'Monedas y Finanzas', description: 'Moneda de la Unión Europea.', keywords: ['euro', 'europa', 'dinero'], popular: true },
  { id: 'esp-mon-3', symbol: '£', name: 'Libra Esterlina', category: 'Monedas y Finanzas', description: 'Moneda de Reino Unido.', keywords: ['libra', 'esterlina', 'reino unido'] },
  { id: 'esp-mon-4', symbol: '¥', name: 'Yen / Yuan', category: 'Monedas y Finanzas', description: 'Moneda de Japón (yen) y China (yuan).', keywords: ['yen', 'yuan', 'japon', 'china'] },
  { id: 'esp-mon-5', symbol: '¢', name: 'Signo de Centavo', category: 'Monedas y Finanzas', description: 'Fracción de moneda o centavos.', keywords: ['centavo', 'cents', 'fraccion'] },
  { id: 'esp-mon-6', symbol: '₿', name: 'Bitcoin', category: 'Monedas y Finanzas', description: 'Símbolo oficial de la criptomoneda Bitcoin.', keywords: ['bitcoin', 'crypto', 'btc', 'blockchain'], popular: true },
  { id: 'esp-mon-7', symbol: '₽', name: 'Rublo Ruso', category: 'Monedas y Finanzas', description: 'Moneda oficial de Rusia.', keywords: ['rublo', 'rusia'] },
  { id: 'esp-mon-8', symbol: '₩', name: 'Won Surcoreano', category: 'Monedas y Finanzas', description: 'Moneda oficial de Corea del Sur.', keywords: ['won', 'corea', 'kpop'] },
  { id: 'esp-mon-9', symbol: '₺', name: 'Lira Turca', category: 'Monedas y Finanzas', description: 'Moneda oficial de Turquía.', keywords: ['lira', 'turquia'] },
  { id: 'esp-mon-10', symbol: '₴', name: 'Grivna Ucraniana', category: 'Monedas y Finanzas', description: 'Moneda oficial de Ucrania.', keywords: ['grivna', 'ucrania'] },
  { id: 'esp-mon-11', symbol: '฿', name: 'Baht Tailandés', category: 'Monedas y Finanzas', description: 'Moneda oficial de Tailandia.', keywords: ['baht', 'tailandia'] },
  { id: 'esp-mon-12', symbol: '₱', name: 'Peso Filipino', category: 'Monedas y Finanzas', description: 'Signo del peso de Filipinas.', keywords: ['peso', 'filipinas'] },

  // ══════════════════════════════════════
  // MATEMÁTICAS Y CIENCIA
  // ══════════════════════════════════════
  { id: 'esp-mat-1', symbol: '∞', name: 'Infinito Matemático', category: 'Matemáticas y Ciencia', description: 'Representa un valor sin límite ni final.', keywords: ['infinito', 'limite', 'eterno'], popular: true },
  { id: 'esp-mat-2', symbol: 'π', name: 'Número Pi', category: 'Matemáticas y Ciencia', description: 'Constante matemática fundamental (3.14159...).', keywords: ['pi', 'circulo', 'constante', 'geometria'], popular: true },
  { id: 'esp-mat-3', symbol: '∑', name: 'Sumatoria', category: 'Matemáticas y Ciencia', description: 'Operador de suma de serie matemática.', keywords: ['sumatoria', 'sigma', 'serie'] },
  { id: 'esp-mat-4', symbol: '√', name: 'Raíz Cuadrada', category: 'Matemáticas y Ciencia', description: 'Radical matemático de raíz.', keywords: ['raiz', 'radical', 'calculo'] },
  { id: 'esp-mat-5', symbol: '∫', name: 'Integral', category: 'Matemáticas y Ciencia', description: 'Operador de cálculo integral.', keywords: ['integral', 'calculo', 'area'] },
  { id: 'esp-mat-6', symbol: '∆', name: 'Delta / Incremento', category: 'Matemáticas y Ciencia', description: 'Variación o diferencia en ciencias.', keywords: ['delta', 'diferencia', 'triangulo'] },
  { id: 'esp-mat-7', symbol: '≈', name: 'Aproximadamente Igual', category: 'Matemáticas y Ciencia', description: 'Símbolo de valor aproximado o estimado.', keywords: ['aproximado', 'casi igual', 'estimado'] },
  { id: 'esp-mat-8', symbol: '≠', name: 'No es Igual / Diferente', category: 'Matemáticas y Ciencia', description: 'Símbolo de desigualdad lógica.', keywords: ['diferente', 'desigual', 'no igual'] },
  { id: 'esp-mat-9', symbol: '≤', name: 'Menor o Igual que', category: 'Matemáticas y Ciencia', description: 'Desigualdad matemática menor o igual.', keywords: ['menor o igual', 'comparacion'] },
  { id: 'esp-mat-10', symbol: '≥', name: 'Mayor o Igual que', category: 'Matemáticas y Ciencia', description: 'Desigualdad matemática mayor o igual.', keywords: ['mayor o igual', 'comparacion'] },
  { id: 'esp-mat-11', symbol: '±', name: 'Más o Menos / Tolerancia', category: 'Matemáticas y Ciencia', description: 'Margen de error o doble signo.', keywords: ['mas o menos', 'tolerancia', 'margen'] },
  { id: 'esp-mat-12', symbol: '÷', name: 'Signo de División', category: 'Matemáticas y Ciencia', description: 'Operador aritmético de división (óbelo).', keywords: ['division', 'dividir', 'obelo'] },
  { id: 'esp-mat-13', symbol: '×', name: 'Signo de Multiplicación', category: 'Matemáticas y Ciencia', description: 'Cruz aritmética de multiplicación.', keywords: ['multiplicacion', 'por', 'producto'] },
  { id: 'esp-mat-14', symbol: '‰', name: 'Por Mil', category: 'Matemáticas y Ciencia', description: 'Proporción por cada mil unidades.', keywords: ['por mil', 'porcentaje', 'tasa'] },
  { id: 'esp-mat-15', symbol: '∠', name: 'Ángulo', category: 'Matemáticas y Ciencia', description: 'Medición geométrica de ángulo.', keywords: ['angulo', 'geometria', 'grados'] },
  { id: 'esp-mat-16', symbol: '⊥', name: 'Perpendicular', category: 'Matemáticas y Ciencia', description: 'Líneas que se cruzan a 90 grados.', keywords: ['perpendicular', 'ortogonal', 'geometria'] },
  { id: 'esp-mat-17', symbol: '∂', name: 'Derivada Parcial', category: 'Matemáticas y Ciencia', description: 'Cálculo multivariable de derivada.', keywords: ['derivada', 'parcial', 'calculo'] },
  { id: 'esp-mat-18', symbol: '∇', name: 'Nabla / Gradiente', category: 'Matemáticas y Ciencia', description: 'Operador diferencial vectorial.', keywords: ['nabla', 'gradiente', 'vectorial'] },

  // ══════════════════════════════════════
  // ZODIACO Y ASTROLOGÍA
  // ══════════════════════════════════════
  { id: 'esp-zod-1', symbol: '♈', name: 'Aries', category: 'Zodiaco y Astrología', description: 'Signo de fuego del carnero (21 marzo - 19 abril).', keywords: ['aries', 'carnero', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-2', symbol: '♉', name: 'Tauro', category: 'Zodiaco y Astrología', description: 'Signo de tierra del toro (20 abril - 20 mayo).', keywords: ['tauro', 'toro', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-3', symbol: '♊', name: 'Géminis', category: 'Zodiaco y Astrología', description: 'Signo de aire de los gemelos (21 mayo - 20 junio).', keywords: ['geminis', 'gemelos', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-4', symbol: '♋', name: 'Cáncer', category: 'Zodiaco y Astrología', description: 'Signo de agua del cangrejo (21 junio - 22 julio).', keywords: ['cancer', 'cangrejo', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-5', symbol: '♌', name: 'Leo', category: 'Zodiaco y Astrología', description: 'Signo de fuego del león (23 julio - 22 agosto).', keywords: ['leo', 'leon', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-6', symbol: '♍', name: 'Virgo', category: 'Zodiaco y Astrología', description: 'Signo de tierra de la virgen (23 agosto - 22 septiembre).', keywords: ['virgo', 'virgen', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-7', symbol: '♎', name: 'Libra', category: 'Zodiaco y Astrología', description: 'Signo de aire de la balanza (23 septiembre - 22 octubre).', keywords: ['libra', 'balanza', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-8', symbol: '♏', name: 'Escorpio', category: 'Zodiaco y Astrología', description: 'Signo de agua del escorpión (23 octubre - 21 noviembre).', keywords: ['escorpio', 'escorpion', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-9', symbol: '♐', name: 'Sagitario', category: 'Zodiaco y Astrología', description: 'Signo de fuego del arquero (22 noviembre - 21 diciembre).', keywords: ['sagitario', 'arquero', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-10', symbol: '♑', name: 'Capricornio', category: 'Zodiaco y Astrología', description: 'Signo de tierra de la cabra (22 diciembre - 19 enero).', keywords: ['capricornio', 'cabra', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-11', symbol: '♒', name: 'Acuario', category: 'Zodiaco y Astrología', description: 'Signo de aire del portador de agua (20 enero - 18 febrero).', keywords: ['acuario', 'agua', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-12', symbol: '♓', name: 'Piscis', category: 'Zodiaco y Astrología', description: 'Signo de agua de los peces (19 febrero - 20 marzo).', keywords: ['piscis', 'peces', 'zodiaco', 'horoscopo'], popular: true },
  { id: 'esp-zod-13', symbol: '☀️', name: 'Sol Radiante', category: 'Zodiaco y Astrología', description: 'Astro rey diurno y fuente de energía.', keywords: ['sol', 'dia', 'energia', 'astro'] },
  { id: 'esp-zod-14', symbol: '🌙', name: 'Luna Creciente', category: 'Zodiaco y Astrología', description: 'Astro nocturno de intuición y magia.', keywords: ['luna', 'noche', 'magia', 'astro'] },
  { id: 'esp-zod-15', symbol: '🪐', name: 'Planeta con Anillos / Saturno', category: 'Zodiaco y Astrología', description: 'Planeta del cosmos y el misterio.', keywords: ['saturno', 'planeta', 'anillos', 'cosmos'] },

  // ══════════════════════════════════════
  // FORMAS GEOMÉTRICAS
  // ══════════════════════════════════════
  { id: 'esp-geo-1', symbol: '●', name: 'Círculo Negro Sólido', category: 'Formas Geométricas', description: 'Punto grande relleno.', keywords: ['circulo', 'punto', 'negro', 'solido'], popular: true },
  { id: 'esp-geo-2', symbol: '○', name: 'Círculo Blanco Hueco', category: 'Formas Geométricas', description: 'Aro de contorno fino.', keywords: ['circulo', 'hueco', 'aro', 'blanco'], popular: true },
  { id: 'esp-geo-3', symbol: '◉', name: 'Círculo con Punto / Ojo de Buey', category: 'Formas Geométricas', description: 'Círculo concéntrico con centro lleno.', keywords: ['circulo', 'diana', 'punto', 'blanco'] },
  { id: 'esp-geo-4', symbol: '◎', name: 'Doble Círculo Concéntrico', category: 'Formas Geométricas', description: 'Dos aros concéntricos concéntricos.', keywords: ['doble', 'circulo', 'aros'] },
  { id: 'esp-geo-5', symbol: '⦿', name: 'Punto en Círculo Sombreado', category: 'Formas Geométricas', description: 'Botón de opción o diana.', keywords: ['boton', 'radio', 'diana'] },
  { id: 'esp-geo-6', symbol: '■', name: 'Cuadrado Negro Sólido', category: 'Formas Geométricas', description: 'Cuadrado de relleno plano.', keywords: ['cuadrado', 'negro', 'bloque'] },
  { id: 'esp-geo-7', symbol: '□', name: 'Cuadrado Blanco Hueco', category: 'Formas Geométricas', description: 'Marco cuadrado con interior vacío.', keywords: ['cuadrado', 'hueco', 'marco'] },
  { id: 'esp-geo-8', symbol: '▢', name: 'Cuadrado de Esquinas Redondas', category: 'Formas Geométricas', description: 'Forma cuadrada suave y moderna.', keywords: ['cuadrado', 'redondeado', 'suave'] },
  { id: 'esp-geo-9', symbol: '▣', name: 'Cuadrado con Interior Relleno', category: 'Formas Geométricas', description: 'Cuadro dentro de cuadro.', keywords: ['cuadro', 'doble', 'relleno'] },
  { id: 'esp-geo-10', symbol: '▲', name: 'Triángulo Negro hacia Arriba', category: 'Formas Geométricas', description: 'Flecha triangular ascendente sólida.', keywords: ['triangulo', 'arriba', 'solido'], popular: true },
  { id: 'esp-geo-11', symbol: '△', name: 'Triángulo Blanco hacia Arriba', category: 'Formas Geométricas', description: 'Triángulo de contorno apuntando arriba.', keywords: ['triangulo', 'arriba', 'hueco'] },
  { id: 'esp-geo-12', symbol: '▼', name: 'Triángulo Negro hacia Abajo', category: 'Formas Geométricas', description: 'Indicador descendente sólido.', keywords: ['triangulo', 'abajo', 'descendente'] },
  { id: 'esp-geo-13', symbol: '▽', name: 'Triángulo Blanco hacia Abajo', category: 'Formas Geométricas', description: 'Indicador descendente fino.', keywords: ['triangulo', 'abajo', 'hueco'] },
  { id: 'esp-geo-14', symbol: '◆', name: 'Rombo Negro Sólido', category: 'Formas Geométricas', description: 'Diamante geométrico relleno.', keywords: ['rombo', 'diamante', 'negro'], popular: true },
  { id: 'esp-geo-15', symbol: '◇', name: 'Rombo Blanco Hueco', category: 'Formas Geométricas', description: 'Diamante geométrico con contorno.', keywords: ['rombo', 'diamante', 'hueco'] },
  { id: 'esp-geo-16', symbol: '◈', name: 'Rombo con Punto Central', category: 'Formas Geométricas', description: 'Glifo ornamental de diamante.', keywords: ['rombo', 'diana', 'ornamental'] },

  // ══════════════════════════════════════
  // MARCOS Y SEPARADORES
  // ══════════════════════════════════════
  { id: 'esp-sep-1', symbol: '『』', name: 'Corchetes Japoneses de Esquina', category: 'Marcos y Separadores', description: 'Marcos asiáticos ideales para encerrar nombres.', keywords: ['corchetes', 'japones', 'marcos', 'nicks'], popular: true },
  { id: 'esp-sep-2', symbol: '【】', name: 'Corchetes Asiáticos Lenticulares', category: 'Marcos y Separadores', description: 'Marcos gruesos de gran destaque para títulos.', keywords: ['corchetes', 'gruesos', 'titulos', 'marcos'], popular: true },
  { id: 'esp-sep-3', symbol: '〖〗', name: 'Corchetes Lenticulares Huecos', category: 'Marcos y Separadores', description: 'Versión fina y elegante de corchetes lenticulares.', keywords: ['corchetes', 'huecos', 'elegantes'] },
  { id: 'esp-sep-4', symbol: '「」', name: 'Comillas de Esquina Asiáticas', category: 'Marcos y Separadores', description: 'Comillas de diálogo en estilo manga y anime.', keywords: ['comillas', 'manga', 'anime', 'japones'] },
  { id: 'esp-sep-5', symbol: '≪≫', name: 'Comillas Angulares Dobles', category: 'Marcos y Separadores', description: 'Adorno fino de comillas de chevron.', keywords: ['chevron', 'angulares', 'comillas'] },
  { id: 'esp-sep-6', symbol: '《》', name: 'Paréntesis Angulares Asiáticos', category: 'Marcos y Separadores', description: 'Comillas dobles para citas y perfiles.', keywords: ['parentesis', 'angulares', 'citas'] },
  { id: 'esp-sep-7', symbol: '〔〕', name: 'Paréntesis de Tortuga', category: 'Marcos y Separadores', description: 'Soportes de caparazón japoneses.', keywords: ['tortuga', 'parentesis', 'asiatico'] },
  { id: 'esp-sep-8', symbol: '༺༻', name: 'Alas Ornamentales Tibetanas', category: 'Marcos y Separadores', description: 'Marcos de alas simétricas para nombres.', keywords: ['alas', 'tibetano', 'adorno', 'nombre'], popular: true },
  { id: 'esp-sep-9', symbol: '꧁꧂', name: 'Ornamento de Lazo Floral', category: 'Marcos y Separadores', description: 'Adorno victoriano para enmarcar nombres pro.', keywords: ['victoriano', 'lazo', 'marco', 'clan'], popular: true },
  { id: 'esp-sep-10', symbol: '─── ❖ ───', name: 'Divisor Rombo Floral', category: 'Marcos y Separadores', description: 'Línea de corte elegante con rombo central.', keywords: ['divisor', 'linea', 'rombo', 'separador'], popular: true },
  { id: 'esp-sep-11', symbol: '•┈••✦••┈•', name: 'Divisor con Brillos y Puntos', category: 'Marcos y Separadores', description: 'Separador centrado con destello brillante.', keywords: ['separador', 'brillo', 'puntos', 'bio'] },
  { id: 'esp-sep-12', symbol: '─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───', name: 'Línea Celestial con Luna', category: 'Marcos y Separadores', description: 'Separador estelar nocturno para biografías.', keywords: ['celestial', 'luna', 'estrellas', 'separador'], popular: true },

  // ══════════════════════════════════════
  // LAZOS Y COQUETTE
  // ══════════════════════════════════════
  { id: 'esp-coq-1', symbol: '୨୧', name: 'Lazo Coquette Japonés', category: 'Lazos y Coquette', description: 'El lazo estético por excelencia de la tendencia coquette.', keywords: ['lazo', 'coquette', 'moño', 'tierno'], popular: true },
  { id: 'esp-coq-2', symbol: 'ೀ', name: 'Rizo Floral Telugú', category: 'Lazos y Coquette', description: 'Carácter telugú con silueta de cinta o flor.', keywords: ['rizo', 'cinta', 'flor', 'coquette'], popular: true },
  { id: 'esp-coq-3', symbol: '𐙚', name: 'Moño de Cinta Dulce', category: 'Lazos y Coquette', description: 'Glifo viral de moño para nombres y bios.', keywords: ['moño', 'cinta', 'dulce', 'viral'], popular: true },
  { id: 'esp-coq-4', symbol: '౨ৎ', name: 'Alas de Mariposa Gemelas', category: 'Lazos y Coquette', description: 'Alas sutiles que recuerdan a un moño.', keywords: ['mariposa', 'alas', 'moño', 'coquette'] },
  { id: 'esp-coq-5', symbol: '𓍢ִ໋', name: 'Adorno de Espiral Suave', category: 'Lazos y Coquette', description: 'Glifo decorativo con espiral botánica.', keywords: ['espiral', 'botanica', 'adorno'] },
  { id: 'esp-coq-6', symbol: 'ʚɞ', name: 'Alitas de Ángel Simétricas', category: 'Lazos y Coquette', description: 'Par de alas inocentes para rodear palabras.', keywords: ['alitas', 'angel', 'simetricas', 'tiernas'] },

  // ══════════════════════════════════════
  // GAMER Y NICKS
  // ══════════════════════════════════════
  { id: 'esp-gam-1', symbol: '亗', name: 'Corona Insana FF', category: 'Gamer y Nicks', description: 'Símbolo número uno de jugadores competitivos y veteranos.', keywords: ['corona', 'free fire', 'insano', 'competitivo'], popular: true },
  { id: 'esp-gam-2', symbol: '〆', name: 'Marca Shime Japonesa', category: 'Gamer y Nicks', description: 'Remate de clan y tag de equipo competitivo.', keywords: ['shime', 'clan', 'tag', 'free fire'], popular: true },
  { id: 'esp-gam-3', symbol: '么', name: 'Letra Me / Cuerno', category: 'Gamer y Nicks', description: 'Glifo angular usado como cuerno o inicial agresiva.', keywords: ['cuerno', 'angular', 'nick'], popular: true },
  { id: 'esp-gam-4', symbol: 'メ', name: 'Katakana Me / Cruz Ninja', category: 'Gamer y Nicks', description: 'Cruz afilada de katana japonesa.', keywords: ['ninja', 'espada', 'katana', 'cruz'], popular: true },
  { id: 'esp-gam-5', symbol: '彡', name: 'Tres Cortes / Ráfaga', category: 'Gamer y Nicks', description: 'Ráfaga de viento o cortes de espada ninja.', keywords: ['cortes', 'rafaga', 'ninja', 'espada'], popular: true },
  { id: 'esp-gam-6', symbol: '乡', name: 'Carácter Xiang / Escudo', category: 'Gamer y Nicks', description: 'Glifo con forma de escudo de batalla.', keywords: ['escudo', 'batalla', 'xiang'] },
  { id: 'esp-gam-7', symbol: '𖣘', name: 'Sello Sagrado', category: 'Gamer y Nicks', description: 'Emblema circular de poder místico.', keywords: ['sello', 'emblema', 'poder'] },
  { id: 'esp-gam-8', symbol: '⚡', name: 'Rayo Eléctrico Flash', category: 'Gamer y Nicks', description: 'Rapidez y disparo fulminante.', keywords: ['rayo', 'flash', 'velocidad'] },
  { id: 'esp-gam-9', symbol: '☣', name: 'Riesgo Biológico / Biohazard', category: 'Gamer y Nicks', description: 'Peligro tóxico y advertencia.', keywords: ['biohazard', 'toxico', 'peligro'] },
  { id: 'esp-gam-10', symbol: '☠', name: 'Calavera con Huesos Cruzados', category: 'Gamer y Nicks', description: 'Símbolo de muerte, pirata o eliminación.', keywords: ['calavera', 'pirata', 'muerte', 'peligro'], popular: true },
  { id: 'esp-gam-11', symbol: '☬', name: 'Khanda Sij', category: 'Gamer y Nicks', description: 'Espadas cruzadas de guerrero sagrado.', keywords: ['espadas', 'guerrero', 'khanda'] },
  { id: 'esp-gam-12', symbol: '♨', name: 'Aguas Termales / Vapor Caliente', category: 'Gamer y Nicks', description: 'Símbolo de fuego y calor intenso.', keywords: ['vapor', 'calor', 'fuego'] }
];
