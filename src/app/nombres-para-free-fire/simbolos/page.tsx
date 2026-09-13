import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FreeFireSymbolsTool from '@/components/free-fire-symbols/FreeFireSymbolsTool';
import SymbolCombiner from '@/components/free-fire-symbols/SymbolCombiner';
import NameSymbolDecoratorTool from '@/components/free-fire-symbols/NameSymbolDecoratorTool';
import SymbolCollectionsSection from '@/components/free-fire-symbols/SymbolCollectionsSection';
import SymbolFaqSection from '@/components/free-fire-symbols/SymbolFaqSection';
import { FREE_FIRE_SIMBOLOS_FAQ_ITEMS } from '@/data/freeFireSimbolosData';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Shield,
  AlertTriangle,
  Flame,
  Star,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Símbolos para Free Fire | Bonitos, Especiales y para Copiar',
  description:
    'Encuentra y copia los mejores símbolos para Free Fire. Símbolos de coronas, estrellas, kanjis, corchetes, calaveras y decorativos para tu nick gratis.',
  alternates: {
    canonical: 'https://letrasbonitas.com/nombres-para-free-fire/simbolos/'
  },
  openGraph: {
    title: 'Símbolos para Free Fire | Bonitos, Especiales y para Copiar',
    description:
      'Catálogo completo y herramienta de combinación de símbolos bonitos, especiales y pro para Free Fire.',
    url: 'https://letrasbonitas.com/nombres-para-free-fire/simbolos/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos para Free Fire (Gratis)',
    description:
      'Explora y copia cientos de símbolos especiales, coronas, kanjis y decoraciones para Free Fire.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SimbolosSubcategoryPage() {
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
        name: 'Símbolos para Free Fire',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/simbolos/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FREE_FIRE_SIMBOLOS_FAQ_ITEMS.map((item) => ({
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
          <span className="breadcrumb-current">Símbolos para Free Fire</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Star size={16} className="sparkle-icon" color="#F59E0B" />
              <span>Librería & Combinador de Símbolos • Free Fire Subcategoría</span>
            </div>

            <h1 className="hero-h1">
              Símbolos para <span className="gradient-text">Free Fire</span>
            </h1>

            <p className="hero-tagline">
              Encuentra símbolos bonitos, especiales y decorativos para Free Fire y cópialos fácilmente.
            </p>

            <p className="seo-subtext text-center">
              Explora cientos de símbolos, combina tus favoritos y crea nombres y apodos con un estilo único.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#explorar-simbolos" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none', background: 'linear-gradient(135deg, #F59E0B, #EC4899)' }}>
                Explorar símbolos ✨
              </a>
              <a href="#decora-tu-nombre" className="cp-copy-all-btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Crear nombre
              </a>
            </div>
          </header>

          {/* Primary Interactive Symbol Discovery Tool */}
          <main id="main-content">
            <FreeFireSymbolsTool />

            {/* Symbol Combiner Tool */}
            <SymbolCombiner />

            {/* Name Decorator with 350+ Global Unicode Engine */}
            <div id="decora-tu-nombre">
              <NameSymbolDecoratorTool />
            </div>

            {/* Curated Symbol Collections Showcase */}
            <SymbolCollectionsSection />

            {/* Compatibility & Acceptance Disclaimer Section */}
            <section className="seo-card-section mb-12">
              <div className="seo-icon-badge">
                <Shield size={20} />
              </div>
              <h2>¿Funcionan todos los símbolos en Free Fire?</h2>
              <p>
                Información transparente sobre la disponibilidad y aceptación de símbolos gráficos Unicode:
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
                    1. Rendimiento y Compatibilidad
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    La inmensa mayoría de símbolos de esta página están basados en estándares Unicode universales reconocidos por iOS y Android.
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
                    2. Verificación Directa
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Esta herramienta proporciona un sistema cómodo para copiar y combinar símbolos. La aceptación final depende de las reglas internas de Free Fire al guardar el nombre.
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
                    3. Espacio de Caracteres
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    Ten en cuenta que algunos símbolos ocupan el equivalente a 2 caracteres estándar. Comprueba que el apodo no supere los 12 caracteres permitidos.
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
              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'rgba(245, 158, 11, 0.4)', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(15, 23, 42, 0.9))' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#F59E0B' }}>
                    <Flame size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Generador Principal de Free Fire</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                    Accede a la página principal del SILO de Free Fire con todas las herramientas de nombres y generadores.
                  </p>
                </div>
                <Link
                  href="/nombres-para-free-fire/"
                  className="cp-card-copy-btn copied"
                  style={{ textDecoration: 'none', justifyContent: 'space-between', background: '#F59E0B', color: '#000' }}
                >
                  <span>Ir al Pillar de Free Fire</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="step-card flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="step-icon-wrapper mb-3" style={{ color: '#818CF8' }}>
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2" style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Símbolos para Instagram</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                    Explora nuestra colección general de símbolos para bios, nombres y pies de foto en Instagram.
                  </p>
                </div>
                <Link
                  href="/letras-para-instagram/simbolos-para-instagram/"
                  className="cp-card-copy-btn"
                  style={{ textDecoration: 'none', justifyContent: 'space-between' }}
                >
                  <span>Ver Símbolos para Instagram</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <SymbolFaqSection />

            {/* SILO Interlinking Navigation */}
            <section className="silo-nav-block">
              <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
              <div className="silo-links-grid">
                <Link href="/nombres-para-free-fire/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Pillar Principal</span>
                    <h4 className="silo-card-heading">Generador Free Fire</h4>
                    <p className="silo-card-desc">Página principal del SILO de Free Fire con todos los modos.</p>
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

                <Link href="/nombres-para-free-fire/nombres-insanos/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#f59e0b' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Nombres Insanos</h4>
                    <p className="silo-card-desc">Apodos agresivos, savage, dark y pro para Free Fire.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/nombres-para-free-fire/apodos/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#0ea5e9' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Apodos para Free Fire</h4>
                    <p className="silo-card-desc">Generador de nicknames personales con símbolos.</p>
                  </div>
                  <ArrowRight size={18} className="silo-card-arrow" />
                </Link>

                <Link href="/nombres-para-free-fire/clanes/" className="silo-card-link">
                  <div className="silo-card-content">
                    <span className="silo-card-tag" style={{ color: '#10b981' }}>Subcategoría</span>
                    <h4 className="silo-card-heading">Nombres para Clanes</h4>
                    <p className="silo-card-desc">Nombres de clan, escuadras y tags de equipo.</p>
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
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
