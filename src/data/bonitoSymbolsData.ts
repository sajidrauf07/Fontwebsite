export interface BonitoSymbol {
  id: string;
  symbol: string;
  name: string;
  category: BonitoCategoryType;
  description: string;
  keywords: string[];
  popular?: boolean;
}

export const BONITO_CATEGORIES = [
  'Todos',
  'Corazones',
  'Estrellas y Destellos',
  'Flores y Naturaleza',
  'Lunas y Cielo',
  'Lazos y Adornos',
  'Separadores',
  'Flechas Decorativas',
  'Marcos y Bordes',
  'Letras Decorativas',
  'Caras y Kaomoji'
] as const;

export type BonitoCategoryType = (typeof BONITO_CATEGORIES)[number];

export const BONITO_SYMBOLS: BonitoSymbol[] = [
  // ══════════════════════════════════════
  // CORAZONES
  // ══════════════════════════════════════
  { id: 'bc-1', symbol: '♡', name: 'Corazón Bonito', category: 'Corazones', description: 'El corazón más bonito y delicado para bios y nombres.', keywords: ['corazon', 'bonito', 'amor', 'lindo', 'blanco', 'instagram'], popular: true },
  { id: 'bc-2', symbol: '♥', name: 'Corazón Clásico', category: 'Corazones', description: 'Corazón sólido y elegante de toda la vida.', keywords: ['corazon', 'clasico', 'amor', 'relleno'], popular: true },
  { id: 'bc-3', symbol: '❥', name: 'Corazón Caligráfico', category: 'Corazones', description: 'Corazón inclinado con trazo de pluma.', keywords: ['corazon', 'caligrafia', 'elegante', 'pluma'] },
  { id: 'bc-4', symbol: '❦', name: 'Corazón Floral', category: 'Corazones', description: 'Adorno botánico con forma de corazón de hiedra.', keywords: ['corazon', 'floral', 'hiedra', 'vintage'] },
  { id: 'bc-5', symbol: '❧', name: 'Hoja de Corazón', category: 'Corazones', description: 'Hoja decorativa curva con silueta de corazón.', keywords: ['hoja', 'corazon', 'adorno', 'clasico'] },
  { id: 'bc-6', symbol: 'დ', name: 'Corazón Georgiano', category: 'Corazones', description: 'Letra georgiana que forma un precioso corazón doble.', keywords: ['georgiano', 'corazon', 'doble', 'tierno'] },
  { id: 'bc-7', symbol: 'ღ', name: 'Corazón de Lazo', category: 'Corazones', description: 'Carácter georgiano elegante con forma de corazón con lazo.', keywords: ['lazo', 'georgiano', 'amor', 'elegante'], popular: true },
  { id: 'bc-8', symbol: 'ꨄ', name: 'Corazón Minimalista', category: 'Corazones', description: 'Símbolo sutil y moderno con forma de corazón.', keywords: ['minimalista', 'moderno', 'corazon', 'aesthetic'], popular: true },
  { id: 'bc-9', symbol: 'ᥫ᭡', name: 'Corazón Cham', category: 'Corazones', description: 'Corazón aesthetic ultramoderno muy popular en redes.', keywords: ['cham', 'aesthetic', 'moderno', 'corazon', 'instagram'], popular: true },
  { id: 'bc-10', symbol: '𓆩♡𓆪', name: 'Corazón con Alas', category: 'Corazones', description: 'Diseño alado egipcio con corazón central.', keywords: ['alas', 'egipcio', 'angel', 'corazon', 'aesthetic'], popular: true },
  { id: 'bc-11', symbol: '❣', name: 'Exclamación de Amor', category: 'Corazones', description: 'Signo de admiración coronado con corazón.', keywords: ['exclamacion', 'corazon', 'alerta', 'amor'] },
  { id: 'bc-12', symbol: '💕', name: 'Corazones Flotantes', category: 'Corazones', description: 'Dos corazones flotando juntos.', keywords: ['pareja', 'flotantes', 'emoji', 'rosa'] },
  { id: 'bc-13', symbol: '💖', name: 'Corazón Brillante', category: 'Corazones', description: 'Corazón rosa con chispas de brillo.', keywords: ['brillo', 'sparkle', 'chispas', 'rosa'] },
  { id: 'bc-14', symbol: '💗', name: 'Corazón Creciente', category: 'Corazones', description: 'Corazón que late y crece con ternura.', keywords: ['creciente', 'latido', 'ternura'] },
  { id: 'bc-15', symbol: '🩷', name: 'Corazón Rosa Pastel', category: 'Corazones', description: 'Corazón suave y dulce en tono rosa.', keywords: ['rosa', 'pastel', 'suave', 'dulce'] },
  { id: 'bc-16', symbol: '🤍', name: 'Corazón Blanco Puro', category: 'Corazones', description: 'Corazón blanco sinónimo de pureza y paz.', keywords: ['blanco', 'puro', 'paz', 'limpio'] },
  { id: 'bc-17', symbol: '💝', name: 'Corazón con Listón', category: 'Corazones', description: 'Corazón envuelto como regalo especial.', keywords: ['regalo', 'liston', 'moño', 'especial'] },

  // ══════════════════════════════════════
  // ESTRELLAS Y DESTELLOS
  // ══════════════════════════════════════
  { id: 'be-1', symbol: '★', name: 'Estrella Clásica', category: 'Estrellas y Destellos', description: 'La estrella de cinco puntas más reconocida.', keywords: ['estrella', 'clasica', 'solida', 'nombre'], popular: true },
  { id: 'be-2', symbol: '☆', name: 'Estrella Hueca', category: 'Estrellas y Destellos', description: 'Contorno limpio de estrella brillante.', keywords: ['estrella', 'hueca', 'contorno', 'blanca'], popular: true },
  { id: 'be-3', symbol: '✦', name: 'Destello de Cuatro Puntas', category: 'Estrellas y Destellos', description: 'Destello elegante y sutil muy usado en bios.', keywords: ['destello', 'sparkle', 'cuatro puntas', 'aesthetic'], popular: true },
  { id: 'be-4', symbol: '✧', name: 'Destello Hueco', category: 'Estrellas y Destellos', description: 'Brillo de cuatro puntas sin relleno.', keywords: ['brillo', 'destello', 'hueco', 'bonito'], popular: true },
  { id: 'be-5', symbol: '⋆', name: 'Estrella Cósmica', category: 'Estrellas y Destellos', description: 'Pequeña estrella diminuta ideal como separador.', keywords: ['cosmica', 'diminuta', 'separador', 'espaciado'] },
  { id: 'be-6', symbol: '✩', name: 'Estrella de Trazo Fino', category: 'Estrellas y Destellos', description: 'Estrella delgada y elegante.', keywords: ['fina', 'delgada', 'elegante'] },
  { id: 'be-7', symbol: '✪', name: 'Estrella Circulada', category: 'Estrellas y Destellos', description: 'Estrella dentro de un círculo como emblema.', keywords: ['circulo', 'emblema', 'militar'] },
  { id: 'be-8', symbol: '✫', name: 'Estrella Relieve', category: 'Estrellas y Destellos', description: 'Estrella decorativa con efecto de relieve.', keywords: ['relieve', 'decorativa', 'adorno'] },
  { id: 'be-9', symbol: '✬', name: 'Estrella Asimétrica', category: 'Estrellas y Destellos', description: 'Estrella con diseño único y diferente.', keywords: ['asimetrica', 'unica', 'diferente'] },
  { id: 'be-10', symbol: '✭', name: 'Estrella Gruesa', category: 'Estrellas y Destellos', description: 'Estrella robusta de gran impacto visual.', keywords: ['gruesa', 'impacto', 'grande'] },
  { id: 'be-11', symbol: '✵', name: 'Estrella de Ocho Puntas', category: 'Estrellas y Destellos', description: 'Rosa de los vientos estelar.', keywords: ['ocho', 'puntas', 'brujula', 'rosa'] },
  { id: 'be-12', symbol: '✶', name: 'Destello de Seis Rayos', category: 'Estrellas y Destellos', description: 'Cristal estelar de seis puntas brillante.', keywords: ['seis', 'cristal', 'nieve'] },
  { id: 'be-13', symbol: '✷', name: 'Destello Irradiante', category: 'Estrellas y Destellos', description: 'Estrella con rayos irradiantes.', keywords: ['irradiante', 'rayos', 'luz'] },
  { id: 'be-14', symbol: '✯', name: 'Estrella Puntiaguda', category: 'Estrellas y Destellos', description: 'Estrella con rayos largos y afilados.', keywords: ['puntiaguda', 'afilada', 'larga'] },
  { id: 'be-15', symbol: '🌟', name: 'Estrella Brillante', category: 'Estrellas y Destellos', description: 'Estrella que irradia luz dorada.', keywords: ['brillante', 'dorada', 'luz', 'emoji'] },
  { id: 'be-16', symbol: '✨', name: 'Chispas Mágicas', category: 'Estrellas y Destellos', description: 'Destellos mágicos de brillo y alegría.', keywords: ['chispas', 'magia', 'sparkle', 'brillo'], popular: true },

  // ══════════════════════════════════════
  // FLORES Y NATURALEZA
  // ══════════════════════════════════════
  { id: 'bf-1', symbol: '✿', name: 'Flor Blanca', category: 'Flores y Naturaleza', description: 'Flor estilizada de cinco pétalos muy bonita.', keywords: ['flor', 'blanca', 'petalos', 'jardin'], popular: true },
  { id: 'bf-2', symbol: '❀', name: 'Flor de Cerezo', category: 'Flores y Naturaleza', description: 'Flor de sakura japonesa hueca y delicada.', keywords: ['cerezo', 'sakura', 'japon', 'primavera'], popular: true },
  { id: 'bf-3', symbol: '❁', name: 'Flor Mandala', category: 'Flores y Naturaleza', description: 'Flor geométrica con ocho pétalos armoniosos.', keywords: ['mandala', 'geometrica', 'zen'] },
  { id: 'bf-4', symbol: '✾', name: 'Flor de Seis Pétalos', category: 'Flores y Naturaleza', description: 'Flor elegante con pétalos redondeados.', keywords: ['seis', 'petalos', 'elegante'] },
  { id: 'bf-5', symbol: '❃', name: 'Flor de Ocho Pétalos', category: 'Flores y Naturaleza', description: 'Flor ornamental con múltiples pétalos.', keywords: ['ornamental', 'petalos', 'decoracion'] },
  { id: 'bf-6', symbol: '❋', name: 'Flor Copo de Nieve', category: 'Flores y Naturaleza', description: 'Asterisco floral que parece un copo estrellado.', keywords: ['copo', 'nieve', 'asterisco', 'invierno'] },
  { id: 'bf-7', symbol: '🌸', name: 'Flor de Cerezo Emoji', category: 'Flores y Naturaleza', description: 'Hermosa flor rosada de cerezo japonés.', keywords: ['cerezo', 'rosa', 'emoji', 'japon'], popular: true },
  { id: 'bf-8', symbol: '🌷', name: 'Tulipán', category: 'Flores y Naturaleza', description: 'Tulipán rojo vibrante y alegre.', keywords: ['tulipan', 'rojo', 'primavera'] },
  { id: 'bf-9', symbol: '🌹', name: 'Rosa Roja', category: 'Flores y Naturaleza', description: 'Rosa clásica símbolo de amor y pasión.', keywords: ['rosa', 'roja', 'amor', 'pasion'] },
  { id: 'bf-10', symbol: '🌺', name: 'Hibisco Tropical', category: 'Flores y Naturaleza', description: 'Flor tropical colorida y exótica.', keywords: ['hibisco', 'tropical', 'exotica'] },
  { id: 'bf-11', symbol: '🍃', name: 'Hojas al Viento', category: 'Flores y Naturaleza', description: 'Hojas verdes frescas ondeando con la brisa.', keywords: ['hojas', 'viento', 'fresco', 'verde'] },
  { id: 'bf-12', symbol: '☘', name: 'Trébol de la Suerte', category: 'Flores y Naturaleza', description: 'Trébol de tres hojas que atrae fortuna.', keywords: ['trebol', 'suerte', 'verde', 'fortuna'] },
  { id: 'bf-13', symbol: '🌿', name: 'Rama de Hierba', category: 'Flores y Naturaleza', description: 'Rama botánica verde fresca y natural.', keywords: ['rama', 'hierba', 'botanica', 'natural'] },
  { id: 'bf-14', symbol: '🦋', name: 'Mariposa', category: 'Flores y Naturaleza', description: 'Mariposa azul bonita que simboliza transformación.', keywords: ['mariposa', 'azul', 'transformacion', 'libertad'], popular: true },
  { id: 'bf-15', symbol: 'ʚïɞ', name: 'Mariposa Kaomoji', category: 'Flores y Naturaleza', description: 'Mariposa de texto delicada y tierna.', keywords: ['mariposa', 'kaomoji', 'texto', 'tierna'], popular: true },
  { id: 'bf-16', symbol: '𓆸', name: 'Loto Egipcio', category: 'Flores y Naturaleza', description: 'Flor de loto sagrada del antiguo Egipto.', keywords: ['loto', 'egipcio', 'sagrada', 'antigua'] },

  // ══════════════════════════════════════
  // LUNAS Y CIELO
  // ══════════════════════════════════════
  { id: 'bl-1', symbol: '☾', name: 'Luna Creciente', category: 'Lunas y Cielo', description: 'Luna mística y bonita para bios nocturnas.', keywords: ['luna', 'creciente', 'noche', 'mistica'], popular: true },
  { id: 'bl-2', symbol: '☽', name: 'Luna Menguante', category: 'Lunas y Cielo', description: 'Luna orientada a la izquierda, melancólica.', keywords: ['luna', 'menguante', 'izquierda'] },
  { id: 'bl-3', symbol: '🌙', name: 'Luna con Cara', category: 'Lunas y Cielo', description: 'Media luna dorada cálida y acogedora.', keywords: ['luna', 'dorada', 'emoji', 'noche'], popular: true },
  { id: 'bl-4', symbol: '☁', name: 'Nube Suave', category: 'Lunas y Cielo', description: 'Nube esponjosa de algodón celestial.', keywords: ['nube', 'cielo', 'suave', 'soñador'] },
  { id: 'bl-5', symbol: '☼', name: 'Sol Radiante', category: 'Lunas y Cielo', description: 'Sol con rayos brillantes a su alrededor.', keywords: ['sol', 'radiante', 'luz', 'verano'] },
  { id: 'bl-6', symbol: '⊹', name: 'Brillo Estelar', category: 'Lunas y Cielo', description: 'Punto de luz como una estrella lejana.', keywords: ['brillo', 'punto', 'luz', 'estrella'] },
  { id: 'bl-7', symbol: '˚', name: 'Punto Flotante', category: 'Lunas y Cielo', description: 'Burbuja diminuta que flota como polvo de hadas.', keywords: ['burbuja', 'punto', 'flotante', 'hadas'] },
  { id: 'bl-8', symbol: '｡', name: 'Círculo Flotante', category: 'Lunas y Cielo', description: 'Pequeño círculo que simula una burbuja.', keywords: ['circulo', 'burbuja', 'kawaii'] },
  { id: 'bl-9', symbol: '°', name: 'Esfera Decorativa', category: 'Lunas y Cielo', description: 'Grado o esfera elevada para decorar texto.', keywords: ['grado', 'esfera', 'decorar'] },
  { id: 'bl-10', symbol: '🫧', name: 'Burbujas', category: 'Lunas y Cielo', description: 'Burbujas transparentes y divertidas.', keywords: ['burbujas', 'transparentes', 'agua'] },
  { id: 'bl-11', symbol: '🌈', name: 'Arcoíris', category: 'Lunas y Cielo', description: 'Arcoíris colorido que ilumina cualquier texto.', keywords: ['arcoiris', 'colores', 'alegria'] },

  // ══════════════════════════════════════
  // LAZOS Y ADORNOS
  // ══════════════════════════════════════
  { id: 'bz-1', symbol: '୨୧', name: 'Lazo Coquette', category: 'Lazos y Adornos', description: 'El lazo aesthetic más popular de redes sociales.', keywords: ['lazo', 'coquette', 'moño', 'aesthetic'], popular: true },
  { id: 'bz-2', symbol: 'ೀ', name: 'Listón Coquette', category: 'Lazos y Adornos', description: 'Rizo decorativo telugú que simula un listón.', keywords: ['liston', 'rizo', 'coquette', 'telugu'], popular: true },
  { id: 'bz-3', symbol: '𐙚', name: 'Moño Delicado', category: 'Lazos y Adornos', description: 'Glifo estilizado que forma un moño perfecto.', keywords: ['moño', 'lazo', 'delicado', 'cinta'] },
  { id: 'bz-4', symbol: '🎀', name: 'Moño Rosa', category: 'Lazos y Adornos', description: 'Moño de regalo rosa tierno y llamativo.', keywords: ['moño', 'rosa', 'regalo', 'tierno'], popular: true },
  { id: 'bz-5', symbol: '𓍢ִ໋', name: 'Chispa Ornamental', category: 'Lazos y Adornos', description: 'Adorno sofisticado para encabezados bonitos.', keywords: ['chispa', 'adorno', 'sofisticado'] },
  { id: 'bz-6', symbol: '𓂃', name: 'Trazo Decorativo', category: 'Lazos y Adornos', description: 'Línea decorativa egipcia minimalista.', keywords: ['trazo', 'decorativo', 'egipcio', 'minimalista'] },
  { id: 'bz-7', symbol: '𓈒', name: 'Punto Ornamental', category: 'Lazos y Adornos', description: 'Grano decorativo sutil para embellecer texto.', keywords: ['punto', 'grano', 'sutil', 'elegante'] },
  { id: 'bz-8', symbol: '🪞', name: 'Espejo', category: 'Lazos y Adornos', description: 'Espejo de mano bonito y femenino.', keywords: ['espejo', 'femenino', 'vanidad'] },
  { id: 'bz-9', symbol: '🧸', name: 'Osito de Peluche', category: 'Lazos y Adornos', description: 'Adorable oso de peluche kawaii.', keywords: ['oso', 'peluche', 'kawaii', 'tierno'] },
  { id: 'bz-10', symbol: '🪻', name: 'Jacinto', category: 'Lazos y Adornos', description: 'Flor de jacinto púrpura bonita.', keywords: ['jacinto', 'purpura', 'flor'] },

  // ══════════════════════════════════════
  // SEPARADORES
  // ══════════════════════════════════════
  { id: 'bs-1', symbol: '───', name: 'Línea Continua', category: 'Separadores', description: 'Separador horizontal limpio y elegante.', keywords: ['linea', 'separador', 'horizontal', 'limpio'], popular: true },
  { id: 'bs-2', symbol: '┈┈┈', name: 'Línea Punteada', category: 'Separadores', description: 'Separador sutil con puntos dispersos.', keywords: ['puntos', 'sutil', 'dispersos'] },
  { id: 'bs-3', symbol: '━━━', name: 'Línea Gruesa', category: 'Separadores', description: 'Divisor de texto con alto contraste visual.', keywords: ['gruesa', 'contraste', 'impacto'] },
  { id: 'bs-4', symbol: '────୨ৎ────', name: 'Separador con Lazo', category: 'Separadores', description: 'Línea decorativa con adorno central de lazo.', keywords: ['lazo', 'decorativa', 'central'], popular: true },
  { id: 'bs-5', symbol: '⋆┈┈｡ﾟ', name: 'Separador Cósmico', category: 'Separadores', description: 'Combinación aesthetic de estrella y burbujas.', keywords: ['cosmico', 'aesthetic', 'burbuja'] },
  { id: 'bs-6', symbol: '·˚ ༘ ·˚', name: 'Separador de Polvo', category: 'Separadores', description: 'Polvo mágico para separar secciones de tu bio.', keywords: ['polvo', 'magico', 'bio', 'secciones'] },
  { id: 'bs-7', symbol: '⊱✿⊰', name: 'Separador Floral', category: 'Separadores', description: 'Adorno floral simétrico para dividir textos.', keywords: ['floral', 'simetrico', 'adorno'] },
  { id: 'bs-8', symbol: '╰┈➤', name: 'Flecha de Lista', category: 'Separadores', description: 'Indicador de lista o punto de atención.', keywords: ['flecha', 'lista', 'atencion', 'indicador'] },
  { id: 'bs-9', symbol: '·:*¨¨*:·', name: 'Separador Brillante', category: 'Separadores', description: 'Marco de estrellas que brilla alrededor del texto.', keywords: ['brillante', 'estrellas', 'marco'] },
  { id: 'bs-10', symbol: '˗ˏˋ ´ˎ˗', name: 'Separador Suave', category: 'Separadores', description: 'Abrazadera delicada de texto estilo aesthetic.', keywords: ['suave', 'delicado', 'aesthetic', 'abrazadera'], popular: true },

  // ══════════════════════════════════════
  // FLECHAS DECORATIVAS
  // ══════════════════════════════════════
  { id: 'bfl-1', symbol: '➳', name: 'Flecha de Cupido', category: 'Flechas Decorativas', description: 'Flecha de arquero con plumas, romántica.', keywords: ['cupido', 'pluma', 'romantica', 'amor'], popular: true },
  { id: 'bfl-2', symbol: '➵', name: 'Flecha Elegante', category: 'Flechas Decorativas', description: 'Flecha fina con punta triangular y aletas.', keywords: ['elegante', 'fina', 'aletas'] },
  { id: 'bfl-3', symbol: '➸', name: 'Flecha Triple Pluma', category: 'Flechas Decorativas', description: 'Flecha decorativa con tres plumas en la base.', keywords: ['triple', 'pluma', 'decorativa'] },
  { id: 'bfl-4', symbol: '⤷', name: 'Flecha Curva Abajo', category: 'Flechas Decorativas', description: 'Flecha curva descendente para listas y apuntes.', keywords: ['curva', 'abajo', 'lista'] },
  { id: 'bfl-5', symbol: '→', name: 'Flecha Simple', category: 'Flechas Decorativas', description: 'Flecha directa limpia y profesional.', keywords: ['simple', 'directa', 'limpia'] },
  { id: 'bfl-6', symbol: '↝', name: 'Flecha Ondulada', category: 'Flechas Decorativas', description: 'Flecha con recorrido ondulante y artístico.', keywords: ['ondulada', 'artistica', 'curva'] },
  { id: 'bfl-7', symbol: '➤', name: 'Flecha Cuña', category: 'Flechas Decorativas', description: 'Puntero aerodinámico y moderno.', keywords: ['cuña', 'puntero', 'moderno'] },
  { id: 'bfl-8', symbol: '⇢', name: 'Flecha Ligera', category: 'Flechas Decorativas', description: 'Flecha de trazo fino y delicado.', keywords: ['ligera', 'fina', 'delicada'] },
  { id: 'bfl-9', symbol: '➺', name: 'Flecha Tipo Pluma', category: 'Flechas Decorativas', description: 'Flecha con estilo caligráfico de pluma.', keywords: ['pluma', 'caligrafica', 'estilo'] },

  // ══════════════════════════════════════
  // MARCOS Y BORDES
  // ══════════════════════════════════════
  { id: 'bm-1', symbol: '『 』', name: 'Marco Japonés', category: 'Marcos y Bordes', description: 'Corchetes japoneses elegantes para enmarcar palabras.', keywords: ['marco', 'japones', 'corchetes', 'elegante'], popular: true },
  { id: 'bm-2', symbol: '【 】', name: 'Corchetes Gruesos', category: 'Marcos y Bordes', description: 'Paréntesis asiáticos de gran impacto visual.', keywords: ['gruesos', 'asiaticos', 'impacto'], popular: true },
  { id: 'bm-3', symbol: '〖 〗', name: 'Corchetes Blancos', category: 'Marcos y Bordes', description: 'Variante hueca de corchetes asiáticos.', keywords: ['blancos', 'huecos', 'suaves'] },
  { id: 'bm-4', symbol: '༺ ༻', name: 'Alas Tibetanas', category: 'Marcos y Bordes', description: 'Filigrana tibetana para enmarcar nombres bonitos.', keywords: ['tibet', 'alas', 'filigrana', 'nombre'], popular: true },
  { id: 'bm-5', symbol: '꧁ ꧂', name: 'Alas Ornamentales', category: 'Marcos y Bordes', description: 'Marco decorativo de estilo ángel perfecto para nombres.', keywords: ['alas', 'ornamental', 'angel', 'decorativo'], popular: true },
  { id: 'bm-6', symbol: '〘 〙', name: 'Marco Doble Cuadrado', category: 'Marcos y Bordes', description: 'Corchetes de doble barra para títulos y avisos.', keywords: ['doble', 'cuadrado', 'titulo'] },
  { id: 'bm-7', symbol: '「 」', name: 'Comillas Japonesas', category: 'Marcos y Bordes', description: 'Comillas angulares japonesas elegantes.', keywords: ['comillas', 'japones', 'angular'] },
  { id: 'bm-8', symbol: '𓊈 𓊉', name: 'Marcos Egipcios', category: 'Marcos y Bordes', description: 'Corchetes jeroglíficos para nombres exclusivos.', keywords: ['egipcio', 'jeroglifico', 'exclusivo'] },
  { id: 'bm-9', symbol: '⟨ ⟩', name: 'Angulares Matemáticos', category: 'Marcos y Bordes', description: 'Angulares elegantes de estilo académico.', keywords: ['angular', 'matematico', 'academico'] },

  // ══════════════════════════════════════
  // LETRAS DECORATIVAS
  // ══════════════════════════════════════
  { id: 'bld-1', symbol: '𝒜', name: 'A Script', category: 'Letras Decorativas', description: 'Letra A caligráfica elegante y cursiva.', keywords: ['letra', 'a', 'cursiva', 'caligrafia'] },
  { id: 'bld-2', symbol: '𝓑', name: 'B Bold Script', category: 'Letras Decorativas', description: 'Letra B en negrita script decorativa.', keywords: ['letra', 'b', 'negrita', 'script'] },
  { id: 'bld-3', symbol: '𝓛', name: 'L Bold Script', category: 'Letras Decorativas', description: 'Letra L en negrita script elegante.', keywords: ['letra', 'l', 'elegante', 'script'] },
  { id: 'bld-4', symbol: '𝓜', name: 'M Bold Script', category: 'Letras Decorativas', description: 'Letra M decorativa de estilo manuscrito.', keywords: ['letra', 'm', 'manuscrito', 'script'] },
  { id: 'bld-5', symbol: '𝓡', name: 'R Bold Script', category: 'Letras Decorativas', description: 'Letra R con trazo artístico y fluido.', keywords: ['letra', 'r', 'artistico', 'fluido'] },
  { id: 'bld-6', symbol: '𝓢', name: 'S Bold Script', category: 'Letras Decorativas', description: 'Letra S curva y decorativa con personalidad.', keywords: ['letra', 's', 'curva', 'personalidad'] },
  { id: 'bld-7', symbol: '𝕬', name: 'A Fraktur', category: 'Letras Decorativas', description: 'Letra A de estilo gótico Fraktur oscuro.', keywords: ['gotico', 'fraktur', 'oscuro', 'a'] },
  { id: 'bld-8', symbol: '𝕯', name: 'D Fraktur', category: 'Letras Decorativas', description: 'Letra D gótica con personalidad fuerte.', keywords: ['gotico', 'fraktur', 'd', 'fuerte'] },
  { id: 'bld-9', symbol: '𝖁', name: 'V Fraktur', category: 'Letras Decorativas', description: 'Letra V en Fraktur con impacto visual.', keywords: ['gotico', 'v', 'impacto', 'fraktur'] },
  { id: 'bld-10', symbol: '𝔸', name: 'A Doble Trazo', category: 'Letras Decorativas', description: 'Letra A con doble línea de estilo blackboard.', keywords: ['doble', 'trazo', 'blackboard', 'a'] },

  // ══════════════════════════════════════
  // CARAS Y KAOMOJI
  // ══════════════════════════════════════
  { id: 'bk-1', symbol: 'ツ', name: 'Sonrisa Pícara', category: 'Caras y Kaomoji', description: 'Carita japonesa pícara y alegre para nicks.', keywords: ['sonrisa', 'picara', 'tsu', 'alegre'], popular: true },
  { id: 'bk-2', symbol: 'シ', name: 'Guiño Amable', category: 'Caras y Kaomoji', description: 'Expresión tierna con un ojo entornado.', keywords: ['guiño', 'amable', 'tierno'] },
  { id: 'bk-3', symbol: '(•‿•)', name: 'Carita Feliz', category: 'Caras y Kaomoji', description: 'Carita kawaii sonriente y adorable.', keywords: ['feliz', 'kawaii', 'sonriente', 'adorable'], popular: true },
  { id: 'bk-4', symbol: '(◕‿◕)', name: 'Ojos Brillantes', category: 'Caras y Kaomoji', description: 'Cara con ojos grandes y brillantes llenos de alegría.', keywords: ['ojos', 'brillantes', 'alegria', 'tierno'] },
  { id: 'bk-5', symbol: '٩(˘◡˘)۶', name: 'Celebración', category: 'Caras y Kaomoji', description: 'Carita celebrando con los brazos alzados.', keywords: ['celebracion', 'brazos', 'triunfo', 'feliz'] },
  { id: 'bk-6', symbol: '(ᵔᴥᵔ)', name: 'Carita de Oso', category: 'Caras y Kaomoji', description: 'Adorable carita de osito tierno.', keywords: ['oso', 'tierno', 'animal', 'kawaii'] },
  { id: 'bk-7', symbol: '(◠‿◠)', name: 'Sonrisa Amplia', category: 'Caras y Kaomoji', description: 'Sonrisa grande y genuina de felicidad.', keywords: ['sonrisa', 'amplia', 'felicidad'] },
  { id: 'bk-8', symbol: '꒰ᐢ. ̫.ᐢ꒱', name: 'Carita de Conejo', category: 'Caras y Kaomoji', description: 'Conejito adorable con ojitos redondos.', keywords: ['conejo', 'adorable', 'ojitos', 'kawaii'] },
  { id: 'bk-9', symbol: '(˶ᵔ ᵕ ᵔ˶)', name: 'Mejillas Sonrosadas', category: 'Caras y Kaomoji', description: 'Carita tímida con mejillas sonrosadas de ternura.', keywords: ['mejillas', 'sonrosadas', 'timida', 'ternura'] },
  { id: 'bk-10', symbol: '˶ᵔ ᵕ ᵔ˶', name: 'Felicidad Pura', category: 'Caras y Kaomoji', description: 'Expresión de felicidad pura y genuina.', keywords: ['felicidad', 'pura', 'genuina'] },
];

export const TOTAL_BONITO_SYMBOLS = BONITO_SYMBOLS.length;
