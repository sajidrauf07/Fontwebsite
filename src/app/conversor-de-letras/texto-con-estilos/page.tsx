import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import StyledTextTool from '@/components/styled-text/StyledTextTool';
import StyledWordsSection from '@/components/styled-text/StyledWordsSection';
import StyledNamesSection from '@/components/styled-text/StyledNamesSection';
import StyledPhrasesSection from '@/components/styled-text/StyledPhrasesSection';
import { FAQSection } from '@/components/seo/FAQSection';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Share2,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
  Zap,
  Layers,
  FileText,
  ShieldAlert,
  Sliders,
  Type,
  Smartphone,
  Gamepad2,
  ExternalLink,
  Table as TableIcon,
  Check,
  X,
  AlertTriangle
} from 'lucide-react';
import {
  ReadingProgress,
  StepGuide,
  StepItem,
  ToolCTA
} from '@/components/article';

export const metadata: Metadata = {
  title: 'Texto con Estilos: Letras Bonitas para Copiar y Pegar',
  description:
    'Convierte texto normal en estilos de letras bonitas, cursivas, góticas y decoradas. Elige tu estilo, copia y pega fácilmente en Instagram, TikTok, WhatsApp y juegos.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/conversor-de-letras/texto-con-estilos'
  },
  openGraph: {
    title: 'Texto con Estilos: Letras Bonitas para Copiar y Pegar',
    description:
      'Descubre cómo crear texto estilizado con caracteres Unicode, elegir el mejor estilo y copiarlo para tus redes, perfiles y nombres.',
    url: 'https://theletrasbonitas.com/conversor-de-letras/texto-con-estilos',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texto con Estilos: Letras Bonitas para Copiar y Pegar',
    description:
      'Convierte tu texto en cursivas, negritas, góticas y decoradas al instante. Copia y pega libremente.'
  },
  robots: {
    index: true,
    follow: true
  }
};

const TEXTO_CON_ESTILOS_FAQ_ITEMS = [
  {
    question: '¿Qué es un conversor de texto con estilos?',
    answer: 'Es una herramienta que transforma texto normal en diferentes variantes visuales. Muchos conversores utilizan caracteres Unicode para producir estilos que pueden copiarse y pegarse en otros campos compatibles.'
  },
  {
    question: '¿Necesito instalar una fuente?',
    answer: 'No necesariamente. Los conversores basados en Unicode no requieren instalar una fuente para producir muchas de sus variantes. El resultado está formado por caracteres que ya existen dentro del estándar Unicode.'
  },
  {
    question: '¿Puedo copiar y pegar las letras?',
    answer: 'Sí, esa es precisamente una de las principales funciones de este tipo de herramientas. Escribes tu texto, eliges una variante, la copias y después la pegas donde la necesites.'
  },
  {
    question: '¿Funciona en Instagram?',
    answer: 'Muchos caracteres Unicode pueden utilizarse en diferentes espacios de redes sociales, pero la compatibilidad depende del campo y de la plataforma. Por eso siempre conviene comprobar el resultado después de pegarlo.'
  },
  {
    question: '¿Funciona en WhatsApp?',
    answer: 'Puedes utilizar caracteres Unicode compatibles en mensajes y otros espacios de WhatsApp. La apariencia concreta depende de cómo el dispositivo y la aplicación representen esos caracteres.'
  },
  {
    question: '¿Puedo usar estas letras en un videojuego?',
    answer: 'Depende del juego. Algunos sistemas aceptan determinados caracteres Unicode y otros limitan los caracteres permitidos. Si un nombre no funciona, prueba una variante más sencilla.'
  },
  {
    question: '¿Las letras estilizadas son realmente fuentes?',
    answer: 'No siempre. En muchos casos son caracteres Unicode que tienen una apariencia diferente. Llamarlos "fuentes" es común en internet, pero técnicamente una fuente instalada y un carácter Unicode estilizado no son exactamente lo mismo.'
  },
  {
    question: '¿Por qué algunas letras aparecen como cuadrados?',
    answer: 'Generalmente significa que el sistema o la aplicación no está mostrando correctamente ese carácter. Prueba otro estilo o una variante más compatible.'
  },
  {
    question: '¿Puedo usar texto estilizado para una frase completa?',
    answer: 'Sí, pero no siempre es recomendable. Para frases largas, los estilos muy decorativos pueden reducir la legibilidad. Es mejor reservarlos para palabras o fragmentos cortos.'
  },
  {
    question: '¿Cuál es el mejor estilo?',
    answer: 'No existe un estilo universalmente mejor. Depende del objetivo. Para una apariencia elegante puedes probar cursiva; para algo más fuerte, negrita; para una estética oscura, gótica; y para perfiles informales, puedes experimentar con estilos aesthetic o decorativos.'
  }
];

