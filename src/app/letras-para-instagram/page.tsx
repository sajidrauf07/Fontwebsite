import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import InstagramFontGenerator from '@/components/instagram/InstagramFontGenerator';
import InstagramBioSection from '@/components/instagram/InstagramBioSection';
import InstagramNameSection from '@/components/instagram/InstagramNameSection';
import InstagramHighlightsSection from '@/components/instagram/InstagramHighlightsSection';
import InstagramSymbolsSection from '@/components/instagram/InstagramSymbolsSection';
import InstagramCaptionsSection from '@/components/instagram/InstagramCaptionsSection';
import { FAQSection } from '@/components/seo/FAQSection';
import {
  ReadingProgress,
  ExamplePreviewCard,
  CopyButton,
  TipBox,
  StepGuide,
  StepItem,
  ToolCTA
} from '@/components/article';
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
  ShieldAlert,
  Sliders,
  Type,
  Smartphone,
  ExternalLink,
  Table as TableIcon,
  Check,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Letras para Instagram: Bonitas, Gratis y para Copiar',
  description:
    'Crea letras para Instagram bonitas y gratis. Genera estilos cursivos, negrita, góticos y aesthetic para copiar y pegar en tu perfil, bio y publicaciones.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/letras-para-instagram'
  },
  openGraph: {
    title: 'Letras para Instagram: Bonitas, Gratis y para Copiar',
    description:
      'Crea textos con estilo para tu bio, nombre, publicaciones y comentarios. Descubre cómo copiar y pegar letras especiales en Instagram.',
    url: 'https://theletrasbonitas.com/letras-para-instagram',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras para Instagram: Bonitas, Gratis y para Copiar',
    description:
      'Genera y copia fuentes bonitas, cursivas, versalitas y estéticas para tu perfil de Instagram al instante.'
  },
  robots: {
    index: true,
    follow: true
  }
};

const INSTAGRAM_FAQ_ITEMS = [
  {
    question: '¿Cómo poner letras bonitas en Instagram?',
    answer: 'Utiliza un generador de texto Unicode, escribe tu frase, elige un estilo, copia el resultado y pégalo en el campo compatible de Instagram. Después revisa cómo aparece antes de guardar.'
  },
  {
    question: '¿Las letras para Instagram son realmente fuentes?',
    answer: 'Muchas de las llamadas "fuentes para Instagram" son en realidad caracteres Unicode estilizados. No estás instalando una nueva tipografía dentro de Instagram. El generador transforma el texto en otros caracteres que tienen una apariencia diferente.'
  },
  {
    question: '¿Puedo copiar y pegar letras desde mi celular?',
    answer: 'Sí, siempre que el campo de destino admita el carácter utilizado. El proceso habitual es escribir el texto en el generador, copiarlo y pegarlo en Instagram.'
  },
  {
    question: '¿Por qué algunos caracteres aparecen como cuadros?',
    answer: 'Normalmente se debe a que el dispositivo, navegador o aplicación no puede representar correctamente ese carácter. Prueba otro estilo con caracteres más compatibles.'
  },
  {
    question: '¿Las letras especiales sirven para el @usuario?',
    answer: 'No debes asumir que sí. El @usuario y el nombre visible del perfil son campos diferentes y tienen reglas diferentes. Los caracteres especiales que funcionan en un campo pueden no estar permitidos en otro.'
  },
  {
    question: '¿Cuál es la mejor letra para una bio?',
    answer: 'Depende de tu estilo. Para una bio personal puedes probar cursiva o versalitas. Para una marca, normalmente conviene priorizar claridad y utilizar caracteres especiales solo para destacar ciertos elementos.'
  },
  {
    question: '¿Las letras especiales afectan la legibilidad?',
    answer: 'Pueden hacerlo. Algunos caracteres estilizados son más difíciles de leer que las letras normales. Por eso conviene utilizar estilos decorativos con moderación.'
  },
  {
    question: '¿Funcionan las letras bonitas en iPhone y Android?',
    answer: 'Muchos caracteres Unicode funcionan en dispositivos modernos, pero la representación puede variar según el carácter, el sistema, la aplicación y las fuentes disponibles. Por eso siempre es recomendable comprobar el resultado final.'
  },
  {
    question: '¿Puedo usar letras bonitas en comentarios?',
    answer: 'Los caracteres Unicode pueden utilizarse en los espacios de Instagram que acepten esos caracteres. Aun así, la compatibilidad puede variar, así que utiliza estilos sencillos cuando la claridad sea importante.'
  },
  {
    question: '¿Puedo usar letras bonitas para una cuenta de negocio?',
    answer: 'Sí, pero con moderación. Para un negocio es mejor que el nombre, los servicios y la información importante sean fáciles de leer. Los estilos especiales pueden utilizarse como complemento visual.'
  }
];

