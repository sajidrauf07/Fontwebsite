import Script from 'next/script';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Heart,
  Star,
  Flower2,
  Copy,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Instagram,
  Smile,
  Layers,
  Palette
} from 'lucide-react';
import BonitoSymbolExplorer from '@/components/symbols/BonitoSymbolExplorer';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Símbolos Bonitos para Copiar y Pegar: Corazones, Estrellas y Flores',
  description:
    'Colección de símbolos bonitos para copiar y pegar con 1 clic. Encuentra corazones lindos (♡, ᥫ᭡), estrellas (⋆｡°✩), flores (❀), lazos (୨୧), separadores y caritas para Instagram, TikTok y WhatsApp.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/simbolos/bonitos'
  },
  openGraph: {
    title: 'Símbolos Bonitos para Copiar y Pegar: Corazones, Estrellas y Flores',
    description:
      'Catálogo interactivo de símbolos bonitos gratis. Copia corazones tiernos, destellos mágicos, flores delicadas, lazos coquette y separadores con un solo clic.',
    url: 'https://theletrasbonitas.com/simbolos/bonitos',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Símbolos Bonitos para Copiar y Pegar - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos Bonitos para Copiar y Pegar: Corazones, Estrellas y Flores',
    description:
      'Descubre cientos de símbolos bonitos Unicode: corazones tiernos, estrellas brillantes, flores suaves, caritas y separadores listos para copiar con 1 clic.',
    images: ['https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const BONITOS_FAQS = [
  {
    question: '¿Qué son los símbolos bonitos para copiar y pegar?',
    answer:
      'Son caracteres especiales estandarizados por el Consorcio Unicode seleccionados por su gracia visual, elegancia y estética tierna. Incluyen desde corazones delicados (♡, ᥫ᭡, ღ) y destellos (⋆｡°✩, ✦), hasta flores (❀, 𑁍), lazos (୨୧) y kaomojis sonrientes. Dado que son caracteres de texto universales y no imágenes, puedes pegarlos en cualquier red social, biografía o mensaje.'
  },
  {
    question: '¿Cómo copiar un símbolo bonito a mi celular?',
    answer:
      'En nuestra herramienta interactiva, simplemente toca cualquier símbolo o pulsa su botón "Copiar". Verás al instante una confirmación que dice "¡Listo!". Luego abre tu app favorita (Instagram, WhatsApp, TikTok o Twitter), mantén presionado tu dedo en el recuadro de texto y selecciona "Pegar".'
  },
  {
    question: '¿Puedo armar combinaciones y separadores con varios símbolos bonitos?',
    answer:
      '¡Sí! Nuestra herramienta incluye una Bandeja de Combinación. Presiona el botón con el signo "+" en cada símbolo que te guste para ir sumándolos y, cuando estés satisfecho, pulsa "Copiar Combinación" para llevarte todo el arreglo decorado de una sola vez.'
  },
  {
    question: '¿Los símbolos bonitos funcionan en Instagram, TikTok y WhatsApp?',
    answer:
      'Sí, funcionan en prácticamente todas las redes sociales y aplicaciones modernas de mensajería en celulares iPhone (iOS) y Android, así como en computadoras Windows y Mac. Al formar parte del estándar Unicode oficial, son interpretados directamente por el sistema operativo de tu dispositivo.'
  },
  {
    question: '¿Cómo guardar mis símbolos bonitos preferidos?',
    answer:
      'Toca el icono de la estrella situado en la esquina superior de cualquier tarjeta de símbolo. El símbolo se guardará en los favoritos de tu navegador para que, cada vez que regreses, puedas pulsar el botón "Favoritos" y encontrarlos inmediatamente.'
  },
  {
    question: '¿Por qué algunos símbolos aparecen como cuadros blancos o signos de interrogación?',
    answer:
      'Esto se conoce como efecto "tofu" y ocurre cuando un dispositivo cuenta con un sistema operativo antiguo que carece de la fuente tipográfica actualizada para interpretar revisiones recientes de Unicode. Te sugerimos mantener actualizado el software de tu móvil para ver todos los glifos de manera impecable.'
  },
  {
    question: '¿Tiene algún costo usar esta herramienta de símbolos bonitos?',
    answer:
      'No, en Letras Bonitas todo el catálogo de símbolos bonitos, la bandeja de combinación personalizada, los favoritos y el generador aleatorio son 100% gratuitos y de acceso libre e ilimitado para todos los usuarios.'
  },
  {
    question: '¿En qué se diferencian los símbolos bonitos de los emojis convencionales?',
    answer:
      'Los emojis son ilustraciones gráficas a color que cambian según el diseño de Apple, Google o Samsung. En cambio, los símbolos bonitos Unicode son caracteres tipográficos limpios y monocromáticos que adoptan automáticamente el color y tamaño de la letra de la app donde los pegues, luciendo mucho más sutiles y estéticos.'
  }
];

export default function SimbolosBonitosPage() {
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
        name: 'Símbolos Bonitos',
        item: 'https://theletrasbonitas.com/simbolos/bonitos'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Catálogo de Símbolos Bonitos para Copiar y Pegar - Letras Bonitas',
    url: 'https://theletrasbonitas.com/simbolos/bonitos',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Explorador interactivo de símbolos bonitos: corazones, estrellas, flores, lazos coquette, separadores y caritas listos para copiar con 1 clic.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BONITOS_FAQS.map((faq) => ({
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
      <Script id="script-page-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script id="script-page-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Script id="script-page-3"
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
          <span style={{ color: '#EC4899', fontWeight: 600 }}>Bonitos</span>
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
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.18) 0%, rgba(244, 114, 182, 0.18) 100%)',
                border: '1px solid rgba(236, 72, 153, 0.35)',
                padding: '0.35rem 0.95rem',
                borderRadius: '999px',
                color: '#EC4899',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              <Heart size={15} color="#EC4899" />
              <span>COLECCIÓN DE SÍMBOLOS BONITOS</span>
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
              Símbolos Bonitos para Copiar y Pegar
            </h1>

            <p
              className="hero-tagline"
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#F472B6',
                marginBottom: '0.75rem'
              }}
            >
              Corazones tiernos, destellos mágicos, flores delicadas y lazos en 1 clic
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
              Encuentra los caracteres y glifos más lindos de internet para decorar tu biografía de Instagram, WhatsApp, TikTok, cartas y apuntes digitales. Toca cualquier símbolo para copiarlo directamente o únelos en la bandeja de combinación.
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
                <Sparkles size={13} color="#EC4899" /> Bandeja de Combinación
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Star size={13} color="#F59E0B" /> Favoritos Personalizados
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Instagram size={13} color="#F472B6" /> 100% Compatible con Redes
              </span>
            </div>
          </div>
        </section>

        {/* PRIMARY UTILITY: Bonito Symbol Explorer Tool (Client Component) */}
        <section style={{ marginBottom: '3.5rem' }}>
          <BonitoSymbolExplorer />
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
              ¿Cómo usar los símbolos bonitos en 3 sencillos pasos?
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Fácil, intuitivo y sin necesidad de instalar fuentes ni aplicaciones externas.
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
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(236, 72, 153, 0.2)', color: '#EC4899', fontWeight: 800, marginBottom: '0.75rem' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Busca o filtra por categoría
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Explora pestañas como Corazones, Estrellas, Flores o Lazos, o escribe en el buscador términos como &quot;amor&quot; o &quot;lindo&quot;.
              </p>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 114, 182, 0.2)', color: '#F472B6', fontWeight: 800, marginBottom: '0.75rem' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Copia individual o combina
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Toca cualquier tarjeta para copiar directamente el glifo, o presiona el botón &quot;+&quot; para ir acumulándolos en tu bandeja de creación.
              </p>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontWeight: 800, marginBottom: '0.75rem' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Pega en tus redes favoritas
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Abre Instagram, TikTok, WhatsApp, Discord o tus notas y mantén presionado para pegar tu diseño bonito en segundos.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Content & Guides */}
        <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.75, color: '#CBD5E1', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            ¿Qué son los símbolos bonitos y cómo transforman tus perfiles y textos?
          </h2>
          <p>
            En la cultura digital de México y América Latina, los <strong>símbolos bonitos</strong> se han convertido en la forma más sencilla y creativa de elevar la estética de un perfil en redes sociales. Ya sea que busques darle un toque tierno a tu <strong>biografía de Instagram</strong>, crear un estado romántico en <strong>WhatsApp</strong>, personalizar tu nombre en <strong>TikTok</strong> o adornar un documento o apunte digital, los símbolos adecuados marcan la diferencia entre un texto monótono y uno cautivador.
          </p>
          <p>
            A diferencia de las fotos o pegatinas, estos símbolos son caracteres del estándar <strong>Unicode</strong> internacional. Eso significa que son interpretados como texto real por los teléfonos y ordenadores, no consumen datos al cargar, se ajustan armónicamente al tamaño de tu tipografía y se pueden copiar y pegar en un instante sin perder nitidez.
          </p>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Categorías más populares de símbolos bonitos en México
          </h2>
          <p>
            Hemos organizado nuestra biblioteca en las categorías más buscadas y queridas por la comunidad:
          </p>

          <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(236, 72, 153, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#EC4899', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Heart size={18} /> 1. Corazones Bonitos y Tiernos
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Desde el sutil corazón blanco <code>♡</code> hasta el icónico corazón cham <code>ᥫ᭡</code>, el georgiano <code>ღ</code> y el corazón con alas <code>𓆩♡𓆪</code>. Son los favoritos indiscutibles para biografías románticas, de pareja o de mejores amigos.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#EC4899' }}>
                ♡ ᥫ᭡ ღ ꨄ ❥ ❦ დ 𓆩♡𓆪 💖 🩷
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(244, 114, 182, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F472B6', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Star size={18} /> 2. Estrellas y Destellos Mágicos
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Aportan un efecto luminoso y de fantasía. Destacan las cuatro puntas <code>✦</code>, estrellas de ocho puntas <code>✧</code>, polvillo estelar <code>⋆｡°✩</code> y constelaciones completas.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#F472B6' }}>
                ⋆ ✦ ✧ ✩ ✪ ✮ ⋆｡°✩ ｡ﾟ•┈୨♡୧┈•ﾟ｡
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Flower2 size={18} /> 3. Flores y Naturaleza Delicada
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Añaden frescura orgánica y dulzura botánica. Encontrarás flores de cerezo <code>🌸</code>, flores blancas <code>❀</code>, pétalos <code>𑁍</code> y hojas tiernas <code>☘</code>.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#34D399' }}>
                ❀ ✿ ❁ ✾ 𑁍 🌸 🌷 𖤣𖥧𖥣｡ 𖥸 ☘
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(129, 140, 248, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#818CF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Smile size={18} /> 4. Caritas y Kaomojis Adorables
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Emoticonos japoneses hechos con caracteres tipográficos que transmiten emoción instantánea: timidez, ternura, alegría o guiños de complicidad.
              </p>
              <div style={{ fontSize: '1.05rem', letterSpacing: '0.25em', color: '#818CF8' }}>
                (⁠｡⁠♥⁠‿⁠♥⁠｡⁠) (⁠◕⁠‿⁠◕⁠) (⁠˘⁠ ³⁠˘⁠)⁠♥ ʕ•ᴥ•ʔ (⁠｡⁠･⁠ω⁠･⁠｡⁠)
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Ideas de combinaciones bonitas listas para copiar en tu biografía
          </h2>
          <p>
            ¿Quieres embellecer tu perfil sin invertir mucho tiempo? Copia y personaliza estas combinaciones decorativas diseñadas con nuestros símbolos más votados:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#EC4899', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Nombre Decorado Tierno
              </div>
              <div style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: '#FFF', letterSpacing: '0.15em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                ✧ ˖ ° [Tu Nombre] ᥫ᭡ ⋆ ｡ ˚
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Ideal para el nombre visible o primera línea de tu biografía de Instagram o TikTok.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(244, 114, 182, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F472B6', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Separador Floral Delicado
              </div>
              <div style={{ fontSize: 'clamp(0.85rem, 2.5vw, 0.98rem)', color: '#FFF', letterSpacing: '0.12em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                ─── ❀ ───────── ❀ ───
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Excelente para dividir secciones en descripciones de productos, bios o mensajes destacados de WhatsApp.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#818CF8', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Estructura de Bio Aesthetic &amp; Bonita
              </div>
              <div style={{ fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', color: '#FFF', letterSpacing: '0.08em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                ୨୧ ⋆ ｡˚ [Frase favorita] ˚｡ ⋆ ୨୧<br />
                📍 [Tu Ciudad / México]<br />
                ♡ [Hobby o Pasión]<br />
                💌 [Contacto o Enlace]
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Estructura clara y limpia que atrae la vista de nuevos seguidores.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Guía de compatibilidad: Cómo asegurarte de que todos vean tus símbolos
          </h2>
          <p>
            Aunque el 98% de los glifos de nuestra herramienta son compatibles con la mayoría de los dispositivos modernos, aquí tienes algunas recomendaciones prácticas para evitar que tus seguidores vean rectángulos vacíos o símbolos deformados:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Símbolos clásicos tienen compatibilidad universal (99.9%):</strong> Glifos como <code>♡</code>, <code>♥</code>, <code>★</code>, <code>❀</code> y <code>✦</code> existen en casi todos los teléfonos desde hace más de una década.
            </li>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Caracteres de alfabetos especiales:</strong> Símbolos como <code>ᥫ᭡</code> o <code>ღ</code> provienen de alfabetos cham y georgiano. Funcionan en iOS 15+ y Android 12+ sin problemas. Si tu público objetivo incluye usuarios con celulares más antiguos, combina estos glifos con corazones clásicos.
            </li>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Previsualización en modo oscuro y claro:</strong> Algunos símbolos con contornos finos lucen increíbles en modo oscuro pero son más discretos en fondo blanco. Pruébalos en ambos modos si administras una cuenta comercial.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Explora más recursos y herramientas en Letras Bonitas
          </h2>
          <p>
            Combina tus símbolos bonitos con tipografías especiales para crear composiciones únicas:
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
                <ArrowRight size={16} color="#EC4899" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                El catálogo maestro con más de 1,000 símbolos organizados por categorías.
              </p>
            </Link>

            <Link
              href="/simbolos/aesthetic"
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
                <span>Símbolos Aesthetic</span>
                <ArrowRight size={16} color="#F472B6" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Lazos coquette, lunas crecientes, estrellas mágicas y diseños minimalistas.
              </p>
            </Link>

            <Link
              href="/simbolos/especiales"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '12px',
                padding: '1.15rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Símbolos Especiales</span>
                <ArrowRight size={16} color="#F59E0B" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Rayos, coronas pro, cruces, flechas y caracteres para perfiles y nicks.
              </p>
            </Link>

            <Link
              href="/letras-para-instagram"
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
                <span>Letras para Instagram</span>
                <ArrowRight size={16} color="#818CF8" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Fuentes y alfabetos estilizados diseñados para destacar en bio y stories.
              </p>
            </Link>

            <Link
              href="/letras-cursivas"
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
                <span>Letras Cursivas</span>
                <ArrowRight size={16} color="#34D399" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Tipografías caligráficas, manuscritas y elegantes listas para copiar.
              </p>
            </Link>
          </div>
        </article>

        {/* FAQ Accordion Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem' }}>
              Preguntas Frecuentes sobre Símbolos Bonitos
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              Respuestas rápidas sobre copiado, compatibilidad y cómo sacarles el máximo provecho.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <SEOArticleFaqAccordion faqs={BONITOS_FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
