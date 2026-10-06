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
  Info
} from 'lucide-react';
import ParaCopiarSymbolExplorer from '@/components/symbols/ParaCopiarSymbolExplorer';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Símbolos para Copiar y Pegar — Catálogo Completo Gratis',
  description:
    'Colección de símbolos para copiar y pegar con 1 clic. Encuentra estrellas (★), corazones (♡), lazos coquette (୨୧), cruces (†), rayos (⚡), flechas y caracteres para Instagram, WhatsApp y Free Fire.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar'
  },
  openGraph: {
    title: 'Símbolos para Copiar y Pegar — Catálogo Completo Gratis',
    description:
      'Catálogo interactivo con miles de símbolos Unicode para copiar con un clic. Estrellas, corazones, lazos, caracteres gamer y separadores para tus perfiles.',
    url: 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Símbolos para Copiar y Pegar - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos para Copiar y Pegar — Catálogo Completo Gratis',
    description:
      'Descubre y copia símbolos bonitos, estrellas, corazones, lazos y signos especiales con un solo clic. Gratis y compatible con todas las redes.',
    images: ['https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const SIMBOLOS_FAQS = [
  {
    question: '¿Qué son los símbolos para copiar y pegar y cómo funcionan?',
    answer:
      'Son caracteres tipográficos pertenecientes al estándar internacional Unicode. No son imágenes, stickers ni archivos descargables, sino texto real. Gracias a esto, puedes copiarlos con un solo clic y pegarlos en cualquier campo de texto: biografías de Instagram, nombres de Free Fire, chats de WhatsApp, publicaciones de TikTok, documentos de Word o servidores de Discord.'
  },
  {
    question: '¿Cómo copiar y pegar un símbolo en mi celular Android o iPhone?',
    answer:
      'En nuestra herramienta, simplemente toca sobre la tarjeta del símbolo que te guste o presiona el botón "Copiar". El sistema mostrará la confirmación "¡Copiado!". Luego abre tu app favorita (como Instagram o WhatsApp), mantén presionado el dedo sobre la casilla de texto y selecciona la opción "Pegar".'
  },
  {
    question: '¿Cómo armar combinaciones de múltiples símbolos para mi bio o nick?',
    answer:
      'Utiliza nuestra Bandeja de Combinación: presiona el botón con el signo "+" ubicado en la esquina superior izquierda de cada tarjeta para ir reuniendo los símbolos que quieras (por ejemplo: ୨୧ ✦ [Tu Nombre] ✦ ୨୧ o 亗 ⚡ [Tu Nick] ⚡ 亗). Cuando termines, pulsa "Copiar Combinación" para llevarte todo el conjunto listo en un solo paso.'
  },
  {
    question: '¿Los símbolos para copiar y pegar son compatibles con Free Fire, Roblox y Fortnite?',
    answer:
      'Sí. La gran mayoría de símbolos de nuestro catálogo (incluyendo la corona insana 亗, la cruz tibetana ༒, el rayo ⚡, la marca de clan 〆 y las espadas ☬) son ampliamente aceptados por los videojuegos móviles y de PC. Recuerda siempre verificar la vista previa dentro del juego antes de confirmar cambios permanentes de nombre.'
  },
  {
    question: '¿Por qué algunos símbolos aparecen como cuadros con una X o signo de interrogación (tofu)?',
    answer:
      'Este fenómeno ocurre cuando el sistema operativo o la fuente instalada en el dispositivo receptor no cuenta con el glifo para representar esa versión específica de Unicode. Para evitarlo, mantén actualizado tu dispositivo a la versión más reciente de iOS o Android, o elige símbolos clásicos de alta compatibilidad como ★, ♡, ✦, ⚡ o ✿.'
  },
  {
    question: '¿Cuál es la diferencia entre un símbolo Unicode y un emoji?',
    answer:
      'Los emojis son ilustraciones gráficas a color cuyo aspecto varía según la marca del dispositivo (Apple, Google, Samsung). Los símbolos Unicode son caracteres monocromáticos limpios que adoptan de forma automática la tipografía, el tamaño y el color del texto donde se pegan, logrando una estética más uniforme y profesional.'
  },
  {
    question: '¿Puedo guardar mis símbolos favoritos para usarlos después?',
    answer:
      'Sí. Pulsa el icono de la estrella en cualquier tarjeta de símbolo y se guardará automáticamente en la memoria local de tu navegador. Cuando regreses a Letras Bonitas, toca el botón "Favoritos" para ver tu selección personalizada al instante sin necesidad de registrarte.'
  },
  {
    question: '¿Tiene algún costo utilizar este catálogo de símbolos para copiar y pegar?',
    answer:
      'No, todo el catálogo, el buscador en vivo, la bandeja de combinaciones y las herramientas de filtrado en Letras Bonitas son 100% gratuitas, sin registro y de uso ilimitado.'
  }
];

export default function SimbolosParaCopiarYPegarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar/#webpage',
        url: 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar',
        name: 'Símbolos para Copiar y Pegar — Catálogo Completo Gratis',
        description:
          'Colección interactiva de símbolos para copiar y pegar con 1 clic: estrellas, corazones, lazos coquette, cruces, rayos y caracteres especiales para redes sociales y videojuegos.',
        inLanguage: 'es-MX',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://theletrasbonitas.com/#website',
          name: 'Letras Bonitas',
          url: 'https://theletrasbonitas.com'
        },
        breadcrumb: {
          '@id': 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar/#breadcrumb',
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
            name: 'Símbolos para Copiar y Pegar',
            item: 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theletrasbonitas.com/simbolos/para-copiar-y-pegar/#faq',
        mainEntity: SIMBOLOS_FAQS.map((faq) => ({
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
        <Link
          href="/simbolos"
          style={{
            color: 'var(--text-secondary, #94A3B8)',
            textDecoration: 'none'
          }}
        >
          Símbolos
        </Link>
        <ChevronRight size={14} />
        <span style={{ color: '#F472B6', fontWeight: 600 }}>Símbolos para Copiar y Pegar</span>
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
          Biblioteca Universal Unicode 2026
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
          Símbolos para{' '}
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
          ¿Buscas el símbolo perfecto para destacar tu biografía, nombre de usuario o mensajes? Encuentra miles de estrellas, corazones, lazos coquette, cruces, rayos y caracteres gamer listos para copiar con 1 solo clic.
        </p>

        {/* Feature Highlights Pills */}
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
            <CheckCircle2 size={16} color="#10B981" /> 100% Gratis y sin registro
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#10B981" /> Copiado instantáneo a 1 clic
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#10B981" /> Compatible con Instagram, WhatsApp y FF
          </span>
        </div>
      </header>

      {/* Main Interactive Tool Container */}
      <main
        id="herramienta-simbolos"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem 3rem 1.5rem'
        }}
      >
        {/* Interactive Symbol Explorer Component */}
        <ParaCopiarSymbolExplorer />

        {/* Supporting Editorial & SEO Content */}
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
          {/* Section 1: Introduction & What are Unicode Symbols */}
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
              <Compass color="#EC4899" size={28} />
              ¿Qué son los símbolos para copiar y pegar y cómo funcionan?
            </h2>

            <p style={{ marginBottom: '1.25rem' }}>
              Los <strong>símbolos para copiar y pegar</strong> son caracteres tipográficos especializados definidos en el estándar universal <strong>Unicode</strong>. A diferencia de las imágenes recortadas o los stickers que requieren archivos adjuntos, los símbolos Unicode se comportan exactamente igual que las letras y los números comunes de tu teclado.
            </p>

            <p style={{ marginBottom: '1.25rem' }}>
              Esto significa que tienen un peso insignificante de apenas unos pocos bytes y pueden incrustarse directamente en cualquier campo de texto plano de internet: desde tu biografía de Instagram o estado de WhatsApp hasta tu nombre competitivo en Free Fire o un documento de Google Docs. Al hacer clic sobre cualquier símbolo en nuestra biblioteca interactiva, el navegador transfiere automáticamente el código hexadecimal del glifo a tu portapapeles listo para pegarse en cualquier aplicación.
            </p>

            {/* Practical Quick Visual Cards */}
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
                    Texto Real, No Imágenes
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Se adaptan automáticamente al tamaño de la fuente, el color del tema y el estilo de la plataforma donde los pegues sin perder nitidez.
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
                    Seguridad y Compatibilidad
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  No necesitas instalar fuentes externas ni otorgar permisos especiales. Todo funciona de manera nativa en navegadores modernos y móviles.
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
                    Combinaciones Infinitas
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Combina símbolos con nuestro <Link href="/conversor-de-letras/letras-para-copiar-y-pegar" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>conversor de letras para copiar y pegar</Link> para diseñar tipografías y nicks únicos.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Popular Categories Deep Dive */}
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
              Colecciones de símbolos más buscadas para copiar
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Para facilitarte la búsqueda entre cientos de glifos, organizamos nuestro catálogo en las familias temáticas con mayor demanda en redes sociales, perfiles personales y videojuegos:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Category 1: Stars */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F472B6', marginBottom: '0.5rem' }}>
                  ★ Estrellas y Destellos Aesthetic (★, ☆, ✦, ✧, ⋆, ✵, ✰)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Las estrellas son las reinas indiscutibles de las biografías y los títulos limpios. Los destellos de cuatro puntas (✦ y ✧) aportan un toque sofisticado y minimalista, mientras que la micro estrella (⋆) funciona a la perfección como separador entre palabras.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['★', '☆', '✦', '✧', '⋆', '✵', '✶', '✰', '✺'].map((sym) => (
                    <span
                      key={sym}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        background: 'rgba(236, 72, 153, 0.15)',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                        color: '#FFFFFF',
                        fontSize: '1.1rem'
                      }}
                    >
                      {sym}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Hearts */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#EC4899', marginBottom: '0.5rem' }}>
                  ♡ Corazones y Amor (♥, ♡, ❥, ❦, ᥫ᭡, 𓆩♡𓆪, ღ)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Desde el delicado corazón blanco hueco (♡) hasta el viral corazón Cham (ᥫ᭡) y el corazón alado egipcio (𓆩♡𓆪). Son ideales para dedicatorias, estados de amor o perfiles en pareja. Si buscas más estilos románticos, visita nuestra sección de <Link href="/simbolos/bonitos" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>símbolos bonitos</Link>.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['♥', '♡', '❥', '❦', 'ᥫ᭡', '𓆩♡𓆪', 'ღ', 'ꨄ', 'დ'].map((sym) => (
                    <span
                      key={sym}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        background: 'rgba(236, 72, 153, 0.15)',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                        color: '#FFFFFF',
                        fontSize: '1.1rem'
                      }}
                    >
                      {sym}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Coquette & Bows */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#A855F7', marginBottom: '0.5rem' }}>
                  ୨୧ Lazos y Coquette (୨୧, ೀ, 𐙚, ౨ৎ, ʚɞ, 𓍢ִ໋)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Los lazos coquette japoneses (୨୧) y las mariposas sutiles (౨ৎ) dominan las tendencias visuales de TikTok y Pinterest. Aportan ternura, elegancia y un aire vintage a cualquier nombre de usuario. Descubre más en <Link href="/simbolos/aesthetic" style={{ color: '#C084FC', textDecoration: 'none', fontWeight: 600 }}>símbolos aesthetic</Link>.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['୨୧', 'ೀ', '𐙚', '౨ৎ', 'ʚɞ', '𓍢ִ໋', 'ʚ', 'ɞ'].map((sym) => (
                    <span
                      key={sym}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        color: '#FFFFFF',
                        fontSize: '1.1rem'
                      }}
                    >
                      {sym}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4: Gamer & Free Fire */}
              <div
                style={{
                  background: 'rgba(20, 27, 45, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6366F1', marginBottom: '0.5rem' }}>
                  亗 Gamer, Cruces y Nicks FF (亗, 〆, 么, メ, 彡, ༒, ⚡, ☠)
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                  Símbolos indispensables para jugadores competitivos de Free Fire, PUBG, Call of Duty Mobile y Roblox. La corona insana (亗), la marca de clan japonesa (〆) y el rayo (⚡) imponen respeto en cualquier tabla de clasificación. Explora más opciones en nuestra sección de <Link href="/nombres-para-free-fire/simbolos" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>símbolos para Free Fire</Link> y <Link href="/simbolos/especiales" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>símbolos especiales</Link>.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['亗', '〆', '么', 'メ', '彡', '༒', '⚡', '☠', '☬', '👑'].map((sym) => (
                    <span
                      key={sym}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        color: '#FFFFFF',
                        fontSize: '1.1rem'
                      }}
                    >
                      {sym}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Step by Step Guide */}
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
              Cómo copiar y pegar símbolos en cualquier dispositivo
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Copiar tus símbolos favoritos en Letras Bonitas toma solo un par de segundos. Sigue estos sencillos pasos:
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
                  Elige o Busca tu Símbolo
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Escribe en el buscador el nombre o temática del símbolo que deseas (por ejemplo: &quot;estrella&quot;, &quot;corona&quot;, &quot;cruz&quot;) o navega por los filtros de categorías.
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
                  Toca para Copiar con 1 Clic
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Haz clic sobre la tarjeta del símbolo. Aparecerá inmediatamente la confirmación verde &quot;¡Copiado!&quot; indicando que el glifo ya está en tu portapapeles.
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
                  Pega en tu Aplicación
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0 }}>
                  Ve a Instagram, WhatsApp, TikTok o Free Fire. En celulares, mantén presionado el dedo en la caja de texto y pulsa &quot;Pegar&quot;. En computadoras, presiona <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>Ctrl + V</kbd> o <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>Cmd + V</kbd>.
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
              Símbolos para Instagram, TikTok y WhatsApp: Ideas y Ejemplos
            </h2>

            <p style={{ marginBottom: '1.25rem' }}>
              En redes sociales, los símbolos funcionan como organizadores visuales que rompen la monotonía del texto y guían la mirada del lector hacia información clave. También puedes combinar estos símbolos con nuestras <Link href="/letras-para-instagram" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>letras para Instagram</Link> y <Link href="/letras-para-instagram/simbolos-para-instagram" style={{ color: '#F472B6', textDecoration: 'none', fontWeight: 600 }}>símbolos para Instagram</Link>.
            </p>

            {/* Combination Inspiration Cards */}
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
                  Ejemplo Bio Aesthetic
                </span>
                <div
                  style={{
                    background: 'rgba(11, 15, 25, 0.9)',
                    padding: '1rem',
                    borderRadius: '12px',
                    marginTop: '0.75rem',
                    fontFamily: 'monospace',
                    fontSize: '0.92rem',
                    color: '#F8FAFC',
                    lineHeight: 1.6
                  }}
                >
                  ୨୧ Sofía Morales ୨୧<br />
                  ✦ Creadora digital • CDMX 🇲🇽<br />
                  ♡ Amante del café y los libros ☕<br />
                  ↳ Mira mi último proyecto abajo ☟
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
                  Ejemplo Nick Gamer Free Fire
                </span>
                <div
                  style={{
                    background: 'rgba(11, 15, 25, 0.9)',
                    padding: '1rem',
                    borderRadius: '12px',
                    marginTop: '0.75rem',
                    fontFamily: 'monospace',
                    fontSize: '0.92rem',
                    color: '#F8FAFC',
                    lineHeight: 1.6
                  }}
                >
                  亗 • S H A D O W • 亗<br />
                  ⚡ ༒ K I L L E R ༒ ⚡<br />
                  〆 V E N O M 么<br />
                  𓆩☠𓆪 • N I T R O • 𓆩☠𓆪
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Troubleshooting Tofu and Missing Characters */}
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
              ¿Por qué algunos símbolos aparecen como cuadros vacíos (tofu)?
            </h2>

            <p style={{ marginBottom: '1.25rem' }}>
              Cuando un símbolo aparece como un rectángulo vacío, un signo de interrogación o un cuadro con una X (conocido en diseño tipográfico como <em>tofu</em>), no significa que el símbolo esté dañado. Ocurre porque la tipografía del sistema operativo del dispositivo receptor carece del dibujo (glifo) correspondiente a ese carácter Unicode en particular.
            </p>

            <div
              style={{
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38BDF8', marginBottom: '0.75rem' }}>
                Recomendaciones para garantizar máxima compatibilidad:
              </h3>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li>
                  <strong>Usa símbolos Unicode estándar:</strong> Símbolos como ★, ☆, ♥, ♡, ✦, ⚡, † y ✿ tienen un soporte cercano al 100% en todos los celulares y computadoras del mundo.
                </li>
                <li>
                  <strong>Actualiza tu sistema operativo:</strong> Las versiones más recientes de Android e iOS incorporan soporte para miles de glifos modernos de las revisiones Unicode 15 y 16.
                </li>
                <li>
                  <strong>Verifica antes de publicar:</strong> Si estás diseñando un nombre de clan o una biografía de negocios, pruébala primero en un perfil secundario o chat para asegurarte de que se vea perfecto.
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
                Resolviendo tus Dudas
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF'
                }}
              >
                Preguntas Frecuentes sobre Símbolos para Copiar y Pegar
              </h2>
            </div>

            <SEOArticleFaqAccordion faqs={SIMBOLOS_FAQS} />
          </section>

          {/* Section 7: Explore Sibling & Related Pages */}
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
              Explora más herramientas y categorías en Letras Bonitas
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Continúa personalizando tus textos con nuestras herramientas complementarias gratuitas:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem'
              }}
            >
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
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Catálogo General de Símbolos</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Todos los caracteres reunidos</span>
                </div>
                <ArrowRight size={16} color="#EC4899" />
              </Link>

              <Link
                href="/simbolos/bonitos"
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
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Símbolos Bonitos</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Corazones, flores y ternura</span>
                </div>
                <ArrowRight size={16} color="#EC4899" />
              </Link>

              <Link
                href="/simbolos/especiales"
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
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Símbolos Especiales</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Rayos, coronas y cruces</span>
                </div>
                <ArrowRight size={16} color="#6366F1" />
              </Link>

              <Link
                href="/simbolos/aesthetic"
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
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Símbolos Aesthetic</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Lazos coquette y lunas</span>
                </div>
                <ArrowRight size={16} color="#A855F7" />
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
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Más de 350 tipografías en vivo</span>
                </div>
                <ArrowRight size={16} color="#0EA5E9" />
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
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Cruces, alas y tags de clan</span>
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
