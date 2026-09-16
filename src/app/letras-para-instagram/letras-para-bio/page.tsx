import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import BioGenerator from '@/components/instagram-bio/BioGenerator';
import BioExamplesSection from '@/components/instagram-bio/BioExamplesSection';
import BioHeadingsSection from '@/components/instagram-bio/BioHeadingsSection';
import BioSeparatorsSection from '@/components/instagram-bio/BioSeparatorsSection';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
  Zap,
  Layers,
  FileText,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Letras para Bio de Instagram | Fuentes Bonitas para Copiar',
  description:
    'Crea letras bonitas, fuentes cursivas, elegantes y aesthetic para tu bio de Instagram. Generador de texto para biografía con vista previa y copiado en un clic.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/letras-para-instagram/letras-para-bio/'
  },
  openGraph: {
    title: 'Letras para Bio de Instagram | Fuentes Bonitas y Elegantes',
    description:
      'Transforma el texto de tu biografía de Instagram con letras cursivas, versalitas y estéticas. Vista previa de perfil y copiado instantáneo.',
    url: 'https://theletrasbonitas.com/letras-para-instagram/letras-para-bio/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras para Bio de Instagram (Gratis)',
    description:
      'Diseña tu biografía de Instagram con fuentes cursivas, elegantes y decoradas al instante.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LetrasParaBioPage() {
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
        name: 'Letras para Instagram',
        item: 'https://theletrasbonitas.com/letras-para-instagram/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Letras para Bio',
        item: 'https://theletrasbonitas.com/letras-para-instagram/letras-para-bio/'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo poner letras bonitas en la bio de Instagram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Escribe tu texto en nuestro generador, selecciona tu estilo preferido, haz clic en "Copiar Bio" y pégalo en la sección Editar Perfil > Biografía de tu app de Instagram.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo cambiar las letras de mi bio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con un conversor de caracteres Unicode online. Introduces tus palabras y el sistema sustituye automáticamente cada letra por símbolos estéticos equivalentes.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo copiar y pegar estas letras en Instagram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, todas las variantes están listas para copiar con un solo clic y conservar el formato en tu perfil.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Funcionan las letras cursivas en Instagram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Totalmente. Las letras cursivas Unicode son 100% compatibles con la biografía y el nombre visible.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo usar estas letras en mi nombre de Instagram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, en el campo "Nombre". El "Nombre de Usuario" (@) no admite tipografías especiales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Son fuentes reales o caracteres Unicode?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Son símbolos del estándar universal Unicode que reproducen el aspecto de diferentes estilos tipográficos sin descargas.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Por qué algunos estilos se ven diferentes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La forma exacta visual depende del sistema operativo (iOS o Android) de cada teléfono inteligente.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo usar emojis y símbolos en mi bio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, nuestro generador conserva emojis y espacios en blanco al convertir el texto.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puedo crear una bio con varias líneas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, la herramienta admite múltiples líneas y conserva todos los saltos de línea al copiar.'
        }
      }
    ]
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
          <Link href="/letras-para-instagram/" className="breadcrumb-link">Letras para Instagram</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Letras para Bio</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Generador de Bio con Vista Previa</span>
            </div>

            <h1 className="hero-h1">
              Letras para <span className="gradient-text">Bio</span>
            </h1>

            <p className="hero-tagline">
              Crea letras bonitas y estilos de texto para tu bio de Instagram y cópialos en segundos.
            </p>

            <p className="seo-subtext text-center">
              Escribe tu nombre, profesión, descripción o frase y conviértelo en texto con diferentes estilos.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#generador-bio-instagram" className="cp-copy-all-btn copied" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Crear mi bio
              </a>
            </div>
          </header>

          {/* MAIN BIO GENERATOR & PREVIEW */}
          <BioGenerator />

          {/* BIO EXAMPLES SECTION */}
          <BioExamplesSection />

          {/* BIO HEADINGS SECTION */}
          <BioHeadingsSection />

          {/* BIO SEPARATORS SECTION */}
          <BioSeparatorsSection />

          {/* HOW TO ADD STYLED TEXT TO INSTAGRAM BIO (5 STEPS) */}
          <section className="seo-card-section mb-12" id="como-poner-bio">
            <div className="seo-icon-badge">
              <MousePointerClick size={20} />
            </div>
            <h2>¿Cómo poner letras bonitas en la bio de Instagram?</h2>
            <p>Sigue estos 5 sencillos pasos para actualizar tu perfil:</p>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Escribe tu texto</h3>
                <p>Introduce tu nombre, descripción o frase en nuestro generador.</p>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Selecciona el estilo</h3>
                <p>Elige tu tipografía cursiva, elegante o versalita preferida.</p>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Pulsa «Copiar»</h3>
                <p>Copia el resultado a tu portapapeles con un solo clic.</p>
              </div>

              <div className="step-card">
                <div className="step-number">4</div>
                <h3>Abre Instagram</h3>
                <p>Ve a tu perfil de Instagram y pulsa en «Editar perfil».</p>
              </div>

              <div className="step-card">
                <div className="step-number">5</div>
                <h3>Pega en tu bio</h3>
                <p>Pega el texto en la casilla de Biografía y guarda los cambios.</p>
              </div>
            </div>
          </section>

          {/* BIO FORMATTING TIPS */}
          <section className="seo-card-section mb-12">
            <div className="seo-icon-badge">
              <Lightbulb size={20} />
            </div>
            <h2>Consejos para crear una bio clara y estética</h2>
            <p>Para lograr una biografía profesional y atractiva:</p>

            <ul className="seo-list mt-4">
              <li><strong>Mantén la legibilidad:</strong> Utiliza letras cursivas o decorativas principalmente en nombres y títulos.</li>
              <li><strong>Estructura con saltos de línea:</strong> Separa cada idea en una línea distinta para facilitar la lectura rápida.</li>
              <li><strong>Utiliza símbolos como separadores:</strong> Usa puntos, estrellas o divisores de línea en lugar de textos amontonados.</li>
              <li><strong>Destaca la llamada a la acción:</strong> Agrega una flecha (⬇️) apuntando hacia tu enlace web principal.</li>
            </ul>
          </section>

          {/* UNICODE EXPLANATION & FONT VS UNICODE */}
          <section className="seo-card-section mb-12">
            <div className="seo-icon-badge">
              <BookOpen size={20} />
            </div>
            <h2>¿Cómo funcionan estas letras?</h2>
            <p>
              Los estilos para biografía que generas en esta página no son archivos de fuente instalables, sino caracteres del código universal <strong>Unicode</strong>.
            </p>
            <p className="mt-3">
              Dado que Unicode es un estándar compatible con iOS y Android, el texto transformado <strong>se puede copiar y pegar directamente</strong> en la app de Instagram conservando su estilo estético.
            </p>

            <div className="seo-card-section mt-6" style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px dashed rgba(148, 163, 184, 0.3)' }}>
              <div className="flex items-center gap-2 mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontWeight: 600 }}>
                <AlertTriangle size={16} />
                <span>Compatibilidad de caracteres</span>
              </div>
              <p className="text-xs text-slate-400" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: 0 }}>
                Si una letra o símbolo no posee un equivalente soportado en Unicode, el generador mantendrá intacto el carácter original para evitar textos corruptos.
              </p>
            </div>
          </section>

          {/* MAIN INSTAGRAM PILLAR CTA */}
          <section className="p-8 bg-gradient-to-r from-violet-900/50 via-indigo-900/50 to-slate-900/80 border border-violet-700/50 rounded-2xl mb-12 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontSize: '1.5rem', color: '#FFF' }}>Descubre más letras para Instagram</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6" style={{ fontSize: '0.9rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              Visita nuestro hub principal de Instagram con fuentes para nombres, destacados, historias y símbolos estéticos.
            </p>
            <Link
              href="/letras-para-instagram/"
              className="cp-copy-all-btn copied"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem' }}
            >
              <span>Ver todas las letras para Instagram</span>
              <ArrowRight size={18} />
            </Link>
          </section>

          {/* FAQ SECTION */}
          <FAQSection
            id="faq"
            badgeText="Preguntas Frecuentes"
            title="Preguntas Frecuentes sobre Letras para Bio"
            subtitle="Respuestas a las dudas más habituales sobre fuentes, compatibilidad y cómo personalizar tu perfil de Instagram."
            colorTheme="purple"
            items={[
              {
                q: "¿Cómo poner letras bonitas en la bio de Instagram?",
                a: "Escribe tu texto en el conversor, selecciona el estilo, haz clic en «Copiar Bio» y pégalo en Editar perfil > Biografía."
              },
              {
                q: "¿Cómo cambiar las letras de mi bio?",
                a: "Con nuestro conversor Unicode instantáneo que transforma tus letras en símbolos estéticos copiables."
              },
              {
                q: "¿Puedo copiar y pegar estas letras en Instagram?",
                a: "Sí, el texto formateado está listo para copiar y pegar directamente en la app."
              },
              {
                q: "¿Funcionan las letras cursivas en Instagram?",
                a: "Sí, las letras cursivas son ampliamente compatibles con bios y perfiles de Instagram."
              },
              {
                q: "¿Puedo usar estas letras en mi nombre de Instagram?",
                a: "Sí, en la casilla «Nombre» del perfil. El «Nombre de Usuario» (@) no permite fuentes tipográficas."
              },
              {
                q: "¿Son fuentes reales o caracteres Unicode?",
                a: "Son caracteres especiales de Unicode reconocidos de forma nativa por iOS y Android."
              },
              {
                q: "¿Por qué algunos estilos se ven diferentes?",
                a: "La renderización exacta depende del modelo de teléfono y la tipografía predeterminada del sistema."
              },
              {
                q: "¿Puedo usar emojis y símbolos en mi bio?",
                a: "Sí, la herramienta admite emojis y respeta su posición exacta al formatear."
              },
              {
                q: "¿Puedo crear una bio con varias líneas?",
                a: "Sí, la herramienta soporta múltiples líneas y conserva todos los saltos de línea."
              }
            ]}
          />

          {/* SILO & RELATED TOOLS LINKS */}
          <section className="silo-nav-block">
            <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
            <div className="silo-links-grid">
              <Link href="/letras-para-instagram/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">SILO Instagram</span>
                  <h4 className="silo-card-heading">Letras para Instagram</h4>
                  <p className="silo-card-desc">Hub principal de fuentes y letras para Instagram.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Pillar Principal</span>
                  <h4 className="silo-card-heading">Conversor de Letras</h4>
                  <p className="silo-card-desc">Accede al conversor universal con más de 350 estilos Unicode.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Herramienta de Copia</span>
                  <h4 className="silo-card-heading">Letras para Copiar y Pegar</h4>
                  <p className="silo-card-desc">Catálogo de letras, palabras y frases listas para copiar.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/texto-con-estilos/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Herramienta Estilos</span>
                  <h4 className="silo-card-heading">Texto con Estilos</h4>
                  <p className="silo-card-desc">Generador de texto bonito y estilizado al instante.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">SILO Cursiva</span>
                  <h4 className="silo-card-heading">Letras Cursivas</h4>
                  <p className="silo-card-desc">Hub de tipografías manuscritas y caligráficas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Inicio</span>
                  <h4 className="silo-card-heading">Letras Bonitas</h4>
                  <p className="silo-card-desc">Página principal de herramientas y generadores.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
