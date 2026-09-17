import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CursiveCopyGenerator from '@/components/cursive-copy/CursiveCopyGenerator';
import ReadyToCopySection from '@/components/cursive-copy/ReadyToCopySection';
import CursiveAlphabetCopySection from '@/components/cursive-copy/CursiveAlphabetCopySection';
import { FAQSection } from '@/components/seo/FAQSection';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  CheckCircle2,
  Share2,
  Instagram,
  MousePointerClick,
  ChevronRight,
  Heart,
  UserCheck,
  Smartphone,
  Gamepad2,
  ExternalLink,
  Type,
  Sliders,
  ShieldCheck,
  Flame,
  Copy
} from 'lucide-react';
import {
  ReadingProgress,
  TableOfContents,
  StepGuide,
  StepItem,
  ToolCTA
} from '@/components/article';
import { POPULAR_NAME_EXAMPLES, INSTAGRAM_EXAMPLES } from '@/data/cursiveExamples';
import { mapAlphabet } from '@/lib/unicode/transformations';

export const metadata: Metadata = {
  title: 'Letras Cursivas para Copiar y Pegar | Bonitas y Elegantes',
  description:
    'Genera y copia letras cursivas bonitas para usar en Instagram, WhatsApp, TikTok, perfiles y nombres. Abecedario cursivo completo y más de 30 estilos manuscritos para copiar en un clic.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/letras-cursivas/letras-cursivas-para-copiar-y-pegar/'
  },
  openGraph: {
    title: 'Letras Cursivas para Copiar y Pegar | Generador Gratis',
    description:
      'Herramienta gratuita para convertir texto normal en letras cursivas bonitas, elegantes y manuscritas para copiar y pegar al instante.',
    url: 'https://theletrasbonitas.com/letras-cursivas/letras-cursivas-para-copiar-y-pegar/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Cursivas para Copiar y Pegar (Gratis)',
    description:
      'Copia letras cursivas elegantes, manuscritas y aesthetic para Instagram, TikTok y WhatsApp.'
  },
  robots: {
    index: true,
    follow: true
  }
};

const FAQ_ITEMS = [
  {
    q: '¿Cómo puedo copiar letras cursivas?',
    a: 'Escribe tu frase en la caja de texto del generador, busca el diseño manuscrito que prefieras y presiona el botón «Copiar». El texto se guardará automáticamente en tu portapapeles listo para pegar en cualquier app.'
  },
  {
    q: '¿Puedo usar estas letras en Instagram?',
    a: 'Sí, funcionan perfectamente en la biografía de Instagram, el nombre de perfil, publicaciones, comentarios e historias.'
  },
  {
    q: '¿Funcionan las letras cursivas en WhatsApp?',
    a: 'Totalmente. Puedes enviar mensajes cursivos en chats individuales, grupales, colocarlos en tus estados o en la información de tu perfil.'
  },
  {
    q: '¿Las letras cursivas son fuentes reales?',
    a: 'No son archivos de fuente instalables (.ttf o .otf), sino símbolos de texto gráficos del estándar universal Unicode que imitan la escritura a mano alzada.'
  },
  {
    q: '¿Por qué algunas letras pueden verse diferentes?',
    a: 'Cada sistema operativo (iOS, Android, Windows) utiliza una tipografía predeterminada propia para renderizar los caracteres Unicode.'
  },
  {
    q: '¿Puedo copiar una sola letra cursiva?',
    a: 'Sí, nuestra sección de Abecedario Cursivo para Copiar incluye tarjetas individuales para cada letra de la A a la Z en mayúsculas y minúsculas.'
  },
  {
    q: '¿El generador de letras cursivas es gratis?',
    a: 'Sí, es una herramienta 100% gratuita, sin necesidad de registros, descargas ni restricciones de uso.'
  },
  {
    q: '¿Puedo utilizar letras cursivas para mi nombre en videojuegos?',
    a: 'Sí, muchos jugadores utilizan iniciales o nicknames en cursiva para Free Fire y Roblox, siempre comprobando que el juego acepte el carácter.'
  },
  {
    q: '¿Cómo funcionan los caracteres especiales con acentos y Ñ?',
    a: 'En aquellos estilos Unicode donde no existen sustitutos matemáticos directos para acentos o la letra Ñ, el sistema conserva la letra original en español para evitar caracteres rotos.'
  },
  {
    q: '¿Se pueden mezclar estilos cursivos con emojis y símbolos?',
    a: '¡Por supuesto! Combinar una palabra cursiva con destellos (✨) o corazones (💖) crea un resultado estético ideal para biografías.'
  }
];

