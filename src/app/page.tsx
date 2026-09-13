import React from 'react';
import type { Metadata } from 'next';
import { FontGenerator } from '@/components/font-generator/FontGenerator';
import { SEOContent } from '@/components/seo/SEOContent';
import { Sparkles, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Letras Bonitas para Copiar y Pegar | Gratis',
  description:
    'Crea letras bonitas para copiar y pegar. Explora estilos cursivos, góticos, aesthetic, elegantes y más para Instagram, juegos y redes sociales.',
  alternates: {
    canonical: 'https://letrasbonitas.com/'
  },
  openGraph: {
    title: 'Letras Bonitas para Copiar y Pegar | Gratis',
    description:
      'Genera letras cursivas, aesthetic, góticas y más estilos para copiar y pegar al instante en Instagram, WhatsApp y juegos.',
    url: 'https://letrasbonitas.com/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Bonitas para Copiar y Pegar',
    description:
      'Transforma tu texto en letras bonitas, cursivas, góticas y aesthetic al instante gratis.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HomePage() {
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Letras Bonitas',
    url: 'https://letrasbonitas.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://letrasbonitas.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Letras Bonitas — Generador de Fuentes Unicode',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://letrasbonitas.com/'
      }
    ]
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero Section & Master Interactive Generator Tool */}
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="sparkle-icon" />
            <span>Generador de Fuentes Unicode #1 en Español</span>
          </div>

          <h1 className="hero-h1">Letras Bonitas para Copiar y Pegar</h1>

          <p className="hero-tagline">
            Genera letras cursivas, aesthetic, góticas y más estilos para copiar y pegar al instante.
          </p>

          <p className="hero-description">
            Escribe cualquier frase y transfórmala al instante en más de 350 fuentes cursivas, góticas,
            aesthetic, versalitas y decorativas para tu biografía de Instagram, TikTok, WhatsApp y nicknames.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <Zap size={16} />
              <span>Transformación instantánea en vivo</span>
            </div>
            <div className="highlight-item">
              <ShieldCheck size={16} />
              <span>Sin registro ni descarga de fuentes</span>
            </div>
            <div className="highlight-item">
              <HeartHandshake size={16} />
              <span>100% Gratis e ilimitado</span>
            </div>
          </div>

          {/* Core Fancy Font Generator Tool */}
          <FontGenerator />
        </div>
      </section>

      {/* SEO Informational Content & SILO Hub */}
      <section className="seo-wrapper-section">
        <div className="seo-container">
          <SEOContent />
        </div>
      </section>
    </>
  );
}
