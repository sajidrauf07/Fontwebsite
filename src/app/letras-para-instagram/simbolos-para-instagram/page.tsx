import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import MainSymbolTool from '@/components/instagram-symbols/MainSymbolTool';
import SymbolCombiner from '@/components/instagram-symbols/SymbolCombiner';
import BioSymbolsSection from '@/components/instagram-symbols/BioSymbolsSection';
import NameSymbolsSection from '@/components/instagram-symbols/NameSymbolsSection';
import CaptionSymbolsSection from '@/components/instagram-symbols/CaptionSymbolsSection';
import HighlightSymbolsSection from '@/components/instagram-symbols/HighlightSymbolsSection';
import SeparatorsSection from '@/components/instagram-symbols/SeparatorsSection';
import AestheticSymbolsSection from '@/components/instagram-symbols/AestheticSymbolsSection';
import SymbolFaqSection from '@/components/instagram-symbols/SymbolFaqSection';
import { SYMBOL_FAQ_ITEMS } from '@/data/symbolData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
  BookOpen,
  AlertTriangle,
  Zap,
  ShieldCheck,
  FileText,
  Search,
  ExternalLink,
  Table as TableIcon,
  Check,
  Heart,
  Smile,
  ShieldAlert,
  Lightbulb,
  Sliders,
  Type,
  Smartphone,
  Layers
} from 'lucide-react';
import {
  ReadingProgress,
  ToolCTA
} from '@/components/article';