const CURSIVE_COPY_TOC_ITEMS = [
  { id: 'generador-cursivas', label: 'Generador de letras cursivas' },
  { id: 'como-usar', label: 'Cómo copiar letras cursivas paso a paso' },
  { id: 'que-son', label: '¿Qué son las letras cursivas copiables?' },
  { id: 'comparativa-fuentes', label: 'Unicode cursivo vs fuentes tradicionales' },
  { id: 'donde-usar', label: 'Dónde puedo usar letras cursivas' },
  { id: 'compatibilidad-espanol', label: 'Acentos y letra Ñ en español' },
  { id: 'ejemplos-populares', label: 'Ejemplos populares para copiar' },
  { id: 'faq', label: 'Preguntas frecuentes' }
];

export default function CursiveCopyPage() {
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
        name: 'Letras Cursivas',
        item: 'https://theletrasbonitas.com/letras-cursivas/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Letras Cursivas para Copiar y Pegar',
        item: 'https://theletrasbonitas.com/letras-cursivas/letras-cursivas-para-copiar-y-pegar/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
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
          <Link href="/letras-cursivas/" className="breadcrumb-link">Letras Cursivas</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Letras Cursivas para Copiar y Pegar</span>
        </div>
      </nav>

      {/* Main SILO Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Header Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Colección e Conversor de Un Solo Clic</span>
            </div>

            <h1 className="hero-h1">
              Letras Cursivas <span className="gradient-text">para Copiar y Pegar</span>
            </h1>

            <p className="hero-tagline">
              Convierte tu texto en estilos cursivos bonitos, caligráficos y manuscritos listos para copiar y pegar.
            </p>
          </header>

          {/* TABLE OF CONTENTS */}
          <TableOfContents items={CURSIVE_COPY_TOC_ITEMS} />

          {/* MAIN GENERATOR PANEL (TOOL FIRST) */}
          <div id="generador-cursivas">
            <CursiveCopyGenerator />
          </div>

          {/* Image Plan 1 Visual Banner */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Vista Previa Interactiva de Generación
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Convierte cualquier palabra a cursiva manuscrita al instante
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Genera estilos en negrita script, itálica caligráfica, cursiva con destellos y marcos aesthetic listos para copiar con 1 clic.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2 min-w-[260px] text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-amber-300">𝓛𝓮𝓽𝓻𝒶𝓼 𝓒𝓾𝓻𝓼𝓲𝓿𝒶𝓼</span>
                    <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Copiado</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-indigo-300">𝑳𝒆𝒕𝒓𝒂𝒔 𝑪𝒖𝒓𝒔𝒊𝒗𝒂𝒔</span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">Copiar</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Genera y copia diferentes estilos de letras cursivas desde tu navegador.
            </p>
          </div>

          {/* READY-TO-COPY QUICK PHRASES SECTION */}
          <ReadyToCopySection />

          {/* CURSIVE ALPHABET SECTION */}
          <CursiveAlphabetCopySection />

          {/* SECTION 1: HOW TO USE */}
          <section className="seo-card-section mb-8" id="como-usar">
            <h2 className="seo-h2">¿Cómo copiar letras cursivas?</h2>
            <p className="seo-paragraph">
              ¿Estás buscando darle una apariencia más elegante a tus mensajes, bio de Instagram o nombre de usuario? Las <strong>letras cursivas para copiar y pegar</strong> te permiten transformar texto plano ordinario en tipografías manuscritas en cuestión de segundos.
            </p>

            <div className="mt-6">
              <StepGuide>
                <StepItem
                  stepNumber={1}
                  title="Escribe tu texto"
                  badge="Paso 1"
                >
                  Introduce tu nombre, palabra o biografía en el cuadro de texto del generador al inicio de la página.
                </StepItem>
                <StepItem
                  stepNumber={2}
                  title="Selecciona tu estilo"
                  badge="Paso 2"
                >
                  Explora la vista previa en tiempo real y elige entre cursiva script, negrita manuscrita o variante caligráfica.
                </StepItem>
                <StepItem
                  stepNumber={3}
                  title="Copia y pega"
                  badge="Paso 3"
                  isLast={true}
                >
                  Presiona el botón «Copiar» y pega el texto resultante directamente en Instagram, WhatsApp o TikTok.
                </StepItem>
              </StepGuide>
            </div>
          </section>

          {/* SECTION 2: UNICODE EXPLANATION */}
          <section className="seo-card-section mb-8" id="que-son">
            <h2 className="seo-h2">¿Qué son las letras cursivas para copiar y pegar?</h2>
            <p className="seo-paragraph">
              Las <strong>letras cursivas para copiar y pegar</strong> son representaciones tipográficas creadas mediante el estándar internacional{' '}
              <a
                href="https://www.unicode.org/reports/tr25/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Technical Report #25 (Mathematical Alphanumeric Symbols)
              </a>
              .
            </p>
            <p className="seo-paragraph">
              Por consiguiente, cuando utilizas nuestro{' '}
              <Link href="/conversor-de-letras/" className="seo-link font-semibold">
                conversor de letras
              </Link>
              , no estás instalando un archivo de fuente (.ttf) en tu dispositivo ni creando una imagen. Estás generando símbolos alfanuméricos Unicode reales que viajan como texto plano universal.
            </p>
          </section>

          {/* COMPARISON TABLE SECTION */}
          <section className="seo-card-section mb-8" id="comparativa-fuentes">
            <h2 className="seo-h2">Letras cursivas Unicode vs. Fuentes tradicionales</h2>
            <p className="seo-paragraph">
              Entiende las diferencias clave entre usar caracteres cursivos copiables y fuentes tradicionales de sistema:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-indigo-300 border-b border-slate-800">
                    <th className="p-3 font-bold">Característica</th>
                    <th className="p-3 font-bold">Texto Unicode Cursivo</th>
                    <th className="p-3 font-bold">Fuente Tradicional (.ttf)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white">Instalación necesaria</td>
                    <td className="p-3 text-emerald-400">No, funciona de forma inmediata</td>
                    <td className="p-3 text-amber-400">Requiere instalación previa</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Copiar y pegar en redes</td>
                    <td className="p-3 text-emerald-400">100% compatible como texto</td>
                    <td className="p-3 text-slate-400">No se conserva al pegar</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Uso en móviles (iOS/Android)</td>
                    <td className="p-3 text-emerald-400">Soportado de forma nativa</td>
                    <td className="p-3 text-slate-400">Limitado por la app contenedora</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Diseño profesional</td>
                    <td className="p-3 text-slate-300">Ideal para perfiles y nicks</td>
                    <td className="p-3 text-indigo-300">Ideal para software de maquetación</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Image Plan 2 Visual Banner */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Uso Práctico en Redes Sociales
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Destaca tu perfil con estilos cursivos estéticos
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Personaliza tu biografía de Instagram, estados de WhatsApp y descripciones de TikTok con combinaciones manuscritas listas para copiar.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2 min-w-[260px] text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-pink-300">✨ 𝒮𝑜𝓅𝒽𝒾𝒶 ✨</span>
                    <span className="bg-pink-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Instagram Bio</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-emerald-300">𝒞𝒶𝓇𝓁ℴ𝓈 | 𝐹𝑜𝓉ó𝑔𝓇𝒶𝒻ℴ</span>
                    <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Perfil</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Ejemplos de letras cursivas bonitas para copiar y pegar en Instagram y WhatsApp.
            </p>
          </div>

          {/* SECTION 3: WHERE TO USE & PLATFORM GUIDELINES */}
          <section className="seo-card-section mb-8" id="donde-usar">
            <h2 className="seo-h2">¿Dónde puedo usar letras cursivas?</h2>
            <p className="seo-paragraph">
              Puedes copiar y pegar estas tipografías manuscritas en las principales plataformas digitales:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-pink-400">
                  <Instagram size={20} />
                  <h3 className="font-bold text-white text-base">Letras cursivas para Instagram</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Resalta en tu biografía, nombre de perfil y subtítulos. Revisa también nuestras guías de{' '}
                  <Link href="/letras-para-instagram/" className="seo-link font-medium">
                    letras para Instagram
                  </Link>,{' '}
                  <Link href="/letras-para-instagram/letras-para-bio/" className="seo-link font-medium">
                    letras para bio
                  </Link>{' '}
                  y{' '}
                  <Link href="/letras-para-instagram/simbolos-para-instagram/" className="seo-link font-medium">
                    símbolos para Instagram
                  </Link>.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Smartphone size={20} />
                  <h3 className="font-bold text-white text-base">WhatsApp y TikTok</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Pega texto cursivo en estados de WhatsApp, mensajes directos y descripciones de TikTok.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <Type size={20} />
                  <h3 className="font-bold text-white text-base">Letras cursivas para nombres</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Crea variantes elegantes para apodos de usuario. Consulta la sección de{' '}
                  <Link href="/letras-para-instagram/letras-para-nombres/" className="seo-link font-medium">
                    letras para nombres
                  </Link>.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <Gamepad2 size={20} />
                  <h3 className="font-bold text-white text-base">Gaming & Free Fire</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Crea nicknames caligráficos para juegos. Explora nuestra página de{' '}
                  <Link href="/nombres-para-free-fire/" className="seo-link font-medium">
                    nombres para Free Fire
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: SPANISH CHARACTER & ACCENTS HANDLING */}
          <section className="seo-card-section mb-8" id="compatibilidad-espanol">
            <h2 className="seo-h2">Manejo de acentos y la letra Ñ en español</h2>
            <p className="seo-paragraph">
              Para los usuarios de México e Hispanoamérica, la correcta preservación de vocales con tilde (<strong>á, é, í, ó, ú</strong>) y de la letra <strong>Ñ/ñ</strong> es vital.
            </p>
            <p className="seo-paragraph">
              Según se documenta en{' '}
              <a
                href="https://www.unicode.org/reports/tr15/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Normalization Forms (Annex #15)
              </a>
              , en aquellos estilos donde no existe un equivalente matemático directo, nuestra herramienta conserva intacto el carácter original para prevenir rectángulos rotos o signos de interrogación.
            </p>
          </section>

          {/* SECTION 5: POPULAR EXAMPLES DISPLAY */}
          <section className="seo-card-section mb-8" id="ejemplos-populares">
            <h2 className="seo-h2">Ejemplos populares de letras cursivas para copiar</h2>

            <h3 className="text-lg font-bold text-indigo-300 mt-4 mb-2">Frases bonitas y aesthetic</h3>
            <div className="cursive-examples-grid mb-6">
              <div className="cursive-example-card">
                <span className="example-label">Romántico</span>
                <span className="example-cursive">💖 {mapAlphabet('Siempre juntos', 'boldScript')} 💖</span>
              </div>
              <div className="cursive-example-card">
                <span className="example-label">Aesthetic</span>
                <span className="example-cursive">✨ {mapAlphabet('Sueña en grande', 'boldScript')} ✨</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-indigo-300 mt-4 mb-2">Letras cursivas elegantes</h3>
            <p className="text-xs text-slate-400 mb-3">
              Descubre más alternativas sofisticadas en nuestra guía de{' '}
              <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="seo-link font-semibold">
                letras cursivas elegantes
              </Link>.
            </p>
            <div className="cursive-examples-grid mb-6">
              <div className="cursive-example-card">
                <span className="example-label">Edición Fina</span>
                <span className="example-cursive">{mapAlphabet('Colección Exclusiva', 'script')}</span>
              </div>
              <div className="cursive-example-card">
                <span className="example-label">Manuscrita</span>
                <span className="example-cursive">꧁༺ {mapAlphabet('Moda & Estilo', 'boldScript')} ༻꧂</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-indigo-300 mt-4 mb-2">Nombres populares en letra cursiva</h3>
            <div className="cursive-examples-grid">
              {POPULAR_NAME_EXAMPLES.map((item, i) => (
                <div key={i} className="cursive-example-card">
                  <span className="example-label">{item.name}</span>
                  <span className="example-cursive">{item.cursive}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CONTEXTUAL TOOL CTA */}
          <ToolCTA
            targetId="generador-cursivas"
            title="¿Listo para crear tus propias letras cursivas?"
            description="Escribe cualquier palabra o frase en nuestro conversor gratuito arriba y copia más de 30 estilos caligráficos con un solo clic."
            buttonText="Subir al Conversor de Cursivas"
          />

          {/* SECTION 6: FAQ ACCORDION DISPLAY */}
          <div className="mb-8">
            <FAQSection
              items={FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))}
              title="Preguntas frecuentes sobre letras cursivas"
              colorTheme="purple"
              id="faq"
            />
          </div>

          {/* SECTION 7: SILO INTERNAL LINKS GRID */}
          <section className="silo-nav-block mb-8">
            <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
            <div className="silo-links-grid">
              <Link href="/letras-cursivas/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#818cf8' }}>SILO Principal</span>
                  <h4 className="silo-card-heading">letras cursivas</h4>
                  <p className="silo-card-desc">Página principal de fuentes manuscritas y cursivas en Unicode.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/abecedario-cursivo/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#6366f1' }}>Abecedario</span>
                  <h4 className="silo-card-heading">abecedario cursivo</h4>
                  <p className="silo-card-desc">Colección del abecedario en cursiva mayúscula y minúscula.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#ec4899' }}>Elegantes</span>
                  <h4 className="silo-card-heading">letras cursivas elegantes</h4>
                  <p className="silo-card-desc">Fuentes cursivas finas de lujo para firmas y eventos.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Copiar y Pegar</span>
                  <h4 className="silo-card-heading">letras para copiar y pegar</h4>
                  <p className="silo-card-desc">Conversor rápido de alfabetos Unicode de 1 solo clic.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>
            </div>
          </section>

          {/* SECTION 8: CONCLUSION */}
          <section className="seo-card-section mb-8 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/20">
            <h2 className="seo-h2">Conclusión</h2>
            <p className="seo-paragraph">
              Las letras cursivas para copiar y pegar son la forma más rápida y elegante de personalizar biografías, comentarios, títulos y nicknames en redes sociales sin instalar aplicaciones ni programas complejos.
            </p>
            <p className="seo-paragraph font-medium text-indigo-200">
              Simplemente introduce tu texto en el conversor de Letras Bonitas, explora las variantes manuscritas disponibles, presiona «Copiar» y pega el resultado directamente en tu plataforma preferida.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
