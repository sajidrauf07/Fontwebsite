import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Instagram,
  ShieldCheck,
  Compass,
  Layers,
  HelpCircle,
  Smartphone,
  Flame,
  Info,
  Smile,
  Heart,
  MessageCircle
} from 'lucide-react';
import EmojiExplorer from '@/components/emojis/EmojiExplorer';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Emojis para Copiar y Pegar — Catálogo Completo Gratis',
  description:
    'Colección de emojis para copiar y pegar con 1 clic. Encuentra caritas (😂, 🥺, 😍), corazones (❤️, 🩷, 🖤), gestos (👍, 🫶, ✨), comida (🌮, 🍕) y emojis para WhatsApp, Instagram y TikTok.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/emojis'
  },
  openGraph: {
    title: 'Emojis para Copiar y Pegar — Catálogo Completo Gratis',
    description:
      'Descubre y copia miles de emojis organizados por categorías con 1 solo clic. Caritas, corazones, manos, animales y comida listos para WhatsApp e Instagram.',
    url: 'https://theletrasbonitas.com/emojis',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Emojis para Copiar y Pegar - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emojis para Copiar y Pegar — Catálogo Completo Gratis',
    description:
      'Catálogo interactivo con todos los emojis para copiar y pegar al instante. Gratis y compatible con todas las redes sociales.',
    images: ['https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const EMOJIS_FAQS = [
  {
    question: '¿Qué son los emojis y cómo funcionan para copiar y pegar?',
    answer:
      'Los emojis son pictogramas estandarizados por el Consorcio Unicode. Aunque se muestran como ilustraciones gráficas a color, en realidad son caracteres de texto estándar. Por eso puedes copiarlos con un solo clic y pegarlos en cualquier chat de WhatsApp, biografía de Instagram, mensaje de TikTok o documento de computadora sin perder calidad.'
  },
  {
    question: '¿Cómo copiar y pegar un emoji en mi celular Android o iPhone?',
    answer:
      'En nuestra herramienta, simplemente toca sobre la tarjeta del emoji que te guste o presiona el botón "Copiar". Verás una confirmación visual que dice "¡Copiado!". Luego abre tu app favorita (como WhatsApp o Instagram), mantén presionado tu dedo sobre la casilla de texto y selecciona "Pegar".'
  },
  {
    question: '¿Cómo armar combinaciones de varios emojis para una biografía o estado?',
    answer:
      'Utiliza nuestra Bandeja de Combinación: presiona el botón con el signo "+" en cada emoji que quieras agregar (por ejemplo: ✨ 💖 🌸 [Tu Mensaje] 🌸 💖 ✨). Cuando termines, presiona el botón "Copiar Combinación" para llevarte toda la cadena lista en un solo paso.'
  },
  {
    question: '¿Por qué los emojis se ven diferentes en iPhone (Apple) y en Android (Samsung o Xiaomi)?',
    answer:
      'Cada fabricante de sistemas operativos (Apple, Google, Samsung, Microsoft) diseña su propio estilo visual para los puntos de código Unicode. El significado del emoji es idéntico en todo el mundo, pero el dibujo gráfico variará ligeramente dependiendo de la marca de celular o computadora donde se visualice.'
  },
  {
    question: '¿Qué significa el emoji de manos formando un corazón 🫶?',
    answer:
      'Es un gesto viral de amor, apoyo, agradecimiento y empatía muy popular en la cultura pop y el K-Pop. Se utiliza para demostrar cariño sincero de una manera moderna y cálida.'
  },
  {
    question: '¿Qué significa el emoji de cara derritiéndose 🫠?',
    answer:
      'Representa situaciones de pena ajena, vergüenza, sarcasmo o calor extremo cuando sientes que "te derrites" de la incomodidad o el cansancio.'
  },
  {
    question: '¿Los emojis funcionan en nombres de Free Fire y videojuegos?',
    answer:
      'Muchos videojuegos aceptan emojis y símbolos Unicode en los nicks y mensajes del chat de clan, aunque algunos campos de nombres restringen caracteres a color. Te recomendamos probar la vista previa antes de confirmar el cambio de nombre en el juego.'
  },
  {
    question: '¿Tiene algún costo usar esta biblioteca de emojis para copiar y pegar?',
    answer:
      'No. En Letras Bonitas todo el catálogo de emojis, el buscador en vivo, la bandeja de combinaciones y el guardado de favoritos son 100% gratuitos y de acceso ilimitado.'
  }
];

export default function EmojisPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theletrasbonitas.com/emojis/#webpage',
        url: 'https://theletrasbonitas.com/emojis',
        name: 'Emojis para Copiar y Pegar — Catálogo Completo Gratis',
        description:
          'Colección completa de emojis Unicode para copiar y pegar con 1 clic: caritas, corazones, manos, animales, comida y símbolos para WhatsApp, Instagram y TikTok.',
        inLanguage: 'es-MX',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://theletrasbonitas.com/#website',
          name: 'Letras Bonitas',
          url: 'https://theletrasbonitas.com'
        },
        breadcrumb: {
          '@id': 'https://theletrasbonitas.com/emojis/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://theletrasbonitas.com/emojis/#breadcrumb',
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
            name: 'Emojis',
            item: 'https://theletrasbonitas.com/emojis'
          }
        ]
      },
      {
        '@type': 'WebApplication',
        name: 'Explorador de Emojis para Copiar y Pegar - Letras Bonitas',
        url: 'https://theletrasbonitas.com/emojis',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        description:
          'Herramienta interactiva para buscar y copiar emojis clasificados por categorías con 1 clic para redes sociales y mensajería.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theletrasbonitas.com/emojis/#faq',
        mainEntity: EMOJIS_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark, #0B0F19)' }}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Migas de pan"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.25rem 1.5rem 0.5rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.88rem',
          color: 'var(--text-secondary, #94A3B8)',
          flexWrap: 'wrap'
        }}
      >
        <Link
          href="/"
          style={{
            color: 'var(--text-secondary, #94A3B8)',
            textDecoration: 'none'
          }}
        >
          Inicio
        </Link>
        <ChevronRight size={14} />
        <span style={{ color: '#F472B6', fontWeight: 600 }}>Emojis</span>
      </nav>

      {/* Hero Header Section */}
      <header
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1.5rem 2.5rem 1.5rem',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            color: '#F472B6',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.25rem'
          }}
        >
          <Sparkles size={15} />
          Catálogo Universal de Emojis 2026
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#FFFFFF',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}
        >
          Emojis para{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #6366F1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Copiar y Pegar
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#94A3B8',
            maxWidth: '780px',
            margin: '0 auto 1.75rem auto',
            lineHeight: 1.6
          }}
        >
          ¿No encuentras el emoji que necesitas en tu teclado? Busca y copia al instante miles de caritas, corazones de colores, gestos con las manos, animales, comida y símbolos para tus chats de WhatsApp, publicaciones de Instagram y biografías de TikTok.
        </p>

        {/* Feature Highlights */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            fontSize: '0.88rem',
            color: '#CBD5E1'
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#10B981" /> 100% Gratis y sin publicidad invasiva
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#10B981" /> Copiado con 1 solo toque
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#10B981" /> Compatible con WhatsApp, Instagram y TikTok
          </span>
        </div>
      </header>

      {/* Main Interactive Tool Container */}
      <main
        id="herramienta-emojis"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem 3rem 1.5rem'
        }}
      >
        {/* Interactive Emoji Explorer Component */}
        <EmojiExplorer />

        {/* Editorial & SEO Supporting Content */}
        <article
          style={{
            marginTop: '3.5rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#CBD5E1',
            lineHeight: 1.75,
            fontSize: '1.02rem'
          }}
        >
          {/* Section 1: What are emojis */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Smile color="#EC4899" size={28} />
              ¿Qué son los emojis y cómo funcionan en internet?
            </h2>

            <p style={{ marginBottom: '1.25rem' }}>
              La palabra <strong>emoji</strong> proviene del japonés y significa literalmente &quot;imagen&quot; (<em>e</em>) + &quot;carácter escrito&quot; (<em>moji</em>). Fueron creados a finales de la década de 1990 por Shigetaka Kurita para facilitar la comunicación visual en teléfonos móviles y hoy forman parte del estándar universal <strong>Unicode</strong>.
            </p>

            <p style={{ marginBottom: '1.25rem' }}>
              A diferencia de una fotografía, un meme o un sticker en formato PNG o GIF, un emoji es un <strong>carácter de texto plano</strong>. Esto significa que cuando copias un emoji desde Letras Bonitas y lo pegas en WhatsApp, no estás enviando un archivo pesado, sino un código digital único que el sistema operativo de tu amigo interpreta y dibuja al instante en su pantalla.
            </p>

            {/* Feature Value Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
                marginTop: '1.75rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.65)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Zap size={20} color="#F59E0B" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                    Cero Peso y Carga Instantánea
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Al ser texto Unicode, los emojis no consumen datos de internet al compartirlos y cargan de forma inmediata en cualquier app.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.65)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={20} color="#10B981" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                    Compatibilidad Universal
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Funcionan en iOS, Android, Windows, Mac, navegadores web, redes sociales y plataformas de videojuegos sin instalar apps adicionales.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.65)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Layers size={20} color="#6366F1" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                    Combínalos con Tipografías
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Complementa tus emojis con nuestro <Link href="/conversor-de-letras/letras-para-copiar-y-pegar" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>conversor de letras para copiar y pegar</Link> y el catálogo de <Link href="/simbolos/para-copiar-y-pegar" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>símbolos para copiar y pegar</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Top Categories */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Flame color="#F59E0B" size={28} />
              Categorías de emojis más usadas en México y Latinoamérica
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              En nuestra biblioteca organizamos los emojis en colecciones claras para que encuentres el pictograma exacto en segundos:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Category: Faces */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F472B6', marginBottom: '0.5rem' }}>
                  😀 Caritas y Expresiones Emocionales (😂, 🥹, 🤣, 😍, 🥺, 💀, 🤡, 🫡)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  El corazón de la comunicación digital. La carita llorando de risa (😂) y la calavera (💀) son los reyes del humor en TikTok y memes, mientras que la carita con ojos brillantes (🥹) y el saludo militar (🫡) dominan las reacciones espontáneas de afecto y respeto.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.5rem' }}>
                  {['😂', '🥹', '🤣', '😍', '🥰', '😘', '🥺', '😭', '🤯', '💀', '🤡', '🫡'].map((em) => (
                    <span key={em} style={{ padding: '0.2rem 0.5rem', background: 'rgba(236, 72, 153, 0.12)', borderRadius: '8px', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
                      {em}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Hearts */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#EC4899', marginBottom: '0.5rem' }}>
                  ❤️ Corazones de Todos los Colores (❤️, 🩷, 🖤, 🤍, 💖, 🫶, ❤️‍🔥, 💔)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Cada color de corazón transmite un matiz diferente: el rojo (❤️) para amor romántico, el rosa pastel (🩷) para ternura y estilo coquette, el blanco (🤍) para pureza y paz, el negro (🖤) para estilo aesthetic/grunge, y el corazón en llamas (❤️‍🔥) para pasión ardiente.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.5rem' }}>
                  {['❤️', '🩷', '🧡', '💛', '💚', '💙', '🩵', '💜', '🖤', '🤍', '💖', '🫶'].map((em) => (
                    <span key={em} style={{ padding: '0.2rem 0.5rem', background: 'rgba(236, 72, 153, 0.12)', borderRadius: '8px', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
                      {em}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Hands & Gestures */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#A855F7', marginBottom: '0.5rem' }}>
                  👍 Gestos, Manos y Acciones (👍, 👏, 🤝, ✌️, 🫰, 👇, 💪, 💅, 👀)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Los dedos apuntando hacia abajo (👇) y hacia la derecha (👉) son esenciales para llamadas a la acción (CTAs) en biografías y enlaces de Instagram. Por su parte, las uñas pintándose (💅) y los ojos atentos (👀) son imprescindibles en el lenguaje del chisme y las indirectas divertidas.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.5rem' }}>
                  {['👍', '👏', '🤝', '✌️', '🫰', '👉', '👇', '👋', '💅', '💪', '👀', '🧠'].map((em) => (
                    <span key={em} style={{ padding: '0.2rem 0.5rem', background: 'rgba(168, 85, 247, 0.12)', borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
                      {em}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Food & Mexican Culture */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#10B981', marginBottom: '0.5rem' }}>
                  🌮 Comida, Fiestas y Cultura (🌮, 🍕, 🥑, 🍻, ☕, 🎉, 🎂, 🇲🇽)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Desde el emblemático taco mexicano (🌮) y el aguacate (🥑) hasta los tarros de cerveza para el brindis (🍻), el pastel de cumpleaños (🎂) y la bandera de México (🇲🇽) para celebrar nuestras fiestas patrias y eventos especiales.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.5rem' }}>
                  {['🌮', '🍕', '🥑', '🍔', '🍟', '🍣', '🎂', '☕', '🍻', '🎉', '🇲🇽', '🔥'].map((em) => (
                    <span key={em} style={{ padding: '0.2rem 0.5rem', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                      {em}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Step-by-Step Guide */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Smartphone color="#10B981" size={28} />
              Cómo copiar y pegar emojis en celular y computadora
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Copiar emojis en Letras Bonitas es rápido y funciona en cualquier sistema operativo:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.75)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #EC4899 0%, #A855F7 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    marginBottom: '1rem'
                  }}
                >
                  1
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Escribe en el Buscador
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Usa nuestro buscador en vivo escribiendo lo que sientes o buscas: &quot;risa&quot;, &quot;fuego&quot;, &quot;taco&quot;, &quot;corazón&quot;, &quot;fiesta&quot;.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.75)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    marginBottom: '1rem'
                  }}
                >
                  2
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Toca para Copiar
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Haz clic sobre el emoji que quieras. Se copiará instantáneamente y verás el aviso de confirmación verde &quot;¡Copiado!&quot;.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.75)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    marginBottom: '1rem'
                  }}
                >
                  3
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Pega en tus Mensajes
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Abre WhatsApp, Instagram o TikTok, mantén presionado tu dedo en el texto y elige &quot;Pegar&quot;. En PC, usa <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>Ctrl + V</kbd>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Instagram & Social Media Ideas */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Instagram color="#EC4899" size={28} />
              Combinaciones creativas de emojis para Instagram, TikTok y WhatsApp
            </h2>

            <p style={{ marginBottom: '1.25rem' }}>
              Una combinación bien pensada de emojis transforma una biografía aburrida en un perfil profesional, atractivo y lleno de personalidad. Puedes combinarlos también con nuestras <Link href="/letras-para-instagram" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>letras para Instagram</Link> y <Link href="/letras-para-instagram/simbolos-para-instagram" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>símbolos para Instagram</Link>:
            </p>

            {/* Practical Bio Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.25rem',
                marginTop: '1.5rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.7)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(236, 72, 153, 0.25)'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#F472B6', fontWeight: 700, textTransform: 'uppercase' }}>
                  Ejemplo Bio Estilo Dulce / Coquette
                </span>
                <div
                  style={{
                    background: 'rgba(11, 15, 25, 0.9)',
                    padding: '1rem',
                    borderRadius: '12px',
                    marginTop: '0.75rem',
                    fontSize: '0.94rem',
                    color: '#F8FAFC',
                    lineHeight: 1.7
                  }}
                >
                  🌸 Valentina • Fotógrafa 📸<br />
                  ✨ Creando recuerdos mágicos ✨<br />
                  🩷 Café, libros y atardeceres ☕ 📖 🌅<br />
                  👇 Mira mi portafolio completo aquí 👇
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.7)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(99, 102, 241, 0.25)'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#818CF8', fontWeight: 700, textTransform: 'uppercase' }}>
                  Ejemplo Bio Gamer / Emprendedor
                </span>
                <div
                  style={{
                    background: 'rgba(11, 15, 25, 0.9)',
                    padding: '1rem',
                    borderRadius: '12px',
                    marginTop: '0.75rem',
                    fontSize: '0.94rem',
                    color: '#F8FAFC',
                    lineHeight: 1.7
                  }}
                >
                  👑 Carlos MX • Streamer 🎮<br />
                  ⚡ Jugador competitivo de Free Fire ⚡<br />
                  🔥 En vivo todos los días a las 8 PM 🔥<br />
                  🚀 Únete a nuestra comunidad de Discord 👇
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Why emojis look different on Apple vs Android */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Info color="#0EA5E9" size={28} />
              ¿Por qué los emojis se ven diferentes en iPhone, Android y PC?
            </h2>

            <p style={{ marginBottom: '1.25rem' }}>
              Una de las preguntas más frecuentes es por qué el emoji que envías desde un iPhone se ve ligeramente distinto en el celular Samsung o Xiaomi de tu amigo. La respuesta está en la forma en que funciona la tipografía digital:
            </p>

            <div
              style={{
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem'
              }}
            >
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.95rem' }}>
                <li>
                  <strong>Unicode define el concepto:</strong> El Consorcio Unicode dictamina: &quot;Este código representa una cara sonriente con lágrimas de risa&quot;.
                </li>
                <li>
                  <strong>Cada empresa dibuja su ilustración:</strong> Apple diseña la fuente <em>Apple Color Emoji</em>, Google usa <em>Noto Color Emoji</em>, Samsung crea su propio set para la capa One UI y Microsoft utiliza <em>Segoe UI Emoji</em> en Windows.
                </li>
                <li>
                  <strong>WhatsApp en Android usa emojis de Apple:</strong> Para evitar confusiones, la aplicación de WhatsApp para Android incluye internamente los dibujos estilizados de Apple, logrando que los usuarios de ambas marcas vean prácticamente lo mismo dentro del chat.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: FAQ Accordion */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 1rem',
                  borderRadius: '100px',
                  background: 'rgba(236, 72, 153, 0.1)',
                  color: '#F472B6',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem'
                }}
              >
                <HelpCircle size={15} />
                Respuestas Claras
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF'
                }}
              >
                Preguntas Frecuentes sobre Emojis para Copiar y Pegar
              </h2>
            </div>

            <SEOArticleFaqAccordion faqs={EMOJIS_FAQS} />
          </section>

          {/* Section 7: Sibling and Related Pages */}
          <section
            style={{
              padding: '2rem',
              borderRadius: '20px',
              background: 'linear-gradient(180deg, rgba(20, 27, 45, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginTop: '2rem'
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem'
              }}
            >
              Explora más herramientas gratuitas en Letras Bonitas
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Personaliza tus perfiles y mensajes con nuestras utilidades complementarias:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem'
              }}
            >
              <Link
                href="/simbolos/para-copiar-y-pegar"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Símbolos para Copiar y Pegar</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Estrellas, coronas y cruces</span>
                </div>
                <ArrowRight size={16} color="#EC4899" />
              </Link>

              <Link
                href="/simbolos"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Catálogo de Símbolos</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Biblioteca completa de glifos</span>
                </div>
                <ArrowRight size={16} color="#EC4899" />
              </Link>

              <Link
                href="/conversor-de-letras/letras-para-copiar-y-pegar"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Letras para Copiar y Pegar</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Más de 350 fuentes en vivo</span>
                </div>
                <ArrowRight size={16} color="#0EA5E9" />
              </Link>

              <Link
                href="/letras-para-instagram"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Letras para Instagram</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Fuentes para biografía y posts</span>
                </div>
                <ArrowRight size={16} color="#A855F7" />
              </Link>

              <Link
                href="/letras-para-instagram/simbolos-para-instagram"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Símbolos para Instagram</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Decoraciones estéticas para bio</span>
                </div>
                <ArrowRight size={16} color="#EC4899" />
              </Link>

              <Link
                href="/nombres-para-free-fire/simbolos"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Símbolos Free Fire</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Cruces, alas y tags gamer</span>
                </div>
                <ArrowRight size={16} color="#F59E0B" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
