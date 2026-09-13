export interface CursiveFaqItem {
  question: string;
  answer: string;
}

export const CURSIVE_INSTAGRAM_FAQ_ITEMS: CursiveFaqItem[] = [
  {
    question: '¿Cómo poner letras cursivas en Instagram?',
    answer:
      'Escribe tu texto en nuestro generador, selecciona el estilo cursivo o de caligrafía que más te guste, haz clic en "Copiar" y pégalo directamente en tu perfil de Instagram (Editar Perfil > Nombre o Biografía).'
  },
  {
    question: '¿Cómo crear letras cursivas para copiar y pegar?',
    answer:
      'Utiliza una herramienta de conversión Unicode online como la de esta página. Al escribir tus palabras, el sistema reemplaza al instante cada carácter alfabético por su equivalente tipográfico de cursiva Unicode copiable.'
  },
  {
    question: '¿Puedo usar letras cursivas en mi nombre de Instagram?',
    answer:
      'Sí, en el campo de Nombre visible de perfil (Display Name). Sin embargo, ten en cuenta que el Nombre de usuario (@handle) tiene restricciones estrictas y solo permite letras estándar básicas, números, puntos y guiones bajos.'
  },
  {
    question: '¿Puedo usar letras cursivas en mi bio?',
    answer:
      '¡Absolutamente! La biografía de Instagram admite texto cursivo Unicode, emojis y saltos de línea sin inconvenientes.'
  },
  {
    question: '¿Funcionan las letras cursivas en Instagram?',
    answer:
      'Sí, la inmensa mayoría de las variantes cursivas Unicode son 100% compatibles con la aplicación de Instagram en dispositivos iOS, Android y computadoras.'
  },
  {
    question: '¿Qué son las letras Unicode?',
    answer:
      'Son símbolos gráficos definidos dentro del estándar universal de codificación Unicode que simulan distintos estilos tipográficos (cursiva, negrita, caligrafía) sin necesidad de instalar archivos de fuentes .ttf.'
  },
  {
    question: '¿Por qué algunos caracteres no cambian?',
    answer:
      'Si un carácter especial o símbolo no dispone de una variante cursiva oficial en el mapa de Unicode, el generador conserva intacto el carácter original para garantizar que tu texto no se destruya ni pierda legibilidad.'
  },
  {
    question: '¿Las letras cursivas funcionan en todos los teléfonos?',
    answer:
      'Sí, la gran mayoría de smartphones modernos reconocen caracteres cursivos de Unicode. En modelos muy antiguos sin el glifo correspondiente, podría mostrarse el texto base original.'
  }
];

export interface CursivePresetExample {
  label: string;
  text: string;
}

export const CURSIVE_QUICK_PRESETS: CursivePresetExample[] = [
  { label: 'Hola Mundo', text: 'Hola Mundo' },
  { label: 'Mi Nombre', text: 'Alex Martínez' },
  { label: 'Instagram', text: 'Mi Perfil de Instagram' },
  { label: 'Creador Digital', text: 'Creador Digital ✨' },
  { label: 'Mi Bio', text: 'Creando arte y fotos 📸' },
  { label: 'Buenas Vibras', text: 'Buenas Vibras 🌸' },
  { label: 'Viajes', text: 'Viajes & Lifestyle ✈️' },
  { label: 'Fotografía', text: 'Fotografía & Estilo 🎨' }
];

export interface CursiveShowcaseItem {
  id: string;
  title: string;
  sample: string;
  category: string;
}

export const CURSIVE_SHOWCASE_ITEMS: CursiveShowcaseItem[] = [
  { id: 'cs-1', title: 'Cursiva Elegante Manuscrita', sample: '𝒮𝑜𝒻𝒾́𝒶 𝑀𝒶𝓇𝓉𝒾́𝓃𝑒𝓏', category: 'Cursivas' },
  { id: 'cs-2', title: 'Script Negrita Caligráfica', sample: '𝓐𝓁𝓮𝓍 𝓜𝓮𝓷𝒹𝓸𝓯𝒶', category: 'Elegantes' },
  { id: 'cs-3', title: 'Itálica Matemática', sample: '𝐻𝑜𝓁𝒶 𝑀𝓊𝓃𝒹𝑜 ✨', category: 'Itálicas' },
  { id: 'cs-4', title: 'Itálica Negrita', sample: '𝑩𝒖𝒆𝒏𝒂𝒔 𝑽𝒊𝒃𝒓𝒂𝒔 🌸', category: 'Negritas' },
  { id: 'cs-5', title: 'Caligrafía Manuscrita', sample: '𝒞𝓇𝑒𝒶𝒹𝑜𝓇 𝒟𝒾𝑔𝒾𝓉𝒶𝓁 🎨', category: 'Manuscritas' },
  { id: 'cs-6', title: 'Script Suave Aesthetic', sample: '𝒱𝒾𝒶𝒿𝑒𝓈 𝒶𝓃𝒹 ℒ𝒾𝒻𝑒𝓈𝓉𝓎𝓁𝑒 ✈️', category: 'Aesthetic' }
];
