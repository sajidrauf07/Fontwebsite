import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Sparkles,
  Gamepad2,
  Zap,
  Flame,
  Shield,
  Star,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Crown,
  HelpCircle,
  Hash,
  Smile,
  ArrowRight
} from 'lucide-react';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import GameNameIdeasSection, { IdeaCategory } from '@/components/nombres-para-juegos/GameNameIdeasSection';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Nicks para Juegos: Generador de Nicks Gamer y Chidos',
  description:
    'Crea los mejores nicks para juegos con nuestro generador online gratis. Encuentra nicks gamer, chidos, aesthetic, cortos y con símbolos para copiar y pegar.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-juegos/nicks/'
  },
  openGraph: {
    title: 'Nicks para Juegos: Generador de Nicks Gamer y Chidos',
    description:
      'Genera nicks originales, chidos y con símbolos para Free Fire, Roblox, COD, Fortnite y más. Copia tu nick gamer en un clic.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/nicks/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Generador de Nicks para Juegos - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicks para Juegos: Generador de Nicks Gamer y Chidos',
    description:
      'Crea y personaliza nicks para juegos gratis. Estilos gamer, pro, chidos y aesthetic con letras bonitas y símbolos.',
    images: ['https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const NICKS_FAQ_ITEMS = [
  {
    question: '¿Qué es un nick para juegos y por qué es tan importante?',
    answer:
      'Un nick (o nickname) es tu alias o apodo digital en el mundo de los videojuegos. Es tu carta de presentación ante compañeros y rivales en partidas competitivas, lobbies y tablas de clasificación. Un buen nick proyecta tu estilo de juego, es fácil de recordar y te hace destacar de inmediato frente a nombres genéricos.'
  },
  {
    question: '¿Cómo puedo crear un nick gamer original que no esté ocupado?',
    answer:
      'Para evitar que tu nick esté registrado sin recurrir a números aleatorios, combina palabras en inglés o latín con tu apodo, utiliza tipografías Unicode especiales (como letras pequeñas o estilo gótico) o añade símbolos estéticos como 亗, ⚡, 〆 o 『 』. Nuestro generador te ofrece decenas de combinaciones únicas con tu palabra base.'
  },
  {
    question: '¿Puedo copiar y pegar los nicks directamente en mi juego?',
    answer:
      '¡Sí! Todos los nicks generados en nuestra herramienta están listos para copiarse con un solo clic. Al presionar el botón "Copiar", el apodo se guarda en el portapapeles de tu celular o computadora para que lo pegues directamente en el perfil de Free Fire, Roblox, COD Mobile, Fortnite o Discord.'
  },
  {
    question: '¿Por qué algunos símbolos aparecen como cuadros o signos de interrogación?',
    answer:
      'Esto ocurre cuando el motor gráfico o la fuente interna del videojuego no incluye soporte para ciertos bloques de caracteres Unicode avanzados. Juegos como Free Fire y PUBG aceptan casi cualquier símbolo, mientras que títulos como League of Legends o Valorant tienen filtros más estrictos. Te sugerimos probar 2 o 3 opciones en la vista previa del juego.'
  },
  {
    question: '¿Cuál es la longitud ideal para un nick de juego?',
    answer:
      'La mayoría de juegos populares recomiendan apodos de entre 4 y 12 caracteres. Los nicks cortos (de 3 a 5 letras) son los más codiciados porque se leen de inmediato en la pantalla de eliminación y se pronuncian fácil en Discord, mientras que nicks de 8 a 12 caracteres permiten incorporar adornos o tags de escuadra.'
  },
  {
    question: '¿Los nicks generados en Letras Bonitas son 100% gratuitos?',
    answer:
      'Sí, la herramienta es completamente gratis y sin límite de uso. No requieres registrarte, descargar aplicaciones ni ingresar datos personales para generar, personalizar y copiar tus nicks favoritos cuantas veces lo desees.'
  },
  {
    question: '¿Cómo elijo un tag de clan para complementar mi nick?',
    answer:
      'Elige una sigla corta de 2 a 4 caracteres representativa de tu equipo (por ejemplo, 亗, VN, TM o 〆) y colócala al inicio de tu nick separada por un punto medio (・) o barra vertical (|). Por ejemplo: 亗・VIPER o 〆GHOST〆.'
  }
];

const NICKS_IDEAS_CATEGORIES: IdeaCategory[] = [
  {
    title: 'Nicks Gamer Pro',
    iconName: 'gamepad',
    color: 'emerald',
    description: 'Símbolos agresivos, coronas y tipografías pro para sobresalir en shooters y lobbies competitivos.',
    names: [
      '亗・VIPER・亗',
      '⚡ＮＩＣＫ⚡',
      '〆GHOST〆',
      'メSHADOWメ',
      '꧁༒DEMON༒꧂',
      '亗ＴＯＸＩＣ亗',
      '𝕯𝖆𝖗𝖐𝕶𝖎𝖓𝖌',
      '𒆜TITAN𒆜',
      '亗LEGEND亗',
      '⚡RAYO⚡',
      '彡MASTER彡',
      'PRO・K1LL3R'
    ]
  },
  {
    title: 'Nicks Chidos y Originales',
    iconName: 'flame',
    color: 'amber',
    description: 'Opciones con personalidad fresca, populares entre jugadores de México y Latinoamérica.',
    names: [
      '★Vortex★',
      'ツK1NGツ',
      '☬CRIMINAL☬',
      'AlphaWolf',
      'ZeroKill',
      'FuriaMex',
      'ElPatronGG',
      'NéctarNegro',
      'BalaPerdida',
      'ReyDelNorte',
      'FénixOscuro',
      'CalaveraPro'
    ]
  },
  {
    title: 'Nicks Cortos (3-5 Letras)',
    iconName: 'zap',
    color: 'cyan',
    description: 'Nicks ultra compactos, de lectura instantánea y fáciles de pronunciar en chat de voz.',
    names: [
      'VEX',
      'NOVA',
      'KAI',
      'ZERO',
      'AXEL',
      'LYNX',
      'NEO',
      'ZEUS',
      'RYU',
      'ARES',
      'ZOD',
      'LUX',
      'NOX',
      'RAZE',
      'ASH'
    ]
  },
  {
    title: 'Nicks Aesthetic y Suaves',
    iconName: 'sparkles',
    color: 'pink',
    description: 'Estilo visual delicado con tipografías espaciadas, símbolos celestiales y destellos.',
    names: [
      'v i p e r ✧',
      '𝔤𝔥𝔬𝔰𝔱',
      '𝕤𝕙𝕒𝕕𝕠𝕨',
      '『ʟᴇɢᴇɴᴅ』',
      '☾ luna ☽',
      '☁ angel ☁',
      '✦ starlight ✦',
      'aura・soft',
      'nebula ✿',
      'dreamy ⋆',
      'sakura ❀',
      'honey 🍯'
    ]
  },
  {
    title: 'Nicks Divertidos y Trolls',
    iconName: 'smile',
    color: 'amber',
    description: 'Apodos cómicos para partidas casuales con amigos y para descolocar al rival con humor.',
    names: [
      'NoMeMatesPorfa',
      'TeFuiDeLobby',
      'LagMental',
      'TuPesadillaGG',
      'CasiTeGano',
      'PocoVeneno',
      'Error404',
      'SinManos',
      'PaQueNací',
      'BalaDeSaliva',
      'WifiRobado',
      'MancoPeroFeliz'
    ]
  }
];

export default function NicksParaJuegosPage() {
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
        name: 'Nombres para Juegos',
        item: 'https://theletrasbonitas.com/nombres-para-juegos/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nicks para Juegos',
        item: 'https://theletrasbonitas.com/nombres-para-juegos/nicks/'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generador de Nicks para Juegos - Letras Bonitas',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/nicks/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Herramienta en línea gratuita para crear, personalizar y copiar nicks gamer chidos, aesthetic y con símbolos para videojuegos.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: NICKS_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
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

      {/* 1. Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <Link href="/nombres-para-juegos/" className="breadcrumb-link">
            Nombres para Juegos
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Nicks para Juegos</span>
        </div>
      </nav>

      {/* 2 & 3. Hero Section Centered */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="sparkle-icon" color="#F472B6" />
            <span>Generador de Nicks Online</span>
          </div>

          <h1 className="hero-h1">
            Nicks para Juegos
          </h1>

          <p className="hero-tagline">
            Crea combinaciones originales, chidas y estéticas para cada partida
          </p>

          <p className="hero-description">
            ¿Cansado de que tu nombre favorito ya esté ocupado o de terminar con números aleatorios como Gamer8291? Un buen nick es tu firma en el campo de batalla. Personaliza tu apodo con letras especiales y símbolos para copiar y pegar en segundos.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Nicks Gamer Pro</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Copiado en 1 Clic</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Compatibilidad Universal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Generator Centered in First Viewport */}
      <div style={{ maxWidth: '1160px', margin: '-1.5rem auto 0', padding: '0 1rem' }}>
        <GameNameGenerator
          badgeLabel="GENERADOR DE NICKS"
          title="Generador de Nicks para Juegos"
          subtitle="Escribe tu palabra o alias, selecciona tu estilo preferido y copia al instante el mejor nick para Free Fire, Roblox, COD Mobile, Fortnite y más."
          defaultInput="Viper"
        />
      </div>

      <div className="cp-container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>

      {/* 4. Quick How-To Section */}
      <section className="game-feature-box" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFF', marginBottom: '0.85rem' }}>
          Cómo usar el generador de nicks paso a paso
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          Diseñamos esta herramienta para que encuentres tu identidad gamer en cuestión de segundos, sin enredos técnicos ni registros:
        </p>
        <div className="game-grid-3">
          <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.2)', color: '#818CF8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.75rem' }}>
              1
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
              Escribe tu palabra base
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              Ingresa tu nombre, iniciales o apodo. O presiona <strong>Nombre aleatorio</strong> para inspirarte con vocablos chidos.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.2)', color: '#F472B6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.75rem' }}>
              2
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
              Elige el estilo o categoría
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              Filtra entre opciones Gamer, Chidos, Aesthetic, Cortos, Divertidos, Elegantes o tags de Clan según tu juego.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.75rem' }}>
              3
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '0.45rem' }}>
              Copia y pega en tu juego
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              Haz clic en <strong>Copiar</strong> en tu tarjeta favorita. El texto va directo a tu portapapeles listo para usar.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Visual Mockup Figure */}
      <figure
        style={{
          margin: '0 auto 3rem auto',
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
          src="/images/generador-nombres-juegos-interfaz.png"
          alt="Interfaz del generador de nicks para juegos interactivo"
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
          Generador de nicks para juegos en Letras Bonitas con filtros rápidos por categoría, botones de copiado y nombres aleatorios.
        </figcaption>
      </figure>

      {/* 6. Curated Nick Ideas Collections */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Colecciones de Nicks para Copiar y Pegar
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Si buscas inspiración instantánea, explora nuestras listas organizadas por estilo. Haz clic en cualquier nick para copiarlo al portapapeles:
        </p>

        <GameNameIdeasSection categories={NICKS_IDEAS_CATEGORIES} />
      </section>

      {/* 7. Comprehensive Guide & Advice */}
      <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.7, color: '#CBD5E1', marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          ¿Qué hace que un nick gamer sea realmente bueno?
        </h2>
        <p>
          En cualquier comunidad online, tu <strong>nick para juegos</strong> es el primer elemento con el que otros jugadores te identifican.
          No se trata únicamente de colocarle letras raras o símbolos llamativos; se trata de comunicar tu actitud en la partida.
          Un jugador agresivo en juegos de disparos (FPS) suele buscar apodos afilados y contundentes como <em>Viper</em>, <em>K1ll3r</em> o <em>Nox</em>,
          mientras que en juegos de rol (RPG) o supervivencia priman los nombres con historia, místicos o aesthetic.
        </p>

        <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
              <Shield size={18} /> Fácil de recordar y pronunciar
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Si juegas con amigos en Discord o comunicación por voz, tu nick debe pronunciarse en menos de dos segundos durante momentos de tensión.
              Evita cadenas interminables de consonantes difíciles de vocalizar.
            </p>
          </div>

          <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#A78BFA', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
              <Star size={18} /> Equilibrio visual con símbolos
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Los símbolos como 亗, ⚡ o 〆 lucen geniales cuando enmarcan tu nombre como prefijo o sufijo. Saturar tu nombre con 10 símbolos distintos
              lo vuelve ilegible en las tablas de puntuación.
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Nicks recomendados según tu videojuego favorito
        </h2>
        <p>
          Cada título cuenta con su propia cultura visual y restricciones técnicas de caracteres. A continuación te compartimos las mejores prácticas según el juego:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.55)', borderLeft: '4px solid #F59E0B', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', margin: '0 0 0.35rem 0' }}>
              Nicks para Free Fire
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              En Free Fire son muy populares los símbolos de corona (亗), los caracteres en cruz (⚔), los espacios invisibles y los estilos pequeños (Small Caps). Si quieres ver más opciones especializadas, explora nuestra guía completa de{' '}
              <Link href="/nombres-para-free-fire/" style={{ color: '#F59E0B', textDecoration: 'underline' }}>
                Nombres para Free Fire
              </Link>{' '}
              y la colección de{' '}
              <Link href="/nombres-para-free-fire/apodos/" style={{ color: '#F59E0B', textDecoration: 'underline' }}>
                Apodos para Free Fire
              </Link>.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.55)', borderLeft: '4px solid #38BDF8', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', margin: '0 0 0.35rem 0' }}>
              Nicks para Roblox
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              El filtro de moderación de Roblox es estricto con números y palabras en otros idiomas. Te recomendamos usar nombres de una sola palabra estilizada o recurrir al nombre de visualización (Display Name), donde sí se permiten estilos Unicode limpios.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.55)', borderLeft: '4px solid #10B981', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', margin: '0 0 0.35rem 0' }}>
              Nicks para Call of Duty y Fortnite
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
              En estos shooters competitivos, los nicks cortos (de 3 a 5 letras) o con estética militar son los más respetados. El uso de caracteres limpios asegura que tu nombre aparezca nítido en las transmisiones de streaming y en la tabla de bajas.
            </p>
          </div>
        </div>

        {/* Second Image Mockup */}
        <figure
          style={{
            margin: '2rem auto',
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
            src="/images/copiar-nombres-juegos-estilos.png"
            alt="Muestra de estilos tipográficos y copiado de nicks para juegos"
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
            Muestra de estilos tipográficos Unicode con botón de copiado instantáneo y previsualización de nicks para videojuegos.
          </figcaption>
        </figure>

        <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Errores comunes que debes evitar al crear tu nick gamer
        </h2>
        <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.75rem', lineHeight: 1.8 }}>
          <li>
            <strong style={{ color: '#F1F5F9' }}>Agregar demasiados números al final:</strong> Un nick como <code>Carlos74892</code> da la impresión de ser una cuenta bot o secundaria. Si tu nombre base está tomado, prueba decorarlo con corchetes <code>『Carlos』</code> o letras góticas.
          </li>
          <li>
            <strong style={{ color: '#F1F5F9' }}>Usar símbolos no reconocidos por el motor del juego:</strong> Algunos glifos exóticos pueden convertirse en cuadros blancos (tofu boxes). Verifica siempre cómo luce en la pantalla de vista previa.
          </li>
          <li>
            <strong style={{ color: '#F1F5F9' }}>Copiar nombres de streamers famosos sin variante:</strong> Usar el nick exacto de un creador de contenido resta autenticidad a tus jugadas. Es mejor crear un alias propio que la gente recuerde por tu destreza.
          </li>
          <li>
            <strong style={{ color: '#F1F5F9' }}>Extensión excesiva:</strong> Nicks que superan los 14 caracteres suelen recortarse en la interfaz del juego o en el minimapa.
          </li>
        </ul>
      </article>

      {/* 8. Internal Navigation to Sister Pages */}
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
          Explora más herramientas de Letras Bonitas
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Combina tu nick con nuestras otras herramientas especializadas en tipografías y fuentes online gratuitas:
        </p>

        <div className="game-grid-3">
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
              fontSize: '0.92rem',
              transition: 'border-color 0.2s'
            }}
          >
            <span>Nombres para Juegos</span>
            <ArrowRight size={16} color="#818CF8" />
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
              fontSize: '0.92rem',
              transition: 'border-color 0.2s'
            }}
          >
            <span>Nombres para Free Fire</span>
            <ArrowRight size={16} color="#F472B6" />
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
              fontSize: '0.92rem',
              transition: 'border-color 0.2s'
            }}
          >
            <span>Conversor de Letras</span>
            <ArrowRight size={16} color="#34D399" />
          </Link>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section style={{ marginBottom: '3rem' }}>
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
            Preguntas Frecuentes sobre Nicks para Juegos
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
            Resolvemos tus dudas sobre compatibilidad, reglas de juego y cómo personalizar tu apodo gamer.
          </p>
        </div>

        <SEOArticleFaqAccordion faqs={NICKS_FAQ_ITEMS} />
      </section>

      {/* 10. Conclusion & Call to Action */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF', marginBottom: '0.65rem' }}>
          ¿Listo para estrenar tu nuevo nick en partida?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
          Sube a nuestro generador, prueba combinando tu palabra con símbolos de clan y copia tu favorito con un solo toque.
        </p>
        <a
          href="#game-name-input"
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
          <Gamepad2 size={16} />
          <span>Generar mi Nick Ahora</span>
        </a>
      </section>
      </div>
    </div>
  );
}
