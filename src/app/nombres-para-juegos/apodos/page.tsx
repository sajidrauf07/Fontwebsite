import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Sparkles,
  Gamepad2,
  Zap,
  Flame,
  Shield,
  Star,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Smile,
  Crown,
  ArrowRight
} from 'lucide-react';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import GameNameIdeasSection, { IdeaCategory } from '@/components/nombres-para-juegos/GameNameIdeasSection';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Apodos para Juegos: Generador de Apodos Gamer Chidos',
  description:
    'Crea apodos para juegos originales, chidos y con estilo para copiar y pegar. Generador de apodos gamer para Free Fire, Roblox, COD, Fortnite y Discord.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-juegos/apodos/'
  },
  openGraph: {
    title: 'Apodos para Juegos: Generador de Apodos Gamer Chidos',
    description:
      'Encuentra los mejores apodos para juegos con letras bonitas y símbolos. Genera, personaliza y copia tu apodo gamer en segundos.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/apodos/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Generador de Apodos para Juegos - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apodos para Juegos: Generador de Apodos Gamer Chidos',
    description:
      'Generador de apodos para juegos gratis: apodos pro, chidos, graciosos y aesthetic listos para copiar.',
    images: ['https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const APODOS_FAQ_ITEMS = [
  {
    question: '¿Cuál es la diferencia entre un apodo y un nick para juegos?',
    answer:
      'En la práctica son términos muy similares. El "nick" suele referirse a tu identificación técnica en el servidor o cuenta, mientras que el "apodo" tiene un matiz más personal o comunitario: cómo te llaman tus amigos de escuadra (por ejemplo, "El Carnicero", "El Capi", "Toxic", "Fénix").'
  },
  {
    question: '¿Cómo elegir un apodo gamer que infunda respeto?',
    answer:
      'Apuesta por palabras con fuerza acústica, conceptos mitológicos o vocablos cortos acompañados de símbolos sutiles como 亗 o ⚡. Evita números aleatorios largos que resten seriedad a tu apodo en las salas competitivas.'
  },
  {
    question: '¿Puedo copiar y pegar los apodos directamente en mi celular?',
    answer:
      '¡Sí! Todas las tarjetas de nuestro generador cuentan con un botón de copiado de un solo toque que guarda el apodo formateado en el portapapeles de tu teléfono Android o iPhone, listo para pegarse en Free Fire, Roblox, COD Mobile o Brawl Stars.'
  },
  {
    question: '¿Por qué algunos juegos bloquean ciertos apodos?',
    answer:
      'Los filtros automáticos de los videojuegos sancionan palabras malsonantes, dobles sentidos o caracteres especiales no soportados. Nuestro generador utiliza combinaciones seguras de Unicode que superan la mayoría de filtros de moderación en juegos populares.'
  },
  {
    question: '¿Cómo puedo hacer un apodo gracioso sin perder el estilo?',
    answer:
      'Usa la ironía: nombres que contrasten con tu verdadero nivel en partida, como "MancoConSuerte", "PingDe999", "TeFuiDeLobby" o "ModoSiesta". El humor en los apodos relaja a tu equipo y desconcierta a los rivales.'
  }
];

const APODOS_IDEAS_CATEGORIES: IdeaCategory[] = [
  {
    title: 'Apodos Imponentes y Pro',
    iconName: 'crown',
    color: 'emerald',
    description: 'Apodos fuertes con presencia intimidante en el campo de batalla.',
    names: [
      '亗EL・PATRON亗',
      '⚡DESTRUCTOR⚡',
      '〆VERDUGO〆',
      'メCAZADORメ',
      '꧁༒TITAN༒꧂',
      '亗REY・PRO亗',
      '𝕾𝖍𝖆𝖉𝖔𝖜𝕶𝖎𝖓𝖌',
      '𒆜GLADIADOR𒆜'
    ]
  },
  {
    title: 'Apodos Graciosos y Chistosos',
    iconName: 'smile',
    color: 'amber',
    description: 'Para jugar con amigos con ingenio y diversión.',
    names: [
      'ElMancoFeliz',
      'NoDisparesPls',
      'BalaDeSaliva',
      'TiroAlAire',
      'SeMeFueElWifi',
      'CasiTeGanoGG',
      'RevivemeWe',
      'PanConQueso'
    ]
  },
  {
    title: 'Apodos Cortos de Impacto',
    iconName: 'zap',
    color: 'cyan',
    description: 'Apodos compactos de 3 y 4 letras que se graban en la memoria.',
    names: [
      'RAZ',
      'VEX',
      'KAI',
      'ZOD',
      'NOX',
      'LYX',
      'ARES',
      'ZEUS',
      'NEO',
      'RYU'
    ]
  },
  {
    title: 'Apodos Aesthetic y Místicos',
    iconName: 'sparkles',
    color: 'pink',
    description: 'Combinaciones refinadas con toques cósmicos y letras delicadas.',
    names: [
      'Luna・Aura ✧',
      '𝔄𝔩𝔪𝔞𝔑𝔢𝔤𝔯𝔞',
      '𝕤𝕥𝕒𝕣𝕝𝕚𝕘𝕙𝕥',
      '『Eclipsia』',
      '☾ Nebulosa ☽',
      '☁ Sol Naciente ☁',
      '✦ Quimera ✦'
    ]
  }
];

export default function ApodosParaJuegosPage() {
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
        name: 'Apodos para Juegos',
        item: 'https://theletrasbonitas.com/nombres-para-juegos/apodos/'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generador de Apodos para Juegos - Letras Bonitas',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/apodos/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Generador gratis de apodos para juegos originales, pro, chidos y con letras bonitas para copiar y pegar.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: APODOS_FAQ_ITEMS.map((item) => ({
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
          <span className="breadcrumb-current">Apodos para Juegos</span>
        </div>
      </nav>

      {/* Hero Section Centered */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="sparkle-icon" color="#818CF8" />
            <span>Generador de Apodos Gamer</span>
          </div>

          <h1 className="hero-h1">
            Apodos para Juegos
          </h1>

          <p className="hero-tagline">
            Encuentra el apodo perfecto para tu estilo de juego en cada partida
          </p>

          <p className="hero-description">
            Ya sea que busques infundir respeto como líder de escuadra, divertirte con tus compas o lucir una estética limpia y misteriosa, genera y personaliza tu apodo gamer con nuestro generador gratis.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Apodos Pro y Chidos</span>
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
          badgeLabel="GENERADOR DE APODOS"
          title="Generador de Apodos para Juegos"
          subtitle="Ingresa tu palabra o apodo favorito, selecciona tu estilo preferido y copia al instante la mejor opción para tus partidas."
          defaultInput="Titan"
        />
      </div>

      <div className="cp-container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>

      {/* Curated Ideas */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Ideas de Apodos para Copiar y Pegar
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Selecciona cualquiera de estos apodos probados por la comunidad para copiarlo directo a tu portapapeles:
        </p>

        <GameNameIdeasSection categories={APODOS_IDEAS_CATEGORIES} />
      </section>

      {/* Guide Content */}
      <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.7, color: '#CBD5E1', marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Cómo elegir un apodo que defina tu reputación en el juego
        </h2>
        <p>
          Un <strong>apodo para juegos</strong> va más allá de un simple registro en pantalla: es la marca con la que tus compañeros de clan recuerdan tus mejores tiros y jugadas épicas.
          En el ecosistema competitivo de México y Latinoamérica, los apodos suelen mezclar elementos culturales, referencias a líderes históricos, animales míticos o toques de humor local.
        </p>

        <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
              <Crown size={18} /> Apodos de Jerarquía y Liderazgo
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Ideales para capitanes de clan o shotcallers: prefijos como <em>Patrón</em>, <em>Comandante</em>, <em>Fénix</em> o <em>Titán</em> transmiten autoridad y calma táctica en momentos críticos.
            </p>
          </div>

          <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
              <Zap size={18} /> Apodos Agresivos y de Fragger
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Si tu rol es rushear y conseguir eliminaciones tempranas, apodos como <em>Cazador</em>, <em>Viper</em>, <em>Rayo</em> o <em>Nox</em> reflejan rapidez de reflejos e instinto letal.
            </p>
          </div>
        </div>
      </article>

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
          Herramientas y páginas relacionadas
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Explora más opciones para personalizar tu perfil gamer en Letras Bonitas:
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
            href="/nombres-para-free-fire/apodos/"
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
            <span>Apodos para Free Fire</span>
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
            Preguntas Frecuentes sobre Apodos para Juegos
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
            Respuestas rápidas para elegir el apodo ideal y garantizar compatibilidad.
          </p>
        </div>

        <SEOArticleFaqAccordion faqs={APODOS_FAQ_ITEMS} />
      </section>
      </div>
    </div>
  );
}
