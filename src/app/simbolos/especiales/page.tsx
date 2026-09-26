import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Zap,
  Crown,
  Star,
  Copy,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Instagram,
  ShieldCheck,
  Compass
} from 'lucide-react';
import EspecialesSymbolExplorer from '@/components/symbols/EspecialesSymbolExplorer';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Símbolos Especiales para Copiar y Pegar: Rayos, Coronas y Cruces',
  description:
    'Colección de símbolos especiales para copiar y pegar con 1 clic. Encuentra rayos (⚡), coronas (👑, 亗), cruces (†), estrellas (✦), flechas y caracteres para Instagram, WhatsApp y Free Fire.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/simbolos/especiales'
  },
  openGraph: {
    title: 'Símbolos Especiales para Copiar y Pegar: Rayos, Coronas y Cruces',
    description:
      'Catálogo interactivo de símbolos especiales gratis. Copia rayos, coronas gamer, cruces, estrellas, flechas y divisores con un solo clic para tus redes y videojuegos.',
    url: 'https://theletrasbonitas.com/simbolos/especiales',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Símbolos Especiales para Copiar y Pegar - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos Especiales para Copiar y Pegar: Rayos, Coronas y Cruces',
    description:
      'Descubre cientos de símbolos especiales Unicode: rayos, coronas pro, flechas, estrellas y caracteres insanos listos para copiar con 1 clic.',
    images: ['https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const ESPECIALES_FAQS = [
  {
    question: '¿Qué son los símbolos especiales para copiar y pegar?',
    answer:
      'Son caracteres tipográficos únicos codificados en el estándar internacional Unicode. A diferencia de las imágenes o stickers, los símbolos especiales se comportan como texto estándar. Esto te permite copiarlos, pegarlos, cambiarles de tamaño o usarlos en cualquier caja de texto de internet, redes sociales o videojuegos sin descargar ningún programa.'
  },
  {
    question: '¿Cómo copiar un símbolo especial desde mi celular Android o iPhone?',
    answer:
      'En nuestra herramienta interactiva, simplemente pulsa sobre la tarjeta del símbolo que te guste o toca su botón "Copiar". Verás una confirmación visual inmediata que dice "¡Listo!". Luego abre WhatsApp, Instagram, TikTok o Free Fire, mantén presionado tu dedo en el recuadro de texto y selecciona "Pegar".'
  },
  {
    question: '¿Puedo armar combinaciones de símbolos especiales para mi nick o bio?',
    answer:
      '¡Por supuesto! Utiliza nuestra Bandeja de Combinación Especial: pulsa el botón con el signo "+" en cada símbolo que quieras agregar (por ejemplo: 亗 ⚡ [Tu Nick] ⚡ 亗) y después toca "Copiar Combinación" para llevarte todo el conjunto listo en un solo paso.'
  },
  {
    question: '¿Los símbolos especiales funcionan en Free Fire, Roblox y Discord?',
    answer:
      'Sí, gran parte de estos caracteres (como la corona 亗, el rayo ⚡, la cruz tibetana ༒ o las marcas de clan 〆) son compatibles con la mayoría de videojuegos móviles y plataformas de mensajería como Discord y WhatsApp. Te sugerimos revisar la vista previa antes de guardar un cambio de nombre en el juego.'
  },
  {
    question: '¿Cómo guardar mis símbolos favoritos para encontrarlos rápido?',
    answer:
      'Toca el icono de la estrella situado en la esquina de cualquier tarjeta de símbolo. Tus preferencias quedarán guardadas en la memoria local de tu navegador para que, cada vez que visites la página, puedas filtrarlos al instante presionando el botón "Favoritos".'
  },
  {
    question: '¿Por qué algunos símbolos aparecen como cuadros vacíos o signos de interrogación?',
    answer:
      'Esto se conoce como efecto "tofu" y ocurre cuando un dispositivo no tiene actualizada la fuente del sistema para interpretar glifos de revisiones recientes de Unicode. Te recomendamos mantener actualizado el sistema operativo de tu celular para visualizar todos los símbolos correctamente.'
  },
  {
    question: '¿Tiene algún costo usar esta herramienta de símbolos especiales?',
    answer:
      'No. En Letras Bonitas todo el catálogo de símbolos especiales, el buscador en vivo, la bandeja de combinación y el generador aleatorio son 100% gratuitos y de acceso libre e ilimitado para toda la comunidad.'
  },
  {
    question: '¿Cuál es la diferencia entre un emoji y un símbolo especial Unicode?',
    answer:
      'Los emojis son ilustraciones gráficas a color que dependen del diseño visual de cada fabricante (Apple, Google o Samsung). Los símbolos especiales Unicode son caracteres tipográficos limpios y monocromáticos que adoptan de forma natural el color y tamaño de la fuente donde se peguen, ofreciendo un acabado más profesional y estético.'
  }
];

export default function SimbolosEspecialesPage() {
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
        name: 'Símbolos',
        item: 'https://theletrasbonitas.com/simbolos'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Símbolos Especiales',
        item: 'https://theletrasbonitas.com/simbolos/especiales'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Catálogo de Símbolos Especiales para Copiar y Pegar - Letras Bonitas',
    url: 'https://theletrasbonitas.com/simbolos/especiales',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Explorador interactivo de símbolos especiales: rayos, coronas, cruces, estrellas, flechas, monedas y caracteres gamer para copiar con 1 clic.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ESPECIALES_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* Structured Data (JSON-LD) */}
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

      <div className="container" style={{ paddingBottom: '4rem', overflowX: 'hidden', maxWidth: '100%' }}>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Inicio
          </Link>
          <ChevronRight size={14} />
          <Link href="/simbolos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Símbolos
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: '#F59E0B', fontWeight: 600 }}>Especiales</span>
        </nav>

        {/* Hero Section */}
        <section
          className="hero-section silo-hero text-center"
          style={{
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div className="hero-container" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.18) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                padding: '0.35rem 0.95rem',
                borderRadius: '999px',
                color: '#F59E0B',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              <Zap size={15} color="#F59E0B" />
              <span>BIBLIOTECA DE SÍMBOLOS ESPECIALES</span>
            </div>

            <h1
              className="hero-h1"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3.2rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1rem'
              }}
            >
              Símbolos Especiales para Copiar y Pegar
            </h1>

            <p
              className="hero-tagline"
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#F59E0B',
                marginBottom: '0.75rem'
              }}
            >
              Rayos, coronas pro, cruces, estrellas, flechas y divisores en 1 clic
            </p>

            <p
              className="hero-description"
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                maxWidth: '680px',
                margin: '0 auto 1.5rem auto'
              }}
            >
              Explora nuestra colección definitiva de caracteres especiales Unicode para personalizar nombres de Free Fire, biografías de Instagram, estados de WhatsApp, servidores de Discord y documentos. Toca cualquier símbolo para copiarlo directamente o únelos en la bandeja de combinación.
            </p>

            {/* Quick Feature Badges */}
            <div
              className="hero-highlights"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.65rem'
              }}
            >
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={13} color="#10B981" /> 1-Clic al Portapapeles
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Sparkles size={13} color="#F59E0B" /> Bandeja de Combinación
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Star size={13} color="#F59E0B" /> Guardar Favoritos
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Gamepad2 size={13} color="#38BDF8" /> 100% Compatible con Juegos y Redes
              </span>
            </div>
          </div>
        </section>

        {/* PRIMARY UTILITY: Especiales Symbol Explorer Tool (Client Component) */}
        <section style={{ marginBottom: '3.5rem' }}>
          <EspecialesSymbolExplorer />
        </section>

        {/* 3-Step Quick Guide Cards */}
        <section
          style={{
            marginBottom: '3.5rem',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '2rem 1.5rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
              ¿Cómo usar los símbolos especiales en 3 pasos?
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Optimizado para la máxima velocidad y comodidad desde celular o computadora.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.25rem'
            }}
          >
            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', fontWeight: 800, marginBottom: '0.75rem' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Elige o busca tu símbolo
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Usa el selector de categorías (Coronas, Rayos, Cruces, Flechas, Gamer) o escribe palabras clave en el buscador interactivo.
              </p>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8', fontWeight: 800, marginBottom: '0.75rem' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Copia o combina libremente
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Toca cualquier tarjeta para copiar el símbolo individual, o pulsa el botón &quot;+&quot; para ir armando tu diseño en la bandeja.
              </p>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontWeight: 800, marginBottom: '0.75rem' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Pega donde tú quieras
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Abre Instagram, Free Fire, WhatsApp, TikTok, Discord o Word y mantén presionado para pegar tu símbolo en segundos.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Content & Guides */}
        <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.75, color: '#CBD5E1', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            ¿Qué son los símbolos especiales y por qué destacan en perfiles y juegos?
          </h2>
          <p>
            Los <strong>símbolos especiales</strong> son caracteres tipográficos definidos por el consorcio internacional <strong>Unicode</strong>. A diferencia de las imágenes o stickers, estos glifos forman parte del abecedario digital global. Esto significa que cualquier celular, computadora o tablet los interpreta como texto legítimo sin requerir la instalación de tipografías externas.
          </p>
          <p>
            En plataformas sociales como <strong>Instagram</strong>, <strong>WhatsApp</strong> y <strong>TikTok</strong>, así como en comunidades de videojuegos como <strong>Free Fire</strong>, <strong>Roblox</strong> y <strong>Discord</strong>, los símbolos especiales son el elemento secreto para crear nombres llamativos, nicks competitivos y biografías visualmente atractivas.
          </p>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Principales categorías de símbolos especiales
          </h2>
          <p>
            Nuestra colección clasifica los caracteres más solicitados en grupos temáticos para facilitarte el copiado:
          </p>

          <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Crown size={18} /> 1. Coronas y Realeza
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                El sello de los líderes de clan y jugadores veteranos. Incluye la célebre corona japonesa <code>亗</code>, coronas de ajedrez <code>♔ ♕</code> y combinaciones aladas.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#F59E0B' }}>
                亗 👑 ♔ ♕ ♚ ♛ 𓆩👑𓆪 ⚜️
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Zap size={18} /> 2. Rayos, Energía y Combate
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Símbolos que transmiten velocidad y poder. Destacan los rayos <code>⚡</code>, flechas en zigzag <code>↯</code> y advertencias de peligro biológico <code>☣</code>.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#38BDF8' }}>
                ⚡ ↯ ☣ ☠ ☬ ♨ ⚔️ 🏹
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={18} /> 3. Checks y Verificaciones
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Palomitas y marcas para simular perfiles verificados o crear listas ordenadas en publicaciones y bios.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#34D399' }}>
                ✓ ✔ ☑ ✕ ✖ ✗ ✘ ✢ ✣ ✤ ✥
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(129, 140, 248, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#818CF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Compass size={18} /> 4. Cruces y Mística
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Desde cruces clásicas latinas <code>✝</code> y dadas <code>†</code>, hasta cruces de Malta <code>✠</code> y sellos tibetanos <code>༒</code> para nicks intimidantes.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#818CF8' }}>
                ✝ † ‡ ✞ ✠ ✚ ♱ ♰ ༒ ☦ ☨
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Ideas de combinaciones listas para copiar en nicks y biografías
          </h2>
          <p>
            Si quieres ahorrar tiempo armando un nick o perfil, te compartimos estas plantillas probadas y populares:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Nick Gamer Insano con Corona y Rayo
              </div>
              <div style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: '#FFF', letterSpacing: '0.15em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                亗 ⚡ [Tu Nick] ⚡ 亗
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                El estilo preferido para Free Fire y juegos de disparos en escuadra.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Nombre Enmarcado con Corchetes Japoneses
              </div>
              <div style={{ fontSize: 'clamp(0.85rem, 2.5vw, 0.98rem)', color: '#FFF', letterSpacing: '0.12em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                『 ✦ [Nombre o Marca] ✦ 』
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Diseño limpio y sobrio para nombres de usuario en Instagram y TikTok.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#818CF8', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Separador con Brillos y Línea
              </div>
              <div style={{ fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', color: '#FFF', letterSpacing: '0.08em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                ─── ･ ｡ﾟ☆: *. ⚡ .* :☆ﾟ. ───
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Divisor estético ideal para publicaciones y biografías de creadores de contenido.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Compatibilidad y recomendaciones de uso
          </h2>
          <p>
            La inmensa mayoría de los símbolos de esta página son caracteres Unicode universales soportados en Android, iOS (iPhone/iPad), Windows, macOS y Linux. Para evitar problemas de visualización:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Límites de caracteres en juegos:</strong> Juegos como Free Fire admiten un número restringido de caracteres (generalmente hasta 12 o 14 bytes). Considera que algunos glifos ocupan entre 2 y 4 bytes cada uno.
            </li>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Soporte en versiones antiguas:</strong> Caracteres muy antiguos como <code>★</code>, <code>♥</code> o <code>†</code> funcionan en el 100% de los teléfonos. Si tu audiencia usa dispositivos de hace varios años, prefiere estos glifos clásicos.
            </li>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Diferencia entre color y monocromo:</strong> Algunos símbolos (como ⚡ o 👑) pueden mostrarse en color en ciertas aplicaciones móviles y en blanco y negro en computadoras de escritorio. Esto depende del motor de fuentes del sistema operativo.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Explora más herramientas en Letras Bonitas
          </h2>
          <p>
            Descubre más recursos para crear textos atractivos y nicks personalizados:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '1rem',
              marginTop: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            <Link
              href="/simbolos"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '1.15rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Catálogo de Símbolos</span>
                <ArrowRight size={16} color="#F59E0B" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                El hub central con más de 1,000 caracteres, flechas, estrellas y coronas.
              </p>
            </Link>

            <Link
              href="/simbolos/bonitos"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                borderRadius: '12px',
                padding: '1.15rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Símbolos Bonitos</span>
                <ArrowRight size={16} color="#EC4899" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Corazones tiernos, destellos mágicos, flores y separadores delicados.
              </p>
            </Link>

            <Link
              href="/simbolos/aesthetic"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(244, 114, 182, 0.3)',
                borderRadius: '12px',
                padding: '1.15rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Símbolos Aesthetic</span>
                <ArrowRight size={16} color="#F472B6" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Lazos coquette, lunas crecientes, estrellas y diseño minimalista.
              </p>
            </Link>

            <Link
              href="/nombres-para-free-fire/simbolos"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '12px',
                padding: '1.15rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Símbolos para Free Fire</span>
                <ArrowRight size={16} color="#38BDF8" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Cruces ninja, coronas insanas y letras invisibles para juegos de disparos.
              </p>
            </Link>
          </div>
        </article>

        {/* FAQ Accordion Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem' }}>
              Preguntas Frecuentes sobre Símbolos Especiales
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              Respuestas rápidas a las consultas más frecuentes sobre copiado, compatibilidad y personalización.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <SEOArticleFaqAccordion faqs={ESPECIALES_FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
