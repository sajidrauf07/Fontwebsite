import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FreeFireNameGenerator from '@/components/free-fire/FreeFireNameGenerator';
import FreeFireRandomGenerator from '@/components/free-fire/FreeFireRandomGenerator';
import FreeFireSymbolBuilder from '@/components/free-fire/FreeFireSymbolBuilder';
import FreeFireNameIdeasSection from '@/components/free-fire/FreeFireNameIdeasSection';
import FreeFireCompatibilitySection from '@/components/free-fire/FreeFireCompatibilitySection';
import FreeFireFaqSection from '@/components/free-fire/FreeFireFaqSection';
import { FREE_FIRE_FAQ_ITEMS } from '@/data/freeFireData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
  BookOpen,
  Zap,
  Flame,
  Search,
  Dices,
  ExternalLink,
  Table as TableIcon,
  ShieldAlert,
  Lightbulb,
  Gamepad2,
  Users,
  Swords,
  Crown,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nombres para Free Fire: Nicks Chidos para Copiar',
  description:
    'Crea nombres para Free Fire chidos, insanos y originales. Genera tu nick, usa símbolos, copia y pega y encuentra tu estilo ideal.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-free-fire/'
  },
  openGraph: {
    title: 'Nombres para Free Fire: Nicks Chidos para Copiar',
    description:
      'Genera nombres chidos, insanos y originales para Free Fire, personalízalos con letras y símbolos y copia tu nick en segundos.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Free Fire: Nicks Chidos para Copiar',
    description:
      'Copia nombres Pro, insanos, aesthetic y con símbolos para tu apodo de Free Fire al instante.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function NombresParaFreeFirePage() {
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
        name: 'Nombres para Free Fire',
        item: 'https://theletrasbonitas.com/nombres-para-free-fire/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FREE_FIRE_FAQ_ITEMS.map((faq) => ({
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
    headline: 'Nombres para Free Fire: crea y copia tu nick',
    description:
      'Guía definitiva y generador interactivo de nombres para Free Fire. Crea apodos insanos, chidos, tryhard y aesthetic con letras Unicode y símbolos para copiar y pegar.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire/',
    inLanguage: 'es-MX',
    publisher: {
      '@type': 'Organization',
      name: 'Letras Bonitas',
      url: 'https://theletrasbonitas.com/'
    }
  };

  return (
    <div className="silo-page">
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

      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Nombres para Free Fire</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Flame size={16} className="sparkle-icon" color="#F59E0B" />
            <span>Generador de Nicks Gamer, Símbolos Pro y Letras Especiales</span>
          </div>

          <h1 className="hero-h1">
            Nombres para Free Fire: crea y copia tu nick
          </h1>

          <p className="hero-tagline">
            Genera nombres chidos, insanos y originales para Free Fire, personalízalos con letras y símbolos y copia tu nick en segundos.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Compatibles con Free Fire Android / iOS</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Generador de 1 Clic</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Letras Unicode e Insanas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Generator Component */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6">
        <FreeFireNameGenerator />
      </div>

      {/* Main SEO Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 space-y-16 text-slate-300 leading-relaxed">
        {/* PAS Intro Section */}
        <section className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            ¿Buscas un nombre para Free Fire que se vea diferente, sea fácil de recordar y puedas copiar directamente? Elegir un buen nick no siempre es tan sencillo. Un nombre demasiado común puede pasar desapercibido, mientras que uno lleno de símbolos puede terminar viéndose mal o incluso ser rechazado por el juego.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            La buena noticia es que no tienes que empezar desde cero. En Letras Bonitas puedes buscar ideas, escribir tu propio nombre y probar diferentes estilos antes de decidir cuál quieres usar.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-medium text-pink-300">
            En esta guía encontrarás{' '}
            <Link href="/nombres-para-free-fire/nombres/" className="text-pink-400 underline hover:text-pink-300">
              nombres para Free Fire
            </Link>
            , estilos chidos,{' '}
            <Link href="/nombres-para-free-fire/nombres-insanos/" className="text-pink-400 underline hover:text-pink-300">
              nombres para Free Fire insanos
            </Link>
            , opciones aesthetic, ideas para{' '}
            <Link href="/nombres-para-free-fire/clanes/" className="text-pink-400 underline hover:text-pink-300">
              nombres para clanes
            </Link>{' '}
            y dúos,{' '}
            <Link href="/nombres-para-free-fire/simbolos/" className="text-pink-400 underline hover:text-pink-300">
              símbolos para Free Fire
            </Link>{' '}
            y consejos para crear un nick personalizado. Además, te explicamos qué son las letras Unicode y qué debes revisar antes de gastar una tarjeta de cambio de nombre o diamantes.
          </p>
        </section>

        {/* Section: Encuentra tu nombre para Free Fire */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Encuentra tu nombre para Free Fire
          </h2>
          <p>
            Un buen nombre para Free Fire no tiene que ser complicado. De hecho, muchas veces un nick corto y fácil de leer funciona mejor que uno con demasiados adornos.
          </p>
          <p>Piensa primero en la idea que quieres transmitir:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li><strong>¿Quieres un nombre serio?</strong> Puedes usar una palabra corta.</li>
            <li><strong>¿Prefieres algo llamativo?</strong> Agrega uno o dos símbolos.</li>
            <li><strong>¿Buscas un estilo gamer?</strong> Combina una palabra fuerte con una decoración sencilla.</li>
            <li><strong>¿Quieres algo más aesthetic?</strong> Utiliza letras estilizadas y pocos elementos.</li>
          </ul>

          <p>Por ejemplo, puedes partir de una palabra sencilla como:</p>
          <div className="flex flex-wrap gap-2 text-sm font-mono text-pink-300 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span>Sombra</span> • <span>Lobo</span> • <span>Fénix</span> • <span>Rayo</span> • <span>Nova</span> • <span>Trueno</span> • <span>Ángel</span> • <span>Eclipse</span> • <span>Niebla</span> • <span>Astro</span>
          </div>
          <p className="text-slate-400 text-sm">
            La ventaja de hacerlo así es que no dependes de un nombre genérico. Creas una base que tiene significado para ti y después la personalizas con las tipografías de nuestro sitio.
          </p>
        </section>

        {/* Section: Generador de Nombres */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Generador de nombres para Free Fire
          </h2>
          <p>
            Si ya tienes una palabra o apodo, la forma más rápida de crear un nick es utilizar un generador interactivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-semibold text-pink-400 text-base">Paso 1: Escribe tu base</h3>
              <p className="text-xs text-slate-300">
                Introduce tu nombre, apodo o palabra gamer en la caja de texto.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-semibold text-cyan-400 text-base">Paso 2: Explora estilos</h3>
              <p className="text-xs text-slate-300">
                Revisa variantes cursivas, góticas, negritas, pequeñas o con símbolos Pro.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-semibold text-emerald-400 text-base">Paso 3: Copia y Pega</h3>
              <p className="text-xs text-slate-300">
                Copia el resultado en 1 clic y pégalo directamente en Free Fire.
              </p>
            </div>
          </div>

          <p>
            Por ejemplo, una base como <span className="font-mono text-white">Sombra</span> puede convertirse en un estilo cursivo (<span className="font-mono text-pink-400">𝒮𝑜𝓂𝒷𝓇𝒶</span>), gótico (<span className="font-mono text-cyan-400">𝕾𝖔𝖒𝖇𝖗𝖆</span>), negrita (<span className="font-mono text-amber-400">𝐒𝐨𝐦𝐛𝐫𝐚</span>) o decorado (<span className="font-mono text-emerald-400">亗 Sombra 亗</span>). Así puedes comparar varias opciones antes de tomar una decisión.
          </p>

          <div className="space-y-6 pt-4">
            <FreeFireRandomGenerator />
            <FreeFireSymbolBuilder />
          </div>
        </section>

        {/* Section: Tipos de nombres */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Tipos de nombres para Free Fire
          </h2>
          <p>
            No todos buscan el mismo tipo de nick. Por eso conviene separar las ideas por estilo y personalidad de juego:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" /> Nombres Chidos
              </h3>
              <p className="text-sm text-slate-300">
                Buscan equilibrio entre personalidad y facilidad de lectura (ej. <span className="font-mono text-pink-300">♛ Nova ♛</span>, <span className="font-mono text-pink-300">彡 Ghost 彡</span>).
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" /> Nombres Insanos
              </h3>
              <p className="text-sm text-slate-300">
                Visualmente intensos y decorados con marcos y símbolos (ej. <span className="font-mono text-amber-300">꧁༺ 𝕾𝖍𝖆𝖉𝖔𝖜 ༻꧂</span>). Explora nuestra sección de{' '}
                <Link href="/nombres-para-free-fire/nombres-insanos/" className="text-pink-400 hover:underline">
                  nombres insanos
                </Link>.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Swords className="w-4 h-4 text-rose-400" /> Nombres Tryhard
              </h3>
              <p className="text-sm text-slate-300">
                Apariencia competitiva basada en palabras cortas como <em>Aim, Rush, Pro, Clutch, Ace, Flash</em>.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Nombres Aesthetic
              </h3>
              <p className="text-sm text-slate-300">
                Estilo suave y limpio utilizando palabras sobre espacio o naturaleza (ej. <span className="font-mono text-purple-300">✦ Luna ✦</span>, <span className="font-mono text-purple-300">♡ Aura ♡</span>).
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" /> Nombres para Dúos y Clanes
              </h3>
              <p className="text-sm text-slate-300">
                Nombres vinculados para parejas (ej. <em>Luna / Sol, Alpha / Omega</em>) o etiquetas de equipo. Consulta nuestras guías sobre{' '}
                <Link href="/nombres-para-free-fire/apodos/" className="text-pink-400 hover:underline">
                  apodos para Free Fire
                </Link>{' '}
                y{' '}
                <Link href="/nombres-para-free-fire/clanes/" className="text-pink-400 hover:underline">
                  nombres para clanes
                </Link>.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" /> Nombres para Mujer y Hombre
              </h3>
              <p className="text-sm text-slate-300">
                Bases femeninas (<em>Bella, Venus, Star, Nala</em>) y masculinas (<em>Draco, Wolf, King, Titan</em>) combinables en 1 clic.
              </p>
            </div>
          </div>

          <FreeFireNameIdeasSection />
        </section>

        {/* Section: Símbolos y Unicode Explanation */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Qué son las letras Unicode?
          </h2>
          <p>
            Cuando ves nombres con letras como <span className="font-mono text-pink-400">𝓛𝓾𝓷𝓪</span>, <span className="font-mono text-cyan-400">𝕾𝖍𝖆𝖉𝖔𝖜</span> o <span className="font-mono text-amber-400">𝐍𝐨𝐯𝐚</span>, no significa que hayas instalado una nueva fuente en tu celular.
          </p>
          <p>
            En muchos casos estás utilizando caracteres del estándar universal <strong>Unicode</strong> que poseen diferentes propiedades gráficas.
          </p>

          <div className="bg-slate-800/50 border-l-4 border-pink-500 p-5 rounded-r-xl space-y-3">
            <h3 className="text-white font-semibold text-base flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-pink-400" />
              Soporte de Unicode y Compatibilidad
            </h3>
            <p className="text-sm text-slate-300">
              Unicode es un estándar creado para permitir el intercambio y procesamiento de texto de diferentes idiomas y sistemas informáticos (
              <a
                href="https://www.unicode.org/standard/standard.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1"
              >
                <span>Unicode Standard</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              ).
            </p>
            <p className="text-sm text-slate-300">
              Una fuente tradicional cambia la apariencia de un carácter dentro de un programa. Un texto Unicode estilizado utiliza caracteres codificados que pueden copiarse como texto directo. Sin embargo, la representación final en pantalla la decide el motor del juego.
            </p>
          </div>
        </section>

        {/* Section: Why squares appear */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Por qué algunos nombres aparecen como cuadros?
          </h2>
          <p>
            Este es uno de los problemas más comunes al elegir un nick decorado. Puedes copiar un nombre que luce perfecto en el navegador y, al pegarlo dentro de Free Fire, ver un recuadro vacío (<span className="font-mono text-rose-400">□</span>).
          </p>
          <p>
            Esto ocurre cuando el sistema de renderizado del dispositivo o del juego no contiene la tipografía necesaria para mostrar ese carácter Unicode específico.
          </p>

          <FreeFireCompatibilitySection />
        </section>

        {/* Official Garena Nickname Change Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Cómo cambiar tu nombre en Free Fire
          </h2>
          <p>
            Según la documentación oficial de soporte de Garena Free Fire, el cambio de apodo o nickname se realiza directamente desde el perfil del jugador utilizando diamantes o una tarjeta de cambio de nombre (
            <a
              href="https://ffsoporte.garena.com/hc/es-419/articles/360031213052--C%C3%B3mo-cambio-mi-apodo-nickname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1"
            >
              <span>Soporte Oficial Garena Free Fire</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            ).
          </p>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-orange-400" />
              Procedimiento Oficial Paso a Paso:
            </h3>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-300 text-sm">
              <li>Abre la aplicación de <strong>Free Fire</strong> en tu celular.</li>
              <li>Toca tu foto o banner de perfil en la esquina superior izquierda.</li>
              <li>Toca el icono del lápiz o la tarjeta de edición junto a tu apodo actual.</li>
              <li>Pega el nuevo nick que generaste y copiaste en Letras Bonitas.</li>
              <li>Revisa la vista previa para confirmar que no existan cuadros vacíos (<span className="font-mono text-rose-400">□</span>).</li>
              <li>Confirma el cambio canjeando tu <strong>Tarjeta de cambio de nombre</strong> o abonando los diamantes requeridos.</li>
            </ol>
          </div>
        </section>

        {/* Matrix & Comparison Tables */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Ideas rápidas según tu estilo de juego
          </h2>
          <p>
            Tabla resumen con combinaciones de estilos y símbolos recomendados según tu objetivo en el juego:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Estilo</th>
                  <th className="px-4 py-3">Qué Buscar</th>
                  <th className="px-4 py-3">Ejemplo Recomendado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Chido</td>
                  <td className="px-4 py-3 text-pink-300">Palabra corta + marco básico</td>
                  <td className="px-4 py-3 font-mono text-xs">♛ Nova ♛</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Tryhard</td>
                  <td className="px-4 py-3 text-cyan-300">Palabra competitiva sin rodeos</td>
                  <td className="px-4 py-3 font-mono text-xs">⚡ AcePro ⚡</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Insano</td>
                  <td className="px-4 py-3 text-amber-300">Letras góticas + alas de clan</td>
                  <td className="px-4 py-3 font-mono text-xs">꧁༺ 𝕾𝖍𝖆𝖉𝖔𝖜 ༻꧂</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Aesthetic</td>
                  <td className="px-4 py-3 text-purple-300">Cursiva suave + estrellas</td>
                  <td className="px-4 py-3 font-mono text-xs">✦ 𝓛𝓾𝓷𝓪 ✦</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-white">Minimalista</td>
                  <td className="px-4 py-3 text-emerald-300">Apodo corto de 3 o 4 letras</td>
                  <td className="px-4 py-3 font-mono text-xs">亗 Neo 亗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparative Table: Unicode vs Fonts */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Letras para Free Fire vs. Fuentes Tradicionales
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Característica</th>
                  <th className="px-4 py-3">Nicks Unicode para Free Fire</th>
                  <th className="px-4 py-3">Fuentes Tradicionales (.TTF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Copiar y pegar directo</td>
                  <td className="px-4 py-3">Sí, como texto estándar</td>
                  <td className="px-4 py-3">No, requiere instalar tipografías</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Funciona en móviles</td>
                  <td className="px-4 py-3">Sí, en iOS y Android</td>
                  <td className="px-4 py-3">No en campos de texto de juegos</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Símbolos Pro (Alas, Coronas)</td>
                  <td className="px-4 py-3">Incluidos en la codificación</td>
                  <td className="px-4 py-3">Limitados al conjunto vectorial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Preguntas frecuentes sobre nombres para Free Fire
          </h2>
          <p>
            Respuestas a las dudas más habituales sobre la creación y modificación de apodos gamer:
          </p>

          <FreeFireFaqSection />
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-pink-900/30 via-purple-900/20 to-slate-900 border border-pink-500/20 rounded-2xl p-6 sm:p-8 space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Crea tu nick ideal para Free Fire ahora
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Encontrar buenos nombres para Free Fire no significa copiar el nick más cargado de internet. La mejor estrategia es escribir una palabra que te identifique, probar estilos Unicode en nuestro generador, agregar símbolos Pro y copiar tu apodo preferido en un clic.
          </p>
          <div className="pt-2">
            <a
              href="#main-tool"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MousePointerClick className="w-5 h-5" />
              <span>Ir al Generador de Nombres</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
