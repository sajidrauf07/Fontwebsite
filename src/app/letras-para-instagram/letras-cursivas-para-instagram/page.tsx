import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CursiveInstagramGenerator from '@/components/cursive-instagram/CursiveInstagramGenerator';
import CursiveShowcaseSection from '@/components/cursive-instagram/CursiveShowcaseSection';
import UsernameAccuracySection from '@/components/cursive-instagram/UsernameAccuracySection';
import CursiveFaqSection from '@/components/cursive-instagram/CursiveFaqSection';
import { CURSIVE_INSTAGRAM_FAQ_ITEMS } from '@/data/cursiveInstagramData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
  BookOpen,
  Zap,
  FileText,
  Search,
  ExternalLink,
  Table as TableIcon,
  Check,
  AlertTriangle,
  Lightbulb,
  ShieldAlert,
  Smartphone,
  Type,
  UserCheck,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Letras Cursivas para Instagram: Copia y Pega',
  description:
    'Crea letras cursivas para Instagram, copia y pega estilos bonitos en tu bio, nombres y publicaciones. Aprende cómo funcionan y evita errores.',
  alternates: {
    canonical: 'https://letrasbonitas.com/letras-para-instagram/letras-cursivas-para-instagram/'
  },
  openGraph: {
    title: 'Letras Cursivas para Instagram: Copia y Pega',
    description:
      'Genera texto cursivo, elige tu estilo favorito y úsalo en tu bio, nombres, captions y comentarios de Instagram.',
    url: 'https://letrasbonitas.com/letras-para-instagram/letras-cursivas-para-instagram/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Cursivas para Instagram: Copia y Pega',
    description:
      'Copia fuentes cursivas, manuscritas y caligráficas para tu perfil e historias de Instagram.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LetrasCursivasParaInstagramPage() {
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
        name: 'Letras Cursivas para Instagram',
        item: 'https://letrasbonitas.com/letras-para-instagram/letras-cursivas-para-instagram/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CURSIVE_INSTAGRAM_FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Letras Cursivas para Instagram: Copia y Pega Estilos Bonitos',
    description:
      'Guía completa sobre cómo transformar texto normal en letras cursivas elegantes para Instagram. Copia fuentes Unicode manuscritas para bios, nombres y publicaciones.',
    url: 'https://letrasbonitas.com/letras-para-instagram/letras-cursivas-para-instagram/',
    inLanguage: 'es-MX',
    publisher: {
      '@type': 'Organization',
      name: 'Letras Bonitas',
      url: 'https://letrasbonitas.com/'
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header & Hero */}
      <header className="bg-slate-950 border-b border-slate-800/80 pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link
              href="/letras-para-instagram/"
              className="hover:text-pink-400 transition-colors"
            >
              Letras para Instagram
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-pink-400 font-medium">Letras Cursivas para Instagram</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Estilos Cursivos, Caligráficos e Itálicos Unicode</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Letras Cursivas para Instagram: Copia y Pega Estilos Bonitos
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-6">
              Genera texto cursivo, elige tu estilo favorito y úsalo en tu bio, nombres, captions y comentarios de Instagram.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-800/60 pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Compatibles con iOS, Android y Web
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Copiado Directo de 1 Clic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Sin Descargar Aplicaciones
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Tool Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6">
        <CursiveInstagramGenerator />
      </div>

      {/* Main SEO Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 space-y-16 text-slate-300 leading-relaxed">
        {/* Intro & PAS Framework Section */}
        <section className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            ¿Quieres que tu perfil se vea diferente sin instalar aplicaciones ni cambiar la configuración de tu celular? Las letras cursivas para Instagram pueden ayudarte a darle un toque elegante, creativo o aesthetic a tu bio, nombres, captions y comentarios.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            El problema es que Instagram no ofrece un botón nativo para convertir cualquier texto normal en cursiva decorativa. Además, muchas personas confunden una fuente tradicional con los caracteres especiales que se pueden copiar y pegar directamente.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-medium text-pink-300">
            La solución es sencilla: escribe tu texto en nuestro conversor, elige el estilo que más te guste, copia el resultado y pégalo en Instagram. En esta guía encontrarás cómo hacerlo, qué tipos de cursiva puedes usar, dónde quedan mejor y qué debes saber sobre compatibilidad.
          </p>
        </section>

        {/* Rapid How-To Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Letras cursivas para Instagram listas para copiar y pegar
          </h2>
          <p>
            La forma más rápida de conseguir letras cursivas para Instagram es utilizar un conversor de texto online como el de Letras Bonitas.
          </p>
          <p>
            En nuestra plataforma, la idea es que puedas introducir una palabra, nombre o frase y obtener instantáneamente una versión estilizada que puedas copiar con un solo clic. Después, simplemente la pegas en el lugar de Instagram donde quieras utilizarla.
          </p>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-pink-400" />
              El proceso básico en 6 pasos:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
              <li>Escribe o pega tu texto en la caja superior.</li>
              <li>Revisa los diferentes estilos cursivos y caligráficos generados.</li>
              <li>Elige la versión cursiva que mejor combine con tu perfil.</li>
              <li>Toca o haz clic en el botón <strong>Copiar</strong>.</li>
              <li>Abre la aplicación de Instagram.</li>
              <li>Pega el texto en el campo donde desees utilizarlo (Bio, Nombre o Comentarios).</li>
            </ol>
          </div>

          <h3 className="text-xl font-bold text-white pt-2">Ejemplo rápido de transformación:</h3>
          <p>Por ejemplo, una palabra sencilla como:</p>
          <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/60 font-mono text-slate-200">
            Hola
          </div>
          <p>puede aparecer en un estilo de escritura decorativo como:</p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xl text-pink-400">
            𝓗𝓸𝓵𝓪
          </div>
          <p>O también puedes combinar texto estilizado con texto normal:</p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-slate-200">
            <span className="font-mono text-pink-400 text-lg">𝓗𝓸𝓵𝓪</span>, bienvenida a mi perfil ✨
          </div>

          <p className="text-sm text-slate-400">
            La ventaja de este sistema es que no necesitas aprender diseño tipográfico ni usar editores complejos para conseguir un resultado profesional.
          </p>
        </section>

        {/* Educational EEAT Section: What are Cursive Fonts for Instagram? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Qué son las letras cursivas para Instagram?
          </h2>
          <p>
            Aquí hay una aclaración técnica muy importante.
          </p>
          <p>
            Cuando buscas “letras cursivas para Instagram”, probablemente estás pensando en descargar una fuente tipográfica. Sin embargo, muchas herramientas que generan este tipo de texto no están cambiando la fuente interna de Instagram.
          </p>
          <p>
            En realidad, utilizan caracteres del estándar <strong>Unicode</strong> que poseen una representación gráfica diferente.
          </p>

          <div className="bg-slate-800/50 border-l-4 border-pink-500 p-5 rounded-r-xl space-y-3">
            <h3 className="text-white font-semibold text-base flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-pink-400" />
              ¿Qué tiene que ver Unicode?
            </h3>
            <p className="text-sm text-slate-300">
              Unicode es un estándar internacional de codificación universal. El propio Unicode Consortium explica que <em>"Unicode no es una fuente: es un estándar que define identidades de caracteres. Las fuentes son las que proporcionan la representación visual concreta de esos caracteres"</em> (
              <a
                href="https://www.unicode.org/faq/font_keyboard.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1"
              >
                <span>Unicode Consortium — Fonts and Unicode</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              ).
            </p>
            <p className="text-sm text-slate-300">
              Dentro del bloque de <strong>Mathematical Alphanumeric Symbols</strong> de Unicode existen alfabetos denominados <em>Mathematical Script</em> y <em>Mathematical Bold Script</em>, que son los que generan las letras manuscritas o itálicas (
              <a
                href="https://www.unicode.org/charts/PDF/U1D400.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1"
              >
                <span>Unicode Mathematical Alphanumeric Chart</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              ). Por eso puedes copiar una palabra como <span className="font-mono text-pink-300">𝒜𝓃𝒶</span> y pegarla directamente en Instagram sin instalar software.
            </p>
          </div>
        </section>

        {/* Why Use Cursive Fonts in Instagram? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Por qué usar letras cursivas en Instagram?
          </h2>
          <p>
            Instagram es una plataforma sumamente visual. Una pequeña diferencia en la presentación del texto puede ayudarte a organizar mejor la información de tu perfil y captar la atención de las personas.
          </p>
          <p className="text-slate-400 text-sm">
            Eso no significa que utilizar caracteres decorativos vaya a garantizar más seguidores o alcance de forma mágica. El objetivo principal es la estética y la estructura visual de tu contenido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-pink-300 text-base flex items-center gap-2">
                <Heart className="w-4 h-4" /> Para la Biografía
              </h3>
              <p className="text-sm text-slate-300">
                La bio es el lugar ideal para destacar tu profesión o nicho (ej. <span className="font-mono text-white">𝒞𝓇𝑒𝒶𝓉𝒾𝓋𝒶 • 𝒟𝒾𝓈𝑒ñ𝑜</span>) combinando texto estilizado con frases sencillas en{' '}
                <Link href="/letras-para-instagram/letras-para-bio/" className="text-pink-400 hover:underline">
                  letras para bio
                </Link>.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-cyan-300 text-base flex items-center gap-2">
                <UserCheck className="w-4 h-4" /> Para Nombres Visibles
              </h3>
              <p className="text-sm text-slate-300">
                Puedes darle elegancia a tu nombre de perfil (ej. <span className="font-mono text-white">𝓢𝓸𝓯í𝓪 𝓜𝓪𝓻𝓽í𝓷𝓮𝓔</span>) mediante nuestras opciones de{' '}
                <Link href="/letras-para-instagram/letras-para-nombres/" className="text-pink-400 hover:underline">
                  letras para nombres
                </Link>.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-emerald-300 text-base flex items-center gap-2">
                <FileText className="w-4 h-4" /> Para Captions y Títulos
              </h3>
              <p className="text-sm text-slate-300">
                Usa cursivas al inicio de tu publicación como gancho visual (ej. <span className="font-mono text-white">𝓤𝓷 𝓭í𝓪 𝓹𝓪𝓻𝓪 𝓻𝓮𝓬𝓸𝓻𝓭𝓪𝓻 ✨</span>).
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-amber-300 text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Para Historias y Destacadas
              </h3>
              <p className="text-sm text-slate-300">
                Añade palabras cursivas cortas en las portadas de tus historias destacadas o stickers de texto.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Cursive Fonts */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Tipos de letras cursivas que puedes usar
          </h2>
          <p>
            No todas las tipografías cursivas transmiten la misma sensación visual. En nuestro conversor encontrarás varias categorías especializadas:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">1. Cursiva Elegante</h3>
              <p className="text-sm text-slate-300 mb-2">
                Trazos suaves y equilibrados, ideales para cuentas de moda, estética o marcas personales de lujo.
              </p>
              <p className="font-mono text-lg text-pink-400">𝓛𝓮𝓽𝓻𝓪𝓼 𝓑𝓸𝓷𝓲𝓽𝓪𝓼</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">2. Cursiva Caligráfica</h3>
              <p className="text-sm text-slate-300 mb-2">
                Estilo manuscrito fluido que imita la caligrafía a pluma tradicional.
              </p>
              <p className="font-mono text-lg text-cyan-400">𝒞𝓇𝑒𝒶𝓉𝒾𝓋𝒾𝒹𝒶𝒹 𝓎 𝒜𝓇𝓉𝑒</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">3. Cursiva en Negrita (Bold Script)</h3>
              <p className="text-sm text-slate-300 mb-2">
                Mayor peso visual, perfecta para títulos y llamados a la acción en la bio o publicaciones.
              </p>
              <p className="font-mono text-lg text-amber-400">𝓔𝓼𝓽𝓲𝓵𝓸 𝔂 𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵𝓲𝓭𝓪𝓭</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">4. Cursiva Decorada con Símbolos</h3>
              <p className="text-sm text-slate-300 mb-2">
                Combina palabras cursivas con estrellas o corazones de nuestra sección de{' '}
                <Link href="/letras-para-instagram/simbolos-para-instagram/" className="text-pink-400 hover:underline">
                  símbolos para Instagram
                </Link>.
              </p>
              <p className="font-mono text-lg text-purple-400">✦ 𝓗𝓸𝓵𝓪 ✨ ♡ 𝓜𝓲 𝓥𝓲𝓭𝓪 ♡</p>
            </div>
          </div>

          <CursiveShowcaseSection />
        </section>

        {/* Step-by-Step Copy/Paste Instructions */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Cómo poner letras cursivas en Instagram paso a paso
          </h2>
          <p>
            El procedimiento para aplicar cualquier fuente cursiva a tu cuenta es extremadamente sencillo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
                <Smartphone className="w-5 h-5" /> Desde el Celular (iOS / Android)
              </h3>
              <ol className="list-decimal list-inside space-y-2.5 text-slate-300 text-sm">
                <li>Abre el conversor de Letras Bonitas en el navegador de tu móvil.</li>
                <li>Escribe tu texto en la casilla de entrada.</li>
                <li>Selecciona el botón <strong>Copiar</strong> del estilo cursivo deseado.</li>
                <li>Entra a la aplicación de <strong>Instagram</strong>.</li>
                <li>Ve a tu perfil y selecciona <strong>Editar Perfil</strong>.</li>
                <li>Mantén presionado el campo de texto y pulsa <strong>Pegar</strong>.</li>
                <li>Guarda los cambios y verifica la visualización.</li>
              </ol>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <Type className="w-5 h-5" /> Desde la Computadora (Web)
              </h3>
              <ol className="list-decimal list-inside space-y-2.5 text-slate-300 text-sm">
                <li>Ingresa a nuestra web y escribe tu frase o palabra.</li>
                <li>Haz clic en <strong>Copiar</strong> o usa <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-xs border border-slate-700">Ctrl + C</kbd>.</li>
                <li>Abre <strong>instagram.com</strong> e inicia sesión.</li>
                <li>Haz clic en tu perfil y luego en <strong>Editar perfil</strong>.</li>
                <li>Pega el contenido con <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-xs border border-slate-700">Ctrl + V</kbd>.</li>
                <li>Haz clic en <strong>Enviar</strong> para aplicar.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Username vs Display Name Caveat Component */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Letras cursivas para nombres de Instagram
          </h2>
          <p>
            Es fundamental diferenciar entre el <strong>Nombre visible</strong> de tu cuenta y el <strong>Nombre de usuario (@handle)</strong>.
          </p>

          <UsernameAccuracySection />
        </section>

        {/* Accents and Ñ Handling */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Funcionan las letras cursivas con ñ y acentos?
          </h2>
          <p>
            Para los usuarios hispanohablantes de México y América Latina, esta es una duda clave.
          </p>
          <p>
            La respuesta es: depende del estilo exacto. El bloque original de caracteres alfanuméricos matemáticos de Unicode codifica principalmente el alfabeto latino básico sin tildes compuestas (A-Z, a-z).
          </p>

          <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/80 space-y-3">
            <h3 className="font-semibold text-white text-base">¿Qué ocurre con letras como Ñ o vocales acentuadas (Á, É, Í, Ó, Ú)?</h3>
            <p className="text-sm text-slate-300">
              En nuestro conversor inteligente de Letras Bonitas, cuando el mapa de caracteres del estilo no posee un glifo cursivo directo para una vocal acentuada o la letra <strong>Ñ</strong>, la herramienta conserva el carácter legible original o utiliza un carácter compatible de reemplazo, evitando que el texto se rompa.
            </p>
            <p className="text-xs text-slate-400">
              Recomendación: Si tu nombre contiene tildes (ej. <em>José, María, Sofía</em>), prueba varios estilos cursivos en nuestro generador para verificar cuál mantiene la mejor estética.
            </p>
          </div>
        </section>

        {/* Compatibility and Troubleshooting */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Por qué algunas letras cursivas no se ven correctamente?
          </h2>
          <p>
            A veces, al pegar un estilo cursivo puedes encontrarte con pequeños recuadros con signos de interrogación (<span className="font-mono text-rose-400">□</span> o <span className="font-mono text-rose-400"></span>).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 space-y-2">
              <h3 className="font-semibold text-rose-300 text-sm flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> Cuadrados sin Glifo
              </h3>
              <p className="text-xs text-slate-300">
                Ocurre en sistemas operativos o teléfonos antiguos que carecen del soporte de fuente para ese bloque Unicode específico (
                <a
                  href="https://www.unicode.org/faq/basic_q.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 underline"
                >
                  Unicode FAQ
                </a>
                ).
              </p>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 space-y-2">
              <h3 className="font-semibold text-amber-300 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Diferencias de App
              </h3>
              <p className="text-xs text-slate-300">
                Campos específicos de Instagram como el `@username` bloquean por seguridad cualquier código Unicode fuera del rango básico.
              </p>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 space-y-2">
              <h3 className="font-semibold text-emerald-300 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Solución Rápida
              </h3>
              <p className="text-xs text-slate-300">
                Si un estilo cursivo falla, selecciona una alternativa más limpia o combina palabras cursivas cortas con texto normal.
              </p>
            </div>
          </div>
        </section>

        {/* Comparative Table: Cursive Unicode vs Traditional Fonts */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Letras cursivas vs. fuentes tradicionales
          </h2>
          <p>
            Esta tabla resume la diferencia real entre el texto Unicode copiable y un archivo de fuente tipográfica tradicional:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Característica</th>
                  <th className="px-4 py-3">Letras Cursivas Unicode</th>
                  <th className="px-4 py-3">Fuente Tradicional (.TTF/.OTF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Se pueden copiar como texto</td>
                  <td className="px-4 py-3">Sí, directo al portapapeles</td>
                  <td className="px-4 py-3">No, requiere archivo o imagen</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Requiere instalación</td>
                  <td className="px-4 py-3">No, funciona de forma nativa</td>
                  <td className="px-4 py-3">Sí, en el sistema operativo</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Compatible con Instagram Bio</td>
                  <td className="px-4 py-3">Sí, en el nombre y presentación</td>
                  <td className="px-4 py-3">No en campos de texto plano</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Mecanismo técnico</td>
                  <td className="px-4 py-3">Mapa de caracteres alfanuméricos</td>
                  <td className="px-4 py-3">Archivo de diseño de glifos vectoriales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Selection Matrix Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Selección de estilo cursivo por propósito
          </h2>
          <p>
            Elige el tipo de letra cursiva ideal según la personalidad de tu perfil de Instagram:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Objetivo / Estilo de Cuenta</th>
                  <th className="px-4 py-3">Estilo Cursivo Recomendado</th>
                  <th className="px-4 py-3">Ejemplo de Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Elegante / Moda</td>
                  <td className="px-4 py-3 text-pink-300">Cursiva fina caligráfica</td>
                  <td className="px-4 py-3 font-mono text-xs">𝒮𝑜𝒻𝒾́𝒶 • 𝐹𝒶𝓈𝒽𝒾𝑜𝓃</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Personal Brand / Creador</td>
                  <td className="px-4 py-3 text-cyan-300">Cursiva en negrita (Bold Script)</td>
                  <td className="px-4 py-3 font-mono text-xs">𝓒𝓻𝓮𝓪𝓭𝓸𝓻 𝓓𝓲𝓰𝓲𝓽𝓪𝓵</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Aesthetic / Arte</td>
                  <td className="px-4 py-3 text-purple-300">Cursiva suave + símbolos</td>
                  <td className="px-4 py-3 font-mono text-xs">✦ 𝒮𝑜𝒻𝓉 𝒱𝒾𝒷𝑒𝓈 ✦</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Negocio / Profesional</td>
                  <td className="px-4 py-3 text-emerald-300">Cursiva discreta solo en encabezado</td>
                  <td className="px-4 py-3 font-mono text-xs">𝓕𝓸𝓽𝓸𝓰𝓻𝓪𝓯í𝓪 | CDMX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Preguntas frecuentes sobre letras cursivas para Instagram
          </h2>
          <p>
            Respuestas a las dudas más comunes sobre la generación y el copiado de fuentes cursivas en Instagram:
          </p>

          <CursiveFaqSection />
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-pink-900/30 via-purple-900/20 to-slate-900 border border-pink-500/20 rounded-2xl p-6 sm:p-8 space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Destaca tu perfil de Instagram con letras cursivas hoy
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Las letras cursivas para Instagram son la forma perfecta de transformar un perfil común en una presentación elegante y atractiva. Prueba nuestros conversores, copia tu estilo cursivo preferido y pégalo en segundos.
          </p>
          <div className="pt-2">
            <a
              href="#main-tool"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MousePointerClick className="w-5 h-5" />
              <span>Ir al Generador de Cursivas</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
