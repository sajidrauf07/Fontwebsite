import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FreeFireInsaneGenerator from '@/components/free-fire-insane/FreeFireInsaneGenerator';
import RandomInsaneNameGenerator from '@/components/free-fire-insane/RandomInsaneNameGenerator';
import InsaneSymbolDecorator from '@/components/free-fire-insane/InsaneSymbolDecorator';
import InsaneNicheIdeasSection from '@/components/free-fire-insane/InsaneNicheIdeasSection';
import InsaneFaqSection from '@/components/free-fire-insane/InsaneFaqSection';
import { FREE_FIRE_INSANE_FAQ_ITEMS } from '@/data/freeFireInsaneData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Shield,
  AlertTriangle,
  Flame,
  Zap,
  Skull
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nombres Insanos para Free Fire | Generador y Nombres para Copiar',
  description:
    'Genera nombres insanos, llamativos y estilosos para Free Fire. Copia y pega apodos savage, dark, pro y con símbolos para tu nick de Free Fire gratis.',
  alternates: {
    canonical: 'https://letrasbonitas.com/nombres-para-free-fire/nombres-insanos/'
  },
  openGraph: {
    title: 'Nombres Insanos para Free Fire | Generador y Nombres para Copiar',
    description:
      'Descubre y copia ideas de nombres insanos originales con símbolos Pro y estilos de letras avanzadas para Free Fire.',
    url: 'https://letrasbonitas.com/nombres-para-free-fire/nombres-insanos/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres Insanos para Free Fire (Gratis)',
    description:
      'Catálogo y generador de apodos insanos, savage, dark y con símbolos para copiar en Free Fire.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function NombresInsanosPage() {
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
        name: 'Nombres para Free Fire',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nombres Insanos para Free Fire',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/nombres-insanos/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FREE_FIRE_INSANE_FAQ_ITEMS.map((item) => ({
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
          <Link href="/nombres-para-free-fire/" className="breadcrumb-link">Nombres para Free Fire</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Nombres Insanos para Free Fire</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Flame size={16} className="sparkle-icon" color="#F59E0B" />
              <span>Estilos Insanos & Savage • Free Fire Subcategoría</span>
            </div>

            <h1 className="hero-h1">
              Nombres Insanos para <span className="gradient-text">Free Fire</span>
            </h1>

            <p className="hero-tagline">
              Genera nombres insanos, llamativos y estilosos para Free Fire y cópialos fácilmente.
            </p>

            <p className="seo-subtext text-center">
              Escribe tu nombre o apodo y crea diferentes combinaciones con letras especiales, símbolos y estilos para encontrar una opción que destaque.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#generador-nombres-insanos" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Crear nombre insano 🔥
              </a>
              <a href="#explorar-nombres" className="cp-copy-all-btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Explorar nombres
              </a>
            </div>
          </header>

          {/* Primary Interactive Subcategory Tool */}
          <main id="main-content">
            <FreeFireInsaneGenerator />

            {/* Random Insane Name Generator */}
            <RandomInsaneNameGenerator />

            {/* Insane Symbol Decorator */}
            <InsaneSymbolDecorator />

            {/* Curated Insane Niche Ideas Showcase */}
            <InsaneNicheIdeasSection />

            {/* Compatibility & Availability Disclaimer Section */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <Shield size={20} />
              </div>
              <h2>¿Funcionan estos nombres insanos en Free Fire?</h2>
              <p>
                Información transparente sobre la disponibilidad y compatibilidad de caracteres Unicode e insanos:
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
                  <h3 style={{ fontSize: '1.05rem', color: '#f59e0b', marginBottom: '0.5rem', fontWeight: 700 }}>
                    1. Compatibilidad de Símbolos Unicode
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Los apodos insanos utilizan caracteres y marcos Unicode universales probados en la mayoría de versiones móviles de Free Fire.
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
                    Esta herramienta no comprueba si un apodo insano en vivo ya está registrado por otro jugador. Debes probar el texto copiado directamente en la pantalla de cambio de nick del juego.
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
                    Free Fire establece un límite de 12 caracteres para los apodos del perfil. Elige configuraciones compactas cuando añadas marcos insanos.
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
              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'rgba(245, 158, 11, 0.4)', background: 'linear-gradient(135deg, rgba(120, 53, 15, 0.4), rgba(15, 23, 42, 0.9))' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#F59E0B' }}>
                    <Flame size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Generador Principal de Free Fire</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                    Accede a la página principal del SILO de Free Fire con todos los modos de generación y estilos generales.
                  </p>
                </div>
                <Link
                  href="/nombres-para-free-fire/"
                  className="cp-card-copy-btn copied"
                  style={{ textDecoration: 'none', justifyContent: 'space-between' }}
                >
                  <span>Ir al Pillar de Free Fire</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#818CF8' }}>
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2" style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Catálogo General de Nombres</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                    Explora ideas de nombres bonitos, aesthetic y elegantes para Free Fire.
                  </p>
                </div>
                <Link
                  href="/nombres-para-free-fire/nombres/"
                  className="cp-card-copy-btn"
                  style={{ textDecoration: 'none', justifyContent: 'space-between' }}
                >
                  <span>Ir a Nombres para Free Fire</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <InsaneFaqSection />

            {/* SILO Interlinking Navigation */}
            <section className="silo-nav-block">
              <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
              <div className="silo-links-grid">
                <Link href="/nombres-para-free-fire/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Pillar Principal</span>
                    <h4 className="silo-card-heading">Generador Free Fire</h4>
                    <p className="silo-card-desc">Página principal del SILO de Free Fire con modos Pro.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/nombres-para-free-fire/nombres/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Nombres para Free Fire</h4>
                    <p className="silo-card-desc">Ideas y estilos de apodos bonitos y aesthetic.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/letras-para-instagram/letras-para-nombres/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#818cf8' }}>SILO Instagram</span>
                    <h4 className="silo-card-heading">Letras para Nombres</h4>
                    <p className="silo-card-desc">Fuentes y nombres elegantes para redes sociales.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/letras-para-instagram/simbolos-para-instagram/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#fbbf24' }}>Herramienta Símbolos</span>
                    <h4 className="silo-card-heading">Símbolos para Instagram</h4>
                    <p className="silo-card-desc">Colección de corazones, estrellas y separadores.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/conversor-de-letras/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag">Pillar Principal</span>
                    <h4 className="silo-card-heading">Conversor de Letras</h4>
                    <p className="silo-card-desc">Accede al conversor universal con más de 350 estilos.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag">Inicio</span>
                    <h4 className="silo-card-heading">Letras Bonitas</h4>
                    <p className="silo-card-desc">Página principal de herramientas y generadores.</p>
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
