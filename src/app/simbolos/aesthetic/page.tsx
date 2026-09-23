import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Sparkles,
  Heart,
  Moon,
  Star,
  Copy,
  ArrowRight,
  CheckCircle2,
  Info,
  Smartphone,
  Layers,
  Palette,
  Eye,
  Instagram
} from 'lucide-react';
import AestheticSymbolExplorer from '@/components/symbols/AestheticSymbolExplorer';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Símbolos Aesthetic para Copiar y Pegar: Lazos, Lunas y Corazones',
  description:
    'Colección de símbolos aesthetic para copiar y pegar con un clic. Encuentra lazos coquette (୨୧, ೀ), lunas (☾), estrellas (⋆｡°✩), corazones suaves y separadores para tu bio.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/simbolos/aesthetic/'
  },
  openGraph: {
    title: 'Símbolos Aesthetic para Copiar y Pegar: Lazos, Lunas y Corazones',
    description:
      'Catálogo interactivo de símbolos aesthetic gratis. Copia lazos coquette, destellos, lunas, corazones alados y separadores bonitos para Instagram, TikTok y WhatsApp.',
    url: 'https://theletrasbonitas.com/simbolos/aesthetic/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/simbolos-aesthetic-interfaz-copiar.png',
        width: 1200,
        height: 630,
        alt: 'Símbolos Aesthetic para Copiar y Pegar - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos Aesthetic para Copiar y Pegar: Lazos, Lunas y Corazones',
    description:
      'Descubre miles de símbolos aesthetic Unicode: lazos coquette, lunas, estrellas, corazones suaves y kaomojis listos para copiar con 1 clic.',
    images: ['https://theletrasbonitas.com/images/simbolos-aesthetic-interfaz-copiar.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const AESTHETIC_FAQS = [
  {
    question: '¿Qué son los símbolos aesthetic para copiar y pegar?',
    answer:
      'Son caracteres especiales y glifos Unicode seleccionados por su belleza visual, sutileza y estilo artístico. Incluyen desde lazos coquette (୨୧, ೀ) y lunas crecientes (☾), hasta polvos estelares (⋆ ｡ °) y corazones delicados (ᥫ᭡, ♡). Al ser caracteres de texto y no imágenes, puedes pegarlos en cualquier campo de texto de internet.'
  },
  {
    question: '¿Cómo copiar un símbolo aesthetic al portapapeles de mi teléfono?',
    answer:
      'En nuestra herramienta interactiva, simplemente toca cualquier símbolo o su botón "Copiar". Verás una confirmación visual instantánea que dice "¡Listo!". Después, abre tu biografía de Instagram, WhatsApp o TikTok, mantén presionado el dedo sobre la pantalla y selecciona "Pegar".'
  },
  {
    question: '¿Cómo se llama el símbolo de lazo coquette y cómo se escribe?',
    answer:
      'Los lazos coquette más populares provienen de escrituras del mundo como el caracter telugú ೀ (U+0C40) y la ligadura japonesa ୨୧. En Letras Bonitas los encuentras listos en la pestaña "Coquette y Lazos" para copiarlos en un instante sin necesidad de buscar códigos complejos.'
  },
  {
    question: '¿Puedo armar combinaciones aesthetic largas con varios símbolos?',
    answer:
      '¡Sí! Nuestra herramienta cuenta con una Bandeja de Combinación Aesthetic. Presiona el botón "+" en todos los símbolos que quieras unir (por ejemplo: ⋆ ｡ ° ೀ ♡) y luego pulsa "Copiar Combinación" para llevarte todo el conjunto listo para tu biografía.'
  },
  {
    question: '¿Los símbolos aesthetic son compatibles con Instagram, TikTok y WhatsApp?',
    answer:
      'Sí, la inmensa mayoría de estos símbolos son parte del estándar Unicode y funcionan tanto en dispositivos Android como en iPhone (iOS), además de computadoras Windows y Mac. En Letras Bonitas filtramos los glifos para asegurar la máxima compatibilidad.'
  },
  {
    question: '¿Por qué algunos símbolos aparecen como cuadros blancos o signos de interrogación?',
    answer:
      'Esto se conoce como efecto "tofu" y ocurre cuando un dispositivo no tiene instalada la versión más reciente del sistema operativo para interpretar caracteres añadidos en revisiones recientes de Unicode. Te recomendamos mantener tu móvil actualizado para ver todos los glifos correctamente.'
  },
  {
    question: '¿Tienen costo los símbolos de Letras Bonitas?',
    answer:
      'No. Todo nuestro catálogo de símbolos aesthetic, la bandeja de combinación y el sistema de favoritos son 100% gratuitos y de acceso libre e ilimitado para toda la comunidad.'
  },
  {
    question: '¿Cómo puedo guardar mis símbolos aesthetic preferidos para no perderlos?',
    answer:
      'Toca el icono de la estrella en cualquier tarjeta de símbolo. Tus favoritos se guardarán automáticamente en tu navegador para que los encuentres rápidamente cada vez que visites la página activando el botón "Favoritos".'
  }
];

export default function SimbolosAestheticPage() {
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
        item: 'https://theletrasbonitas.com/simbolos/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Símbolos Aesthetic',
        item: 'https://theletrasbonitas.com/simbolos/aesthetic/'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Catálogo de Símbolos Aesthetic para Copiar y Pegar - Letras Bonitas',
    url: 'https://theletrasbonitas.com/simbolos/aesthetic/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Explorador interactivo de símbolos aesthetic: lazos coquette, lunas, estrellas, corazones suaves y kaomojis listos para copiar con 1 clic.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AESTHETIC_FAQS.map((faq) => ({
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

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
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
          <span style={{ color: '#F472B6', fontWeight: 600 }}>Aesthetic</span>
        </nav>

        {/* Hero Section — Strict Center Alignment */}
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
                background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.18) 0%, rgba(129, 140, 248, 0.18) 100%)',
                border: '1px solid rgba(244, 114, 182, 0.35)',
                padding: '0.35rem 0.95rem',
                borderRadius: '999px',
                color: '#F472B6',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={15} color="#F472B6" />
              <span>COLECCIÓN DE SÍMBOLOS AESTHETIC</span>
            </div>

            <h1
              className="hero-h1"
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1rem'
              }}
            >
              Símbolos Aesthetic para Copiar y Pegar
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
              Lazos coquette, lunas, estrellas mágicas, corazones suaves y separadores en 1 clic
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
              Explora nuestra biblioteca curada de símbolos aesthetic seleccionados para personalizar biografías de Instagram, TikTok, WhatsApp, Discord y notas digitales. Sin registros ni descargas: pulsa cualquier tarjeta para copiarla directamente al portapapeles.
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
                <Sparkles size={13} color="#F472B6" /> Bandeja de Combinación
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Star size={13} color="#F59E0B" /> Favoritos Guardados
              </span>
              <span className="badge-item" style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.82rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Instagram size={13} color="#EC4899" /> 100% Compatible con Redes
              </span>
            </div>
          </div>
        </section>

        {/* PRIMARY UTILITY: Aesthetic Symbol Explorer Tool (Client Component) */}
        <section style={{ marginBottom: '3.5rem' }}>
          <AestheticSymbolExplorer />
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
              ¿Cómo usar los símbolos aesthetic en 3 sencillos pasos?
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Diseñado para ser la experiencia más rápida y cómoda desde tu celular o computadora.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}
          >
            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 114, 182, 0.2)', color: '#F472B6', fontWeight: 800, marginBottom: '0.75rem' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Explora o busca
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Usa las pestañas temáticas (Coquette, Lunas, Corazones, Flores) o escribe en el buscador para hallar tu símbolo favorito.
              </p>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(129, 140, 248, 0.2)', color: '#818CF8', fontWeight: 800, marginBottom: '0.75rem' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Copia o combina
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Toca cualquier tarjeta para copiar el símbolo individual, o pulsa el botón &quot;+&quot; para ir acumulándolos en tu bandeja de creación.
              </p>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontWeight: 800, marginBottom: '0.75rem' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Pega donde quieras
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Abre tu biografía de Instagram, WhatsApp, TikTok, Discord o Twitter y mantén presionado para pegar tu toque aesthetic.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Mockup Figure 1 */}
        <figure
          style={{
            margin: '0 auto 3.5rem auto',
            maxWidth: '850px',
            textAlign: 'center',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(244, 114, 182, 0.25)',
            borderRadius: '16px',
            padding: '1rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
          }}
        >
          <Image
            src="/images/simbolos-aesthetic-interfaz-copiar.png"
            alt="Explorador de símbolos aesthetic con buscador y bandeja de combinación en Letras Bonitas"
            width={800}
            height={480}
            style={{ width: '100%', height: 'auto', borderRadius: '10px', display: 'block' }}
          />
          <figcaption
            style={{
              marginTop: '0.85rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic'
            }}
          >
            Panel interactivo de símbolos aesthetic: selector de categorías, bandeja de creación personalizada y copiado con un clic.
          </figcaption>
        </figure>

        {/* Comprehensive SEO Content & Educational Guide */}
        <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.75, color: '#CBD5E1', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            ¿Qué son los símbolos aesthetic y por qué son tendencia en redes sociales?
          </h2>
          <p>
            El término <strong>aesthetic</strong> (estético) hace referencia a una corriente visual contemporánea caracterizada por la armonía, la sutileza, el minimalismo y el buen gusto visual.
            En el entorno digital de plataformas como <strong>Instagram</strong>, <strong>TikTok</strong>, <strong>Pinterest</strong> y <strong>WhatsApp</strong>,
            los <strong>símbolos aesthetic para copiar y pegar</strong> se han convertido en el recurso predilecto de millones de usuarios para transformar textos planos en perfiles atractivos y llenos de personalidad.
          </p>
          <p>
            A diferencia de los stickers o emojis de colores saturados, los símbolos aesthetic son <strong>caracteres tipográficos Unicode</strong> monocromáticos.
            Esto significa que adoptan de manera limpia el color de la fuente de la aplicación en la que se peguen, no pesan prácticamente nada (pocos bytes de memoria) y son interpretados universalmente por los teléfonos móviles Android y iPhone sin requerir la instalación de fuentes o teclados adicionales.
          </p>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Principales tendencias de símbolos aesthetic en México y Latinoamérica
          </h2>
          <p>
            Dentro de la estética digital existen distintas corrientes populares, cada una con su propia familia de símbolos característicos:
          </p>

          {/* Cards for Aesthetic Trends */}
          <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(244, 114, 182, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F472B6', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Sparkles size={18} /> 1. Tendencia Coquette &amp; Lazos
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Inspirada en el romanticismo clásico, colores pastel y elementos dulces. Sus protagonistas son los lazos como <code>୨୧</code>, el rizo floral <code>ೀ</code>, glifos como <code>𐙚</code> y adornos de corazones.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#F472B6' }}>
                ୨୧ ೀ 𐙚 ౨ৎ 𓍢ִ໋ ｡ﾟ•┈୨♡୧┈•ﾟ｡
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(129, 140, 248, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#818CF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Moon size={18} /> 2. Estética Celestial &amp; Noches Mágicas
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Enfocada en el misticismo nocturno, constelaciones y el cosmos. Combina lunas crecientes <code>☾</code>, nubes esponjosas <code>☁</code>, polvo estelar <code>⋆</code> y destellos <code>✦</code>.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#818CF8' }}>
                ☾ ☽ ☁ ⋆ ｡ ° ✦ ✧ ⋆｡°✩
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(236, 72, 153, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#EC4899', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Heart size={18} /> 3. Corazones Minimalistas &amp; Soft
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                El amor en clave minimalista. Evita los corazones rojos convencionales para dar paso al sutil corazón blanco hueco <code>♡</code>, el moderno glifo cham <code>ᥫ᭡</code> y corazones alados <code>𓆩♡𓆪</code>.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: '#EC4899' }}>
                ♡ ᥫ᭡ ꨄ 𓆩♡𓆪 ❥ დ ღ ʚ♡⃛ɞ
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Palette size={18} /> 4. Kaomojis &amp; Expresiones Japonesas
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Emoticonos tradicionales hechos con caracteres de texto que expresan ternura, timidez o alegría dulce sin romper la línea tipográfica de tus estados y bios.
              </p>
              <div style={{ fontSize: '0.95rem', letterSpacing: '0.15em', color: '#38BDF8' }}>
                ( ˶ˆ꒳ˆ˵ ) (｡♥‿♥｡) ₍ᐢ. ̫.ᐢ₎ (づ ᴗ _ᴗ)づ
              </div>
            </div>
          </div>

          {/* Visual Mockup Figure 2 */}
          <figure
            style={{
              margin: '2.5rem auto',
              maxWidth: '850px',
              textAlign: 'center',
              background: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              borderRadius: '16px',
              padding: '1rem',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            <Image
              src="/images/coleccion-simbolos-aesthetic-estilos.png"
              alt="Muestras de símbolos aesthetic clasificados por estilo: lazos, corazones, lunas y separadores"
              width={800}
              height={480}
              style={{ width: '100%', height: 'auto', borderRadius: '10px', display: 'block' }}
            />
            <figcaption
              style={{
                marginTop: '0.85rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}
            >
              Colección organizada de símbolos aesthetic listos para copiar con 1 clic en Letras Bonitas.
            </figcaption>
          </figure>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Ideas de combinaciones y separadores aesthetic listos para tu biografía
          </h2>
          <p>
            Si quieres darle un diseño completo a tu perfil de Instagram o WhatsApp sin tener que armarlo desde cero, aquí tienes algunas plantillas estéticas populares:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(244, 114, 182, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F472B6', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Combinación Coquette Romántica
              </div>
              <div style={{ fontSize: '1.1rem', color: '#FFF', letterSpacing: '0.15em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px' }}>
                ୨୧ ⋆ ｡ ˚ ᥫ᭡ ೀ 𐙚 ♡
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Ideal para colocar antes o después de tu nombre de usuario o en el subtítulo de tu biografía.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#818CF8', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Línea Divisoria Cósmica
              </div>
              <div style={{ fontSize: '0.98rem', color: '#FFF', letterSpacing: '0.12em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px' }}>
                ─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Perfecta para separar bloques de información o enlaces en biografías de Instagram y TikTok.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Encabezado con Flecha y Lista
              </div>
              <div style={{ fontSize: '0.95rem', color: '#FFF', letterSpacing: '0.08em', userSelect: 'all', background: 'rgba(30, 41, 59, 0.5)', padding: '0.65rem 0.95rem', borderRadius: '8px' }}>
                ╭┈─────── ೄྀ࿐ ˊˎ-<br />
                ┊ ✦ Ciudad / País<br />
                ┊ ✦ Pasión / Vocación<br />
                ╰┈➤ ❝ frase favorita ❞
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                Estructura limpia para perfiles organizados con datos clave.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Consejos de compatibilidad: Cómo evitar cuadros blancos (tofu)
          </h2>
          <p>
            El fenómeno de los cuadros blancos o signos de interrogación se produce cuando la versión del sistema operativo o de la app no incluye la definición del glifo en su fuente del sistema.
            Para que tus perfiles aesthetic se vean impecables en los teléfonos de tus amigos y seguidores:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Opta por caracteres con amplio soporte:</strong> Símbolos como <code>♡</code>, <code>★</code>, <code>✦</code>, <code>☾</code> y <code>✿</code> tienen más de 15 años estandarizados en Unicode y son soportados por el 99.9% de los dispositivos del mundo.
            </li>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Glifos muy recientes:</strong> Algunos símbolos de tendencia viral (como <code>𐙚</code>) provienen de bloques Unicode modernos. Aunque la gran mayoría de teléfonos con iOS 16+ y Android 13+ los leen a la perfección, dispositivos más antiguos pueden requerir actualizaciones de software.
            </li>
            <li style={{ marginBottom: '0.65rem' }}>
              <strong>Revisa tu perfil desde otro dispositivo:</strong> Antes de fijar permanentemente una combinación en tu biografía de marca, pídele a un amigo con otro modelo de celular que confirme que se ve tal como lo planeaste.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Explora más herramientas y estilos en Letras Bonitas
          </h2>
          <p>
            Los símbolos aesthetic lucen aún mejor cuando los combinas con tipografías y fuentes decorativas personalizadas. Visita nuestras secciones aprobadas:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                <ArrowRight size={16} color="#818CF8" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                El hub principal con más de 1,000 símbolos gamer, flechas, estrellas y checks.
              </p>
            </Link>

            <Link
              href="/letras-para-instagram/simbolos-para-instagram"
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
                <span>Símbolos para Instagram</span>
                <ArrowRight size={16} color="#EC4899" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Diseñados específicamente para destacar en biografías, nombres y comentarios de IG.
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
                <ArrowRight size={16} color="#F472B6" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Convierte cualquier texto a tipografías cursivas y caligráficas elegantes.
              </p>
            </Link>

            <Link
              href="/conversor-de-letras"
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
                <span>Conversor de Letras</span>
                <ArrowRight size={16} color="#34D399" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Generador general con más de 80 alfabetos góticos, redondeados y con burbujas.
              </p>
            </Link>
          </div>
        </article>

        {/* FAQ Accordion Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem' }}>
              Preguntas Frecuentes sobre Símbolos Aesthetic
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              Respuestas rápidas a las dudas más comunes sobre compatibilidad, copiado y uso en redes sociales.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <SEOArticleFaqAccordion faqs={AESTHETIC_FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