export const metadata: Metadata = {
  title: 'Símbolos para Instagram: Copia y Pega Símbolos Bonitos',
  description:
    'Descubre símbolos para Instagram, corazones, estrellas, flechas y separadores. Copia y pega símbolos bonitos para tu bio, nombre y publicaciones.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/letras-para-instagram/simbolos-para-instagram'
  },
  openGraph: {
    title: 'Símbolos para Instagram: Copia y Pega Símbolos Bonitos',
    description:
      'Corazones, estrellas, flechas, flores y símbolos aesthetic para personalizar tu bio, nombre y publicaciones de Instagram.',
    url: 'https://theletrasbonitas.com/letras-para-instagram/simbolos-para-instagram',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos para Instagram: Copia y Pega Símbolos Bonitos',
    description:
      'Copia corazones, estrellas, flechas, flores y separadores decorativos para Instagram al instante.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SimbolosParaInstagramPage() {
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
        item: 'https://theletrasbonitas.com/letras-para-instagram'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Símbolos para Instagram',
        item: 'https://theletrasbonitas.com/letras-para-instagram/simbolos-para-instagram'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SYMBOL_FAQ_ITEMS.map((faq) => ({
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
    headline: 'Símbolos para Instagram: copia y pega símbolos bonitos',
    description:
      'Guía completa y colección interactiva de símbolos para Instagram. Copia corazones, estrellas, flechas, separadores y símbolos aesthetic para bios, nombres y publicaciones.',
    url: 'https://theletrasbonitas.com/letras-para-instagram/simbolos-para-instagram',
    inLanguage: 'es-MX',
    publisher: {
      '@type': 'Organization',
      name: 'Letras Bonitas',
      url: 'https://theletrasbonitas.com/'
    }
  };

  return (
    <div className="min-h-screen pb-16">
      <ReadingProgress />
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
          <Link href="/letras-para-instagram" className="breadcrumb-link">
            Letras para Instagram
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Símbolos para Instagram</span>
        </div>
      </nav>

      {/* Hero Section & Master Interactive Generator */}
      <header className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="sparkle-icon" />
            <span>Colección Unicode Aesthetic y Separadores</span>
          </div>

          <h1 className="hero-h1">
            Símbolos para Instagram: <span className="gradient-text">copia y pega símbolos bonitos</span>
          </h1>

          <p className="hero-tagline">
            Corazones, estrellas, flechas, flores y símbolos aesthetic para personalizar tu perfil al instante.
          </p>

          <p className="hero-description">
            Personaliza tu bio, nombre de usuario y publicaciones de Instagram con más de 200 símbolos bonitos organizados por categorías.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>100% Caracteres Unicode Copiables</span>
            </div>
            <div className="highlight-item">
              <Zap size={16} />
              <span>Copiado Directo con 1 Clic</span>
            </div>
            <div className="highlight-item">
              <ShieldCheck size={16} />
              <span>Sin Instalar Aplicaciones</span>
            </div>
          </div>

          {/* Main Interactive Tool Container */}
          <div className="w-full max-w-5xl mx-auto mt-4" id="main-tool">
            <MainSymbolTool />
          </div>
        </div>
      </header>

      {/* Main SEO Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 mt-16 space-y-16 text-slate-300 leading-relaxed">
        {/* TABLE OF CONTENTS */}

        {/* Intro & PAS Framework Section */}
        <section className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            ¿Quieres darle un toque diferente a tu perfil de Instagram sin instalar aplicaciones ni diseñar imágenes? Los símbolos para Instagram pueden ayudarte a decorar tu bio, separar frases, destacar palabras o darle personalidad a tu nombre.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            El problema es que encontrar el símbolo adecuado puede ser más difícil de lo que parece. Hay corazones, estrellas, flechas, flores, líneas, marcos, signos aesthetic y cientos de caracteres especiales. Además, no todos tienen el mismo propósito.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Por eso, en esta guía encontrarás una selección organizada de símbolos para copiar y pegar en Instagram, junto con ejemplos para bios, nombres, captions y Stories.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-medium text-pink-300">
            Además, podrás combinar los símbolos con{' '}
            <Link href="/conversor-de-letras/texto-con-estilos" className="text-pink-400 underline decoration-pink-500/40 hover:decoration-pink-400 transition-colors">
              texto con estilos
            </Link>{' '}
            y{' '}
            <Link href="/letras-para-instagram" className="text-pink-400 underline decoration-pink-500/40 hover:decoration-pink-400 transition-colors">
              letras para Instagram
            </Link>{' '}
            para crear textos más originales. La idea es sencilla: elige, copia y pega.
          </p>
        </section>

        {/* Rapid Copy Reference */}
        <section className="space-y-6" id="simbolos-copiar">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Símbolos para Instagram para copiar y pegar
          </h2>
          <p>
            Aquí tienes algunos símbolos populares que puedes copiar directamente para tus perfiles sociales:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-pink-300 text-sm mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4" /> Corazones
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                ♡ ♥ ❤ ❥ ❣ ღ
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-amber-300 text-sm mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Estrellas
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                ★ ☆ ✦ ✧ ✩ ✪ ✯ ✰ ⋆
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-emerald-300 text-sm mb-2 flex items-center gap-2">
                <Smile className="w-4 h-4" /> Flores
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                ✿ ❀ ❁ ❃ ✾ ⚘ ❋
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-purple-300 text-sm mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Destellos
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                ✧ ✦ ✨ ⋆ ⟡ ⭒ ✩
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-cyan-300 text-sm mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Flechas
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                → ➜ ➝ ➤ ➳ ➵ ↠ ↣
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-blue-300 text-sm mb-2 flex items-center gap-2">
                <Sliders className="w-4 h-4" /> Separadores
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                • · │ ┊ ┆ ︱ ⸻ ─
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-slate-300 text-sm mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Minimalistas
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                ○ ● ◦ ◉ ◇ ◆ □ ■ △ ▲
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
              <h3 className="font-semibold text-rose-300 text-sm mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Símbolos Decorativos
              </h3>
              <p className="text-lg tracking-widest text-white font-mono select-all bg-slate-900/60 p-2 rounded border border-slate-800">
                ꧁ ꧂ 『 』 〈 〉 《 》 〔 〕
              </p>
            </div>
          </div>

          <p className="text-slate-300 mt-4">
            Puedes combinar varios de ellos para crear una composición personalizada. Por ejemplo:
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-sm font-mono text-pink-300">
            <p>♡ Tu nombre ♡</p>
            <p>✦ Mi espacio ✦</p>
            <p>☾ Dreamer ☽</p>
            <p>• Lifestyle • Beauty • Travel •</p>
            <p>✧ Creador de contenido ✧</p>
          </div>
          <p className="text-slate-400 text-sm">
            La ventaja de estos caracteres es que no necesitas convertirlos en una imagen. Son caracteres de texto reales que puedes copiar y pegar.
          </p>
        </section>

        {/* Educational EEAT Section: Unicode Explanation */}
        <section className="space-y-6" id="que-son-simbolos">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Qué son los símbolos para Instagram?
          </h2>
          <p>
            Los símbolos para Instagram son caracteres especiales que puedes utilizar dentro de textos digitales para decorar o estructurar información.
          </p>
          <p>
            Muchos de estos caracteres pertenecen al estándar Unicode. Unicode es un estándar internacional creado para representar texto y caracteres de diferentes idiomas y sistemas de escritura de una manera consistente entre dispositivos, sistemas operativos y programas. También incluye signos de puntuación, flechas, símbolos técnicos, emojis y otros signos decorativos (
            <a
              href="https://www.unicode.org/standard/standard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1"
            >
              <span>Unicode Standard</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            ).
          </p>
          <p>
            Por eso, cuando ves un símbolo como <span className="text-white font-mono">★</span> o <span className="text-white font-mono">♡</span>, no necesariamente estás viendo una “fuente” instalada en tu celular. Es un carácter nativo del código Unicode.
          </p>
          
          <div className="bg-slate-800/50 border-l-4 border-pink-500 p-4 sm:p-5 rounded-r-xl space-y-2">
            <h3 className="text-white font-semibold text-base flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-pink-400" />
              Diferencia Técnica: Carácter vs. Glifo (Glyph)
            </h3>
            <p className="text-sm text-slate-300">
              Unicode define el carácter abstracto y su código asignado. La forma visual concreta con la que aparece en pantalla se conoce como <strong>glifo</strong> y depende del sistema de renderizado tipográfico del dispositivo (
              <a
                href="https://www.unicode.org/standard/principles.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline inline-flex items-center gap-1 ml-1"
              >
                <span>Unicode Design Principles</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              ). En la práctica, esta arquitectura universal permite copiar determinados caracteres desde una página web y pegarlos directamente en Instagram.
            </p>
          </div>
        </section>

        {/* Categorized Symbol Showcase Components */}
        <section className="space-y-12" id="simbolos-por-categoria">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Símbolos para Instagram por categoría
          </h2>
          <p>
            No todos los símbolos sirven para lo mismo. Por eso es mejor elegirlos según el tipo de perfil y el lugar específico donde quieres utilizarlos:
          </p>

          <AestheticSymbolsSection />
          <BioSymbolsSection />
          <NameSymbolsSection />
          <CaptionSymbolsSection />
          <HighlightSymbolsSection />
          <SeparatorsSection />
        </section>

        {/* Combinations Section */}
        <section className="space-y-6">
          <SymbolCombiner />
        </section>

        {/* Comparative Tables */}
        <section className="space-y-6" id="simbolos-vs-emojis">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Símbolos vs Emojis vs Letras Bonitas
          </h2>
          <p>
            Estos términos suelen confundirse o mezclarse en internet, pero técnicamente cumplen funciones diferentes en un perfil de Instagram:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-200 uppercase text-xs border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Elemento</th>
                  <th className="px-4 py-3">Qué es</th>
                  <th className="px-4 py-3">Ejemplo</th>
                  <th className="px-4 py-3">Uso habitual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Símbolo</td>
                  <td className="px-4 py-3">Carácter Unicode decorativo o técnico</td>
                  <td className="px-4 py-3 font-mono text-white">★</td>
                  <td className="px-4 py-3">Decoración limpia, encuadre y separación</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Emoji</td>
                  <td className="px-4 py-3">Pictograma gráfico de color</td>
                  <td className="px-4 py-3">❤️</td>
                  <td className="px-4 py-3">Expresar emociones o representar objetos</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Letra estilizada</td>
                  <td className="px-4 py-3">Caracteres matemáticos estilizados</td>
                  <td className="px-4 py-3 font-mono text-white">𝓐</td>
                  <td className="px-4 py-3">Destacar{' '}
                    <Link href="/letras-para-instagram/letras-para-nombres" className="text-pink-400 hover:underline">
                      letras para nombres
                    </Link>{' '}
                    y títulos
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Separador</td>
                  <td className="px-4 py-3">Punto, barra o carácter divisorio</td>
                  <td className="px-4 py-3 font-mono text-white">•</td>
                  <td className="px-4 py-3">Organizar listas y separar categorías</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-semibold text-pink-300">Flecha</td>
                  <td className="px-4 py-3">Carácter direccional Unicode</td>
                  <td className="px-4 py-3 font-mono text-white">→</td>
                  <td className="px-4 py-3">Guiar la mirada hacia enlaces y CTAs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-400">
            Llamar a todos estos elementos "fuentes de Instagram" no siempre es técnicamente exacto. Unicode contiene una amplia variedad de caracteres y símbolos, y su representación visual exacta en pantalla depende del software y del dispositivo del usuario (
            <a
              href="https://www.unicode.org/reports/tr44/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span>Unicode Character Database</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            ).
          </p>
        </section>

        {/* Why Do Some Symbols Look Different? */}
        <section className="space-y-6" id="renderizado-glifos">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            ¿Por qué algunos símbolos se ven diferentes?
          </h2>
          <p>
            Esta es una de las preguntas más comunes cuando trabajas con caracteres Unicode en redes sociales.
          </p>
          <p>
            Unicode define un estándar universal para el carácter abstractamente, pero no determina exactamente cómo debe dibujarse su figura en pantalla. La representación depende del motor de renderizado del sistema operativo (iOS, Android, Windows, macOS), las fuentes instaladas por defecto y la aplicación concreta que muestra el texto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-pink-400" /> Diferencias de Dispositivo
              </h3>
              <p className="text-sm text-slate-300">
                Un símbolo de estrella o corazón puede verse con bordes más redondeados en iPhone y con trazos más angulares en Android.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> Glifos No Renderizados (Boxes)
              </h3>
              <p className="text-sm text-slate-300">
                Si un dispositivo no posee la tipografía adecuada para un carácter raro, puede mostrar un rectángulo en blanco o un signo de interrogación (□ o ?).
              </p>
            </div>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/70">
            <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Consejo Práctico de Verificación
            </h3>
            <p className="text-sm text-slate-300">
              Antes de publicar tu bio final, comprueba el texto directamente en el teléfono o aplicación donde será visible para asegurarte de que todos los símbolos se visualicen correctamente sin cortes.
            </p>
          </div>
        </section>

        {/* Step by Step Guide: Copying & Pasting */}
        <section className="space-y-6" id="como-copiar-pegar">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Cómo copiar y pegar símbolos en Instagram
          </h2>
          <p>
            El proceso para usar símbolos en tu perfil es sumamente fácil y rápido:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
                <Smartphone className="w-5 h-5" /> Desde tu Teléfono Celular
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-slate-300 text-sm">
                <li>Encuentra el símbolo o combinación deseada en nuestra herramienta.</li>
                <li>Toca el botón <strong>Copiar</strong> o selecciona manualmente el carácter.</li>
                <li>Abre la aplicación de <strong>Instagram</strong>.</li>
                <li>Ve a tu perfil y pulsa en <strong>Editar perfil</strong>.</li>
                <li>Mantén presionado el campo de <strong>Nombre</strong> o <strong>Presentación (Bio)</strong>.</li>
                <li>Selecciona <strong>Pegar</strong> y guarda los cambios.</li>
              </ol>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <Type className="w-5 h-5" /> Desde la Computadora (Web)
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-slate-300 text-sm">
                <li>Selecciona y copia el símbolo con <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-xs">Ctrl + C</kbd> (o <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-xs">Cmd + C</kbd> en Mac).</li>
                <li>Ingresa a <strong>instagram.com</strong> e inicia sesión.</li>
                <li>Haz clic en tu foto de perfil y selecciona <strong>Editar perfil</strong>.</li>
                <li>Pega el texto en el campo deseado con <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-xs">Ctrl + V</kbd>.</li>
                <li>Haz clic en <strong>Enviar</strong> para guardar.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Instagram Bio Structure & Aesthetic Tips */}
        <section className="space-y-6" id="estructura-bio">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Cómo usar símbolos en la bio de Instagram
          </h2>
          <p>
            La biografía de Instagram cuenta únicamente con 150 caracteres. Por esta razón, cada símbolo utilizado debe cumplir una función estética o estructural clara.
          </p>

          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Estructura Recomendada para una Bio Exitosa:</h3>
            <div className="space-y-2 text-sm text-slate-300 font-mono">
              <p className="text-pink-400 font-bold">1. Identidad / Nombre Visible:</p>
              <p className="pl-4">✦ María | Fotógrafa ✦</p>

              <p className="text-pink-400 font-bold">2. Nicho y Actividad:</p>
              <p className="pl-4">📸 Retratos y proyectos visuales en México</p>

              <p className="text-pink-400 font-bold">3. Pilares de Contenido (Separados con puntos o barras):</p>
              <p className="pl-4">Fotografía • Viajes • Lifestyle</p>

              <p className="text-pink-400 font-bold">4. Llamada a la Acción (CTA con Flecha):</p>
              <p className="pl-4">→ Mira mi portafolio aquí abajo ↓</p>
            </div>
          </div>

          <p className="text-slate-300">
            Si deseas explorar estructuras específicas para bios cortas o de negocios, consulta nuestra guía completa sobre{' '}
            <Link href="/letras-para-instagram/letras-para-bio" className="text-pink-400 underline hover:text-pink-300">
              letras para bio de Instagram
            </Link>.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="space-y-6" id="errores-comunes">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            5 Errores comunes al usar símbolos en Instagram
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">1. Sobrecargar con demasiados símbolos</h3>
                <p className="text-sm text-slate-300">
                  Colocar corazones o estrellas alrededor de cada palabra produce saturación visual y dificulta la lectura rápida de tu perfil.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">2. Mezclar estilos sin intención</h3>
                <p className="text-sm text-slate-300">
                  Mezclar marcos góticos, flores cute y flechas minimalistas en la misma línea puede dar un aspecto desordenado. Mantén la coherencia visual.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">3. Confundir Nombre Visible con Nombre de Usuario (@handle)</h3>
                <p className="text-sm text-slate-300">
                  El nombre de usuario (<code className="text-pink-300">@usuario</code>) restringe la mayoría de caracteres especiales. Úsalos únicamente en tu <strong>Nombre visible</strong>.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">4. Usar caracteres incompatibles con lectores de pantalla</h3>
                <p className="text-sm text-slate-300">
                  Algunos símbolos Unicode complejos no pueden ser interpretados por herramientas de accesibilidad. Prioriza siempre la claridad del texto.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-base">5. No probar el texto antes de publicar</h3>
                <p className="text-sm text-slate-300">
                  Un símbolo que luce perfecto en la web puede verse cortado en pantallas pequeñas de móvil. Revisa el resultado final tras guardar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use the Conversor Engine with Symbols */}
        <section className="space-y-6 bg-slate-950/70 border border-slate-800 p-6 sm:p-8 rounded-2xl" id="combinar-conversor">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-pink-400" />
            Cómo combinar símbolos con el conversor de Letras Bonitas
          </h2>
          <p>
            Para obtener el resultado más atractivo en tu perfil, puedes utilizar nuestro{' '}
            <Link href="/conversor-de-letras" className="text-pink-400 underline hover:text-pink-300">
              conversor de letras
            </Link>{' '}
            principal y seguir este flujo recomendado:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300">
            <li>Escribe tu nombre o frase en la caja de texto.</li>
            <li>Elige una tipografía estilizada como{' '}
              <Link href="/letras-para-instagram/letras-cursivas-para-instagram" className="text-pink-400 underline hover:text-pink-300">
                letras cursivas para Instagram
              </Link>{' '}
              o negritas.
            </li>
            <li>Agrega un símbolo decorativo al inicio y al final (ejemplo: <span className="font-mono text-pink-300">✦ 𝓒𝓪𝓶𝓲𝓵𝓪 ✦</span>).</li>
            <li>Pulsa el botón de copiar y pégalo directamente en tu bio de Instagram.</li>
          </ol>
        </section>

        {/* CONTEXTUAL TOOL CTA */}
        <ToolCTA
          targetId="main-tool"
          title="¿Buscas el símbolo perfecto para tu perfil?"
          description="Explora nuestra biblioteca interactiva arriba con corazones, estrellas, flechas y divisores listos para copiar con 1 clic."
          buttonText="Subir al Buscador de Símbolos"
        />

        {/* FAQ Accordion UI Section */}
        <section className="space-y-6" id="faq">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
            Preguntas frecuentes sobre símbolos para Instagram
          </h2>
          <p>
            Respuestas a las dudas más comunes sobre la compatibilidad y el uso de caracteres especiales Unicode en Instagram:
          </p>

          <SymbolFaqSection />
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-pink-900/30 via-purple-900/20 to-slate-900 border border-pink-500/20 rounded-2xl p-6 sm:p-8 space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Personaliza tu Instagram con símbolos bonitos hoy
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Los símbolos para Instagram son una herramienta sencilla y rápida para personalizar tu bio, estructurar tu contenido y destacar tu perfil. Selecciona tus caracteres favoritos de nuestra colección, combínalos con fuentes bonitas y copia el resultado en un clic.
          </p>
          <div className="pt-2">
            <a
              href="#main-tool"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MousePointerClick className="w-5 h-5" />
              <span>Ir al Generador de Símbolos</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
