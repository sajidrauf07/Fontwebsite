import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Users,
  Shield,
  Crown,
  Flame,
  Zap,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import GameNameIdeasSection, { IdeaCategory } from '@/components/nombres-para-juegos/GameNameIdeasSection';
import SEOArticleFaqAccordion from '@/components/seo/SEOArticleFaqAccordion';

export const metadata: Metadata = {
  title: 'Nombres para Clanes: Generador de Nombres de Clanes y Teams',
  description:
    'Crea nombres para clanes originales, chidos y con símbolos para Free Fire, COD Mobile, Fortnite y PUBG. Generador de nombres para escuadras y gremios gratis.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-para-clanes/'
  },
  openGraph: {
    title: 'Nombres para Clanes: Generador de Nombres de Clanes y Teams',
    description:
      'Generador de nombres de clanes y escuadras gamer. Encuentra tags, símbolos y nombres imponentes listos para copiar y pegar.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-para-clanes/',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png',
        width: 1200,
        height: 630,
        alt: 'Generador de Nombres para Clanes - Letras Bonitas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Clanes: Generador de Nombres de Clanes y Teams',
    description:
      'Crea nombres de clanes gamer con tags y letras chidas. Copia ideas para tu escuadra con un solo clic.',
    images: ['https://theletrasbonitas.com/images/generador-nombres-juegos-interfaz.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const CLANES_FAQ_ITEMS = [
  {
    question: '¿Cómo elegir un buen nombre para mi clan?',
    answer:
      'Un buen nombre de clan debe ser corto, memorable y transmitir la personalidad del equipo (competitivo, místico o agresivo). Es clave que permita crear una sigla o tag de 2 a 4 letras que todos los miembros puedan colocar como prefijo en sus perfiles.'
  },
  {
    question: '¿Qué es un tag de clan y cómo se usa?',
    answer:
      'El tag es la abreviatura que identifica a los miembros de tu escuadra en el lobby y tabla de eliminaciones. Por ejemplo, si tu clan es "Viper Team", el tag puede ser 『VP』 o 亗VP亗. Se suele separar del nick individual con un punto medio (・) o barra (亗VP・K1ll3r).'
  },
  {
    question: '¿Los nombres de clanes generados son compatibles con Free Fire y COD?',
    answer:
      'Sí, las opciones generadas usan símbolos y letras Unicode compatibles con los campos de nombre de clan y descripciones de gremio de los principales juegos móviles y de PC.'
  },
  {
    question: '¿Cuál es el límite de caracteres para un nombre de clan?',
    answer:
      'En Free Fire el límite para el nombre del clan suele ser de 12 caracteres, mientras que en Call of Duty Mobile ronda entre 10 y 14. Por eso los nombres de una o dos palabras cortas son los más recomendados.'
  }
];

const CLANES_IDEAS_CATEGORIES: IdeaCategory[] = [
  {
    title: 'Clanes Competitivos y Élite',
    iconName: 'crown',
    color: 'emerald',
    description: 'Nombres que proyectan dominio y seriedad en torneos.',
    names: [
      '亗IMMORTALS亗',
      '『LEGION・PRO』',
      '⚡TITANS・TEAM⚡',
      '〆APEX・GUILD〆',
      'メELITE・FORCEメ',
      '【ROYAL・ARMY】',
      '𒆜VALHALLA𒆜',
      '亗SUPREME・VN亗'
    ]
  },
  {
    title: 'Clanes Oscuros y Guerreros',
    iconName: 'shield',
    color: 'amber',
    description: 'Estilo sombrío para escuadras temibles en el campo de batalla.',
    names: [
      '𝕯𝖆𝖗𝖐𝕾𝖖𝖚𝖆𝖉',
      '☠VENOM・CORP☠',
      '〆BLACK・ORDER〆',
      '亗SHADOW・CLAN亗',
      'メDEATH・ROWメ',
      '☬NIGHTFALL☬',
      '『GHOST・RECON』',
      '⚡UNDERWORLD⚡'
    ]
  },
  {
    title: 'Tags y Siglas para Escuadras',
    iconName: 'zap',
    color: 'cyan',
    description: 'Abreviaturas listas para colocar antes del nombre de cada jugador.',
    names: [
      '亗VN・',
      '『TM』',
      '〆K1・',
      'メPRO・',
      '⚡FX・',
      '【GL】',
      '★NX・',
      '亗EX・'
    ]
  },
  {
    title: 'Clanes con Estilo Aesthetic',
    iconName: 'sparkles',
    color: 'pink',
    description: 'Nombres limpios, visuales y con estética refinada.',
    names: [
      '✧ Celestial ✧',
      '☾ Eclipse Guild ☽',
      '☁ Cloud Nine ☁',
      '✦ Astra Team ✦',
      '『Solaria』',
      '✿ Sakura Clan ✿'
    ]
  }
];

export default function NombresParaClanesPage() {
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
        name: 'Nombres para Clanes',
        item: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-para-clanes/'
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generador de Nombres para Clanes - Letras Bonitas',
    url: 'https://theletrasbonitas.com/nombres-para-juegos/nombres-para-clanes/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Generador de nombres de clanes, gremios y escuadras gamer gratis con tags y símbolos para copiar y pegar.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CLANES_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <div className="cp-container" style={{ paddingTop: '1.5rem', paddingBottom: '3.5rem' }}>
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

      {/* Breadcrumb */}
      <nav aria-label="Migas de pan" style={{ marginBottom: '1.25rem' }}>
        <ol
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <li>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              Inicio
            </Link>
          </li>
          <li>
            <ChevronRight size={13} />
          </li>
          <li>
            <Link href="/nombres-para-juegos/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              Nombres para Juegos
            </Link>
          </li>
          <li>
            <ChevronRight size={13} />
          </li>
          <li aria-current="page" style={{ color: '#F1F5F9', fontWeight: 600 }}>
            Nombres para Clanes
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header style={{ marginBottom: '1.75rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(236, 72, 153, 0.12)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            padding: '0.3rem 0.85rem',
            borderRadius: '999px',
            color: '#F472B6',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '0.85rem'
          }}
        >
          <Users size={14} color="#F472B6" />
          <span>Generador de Escuadras y Gremios</span>
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            lineHeight: 1.15,
            margin: '0 0 0.85rem 0'
          }}
        >
          Nombres para Clanes
        </h1>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '780px',
            margin: 0
          }}
        >
          Une a tu equipo bajo una sola bandera. Genera nombres de clanes imponentes, gremios y escuadras gamer
          con tags de clan, corchetes elegantes y símbolos de batalla listos para copiar y pegar.
        </p>
      </header>

      {/* Generator Tool */}
      <section aria-label="Generador de nombres de clanes" style={{ marginBottom: '3.5rem' }}>
        <GameNameGenerator
          badgeLabel="GENERADOR DE CLANES"
          title="Generador de Nombres para Clanes"
          subtitle="Escribe el nombre de tu clan o equipo, elige el estilo visual y copia al instante combinaciones listas para liderar las salas."
          defaultInput="Immortal"
        />
      </section>

      {/* Curated Clan Ideas */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Ideas de Nombres de Clanes para Copiar y Pegar
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Haz clic en cualquier nombre o tag para copiarlo de inmediato a tu portapapeles:
        </p>

        <GameNameIdeasSection categories={CLANES_IDEAS_CATEGORIES} />
      </section>

      {/* Advice Section */}
      <article className="prose prose-invert" style={{ maxWidth: '100%', lineHeight: 1.7, color: '#CBD5E1', marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Cómo estructurar los tags y nombres de clan para tu equipo
        </h2>
        <p>
          En los eSports y comunidades competitivas, un clan fuerte no solo destaca por su nivel individual, sino por la uniformidad visual de sus integrantes.
          Tener un tag claro facilita que los organizadores de torneos y casters reconozcan a tu escuadra en pantalla.
        </p>

        <div className="game-grid-2" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
              <Shield size={18} /> Uniformidad en el Clan
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Acuerden un formato estricto entre todos los integrantes. Por ejemplo: <code>亗TAG・Nick亗</code>.
              Esto genera una presencia intimidante al ingresar a cualquier sala de combate.
            </p>
          </div>

          <div style={{ background: 'rgba(30, 41, 59, 0.45)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
              <Crown size={18} /> Respeto a los Límites de Caracteres
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Mantén el tag del clan en máximo 3 o 4 caracteres para que tus miembros tengan espacio suficiente para colocar sus propios apodos sin sobrepasar el límite del juego.
            </p>
          </div>
        </div>
      </article>

      {/* Internal Navigation */}
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
          Herramientas y páginas del silo
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Continúa explorando recursos para jugadores en Letras Bonitas:
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
              fontSize: '0.92rem'
            }}
          >
            <span>Nombres para Juegos</span>
            <ArrowRight size={16} color="#818CF8" />
          </Link>

          <Link
            href="/nombres-para-juegos/nicks/"
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
            <span>Nicks para Juegos</span>
            <ArrowRight size={16} color="#F472B6" />
          </Link>

          <Link
            href="/nombres-para-free-fire/clanes/"
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
            <span>Clanes para Free Fire</span>
            <ArrowRight size={16} color="#34D399" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
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
            Preguntas Frecuentes sobre Nombres para Clanes
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
            Consejos para organizar tu clan y elegir el nombre más competitivo.
          </p>
        </div>

        <SEOArticleFaqAccordion faqs={CLANES_FAQ_ITEMS} />
      </section>
    </div>
  );
}
