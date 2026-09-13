import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import NameGenerator from '@/components/instagram-names/NameGenerator';
import NamePreview from '@/components/instagram-names/NamePreview';
import NameCategoriesSection from '@/components/instagram-names/NameCategoriesSection';
import NameDecorationsSection from '@/components/instagram-names/NameDecorationsSection';
import NameSymbolsSection from '@/components/instagram-names/NameSymbolsSection';
import NameFaqSection from '@/components/instagram-names/NameFaqSection';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
  Zap,
  Layers,
  FileText,
  Lightbulb,
  ShieldAlert,
  Sliders,
  Type,
  Smartphone,
  ExternalLink,
  Table as TableIcon,
  Check,
  AlertTriangle,
  Heart,
  Smile,
  UserCheck,
  Gamepad2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Letras para Nombres Bonitos: Copia y Pega Estilos',
  description:
    'Crea letras para nombres bonitas y originales. Prueba estilos cursivos, góticos, aesthetic y más, copia tu favorito y úsalo donde quieras.',
  alternates: {
    canonical: 'https://letrasbonitas.com/letras-para-instagram/letras-para-nombres/'
  },
  openGraph: {
    title: 'Letras para Nombres Bonitos: Copia y Pega Estilos',
    description:
      'Personaliza tu nombre con estilos cursivos, góticos, aesthetic y especiales listos para copiar y pegar.',
    url: 'https://letrasbonitas.com/letras-para-instagram/letras-para-nombres/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras para Nombres Bonitos: Copia y Pega Estilos',
    description:
      'Crea nombres bonitos para Instagram, TikTok, WhatsApp y juegos con fuentes cursivas, góticas y decoradas.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LetrasParaNombresPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://letrasbonitas.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Letras para Instagram',
        item: 'https://letrasbonitas.com/letras-para-instagram/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Letras para Nombres',
        item: 'https://letrasbonitas.com/letras-para-instagram/letras-para-nombres/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué son las letras para nombres?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Son caracteres y estilos de texto utilizados para cambiar la apariencia visual de un nombre. Muchos generadores utilizan caracteres Unicode para producir variantes que puedes copiar y pegar.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Necesito instalar una fuente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No necesariamente. Cuando el generador utiliza caracteres Unicode, el resultado se puede copiar como texto. Unicode no es una fuente; es un estándar de caracteres.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo usar letras bonitas en Instagram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puedes probar diferentes caracteres especiales en los campos de Instagram que acepten ese tipo de texto. La compatibilidad depende del campo y de los caracteres utilizados.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo crear un nombre con ñ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, puedes introducir la ñ directamente en el generador. Sin embargo, conviene revisar cada estilo porque no todos los conjuntos de caracteres especiales representan todas las letras del español de la misma manera.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo usar acentos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Escribe el nombre con su ortografía correcta y comprueba el resultado. Si una variante no conserva bien una vocal acentuada, utiliza otra.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Las letras góticas son buenas para nombres?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pueden ser una buena opción si buscas una apariencia fuerte o diferente. Sin embargo, algunas variantes son menos fáciles de leer, así que conviene comprobar el resultado antes de utilizarlo.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo agregar corazones y estrellas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, siempre que el lugar donde vas a pegar el nombre acepte esos caracteres. Los símbolos pueden complementar el diseño, pero no necesitas utilizar muchos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Por qué mi nombre se ve diferente en otro teléfono?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La representación de algunos caracteres puede variar según el sistema, navegador, aplicación y fuentes disponibles. Por eso es recomendable comprobar el resultado en el dispositivo o plataforma donde lo utilizarás.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Las letras para nombres son imágenes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No necesariamente. Cuando se utilizan caracteres Unicode, el resultado es texto y no una imagen. Esa es precisamente una de las razones por las que puede copiarse y pegarse.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo usar un nombre estilizado en documentos oficiales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No es recomendable utilizar estilos decorativos en documentos donde necesitas que tu nombre aparezca de forma oficial y clara. Para trámites, formularios, documentos escolares o profesionales, utiliza tu nombre normal.'
        }
      }
    ]
  };

  return (
    <>
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
          <Link href="/letras-para-instagram/" className="breadcrumb-link">Letras para Instagram</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Letras para Nombres</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Generador de Nombres Bonitos & Guía Unicode</span>
            </div>

            <h1 className="hero-h1">
              Letras para Nombres: <span className="gradient-text">Crea Nombres Bonitos para Copiar y Pegar</span>
            </h1>

            <p className="hero-tagline">
              Personaliza tu nombre con estilos cursivos, góticos, aesthetic y especiales listos para copiar y pegar en tu perfil social o videojuego.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#generador-nombres" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Probar Generador
              </a>
              <a href="#guia-nombres" className="cp-copy-all-btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Leer la Guía
              </a>
            </div>
          </header>

          {/* PRIMARY INTERACTIVE NAME GENERATOR TOOL */}
          <main id="main-content">
            <div id="generador-nombres">
              <NameGenerator />
            </div>

            {/* VISUAL PROFILE PREVIEW SECTION */}
            <NamePreview />

            {/* PAS INTRODUCTION & PROBLEM STATEMENT */}
            <article className="seo-card-section mb-12" id="guia-nombres">
              <p className="lead-text" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#E2E8F0' }}>
                ¿Tu nombre se ve demasiado simple en Instagram, TikTok, WhatsApp o tu perfil de juego? Un nombre normal puede funcionar perfectamente, pero a veces quieres darle un toque más personal y distintivo.
              </p>
              <p className="mt-4">
                El problema es que buscar estilos uno por uno puede ser tardado. Además, no todas las letras decorativas se ven igual en todos los dispositivos y algunas pueden hacer que un nombre sea difícil de leer.
              </p>
              <p className="mt-4">
                La solución es utilizar letras para nombres listas para <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="seo-link">copiar y pegar</Link>. Con nuestro conversor puedes escribir tu nombre una sola vez, comparar diferentes estilos y elegir la versión que mejor represente tu personalidad.
              </p>
              <p className="mt-4">
                En esta guía encontrarás cómo funcionan estos estilos, qué opciones puedes probar, cómo usar nombres con símbolos y cómo elegir una versión que se vea bonita sin perder legibilidad.
              </p>
            </article>

            {/* SECTION 1: CREA TU NOMBRE CON LETRAS BONITAS */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <Sparkles size={20} />
              </div>
              <h2>Crea tu nombre con letras bonitas</h2>
              <p>
                La forma más sencilla de empezar es utilizar el generador de Letras Bonitas.
              </p>
              <p className="mt-3">
                Escribe tu nombre y revisa las diferentes variantes disponibles. Por ejemplo, un nombre sencillo como <strong>Camila</strong> puede convertirse en estilos visualmente diferentes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <span className="text-xs text-indigo-400 font-semibold block mb-1">Cursiva Caligráfica</span>
                  <span className="text-lg text-white">𝓒𝓪𝓶𝓲𝓵𝓪</span>
                </div>
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <span className="text-xs text-indigo-400 font-semibold block mb-1">Negrita Matemática</span>
                  <span className="text-lg text-white">𝐂𝐚𝐦𝐢𝐥𝐚</span>
                </div>
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <span className="text-xs text-indigo-400 font-semibold block mb-1">Cursiva Simple</span>
                  <span className="text-lg text-white">𝐶𝑎𝑚𝑖𝑙𝑎</span>
                </div>
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <span className="text-xs text-indigo-400 font-semibold block mb-1">Gótico Fraktur</span>
                  <span className="text-lg text-white">𝕮𝖆𝖒𝖎𝖑𝖆</span>
                </div>
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl col-span-1 md:col-span-2 text-center">
                  <span className="text-xs text-indigo-400 font-semibold block mb-1">Ancho Completo (Fullwidth)</span>
                  <span className="text-lg text-white">Ｃａｍｉｌａ</span>
                </div>
              </div>

              <p>
                Cada opción transmite una sensación distinta. Una cursiva puede parecer más elegante, una negrita puede tener mayor presencia y una versión gótica puede dar una apariencia más intensa.
              </p>
              <p className="mt-4">
                La idea no es elegir el estilo que tenga más adornos. Lo importante es encontrar uno que combine con el lugar donde vas a utilizarlo y que siga siendo fácil de reconocer.
              </p>
              <div className="p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-xl my-4">
                <span className="font-bold text-indigo-200 block mb-1">Consejo práctico:</span>
                <p className="text-slate-300 text-sm margin-0">
                  Si tu nombre es corto (3 a 5 letras), puedes experimentar con estilos más llamativos o decorados. Si tu nombre es largo o compuesto, normalmente conviene elegir una variante más limpia para facilitar la lectura.
                </p>
              </div>
            </section>

            {/* SECTION 2: WHAT ARE LETRAS PARA NOMBRES & UNICODE TECHNICAL EXPLANATION */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <Type size={20} />
              </div>
              <h2>¿Qué son las letras para nombres?</h2>
              <p>
                Las letras para nombres son caracteres y estilos de texto que puedes utilizar para personalizar visualmente un nombre en entornos digitales.
              </p>
              <p className="mt-3">
                En internet suelen buscarse como <em>letras bonitas</em>, <em>letras aesthetic</em>, <Link href="/letras-cursivas/" className="seo-link">letras cursivas</Link>, <em>letras elegantes</em>, <em>letras góticas</em> o <em>fuentes para nombres</em>.
              </p>
              <p className="mt-4">
                Aunque muchas personas les llaman "fuentes", técnicamente no siempre se trata de una fuente instalada en tu celular o computadora.
              </p>
              <p className="mt-4">
                En la mayoría de los generadores, el resultado se basa en el estándar universal <a href="https://www.unicode.org/standard/standard.html" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Unicode Standard <ExternalLink size={14} /></a>. Unicode permite representar caracteres de diferentes idiomas y sistemas de escritura de manera consistente entre sistemas informáticos.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Letras bonitas no significa instalar una fuente</h3>
              <p>
                Una fuente tradicional cambia la apariencia de los caracteres que ya tienes en un programa (como Word o Photoshop).
              </p>
              <p className="mt-3">
                En cambio, los generadores web utilizan caracteres Unicode que ya representan diferentes variantes estilizadas. Como explica la documentación oficial del Consorcio en <a href="https://www.unicode.org/faq/font_keyboard.html" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Unicode: Fonts and Keyboards <ExternalLink size={14} /></a>, Unicode no es un archivo de fuente; define códigos universales de caracteres, mientras que las fuentes locales se encargan de dibujarlos.
              </p>
              <p className="mt-4">
                Por ejemplo, la letra común <code className="bg-slate-800 px-2 py-0.5 rounded text-amber-300">A</code> se sustituye por el carácter Unicode <code className="bg-slate-800 px-2 py-0.5 rounded text-amber-300">𝐀 (U+1D400)</code>. Por eso puedes copiar determinados estilos y pegarlos en servicios que acepten esos caracteres como texto.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Cómo funciona Unicode</h3>
              <p>
                El estándar Unicode asigna identificadores binarios únicos a miles de símbolos. Algunos de los estilos alfanuméricos utilizados pertenecen al bloque de <a href="https://www.unicode.org/reports/tr25/" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Mathematical Alphanumeric Symbols <ExternalLink size={14} /></a>, que incluye alfabetos en negrita, cursiva, script, Fraktur, doble trazo y sans-serif.
              </p>
              <p className="mt-4">
                Esto permite crear resultados visualmente diferentes sin convertir tu nombre en una imagen estática. Para aprender más sobre este proceso, consulta nuestra guía sobre <Link href="/conversor-de-letras/texto-con-estilos/" className="seo-link">texto con estilos</Link> y <Link href="/conversor-de-letras/como-cambiar-las-letras/" className="seo-link">cómo cambiar las letras</Link>.
              </p>
            </section>

            {/* SECTION 3: STEP BY STEP GUIDELINE */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <MousePointerClick size={20} />
              </div>
              <h2>Cómo crear un nombre con letras bonitas paso a paso</h2>
              <p>Crear una versión especial de tu nombre requiere solo 5 pasos sencillos:</p>

              <div className="steps-grid my-8">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Paso 1: escribe tu nombre</h3>
                  <p>
                    Comienza escribiendo el nombre real, apellido, apodo o nickname que quieres personalizar (por ejemplo: <em>José</em>, <em>Iñaki</em>, <em>María</em> o <em>Peña</em>).
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Paso 2: prueba diferentes estilos</h3>
                  <p>
                    Compara varias categorías (Cursivas, Negritas, Góticas, Aesthetic). Una misma palabra como <em>Alex</em> luce totalmente distinta en <strong>𝓐𝓵𝓮𝔁</strong>, <strong>𝐀𝐥𝐞𝐱</strong> o <strong>𝔄𝔩𝔢𝔵</strong>.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Paso 3: compara la legibilidad</h3>
                  <p>
                    Verifica si el nombre se entiende a primera vista, si se distinguen las letras y si se ve claro en pantallas pequeñas.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-number">4</div>
                  <h3>Paso 4: copia tu favorito</h3>
                  <p>
                    Haz clic en el botón "Copiar" al lado del estilo seleccionado para guardarlo en tu portapapeles.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-number">5</div>
                  <h3>Paso 5: pégalo donde quieras</h3>
                  <p>
                    Abre tu red social o juego y pega el resultado en la casilla de Nombre, Bio o Comentario.
                  </p>
                </div>
              </div>
            </section>

            {/* NICHE CATEGORIES */}
            <NameCategoriesSection />

            {/* DECORATIVE TEMPLATES */}
            <NameDecorationsSection />

            {/* COPYABLE SYMBOLS */}
            <NameSymbolsSection />

            {/* STYLES CATALOGUE */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <Sliders size={20} />
              </div>
              <h2>Los mejores estilos de letras para nombres</h2>
              <p>
                Explora las características de los alfabetos estilizados más populares:
              </p>

              <div className="space-y-6 mt-6">
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Cursivas</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Transmiten elegancia y fluidez. Ideales para perfiles personales, moda y fotografía. Explora también nuestras páginas de <Link href="/letras-cursivas/abecedario-cursivo/" className="seo-link">abecedario cursivo</Link> y <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="seo-link">letras cursivas elegantes</Link>.
                  </p>
                  <div className="text-base font-mono text-emerald-300">Ejemplos: 𝓛𝓾𝓷𝓪 | 𝓜𝓪𝓻𝓲𝓪 | 𝓢𝓸𝓯𝓲𝓪</div>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Negritas</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Aportan fuerza y presencia sin añadir adornos innecesarios.
                  </p>
                  <div className="text-base font-mono text-emerald-300">Ejemplos: 𝐀𝐋𝐄𝐗 | 𝐃𝐀𝐍𝐈𝐄𝐋 | 𝐌𝐀𝐑𝐂𝐎𝐒</div>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Góticas</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Estética intensa tipo Fraktur para gaming y música alternativa.
                  </p>
                  <div className="text-base font-mono text-emerald-300">Ejemplos: 𝕬𝖑𝖊𝖝 | 𝕸𝖆𝖗𝖈𝖔𝖘 | 𝕯𝖆𝖓𝖎𝖊𝖑</div>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Aesthetic y Retro</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Combinaciones espaciadas de ancho completo con símbolos sutiles.
                  </p>
                  <div className="text-base font-mono text-emerald-300">Ejemplos: Ａｌｅｘ | ✦ Luna ✦</div>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Letras pequeñas (Small Caps)</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Apariencia minimalista y compacta fácil de combinar con iconos.
                  </p>
                  <div className="text-base font-mono text-emerald-300">Ejemplos: ʟᴜɴᴀ | ᴅᴀɴɪᴇʟ</div>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Doble trazo y Monoespaciadas</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Estilos técnicos y geométricos para perfiles digitales.
                  </p>
                  <div className="text-base font-mono text-emerald-300">Ejemplos: 𝔻𝕒𝕟𝕚𝕖𝕝 | 𝙻𝚞𝚗𝚊</div>
                </div>
              </div>
            </section>

            {/* EXAMPLES SECTION */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <UserCheck size={20} />
              </div>
              <h2>Ejemplos de nombres con letras bonitas</h2>
              <p>Observa cómo se transforma un mismo nombre en diferentes variantes:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-indigo-300 mb-2">Ejemplo: Valentina</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Normal: Valentina<br />
                    Cursiva: 𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪<br />
                    Negrita: 𝐕𝐚𝐥𝐞𝐧𝐭𝐢𝐧𝐚<br />
                    Gótica: 𝔙𝔞𝔩𝔢𝔫𝔱𝔦𝔫𝔞<br />
                    Aesthetic: Ｖａｌｅｎｔｉｎａ<br />
                    Small Caps: ᴠᴀʟᴇɴᴛɪɴᴀ
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-indigo-300 mb-2">Ejemplo: Carlos</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Normal: Carlos<br />
                    Cursiva: 𝓒𝓪𝓻𝓵𝓸𝓼<br />
                    Negrita: 𝐂𝐚𝐫𝐥𝐨𝐬<br />
                    Gótica: 𝕮𝖆𝖗𝖑𝖔𝖘<br />
                    Fullwidth: Ｃａｒｌｏｓ<br />
                    Small Caps: ᴄᴀʀʟᴏs
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-indigo-300 mb-2">Ejemplo: Sofía</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Normal: Sofía<br />
                    Cursiva: 𝓢𝓸𝓯í𝓪<br />
                    Negrita: 𝐒𝐨𝐟í𝐚<br />
                    Gótica: 𝕾𝖔𝖋í𝖆<br />
                    Small Caps: sᴏғÍᴀ
                  </p>
                </div>
              </div>
            </section>

            {/* INSTAGRAM AND GAMING SPECIFIC USE CASES */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <Smartphone size={20} />
              </div>
              <h2>Letras para nombres de Instagram y videojuegos</h2>
              <p>
                En <Link href="/letras-para-instagram/" className="seo-link">letras para Instagram</Link>, puedes personalizar el campo de <strong>Nombre visible</strong> con fuentes estéticas. Recuerda que la biografía se complementa con herramientas como <Link href="/letras-para-instagram/letras-para-bio/" className="seo-link">letras para bio</Link>.
              </p>
              <p className="mt-4">
                En cuanto a videojuegos como Free Fire o Roblox, puedes explorar generadores especializados en <Link href="/nombres-para-free-fire/nombres/" className="seo-link">nombres para Free Fire</Link> y <Link href="/nombres-para-free-fire/apodos/" className="seo-link">apodos para Free Fire</Link>.
              </p>

              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl my-4">
                <h4 className="font-bold text-indigo-300 mb-2">Un nombre bonito no necesita muchos símbolos</h4>
                <p className="text-sm text-slate-300">
                  Compara <code>꧁༺✦♡ 𝓛𝓾𝓷𝓪 ♡✦༻꧂</code> con <code>✦ 𝓛𝓾𝓷𝓪 ✦</code>. El segundo es sustancialmente más fácil de identificar y recordar.
                </p>
              </div>
            </section>

            {/* ACCENTS, Ñ AND SPANISH NAMES */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <AlertTriangle size={20} />
              </div>
              <h2>Nombres con Ñ, acentos y apellidos en español</h2>
              <p>
                Para usuarios en México y países hispanohablantes, nombres con tildes (José, María) o Ñ (Iñaki, Peña, Muñoz) requieren atención especial.
              </p>
              <p className="mt-3">
                No todos los alfabetos Unicode matemáticos incluyen caracteres acentuados estilizados. Si un estilo no transforma la Ñ o la vocal acentuada, el conversor conservará el carácter original para no alterar la ortografía. Si prefieres uniformidad completa, selecciona un estilo como Negrita Matemática o Small Caps que tenga soporte extendido.
              </p>
            </section>

            {/* SELECTION MATRIX TABLE */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <TableIcon size={20} />
              </div>
              <h2>Cómo elegir el estilo correcto según tu objetivo</h2>
              <p>Revisa esta tabla orientativa para seleccionar la mejor opción:</p>

              <div className="overflow-x-auto my-6">
                <table className="seo-table w-full text-left border-collapse" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-700 text-indigo-300">
                      <th className="p-3 font-semibold">Objetivo / Perfil</th>
                      <th className="p-3 font-semibold">Estilos Recomendados</th>
                      <th className="p-3 font-semibold">Razón de Selección</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm">
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Elegante / Personal</td>
                      <td className="p-3 text-emerald-400">Cursiva, Script</td>
                      <td className="p-3 text-indigo-300">Se siente personal sin saturar</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Minimalista / Discreto</td>
                      <td className="p-3 text-emerald-400">Small Caps, Sans-serif</td>
                      <td className="p-3 text-indigo-300">Prioriza la claridad y el orden</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Llamativo / Destacado</td>
                      <td className="p-3 text-emerald-400">Negrita Matemática</td>
                      <td className="p-3 text-indigo-300">Mayor presencia visual rápida</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Gamer / Streaming</td>
                      <td className="p-3 text-emerald-400">Gótica, Símbolos decorativos</td>
                      <td className="p-3 text-indigo-300">Estética intensa e identitaria</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* COMPARISON TABLE: UNICODE VS INSTALLED FONTS */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <ShieldAlert size={20} />
              </div>
              <h2>Letras para nombres vs. fuentes tradicionales</h2>

              <div className="overflow-x-auto my-6">
                <table className="seo-table w-full text-left border-collapse" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-700 text-indigo-300">
                      <th className="p-3 font-semibold">Característica</th>
                      <th className="p-3 font-semibold">Letras Unicode</th>
                      <th className="p-3 font-semibold">Fuente Tradicional (.TTF)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm">
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Capacidad Copiar/Pegar</td>
                      <td className="p-3 text-emerald-400 font-semibold">Sí, como texto estandarizado</td>
                      <td className="p-3 text-rose-400">No fuera de aplicaciones de diseño</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Requisito de Instalación</td>
                      <td className="p-3 text-emerald-400 font-semibold">Ninguno (100% nativo)</td>
                      <td className="p-3 text-slate-400">Requiere instalar archivo en el sistema</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Soporte Redes Sociales</td>
                      <td className="p-3 text-emerald-400 font-semibold">Amplio en nombres de perfil y bios</td>
                      <td className="p-3 text-rose-400">No permitido en campos de texto de apps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* COMMON ERRORS & GUIDELINES */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <CheckCircle2 size={20} />
              </div>
              <h2>Errores comunes al crear un nombre y cómo evitarlos</h2>

              <div className="space-y-4 my-6">
                <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-indigo-300">1. Utilizar demasiados símbolos</h4>
                  <p className="text-sm text-slate-300 mt-1">Un nombre recargado dificulta que las personas te identifiquen al buscarte.</p>
                </div>

                <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-indigo-300">2. No comprobar las tildes</h4>
                  <p className="text-sm text-slate-300 mt-1">No elimines la tilde de nombres como José o María solo por usar un diseño incompleto; prueba un estilo alternativo que la conserve.</p>
                </div>

                <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
                  <h4 className="font-bold text-indigo-300">3. Confundir Nombre con @nombredeusuario</h4>
                  <p className="text-sm text-slate-300 mt-1">Recuerda que el identificador técnico (@usuario) solo acepta caracteres latinos simples.</p>
                </div>
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <NameFaqSection />

            {/* CONCLUSION */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <CheckCircle2 size={20} />
              </div>
              <h2>Conclusión</h2>
              <p>
                Las letras para nombres son una forma sencilla de personalizar tu presencia digital. Puedes probar cursivas, negritas, estilos góticos, letras pequeñas, variantes aesthetic y símbolos para encontrar una apariencia que combine contigo.
              </p>
              <p className="mt-4">
                Sin embargo, el mejor nombre no es necesariamente el más decorado. Una buena elección debe ser bonita, reconocible y compatible con el lugar donde quieres utilizarla. Por eso, prueba varias opciones, conserva los acentos y la ñ cuando corresponda y revisa el resultado antes de publicarlo.
              </p>
            </section>

            {/* SILO INTERLINKING CTA CARD */}
            <section className="silo-nav-block">
              <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
              <div className="silo-links-grid">
                <Link href="/letras-para-instagram/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#818cf8' }}>SILO Instagram</span>
                    <h4 className="silo-card-heading">Letras para Instagram</h4>
                    <p className="silo-card-desc">Hub principal de fuentes y letras para Instagram.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/letras-para-instagram/letras-para-bio/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f43f5e' }}>Herramienta de Bio</span>
                    <h4 className="silo-card-heading">Letras para Bio</h4>
                    <p className="silo-card-desc">Generador especializado para biografías multilínea y perfiles.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/conversor-de-letras/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag">Pillar Principal</span>
                    <h4 className="silo-card-heading">Conversor de Letras</h4>
                    <p className="silo-card-desc">Accede al conversor universal con más de 350 estilos Unicode.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/conversor-de-letras/texto-con-estilos/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag">Herramienta Estilos</span>
                    <h4 className="silo-card-heading">Texto con Estilos</h4>
                    <p className="silo-card-desc">Generador de texto bonito y estilizado al instante.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/letras-cursivas/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag">SILO Cursiva</span>
                    <h4 className="silo-card-heading">Letras Cursivas</h4>
                    <p className="silo-card-desc">Hub de tipografías manuscritas y caligráficas.</p>
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
          </main>
        </div>
      </div>
    </>
  );
}
