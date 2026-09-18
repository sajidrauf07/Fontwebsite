import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import NicknameGenerator from '@/components/free-fire-nicknames/NicknameGenerator';
import RandomNicknameGenerator from '@/components/free-fire-nicknames/RandomNicknameGenerator';
import NicknameSymbolDecorator from '@/components/free-fire-nicknames/NicknameSymbolDecorator';
import NicknameNicheIdeasSection from '@/components/free-fire-nicknames/NicknameNicheIdeasSection';
import NicknameFaqSection from '@/components/free-fire-nicknames/NicknameFaqSection';
import { FREE_FIRE_APODOS_FAQ_ITEMS } from '@/data/freeFireApodosData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Shield,
  AlertTriangle,
  Flame,
  Smile
} from 'lucide-react';
import {
  ReadingProgress,
  ToolCTA
} from '@/components/article';

export const metadata: Metadata = {
  title: 'Apodos para Free Fire | Bonitos, Originales y para Copiar',
  description:
    'Crea y copia apodos originales, bonitos y estilosos para Free Fire. Generador de nicknames con símbolos, letras especiales, fuentes pro y aesthetic gratis.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-free-fire/apodos'
  },
  openGraph: {
    title: 'Apodos para Free Fire | Bonitos, Originales y para Copiar',
    description:
      'Descubre y copia ideas de apodos y nicknames originales con símbolos y letras bonitas para Free Fire.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire/apodos',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apodos para Free Fire (Gratis)',
    description:
      'Generador y catálogo de apodos bonitos, originales y con símbolos para copiar en Free Fire.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ApodosSubcategoryPage() {
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
        name: 'Apodos para Free Fire',
        item: 'https://theletrasbonitas.com/nombres-para-free-fire/apodos/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FREE_FIRE_APODOS_FAQ_ITEMS.map((item) => ({
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
      <ReadingProgress />

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
          <Link href="/nombres-para-free-fire" className="breadcrumb-link">Nombres para Free Fire</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Apodos para Free Fire</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Smile size={16} className="sparkle-icon" color="#0EA5E9" />
              <span>Generador de Nicknames • Free Fire Subcategoría</span>
            </div>

            <h1 className="hero-h1">
              Apodos para <span className="gradient-text">Free Fire</span>
            </h1>

            <p className="hero-tagline">
              Crea apodos originales, bonitos y estilosos para Free Fire y cópialos fácilmente.
            </p>

            <p className="seo-subtext text-center">
              Escribe tu nombre, palabra o apodo y genera diferentes estilos con letras especiales y símbolos.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#generador-apodos-ff" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none', background: 'linear-gradient(135deg, #0EA5E9, #6366F1)' }}>
                Crear mi apodo 🔥
              </a>
              <a href="#explorar-apodos" className="cp-copy-all-btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Explorar apodos
              </a>
            </div>
          </header>

          {/* TABLE OF CONTENTS */}

          {/* Primary Interactive Subcategory Tool */}
          <main id="main-content">
            <div id="generador-apodos">
              <NicknameGenerator />
            </div>

            {/* Random Nickname Generator */}
            <div id="apodos-aleatorios">
              <RandomNicknameGenerator />
            </div>

            {/* Nickname Symbol Decorator */}
            <div id="decorador-simbolos">
              <NicknameSymbolDecorator />
            </div>

            {/* Curated Nickname Showcase */}
            <div id="catalogo-apodos">
              <NicknameNicheIdeasSection />
            </div>

            {/* Compatibility & Availability Disclaimer Section */}
            <section className="seo-card-section mb-12" id="compatibilidad-ff">
              <div className="seo-icon-badge">
                <Shield size={20} />
              </div>
              <h2>¿Funcionan estos apodos en Free Fire?</h2>
              <p>
                Información transparente sobre la disponibilidad y compatibilidad de caracteres Unicode:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  marginTop: '1.25rem'
                }}
              >
                <div
                  style={{
                    background: 'var(--card-bg, #1e2029)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))'
                  }}
                >
                  <h3 style={{ fontSize: '1.05rem', color: '#0ea5e9', marginBottom: '0.5rem', fontWeight: 700 }}>
                    1. Compatibilidad Unicode
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Los apodos generados utilizan símbolos tipográficos universales aceptados en las versiones móviles de Free Fire.
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--card-bg, #1e2029)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))'
                  }}
                >
                  <h3 style={{ fontSize: '1.05rem', color: '#818cf8', marginBottom: '0.5rem', fontWeight: 700 }}>
                    2. Verificación de Disponibilidad
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Este generador no comprueba si un apodo está disponible en vivo en Free Fire. Debes probar el texto copiado directamente en la casilla de nick del juego.
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--card-bg, #1e2029)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))'
                  }}
                >
                  <h3 style={{ fontSize: '1.05rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 700 }}>
                    3. Límite de Caracteres
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Recuerda que Free Fire limita los nicknames a 12 caracteres. Selecciona combinaciones compactas.
                  </p>
                </div>
              </div>

              <div
                className="mt-6"
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px dashed rgba(148, 163, 184, 0.3)',
                  borderRadius: '10px',
                  padding: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontWeight: 600, fontSize: '0.9rem' }}>
                  <AlertTriangle size={16} />
                  <span>Aviso legal independiente</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.35rem 0 0 0' }}>
                  Esta página es un servicio independiente de utilidades tipográficas de Letras Bonitas. No existe afiliación ni patrocinio de Garena ni Free Fire.
                </p>
              </div>
            </section>

            {/* Parent SILO CTA Callout */}
            <div className="steps-grid mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'rgba(14, 165, 233, 0.4)', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(15, 23, 42, 0.9))' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#0EA5E9' }}>
                    <Flame size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Generador Principal de Free Fire</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                    Accede a la página principal del SILO de Free Fire con todas las herramientas de nombres y generadores.
                  </p>
                </div>
                <Link
                  href="/nombres-para-free-fire"
                  className="cp-card-copy-btn copied"
                  style={{ textDecoration: 'none', justifyContent: 'space-between', background: '#0EA5E9' }}
                >
                  <span>Ir al Pillar de Free Fire</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#F59E0B' }}>
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2" style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Nombres Insanos para Free Fire</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                    Descubre apodos oscuros, savage, boss y agresivos para tu perfil de juego.
                  </p>
                </div>
                <Link
                  href="/nombres-para-free-fire/nombres-insanos"
                  className="cp-card-copy-btn"
                  style={{ textDecoration: 'none', justifyContent: 'space-between' }}
                >
                  <span>Probar Nombres Insanos</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* CONTEXTUAL TOOL CTA */}
            <ToolCTA
              targetId="generador-apodos"
              title="¿Listo para crear tu nuevo apodo de Free Fire?"
              description="Escribe cualquier nombre o palabra arriba, añade símbolos insanos y copia tu nuevo nick para el juego."
              buttonText="Subir al Generador de Apodos"
            />

            {/* Frequently Asked Questions */}
            <div id="faq">
              <NicknameFaqSection />
            </div>

            {/* SILO Interlinking Navigation */}
            <section className="silo-nav-block">
              <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
              <div className="silo-links-grid">
                <Link href="/nombres-para-free-fire" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Pillar Principal</span>
                    <h4 className="silo-card-heading">Generador Free Fire</h4>
                    <p className="silo-card-desc">Página principal del SILO de Free Fire con modos Pro.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/nombres-para-free-fire/nombres" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Nombres para Free Fire</h4>
                    <p className="silo-card-desc">Ideas y estilos de apodos bonitos y aesthetic.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/nombres-para-free-fire/nombres-insanos" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Nombres Insanos</h4>
                    <p className="silo-card-desc">Apodos agresivos, savage, dark y pro para Free Fire.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/letras-para-instagram/letras-para-nombres" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#818cf8' }}>SILO Instagram</span>
                    <h4 className="silo-card-heading">Letras para Nombres</h4>
                    <p className="silo-card-desc">Fuentes y nombres elegantes para redes sociales.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/letras-para-instagram/simbolos-para-instagram" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#fbbf24' }}>Herramienta Símbolos</span>
                    <h4 className="silo-card-heading">Símbolos para Instagram</h4>
                    <p className="silo-card-desc">Colección de corazones, estrellas y separadores.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/conversor-de-letras" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag">Pillar Principal</span>
                    <h4 className="silo-card-heading">Conversor de Letras</h4>
                    <p className="silo-card-desc">Accede al conversor universal con más de 350 estilos.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
