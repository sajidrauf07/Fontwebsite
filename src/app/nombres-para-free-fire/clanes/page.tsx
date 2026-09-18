import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ClanNameGenerator from '@/components/free-fire-clans/ClanNameGenerator';
import ClanTagGenerator from '@/components/free-fire-clans/ClanTagGenerator';
import RandomClanGenerator from '@/components/free-fire-clans/RandomClanGenerator';
import ClanSymbolDecorator from '@/components/free-fire-clans/ClanSymbolDecorator';
import ClanNicheIdeasSection from '@/components/free-fire-clans/ClanNicheIdeasSection';
import ClanFaqSection from '@/components/free-fire-clans/ClanFaqSection';
import { FREE_FIRE_CLANES_FAQ_ITEMS } from '@/data/freeFireClanesData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Shield,
  AlertTriangle,
  Flame,
  Users,
  Tag
} from 'lucide-react';
import {
  ReadingProgress,
  ToolCTA
} from '@/components/article';

export const metadata: Metadata = {
  title: 'Nombres para Clanes de Free Fire | Originales y para Copiar',
  description:
    'Encuentra y crea nombres originales para clanes de Free Fire. Generador de nombres de clan, tags de equipo y símbolos pro para copiar gratis.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-free-fire/clanes'
  },
  openGraph: {
    title: 'Nombres para Clanes de Free Fire | Originales y para Copiar',
    description:
      'Descubre y crea nombres de clanes originales con símbolos Pro y tags de equipo para Free Fire.',
    url: 'https://theletrasbonitas.com/nombres-para-free-fire/clanes',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Clanes de Free Fire (Gratis)',
    description:
      'Catálogo y generador de nombres de clan, escuadras, tags y símbolos pro para copiar en Free Fire.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ClanesSubcategoryPage() {
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
        name: 'Nombres para Clanes de Free Fire',
        item: 'https://theletrasbonitas.com/nombres-para-free-fire/clanes/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FREE_FIRE_CLANES_FAQ_ITEMS.map((item) => ({
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
          <span className="breadcrumb-current">Nombres para Clanes de Free Fire</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Users size={16} className="sparkle-icon" color="#10B981" />
              <span>Generador de Clanes & Tags • Free Fire Subcategoría</span>
            </div>

            <h1 className="hero-h1">
              Nombres para Clanes de <span className="gradient-text">Free Fire</span>
            </h1>

            <p className="hero-tagline">
              Encuentra nombres originales y estilosos para tu clan de Free Fire y crea opciones listas para copiar.
            </p>

            <p className="seo-subtext text-center">
              Escribe una palabra o el nombre de tu equipo y genera diferentes estilos con letras especiales, símbolos y combinaciones.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#generador-clanes-ff" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none', background: 'linear-gradient(135deg, #10B981, #0EA5E9)' }}>
                Crear nombre de clan 🛡️
              </a>
              <a href="#explorar-clanes" className="cp-copy-all-btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Explorar clanes
              </a>
            </div>
          </header>

          {/* TABLE OF CONTENTS */}

          {/* Primary Interactive Subcategory Tool */}
          <main id="main-content">
            <div id="generador-clanes">
              <ClanNameGenerator />
            </div>

            {/* Clan Tag Generator */}
            <div id="generador-tags">
              <ClanTagGenerator />
            </div>

            {/* Random Clan Generator */}
            <div id="clanes-aleatorios">
              <RandomClanGenerator />
            </div>

            {/* Clan Symbol Decorator */}
            <div id="decorador-clanes">
              <ClanSymbolDecorator />
            </div>

            {/* Curated Clan Showcase */}
            <div id="catalogo-clanes">
              <ClanNicheIdeasSection />
            </div>

            {/* Compatibility & Availability Disclaimer Section */}
            <section className="seo-card-section mb-12" id="compatibilidad-clanes">
              <div className="seo-icon-badge">
                <Shield size={20} />
              </div>
              <h2>¿Funcionan estos nombres de clan en Free Fire?</h2>
              <p>
                Información transparente sobre la disponibilidad y compatibilidad de nombres y tags de clanes:
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
                  <h3 style={{ fontSize: '1.05rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 700 }}>
                    1. Símbolos Unicode para Clanes
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Los marcos y tipografías de clan utilizan caracteres Unicode universales compatibles con las escuadras de Free Fire.
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
                    Este generador no comprueba si un nombre de clan o tag ya existe en el juego. Debes probar el nombre copiado en el formulario de registro del clan.
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
                  <h3 style={{ fontSize: '1.05rem', color: '#f59e0b', marginBottom: '0.5rem', fontWeight: 700 }}>
                    3. Límite de Caracteres
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Recuerda que los clanes tienen límites de caracteres específicos en la plataforma. Mantén nombres e iniciales compactos.
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
              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'rgba(16, 185, 129, 0.4)', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.9))' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#10B981' }}>
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
                  style={{ textDecoration: 'none', justifyContent: 'space-between', background: '#10B981' }}
                >
                  <span>Ir al Pillar de Free Fire</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#0EA5E9' }}>
                    <Tag size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2" style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Apodos para Free Fire</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                    Descubre apodos individuales bonitos, aesthetic y con símbolos.
                  </p>
                </div>
                <Link
                  href="/nombres-para-free-fire/apodos"
                  className="cp-card-copy-btn"
                  style={{ textDecoration: 'none', justifyContent: 'space-between' }}
                >
                  <span>Probar Apodos para Free Fire</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* CONTEXTUAL TOOL CTA */}
            <ToolCTA
              targetId="generador-clanes"
              title="¿Listo para crear el nombre de tu clan?"
              description="Genera nombres imponentes, iniciales de equipo y tags decorados con un solo clic."
              buttonText="Subir al Generador de Clanes"
            />

            {/* Frequently Asked Questions */}
            <div id="faq">
              <ClanFaqSection />
            </div>

            {/* SILO Interlinking Navigation */}
            <section className="silo-nav-block">
              <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
              <div className="silo-links-grid">
                <Link href="/nombres-para-free-fire" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Pillar Principal</span>
                    <h4 className="silo-card-heading">Generador Free Fire</h4>
                    <p className="silo-card-desc">Página principal del SILO de Free Fire con todos los modos.</p>
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

                <Link href="/nombres-para-free-fire/apodos" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#0ea5e9' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Apodos para Free Fire</h4>
                    <p className="silo-card-desc">Generador de nicknames personales con símbolos.</p>
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