export default function LetrasParaInstagramPage() {
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
        name: 'Letras para Instagram',
        item: 'https://theletrasbonitas.com/letras-para-instagram/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INSTAGRAM_FAQ_ITEMS.map((item) => ({
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
          <span className="breadcrumb-current">Letras para Instagram</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Generador & Guía Completa de Fuentes para Instagram</span>
            </div>

            <h1 className="hero-h1">
              Letras para Instagram: <span className="gradient-text">bonitas, gratis y para copiar y pegar</span>
            </h1>

            <p className="hero-tagline">
              Crea textos con estilo para tu biografía, nombre, publicaciones y comentarios. Descubre cómo copiar y pegar letras especiales de forma sencilla y legible.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#generador-letras-instagram" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Probar Generador
              </a>
              <a href="#guia-instagram" className="cp-copy-all-btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Leer la Guía
              </a>
            </div>
          </header>

          {/* MAIN INSTAGRAM FONT GENERATOR */}
          <div id="generador-letras-instagram">
            <InstagramFontGenerator />
          </div>

          {/* PAS INTRODUCTION & PROBLEM STATEMENT */}
          <ReadingProgress />

          <article className="seo-card-section mb-12" id="guia-instagram">
            <p className="lead-text" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#E2E8F0' }}>
              ¿Quieres que tu perfil de Instagram tenga un estilo diferente, pero no sabes cómo poner letras bonitas sin instalar aplicaciones? Es más fácil de lo que parece.
            </p>
            <p className="mt-4">
              El problema es que Instagram no funciona como un editor de texto tradicional. En muchos espacios de la plataforma no puedes seleccionar libremente una tipografía como lo harías en un programa de diseño. Por eso, cuando ves perfiles con letras cursivas, negritas, góticas o aesthetic, puede parecer que utilizan una fuente especial.
            </p>
            <p className="mt-4">
              En realidad, muchas de esas “fuentes” son caracteres Unicode que puedes copiar y pegar fácilmente.
            </p>
            <p className="mt-4">
              Con Letras Bonitas puedes escribir tu texto, probar diferentes estilos y copiar el resultado para utilizarlo en Instagram. Además, en esta guía aprenderás cómo hacerlo, qué estilos existen, dónde puedes usarlos y qué debes tener en cuenta para que tu texto siga siendo fácil de leer.
            </p>
          </article>

          {/* INSTAGRAM BIO SECTION */}
          <InstagramBioSection />

          {/* INSTAGRAM NAME SECTION */}
          <InstagramNameSection />

          {/* INSTAGRAM HIGHLIGHTS SECTION */}
          <InstagramHighlightsSection />

          {/* INSTAGRAM SYMBOLS SECTION */}
          <InstagramSymbolsSection />

          {/* INSTAGRAM CAPTIONS SECTION */}
          <InstagramCaptionsSection />

          {/* ARTICLE SECTION 1: WHAT ARE INSTAGRAM FONTS */}
          <section className="seo-card-section mb-12" id="que-son-letras-instagram">
            <div className="seo-icon-badge">
              <Type size={20} />
            </div>
            <h2>¿Qué son las letras para Instagram?</h2>
            <p>
              Las letras para Instagram son caracteres y combinaciones de caracteres que permiten presentar un texto con una apariencia diferente a la escritura normal.
            </p>
            <p className="mt-3">
              Por ejemplo, una frase sencilla como <em>“Mi mundo”</em> puede convertirse visualmente en:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1.25rem 0' }}>
              <ExamplePreviewCard text="𝑀𝑖 𝑚𝑢𝑛𝑑𝑜" label="Cursiva Simple" tags={['Instagram', 'Cursiva']} copyable />
              <ExamplePreviewCard text="𝐌𝐢 𝐦𝐮𝐧𝐝𝑜" label="Negrita Matemática" tags={['Instagram', 'Negrita']} copyable />
              <ExamplePreviewCard text="𝓜𝓲 𝓶𝓾𝓷𝓭𝓸" label="Manuscrito Caligráfico" tags={['Instagram', 'Caligráfico']} copyable />
              <ExamplePreviewCard text="𝕄𝕚 𝕞𝕦𝑛𝕕𝕠" label="Doble Trazo" tags={['Instagram', 'Aesthetic']} copyable />
            </div>

            <p>
              Aunque visualmente parecen diferentes tipografías, técnicamente no siempre se trata de una fuente instalada en Instagram.
            </p>
            <p className="mt-4">
              Aquí está la diferencia importante: una fuente normalmente cambia la forma en que un programa dibuja los caracteres. En cambio, muchos generadores de “letras para Instagram” sustituyen los caracteres normales por otros caracteres Unicode que tienen una apariencia estilizada.
            </p>
            <p className="mt-4">
              El estándar internacional Unicode incluye conjuntos de caracteres alfanuméricos con diferentes estilos visuales, como negrita, cursiva, script, Fraktur, doble trazo y sans serif. La especificación técnica documentada en el <a href="https://www.unicode.org/reports/tr25/" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Unicode Technical Report #25 <ExternalLink size={14} /></a> detalla cómo estos caracteres fueron estructurados originalmente para usos técnicos y matemáticos.
            </p>
            <p className="mt-4">
              Por eso puedes <Link href="/conversor-de-letras/letras-para-copiar-y-pegar" className="seo-link">copiar y pegar</Link> un resultado desde un sitio web y pegarlo en determinados campos de Instagram sin instalar una nueva fuente.
            </p>
          </section>

          {/* STEP BY STEP GUIDELINE */}
          <section className="seo-card-section mb-12" id="como-usar">
            <div className="seo-icon-badge">
              <MousePointerClick size={20} />
            </div>
            <h2>Cómo poner letras bonitas en Instagram paso a paso</h2>
            <p>El proceso es bastante sencillo e intuitivo:</p>

            <StepGuide>
              <StepItem stepNumber={1} title="Escribe tu texto">
                <p>
                  Primero escribe el nombre, palabra, frase o descripción que quieres personalizar. Puede ser: <em>“Ana | Fotografía”</em>, <em>“Viajando por México 🇲🇽”</em>, <em>“Creador digital”</em> o <em>“Sueña en grande ✨”</em>. No necesitas empezar pensando en una fuente concreta. Es mejor escribir primero el mensaje.
                </p>
              </StepItem>

              <StepItem stepNumber={2} title="Elige un estilo">
                <p>
                  Una vez generado el texto, revisa las diferentes opciones. Puedes encontrar estilos como <Link href="/letras-cursivas" className="seo-link">letras cursivas</Link>, negritas, góticas, versalitas, monoespaciadas, en círculos o decorativas.
                </p>
              </StepItem>

              <StepItem stepNumber={3} title="Copia el resultado">
                <p>
                  Cuando encuentres un estilo que te guste, utiliza el botón de copiar del generador. El resultado queda guardado en el portapapeles del dispositivo.
                </p>
              </StepItem>

              <StepItem stepNumber={4} title="Pégalo en Instagram">
                <p>
                  Ahora abre Instagram y pega el texto en el campo correspondiente (bio, nombre visible, comentario o publicación). Comprueba cómo se ve antes de guardar.
                </p>
              </StepItem>
            </StepGuide>
          </section>

          {/* WHERE TO USE STYLED TEXT IN INSTAGRAM */}
          <section className="seo-card-section mb-12" id="donde-usar">
            <div className="seo-icon-badge">
              <Smartphone size={20} />
            </div>
            <h2>¿Dónde puedes usar letras especiales en Instagram?</h2>
            <p>
              Una de las mejores formas de aprovechar un generador de letras es elegir el estilo según el lugar donde quieres utilizarlo. No necesitas usar el mismo estilo en todo tu perfil.
            </p>

            <div className="space-y-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Biografía (Bio)</h3>
                <p className="text-sm text-slate-300 mb-2">
                  La bio es uno de los lugares más populares. Explora más opciones en nuestra sección dedicada a <Link href="/letras-para-instagram/letras-para-bio" className="seo-link">letras para bio</Link>.
                </p>
                <div className="p-3 bg-indigo-950/40 rounded border border-indigo-900/50 font-mono text-sm text-indigo-200">
                  Fotógrafo 📸<br />
                  𝑽𝒊𝒂𝒋𝒆𝒔 • 𝑴é𝒙𝒊𝒄𝒐 🇲🇽<br />
                  DM para sesiones
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Nombre visible del perfil</h3>
                <p className="text-sm text-slate-300 mb-2">
                  Puedes experimentar con caracteres especiales en el nombre visible de tu perfil. Para más ideas, visita <Link href="/letras-para-instagram/letras-para-nombres" className="seo-link">letras para nombres</Link>. Recuerda que esto es diferente del <code>@nombredeusuario</code>.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Publicaciones y pies de foto</h3>
                <p className="text-sm text-slate-300">
                  Reserva los estilos decorativos para títulos cortos o encabezados destacados como <em>✨ 𝑵𝒖𝒆𝒗𝒂 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂 ✨</em> y escribe el resto con texto normal para mejorar el contraste.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Comentarios y Historias / Notas</h3>
                <p className="text-sm text-slate-300">
                  Puedes usar expresiones cortas como <em>𝓠𝓾é 𝓫𝓸𝓷𝓲𝓽𝓸 ✨</em> o <em>𝐌𝐞 𝐞𝐧𝐜𝐚𝐧𝐭𝐚 🔥</em>. Para historias y composiciones visuales, también puedes apoyarte en <Link href="/letras-para-instagram/letras-cursivas-para-instagram" className="seo-link">letras cursivas para Instagram</Link> y <Link href="/letras-para-instagram/simbolos-para-instagram" className="seo-link">símbolos para Instagram</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* POPULAR STYLES CATALOGUE */}
          <section className="seo-card-section mb-12" id="estilos-populares">
            <div className="seo-icon-badge">
              <Sparkles size={20} />
            </div>
            <h2>Los estilos de letras más populares para Instagram</h2>
            <p>
              No existe una única “mejor” letra. El estilo adecuado depende del mensaje que desees transmitir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <h3 className="text-base font-bold text-indigo-300 mb-1">Letras cursivas</h3>
                <p className="text-xs text-slate-400 mb-2">Asociadas con estética manuscrita, elegante y creativa. Consulta nuestro <Link href="/letras-cursivas/abecedario-cursivo" className="seo-link">abecedario cursivo</Link>.</p>
                <span className="text-lg text-emerald-300 font-mono">𝓛𝓮𝓽𝓻𝓪𝓼 𝓹𝓪𝓻𝓪 𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</span>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <h3 className="text-base font-bold text-indigo-300 mb-1">Letras en negrita</h3>
                <p className="text-xs text-slate-400 mb-2">Ideal para destacar palabras clave o avisos.</p>
                <span className="text-lg text-emerald-300 font-mono">𝐋𝐞𝐭𝐫𝐚𝐬 𝐩𝐚𝐫𝐚 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦</span>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <h3 className="text-base font-bold text-indigo-300 mb-1">Letras góticas</h3>
                <p className="text-xs text-slate-400 mb-2">Aspecto oscuro y llamativo para gaming y música. Ver ejemplos en <Link href="/nombres-para-free-fire/nombres" className="seo-link">nombres para Free Fire</Link>.</p>
                <span className="text-lg text-emerald-300 font-mono">𝔏𝔢𝔱𝔯𝔞𝔰 𝔤𝔬́𝔱𝔦𝔠𝔞𝔰</span>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <h3 className="text-base font-bold text-indigo-300 mb-1">Versalitas (Small Caps)</h3>
                <p className="text-xs text-slate-400 mb-2">Estilo moderno y discreto.</p>
                <span className="text-lg text-emerald-300 font-mono">ʟᴇᴛʀᴀꜱ ᴘᴀʀᴀ ɪɴsᴛᴀɢʀᴀᴍ</span>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <h3 className="text-base font-bold text-indigo-300 mb-1">Letras dentro de círculos</h3>
                <p className="text-xs text-slate-400 mb-2">Diseños compactos y numerados.</p>
                <span className="text-lg text-emerald-300 font-mono">Ⓛⓔⓣⓡⓐⓢ</span>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <h3 className="text-base font-bold text-indigo-300 mb-1">Ancho completo (Fullwidth)</h3>
                <p className="text-xs text-slate-400 mb-2">Efecto retro espaciado.</p>
                <span className="text-lg text-emerald-300 font-mono">Ｌｅｔｒａｓ</span>
              </div>
            </div>
          </section>

          {/* SELECTION MATRIX TABLE */}
          <section className="seo-card-section mb-12" id="como-elegir">
            <div className="seo-icon-badge">
              <TableIcon size={20} />
            </div>
            <h2>Cómo elegir la mejor letra según tu perfil</h2>
            <p>
              Analiza esta matriz de recomendación de estilos según el objetivo de tu cuenta:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="seo-table w-full text-left border-collapse" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-700 text-indigo-300">
                    <th className="p-3 font-semibold">Objetivo de la Cuenta</th>
                    <th className="p-3 font-semibold">Estilos Recomendados</th>
                    <th className="p-3 font-semibold">Prioridad Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Bio elegante o marca personal</td>
                    <td className="p-3 text-emerald-400">Cursiva, Script, <Link href="/letras-cursivas/letras-cursivas-elegantes" className="seo-link">letras cursivas elegantes</Link></td>
                    <td className="p-3 text-indigo-300">Alta legibilidad y sofisticación</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Perfil aesthetic / minimalista</td>
                    <td className="p-3 text-emerald-400">Versalitas (Small Caps), negrita ligera, símbolos discretos</td>
                    <td className="p-3 text-indigo-300">Estética limpia y espacio visual</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Gaming y streaming</td>
                    <td className="p-3 text-emerald-400">Gótica (Fraktur), negrita matemática, <Link href="/nombres-para-free-fire/simbolos" className="seo-link">símbolos decorativos</Link></td>
                    <td className="p-3 text-indigo-300">Personalidad e impacto gráfico</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Negocio o comercio local</td>
                    <td className="p-3 text-emerald-400">Negrita para encabezados + texto normal en servicios</td>
                    <td className="p-3 text-indigo-300">Reconocimiento inmediato del servicio</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-200">Creadores de contenido</td>
                    <td className="p-3 text-emerald-400">Mezcla de encabezado destacado + texto estándar</td>
                    <td className="p-3 text-indigo-300">Contraste de información</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* TECHNICAL UNDERSTANDING: UNICODE & CORE SPECIFICATION */}
          <section className="seo-card-section mb-12" id="como-funcionan">
            <div className="seo-icon-badge">
              <ShieldAlert size={20} />
            </div>
            <h2>¿Cómo funcionan realmente las “fuentes” de Instagram?</h2>
            <p>
              Cuando buscas “fuentes para Instagram”, no estás descargando archivos de tipografías tradicionales (.TTF). En su lugar, estás utilizando un mapa de sustitución de caracteres en el estándar universal <strong>Unicode</strong>.
            </p>
            <p className="mt-3">
              De acuerdo con la documentación oficial en el <a href="https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-22/" target="_blank" rel="noopener noreferrer" className="seo-link inline-flex items-center gap-1">Unicode Core Specification Capítulo 22 <ExternalLink size={14} /></a>, los bloques de alfanuméricos matemáticos fueron codificados primariamente para notaciones científicas y fórmulas complejas. Su adopción como fuentes estéticas en redes sociales es un uso derivado de la compatibilidad universal de Unicode.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Distinción clave: Nombre visible vs. @nombredeusuario</h3>
            <p>
              Existe una diferencia técnica fundamental entre dos campos en Instagram:
            </p>
            <ul className="seo-list mt-3">
              <li>
                <strong>Nombre visible de la cuenta:</strong> Admite casi cualquier secuencia de caracteres Unicode estilizados, emojis y símbolos decorativos.
              </li>
              <li>
                <strong>Nombre de usuario (@usuario):</strong> Es el identificador técnico en la base de datos de Instagram. No admite caracteres Unicode especiales, solo caracteres latinos básicos (A-Z, 0-9), puntos y guiones bajos.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">Compatibilidad y accesibilidad</h3>
            <p>
              Los lectores de pantalla pronunciarán los nombres formales de los puntos de código Unicode. Por ello, la recomendación de accesibilidad es estilizar palabras cortas y conservar texto normal para los datos de contacto principales. Si deseas conocer más sobre este funcionamiento, consulta nuestro artículo sobre <Link href="/conversor-de-letras/texto-con-estilos" className="seo-link">texto con estilos</Link> y <Link href="/conversor-de-letras/como-cambiar-las-letras" className="seo-link">cómo cambiar las letras</Link>.
            </p>
          </section>

          {/* TIPS & COMMON ERRORS */}
          <section className="seo-card-section mb-12" id="consejos">
            <div className="seo-icon-badge">
              <CheckCircle2 size={20} />
            </div>
            <h2>Consejos para usar letras bonitas sin exagerar</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
              <TipBox title="1. Mantén un propósito claro">
                <p className="text-sm text-slate-300 mt-1">Usa negrita para destacar y cursiva para dar elegancia. No satures una frase con diez estilos distintos.</p>
              </TipBox>

              <TipBox title="2. Revisa tildes y la letra Ñ">
                <p className="text-sm text-slate-300 mt-1">Palabras en español como <em>México</em>, <em>diseño</em> o <em>años</em> pueden requerir estilos que soporten acentos correctamente. Comprueba siempre antes de publicar.</p>
              </TipBox>

              <TipBox title="3. No sacrifiques legibilidad por estética">
                <p className="text-sm text-slate-300 mt-1">Una letra bonita que no se entiende dificulta que los visitantes comprendan tu perfil.</p>
              </TipBox>
            </div>
          </section>

          {/* READY-TO-COPY CTAS */}
          <div className="steps-grid mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="step-icon-wrapper mb-3" style={{ color: '#A5B4FC' }}>
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2" style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Conversor de Letras Principal</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                  Accede a nuestro conversor universal con más de 350 estilos tipográficos para todas las plataformas.
                </p>
              </div>
              <Link
                href="/conversor-de-letras"
                className="cp-card-copy-btn"
                style={{ textDecoration: 'none', justifyContent: 'space-between' }}
              >
                <span>Probar Conversor de Letras</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'rgba(99, 102, 241, 0.4)', background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6), rgba(15, 23, 42, 0.9))' }}>
              <div>
                <div className="step-icon-wrapper mb-3" style={{ color: '#C084FC' }}>
                  <Layers size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Letras Cursivas Elegantes</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                  Descubre tipografías caligráficas exclusivas ideales para marcas personales y firmas.
                </p>
              </div>
              <Link
                href="/letras-cursivas/letras-cursivas-elegantes"
                className="cp-card-copy-btn copied"
                style={{ textDecoration: 'none', justifyContent: 'space-between' }}
              >
                <span>Letras Cursivas Elegantes</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* TOOL CTA */}
          <ToolCTA
            title="¿Quieres crear letras bonitas para tu Instagram?"
            description="Personaliza tu bio, nombre de perfil o publicaciones con más de 350 tipografías aesthetic listas para copiar con un solo clic."
            buttonText="Subir al Generador de Instagram"
            targetId="generador-letras-instagram"
          />

          {/* FAQ SECTION */}
          <FAQSection
            items={INSTAGRAM_FAQ_ITEMS}
            title="Preguntas Frecuentes sobre Letras para Instagram"
            id="faq"
          />

          {/* CONCLUSION */}
          <section className="seo-card-section mb-12">
            <div className="seo-icon-badge">
              <CheckCircle2 size={20} />
            </div>
            <h2>Conclusión</h2>
            <p>
              Las letras para Instagram son una forma sencilla de darle personalidad a un perfil, una bio o una publicación sin tener que diseñar una imagen desde cero. La clave está en entender que muchas de estas “fuentes” son realmente caracteres Unicode con diferentes apariencias.
            </p>
            <p className="mt-4">
              Para empezar, escribe tu texto en el generador de Letras Bonitas, prueba varios estilos y copia el que mejor se adapte a tu perfil. Después pégalo en Instagram y comprueba el resultado. Sobre todo, busca una buena combinación de estética, claridad y compatibilidad para cuidar la presentación de tu marca personal o negocio.
            </p>
          </section>

          {/* SILO & RELATED TOOLS LINKS */}
          <section className="silo-nav-block">
            <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
            <div className="silo-links-grid">
              <Link href="/letras-para-instagram/letras-cursivas-para-instagram" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#c084fc' }}>Herramienta Cursivas</span>
                  <h4 className="silo-card-heading">Letras Cursivas para Instagram</h4>
                  <p className="silo-card-desc">Generador de letras cursivas, manuscritas y caligráficas para Instagram.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-para-instagram/simbolos-para-instagram" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#fbbf24' }}>Herramienta Símbolos</span>
                  <h4 className="silo-card-heading">Símbolos para Instagram</h4>
                  <p className="silo-card-desc">Colección de corazones, estrellas, flechas, flores y separadores decorativos.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-para-instagram/letras-para-nombres" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#818cf8' }}>Herramienta de Nombres</span>
                  <h4 className="silo-card-heading">Letras para Nombres</h4>
                  <p className="silo-card-desc">Crea nombres bonitos y estilos de texto para tu perfil de Instagram.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-para-instagram/letras-para-bio" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#f43f5e' }}>Herramienta de Bio</span>
                  <h4 className="silo-card-heading">Letras para Bio</h4>
                  <p className="silo-card-desc">Generador de texto bonito para biografías de Instagram con vista previa.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

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
                  <p className="silo-card-desc">Catálogo de letras, palabras y frases listas para copiar.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/texto-con-estilos" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Herramienta Estilos</span>
                  <h4 className="silo-card-heading">Texto con Estilos</h4>
                  <p className="silo-card-desc">Generador de texto bonito y estilizado al instante.</p>
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
