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
  ReadingProgress,
  ExamplePreviewCard,
  CopyButton,
  TipBox,
  InfoBox,
  WarningBox,
  StepGuide,
  StepItem,
  ToolCTA
} from '@/components/article';
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
  Heart,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nombres para Free Fire: Nicks Chidos para Copiar',
  description:
    'Crea nombres para Free Fire chidos, insanos y originales. Genera tu nick, usa símbolos, copia y pega y encuentra tu estilo ideal.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-free-fire'
  },
  openGraph: {
    title: 'Nombres para Free Fire: Nicks Chidos para Copiar',
    description:
      'Genera nombres chidos, insanos y originales para Free Fire, personalízalos con letras y símbolos y copia tu nick en segundos.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire',
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
    url: 'https://theletrasbonitas.com/nombres-para-free-fire',
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6" id="generador-nicks">
        <FreeFireNameGenerator />
      </div>

      {/* Main SEO Article Content */}
      <article className="article-prose-container max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-slate-300 leading-relaxed">
        <ReadingProgress />
        
        {/* PAS Intro Header */}
        <header className="article-intro-header">
          <div className="article-category-pill">
            <Flame size={14} className="text-orange-400" aria-hidden="true" />
            <span>Guía Gamer y Generador</span>
          </div>

          <h2 className="article-h2">
            Nombres para Free Fire: Crea, Personaliza y Copia tu Nick
          </h2>

          <p className="article-lead-paragraph">
            ¿Buscas un nombre para Free Fire que se vea diferente, sea fácil de recordar y puedas copiar directamente? Elegir un buen nick no siempre es tan sencillo. Un nombre demasiado común puede pasar desapercibido, mientras que uno lleno de símbolos puede terminar viéndose mal o incluso ser rechazado por el juego.
          </p>

          <p className="article-paragraph">
            La buena noticia es que no tienes que empezar desde cero. En Letras Bonitas puedes buscar ideas, escribir tu propio nombre y probar diferentes estilos antes de decidir cuál quieres usar.
          </p>

          <TipBox title="Explora todas las opciones para Free Fire">
            En esta guía encontrarás{' '}
            <Link href="/nombres-para-free-fire/nombres" className="text-pink-400 underline hover:text-pink-300 font-semibold">
              nombres para Free Fire
            </Link>
            , estilos chidos,{' '}
            <Link href="/nombres-para-free-fire/nombres-insanos" className="text-pink-400 underline hover:text-pink-300 font-semibold">
              nombres para Free Fire insanos
            </Link>
            , opciones aesthetic, ideas para{' '}
            <Link href="/nombres-para-free-fire/clanes" className="text-pink-400 underline hover:text-pink-300 font-semibold">
              nombres para clanes
            </Link>{' '}
            y dúos,{' '}
            <Link href="/nombres-para-free-fire/simbolos" className="text-pink-400 underline hover:text-pink-300 font-semibold">
              símbolos para Free Fire
            </Link>{' '}
            y consejos para crear un nick personalizado. Además, te explicamos qué son las letras Unicode y qué debes revisar antes de gastar una tarjeta de cambio de nombre o diamantes.
          </TipBox>

          {/* Table of Contents for easy scanning */}
        </header>

        <hr className="article-section-divider" />

        {/* Section: Encuentra tu nombre para Free Fire */}
        <section id="encuentra-tu-nombre">
          <div className="article-category-pill">
            <Search size={14} className="text-sky-400" aria-hidden="true" />
            <span>Inspiración de Nick</span>
          </div>

          <h2 className="article-h2">
            Encuentra tu nombre para Free Fire
          </h2>
          <p className="article-lead-paragraph">
            Un buen nombre para Free Fire no tiene que ser complicado. De hecho, muchas veces un nick corto y fácil de leer funciona mejor que uno con demasiados adornos.
          </p>
          <p className="article-paragraph">
            Piensa primero en la idea que quieres transmitir:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <strong className="text-white block mb-1">¿Quieres un nombre serio?</strong>
              <span className="text-slate-400 text-xs">Puedes usar una palabra corta contundente.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <strong className="text-white block mb-1">¿Prefieres algo llamativo?</strong>
              <span className="text-slate-400 text-xs">Agrega uno o dos símbolos como coronas o alas.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <strong className="text-white block mb-1">¿Buscas un estilo gamer?</strong>
              <span className="text-slate-400 text-xs">Combina una palabra fuerte con una decoración sencilla.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <strong className="text-white block mb-1">¿Quieres algo más aesthetic?</strong>
              <span className="text-slate-400 text-xs">Utiliza letras cursivas estilizadas y pocos elementos.</span>
            </div>
          </div>

          <p className="article-paragraph">
            Por ejemplo, puedes partir de una palabra sencilla como:
          </p>
          <div className="flex flex-wrap gap-2 text-sm font-mono text-pink-300 bg-slate-950/80 p-4 rounded-xl border border-slate-800 my-4">
            <span>Sombra</span> • <span>Lobo</span> • <span>Fénix</span> • <span>Rayo</span> • <span>Nova</span> • <span>Trueno</span> • <span>Ángel</span> • <span>Eclipse</span> • <span>Niebla</span> • <span>Astro</span>
          </div>
          <p className="text-slate-400 text-sm italic">
            La ventaja de hacerlo así es que no dependes de un nombre genérico. Creas una base que tiene significado para ti y después la personalizas con las tipografías de nuestro sitio.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* Section: Generador de Nombres */}
        <section id="generador-de-nombres">
          <div className="article-category-pill">
            <Gamepad2 size={14} className="text-emerald-400" aria-hidden="true" />
            <span>Paso a Paso</span>
          </div>

          <h2 className="article-h2">
            Generador de nombres para Free Fire
          </h2>
          <p className="article-paragraph">
            Si ya tienes una palabra o apodo, la forma más rápida de crear un nick es utilizar un generador interactivo. Sigue estos 3 sencillos pasos:
          </p>

          <StepGuide>
            <StepItem
              number="01"
              label="PASO 1"
              title="Escribe tu base"
              description="Introduce tu nombre, apodo o palabra gamer en la caja de texto del generador."
            />
            <StepItem
              number="02"
              label="PASO 2"
              title="Explora estilos"
              description="Revisa variantes cursivas, góticas, negritas, pequeñas o con símbolos Pro compatibles."
            />
            <StepItem
              number="03"
              label="PASO 3"
              title="Copia y Pega"
              description="Copia el resultado en 1 clic y pégalo directamente en tu perfil de Free Fire."
            />
          </StepGuide>

          <p className="article-paragraph mt-6">
            Por ejemplo, una base como <span className="font-mono text-white font-bold">Sombra</span> puede convertirse en un estilo cursivo (<span className="font-mono text-pink-400">𝒮𝑜𝓂𝒷𝓇𝒶</span>), gótico (<span className="font-mono text-cyan-400">𝕾𝖔𝖒𝖇𝖗𝖆</span>), negrita (<span className="font-mono text-amber-400">𝐒𝐨𝐦𝐛𝐫𝐚</span>) o decorado (<span className="font-mono text-emerald-400">亗 Sombra 亗</span>). Así puedes comparar varias opciones antes de tomar una decisión.
          </p>

          <div className="space-y-6 pt-4">
            <FreeFireRandomGenerator />
            <FreeFireSymbolBuilder />
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section: Tipos de nombres */}
        <section id="tipos-de-nombres">
          <div className="article-category-pill">
            <Crown size={14} className="text-amber-400" aria-hidden="true" />
            <span>Categorías y Variedades</span>
          </div>

          <h2 className="article-h2">
            Tipos de nombres para Free Fire
          </h2>
          <p className="article-paragraph">
            No todos buscan el mismo tipo de nick. Por eso conviene separar las ideas por estilo y personalidad de juego:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 transition-colors space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" /> Nombres Chidos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Buscan equilibrio entre personalidad y facilidad de lectura (ej. <span className="font-mono text-pink-300">♛ Nova ♛</span>, <span className="font-mono text-pink-300">彡 Ghost 彡</span>).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 transition-colors space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" /> Nombres Insanos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Visualmente intensos y decorados con marcos y símbolos (ej. <span className="font-mono text-amber-300">꧁༺ 𝕾𝖍𝖆𝖉𝖔𝖜 ༻꧂</span>). Explora nuestra sección de{' '}
                <Link href="/nombres-para-free-fire/nombres-insanos" className="text-pink-400 hover:underline font-semibold">
                  nombres insanos
                </Link>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-rose-500/40 transition-colors space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Swords className="w-4 h-4 text-rose-400" /> Nombres Tryhard
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Apariencia competitiva basada en palabras cortas como <em>Aim, Rush, Pro, Clutch, Ace, Flash</em>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-purple-500/40 transition-colors space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Nombres Aesthetic
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estilo suave y limpio utilizando palabras sobre espacio o naturaleza (ej. <span className="font-mono text-purple-300">✦ Luna ✦</span>, <span className="font-mono text-purple-300">♡ Aura ♡</span>).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 transition-colors space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" /> Nombres para Dúos y Clanes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nombres vinculados para parejas (ej. <em>Luna / Sol, Alpha / Omega</em>) o etiquetas de equipo. Consulta nuestras guías sobre{' '}
                <Link href="/nombres-para-free-fire/apodos" className="text-pink-400 hover:underline font-semibold">
                  apodos para Free Fire
                </Link>{' '}
                y{' '}
                <Link href="/nombres-para-free-fire/clanes" className="text-pink-400 hover:underline font-semibold">
                  nombres para clanes
                </Link>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-pink-500/40 transition-colors space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" /> Nombres para Mujer y Hombre
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bases femeninas (<em>Bella, Venus, Star, Nala</em>) y masculinas (<em>Draco, Wolf, King, Titan</em>) combinables en 1 clic.
              </p>
            </div>
          </div>

          <FreeFireNameIdeasSection />
        </section>

        <hr className="article-section-divider" />

        {/* Section: Símbolos y Unicode Explanation */}
        <section id="que-son-unicode">
          <div className="article-category-pill">
            <BookOpen size={14} className="text-pink-400" aria-hidden="true" />
            <span>Estándar Unicode</span>
          </div>

          <h2 className="article-h2">
            ¿Qué son las letras Unicode?
          </h2>
          <p className="article-paragraph">
            Cuando ves nombres con letras como <span className="font-mono text-pink-400">𝓛𝓾𝓷𝓪</span>, <span className="font-mono text-cyan-400">𝕾𝖍𝖆𝖉𝖔𝖜</span> o <span className="font-mono text-amber-400">𝐍𝐨𝐯𝐚</span>, no significa que hayas instalado una nueva fuente en tu celular.
          </p>
          <p className="article-paragraph">
            En muchos casos estás utilizando caracteres del estándar universal <strong>Unicode</strong> que poseen diferentes propiedades gráficas.
          </p>

          <InfoBox title="Soporte de Unicode y Compatibilidad">
            <p className="mb-2">
              Unicode es un estándar creado para permitir el intercambio y procesamiento de texto de diferentes idiomas y sistemas informáticos (
              <a
                href="https://www.unicode.org/standard/standard.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1 font-semibold"
              >
                <span>Unicode Standard</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              ).
            </p>
            <p>
              Una fuente tradicional cambia la apariencia de un carácter dentro de un programa. Un texto Unicode estilizado utiliza caracteres codificados que pueden copiarse como texto directo. Sin embargo, la representación final en pantalla la decide el motor del juego.
            </p>
          </InfoBox>
        </section>

        <hr className="article-section-divider" />

        {/* Section: Why squares appear */}
        <section id="cuadros-compatibilidad">
          <div className="article-category-pill">
            <ShieldAlert size={14} className="text-rose-400" aria-hidden="true" />
            <span>Compatibilidad y Renderizado</span>
          </div>

          <h2 className="article-h2">
            ¿Por qué algunos nombres aparecen como cuadros?
          </h2>
          <p className="article-paragraph">
            Este es uno de los problemas más comunes al elegir un nick decorado. Puedes copiar un nombre que luce perfecto en el navegador y, al pegarlo dentro de Free Fire, ver un recuadro vacío (<span className="font-mono text-rose-400">□</span>).
          </p>
          <p className="article-paragraph">
            Esto ocurre cuando el sistema de renderizado del dispositivo o del juego no contiene la tipografía necesaria para mostrar ese carácter Unicode específico.
          </p>

          <WarningBox title="Cómo evitar recuadros vacíos (□) en tu nick">
            Si notas que un símbolo o tipografía no se visualiza bien en tu teléfono, prueba seleccionando símbolos clásicos de alta compatibilidad (como estrellas ★, coronas 亗 o corchetes 『』) o estilos cursivos estándar. Siempre prueba la vista previa dentro del juego antes de confirmar el gasto de diamantes o tarjeta.
          </WarningBox>

          <FreeFireCompatibilitySection />
        </section>

        <hr className="article-section-divider" />

        {/* Official Garena Nickname Change Guide */}
        <section id="como-cambiar">
          <div className="article-category-pill">
            <CheckCircle2 size={14} className="text-cyan-400" aria-hidden="true" />
            <span>Tutorial Oficial</span>
          </div>

          <h2 className="article-h2">
            Cómo cambiar tu nombre en Free Fire
          </h2>
          <p className="article-paragraph">
            Según la documentación oficial de soporte de Garena Free Fire, el cambio de apodo o nickname se realiza directamente desde el perfil del jugador utilizando diamantes o una tarjeta de cambio de nombre (
            <a
              href="https://ffsoporte.garena.com/hc/es-419/articles/360031213052--C%C3%B3mo-cambio-mi-apodo-nickname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1 font-semibold"
            >
              <span>Soporte Oficial Garena Free Fire</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            ).
          </p>

          <StepGuide>
            <StepItem
              number="01"
              label="PASO 1"
              title="Abre el juego"
              description="Abre la aplicación de Free Fire en tu celular."
            />
            <StepItem
              number="02"
              label="PASO 2"
              title="Ve a tu perfil"
              description="Toca tu foto o banner de perfil en la esquina superior izquierda de la pantalla."
            />
            <StepItem
              number="03"
              label="PASO 3"
              title="Toca editar"
              description="Toca el icono del lápiz o la tarjeta de edición junto a tu apodo actual."
            />
            <StepItem
              number="04"
              label="PASO 4"
              title="Pega tu nuevo nick"
              description="Pega el nuevo nick que generaste y copiaste en Letras Bonitas."
            />
            <StepItem
              number="05"
              label="PASO 5"
              title="Revisa la vista previa"
              description="Revisa con atención la vista previa para confirmar que no existan cuadros vacíos (□)."
            />
            <StepItem
              number="06"
              label="PASO 6"
              title="Confirma el cambio"
              description="Confirma el cambio canjeando tu Tarjeta de cambio de nombre o abonando los diamantes requeridos."
            />
          </StepGuide>
        </section>

        <hr className="article-section-divider" />

        {/* Matrix & Comparison Tables */}
        <section id="ideas-rapidas">
          <div className="article-category-pill">
            <TableIcon size={14} className="text-violet-400" aria-hidden="true" />
            <span>Resumen Rápido</span>
          </div>

          <h2 className="article-h2">
            Ideas rápidas según tu estilo de juego
          </h2>
          <p className="article-paragraph">
            Tabla resumen con combinaciones de estilos y símbolos recomendados según tu objetivo en el juego:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4 shadow-sm">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Estilo</th>
                  <th className="px-4 py-3">Qué Buscar</th>
                  <th className="px-4 py-3">Ejemplo Recomendado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Chido</td>
                  <td className="px-4 py-3 text-pink-300">Palabra corta + marco básico</td>
                  <td className="px-4 py-3 font-mono text-xs">♛ Nova ♛</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Tryhard</td>
                  <td className="px-4 py-3 text-cyan-300">Palabra competitiva sin rodeos</td>
                  <td className="px-4 py-3 font-mono text-xs">⚡ AcePro ⚡</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Insano</td>
                  <td className="px-4 py-3 text-amber-300">Letras góticas + alas de clan</td>
                  <td className="px-4 py-3 font-mono text-xs">꧁༺ 𝕾𝖍𝖆𝖉𝖔𝖜 ༻꧂</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Aesthetic</td>
                  <td className="px-4 py-3 text-purple-300">Cursiva suave + estrellas</td>
                  <td className="px-4 py-3 font-mono text-xs">✦ 𝓛𝓾𝓷𝓪 ✦</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Minimalista</td>
                  <td className="px-4 py-3 text-emerald-300">Apodo corto de 3 o 4 letras</td>
                  <td className="px-4 py-3 font-mono text-xs">亗 Neo 亗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Comparative Table: Unicode vs Fonts */}
        <section id="unicode-vs-fuentes">
          <div className="article-category-pill">
            <BookOpen size={14} className="text-indigo-400" aria-hidden="true" />
            <span>Comparativa Técnica</span>
          </div>

          <h2 className="article-h2">
            Letras para Free Fire vs. Fuentes Tradicionales
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4 shadow-sm">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Característica</th>
                  <th className="px-4 py-3">Nicks Unicode para Free Fire</th>
                  <th className="px-4 py-3">Fuentes Tradicionales (.TTF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-pink-300">Copiar y pegar directo</td>
                  <td className="px-4 py-3">Sí, como texto estándar</td>
                  <td className="px-4 py-3">No, requiere instalar tipografías</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-pink-300">Funciona en móviles</td>
                  <td className="px-4 py-3">Sí, en iOS y Android</td>
                  <td className="px-4 py-3">No en campos de texto de juegos</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-pink-300">Símbolos Pro (Alas, Coronas)</td>
                  <td className="px-4 py-3">Incluidos en la codificación</td>
                  <td className="px-4 py-3">Limitados al conjunto vectorial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TOOL CTA */}
        <div className="my-10">
          <ToolCTA
            title="¿Listo para crear tu Nick Pro de Free Fire?"
            description="Genera apodos insanos, chidos y con símbolos compatibles en segundos y cópialos con un solo clic."
            buttonText="Subir al Generador de Free Fire"
            targetId="generador-nicks"
          />
        </div>

        <hr className="article-section-divider" />

        {/* FAQ Accordion Section */}
        <section id="faq">
          <div className="article-category-pill">
            <HelpCircle size={14} className="text-amber-400" aria-hidden="true" />
            <span>Dudas Frecuentes</span>
          </div>

          <h2 className="article-h2">
            Preguntas frecuentes sobre nombres para Free Fire
          </h2>
          <p className="article-paragraph">
            Respuestas a las dudas más habituales sobre la creación y modificación de apodos gamer:
          </p>

          <FreeFireFaqSection />
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-pink-900/30 via-purple-900/20 to-slate-900 border border-pink-500/20 rounded-2xl p-6 sm:p-8 space-y-4 text-center mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Crea tu nick ideal para Free Fire ahora
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Encontrar buenos nombres para Free Fire no significa copiar el nick más cargado de internet. La mejor estrategia es escribir una palabra que te identifique, probar estilos Unicode en nuestro generador, agregar símbolos Pro y copiar tu apodo preferido en un clic.
          </p>
          <div className="pt-2">
            <a
              href="#generador-nicks"
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
