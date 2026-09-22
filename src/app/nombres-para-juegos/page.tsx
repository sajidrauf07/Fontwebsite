import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import { JUEGOS_FAQ_ITEMS } from '@/data/gameNamesData';
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
  Gamepad2,
  Sparkles,
  Crown,
  Zap,
  Swords,
  ChevronRight,
  CheckCircle2,
  Search,
  ShieldAlert,
  Lightbulb,
  ExternalLink,
  Users,
  Flame,
  Star,
  Check,
  HelpCircle,
  Dices,
  Layers,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nombres para Juegos: Nicks Chidos para Copiar y Crear',
  description:
    'Crea nombres para juegos con nuestro generador. Encuentra nicks gamer, aesthetic, cortos y chidos para copiar, personalizar y probar.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-juegos/'
  },
  openGraph: {
    title: 'Nombres para Juegos: Nicks Chidos para Copiar y Crear',
    description:
      'Crea nombres para juegos con nuestro generador. Encuentra nicks gamer, aesthetic, cortos y chidos para copiar, personalizar y probar.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Juegos: Nicks Chidos para Copiar y Crear',
    description:
      'Generador de nombres para juegos: crea nicks gamer, aesthetic, pro y de clanes listos para copiar y pegar.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function NombresParaJuegosPage() {
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
        name: 'Nombres para Juegos',
        item: 'https://theletrasbonitas.com/nombres-para-juegos/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: JUEGOS_FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generador de Nombres para Juegos',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Herramienta interactiva para generar nombres, nicks y apodos gamer personalizados con estilos Unicode y símbolos.'
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nombres para Juegos: Nicks Chidos para Copiar y Crear',
    description:
      'Guía completa y generador interactivo de nombres para juegos. Aprende a crear nicks gamer, aesthetic, elegantes y competitivos con símbolos y caracteres Unicode.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
          <span className="breadcrumb-current">Nombres para Juegos</span>
        </div>
      </nav>

      {/* Hero Section - Tool Centric First Viewport */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Gamepad2 size={16} className="sparkle-icon" color="#818CF8" />
            <span>Generador de Nicks Gamer, Símbolos y Apodos Épicos</span>
          </div>

          <h1 className="hero-h1">
            Nombres para Juegos: Nicks Chidos para Copiar y Crear
          </h1>

          <p className="hero-tagline">
            ¿Buscas un nombre para juegos que se vea bien, sea fácil de recordar y represente tu estilo? Aquí puedes crear tu propio nick en segundos.
          </p>

          <p className="text-slate-300 text-sm max-w-2xl mx-auto -mt-2 mb-4 leading-relaxed">
            Escribe una palabra o apodo, elige un estilo y genera diferentes opciones listas para copiar y pegar. Puedes probar nombres gamer, aesthetic, elegantes, cortos, divertidos, competitivos y muchas otras combinaciones. Si todavía no tienes una idea, también puedes generar opciones sin escribir una palabra.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>10 Estilos Exclusivos</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Copiado Rápido en 1 Clic</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Compatibilidad Multiplataforma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Generator Tool in First Viewport */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6">
        <GameNameGenerator />
      </div>

      {/* Main Article Content */}
      <article className="article-prose-container max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-slate-300 leading-relaxed">
        <ReadingProgress />

        {/* Section 1: Explicación del Generador */}
        <section id="sobre-el-generador">
          <div className="article-category-pill">
            <Sparkles size={14} className="text-indigo-400" aria-hidden="true" />
            <span>Herramienta en Vivo</span>
          </div>

          <h2 className="article-h2">
            Generador de Nombres para Juegos
          </h2>

          <p className="article-lead-paragraph">
            Crea tu nick personalizado usando una palabra que te guste. Solo necesitas introducir tu apodo base o nombre y elegir una de nuestras categorías temáticas.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 my-6 space-y-3">
            <h3 className="text-white font-bold text-sm flex items-center gap-2">
              <Lightbulb size={16} className="text-amber-400" />
              ¿Cómo funciona?
            </h3>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li>
                <strong>Escribe tu nombre o palabra:</strong> Ejemplo: <em>Nova, Luna, Rayo, Nexo</em>.
              </li>
              <li>
                <strong>Elige un estilo:</strong> Gamer, Aesthetic, Pro, Elegante, Fantasía, Gracioso, Oscuro, Minimalista, Competitivo o Clan.
              </li>
              <li>
                <strong>Pulsa "Generar nombres" o "Otra tanda":</strong> Obtendrás decenas de opciones con sufijos, prefijos, combinaciones y símbolos.
              </li>
              <li>
                <strong>Pulsa Copiar:</strong> Cuando encuentres una que te guste, pulsa Copiar y podrás pegarla donde quieras.
              </li>
            </ul>
          </div>

          <TipBox title="¿No sabes qué escribir?">
            <p>
              No pasa nada. Puedes dejar el campo vacío y explorar ideas generadas por estilo.
            </p>
            <p className="mt-2">
              También puedes empezar con una palabra muy sencilla como{' '}
              <span className="font-mono text-pink-300">Nova</span>,{' '}
              <span className="font-mono text-pink-300">Luna</span>,{' '}
              <span className="font-mono text-pink-300">Nexo</span>,{' '}
              <span className="font-mono text-pink-300">Rayo</span>,{' '}
              <span className="font-mono text-pink-300">Astro</span>,{' '}
              <span className="font-mono text-pink-300">Zen</span>,{' '}
              <span className="font-mono text-pink-300">Fénix</span>,{' '}
              <span className="font-mono text-pink-300">Aura</span>,{' '}
              <span className="font-mono text-pink-300">Vortex</span> o{' '}
              <span className="font-mono text-pink-300">Pixel</span>. Una palabra corta suele ser una buena base porque deja más espacio para personalizar el resultado.
            </p>
          </TipBox>
        </section>

        <hr className="article-section-divider" />

        {/* Section 2: Nombres para Juegos para Copiar y Pegar */}
        <section id="nombres-para-copiar-y-pegar">
          <div className="article-category-pill">
            <Crown size={14} className="text-amber-400" aria-hidden="true" />
            <span>Inspiración Rápida</span>
          </div>

          <h2 className="article-h2">
            Nombres para Juegos para Copiar y Pegar
          </h2>

          <p className="article-paragraph">
            Si necesitas una idea rápida, aquí tienes algunas opciones que puedes utilizar como inspiración directa para tus partidas:
          </p>

          {/* Subsección: Nombres Cortos */}
          <div className="my-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" /> Nombres cortos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Los nombres cortos son fáciles de escribir y recordar. Además, suelen darte más espacio si después quieres añadir un símbolo o algún detalle visual.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {['Nox', 'Nova', 'Zyn', 'Kiro', 'Ryu', 'Nexo', 'Vex', 'Zen', 'Kael', 'Lux', 'Ziro', 'Ares', 'Nyx', 'Raze', 'Vanta'].map((item) => (
                <div key={item} className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-mono font-bold text-indigo-300">{item}</span>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Subsección: Nombres Gamer */}
          <div className="my-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-indigo-400" /> Nombres gamer
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Puedes utilizar estas ideas directamente o tomar una como punto de partida para crear una versión personalizada:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {['NovaX', 'NexoRush', 'RayoZen', 'TitanNova', 'VortexX', 'AstroNex', 'ShadowZen', 'PixelRush', 'NovaCore', 'RayoNox', 'ZeroNova', 'NexoPrime', 'VantaX', 'AstroVex', 'ZenRush'].map((item) => (
                <div key={item} className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-mono font-bold text-emerald-300">{item}</span>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Subsección: Nombres Aesthetic */}
          <div className="my-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> Nombres aesthetic
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Si prefieres una identidad más limpia y visual, prueba combinaciones sencillas. No necesitas llenar el nombre de símbolos para conseguir un resultado atractivo. Una palabra sencilla puede funcionar muy bien por sí sola:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {['LunaAura', 'NovaLuna', 'AuraNexa', 'SoftNova', 'LunaZen', 'NubeNova', 'AuraSky', 'NovaBloom', 'BrumaZen', 'LunaVibe', 'NexoAura', 'AstroLuna'].map((item) => (
                <div key={item} className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-mono font-bold text-purple-300">{item}</span>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Subsección: Nombres Elegantes */}
          <div className="my-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" /> Nombres elegantes
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Para un estilo más limpio y sofisticado, una buena combinación normalmente utiliza una o dos palabras fuertes en lugar de mezclar demasiados elementos:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {['NovaElite', 'LunaRoyal', 'NexoLux', 'AuraPrime', 'ZenRoyal', 'NovaCrown', 'LuxNova', 'EliteNex', 'RoyalZen', 'NovaPrestige'].map((item) => (
                <div key={item} className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-mono font-bold text-amber-300">{item}</span>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Subsección: Nombres Graciosos */}
          <div className="my-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-400" /> Nombres graciosos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Si juegas con amigos, un nombre divertido puede darle personalidad a tu perfil sin necesidad de recurrir a caracteres complicados:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {['CasiPro', 'NoEraYo', 'PingAlto', 'ModoSiesta', 'PanConLag', 'CeroDrama', 'OtroIntento', 'CasiGano', 'SinPrisa', 'DonDespiste', 'UyPerdón', 'ModoRelax'].map((item) => (
                <div key={item} className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-mono font-bold text-rose-300">{item}</span>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section 3: Cómo crear un buen nombre para juegos */}
        <section id="como-crear">
          <div className="article-category-pill">
            <Lightbulb size={14} className="text-amber-400" aria-hidden="true" />
            <span>Guía de Diseño</span>
          </div>

          <h2 className="article-h2">
            Cómo crear un buen nombre para juegos
          </h2>

          <p className="article-paragraph">
            Crear un nick no significa simplemente juntar dos palabras al azar. Una buena idea debe funcionar visualmente y ser fácil de reconocer por tus compañeros y rivales.
          </p>

          <StepGuide>
            <StepItem
              number="01"
              label="PASO 1"
              title="Empieza con una palabra que te guste"
              description="Piensa en una palabra relacionada con tu personalidad, estilo o intereses: un apodo, una palabra corta, un animal, un concepto o un lugar ficticio. Por ejemplo, si eliges Nova, puedes convertirla en NovaX, NovaZen o 亗Nova亗."
            />
            <StepItem
              number="02"
              label="PASO 2"
              title="Elige un estilo definido"
              description="El estilo cambia completamente la apariencia: minimalista (Nova), gamer (NovaX), decorado (『Nova』), aesthetic (NovaAura) o divertido (CasiNova). Elige primero la sensación y luego modifica."
            />
            <StepItem
              number="03"
              label="PASO 3"
              title="No utilices demasiados símbolos"
              description="Los símbolos pueden hacer que un nombre destaque, pero demasiados pueden dificultar su lectura. Una estructura sencilla como ★Nova★ suele ser mucho más legible que una combinación excesivamente cargada."
            />
            <StepItem
              number="04"
              label="PASO 4"
              title="Comprueba el resultado antes de confirmarlo"
              description="Pega el nombre copiado en el campo de tu juego para asegurarte de que no aparezcan cuadros vacíos (□), que no supere el límite de caracteres y que se lea nítido en el lobby."
            />
          </StepGuide>

          <WarningBox title="Comprobación de compatibilidad en tu plataforma">
            Cada juego cuenta con filtros y restricciones de texto propias. Por ejemplo, títulos como Minecraft, Valorant, League of Legends o Roblox manejan sistemas de compatibilidad diferentes a los de juegos móviles. Siempre comprueba el resultado en el juego antes de gastar tarjetas o monedas de cambio.
          </WarningBox>
        </section>

        <hr className="article-section-divider" />

        {/* Section 4: Nombres para Juegos según tu estilo */}
        <section id="segun-tu-estilo">
          <div className="article-category-pill">
            <Layers size={14} className="text-cyan-400" aria-hidden="true" />
            <span>Categorías Detalladas</span>
          </div>

          <h2 className="article-h2">
            Nombres para Juegos según tu estilo
          </h2>

          <p className="article-paragraph">
            No todos buscan el mismo tipo de nick. Elegir una categoría antes de generar nombres puede ayudarte a encontrar una opción más rápido:
          </p>

          <div className="space-y-6 my-6">
            {/* Gamer y Competitivos */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-base flex items-center gap-2 mb-2">
                <Swords className="w-4 h-4 text-emerald-400" /> Nombres gamer y competitivos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                Los nombres gamer suelen buscar una apariencia directa y memorable. Puedes combinar conceptos como <em>Nova, Rush, Zero, Nexo, Titan, Astro, Prime, Vortex, Pulse</em> o <em>Shadow</em>:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-emerald-300">
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">NovaRush</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">TitanZero</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">NexoPrime</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">AstroVex</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">VortexNova</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">ZeroPulse</span>
              </div>
            </div>

            {/* Aesthetic */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-base flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Nombres aesthetic
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                Suelen utilizar palabras suaves, limpias o visualmente agradables como <em>Luna, Aura, Nova, Bloom, Sky, Zen, Mist, Nube, Star, Velvet</em>:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-purple-300">
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">LunaAura</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">NovaBloom</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">SkyNexa</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">AuraZen</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">LunaMist</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">NovaSky</span>
              </div>
            </div>

            {/* Cortos */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-base flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-amber-400" /> Nombres cortos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                Si prefieres algo sencillo, prueba con una palabra de pocas letras (<em>Nox, Vex, Zen, Lux, Ryu, Zyn, Kiro, Nexo, Nyx, Ziro</em>). Si están ocupados, añade una variación mínima:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-amber-300">
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">NoxX</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Nexo7</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">ZynX</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">KiroZen</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">LuxNova</span>
              </div>
            </div>

            {/* Equipos y Clanes */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-base flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-cyan-400" /> Nombres para equipos y clanes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                Si el nombre será utilizado por varias personas, conviene pensar en una identidad colectiva:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan-300 mb-3">
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Nova Crew</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Zenith</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Nexo Team</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Vortex</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Astro Squad</span>
                <span className="p-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Nova Union</span>
              </div>
              <p className="text-xs text-slate-400">
                Para más ideas específicas, puedes consultar nuestra sección dedicada a{' '}
                <Link href="/nombres-para-juegos/nombres-para-clanes/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                  nombres para clanes
                </Link>.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 mt-4">
            También puedes descubrir más opciones estilizadas en nuestra categoría de{' '}
            <Link href="/nombres-para-juegos/nombres-chidos/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              nombres chidos para juegos
            </Link>.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* Section 5: Diferencia entre nick, apodo y nombre gamer */}
        <section id="diferencias-conceptuales">
          <div className="article-category-pill">
            <HelpCircle size={14} className="text-sky-400" aria-hidden="true" />
            <span>Conceptos Clave</span>
          </div>

          <h2 className="article-h2">
            ¿Qué diferencia hay entre un nick, un apodo y un nombre gamer?
          </h2>

          <p className="article-paragraph">
            Aunque muchas personas utilizan estos términos como sinónimos, pueden tener pequeños matices:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <strong className="text-white block mb-1 text-sm font-bold">Nick</strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Es el nombre que utilizas como identificador técnico dentro de una plataforma o videojuego.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <strong className="text-white block mb-1 text-sm font-bold">Apodo</strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Puede ser una forma corta o alternativa con la que te llaman tus amigos o tu comunidad.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <strong className="text-white block mb-1 text-sm font-bold">Nombre Gamer</strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Es una expresión más amplia para una identidad competitiva completa dentro de comunidades virtuales.
              </p>
            </div>
          </div>

          <p className="article-paragraph">
            En la práctica, las búsquedas se mezclan bastante. Por eso, si buscas formatos más cortos, te recomendamos explorar{' '}
            <Link href="/nombres-para-juegos/nicks/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              nicks para juegos
            </Link>{' '}
            o revisar alternativas en{' '}
            <Link href="/nombres-para-juegos/apodos/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              apodos para juegos
            </Link>.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* Section 6: Cómo hacer un nombre único */}
        <section id="como-hacer-unico">
          <div className="article-category-pill">
            <Star size={14} className="text-amber-400" aria-hidden="true" />
            <span>Originalidad</span>
          </div>

          <h2 className="article-h2">
            Cómo hacer un nombre único
          </h2>

          <p className="article-paragraph">
            No existe una fórmula mágica que garantice que un nombre estará disponible en todos los juegos. Sin embargo, puedes aumentar drásticamente tus posibilidades probando estas tres técnicas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> 1. Combina dos palabras
              </h3>
              <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                Dos palabras cortas suelen ser suficientes para crear algo fresco:
              </p>
              <div className="text-xs font-mono text-indigo-300 space-y-1">
                <div>Nova + Zen = <strong>NovaZen</strong></div>
                <div>Luna + Nex = <strong>LunaNex</strong></div>
                <div>Astro + Lux = <strong>AstroLux</strong></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> 2. Cambia una parte pequeña
              </h3>
              <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                Si tu nombre favorito ya está ocupado, añade una terminación:
              </p>
              <div className="text-xs font-mono text-indigo-300 space-y-1">
                <div>Nova → <strong>NovaX</strong></div>
                <div>Nova → <strong>Nova7</strong></div>
                <div>Nova → <strong>NovaCore</strong></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> 3. Utiliza un estilo visual
              </h3>
              <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                Cambia su presentación gráfica mediante símbolos o Unicode:
              </p>
              <div className="text-xs font-mono text-indigo-300 space-y-1">
                <div><strong>𝓝𝓸𝓿𝓪</strong> (Cursiva)</div>
                <div><strong>『Nova』</strong> (Corchetes)</div>
                <div><strong>亗Nova亗</strong> (Corona)</div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Si deseas explorar transformaciones tipográficas de todo tu texto, puedes utilizar nuestro{' '}
            <Link href="/conversor-de-letras/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              conversor de letras
            </Link>{' '}
            o revisar{' '}
            <Link href="/letras-para-instagram/letras-para-nombres/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              letras para nombres
            </Link>.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* Section 7: Compatibilidad de símbolos */}
        <section id="compatibilidad-simbolos">
          <div className="article-category-pill">
            <ShieldAlert size={14} className="text-rose-400" aria-hidden="true" />
            <span>Soporte Técnico</span>
          </div>

          <h2 className="article-h2">
            ¿Los nombres con símbolos funcionan en todos los juegos?
          </h2>

          <p className="article-lead-paragraph">
            No necesariamente.
          </p>

          <p className="article-paragraph">
            Los caracteres Unicode pueden mostrarse de forma diferente según el juego, sistema operativo, dispositivo o campo de texto. Algunos servicios aceptan una amplia variedad de caracteres especiales, mientras que otros restringen estrictamente el conjunto a letras y números convencionales.
          </p>

          <InfoBox title="La mejor práctica recomendada:">
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Generar el nombre en nuestro generador.</li>
              <li>Copiarlo con el botón de 1 clic.</li>
              <li>Pegarlo en el campo correspondiente del juego.</li>
              <li>Comprobar cómo aparece en pantalla (sin recuadros vacíos □).</li>
              <li>Confirmarlo solamente después de verificarlo.</li>
            </ol>
          </InfoBox>
        </section>

        <hr className="article-section-divider" />

        {/* Section 8: Nombre corto vs decorado */}
        <section id="corto-vs-decorado">
          <div className="article-category-pill">
            <Layers size={14} className="text-purple-400" aria-hidden="true" />
            <span>Comparativa</span>
          </div>

          <h2 className="article-h2">
            ¿Es mejor un nombre corto o uno decorado?
          </h2>

          <p className="article-paragraph">
            Depende del resultado y la impresión que quieras conseguir:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <Zap size={14} className="text-amber-400" /> Un nombre corto suele ser:
              </h3>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                <li>Más fácil de recordar y pronunciar por llamada de voz.</li>
                <li>Más sencillo de escribir al buscar amigos.</li>
                <li>Más legible en el marcador durante una partida intensa.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <Sparkles size={14} className="text-indigo-400" /> Un nombre decorado puede:
              </h3>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                <li>Destacar visualmente frente a los demás jugadores.</li>
                <li>Transmitir una personalidad más marcada y original.</li>
                <li>Combinarse con marcos y símbolos épicos como coronas o alas.</li>
              </ul>
            </div>
          </div>

          <p className="article-paragraph">
            Una buena estrategia es crear primero una versión simple (<em>Nova</em>) y después probar una versión decorada (<em>『Nova』</em> o <em>★NovaZen★</em>). Así puedes comparar diferentes opciones sin perder la esencia original.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* Section 9: Plataformas */}
        <section id="plataformas">
          <div className="article-category-pill">
            <Gamepad2 size={14} className="text-emerald-400" aria-hidden="true" />
            <span>Ecosistema Gamer</span>
          </div>

          <h2 className="article-h2">
            Nombres para Juegos en diferentes plataformas
          </h2>

          <p className="article-paragraph">
            Un buen nick puede servir para diferentes tipos de videojuegos y comunidades, pero no todos manejan las mismas restricciones. Puedes utilizar estas ideas para:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300 my-4">
            <li>Videojuegos multijugador y battle royale (Free Fire, PUBG, Fortnite, COD Mobile).</li>
            <li>Juegos competitivos de PC y consola (Valorant, LoL, CS2, Overwatch).</li>
            <li>Comunidades online, servidores de Discord y plataformas de streaming.</li>
            <li>Equipos, gremios, clanes y escuadras de esports.</li>
          </ul>

          <p className="article-paragraph">
            Si juegas títulos específicos, visita nuestras guías especializadas:
          </p>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 my-4 space-y-2 text-xs sm:text-sm">
            <div>
              👉 Si necesitas un nombre para el battle royale de Garena, visita nuestra sección de{' '}
              <Link href="/nombres-para-free-fire/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                nombres para Free Fire
              </Link>.
            </div>
            <div>
              👉 Si buscas una identidad grupal, consulta{' '}
              <Link href="/nombres-para-juegos/nombres-para-clanes/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                nombres para clanes
              </Link>.
            </div>
            <div>
              👉 Y si buscas ideas cortas y minimalistas, explora{' '}
              <Link href="/nombres-para-juegos/nicks/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                nicks para juegos
              </Link>.
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section 10: Consejos rápidos y errores comunes */}
        <section id="consejos-y-errores">
          <div className="article-category-pill">
            <Lightbulb size={14} className="text-amber-400" aria-hidden="true" />
            <span>Recomendaciones</span>
          </div>

          <h2 className="article-h2">
            Consejos rápidos y errores comunes al elegir tu nombre
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {/* Consejos */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" /> Preguntas antes de elegir:
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-5">
                <li><strong>¿Se entiende fácilmente?</strong> Si tienes que explicar cómo se lee, quizá sea demasiado complicado.</li>
                <li><strong>¿Es fácil de recordar?</strong> Debería reconocerse tras verlo un par de veces.</li>
                <li><strong>¿Se ve bien sin símbolos?</strong> Si la respuesta es sí, tienes una base sólida.</li>
                <li><strong>¿Cumple el límite de caracteres?</strong> Verifica la longitud máxima de tu juego.</li>
                <li><strong>¿Representa tu estilo de juego?</strong> Debe encajar con la identidad que quieres proyectar.</li>
              </ul>
            </div>

            {/* Errores comunes */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <ShieldAlert size={16} className="text-rose-400" /> Errores a evitar:
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-5">
                <li><strong>Demasiados símbolos:</strong> Más adornos no siempre significa un mejor resultado visual.</li>
                <li><strong>Nombres excesivamente largos:</strong> Pueden quedar cortados en la interfaz de la partida.</li>
                <li><strong>Copiar a un streamer popular:</strong> Puede que ya esté ocupado o sea difícil diferenciarte.</li>
                <li><strong>No verificar la compatibilidad:</strong> Un carácter puede verse bien en el navegador y fallar en el juego.</li>
                <li><strong>Añadir números sin sentido:</strong> Añadir muchos dígitos al azar resta impacto y elegancia.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section 11: FAQ Section */}
        <section id="preguntas-frecuentes">
          <div className="article-category-pill">
            <HelpCircle size={14} className="text-indigo-400" aria-hidden="true" />
            <span>Dudas Habituales</span>
          </div>

          <h2 className="article-h2">
            Preguntas frecuentes sobre nombres para juegos
          </h2>

          <div className="space-y-4 my-6">
            {JUEGOS_FAQ_ITEMS.map((faq, index) => (
              <details
                key={index}
                className="group p-4 rounded-xl bg-slate-900/80 border border-slate-800 transition-colors open:border-indigo-500/40"
              >
                <summary className="font-bold text-white text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ChevronRight
                    size={16}
                    className="text-indigo-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2"
                  />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section 12: Hub de Enlaces Internos */}
        <section id="explora-mas" className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/30 border border-indigo-500/20 my-8">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> Explora más ideas en Letras Bonitas
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-4">
            Si todavía estás buscando inspiración, continúa navegando por nuestras herramientas y categorías especializadas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link
              href="/nombres-para-juegos/nicks/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-slate-200 group-hover:text-indigo-300">Nicks para Juegos</span>
              <span className="text-slate-500 text-[11px]">Ideas cortas y adaptables →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/apodos/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-slate-200 group-hover:text-indigo-300">Apodos para Juegos</span>
              <span className="text-slate-500 text-[11px]">Variedad para todo jugador →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/nombres-para-clanes/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-slate-200 group-hover:text-indigo-300">Nombres para Clanes</span>
              <span className="text-slate-500 text-[11px]">Para gremios y escuadras →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/nombres-chidos/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-slate-200 group-hover:text-indigo-300">Nombres Chidos para Juegos</span>
              <span className="text-slate-500 text-[11px]">Gamer, aesthetic y más →</span>
            </Link>

            <Link
              href="/nombres-para-free-fire/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-slate-200 group-hover:text-amber-300">Nombres para Free Fire</span>
              <span className="text-slate-500 text-[11px]">Símbolos y nicks insanos →</span>
            </Link>

            <Link
              href="/letras-para-instagram/letras-para-nombres/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-slate-200 group-hover:text-purple-300">Letras para Nombres</span>
              <span className="text-slate-500 text-[11px]">Transforma cualquier palabra →</span>
            </Link>

            <Link
              href="/conversor-de-letras/"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group sm:col-span-2"
            >
              <span className="font-semibold text-slate-200 group-hover:text-cyan-300">Conversor de Letras Universal</span>
              <span className="text-slate-500 text-[11px]">+350 estilos tipográficos Unicode en vivo →</span>
            </Link>
          </div>
        </section>

        {/* Section 13: Conclusión */}
        <section id="conclusion" className="mt-8 mb-16">
          <div className="article-category-pill">
            <CheckCircle2 size={14} className="text-emerald-400" aria-hidden="true" />
            <span>Resumen Final</span>
          </div>

          <h2 className="article-h2">
            Conclusión
          </h2>

          <p className="article-paragraph">
            Elegir un nombre para juegos no tiene que ser complicado. Empieza con una palabra sencilla, decide qué estilo representa mejor lo que buscas y genera varias alternativas. Después compara los resultados, copia tu favorita y comprueba cómo aparece en el juego antes de confirmarla.
          </p>

          <p className="article-paragraph">
            Si quieres un nombre corto, prueba una combinación minimalista. Si buscas algo más visual, añade un detalle decorativo. Y si vas a utilizar el nombre para un equipo, piensa en una opción que todos puedan reconocer fácilmente.
          </p>

          <p className="article-paragraph font-medium text-white">
            Lo importante es encontrar un nombre que sea fácil de recordar, que se vea bien y que funcione correctamente en la plataforma donde vas a utilizarlo. Escribe tu palabra arriba y empieza a crear tu nuevo nick.
          </p>

          <div className="mt-8 text-center">
            <a
              href="#generador-de-nombres"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              <Gamepad2 size={16} />
              <span>Subir al Generador de Nombres</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
