import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import GameNameIdeasSection from '@/components/nombres-para-juegos/GameNameIdeasSection';
import { JUEGOS_FAQ_ITEMS } from '@/data/gameNamesData';
import {
  ReadingProgress,
  TipBox,
  InfoBox,
  WarningBox,
  StepGuide,
  StepItem
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

          <p style={{ maxWidth: '680px', margin: '-0.5rem auto 1.25rem', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
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
      <div style={{ maxWidth: '1160px', margin: '-1.5rem auto 0', padding: '0 1rem' }}>
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

          <div className="game-feature-box" style={{ margin: '1.5rem 0' }}>
            <h3 className="game-feature-title">
              <Lightbulb size={16} color="#FBBF24" />
              ¿Cómo funciona?
            </h3>
            <ul style={{ fontSize: '0.9rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
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
            Si necesitas una idea rápida, aquí tienes algunas opciones que puedes utilizar como inspiración directa para tus partidas. Haz clic en <strong>Copiar</strong> para llevarlas a tu juego al instante:
          </p>

          {/* Interactive Niche Ideas Component */}
          <GameNameIdeasSection />
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: '1.5rem 0' }}>
            {/* Gamer y Competitivos */}
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#34D399' }}>
                <Swords size={18} /> Nombres gamer y competitivos
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.85rem' }}>
                Los nombres gamer suelen buscar una apariencia directa y memorable. Puedes combinar conceptos como <em>Nova, Rush, Zero, Nexo, Titan, Astro, Prime, Vortex, Pulse</em> o <em>Shadow</em>:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['NovaRush', 'TitanZero', 'NexoPrime', 'AstroVex', 'VortexNova', 'ZeroPulse'].map((name) => (
                  <span key={name} style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', color: '#34D399', fontSize: '0.85rem', fontWeight: 600 }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Aesthetic */}
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#F472B6' }}>
                <Sparkles size={18} /> Nombres aesthetic
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.85rem' }}>
                Suelen utilizar palabras suaves, limpias o visualmente agradables como <em>Luna, Aura, Nova, Bloom, Sky, Zen, Mist, Nube, Star, Velvet</em>:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['LunaAura', 'NovaBloom', 'SkyNexa', 'AuraZen', 'LunaMist', 'NovaSky'].map((name) => (
                  <span key={name} style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', color: '#F472B6', fontSize: '0.85rem', fontWeight: 600 }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Cortos */}
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#FBBF24' }}>
                <Zap size={18} /> Nombres cortos
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.85rem' }}>
                Si prefieres algo sencillo, prueba con una palabra de pocas letras (<em>Nox, Vex, Zen, Lux, Ryu, Zyn, Kiro, Nexo, Nyx, Ziro</em>). Si están ocupados, añade una variación mínima:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['NoxX', 'Nexo7', 'ZynX', 'KiroZen', 'LuxNova'].map((name) => (
                  <span key={name} style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', color: '#FBBF24', fontSize: '0.85rem', fontWeight: 600 }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Equipos y Clanes */}
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#38BDF8' }}>
                <Users size={18} /> Nombres para equipos y clanes
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.85rem' }}>
                Si el nombre será utilizado por varias personas, conviene pensar en una identidad colectiva:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                {['Nova Crew', 'Zenith', 'Nexo Team', 'Vortex', 'Astro Squad', 'Nova Union'].map((name) => (
                  <span key={name} style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', color: '#38BDF8', fontSize: '0.85rem', fontWeight: 600 }}>
                    {name}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Para más ideas específicas, puedes consultar nuestra sección dedicada a{' '}
                <Link href="/nombres-para-juegos/nombres-para-clanes/" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                  nombres para clanes
                </Link>.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
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

          <div className="game-grid-3" style={{ margin: '1.5rem 0' }}>
            <div className="game-feature-box">
              <strong style={{ color: '#FFF', display: 'block', marginBottom: '0.35rem', fontSize: '0.95rem' }}>Nick</strong>
              <p className="game-feature-desc" style={{ margin: 0 }}>
                Es el nombre que utilizas como identificador técnico dentro de una plataforma o videojuego.
              </p>
            </div>
            <div className="game-feature-box">
              <strong style={{ color: '#FFF', display: 'block', marginBottom: '0.35rem', fontSize: '0.95rem' }}>Apodo</strong>
              <p className="game-feature-desc" style={{ margin: 0 }}>
                Puede ser una forma corta o alternativa con la que te llaman tus amigos o tu comunidad.
              </p>
            </div>
            <div className="game-feature-box">
              <strong style={{ color: '#FFF', display: 'block', marginBottom: '0.35rem', fontSize: '0.95rem' }}>Nombre Gamer</strong>
              <p className="game-feature-desc" style={{ margin: 0 }}>
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

          <div className="game-grid-3" style={{ margin: '1.5rem 0' }}>
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ fontSize: '0.9rem' }}>
                <Check size={15} color="#10B981" /> 1. Combina dos palabras
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.65rem' }}>
                Dos palabras cortas suelen ser suficientes para crear algo fresco:
              </p>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#A5B4FC', lineHeight: 1.6 }}>
                <div>Nova + Zen = <strong>NovaZen</strong></div>
                <div>Luna + Nex = <strong>LunaNex</strong></div>
                <div>Astro + Lux = <strong>AstroLux</strong></div>
              </div>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ fontSize: '0.9rem' }}>
                <Check size={15} color="#10B981" /> 2. Cambia una parte pequeña
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.65rem' }}>
                Si tu nombre favorito ya está ocupado, añade una terminación:
              </p>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#A5B4FC', lineHeight: 1.6 }}>
                <div>Nova → <strong>NovaX</strong></div>
                <div>Nova → <strong>Nova7</strong></div>
                <div>Nova → <strong>NovaCore</strong></div>
              </div>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ fontSize: '0.9rem' }}>
                <Check size={15} color="#10B981" /> 3. Utiliza un estilo visual
              </h3>
              <p className="game-feature-desc" style={{ marginBottom: '0.65rem' }}>
                Cambia su presentación gráfica mediante símbolos o Unicode:
              </p>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#A5B4FC', lineHeight: 1.6 }}>
                <div><strong>𝓝𝓸𝓿𝓪</strong> (Cursiva)</div>
                <div><strong>『Nova』</strong> (Corchetes)</div>
                <div><strong>亗Nova亗</strong> (Corona)</div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
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

          <div className="game-grid-2" style={{ margin: '1.5rem 0' }}>
            <div className="game-feature-box">
              <h3 className="game-feature-title">
                <Zap size={15} color="#FBBF24" /> Un nombre corto suele ser:
              </h3>
              <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
                <li>Más fácil de recordar y pronunciar por llamada de voz.</li>
                <li>Más sencillo de escribir al buscar amigos.</li>
                <li>Más legible en el marcador durante una partida intensa.</li>
              </ul>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title">
                <Sparkles size={15} color="#818CF8" /> Un nombre decorado puede:
              </h3>
              <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
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

          <ul style={{ fontSize: '0.9rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: '1rem 0', lineHeight: 1.7 }}>
            <li>Videojuegos multijugador y battle royale (Free Fire, PUBG, Fortnite, COD Mobile).</li>
            <li>Juegos competitivos de PC y consola (Valorant, LoL, CS2, Overwatch).</li>
            <li>Comunidades online, servidores de Discord y plataformas de streaming.</li>
            <li>Equipos, gremios, clanes y escuadras de esports.</li>
          </ul>

          <div className="game-feature-box" style={{ margin: '1.5rem 0' }}>
            <h3 className="game-feature-title" style={{ marginBottom: '0.75rem' }}>
              <Gamepad2 size={16} color="#818CF8" /> Guías especializadas por plataforma
            </h3>
            <div style={{ fontSize: '0.88rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
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

          <div className="game-grid-2" style={{ margin: '1.5rem 0' }}>
            {/* Consejos */}
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#34D399' }}>
                <CheckCircle2 size={16} color="#34D399" /> Preguntas antes de elegir:
              </h3>
              <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
                <li><strong>¿Se entiende fácilmente?</strong> Si tienes que explicar cómo se lee, quizá sea demasiado complicado.</li>
                <li><strong>¿Es fácil de recordar?</strong> Debería reconocerse tras verlo un par de veces.</li>
                <li><strong>¿Se ve bien sin símbolos?</strong> Si la respuesta es sí, tienes una base sólida.</li>
                <li><strong>¿Cumple el límite de caracteres?</strong> Verifica la longitud máxima de tu juego.</li>
                <li><strong>¿Representa tu estilo de juego?</strong> Debe encajar con la identidad que quieres proyectar.</li>
              </ul>
            </div>

            {/* Errores comunes */}
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#FB7185' }}>
                <ShieldAlert size={16} color="#FB7185" /> Errores a evitar:
              </h3>
              <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: '1.5rem 0' }}>
            {JUEGOS_FAQ_ITEMS.map((faq, index) => (
              <details
                key={index}
                className="game-feature-box"
                style={{ cursor: 'pointer' }}
              >
                <summary style={{ fontWeight: 700, color: '#FFF', fontSize: '0.92rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  <span>{faq.question}</span>
                  <ChevronRight size={16} color="#818CF8" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
                </summary>
                <p style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.65, margin: '0.75rem 0 0' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section 12: Hub de Enlaces Internos */}
        <section id="explora-mas" style={{ padding: '1.75rem', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.5))', border: '1px solid rgba(99, 102, 241, 0.25)', margin: '2rem 0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="#818CF8" /> Explora más ideas en Letras Bonitas
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '1.25rem' }}>
            Si todavía estás buscando inspiración, continúa navegando por nuestras herramientas y categorías especializadas:
          </p>

          <div className="game-grid-2">
            <Link
              href="/nombres-para-juegos/nicks/"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nicks para Juegos</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Ideas cortas →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/apodos/"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Apodos para Juegos</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Variedad para todo jugador →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/nombres-para-clanes/"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nombres para Clanes</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Para gremios y escuadras →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/nombres-chidos/"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nombres Chidos para Juegos</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Gamer, aesthetic y más →</span>
            </Link>

            <Link
              href="/nombres-para-free-fire/"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nombres para Free Fire</span>
              <span style={{ color: '#F59E0B', fontSize: '0.78rem' }}>Símbolos y nicks insanos →</span>
            </Link>

            <Link
              href="/letras-para-instagram/letras-para-nombres/"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Letras para Nombres</span>
              <span style={{ color: '#EC4899', fontSize: '0.78rem' }}>Transforma cualquier palabra →</span>
            </Link>

            <Link
              href="/conversor-de-letras/"
              className="game-item-card"
              style={{ textDecoration: 'none', gridColumn: '1 / -1' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Conversor de Letras Universal</span>
              <span style={{ color: '#38BDF8', fontSize: '0.78rem' }}>+350 estilos tipográficos Unicode en vivo →</span>
            </Link>
          </div>
        </section>

        {/* Section 13: Conclusión */}
        <section id="conclusion" style={{ margin: '2rem 0 4rem' }}>
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
            Si quieres un nombre corto, prueba una combinación minimalista. Si buscas algo más visual, añade un detalle decorativo. Y si vas a utilizar el nombre para un equipo, piensa en una opción que todos puedan recordar fácilmente.
          </p>

          <p className="article-paragraph" style={{ fontWeight: 700, color: '#FFF' }}>
            Lo importante es encontrar un nombre que sea fácil de recordar, que se vea bien y que funcione correctamente en la plataforma donde vas a utilizarlo. Escribe tu palabra arriba y empieza a crear tu nuevo nick.
          </p>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              href="#generador-de-nombres"
              className="cp-copy-all-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontSize: '0.95rem',
                background: 'var(--gradient-brand)',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              <Gamepad2 size={18} />
              <span>Subir al Generador de Nombres</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
