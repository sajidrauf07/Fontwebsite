import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FreeFireNamesSubcategoryGenerator from '@/components/free-fire-names/FreeFireNamesSubcategoryGenerator';
import FreeFireNamesNicheIdeas from '@/components/free-fire-names/FreeFireNamesNicheIdeas';
import FreeFireNamesFaq from '@/components/free-fire-names/FreeFireNamesFaq';
import { FREE_FIRE_SUB_FAQ_ITEMS } from '@/data/freeFireSubcategoryData';
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
  Shield,
  AlertTriangle,
  ExternalLink,
  Table as TableIcon,
  Check,
  Crown,
  Swords,
  Heart,
  Smile,
  Gamepad2,
  Lightbulb,
  HelpCircle
} from 'lucide-react';
import {
  ReadingProgress,
  ToolCTA,
  TipBox,
  InfoBox,
  WarningBox,
  StepGuide,
  StepItem
} from '@/components/article';

export const metadata: Metadata = {
  title: 'Nombres para Free Fire: Nicks, Símbolos y Copiar',
  description:
    'Encuentra nombres para Free Fire: nicks insanos, pro, cortos, con símbolos y estilos. Crea, copia y personaliza tu próximo nombre.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-free-fire/nombres'
  },
  openGraph: {
    title: 'Nombres para Free Fire: Nicks, Símbolos y Copiar',
    description:
      'Crea un nickname único para Free Fire con ideas, símbolos, letras bonitas y estilos listos para copiar y personalizar.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire/nombres',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Free Fire: Nicks, Símbolos y Copiar',
    description:
      'Catálogo completo de nicks insanos, pro, cortos, aesthetic y con símbolos para Free Fire al instante.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function NombresSubcategoryPage() {
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nombres para Copiar',
        item: 'https://theletrasbonitas.com/nombres-para-free-fire/nombres/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FREE_FIRE_SUB_FAQ_ITEMS.map((faq) => ({
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
    headline: 'Nombres para Free Fire: ideas, nicks y nombres para copiar y pegar',
    description:
      'Catálogo interactivo y guía completa de nombres para Free Fire. Nicks insanos, pro, cortos, aesthetic, con símbolos, para dúos y clanes listos para copiar y pegar.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire/nombres',
    inLanguage: 'es-MX',
    publisher: {
      '@type': 'Organization',
      name: 'Letras Bonitas',
      url: 'https://theletrasbonitas.com/'
    }
  };

  return (
    <div className="min-h-screen pb-16">
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

      {/* Breadcrumbs Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <Link href="/nombres-para-free-fire" className="breadcrumb-link">
            Nombres para Free Fire
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Nombres para Copiar</span>
        </div>
      </nav>

      {/* Hero Section & Interactive Generator */}
      <header className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Flame size={16} className="sparkle-icon text-orange-400" />
            <span>Colección de Nicks Insanos, Pro, Aesthetic y Símbolos</span>
          </div>

          <h1 className="hero-h1">
            Nombres para Free Fire: <span className="gradient-text">ideas, nicks y nombres para copiar y pegar</span>
          </h1>

          <p className="hero-tagline">
            Crea un nickname único para Free Fire y FF MAX con ideas, símbolos y estilos listos en 1 clic.
          </p>

          <p className="hero-description">
            Personaliza tu apodo con símbolos bélicos, letras góticas, caracteres invisibles y tags para destacar en tu clan y salas.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Copiado Instantáneo con 1 Clic</span>
            </div>
            <div className="highlight-item">
              <Zap size={16} />
              <span>Compatibles con Android y iOS</span>
            </div>
            <div className="highlight-item">
              <Sparkles size={16} />
              <span>Estilos Unicode e Insanos</span>
            </div>
          </div>

          {/* Interactive Tool Component */}
          <div className="w-full max-w-5xl mx-auto mt-4" id="main-tool">
            <FreeFireNamesSubcategoryGenerator />
          </div>
        </div>
      </header>

      {/* Main SEO Article Content */}
      <article className="article-prose-container max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-slate-300 leading-relaxed">
        <ReadingProgress />

        {/* Intro Header */}
        <header className="article-intro-header">
          <div className="article-category-pill">
            <Flame size={14} className="text-orange-400" aria-hidden="true" />
            <span>Guía de Nicknames Gamer</span>
          </div>

          <h2 className="article-h2">
            Nombres para Free Fire: Ideas, Estilos y Nicks para Copiar
          </h2>

          <p className="article-lead-paragraph">
            Encontrar nombres para Free Fire que realmente se vean bien puede ser más difícil de lo que parece. Hay miles de opciones en Internet, pero muchas son demasiado largas, repetidas o están llenas de símbolos que hacen que el nick sea difícil de leer.
          </p>

          <p className="article-paragraph">
            Además, no todos buscan el mismo estilo. Algunos jugadores quieren un nombre insano, otros prefieren un nick corto y limpio, mientras que otros buscan símbolos, letras especiales, nombres graciosos o un nombre que funcione para toda su escuadra.
          </p>

          <TipBox title="Variedad y Creatividad para tu Nick">
            En esta guía encontrarás ideas de diferentes estilos en nuestra página principal de{' '}
            <Link href="/nombres-para-free-fire" className="text-pink-400 underline hover:text-pink-300 font-semibold">
              nombres para Free Fire
            </Link>
            , consejos para crear tu propio nickname y una forma práctica de convertir una palabra sencilla en un nombre con personalidad. También veremos cómo copiar y pegar un nombre y qué debes revisar antes de utilizar caracteres especiales.
          </TipBox>

          {/* TABLE OF CONTENTS */}
        </header>

        <hr className="article-section-divider" />

        {/* Ready to Copy Nicknames Section */}
        <section id="nombres-listos">
          <div className="article-category-pill">
            <Crown size={14} className="text-amber-400" aria-hidden="true" />
            <span>Listas Organizadas</span>
          </div>

          <h2 className="article-h2">
            Nombres para Free Fire listos para copiar y pegar
          </h2>
          <p className="article-paragraph">
            Si quieres cambiar tu nickname rápidamente, lo más práctico es partir de una lista organizada de ideas y elegir el estilo que mejor represente cómo quieres que te vean en el juego:
          </p>

          <div className="space-y-6 my-6">
            {/* Subcategory 1: Insanos */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/20 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                <Crown className="w-5 h-5" /> Nombres insanos para Free Fire
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si buscas un nombre con una vibra agresiva, competitiva o imponente, puedes probar estas combinaciones de nuestra sección especializada de{' '}
                <Link href="/nombres-para-free-fire/nombres-insanos" className="text-pink-400 hover:underline font-semibold">
                  nombres insanos para Free Fire
                </Link>:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm text-amber-300 select-all">
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">亗Sombra亗</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">乂Nexus乂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">꧁Lobo꧂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">〆Vortex〆</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">★Titan★</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">么Raptor么</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">『Furia』</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">⚡Rayo⚡</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">乂Caos乂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">꧁Demon꧂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">☠Hunter☠</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">亗Phantom亗</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">★Venom★</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">〆Reaper〆</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">乂Inferno乂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">꧁Blaze꧂</span>
              </div>
            </div>

            {/* Subcategory 2: Pro y Tryhard */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-rose-500/20 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-rose-400 flex items-center gap-2">
                <Swords className="w-5 h-5" /> Nombres pro y tryhard
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Para un estilo enfocado en la competición de alto nivel, normalmente funciona mejor un nombre corto de fácil reconocimiento:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm text-rose-300 select-all">
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Zyro</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Vex</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Kiro</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Nox</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Raze</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Zayn</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Kyro</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Axel</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">亗Zyro</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Zyro亗</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">〆Vex</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">Noxメ</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">★Kyro</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">『Nova』</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">乂Flux乂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">⚡Raze</span>
              </div>
            </div>

            {/* Subcategory 3: Cortos */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-cyan-500/20 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Nombres cortos para Free Fire
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si prefieres algo minimalista, prueba con palabras de 3 o 4 letras que dejen espacio limpio para tu desempeño:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm text-cyan-300 select-all">
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">KRX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">ZEN</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">NEX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">REX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">VEX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">ZYX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">KAI</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">NOX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">RAY</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">FOX</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">SKY</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">ICE</span>
              </div>
            </div>

            {/* Subcategory 4: Símbolos */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Nombres con símbolos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Los caracteres decorativos transforman la estética visual del nombre. Revisa también nuestro catálogo de{' '}
                <Link href="/nombres-para-free-fire/simbolos" className="text-pink-400 hover:underline font-semibold">
                  símbolos para Free Fire
                </Link>:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm text-emerald-300 select-all">
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">★Nova★</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">亗Ghost亗</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">乂Shadow乂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">『Dark』</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">〆Viper〆</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">꧁Luna꧂</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">⚡Blaze⚡</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">♛King♛</span>
              </div>
            </div>

            {/* Subcategory 5: Aesthetic y Elegantes */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-pink-500/20 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-pink-400 flex items-center gap-2">
                <Heart className="w-5 h-5" /> Nombres elegantes y aesthetic
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Para una apariencia limpia, sofisticada o delicada:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm text-pink-300 select-all">
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">✿Luna✿</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">♡Aurora♡</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">『Mystic』</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">✧Crystal✧</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">𓆩Luna𓆪</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">♡Sakura♡</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">★Moon★</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">୨୧Angel୨୧</span>
              </div>
            </div>

            {/* Subcategory 6: Graciosos */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-purple-500/20 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-purple-400 flex items-center gap-2">
                <Smile className="w-5 h-5" /> Nombres graciosos para Free Fire
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si tu estilo de juego es más divertido o relajado:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm text-purple-300 select-all">
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">NoMePegues</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">CasiPro</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">SinLag</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">FueAccidente</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">DonPing</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">MeCaí</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">NoEraYo</span>
                <span className="bg-slate-950/80 p-2 rounded text-center border border-slate-800">ModoAvión</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section: Hombre vs Mujer */}
        <section id="hombre-mujer">
          <div className="article-category-pill">
            <Heart size={14} className="text-pink-400" aria-hidden="true" />
            <span>Géneros y Estilos</span>
          </div>

          <h2 className="article-h2">
            Nombres para Free Fire para hombre y mujer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-900/80 p-5 rounded-xl border border-cyan-500/20 space-y-2">
              <h3 className="font-bold text-cyan-400 text-base">Para Hombre</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bases de fuerza, velocidad o misterio: <em>DarkWolf, IronX, Shadow, Thunder, Titan, Phantom, Hunter, Vortex</em>. Puedes añadir marcos como <span className="font-mono text-cyan-300">亗DarkWolf亗</span> o <span className="font-mono text-cyan-300">⚡Thunder⚡</span>.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-pink-500/20 space-y-2">
              <h3 className="font-bold text-pink-400 text-base">Para Mujer</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bases elegantes o competitivas: <em>QueenX, ShadowGirl, DarkLuna, ViperGirl, LadyGhost, MissStorm</em>. Añade detalles visuales como <span className="font-mono text-pink-300">♕QueenX♕</span> o <span className="font-mono text-pink-300">✿Luna✿</span>.
              </p>
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section: Dúos y Clanes */}
        <section id="duos-escuadras">
          <div className="article-category-pill">
            <Swords size={14} className="text-amber-400" aria-hidden="true" />
            <span>Compañeros y Clanes</span>
          </div>

          <h2 className="article-h2">
            Nombres para dúos, escuadras y clanes
          </h2>
          <p className="article-paragraph">
            Si juegas con amigos, la clave es mantener una relación visual o temática compartida:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">Nombres para Dúos y Parejas</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pares opuestos o complementarios: <em>Dark亗 / Light亗</em>, <em>King★ / Queen★</em>, <em>Moon✦ / Sun✦</em>, <em>Fire⚡ / Ice⚡</em>. Visita nuestra guía de{' '}
                <Link href="/nombres-para-free-fire/apodos" className="text-pink-400 hover:underline font-semibold">
                  apodos para Free Fire
                </Link>.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">Nombres para Escuadras y Clanes</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Abreviaturas o tags de clan: <span className="font-mono text-amber-300">亗NEX亗 Alex</span>, <span className="font-mono text-amber-300">亗NEX亗 Leo</span>, <span className="font-mono text-amber-300">NX・Shadow</span>. Revisa las ideas de{' '}
                <Link href="/nombres-para-free-fire/clanes" className="text-pink-400 hover:underline font-semibold">
                  nombres para clanes
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* Section: How to create your own nickname */}
        <section id="crear-propio">
          <div className="article-category-pill">
            <Gamepad2 size={14} className="text-emerald-400" aria-hidden="true" />
            <span>Método Práctico</span>
          </div>

          <h2 className="article-h2">
            Cómo crear tu propio nombre para Free Fire
          </h2>
          <p className="article-paragraph">
            En lugar de copiar un nombre idéntico al de miles de jugadores, sigue este método de 4 pasos para construir tu nick propio:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">1. Elige una palabra base</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Usa tu apodo real, una palabra corta o un concepto gamer (ej. <em>Lobo, Rayo, Shadow</em>).
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">2. Añade letras estilizadas</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Usa nuestro conversor para ver variantes Unicode cursivas, negritas o versalitas (
                <Link href="/conversor-de-letras/letras-para-copiar-y-pegar" className="text-pink-400 hover:underline font-semibold">
                  letras para copiar y pegar
                </Link>
                ).
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">3. Usa símbolos con moderación</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Coloca 1 o 2 símbolos decorativos al inicio o final sin saturar la lectura (ej. <span className="font-mono text-pink-300">亗Lobo亗</span>).
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">4. Comprueba el resultado</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Revisa la vista previa en el juego antes de confirmar el cambio de nombre.
              </p>
            </div>
          </div>

          <FreeFireNamesNicheIdeas />
        </section>

        <hr className="article-section-divider" />

        {/* Section: Unicode Explanation (EEAT) */}
        <section id="unicode-eeat">
          <div className="article-category-pill">
            <BookOpen size={14} className="text-pink-400" aria-hidden="true" />
            <span>Estándar Unicode</span>
          </div>

          <h2 className="article-h2">
            Qué son las letras y símbolos Unicode
          </h2>
          <p className="article-paragraph">
            Es común escuchar que estos estilos son "fuentes para Free Fire". Sin embargo, técnicamente se trata de caracteres codificados dentro del estándar universal <strong>Unicode</strong>.
          </p>

          <InfoBox title="Especificación técnica de Unicode">
            <p className="mb-2">
              Unicode asigna un identificador numérico único a miles de caracteres gráficos, signos de puntuación, emojis y símbolos matemáticos (
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
              Una fuente tradicional modifica la visualización dentro de un programa editor. En cambio, las variantes Unicode son caracteres de texto reales que se pueden copiar y pegar en{' '}
              <Link href="/conversor-de-letras/texto-con-estilos" className="text-pink-400 hover:underline font-semibold">
                texto con estilos
              </Link>{' '}
              y redes como{' '}
              <Link href="/letras-para-instagram" className="text-pink-400 hover:underline font-semibold">
                letras para Instagram
              </Link>.
            </p>
          </InfoBox>
        </section>

        <hr className="article-section-divider" />

        {/* Official Garena Copy & Paste Instructions */}
        <section id="como-copiar-pegar">
          <div className="article-category-pill">
            <CheckCircle2 size={14} className="text-cyan-400" aria-hidden="true" />
            <span>Guía Paso a Paso</span>
          </div>

          <h2 className="article-h2">
            Cómo copiar y pegar un nombre en Free Fire
          </h2>
          <p className="article-paragraph">
            El flujo general para aplicar tu nuevo apodo de forma segura:
          </p>

          <StepGuide>
            <StepItem
              number="01"
              label="PASO 1"
              title="Elige tu nick"
              description="Selecciona el nick deseado o genéralo en nuestra herramienta interactiva superior."
            />
            <StepItem
              number="02"
              label="PASO 2"
              title="Copia el apodo"
              description="Pulsa el botón Copiar para guardar el texto formateado en tu portapapeles."
            />
            <StepItem
              number="03"
              label="PASO 3"
              title="Abre Free Fire"
              description="Abre la app de Free Fire y accede a tu perfil de jugador en la esquina superior izquierda."
            />
            <StepItem
              number="04"
              label="PASO 4"
              title="Toca edición"
              description="Toca la casilla de edición de apodo o el icono de tarjeta de cambio."
            />
            <StepItem
              number="05"
              label="PASO 5"
              title="Pega el texto"
              description="Mantén presionado el campo de texto y selecciona Pegar."
            />
            <StepItem
              number="06"
              label="PASO 6"
              title="Verifica compatibilidad"
              description="Comprueba que no existan cuadros vacíos (□) antes de confirmar el gasto de diamantes o tarjeta."
            />
          </StepGuide>
        </section>

        <hr className="article-section-divider" />

        {/* Selection Matrix Table */}
        <section id="ideas-rapidas">
          <div className="article-category-pill">
            <TableIcon size={14} className="text-violet-400" aria-hidden="true" />
            <span>Resumen Rápido</span>
          </div>

          <h2 className="article-h2">
            Ideas rápidas según tu estilo
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4 shadow-sm">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Si quieres...</th>
                  <th className="px-4 py-3">Prueba con...</th>
                  <th className="px-4 py-3">Ejemplo de Base</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Un nombre competitivo</td>
                  <td className="px-4 py-3 text-pink-300">Algo corto y fácil de leer</td>
                  <td className="px-4 py-3 font-mono text-xs">⚡ AcePro ⚡</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Un estilo agresivo</td>
                  <td className="px-4 py-3 text-cyan-300">Palabras como Fury, Venom o Titan</td>
                  <td className="px-4 py-3 font-mono text-xs">亗Titan亗</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Un nombre elegante</td>
                  <td className="px-4 py-3 text-purple-300">Luna, Nova, Crystal o Aurora</td>
                  <td className="px-4 py-3 font-mono text-xs">✧Crystal✧</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Un estilo misterioso</td>
                  <td className="px-4 py-3 text-amber-300">Shadow, Ghost, Night o Phantom</td>
                  <td className="px-4 py-3 font-mono text-xs">꧁Phantom꧂</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-white">Un nombre de clan</td>
                  <td className="px-4 py-3 text-emerald-300">Etiqueta corta común</td>
                  <td className="px-4 py-3 font-mono text-xs">亗NEX亗 Alex</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CONTEXTUAL TOOL CTA */}
        <div className="my-10">
          <ToolCTA
            targetId="main-tool"
            title="¿Listo para renovar tu nick en Free Fire?"
            description="Escribe cualquier nombre arriba, genera combinaciones con símbolos gamer y cópialo en un solo clic."
            buttonText="Subir al Generador de Nicks"
          />
        </div>

        <hr className="article-section-divider" />

        {/* FAQ Accordion UI Section */}
        <section id="faq">
          <div className="article-category-pill">
            <HelpCircle size={14} className="text-amber-400" aria-hidden="true" />
            <span>Preguntas Frecuentes</span>
          </div>

          <h2 className="article-h2">
            Preguntas frecuentes sobre nombres para Free Fire
          </h2>
          <p className="article-paragraph">
            Respuestas a las preguntas habituales sobre la creación, copiado y compatibilidad de nicks gamer:
          </p>

          <FreeFireNamesFaq />
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-pink-900/30 via-purple-900/20 to-slate-900 border border-pink-500/20 rounded-2xl p-6 sm:p-8 space-y-4 text-center mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Copia y personaliza tu nick de Free Fire hoy
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Elegir nombres para Free Fire no consiste simplemente en copiar el nick más cargado de internet. Un buen nickname debe tener personalidad, ser fácil de reconocer y verse genial en tu perfil. Explora nuestros estilos, copia tu favorito en 1 clic y destaca en el juego.
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
