import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Flame,
  Zap,
  Star,
  Shield,
  HelpCircle,
  Crown,
  Smile,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import GameNameIdeasSection, { IdeaCategory } from '@/components/nombres-para-juegos/GameNameIdeasSection';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Nombres Chidos para Juegos: Generador y Nicks con Estilo',
  description:
    'Generador de nombres chidos para juegos online gratis. Encuentra nicks gamer originales, con símbolos, aesthetic y de combate para copiar y pegar.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-chidos/'
  },
  openGraph: {
    title: 'Nombres Chidos para Juegos: Generador y Nicks con Estilo',
    description:
      'Crea los nombres más chidos para tus videojuegos favoritos. Opciones originales con letras bonitas y símbolos listas para copiar.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-chidos/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Nombres Chidos para Juegos - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres Chidos para Juegos: Generador y Nicks con Estilo',
    description:
      'Generador de nombres chidos para gamers: personaliza tu nick con símbolos, fuentes y estilo propio.',
    images: ['https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const CHIDOS_FAQ_ITEMS = [
  {
    question: '¿Qué hace que un nombre para juegos sea considerado "chido"?',
    answer:
      'Un nombre chido destaca por tener ritmo, personalidad y un toque visual llamativo. En México y Latinoamérica, los nicks chidos combinan palabras contundentes con letras especiales (como cursiva, gótico o negrita) y símbolos decorativos como 亗, ⚡, ★ o 〆 sin llegar a sobrecargar la lectura.'
  },
  {
    question: '¿Cómo puedo personalizar un nombre para que se vea más chido?',
    answer:
      'Escribe tu palabra favorita en nuestro generador y explora las categorías "Chidos" o "Aesthetic". Puedes añadir prefijos como "El", "Don" o "Rey", o encerrar tu apodo entre símbolos estilizados como 『 』 o 彡 彡.'
  },
  {
    question: '¿Los nombres chidos se pueden usar en Free Fire, Roblox y COD?',
    answer:
      '¡Sí! Los nombres generados están compuestos por caracteres Unicode universales compatibles con la gran mayoría de juegos móviles y de computadora.'
  },
  {
    question: '¿Puedo copiar los nombres chidos con un solo toque?',
    answer:
      'Totalmente. Cada resultado incluye su propio botón de copiado que transfiere el nick con todos sus símbolos directamente al portapapeles de tu dispositivo.'
  }
];

const CHIDOS_IDEAS_CATEGORIES: IdeaCategory[] = [
  {
    title: 'Nombres Chidos y Letales',
    iconName: 'flame',
    color: 'emerald',
    description: 'Nicks con actitud de combate para liderar las partidas.',
    names: [
      '★FURIA・PRO★',
      '亗EL・PATRON亗',
      '⚡K1LL3R・MEX⚡',
      '〆BALA・FRÍA〆',
      'メVORTEX・GGメ',
      '𒆜AZTECA・PRO𒆜',
      '亗REY・DEL・NORTE亗',
      '彡TORMENTA彡'
    ]
  },
  {
    title: 'Nombres Chidos con Onda Mexicana',
    iconName: 'crown',
    color: 'amber',
    description: 'Inspirados en la cultura gamer urbana de México.',
    names: [
      'ElChingonGG',
      'CalaveraMex',
      'NéctarNegro',
      'DonDesmadre',
      'ElPatroncito',
      'FuriaNorteña',
      'QuetzalPro',
      'AguilaReal'
    ]
  },
  {
    title: 'Nombres Chidos y Aesthetic',
    iconName: 'sparkles',
    color: 'pink',
    description: 'Estilo visual limpio, moderno y con vibras cósmicas.',
    names: [
      'f u r i a ✧',
      '𝔈𝔠𝔩𝔦𝔭𝔰𝔢',
      '𝕤𝕥𝕒𝕣・𝕓𝕠𝕪',
      '『AURA・PRO』',
      '☾ Nebulosa ☽',
      '✦ AstroBoy ✦'
    ]
  },
  {
    title: 'Nombres Chidos Cortos',
    iconName: 'zap',
    color: 'cyan',
    description: 'Nicks de 3 y 4 letras que lucen directos y contundentes.',
    names: [
      'RAZ',
      'VEX',
      'KAI',
      'ZOD',
      'NOX',
      'LYNX',
      'NEO',
      'ZEUS'
    ]
  }
];

export default function NombresChidosPage() {
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nombres Chidos para Juegos',
        item: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-chidos/'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generador de Nombres Chidos para Juegos - Letras Bonitas',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-chidos/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Generador en línea gratis de nombres chidos para juegos con letras especiales, fuentes y símbolos para copiar y pegar.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CHIDOS_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <div className="silo-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <Link href="/nombres-para-juegos/" className="breadcrumb-link">
            Nombres para Juegos
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Nombres Chidos</span>
        </div>
      </nav>

      {/* Hero Section Centered */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Flame size={16} className="sparkle-icon" color="#F472B6" />
            <span>Generador de Nombres Chidos</span>
          </div>

          <h1 className="hero-h1">
            Nombres Chidos para Juegos
          </h1>

          <p className="hero-tagline">
            Crea los nombres más chidos, con estilo y símbolos para tus partidas
          </p>

          <p className="hero-description">
            ¿Quieres un nombre con verdadera personalidad para tus partidas? Crea los nombres más chidos con letras estilizadas, adornos gamer y símbolos pro listos para copiar y usar en Free Fire, Roblox, Call of Duty, Fortnite y más.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Nombres con Onda Mex</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Copiado Rápido en 1 Clic</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>100% Gratis y Compatible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Tool Centered in First Viewport */}
      <div style={{ maxWidth: '1160px', margin: '-1.5rem auto 0', padding: '0 1rem' }}>
        <GameNameGenerator
          badgeLabel="NOMBRES CHIDOS"
          title="Generador de Nombres Chidos"
          subtitle="Escribe tu palabra, selecciona la categoría que más te guste y copia al instante nombres chidos y con estilo para tus videojuegos."
          defaultInput="Furia"
        />
      </div>

      <div className="cp-container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>

      {/* Curated Ideas */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Ideas de Nombres Chidos para Copiar y Pegar
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Selección de nombres chidos y originales listos para usar en un solo toque:
        </p>

        <GameNameIdeasSection categories={CHIDOS_IDEAS_CATEGORIES} />
      </section>

      {/* Internal Navigation */}
      <section
        style={{
          background: 'rgba(30, 41, 59, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '1.75rem',
          marginBottom: '3.5rem'
        }}
      >
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem' }}>
          Más herramientas del ecosistema
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Continúa explorando recursos para jugadores en Letras Bonitas:
        </p>

        <div className="game-grid-3">
          <Link
            href="/nombres-para-juegos/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1rem',
              color: '#F1F5F9',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.92rem'
            }}
          >
            <span>Nombres para Juegos</span>
            <ArrowRight size={16} color="#818CF8" />
          </Link>

          <Link
            href="/nombres-para-juegos/nicks/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1rem',
              color: '#F1F5F9',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.92rem'
            }}
          >
            <span>Nicks para Juegos</span>
            <ArrowRight size={16} color="#F472B6" />
          </Link>

          <Link
            href="/conversor-de-letras/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1rem',
              color: '#F1F5F9',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.92rem'
            }}
          >
            <span>Conversor de Letras</span>
            <ArrowRight size={16} color="#34D399" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              padding: '0.3rem 0.85rem',
              borderRadius: '999px',
              color: '#A5B4FC',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}
          >
            <HelpCircle size={14} />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' }}>
            Preguntas Frecuentes sobre Nombres Chidos
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
            Todo lo que necesitas saber para encontrar y personalizar un nombre chido para jugar.
          </p>
        </div>

        <SEOArticleFaqAccordion faqs={CHIDOS_FAQ_ITEMS} />
      </section>
      </div>
    </div>
  );
}