export default function TextoConEstilosPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://theletrasbonitas.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conversor de Letras',
        item: 'https://theletrasbonitas.com/conversor-de-letras'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Texto con Estilos',
        item: 'https://theletrasbonitas.com/conversor-de-letras/texto-con-estilos'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TEXTO_CON_ESTILOS_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      <ReadingProgress />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Ruta de navegación">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">Inicio</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <Link href="/conversor-de-letras" className="breadcrumb-link">Conversor de Letras</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Texto con Estilos</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Generador & Guía Completa de Texto Estilizado</span>
            </div>

            <h1 className="hero-h1">
              Texto con Estilos: <span className="gradient-text">convierte tus letras y copia el resultado</span>
            </h1>

            <p className="hero-tagline">
              Transforma palabras normales en fuentes estéticas, cursivas, negritas, góticas y decoradas. Copia con un solo clic y aprende cómo funcionan realmente los caracteres Unicode en redes sociales y juegos.
            </p>
          </header>

          {/* TABLE OF CONTENTS */}

          {/* MAIN STYLED TEXT TOOL */}
          <StyledTextTool />

          {/* PAS INTRODUCTION & PROBLEM STATEMENT */}
          <article className="seo-card-section mb-12" id="introduccion">
            <p className="lead-text" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#E2E8F0' }}>
              ¿Tu nombre, bio o mensaje se ve demasiado común? A veces no necesitas una aplicación de diseño para darle personalidad a un texto. Un cambio de estilo puede hacer que una palabra destaque mucho más.
            </p>
            <p className="mt-4">
              El problema es que buscar letras especiales una por una puede ser lento, confuso y poco práctico. Además, muchas personas hablan de “fuentes” cuando en realidad están utilizando caracteres especiales de Unicode. La diferencia parece pequeña, pero entenderla te ayuda a saber qué estás copiando, dónde puedes usarlo y por qué algunos estilos pueden comportarse de forma distinta.
            </p>
            <p className="mt-4">
              La solución es utilizar un <Link href="/conversor-de-letras" className="seo-link">conversor de letras</Link> con estilos. Escribes una palabra o frase, revisas diferentes variantes y copias la que mejor se adapte a tu objetivo. En Letras Bonitas puedes usar el conversor para experimentar con diferentes estilos y preparar texto para tus perfiles, nombres, mensajes y otros espacios donde se admita texto Unicode.
            </p>
            <p className="mt-4">
              En esta guía encontrarás cómo funciona, qué tipos de estilos existen, dónde puedes utilizarlos, cuáles son sus limitaciones y cómo elegir una opción que se vea bien sin sacrificar la legibilidad.
            </p>
          </article>

          {/* STYLED WORDS SECTION */}
          <StyledWordsSection />

          {/* STYLED NAMES SECTION */}
          <StyledNamesSection />

          {/* STYLED PHRASES SECTION */}
          <StyledPhrasesSection />

          {/* ARTICLE SECTION 1: WHAT IS STYLED TEXT */}
          <section className="seo-card-section mb-12" id="que-es">
            <div className="seo-icon-badge">
              <Type size={20} />
            </div>
            <h2>¿Qué es el texto con estilos?</h2>
            <p>
              El texto con estilos es texto presentado mediante caracteres o combinaciones de caracteres que tienen una apariencia visual diferente a las letras normales.
            </p>
            <p className="mt-3">
              Por ejemplo, una palabra normal puede aparecer como:
            </p>
            <div className="example-box bg-slate-900/60 p-4 rounded-xl my-4 border border-slate-800 text-center font-mono">
              <span className="text-slate-400">Texto normal:</span> <strong className="text-white">Hola</strong>
            </div>
            <p>
              Y una variante estilizada puede verse así:
            </p>
            <div className="example-box bg-indigo-950/40 p-4 rounded-xl my-4 border border-indigo-900/50 text-center text-xl">
              <span className="text-indigo-300">Variante estilizada:</span> <strong className="text-indigo-100">𝐇𝐨𝐥𝐚</strong>
            </div>
            <p>
              También puedes encontrar estilos que parecen <Link href="/letras-cursivas" className="seo-link">letras cursivas</Link>, góticos, de doble trazo, pequeños, encerrados en círculos o acompañados de símbolos decorativos.
            </p>
            <p className="mt-4">
              La clave está en que muchas de estas variantes no son una fuente que hayas instalado en tu dispositivo. Son caracteres codificados de una manera diferente.
            </p>
            <p className="mt-4">
              <strong className="text-indigo-300">Unicode</strong> es el estándar internacional que permite representar texto y símbolos de manera consistente entre diferentes sistemas informáticos. Dentro de Unicode existen conjuntos de caracteres que pueden tener apariencia matemática, caligráfica, gótica o de otros estilos. Por ejemplo, el bloque oficial de <a href="https://www.unicode.org/reports/tr25/" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Unicode y los caracteres alfanuméricos matemáticos <ExternalLink size={14} /></a> contiene variantes como negrita, cursiva, script, Fraktur, doble trazo y sans serif.
            </p>
            <p className="mt-4">
              Por eso, cuando utilizas un generador de letras, normalmente no estás “cambiando la fuente” de una palabra como lo harías en Word. Estás obteniendo una cadena de caracteres alternativa que puedes <Link href="/conversor-de-letras/letras-para-copiar-y-pegar" className="seo-link">copiar y pegar</Link> libremente en internet.
            </p>
          </section>

          {/* ARTICLE SECTION 2: HOW A CONVERTER WORKS */}
          <section className="seo-card-section mb-12" id="como-funciona">
            <div className="seo-icon-badge">
              <BookOpen size={20} />
            </div>
            <h2>¿Cómo funciona un conversor de texto con estilos?</h2>
            <p>
              El proceso de conversión es bastante sencillo e instantáneo.
            </p>
            <p className="mt-3">
              Primero escribes tu texto original en el cuadro de entrada. Después, el conversor aplica diferentes transformaciones de mapa de caracteres e imprime decenas de variantes en pantalla.
            </p>
            <p className="mt-3">
              Por ejemplo, si escribes la frase <em>“Mi perfil”</em>, podrías obtener diferentes resultados visuales según el algoritmo seleccionado:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-indigo-400 font-semibold block mb-1">Negrita Matemática</span>
                <span className="text-lg text-white">𝐌𝐢 𝐩𝐞𝐫𝐟𝐢𝐥</span>
              </div>
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-indigo-400 font-semibold block mb-1">Cursiva Simple</span>
                <span className="text-lg text-white">𝑀𝑖 𝑝𝑒𝑟𝑓𝑖𝑙</span>
              </div>
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-indigo-400 font-semibold block mb-1">Manuscrito Elegante</span>
                <span className="text-lg text-white">𝓜𝓲 𝓹𝓮𝓻𝓯𝓲𝓵</span>
              </div>
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-indigo-400 font-semibold block mb-1">Gótico Fraktur</span>
                <span className="text-lg text-white">𝔐𝔦 𝔭𝔢𝔯𝔣𝔦𝔩</span>
              </div>
            </div>

            <p>
              No todos estos caracteres tienen exactamente la misma función técnica. De hecho, el consorcio Unicode señala en sus informes que los caracteres alfanuméricos matemáticos fueron diseñados para publicaciones científicas y fórmulas técnicas, aunque en internet se han adoptado ampliamente para decorar publicaciones y perfiles personales.
            </p>
            <p className="mt-4">
              Esta distinción es fundamental porque explica tanto sus ventajas estéticas como sus limitaciones en lectores de pantalla y buscadores.
            </p>

            {/* SUBSECTION: NORMAL VS UNICODE */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Texto normal vs. caracteres Unicode</h3>
            <p>
              El texto normal utiliza los caracteres latinos básicos codificados en ASCII / UTF-8:
            </p>
            <p className="font-mono text-indigo-300 my-2">A, B, C, a, b, c</p>
            <p>
              Mientras que las variantes estilizadas utilizan puntos de código Unicode sustancialmente diferentes:
            </p>
            <p className="font-mono text-emerald-400 my-2">A → 𝐀</p>
            <p>
              El segundo símbolo no es simplemente la primera letra con una propiedad CSS de negrita. Es un carácter independiente. De acuerdo con el registro oficial en el bloque de <a href="https://www.unicode.org/charts/nameslist/n_1D400.html" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Mathematical Alphanumeric Symbols <ExternalLink size={14} /></a>, el símbolo <strong>𝐀</strong> corresponde al punto de código <code className="bg-slate-800 px-2 py-0.5 rounded text-amber-300">U+1D400 (MATHEMATICAL BOLD CAPITAL A)</code>, mientras que la <strong>A</strong> común es <code className="bg-slate-800 px-2 py-0.5 rounded text-amber-300">U+0041 (LATIN CAPITAL LETTER A)</code>.
            </p>
            <p className="mt-4">
              Esta diferencia arquitectónica es la razón exacta por la que puedes copiar una variante y pegarla en cualquier aplicación sin requerir un archivo de fuente externo.
            </p>

            {/* SUBSECTION: FONTS VS UNICODE */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">¿Son fuentes o letras diferentes?</h3>
            <p>
              En el vocabulario popular se habla indistintamente de “fuentes”, “tipografías”, “letras bonitas” o “fonts”. Es una forma práctica y comprensible de describirlas.
            </p>
            <p className="mt-3">
              Sin embargo, desde el punto de vista técnico es conveniente distinguir dos conceptos:
            </p>
            <ul className="seo-list mt-3">
              <li>
                <strong>Una fuente tipográfica:</strong> Es un archivo ejecutable de diseño (.TTF, .OTF, .WOFF2) que le enseña al navegador o procesador de texto cómo dibujar un carácter gráfico sobre la pantalla. La letra interna sigue siendo exactamente la misma.
              </li>
              <li>
                <strong>Un carácter Unicode estilizado:</strong> Es un símbolo único en la tabla universal de caracteres. El conversor sustituye la letra básica por un símbolo que ya tiene forma estilizada grabada en el estándar internacional.
              </li>
            </ul>

            {/* SUBSECTION: COPY & PASTE REASON */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">¿Por qué puedes copiar y pegar el resultado?</h3>
            <p>
              Puedes copiar y pegar el resultado porque <strong>sigue siendo texto puro</strong>, no una imagen o un objeto gráfico.
            </p>
            <p className="mt-3">
              Cuando seleccionas un diseño como <code>𝓜𝓲 𝓹𝓮𝓻𝓯𝓲𝓵</code> y presionas “Copiar”, el portapapeles de tu teléfono o computadora almacena la secuencia binaria de esos caracteres Unicode. Al pegarlo en Instagram o WhatsApp, el sistema operativo reconoce el código y dibuja la letra correspondiente.
            </p>
            <p className="mt-3">
              Si quieres saber más sobre este método, consulta nuestra guía sobre <Link href="/conversor-de-letras/como-cambiar-las-letras" className="seo-link">cómo cambiar las letras</Link> paso a paso.
            </p>
          </section>

          {/* COMPARISON TABLE: INSTALLED FONTS VS UNICODE */}
          <section className="seo-card-section mb-12" id="comparativa-fuentes">
            <div className="seo-icon-badge">
              <TableIcon size={20} />
            </div>
            <h2>Texto con estilos vs. fuentes instaladas</h2>
            <p>
              Para tomar decisiones informadas en tus proyectos digitales, analiza las diferencias entre una fuente instalable y el texto estilizado en Unicode:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="seo-table w-full text-left border-collapse" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-700 text-indigo-300">
                    <th className="p-3 font-semibold">Característica</th>
                    <th className="p-3 font-semibold">Fuentes Instaladas (.TTF / .OTF)</th>
                    <th className="p-3 font-semibold">Texto Unicode Estilizado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Requisito de Instalación</td>
                    <td className="p-3 text-slate-400">Requiere instalar archivo en el sistema</td>
                    <td className="p-3 text-emerald-400 font-semibold">No requiere instalación (100% nativo)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Capacidad Copiar/Pegar</td>
                    <td className="p-3 text-rose-400">Se pierde el formato al pegar fuera del editor</td>
                    <td className="p-3 text-emerald-400 font-semibold">Conserva el estilo al copiar y pegar</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Compatibilidad Redes Sociales</td>
                    <td className="p-3 text-rose-400">No permitido en bios ni nombres de usuario</td>
                    <td className="p-3 text-emerald-400 font-semibold">Amplia compatibilidad en bios y mensajes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Accesibilidad (Screen Readers)</td>
                    <td className="p-3 text-emerald-400 font-semibold">Lectura fluida y natural</td>
                    <td className="p-3 text-amber-300">Puede ser leído como símbolos matemáticos</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Indexación SEO / Búsqueda</td>
                    <td className="p-3 text-emerald-400 font-semibold">Se indexa perfectamente</td>
                    <td className="p-3 text-amber-300">Puede dificultar la búsqueda de palabras exactas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* STEP BY STEP CONVERSION GUIDELINES */}
          <section className="seo-card-section mb-12" id="pasos-conversion">
            <div className="seo-icon-badge">
              <MousePointerClick size={20} />
            </div>
            <h2>Cómo convertir texto con estilos paso a paso</h2>
            <p>
              Utilizar la herramienta de Letras Bonitas es un proceso optimizado para dispositivos móviles y computadoras:
            </p>

            <div className="mt-6">
              <StepGuide>
                <StepItem
                  stepNumber={1}
                  title="Escribe tu texto"
                  badge="Paso 1"
                >
                  Ingresa tu palabra, nombre, apodo o frase en la caja del conversor. Puedes comenzar con textos cortos como <em>“Sofia”</em> o descripciones como <em>“Bienvenidos a mi perfil”</em>.
                </StepItem>
                <StepItem
                  stepNumber={2}
                  title="Revisa los estilos"
                  badge="Paso 2"
                >
                  El conversor generará decenas de alternativas. No elijas automáticamente la opción más recargada; evalúa el contexto de uso (bio profesional vs nickname gaming).
                </StepItem>
                <StepItem
                  stepNumber={3}
                  title="Elige tu favorito"
                  badge="Paso 3"
                >
                  Compara la legibilidad y estética. Verifica si las letras acentuadas (á, é, í, ó, ú) o la ñ se visualizan correctamente en el estilo seleccionado.
                </StepItem>
                <StepItem
                  stepNumber={4}
                  title="Copia y pega"
                  badge="Paso 4"
                  isLast={true}
                >
                  Presiona el botón de copia rápida al lado de la variante y pégala en tu biografía de Instagram, chat de WhatsApp o perfil de videojuego.
                </StepItem>
              </StepGuide>
            </div>
          </section>

          {/* TYPES OF STYLED TEXT */}
          <section className="seo-card-section mb-12" id="tipos-estilos">
            <div className="seo-icon-badge">
              <Sparkles size={20} />
            </div>
            <h2>Tipos de texto con estilos que puedes crear</h2>
            <p>
              Nuestra plataforma organiza más de 350 estilos en categorías funcionales para que encuentres rápidamente el tono que buscas:
            </p>

            <div className="space-y-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Texto en negrita</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Las variantes en negrita destacan palabras clave y nombres con mayor presencia visual.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Texto normal → <strong>𝐓𝐞𝐱𝐭𝐨 𝐞𝐬𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨</strong>
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Texto cursivo y caligráfico</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Aportan una estética manuscrita, sofisticada y elegante. Para profundizar en este estilo, explora nuestras secciones de <Link href="/letras-cursivas/abecedario-cursivo" className="seo-link">abecedario cursivo</Link> y <Link href="/letras-cursivas/letras-cursivas-elegantes" className="seo-link">letras cursivas elegantes</Link>.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Ejemplo elegante: 𝓣𝓮𝔁𝓽𝓸 𝓔𝓵𝓮𝓰𝓪𝓷𝓽𝓮 | Cursiva simple: 𝑇𝑒𝑥𝑡𝑜 𝐶𝑢𝑟𝑠𝑖𝑣𝑜
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Texto gótico y medieval</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Estilos tipo Fraktur ideal para perfiles oscuros, grupos de música y nombres artísticos.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Ejemplo: 𝔗𝔢𝔵𝔱𝔬 𝔊𝔬́𝔱𝔦𝔠𝔬
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Texto aesthetic y retro</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Combinaciones espaciadas de ancho completo (Fullwidth), minimalistas y decoradas con símbolos retro.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Ejemplo: Ｔｅｘｔｏ Ａｅｓｔｈｅｔｉｃ
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Letras pequeñas y versalitas</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Transforman minúsculas en versalitas (Small Caps) o superíndices para subtítulos discretos.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Ejemplo Small Caps: ᵀᴱˣᵀᴼ ᴾᴱᵠᵁᴱᴺᴼ
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Texto dentro de círculos y cuadrados</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Caracteres encerrados en círculos oscuros o claros, perfectos para listas numeradas.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Ejemplo: Ⓐ Ⓑ Ⓒ Ⓓ / ❶ ❷ ❸
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Estilos decorativos con símbolos</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Letras acompañadas de marcos, alas, estrellas y símbolos especiales. Descubre más alternativas en <Link href="/letras-para-instagram/simbolos-para-instagram" className="seo-link">símbolos para Instagram</Link>.
                </p>
                <div className="text-base font-mono text-emerald-300">
                  Ejemplo: ✦ Nombre ✦ | ꧁ Nombre ꧂
                </div>
              </div>
            </div>
          </section>

          {/* PLATFORMS & USE CASES */}
          <section className="seo-card-section mb-12" id="donde-usar">
            <div className="seo-icon-badge">
              <Share2 size={20} />
            </div>
            <h2>¿Dónde puedes usar texto con estilos?</h2>
            <p>
              El texto generado mediante Unicode es admitido en múltiples redes sociales y videojuegos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold">
                  <Smartphone size={18} />
                  <span>Instagram</span>
                </div>
                <p className="text-sm text-slate-300">
                  Usa fuentes especiales en tu biografía, nombre visible y descripciones. Visita nuestra sección de <Link href="/letras-para-instagram" className="seo-link">letras para Instagram</Link>, <Link href="/letras-para-instagram/letras-para-bio" className="seo-link">letras para bio</Link> y <Link href="/letras-para-instagram/letras-para-nombres" className="seo-link">letras para nombres</Link>.
                </p>
              </div>

              <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold">
                  <Smartphone size={18} />
                  <span>TikTok y Facebook</span>
                </div>
                <p className="text-sm text-slate-300">
                  Destaca comentarios en videos virales y personaliza la presentación de tu canal o página.
                </p>
              </div>

              <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold">
                  <Smartphone size={18} />
                  <span>WhatsApp</span>
                </div>
                <p className="text-sm text-slate-300">
                  Personaliza tu estado de WhatsApp y envía palabras destacadas en conversaciones individuales o grupales.
                </p>
              </div>

              <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold">
                  <Gamepad2 size={18} />
                  <span>Videojuegos y Discord</span>
                </div>
                <p className="text-sm text-slate-300">
                  Crea apodos llamativos para Free Fire, Roblox y Discord. Explora nuestras guías especializadas de <Link href="/nombres-para-free-fire" className="seo-link">nombres para Free Fire</Link>, <Link href="/nombres-para-free-fire/apodos" className="seo-link">apodos para Free Fire</Link> y <Link href="/nombres-para-free-fire/simbolos" className="seo-link">símbolos para Free Fire</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* INSTAGRAM SPECIFIC CASE STUDY */}
          <section className="seo-card-section mb-12" id="estudio-instagram">
            <div className="seo-icon-badge">
              <Smartphone size={20} />
            </div>
            <h2>Texto con estilos para Instagram</h2>
            <p>
              Instagram es uno de los casos de uso más populares. Para lograr un perfil profesional y bien estructurado, sigue este criterio:
            </p>
            <div className="p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-xl my-4">
              <h4 className="font-bold text-indigo-200 mb-2">Ejemplo de Bio Optimizada:</h4>
              <p className="text-slate-300 font-mono text-sm">
                𝑭𝒐𝒕𝒐́𝒈𝒓𝒂𝒇𝒂 | Viajes | México ✦<br />
                📍 CDMX<br />
                ✨ Creadora de contenido visual
              </p>
            </div>
            <p>
              Destacar únicamente la primera palabra (<em>“𝑭𝒐𝒕𝒐́𝒈𝒓𝒂𝒇𝒂”</em>) genera un contraste visual inmediato sin dificultar la lectura del resto de los datos.
            </p>
          </section>

          {/* TECHNICAL COMPATIBILITY, ACCESSIBILITY & NORMALIZATION */}
          <section className="seo-card-section mb-12" id="compatibilidad-tecnica">
            <div className="seo-icon-badge">
              <ShieldAlert size={20} />
            </div>
            <h2>¿Todos los estilos funcionan igual? Compatibilidad y Accesibilidad</h2>
            <p>
              La respuesta corta es <strong>no</strong>. Aunque Unicode es un estándar universal, existen factores técnicos que determinan la visualización correcta de cada estilo.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Compatibilidad de dispositivos</h3>
            <p>
              Para que un carácter estilizado se muestre en un teléfono o computadora, el sistema operativo (iOS, Android, Windows) debe incluir una fuente del sistema que tenga dibujado ese punto de código concreto. Si un dispositivo antiguo carece de ese gráfico, mostrará un rectángulo vacío o con signo de interrogación (también conocido como <em>notdef glyph</em> o tofu).
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Accesibilidad y lectores de pantalla</h3>
            <p>
              Los lectores de pantalla utilizados por personas con discapacidad visual leen el nombre oficial del punto de código Unicode. Por ejemplo, en lugar de leer “Hola”, un lector de pantalla puede pronunciar:
            </p>
            <p className="font-mono text-amber-300 bg-slate-900 p-3 rounded-lg my-2 text-xs">
              “Mathematical Bold Capital H, Mathematical Bold Small O, Mathematical Bold Small L, Mathematical Bold Small A”
            </p>
            <p>
              Como señala la especificación del Consorcio Unicode en su informe sobre <a href="https://www.unicode.org/reports/tr25/" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Unicode Technical Report #25 <ExternalLink size={14} /></a>, los alfanuméricos matemáticos fueron diseñados para contexto científico y no como sustitutos del texto continuo. Por ello, la recomendación de accesibilidad es usar estilos en palabras cortas o títulos, conservando el texto normal para el contenido principal.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Búsqueda, selección y normalización</h3>
            <p>
              Los motores de búsqueda y la función de buscar dentro de las aplicaciones pueden tratar los caracteres estilizados de forma distinta a los caracteres básicos. De acuerdo con el anexo oficial sobre <a href="https://www.unicode.org/reports/tr15/" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">normalización de Unicode <ExternalLink size={14} /></a> y las <a href="https://www.unicode.org/faq/normalization.html" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Preguntas Frecuentes sobre Normalización <ExternalLink size={14} /></a>, procesos de compatibilidad como NFKC/NFKD transforman variantes matemáticas a letras normales, pero no todos los buscadores de aplicaciones móviles realizan esta conversión en tiempo real.
            </p>
          </section>

          {/* ADVANTAGES & DISADVANTAGES */}
          <section className="seo-card-section mb-12">
            <div className="seo-icon-badge">
              <Sliders size={20} />
            </div>
            <h2>Ventajas y desventajas del texto con estilos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-5 bg-emerald-950/20 border border-emerald-900/40 rounded-xl">
                <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <Check size={20} /> Ventajas
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Rápido e instantáneo sin necesidad de instalar programas.</li>
                  <li>• Formato 100% copiable para redes sociales.</li>
                  <li>• Enorme variedad estetica (gótica, cursiva, aesthetic).</li>
                  <li>• Permite personalizar nicknames y bios sin costo.</li>
                </ul>
              </div>

              <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                <h3 className="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">
                  <AlertTriangle size={20} /> Desventajas / Limitaciones
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Algunos caracteres raros pueden verse como cuadrados en móviles antiguos.</li>
                  <li>• Dificulta la lectura fluida en párrafos extensos.</li>
                  <li>• No recomendable para datos técnicos o emails de contacto.</li>
                  <li>• Lectores de pantalla leen los símbolos de forma literal.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* TIPS & COMMON ERRORS */}
          <section className="seo-card-section mb-12">
            <div className="seo-icon-badge">
              <CheckCircle2 size={20} />
            </div>
            <h2>Consejos para elegir el mejor estilo y errores comunes</h2>
            
            <div className="space-y-4 my-6">
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h4 className="font-bold text-indigo-300">1. Mantén la legibilidad como prioridad</h4>
                <p className="text-sm text-slate-300 mt-1">Una letra bonita que no se entiende pierde su propósito comunicativo.</p>
              </div>

              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h4 className="font-bold text-indigo-300">2. No mezcles demasiados estilos diferentes</h4>
                <p className="text-sm text-slate-300 mt-1">Combinar letras góticas, cursivas y círculos en un mismo texto genera saturación visual.</p>
              </div>

              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h4 className="font-bold text-indigo-300">3. Comprueba el resultado pegándolo en tu app</h4>
                <p className="text-sm text-slate-300 mt-1">Verifica cómo luce el texto en tu teléfono antes de guardarlo en tu perfil público.</p>
              </div>
            </div>
          </section>

          {/* READY-TO-COPY & MAIN CONVERTER CTAS */}
          <div className="steps-grid mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="step-icon-wrapper mb-3" style={{ color: '#A5B4FC' }}>
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2" style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>¿Buscas letras listas para copiar?</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                  Visita nuestro catálogo dedicado con letras individuales A-Z, palabras y frases pre-diseñadas para copiar con un solo clic.
                </p>
              </div>
              <Link
                href="/conversor-de-letras/letras-para-copiar-y-pegar"
                className="cp-card-copy-btn"
                style={{ textDecoration: 'none', justifyContent: 'space-between' }}
              >
                <span>Letras para Copiar y Pegar</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'rgba(99, 102, 241, 0.4)', background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6), rgba(15, 23, 42, 0.9))' }}>
              <div>
                <div className="step-icon-wrapper mb-3" style={{ color: '#C084FC' }}>
                  <Layers size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Explora más de 350 estilos</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                  Accede al Conversor de Letras principal con todas las categorías de fuentes especiales, versalitas y combinaciones estéticas.
                </p>
              </div>
              <Link
                href="/conversor-de-letras"
                className="cp-card-copy-btn copied"
                style={{ textDecoration: 'none', justifyContent: 'space-between' }}
              >
                <span>Probar el Conversor de Letras</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <ToolCTA
            title="¿Deseas generar texto con estilos ahora?"
            description="Escribe cualquier nombre, frase o biografía para obtener al instante más de 350 estilos Unicode listos para copiar y pegar."
            buttonText="Ir al Generador de Texto"
            targetId="generador-texto-estilos"
            badge="Herramienta en Vivo"
          />

          {/* FAQ SECTION */}
          <FAQSection
            items={TEXTO_CON_ESTILOS_FAQ_ITEMS}
            title="Preguntas Frecuentes sobre Texto con Estilos"
            colorTheme="cyan"
            id="faq"
          />

          {/* CONCLUSION */}
          <section className="seo-card-section mb-12">
            <div className="seo-icon-badge">
              <CheckCircle2 size={20} />
            </div>
            <h2>Conclusión</h2>
            <p>
              El texto con estilos es una forma sencilla de darle personalidad a nombres, bios, frases y otros contenidos cortos. La clave está en entender que muchas de estas variantes no son fuentes instaladas, sino caracteres Unicode con una apariencia diferente. El estándar Unicode incluye distintos alfabetos estilizados, aunque varios de ellos fueron creados originalmente para usos técnicos o matemáticos.
            </p>
            <p className="mt-4">
              La mejor estrategia es sencilla: escribe tu texto, prueba diferentes variantes en el conversor de Letras Bonitas, elige una que sea atractiva y fácil de leer, cópiala y comprueba cómo aparece en el lugar donde quieres utilizarla. Así puedes personalizar tu contenido sin sacrificar claridad ni depender de diseños complicados.
            </p>
          </section>

          {/* SILO & RELATED TOOLS LINKS */}
          <section className="silo-nav-block">
            <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
            <div className="silo-links-grid">
              <Link href="/conversor-de-letras" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Pillar Principal</span>
                  <h4 className="silo-card-heading">Conversor de Letras</h4>
                  <p className="silo-card-desc">Accede al conversor universal con más de 350 estilos Unicode.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/letras-para-copiar-y-pegar" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Herramienta de Copia</span>
                  <h4 className="silo-card-heading">Letras para Copiar y Pegar</h4>
                  <p className="silo-card-desc">Catálogo de letras, palabras y frases bonitas listas para copiar.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/como-cambiar-las-letras" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Guía Práctica</span>
                  <h4 className="silo-card-heading">Cómo Cambiar las Letras</h4>
                  <p className="silo-card-desc">Aprende el método paso a paso para transformar tus fuentes.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">SILO Cursiva</span>
                  <h4 className="silo-card-heading">Letras Cursivas</h4>
                  <p className="silo-card-desc">Hub de tipografías manuscritas y caligráficas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/abecedario-cursivo" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Abecedario Completo</span>
                  <h4 className="silo-card-heading">Abecedario Cursivo</h4>
                  <p className="silo-card-desc">Colección A-Z de letras cursivas mayúsculas y minúsculas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Manuscrita Copiable</span>
                  <h4 className="silo-card-heading">Letras Cursivas para Copiar y Pegar</h4>
                  <p className="silo-card-desc">Generador y catálogo directo de fuentes cursivas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-elegantes" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Estilo Elegante</span>
                  <h4 className="silo-card-heading">Letras Cursivas Elegantes</h4>
                  <p className="silo-card-desc">Fuentes caligráficas de lujo para marcas y firmas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-para-instagram" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Redes Sociales</span>
                  <h4 className="silo-card-heading">Letras para Instagram</h4>
                  <p className="silo-card-desc">Personaliza bios, nombres y comentarios de Instagram.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/nombres-para-free-fire" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Gaming</span>
                  <h4 className="silo-card-heading">Nombres para Free Fire</h4>
                  <p className="silo-card-desc">Generador de apodos estilizados para videojuegos.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Inicio</span>
                  <h4 className="silo-card-heading">Letras Bonitas</h4>
                  <p className="silo-card-desc">Página principal de herramientas y generadores.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
