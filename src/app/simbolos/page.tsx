import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Sparkles,
  Star,
  Heart,
  Gamepad2,
  Zap,
  HelpCircle,
  Copy,
  ArrowRight,
  CheckCircle2,
  Info,
  ShieldCheck,
  Smartphone,
  Keyboard,
  Compass
} from 'lucide-react';
import UniversalSymbolTool from '@/components/symbols/UniversalSymbolTool';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Símbolos para Copiar y Pegar: Catálogo Bonito, Gamer y Aesthetic',
  description:
    'Encuentra y copia más de 1,000 símbolos bonitos, aesthetic, gamer, de corazones, estrellas y flechas. Copia con 1 clic para Instagram, Free Fire, WhatsApp y más.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/simbolos/'
  },
  openGraph: {
    title: 'Símbolos para Copiar y Pegar: Catálogo Bonito, Gamer y Aesthetic',
    description:
      'Catálogo interactivo de símbolos para copiar y pegar gratis. Símbolos para Instagram, nicks de Free Fire, bios aesthetic, corazones y flechas en un clic.',
    url: 'https://theletrasbonitas.com/simbolos/',
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
    title: 'Símbolos para Copiar y Pegar: Catálogo Bonito, Gamer y Aesthetic',
    description:
      'Descubre miles de símbolos Unicode para copiar y pegar: corazones, coronas gamer, estrellas, flechas y estética coquette gratis.',
    images: ['https://theletrasbonitas.com/images/simbolos-para-copiar-y-pegar-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const SIMBOLOS_FAQS = [
  {
    question: '¿Qué son los símbolos para copiar y pegar?',
    answer:
      'Son caracteres especiales estandarizados por el Consorcio Unicode. A diferencia de las imágenes o stickers, los símbolos Unicode se comportan exactamente como letras de texto ordinarias, lo que significa que puedes copiarlos, pegarlos, cambiarles de color y usarlos en cualquier campo de texto de internet, redes sociales o videojuegos.'
  },
  {
    question: '¿Cómo copiar símbolos desde un celular Android o iPhone?',
    answer:
      'En nuestra herramienta interactiva, simplemente toca el botón "Copiar" al lado de cualquier símbolo y este se guardará automáticamente en el portapapeles de tu teléfono. Luego, abre WhatsApp, Instagram o Free Fire, mantén presionado el dedo sobre el cuadro de texto y selecciona "Pegar".'
  },
  {
    question: '¿Por qué algunos símbolos aparecen como cuadros blancos o signos de interrogación?',
    answer:
      'Esto se conoce popularmente como "tofu box" y ocurre cuando el dispositivo o la aplicación no cuenta con la fuente del sistema actualizada para interpretar ese caracter Unicode específico. En Letras Bonitas filtramos y probamos previamente nuestros símbolos para garantizar la mayor compatibilidad posible en teléfonos modernos.'
  },
  {
    question: '¿Puedo usar estos símbolos en mi nombre de Free Fire, Roblox o Discord?',
    answer:
      '¡Sí! Símbolos como coronas (亗), relámpagos (⚡), cruces japonesas (メ), marcas de clan (〆) y corchetes (『』) son ampliamente usados por la comunidad gamer competitiva. Te sugerimos revisar la vista previa en el juego antes de confirmar cambios permanentes.'
  },
  {
    question: '¿Qué son los códigos Alt y cómo se usan en computadora?',
    answer:
      'Los códigos Alt son atajos de teclado en Windows. Para usarlos, mantén presionada la tecla "Alt" mientras tecleas una combinación numérica en el teclado numérico derecho (por ejemplo, Alt + 3 para ♥ o Alt + 1 para ☺), y luego suelta la tecla Alt.'
  },
  {
    question: '¿Es 100% gratis el catálogo de símbolos de Letras Bonitas?',
    answer:
      'Sí, todo nuestro catálogo y el combinador de símbolos son de acceso libre e ilimitado. No requieres registrarte, descargar programas ni pagar ninguna suscripción para copiar y personalizar tus símbolos.'
  },
  {
    question: '¿Cuál es la diferencia entre un emoji y un símbolo Unicode?',
    answer:
      'Los emojis son representaciones gráficas a color que dependen del diseño de cada fabricante (Apple, Google, Samsung), mientras que los símbolos Unicode son caracteres monocromáticos de texto (como ★, ♡, †, 亗) que adoptan el color y tamaño de la fuente donde los pegues.'
  },
  {
    question: '¿Puedo combinar varios símbolos para hacer un diseño personalizado?',
    answer:
      'Sí, nuestra herramienta incluye una "Bandeja de Combinación" en la parte superior. Al presionar el botón "+" en los símbolos que te gusten, se irán acumulando en una caja para que copies toda la combinación junta con un solo clic.'
  }
];

export default function SimbolosPage() {
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
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Catálogo de Símbolos para Copiar y Pegar - Letras Bonitas',
    url: 'https://theletrasbonitas.com/simbolos/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Explorador interactivo de símbolos bonitos, aesthetic, gamer y de texto para copiar y pegar al portapapeles gratis.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SIMBOLOS_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="silo-page">
      {/* Structured Data */}
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

      {/* 1. Breadcrumbs */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Símbolos</span>
        </div>
      </nav>

      {/* 2 & 3. Hero Section Centered */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="sparkle-icon" color="#818CF8" />
            <span>Catálogo Completo de Símbolos Unicode</span>
          </div>

          <h1 className="hero-h1">
            Símbolos para Copiar y Pegar
          </h1>

          <p className="hero-tagline">
            Encuentra símbolos bonitos, aesthetic, gamer y de texto listos para usar en un clic
          </p>

          <p className="hero-description">
            ¿Buscas darle un toque especial a tu biografía de Instagram, destacar tu apodo en Free Fire o adornar tus mensajes de WhatsApp?
            Explora nuestra biblioteca clasificada de símbolos especiales, añade tus favoritos a la bandeja de combinación y cópialos directamente a tu portapapeles.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>+1,000 Símbolos Verificados</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Copiado Directo en 1 Toque</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Bandeja de Combinación</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>100% Gratis y Sin Registro</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN INTERACTIVE TOOL IN FIRST VIEWPORT */}
      <div style={{ maxWidth: '1160px', margin: '-1.5rem auto 0', padding: '0 1rem' }}>
        <UniversalSymbolTool />
      </div>

      {/* 5. Main Content Container */}
      <div className="cp-container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        
        {/* Quick Instructions Feature Box */}
        <section className="game-feature-box" style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFF', marginBottom: '0.85rem' }}>
            Cómo usar el explorador y la bandeja de símbolos
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Diseñamos esta herramienta para que encuentres cualquier caracter en segundos sin rodeos:
          </p>
          <div className="game-grid-3">
            <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.2)', color: '#818CF8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.75rem' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Filtra o busca por nombre
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Usa las pestañas temáticas (Corazones, Estrellas, Gamer, Aesthetic) o escribe lo que buscas en el buscador en vivo.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.2)', color: '#F472B6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.75rem' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Copia o combina
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Presiona <strong>Copiar</strong> para llevarte un símbolo individual, o toca <strong>+</strong> para agregarlo a la bandeja superior.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.75rem' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
                Pega en tus apps favoritas
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Pega tus combinaciones en tu bio de Instagram, estados de WhatsApp, nicks de Free Fire, Roblox, TikTok o documentos.
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
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)'
          }}
        >
          <Image
            src="/images/simbolos-para-copiar-y-pegar-interfaz.png"
            alt="Interfaz interactiva del catálogo de símbolos para copiar y pegar"
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
            Explorador de símbolos con selector de categorías, bandeja de combinación y botones de copiado instantáneo en Letras Bonitas.
          </figcaption>
        </figure>

        {/* Informative Educational Guide */}
        <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.75, color: '#CBD5E1', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            ¿Qué son los símbolos Unicode y por qué se pueden copiar y pegar?
          </h2>
          <p>
            En la era digital, la comunicación escrita va mucho más allá de las letras convencionales del abecedario.
            Los <strong>símbolos para copiar y pegar</strong> son caracteres especiales codificados bajo el estándar internacional <strong>Unicode</strong>.
            A diferencia de los archivos de imagen (.png o .jpg) o las pegatinas, cada símbolo posee un código numérico único universalmente reconocido por todos los sistemas operativos modernos, incluidos Android, iOS, Windows, macOS y Linux.
          </p>
          <p>
            Esto significa que cuando copias un símbolo como un corazón <code>♡</code>, una corona gamer <code>亗</code> o una estrella brillante <code>✦</code>,
            el sistema no está transfiriendo una imagen pesada, sino un simple caracter de texto de unos pocos bytes. Gracias a esto, puedes pegarlos en cualquier campo que acepte texto:
            tu nombre de perfil en redes sociales, comentarios, apodos de videojuegos, mensajes de mensajería instantánea e incluso en títulos de archivos.
          </p>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Colecciones de símbolos más populares en México y Latinoamérica
          </h2>
          <p>
            Dependiendo de la plataforma y el objetivo que tengas en mente, ciertos grupos de símbolos tienen una enorme demanda en la comunidad digital hispanohablante:
          </p>

          {/* Highlights Grid for Categories */}
          <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F472B6', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Heart size={18} /> Símbolos de Corazones y Amor
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Desde el sutil corazón blanco <code>♡</code> y el corazón clásico <code>♥</code>, hasta variantes caligráficas como <code>❥</code> y el corazón alado <code>𓆩♡𓆪</code>. Ideales para bios románticas, nombres de contacto en WhatsApp y fotos de parejas.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.3em', color: '#F472B6' }}>
                ♡ ♥ ❥ ❣ ❦ დ ღ ꨄ ᥫ᭡
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#818CF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Gamepad2 size={18} /> Símbolos Gamer y de Combate
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Los elementos preferidos por jugadores de Free Fire, Call of Duty Mobile, PUBG y clanes competitivos: la corona del líder <code>亗</code>, el rayo <code>⚡</code>, espadas cruzadas <code>⚔</code> y la marca de clan <code>〆</code>.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.3em', color: '#818CF8' }}>
                亗 ⚡ 〆 メ ☬ 𒆜 ⚔ ♛ 々
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Star size={18} /> Símbolos Estelares y Destellos
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Estrellas sólidas <code>★</code>, estrellas huecas <code>☆</code>, destellos mágicos <code>✦</code> y brillos celestiales <code>✧</code>. Aportan elegancia visual a listas, destacados de historias y descripciones profesionales.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.3em', color: '#38BDF8' }}>
                ★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✵
              </div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Compass size={18} /> Símbolos Aesthetic y Cósmicos
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>
                Inspirados en la estética vaporwave, coquette y minimalista: lunas crecientes <code>☾</code>, nubes <code>☁</code>, mariposas <code>ʚïɞ</code>, flores de cerezo <code>❀</code> y lazos coquette <code>ೀ</code>.
              </p>
              <div style={{ fontSize: '1.1rem', letterSpacing: '0.3em', color: '#34D399' }}>
                ☾ ☁ ʚïɞ ✿ ❀ ⋆ ｡ ° ೀ
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
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '1rem',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)'
            }}
          >
            <Image
              src="/images/simbolos-esteticos-gamer-copiar.png"
              alt="Muestras de símbolos bonitos, aesthetic y gamer clasificados para copiar"
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
              Colección organizada de símbolos decorativos listos para copiar con un clic y pegar en redes sociales y juegos.
            </figcaption>
          </figure>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Guía práctica: Cómo copiar y pegar símbolos en cualquier dispositivo
          </h2>
          <p>
            Aunque el procedimiento es sumamente sencillo, existen diferencias clave según el sistema o aplicación que estés utilizando:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.55)', borderLeft: '4px solid #818CF8', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', margin: '0 0 0.35rem 0', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Smartphone size={16} color="#818CF8" /> En celulares (Android y iPhone / iOS)
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
                1. En nuestra herramienta de Letras Bonitas, pulsa el botón <strong>Copiar</strong> en el símbolo deseado.<br />
                2. Verás que el botón cambia brevemente a verde con el texto <em>¡Listo!</em>, confirmando que está en tu portapapeles.<br />
                3. Abre Instagram, WhatsApp o tu juego, mantén tu dedo presionado sobre el campo de texto durante 1 segundo y pulsa <strong>Pegar</strong>.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.55)', borderLeft: '4px solid #10B981', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', margin: '0 0 0.35rem 0', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Keyboard size={16} color="#10B981" /> En computadoras (Windows y Mac)
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
                1. Haz clic sobre la tarjeta del símbolo para copiarlo de inmediato.<br />
                2. Ve al documento, red social o ventana de chat donde quieras colocarlo.<br />
                3. Usa el atajo de teclado <code>Ctrl + V</code> (en Windows) o <code>Cmd + V</code> (en Mac) para pegarlo instantáneamente.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Códigos Alt más populares en Windows
          </h2>
          <p>
            Si estás en una computadora con teclado numérico físico, también puedes escribir algunos símbolos clásicos directamente mediante códigos Alt.
            Mantén presionada la tecla <code>Alt</code> y teclea los siguientes números en el bloque numérico de la derecha:
          </p>

          <div style={{ overflowX: 'auto', margin: '1.5rem 0 2rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'rgba(30, 41, 59, 0.8)', borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '0.75rem 1rem', color: '#F1F5F9' }}>Símbolo</th>
                  <th style={{ padding: '0.75rem 1rem', color: '#F1F5F9' }}>Código Alt</th>
                  <th style={{ padding: '0.75rem 1rem', color: '#F1F5F9' }}>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#F472B6' }}>♥</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 3</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Corazón negro sólido</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#818CF8' }}>♦</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 4</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Rombo de baraja</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#38BDF8' }}>♣</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 5</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Trébol de baraja</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#34D399' }}>♠</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 6</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Pica negra</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#F59E0B' }}>•</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 7</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Punto viñeta</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#A78BFA' }}>♪</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 13</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Nota musical corchea</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#EC4899' }}>♫</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 14</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Doble corchea enlazada</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', color: '#38BDF8' }}>☼</td>
                  <td style={{ padding: '0.75rem 1rem' }}><code>Alt + 15</code></td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Sol resplandeciente</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.75rem', marginBottom: '1rem' }}>
            Compatibilidad y por qué algunos símbolos salen en cuadros blancos (Tofu)
          </h2>
          <p>
            Uno de los problemas más frecuentes al copiar símbolos de internet es encontrarse con que en lugar del diseño esperado,
            aparece un cuadro blanco con una cruz o un signo de interrogación (denominado técnicamente <em>tofu</em> en tipografía).
            Esto sucede cuando la tipografía interna de la aplicación (como ciertas versiones antiguas de videojuegos o navegadores desactualizados)
            no contiene el glifo correspondiente a ese punto de código Unicode.
          </p>
          <p>
            Para evitar este inconveniente en Letras Bonitas, nuestro catálogo incluye únicamente <strong>símbolos universales de alta compatibilidad</strong>.
            Si estás creando un nombre para un juego con filtros de moderación estrictos (como Roblox o Valorant), te recomendamos elegir símbolos
            clásicos como <code>★</code>, <code>ツ</code> o <code>『 』</code>, que cuentan con soporte nativo en más del 99% de las plataformas mundiales.
          </p>
        </article>

        {/* 6. Internal Linking Section to Approved Silos */}
        <section
          style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem' }}>
            Explora más herramientas especializadas en Letras Bonitas
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Complementa tus símbolos con nuestros conversores de tipografías y generadores de nicks:
          </p>

          <div className="game-grid-3">
            <Link
              href="/letras-para-instagram/simbolos-para-instagram/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#F1F5F9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <span>Símbolos para Instagram</span>
              <ArrowRight size={16} color="#EC4899" />
            </Link>

            <Link
              href="/nombres-para-free-fire/simbolos/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#F1F5F9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <span>Símbolos para Free Fire</span>
              <ArrowRight size={16} color="#F59E0B" />
            </Link>

            <Link
              href="/conversor-de-letras/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#F1F5F9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <span>Conversor de Letras</span>
              <ArrowRight size={16} color="#818CF8" />
            </Link>

            <Link
              href="/letras-cursivas/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#F1F5F9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <span>Letras Cursivas</span>
              <ArrowRight size={16} color="#34D399" />
            </Link>

            <Link
              href="/nombres-para-juegos/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#F1F5F9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <span>Nombres para Juegos</span>
              <ArrowRight size={16} color="#38BDF8" />
            </Link>

            <Link
              href="/nombres-para-free-fire/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#F1F5F9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <span>Nombres para Free Fire</span>
              <ArrowRight size={16} color="#F472B6" />
            </Link>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                color: '#A5B4FC',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              <HelpCircle size={14} />
              <span>Preguntas Frecuentes</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' }}>
              Preguntas Frecuentes sobre Símbolos para Copiar y Pegar
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
              Todo lo que necesitas saber sobre compatibilidad Unicode, atajos y cómo usarlos en tus redes sociales y juegos.
            </p>
          </div>

          <SEOArticleFaqAccordion faqs={SIMBOLOS_FAQS} />
        </section>

        {/* 8. Conclusion & Action Banner */}
        <section
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '2.25rem',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF', marginBottom: '0.65rem' }}>
            ¿Encontraste tus símbolos favoritos?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Sube al explorador interactivo, arma tu combinación en la bandeja superior o copia cualquier símbolo directo a tu portapapeles con un solo toque.
          </p>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
              color: '#FFFFFF',
              padding: '0.75rem 1.75rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)'
            }}
          >
            <Sparkles size={16} />
            <span>Volver al Catálogo de Símbolos</span>
          </a>
        </section>
      </div>
    </div>
  );
}
