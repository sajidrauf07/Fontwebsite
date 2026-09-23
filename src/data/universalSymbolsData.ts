export interface UniversalSymbol {
  id: string;
  symbol: string;
  name: string;
  category: string;
  description: string;
  keywords: string[];
  featured?: boolean;
}

export const SYMBOL_CATEGORIES = [
  'Todos',
  'Populares',
  'Gamer y Coronas',
  'Corazones',
  'Estrellas',
  'Aesthetic',
  'Flechas',
  'Flores y Naturaleza',
  'Cruces y Místicos',
  'Caritas y Kaomoji',
  'Marcos y Separadores',
  'Checks y Puntos',
  'Música y Notas',
  'Especiales y Signos'
] as const;

export type SymbolCategoryType = (typeof SYMBOL_CATEGORIES)[number];

export const UNIVERSAL_SYMBOLS: UniversalSymbol[] = [
  // --- POPULARES & DESTACADOS ---
  { id: 'pop-1', symbol: '★', name: 'Estrella Negra', category: 'Estrellas', description: 'Estrella sólida clásica para nombres y bios.', keywords: ['estrella', 'star', 'negra', 'solida', 'popular'], featured: true },
  { id: 'pop-2', symbol: '♡', name: 'Corazón Blanco', category: 'Corazones', description: 'Contorno de corazón estético y sutil.', keywords: ['corazon', 'heart', 'blanco', 'amor', 'aesthetic'], featured: true },
  { id: 'pop-3', symbol: '亗', name: 'Corona Gamer', category: 'Gamer y Coronas', description: 'Corona de rey ideal para nicks de Free Fire y shooters.', keywords: ['corona', 'rey', 'gamer', 'free fire', 'king'], featured: true },
  { id: 'pop-4', symbol: '⚡', name: 'Rayo Eléctrico', category: 'Gamer y Coronas', description: 'Símbolo de alta energía y rapidez para apodos.', keywords: ['rayo', 'energia', 'trueno', 'electrico', 'flash'], featured: true },
  { id: 'pop-5', symbol: '✦', name: 'Destello Negro', category: 'Estrellas', description: 'Destello de cuatro puntas estético.', keywords: ['destello', 'brillo', 'estrella', 'sparkle'], featured: true },
  { id: 'pop-6', symbol: '✧', name: 'Destello Blanco', category: 'Estrellas', description: 'Brillo de cuatro puntas hueco.', keywords: ['brillo', 'destello', 'aesthetic', 'estrella'], featured: true },
  { id: 'pop-7', symbol: 'ツ', name: 'Sonrisa Katakana Tsu', category: 'Caritas y Kaomoji', description: 'Sonrisa pícara japonesa muy usada en nicks.', keywords: ['sonrisa', 'smile', 'tsu', 'katakana', 'gamer'], featured: true },
  { id: 'pop-8', symbol: '𓆩♡𓆪', name: 'Alas con Corazón', category: 'Aesthetic', description: 'Corazón alado egipcio de estilo aesthetic.', keywords: ['alas', 'corazon', 'aesthetic', 'wings', 'amor'], featured: true },
  { id: 'pop-9', symbol: '〆', name: 'Marca Shime', category: 'Gamer y Coronas', description: 'Símbolo de clan y escuadra japonesa.', keywords: ['shime', 'clan', 'japones', 'gamer', 'cierre'], featured: true },
  { id: 'pop-10', symbol: 'メ', name: 'Me Katakana', category: 'Gamer y Coronas', description: 'Símbolo tipo cruz / filo para nicks competitivos.', keywords: ['me', 'katakana', 'cruz', 'pro', 'gamer'], featured: true },
  { id: 'pop-11', symbol: '✿', name: 'Flor Blanca', category: 'Flores y Naturaleza', description: 'Flor decorativa de cinco pétalos.', keywords: ['flor', 'flower', 'naturaleza', 'cute'], featured: true },
  { id: 'pop-12', symbol: '✓', name: 'Check Simple', category: 'Checks y Puntos', description: 'Marca de verificado y acierto.', keywords: ['check', 'visto', 'correcto', 'verificado'], featured: true },
  { id: 'pop-13', symbol: '☠', name: 'Calavera con Huesos', category: 'Gamer y Coronas', description: 'Símbolo de peligro y combate.', keywords: ['calavera', 'muerte', 'pirata', 'dark', 'skull'], featured: true },
  { id: 'pop-14', symbol: '☾', name: 'Luna Creciente', category: 'Aesthetic', description: 'Luna mística y estética.', keywords: ['luna', 'moon', 'noche', 'aesthetic', 'espacio'], featured: true },

  // --- GAMER Y CORONAS ---
  { id: 'gam-1', symbol: '亗', name: 'Corona Pro', category: 'Gamer y Coronas', description: 'Corona insana para clanes y líderes.', keywords: ['corona', 'ff', 'clan', 'insano'], featured: true },
  { id: 'gam-2', symbol: '☬', name: 'Khanda Épica', category: 'Gamer y Coronas', description: 'Símbolo místico de guerrero con espadas.', keywords: ['khanda', 'guerrero', 'espadas', 'pro'], featured: true },
  { id: 'gam-3', symbol: '𒆜', name: 'Cruces Ninja', category: 'Gamer y Coronas', description: 'Marco ornamental militar para nicks.', keywords: ['ninja', 'cruces', 'marco', 'clan'], featured: true },
  { id: 'gam-4', symbol: '⚔', name: 'Espadas Cruzadas', category: 'Gamer y Coronas', description: 'Símbolo de duelo, combate y PvP.', keywords: ['espadas', 'pvp', 'duelo', 'combate', 'batalla'], featured: true },
  { id: 'gam-5', symbol: '♛', name: 'Reina de Ajedrez', category: 'Gamer y Coronas', description: 'Corona de dama o reina en ajedrez.', keywords: ['reina', 'corona', 'queen', 'ajedrez'] },
  { id: 'gam-6', symbol: '♚', name: 'Rey de Ajedrez', category: 'Gamer y Coronas', description: 'Corona de rey soberano.', keywords: ['rey', 'king', 'ajedrez', 'corona'] },
  { id: 'gam-7', symbol: '々', name: 'Iteración Noma', category: 'Gamer y Coronas', description: 'Símbolo de repetición japonés para nicks orientales.', keywords: ['noma', 'japones', 'kanji', 'gamer'] },
  { id: 'gam-8', symbol: '彡', name: 'Ráfaga de Viento', category: 'Gamer y Coronas', description: 'Símbolo de velocidad y corte para apodos.', keywords: ['viento', 'corte', 'velocidad', 'slash'] },
  { id: 'gam-9', symbol: '๛', name: 'Firma Tailandesa Khomut', category: 'Gamer y Coronas', description: 'Espirales estilizadas para rematar nombres.', keywords: ['tailandes', 'espiral', 'cola', 'remate'] },
  { id: 'gam-10', symbol: '𓊈', name: 'Corchete Egipcio Izquierdo', category: 'Gamer y Coronas', description: 'Marco jeroglífico para encerrar nombres pro.', keywords: ['corchete', 'egipcio', 'marco', 'bracket'] },
  { id: 'gam-11', symbol: '𓊉', name: 'Corchete Egipcio Derecho', category: 'Gamer y Coronas', description: 'Cierre jeroglífico egipcio.', keywords: ['corchete', 'egipcio', 'cierre', 'bracket'] },
  { id: 'gam-12', symbol: '꧁', name: 'Alas Ornamentales Izq', category: 'Gamer y Coronas', description: 'Inicio de marco decorativo tipo ángel/demonio.', keywords: ['alas', 'marco', 'decoracion', 'nick'] },
  { id: 'gam-13', symbol: '꧂', name: 'Alas Ornamentales Der', category: 'Gamer y Coronas', description: 'Fin de marco decorativo tipo ángel/demonio.', keywords: ['alas', 'marco', 'decoracion', 'nick'] },
  { id: 'gam-14', symbol: '☣', name: 'Biohazard', category: 'Gamer y Coronas', description: 'Riesgo biológico y toxicidad.', keywords: ['biohazard', 'peligro', 'toxico', 'radioactivo'] },
  { id: 'gam-15', symbol: '☢', name: 'Radioactivo', category: 'Gamer y Coronas', description: 'Símbolo nuclear de poder.', keywords: ['nuclear', 'radioactivo', 'peligro', 'energia'] },
  { id: 'gam-16', symbol: '🎯', name: 'Diana / Blanco', category: 'Gamer y Coronas', description: 'Puntería perfecta y tiro a la cabeza.', keywords: ['tiro', 'diana', 'sniper', 'blanco', 'headshot'] },
  { id: 'gam-17', symbol: '𝕯', name: 'D Gótica Fraktur', category: 'Gamer y Coronas', description: 'Inicial gótica para nombres oscuros.', keywords: ['gotica', 'letra', 'fraktur', 'dark'] },
  { id: 'gam-18', symbol: '𝖁', name: 'V Gótica Fraktur', category: 'Gamer y Coronas', description: 'Letra V gótica de impacto.', keywords: ['gotica', 'v', 'fraktur', 'viper'] },

  // --- CORAZONES ---
  { id: 'cor-1', symbol: '♡', name: 'Corazón Hueco', category: 'Corazones', description: 'El clásico corazón blanco de estética limpia.', keywords: ['corazon', 'blanco', 'hueco', 'amor', 'cute'], featured: true },
  { id: 'cor-2', symbol: '♥', name: 'Corazón Negro', category: 'Corazones', description: 'Corazón sólido lleno para bios y textos.', keywords: ['corazon', 'negro', 'solido', 'amor'], featured: true },
  { id: 'cor-3', symbol: '❥', name: 'Corazón Rotado', category: 'Corazones', description: 'Corazón inclinado con estilo caligráfico.', keywords: ['corazon', 'inclinado', 'romantico', 'caligrafia'], featured: true },
  { id: 'cor-4', symbol: '❣', name: 'Exclamación de Corazón', category: 'Corazones', description: 'Signo de exclamación coronado por un corazón.', keywords: ['corazon', 'exclamacion', 'alerta', 'tierno'] },
  { id: 'cor-5', symbol: '❦', name: 'Corazón Floral / Hiedra', category: 'Corazones', description: 'Adorno tipográfico clásico con forma de corazón floral.', keywords: ['florete', 'hiedra', 'floral', 'elegante'] },
  { id: 'cor-6', symbol: '❧', name: 'Corazón Floral Inverso', category: 'Corazones', description: 'Adorno botánico curvo con hoja de corazón.', keywords: ['hoja', 'adorno', 'elegante', 'vintage'] },
  { id: 'cor-7', symbol: 'დ', name: 'Corazón Georgiano', category: 'Corazones', description: 'Letra georgiana con silueta de corazón doble.', keywords: ['georgiano', 'corazon', 'doble', 'tierno'] },
  { id: 'cor-8', symbol: 'ღ', name: 'Corazón de Amor Georgiano', category: 'Corazones', description: 'Popular letra georgiana con forma de corazón lazo.', keywords: ['lazo', 'georgiano', 'amor', 'aesthetic'] },
  { id: 'cor-9', symbol: 'ꨄ', name: 'Corazón Árabe Estético', category: 'Corazones', description: 'Símbolo decorativo con forma de corazón minimalista.', keywords: ['arabe', 'minimalista', 'corazon', 'aesthetic'], featured: true },
  { id: 'cor-10', symbol: '𓆩♡𓆪', name: 'Corazón con Alas Grandes', category: 'Corazones', description: 'Diseño alado egipcio con corazón central.', keywords: ['alas', 'egipcio', 'corazon', 'angel'], featured: true },
  { id: 'cor-11', symbol: '💖', name: 'Corazón Brillante', category: 'Corazones', description: 'Corazón con chispas de brillo.', keywords: ['brillo', 'sparkle', 'chispas', 'rosa'] },
  { id: 'cor-12', symbol: '💕', name: 'Dos Corazones', category: 'Corazones', description: 'Pareja de corazones flotantes.', keywords: ['dos', 'pareja', 'flotantes', 'amor'] },
  { id: 'cor-13', symbol: '💓', name: 'Corazón Latiendo', category: 'Corazones', description: 'Vibración y latido de amor.', keywords: ['latido', 'vibracion', 'pulso', 'emocion'] },
  { id: 'cor-14', symbol: '💗', name: 'Corazón Creciente', category: 'Corazones', description: 'Capas de corazón en expansión.', keywords: ['creciente', 'expansion', 'ternura'] },

  // --- ESTRELLAS ---
  { id: 'est-1', symbol: '★', name: 'Estrella Sólida', category: 'Estrellas', description: 'Estrella clásica de 5 puntas rellena.', keywords: ['estrella', 'star', 'negra', 'solida'], featured: true },
  { id: 'est-2', symbol: '☆', name: 'Estrella Hueca', category: 'Estrellas', description: 'Contorno de estrella de 5 puntas.', keywords: ['estrella', 'blanca', 'hueca', 'outline'], featured: true },
  { id: 'est-3', symbol: '✦', name: 'Destello Cuatro Puntas', category: 'Estrellas', description: 'Símbolo estelar relleno con destello fino.', keywords: ['destello', 'sparkle', 'estrella', 'aesthetic'], featured: true },
  { id: 'est-4', symbol: '✧', name: 'Destello Hueco', category: 'Estrellas', description: 'Contorno de destello brillante para bios.', keywords: ['brillo', 'destello', 'blanco', 'aesthetic'], featured: true },
  { id: 'est-5', symbol: '✩', name: 'Estrella de Trazo Fino', category: 'Estrellas', description: 'Estrella blanca de línea delgada.', keywords: ['estrella', 'fina', 'delgada', 'linea'] },
  { id: 'est-6', symbol: '✪', name: 'Estrella Circulada', category: 'Estrellas', description: 'Estrella dentro de un círculo sólido.', keywords: ['circulo', 'emblema', 'estrella', 'militar'] },
  { id: 'est-7', symbol: '✫', name: 'Estrella con Brillo', category: 'Estrellas', description: 'Estrella de cinco puntas con relieve.', keywords: ['relieve', 'estrella', 'decoracion'] },
  { id: 'est-8', symbol: '✬', name: 'Estrella Asimétrica', category: 'Estrellas', description: 'Estrella decorativa con peso superior.', keywords: ['estrella', 'adorno', 'asimetrica'] },
  { id: 'est-9', symbol: '✭', name: 'Estrella Gruesa', category: 'Estrellas', description: 'Estrella de 5 puntas con brazos anchos.', keywords: ['gruesa', 'estrella', 'impacto'] },
  { id: 'est-10', symbol: '✮', name: 'Estrella Gruesa con Relieve', category: 'Estrellas', description: 'Estrella pesada con sombreado de contorno.', keywords: ['sombra', 'relieve', 'estrella'] },
  { id: 'est-11', symbol: '✯', name: 'Estrella Puntiaguda', category: 'Estrellas', description: 'Estrella con rayos largos.', keywords: ['rayos', 'puntiaguda', 'luz'] },
  { id: 'est-12', symbol: '✰', name: 'Estrella con Sombra', category: 'Estrellas', description: 'Estrella blanca con efecto de profundidad 3D.', keywords: ['3d', 'sombra', 'profundidad', 'blanca'] },
  { id: 'est-13', symbol: '✵', name: 'Estrella de 8 Puntas', category: 'Estrellas', description: 'Rosa de los vientos estelar.', keywords: ['ocho', 'puntas', 'brujula', 'guia'] },
  { id: 'est-14', symbol: '✶', name: 'Estrella de Seis Rayos', category: 'Estrellas', description: 'Destello de nieve o cristal.', keywords: ['cristal', 'seis', 'nieve', 'astronomia'] },

  // --- AESTHETIC ---
  { id: 'aes-1', symbol: '☾', name: 'Luna Creciente Clásica', category: 'Aesthetic', description: 'Símbolo nocturno para bios y nombres melancólicos.', keywords: ['luna', 'noche', 'cielo', 'aesthetic'], featured: true },
  { id: 'aes-2', symbol: '☽', name: 'Luna Menguante', category: 'Aesthetic', description: 'Luna orientada a la izquierda.', keywords: ['luna', 'menguante', 'misterio', 'espacio'] },
  { id: 'aes-3', symbol: '☁', name: 'Nube Algodón', category: 'Aesthetic', description: 'Nube suave para temáticas celestiales y soñadoras.', keywords: ['nube', 'cloud', 'cielo', 'suave', 'aesthetic'], featured: true },
  { id: 'aes-4', symbol: 'ʚïɞ', name: 'Mariposa Kaomoji', category: 'Aesthetic', description: 'Mariposa de tres caracteres muy popular en TikTok e Instagram.', keywords: ['mariposa', 'butterfly', 'tierno', 'cute'], featured: true },
  { id: 'aes-5', symbol: '⋆', name: 'Pequeña Estrella Cósmica', category: 'Aesthetic', description: 'Punto estelar diminuto para separar palabras con estilo.', keywords: ['polvo', 'estelar', 'diminuto', 'espaciado'] },
  { id: 'aes-6', symbol: '｡', name: 'Círculo Chino Diminuto', category: 'Aesthetic', description: 'Punto flotante para crear separación delicada.', keywords: ['punto', 'burbuja', 'delicado', 'kawaii'] },
  { id: 'aes-7', symbol: '°', name: 'Grado Esférico', category: 'Aesthetic', description: 'Burbuja o esfera elevada decorativa.', keywords: ['grado', 'burbuja', 'elevado', 'esfera'] },
  { id: 'aes-8', symbol: '☼', name: 'Sol con Rayos', category: 'Aesthetic', description: 'Sol brillante con aura circular.', keywords: ['sol', 'sun', 'luz', 'verano', 'calor'] },
  { id: 'aes-9', symbol: 'ᥫ᭡', name: 'Corazón Minimalista Cham', category: 'Aesthetic', description: 'Corazón elegante muy buscado en redes sociales.', keywords: ['corazon', 'cham', 'aesthetic', 'moderno'], featured: true },
  { id: 'aes-10', symbol: 'ೀ', name: 'Lazo Coquette', category: 'Aesthetic', description: 'Carácter telugu que se asemeja a un listón o lazo coquette.', keywords: ['coquette', 'lazo', 'liston', 'tierno'], featured: true },
  { id: 'aes-11', symbol: '𓍢ִ໋', name: 'Chispa Ornamental', category: 'Aesthetic', description: 'Adorno sofisticado para encabezados y nombres aesthetic.', keywords: ['chispa', 'adorno', 'elegante', 'filigrana'] },
  { id: 'aes-12', symbol: '𓆩✧𓆪', name: 'Alas con Destello', category: 'Aesthetic', description: 'Marco alado con destello central místico.', keywords: ['alas', 'destello', 'misterio', 'angel'] },

  // --- FLECHAS ---
  { id: 'fle-1', symbol: '➔', name: 'Flecha Gruesa Derecha', category: 'Flechas', description: 'Flecha directa para llamadas a la acción y enlaces.', keywords: ['flecha', 'derecha', 'cta', 'enlace', 'next'], featured: true },
  { id: 'fle-2', symbol: '➜', name: 'Flecha Triángulo', category: 'Flechas', description: 'Flecha compacta con punta afilada.', keywords: ['flecha', 'adelante', 'apuntar'] },
  { id: 'fle-3', symbol: '➤', name: 'Flecha Cuña', category: 'Flechas', description: 'Puntero aerodinámico moderno.', keywords: ['puntero', 'moderno', 'indicador'] },
  { id: 'fle-4', symbol: '➳', name: 'Flecha de Cupido / Pluma', category: 'Flechas', description: 'Flecha de arquero con plumas en la base.', keywords: ['cupido', 'pluma', 'arquero', 'amor', 'vintage'], featured: true },
  { id: 'fle-5', symbol: '➵', name: 'Flecha de Flechazo Fina', category: 'Flechas', description: 'Flecha delgada con punta triangular y aletas.', keywords: ['delgada', 'arco', 'disparo', 'flecha'] },
  { id: 'fle-6', symbol: '➸', name: 'Flecha de Tres Plumas', category: 'Flechas', description: 'Flecha de ballesta decorativa.', keywords: ['ballesta', 'tres plumas', 'caza'] },
  { id: 'fle-7', symbol: '➥', name: 'Flecha Retorno Abajo', category: 'Flechas', description: 'Flecha curva que señala un salto de línea o respuesta.', keywords: ['retorno', 'curva', 'responder'] },
  { id: 'fle-8', symbol: '➦', name: 'Flecha Retorno Arriba', category: 'Flechas', description: 'Flecha curva que asciende.', keywords: ['arriba', 'subir', 'retorno'] },
  { id: 'fle-9', symbol: '⇄', name: 'Flechas de Intercambio', category: 'Flechas', description: 'Dos flechas horizontales opuestas.', keywords: ['intercambio', 'doble', 'transferencia'] },
  { id: 'fle-10', symbol: '⇅', name: 'Flechas Verticales Dobles', category: 'Flechas', description: 'Dirección arriba y abajo simultánea.', keywords: ['arriba abajo', 'vertical', 'scroll'] },
  { id: 'fle-11', symbol: '↺', name: 'Flecha de Giro Antihorario', category: 'Flechas', description: 'Giro o reinicio de ciclo.', keywords: ['reinicio', 'giro', 'reload', 'ciclo'] },
  { id: 'fle-12', symbol: '↻', name: 'Flecha de Giro Horario', category: 'Flechas', description: 'Rotación en sentido de las agujas del reloj.', keywords: ['rotacion', 'recarga', 'siguiente'] },

  // --- FLORES Y NATURALEZA ---
  { id: 'flo-1', symbol: '✿', name: 'Flor Blanca Clásica', category: 'Flores y Naturaleza', description: 'Flor estilizada de contorno limpio.', keywords: ['flor', 'blanca', 'jardin', 'primavera'], featured: true },
  { id: 'flo-2', symbol: '❀', name: 'Flor de Cerezo Sakura', category: 'Flores y Naturaleza', description: 'Flor de sakura japonesa hueca.', keywords: ['sakura', 'cerezo', 'japon', 'flor'], featured: true },
  { id: 'flo-3', symbol: '❁', name: 'Flor Mandala', category: 'Flores y Naturaleza', description: 'Flor circular con geometría de ocho pétalos.', keywords: ['mandala', 'geometria', 'zen', 'flor'] },
  { id: 'flo-4', symbol: '✾', name: 'Flor de Seis Pétalos', category: 'Flores y Naturaleza', description: 'Flor elegante con pétalos redondeados.', keywords: ['seis', 'petalos', 'naturaleza'] },
  { id: 'flo-5', symbol: '☘', name: 'Trébol de Tres Hojas', category: 'Flores y Naturaleza', description: 'Trébol tradicional irlandés de buena suerte.', keywords: ['trebol', 'suerte', 'verde', 'irlanda'], featured: true },
  { id: 'flo-6', symbol: '🍀', name: 'Trébol de Cuatro Hojas', category: 'Flores y Naturaleza', description: 'El máximo símbolo de la fortuna y el éxito.', keywords: ['fortuna', 'cuatro hojas', 'suerte', 'exito'] },
  { id: 'flo-7', symbol: '𓆸', name: 'Loto Jeroglífico Egipcio', category: 'Flores y Naturaleza', description: 'Flor de loto sagrada antigua.', keywords: ['loto', 'egipcio', 'sagrado', 'espiritual'] },
  { id: 'flo-8', symbol: '𓇚', name: 'Ramo Botánico Antiguo', category: 'Flores y Naturaleza', description: 'Tallo con hojas botánicas estilizadas.', keywords: ['ramo', 'tallo', 'botanica', 'hierba'] },
  { id: 'flo-9', symbol: '🍃', name: 'Hojas al Viento', category: 'Flores y Naturaleza', description: 'Hojas verdes ondeando en el aire.', keywords: ['hojas', 'viento', 'fresco', 'organico'] },
  { id: 'flo-10', symbol: '🍁', name: 'Hoja de Arce', category: 'Flores y Naturaleza', description: 'Hoja otoñal de arce rojo.', keywords: ['arce', 'otoño', 'maple', 'canada'] },

  // --- CRUCES Y MÍSTICOS ---
  { id: 'cru-1', symbol: '†', name: 'Cruz Daga / Latina', category: 'Cruces y Místicos', description: 'Cruz latina clásica o daga tipográfica.', keywords: ['cruz', 'daga', 'fe', 'goth', 'dark'], featured: true },
  { id: 'cru-2', symbol: '‡', name: 'Cruz Doble / Lorena', category: 'Cruces y Místicos', description: 'Cruz con dos barras horizontales.', keywords: ['doble cruz', 'lorena', 'antigua', 'misterio'] },
  { id: 'cru-3', symbol: '✞', name: 'Cruz Latina Hueca', category: 'Cruces y Místicos', description: 'Cruz cristiana con silueta y contorno sombreado.', keywords: ['cristiana', 'cruz', 'religion', 'fe'] },
  { id: 'cru-4', symbol: '✟', name: 'Cruz de Contorno Fino', category: 'Cruces y Místicos', description: 'Cruz con diseño estilizado y base ensanchada.', keywords: ['cruz', 'fina', 'elegante', 'adorno'] },
  { id: 'cru-5', symbol: '✠', name: 'Cruz de Malta / Templaria', category: 'Cruces y Místicos', description: 'Cruz paté con puntas triangulares y brazos abiertos.', keywords: ['malta', 'templaria', 'caballero', 'escudo'], featured: true },
  { id: 'cru-6', symbol: '☯', name: 'Yin Yang', category: 'Cruces y Místicos', description: 'Símbolo taoísta del equilibrio entre fuerzas opuestas.', keywords: ['yin yang', 'tao', 'equilibrio', 'zen', 'armonia'], featured: true },
  { id: 'cru-7', symbol: '☸', name: 'Rueda del Dharma', category: 'Cruces y Místicos', description: 'Símbolo budista de la ley cósmica y renacimiento.', keywords: ['dharma', 'budismo', 'rueda', 'espiritual'] },
  { id: 'cru-8', symbol: '☥', name: 'Ankh de la Vida', category: 'Cruces y Místicos', description: 'Llave de la vida eterna del antiguo Egipto.', keywords: ['ankh', 'egipto', 'vida', 'llave', 'inmortal'] },
  { id: 'cru-9', symbol: '☬', name: 'Khanda Sagrada', category: 'Cruces y Místicos', description: 'Símbolo sij con dos espadas curvas y daga central.', keywords: ['khanda', 'espadas', 'sagrado', 'proteccion'] },

  // --- CARITAS Y KAOMOJI ---
  { id: 'kao-1', symbol: 'ツ', name: 'Sonrisa Pícara (Tsu)', category: 'Caritas y Kaomoji', description: 'Sonrisa katakana legendaria de nicks gamer.', keywords: ['sonrisa', 'smile', 'tsu', 'divertido'], featured: true },
  { id: 'kao-2', symbol: 'ッ', name: 'Sonrisa Pequeña (Tsu)', category: 'Caritas y Kaomoji', description: 'Variante pequeña y compacta del caracter tsu.', keywords: ['pequeña', 'sonrisa', 'cute', 'japon'] },
  { id: 'kao-3', symbol: 'シ', name: 'Mirada Guiño (Shi)', category: 'Caritas y Kaomoji', description: 'Expresión con ojos entornados y sonrisa.', keywords: ['shi', 'guiño', 'mirada', 'amable'] },
  { id: 'kao-4', symbol: 'ヅ', name: 'Sonrisa con Hoyuelos (Dzu)', category: 'Caritas y Kaomoji', description: 'Caracter dzu con marcas superiores como hoyuelos.', keywords: ['hoyuelos', 'risa', 'dzu', 'alegria'] },
  { id: 'kao-5', symbol: '( ͡° ͜ʖ ͡°)', name: 'Lenny Face', category: 'Caritas y Kaomoji', description: 'La icónica cara de picardía y doble sentido de internet.', keywords: ['lenny', 'meme', 'picardia', 'humor'], featured: true },
  { id: 'kao-6', symbol: '٩(˘◡˘)۶', name: 'Felicidad con Brazos', category: 'Caritas y Kaomoji', description: 'Expresión de triunfo y alegría con los brazos alzados.', keywords: ['triunfo', 'feliz', 'brazos', 'celebrar'] },
  { id: 'kao-7', symbol: '(•‿•)', name: 'Carita Sonriente Simple', category: 'Caritas y Kaomoji', description: 'Carita kawaii tierna y minimalista.', keywords: ['kawaii', 'tierno', 'cute', 'amigable'] },
  { id: 'kao-8', symbol: '(¬‿¬)', name: 'Mirada Sarcástica', category: 'Caritas y Kaomoji', description: 'Sonrisa ladeada con mirada de reojo.', keywords: ['sarcasmo', 'reojo', 'ironia', 'chiste'] },
  { id: 'kao-9', symbol: '¯\\_(ツ)_/¯', name: 'Shrug / No Sé', category: 'Caritas y Kaomoji', description: 'El clásico encogimiento de hombros de internet.', keywords: ['shrug', 'encogimiento', 'meme', 'nose'] },
  { id: 'kao-10', symbol: '(╯°□°)╯︵ ┻━┻', name: 'Table Flip / Rage', category: 'Caritas y Kaomoji', description: 'Giro de mesa en momentos de furia cómica.', keywords: ['furia', 'mesa', 'rage', 'meme'] },

  // --- MARCOS Y SEPARADORES ---
  { id: 'mar-1', symbol: '『 』', name: 'Corchetes Esquinas Huecas', category: 'Marcos y Separadores', description: 'Marco japonés elegante para destacar palabras.', keywords: ['corchetes', 'esquinas', 'marco', 'japones'], featured: true },
  { id: 'mar-2', symbol: '【 】', name: 'Corchetes Lenteja Negros', category: 'Marcos y Separadores', description: 'Paréntesis asiáticos gruesos para tags y títulos.', keywords: ['corchetes', 'gruesos', 'tag', 'clan', 'negro'], featured: true },
  { id: 'mar-3', symbol: '〖 〗', name: 'Corchetes Lenteja Blancos', category: 'Marcos y Separadores', description: 'Variante hueca de los corchetes asiáticos.', keywords: ['hueco', 'blanco', 'corchetes', 'marco'] },
  { id: 'mar-4', symbol: '〘 〙', name: 'Corchetes Dobles Cuadrados', category: 'Marcos y Separadores', description: 'Marco de doble barra para avisos importantes.', keywords: ['doble barra', 'cuadrado', 'marco', 'caja'] },
  { id: 'mar-5', symbol: '༺ ༻', name: 'Alas Tibetanas de Marco', category: 'Marcos y Separadores', description: 'Filigrana tibetana para enmarcar nicks estéticos.', keywords: ['tibet', 'alas', 'filigrana', 'marco', 'vintage'], featured: true },
  { id: 'mar-6', symbol: '───', name: 'Línea Continua Triple', category: 'Marcos y Separadores', description: 'Separador horizontal limpio para bios.', keywords: ['linea', 'separador', 'divider', 'limpio'] },
  { id: 'mar-7', symbol: '┈┈┈', name: 'Línea de Puntos Dispersos', category: 'Marcos y Separadores', description: 'Separador sutil para organizar secciones.', keywords: ['puntos', 'separador', 'discreto', 'bio'] },
  { id: 'mar-8', symbol: '━━━', name: 'Línea Gruesa de Impacto', category: 'Marcos y Separadores', description: 'Divisor de texto de alto contraste visual.', keywords: ['gruesa', 'impacto', 'separador', 'fuerte'] },
  { id: 'mar-9', symbol: '⋆┈┈｡ﾟ', name: 'Separador Cósmico Estelar', category: 'Marcos y Separadores', description: 'Combinación aesthetic de estrellas y puntos.', keywords: ['cosmico', 'estrellas', 'aesthetic', 'separador'] },

  // --- CHECKS Y PUNTOS ---
  { id: 'chk-1', symbol: '✓', name: 'Marca de Verificación Simple', category: 'Checks y Puntos', description: 'Palomita o visto bueno estándar.', keywords: ['check', 'palomita', 'visto', 'aprobado'], featured: true },
  { id: 'chk-2', symbol: '✔', name: 'Marca de Verificación Gruesa', category: 'Checks y Puntos', description: 'Palomita gruesa de alto contraste.', keywords: ['palomita', 'check', 'grueso', 'confirmado'] },
  { id: 'chk-3', symbol: '✕', name: 'Multiplicación / Tachadura', category: 'Checks y Puntos', description: 'Cruz de cancelación o tachado.', keywords: ['tache', 'error', 'cancelar', 'no'] },
  { id: 'chk-4', symbol: '✖', name: 'Cruz Gruesa de Cierre', category: 'Checks y Puntos', description: 'Cruz sólida para listas de prohibición.', keywords: ['cruz', 'cerrar', 'bloqueo', 'prohibido'] },
  { id: 'chk-5', symbol: '◉', name: 'Círculo Ojo de Buey', category: 'Checks y Puntos', description: 'Punto central rodeado por anillo circular.', keywords: ['ojo', 'circulo', 'anillo', 'target'] },
  { id: 'chk-6', symbol: '●', name: 'Círculo Negro Relleno', category: 'Checks y Puntos', description: 'Punto viñeta sólido para enumeraciones.', keywords: ['circulo', 'viñeta', 'negro', 'bullet'] },
  { id: 'chk-7', symbol: '○', name: 'Círculo Blanco Hueco', category: 'Checks y Puntos', description: 'Círculo sin relleno para listas por completar.', keywords: ['circulo', 'blanco', 'pendiente', 'radio'] },
  { id: 'chk-8', symbol: '⦿', name: 'Círculo con Punto Blanco', category: 'Checks y Puntos', description: 'Viñeta sofisticada para perfiles profesionales.', keywords: ['viñeta', 'sofisticada', 'perfil', 'bullet'] },

  // --- MÚSICA Y NOTAS ---
  { id: 'mus-1', symbol: '♪', name: 'Nota Musical Simple', category: 'Música y Notas', description: 'Corchea musical clásica para estados y canciones.', keywords: ['nota', 'musica', 'cancion', 'sonido'], featured: true },
  { id: 'mus-2', symbol: '♫', name: 'Dos Notas Musicales Unigadas', category: 'Música y Notas', description: 'Par de corcheas conectadas por una barra.', keywords: ['notas', 'duo', 'melodia', 'ritmo'], featured: true },
  { id: 'mus-3', symbol: '♬', name: 'Tres Corcheas con Barra', category: 'Música y Notas', description: 'Acorde musical decorativo enlazado.', keywords: ['acorde', 'melodia', 'partitura', 'concierto'] },
  { id: 'mus-4', symbol: '♩', name: 'Nota Negra Musical', category: 'Música y Notas', description: 'Nota negra de un solo tiempo.', keywords: ['negra', 'tiempo', 'tempo', 'musica'] },
  { id: 'mus-5', symbol: '♭', name: 'Signo Bemol', category: 'Música y Notas', description: 'Símbolo que reduce medio tono a una nota.', keywords: ['bemol', 'semitono', 'afinacion', 'teoria'] },
  { id: 'mus-6', symbol: '♯', name: 'Signo Sostenido', category: 'Música y Notas', description: 'Símbolo que aumenta medio tono a una nota.', keywords: ['sostenido', 'sharp', 'afinacion', 'escala'] },
  { id: 'mus-7', symbol: '🎵', name: 'Nota Musical Flotante', category: 'Música y Notas', description: 'Emoji de nota musical rítmica.', keywords: ['nota', 'flotante', 'cancion', 'reproductor'] },

  // --- ESPECIALES Y SIGNOS ---
  { id: 'esp-1', symbol: '∞', name: 'Infinito', category: 'Especiales y Signos', description: 'Símbolo del infinito y la eternidad.', keywords: ['infinito', 'eternidad', 'siempre', 'forever'], featured: true },
  { id: 'esp-2', symbol: '≈', name: 'Aproximadamente Igual', category: 'Especiales y Signos', description: 'Ondas dobles de equivalencia matemática.', keywords: ['aproximado', 'casi', 'ondas', 'similar'] },
  { id: 'esp-3', symbol: '≠', name: 'Diferente de', category: 'Especiales y Signos', description: 'Signo de desigualdad o distinción única.', keywords: ['diferente', 'distinto', 'unico', 'desigual'] },
  { id: 'esp-4', symbol: '±', name: 'Más o Menos', category: 'Especiales y Signos', description: 'Tolerancia matemática o dualidad.', keywords: ['mas menos', 'dual', 'tolerancia'] },
  { id: 'esp-5', symbol: '§', name: 'Sección Legal', category: 'Especiales y Signos', description: 'Símbolo de parágrafo o artículo normativo.', keywords: ['seccion', 'articulo', 'ley', 'paragrafo'] },
  { id: 'esp-6', symbol: '©', name: 'Copyright', category: 'Especiales y Signos', description: 'Derecho de autor y propiedad intelectual.', keywords: ['copyright', 'derechos', 'autor', 'propiedad'] },
  { id: 'esp-7', symbol: '®', name: 'Marca Registrada', category: 'Especiales y Signos', description: 'Símbolo de marca comercial registrada legalmente.', keywords: ['marca', 'registrada', 'brand', 'oficial'] },
  { id: 'esp-8', symbol: '™', name: 'Trade Mark', category: 'Especiales y Signos', description: 'Superíndice de marca comercial no registrada.', keywords: ['trademark', 'comercial', 'brand', 'tm'] },
  { id: 'esp-9', symbol: '♀', name: 'Símbolo Femenino / Venus', category: 'Especiales y Signos', description: 'Símbolo de mujer y género femenino.', keywords: ['femenino', 'mujer', 'venus', 'chica'] },
  { id: 'esp-10', symbol: '♂', name: 'Símbolo Masculino / Marte', category: 'Especiales y Signos', description: 'Símbolo de hombre y género masculino.', keywords: ['masculino', 'hombre', 'marte', 'chico'] }
];

export const TOTAL_UNIVERSAL_SYMBOLS_COUNT = UNIVERSAL_SYMBOLS.length;
