import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ElegantCursiveGenerator from '@/components/elegant-cursive/ElegantCursiveGenerator';
import ReadyToCopyElegant from '@/components/elegant-cursive/ReadyToCopyElegant';
import ElegantNamesSection from '@/components/elegant-cursive/ElegantNamesSection';
import ElegantBioGenerator from '@/components/elegant-cursive/ElegantBioGenerator';
import { FAQSection } from '@/components/seo/FAQSection';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  CheckCircle2,
  Share2,
  MousePointerClick,
  ChevronRight,
  Gem,
  Instagram,
  Smartphone,
  Gamepad2,
  ExternalLink,
  Type,
  PenTool,
  ShieldCheck
} from 'lucide-react';
import {
  ReadingProgress,
  StepGuide,
  StepItem,
  ToolCTA
} from '@/components/article';

export const metadata: Metadata = {
  title: 'Letras Cursivas Elegantes para Copiar y Pegar',
  description:
    'Genera letras cursivas elegantes para copiar y pegar en tus redes sociales, perfiles, nombres y mensajes. Fuentes caligráficas finas, sofisticadas y manuscritas gratis.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/letras-cursivas/letras-cursivas-elegantes'
  },
  openGraph: {
    title: 'Letras Cursivas Elegantes para Copiar y Pegar',
    description:
      'Conversor interactivo de fuentes cursivas elegantes, caligráficas y finas para copiar y pegar en Instagram, WhatsApp y perfiles de lujo.',
    url: 'https://theletrasbonitas.com/letras-cursivas/letras-cursivas-elegantes',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Cursivas Elegantes (Copiar y Pegar)',
    description:
      'Copia letras cursivas sofisticadas y caligráficas para biografías de Instagram, nombres y títulos.'
  },
  robots: {
    index: true,
    follow: true
  }
};

const FAQ_ITEMS = [
  {
    q: '¿Qué son las letras cursivas elegantes?',
    a: 'Las letras cursivas elegantes son variaciones tipográficas manuscritas en Unicode caracterizadas por trazos delicados, bucles sofisticados y estética caligráfica refinada para destacar títulos y nombres.'
  },
  {
    q: '¿Cómo puedo copiar letras cursivas elegantes?',
    a: 'Introduce tu frase en nuestro generador interactivo superior, navega entre las opciones de cursiva fina, clásica o sofisticada y presiona "Copiar" para guardar el resultado en tu portapapeles.'
  },
  {
    q: '¿Puedo usar letras elegantes en Instagram?',
    a: 'Sí, son 100% compatibles con las biografías, nombres destacados, historias y comentarios en Instagram.'
  },
  {
    q: '¿Funcionan en WhatsApp?',
    a: 'Totalmente. Puedes pegarlas en chats, estados de WhatsApp e info de perfil sin necesidad de instalar tipografías adicionales.'
  },
  {
    q: '¿Son fuentes reales?',
    a: 'Son caracteres especiales gráficos del estándar Unicode que reproducen la estética caligráfica sin requerir instalación de archivos de fuentes (.ttf u .otf).'
  },
  {
    q: '¿Por qué algunas letras pueden verse diferentes?',
    a: 'Cada sistema operativo (iOS, Android, Windows, macOS) utiliza su propia fuente de sistema para renderizar símbolos Unicode, lo que puede causar ligeras diferencias visuales.'
  },
  {
    q: '¿El generador es gratis?',
    a: 'Sí, es una utilidad 100% gratuita, instantánea y sin límites de uso ni necesidad de registro.'
  },
  {
    q: '¿Cómo se comportan las letras con acentos y la letra Ñ?',
    a: 'En los estilos donde no existe un equivalente matemático directo, nuestro generador preserva la letra original en español con su tilde o virgulilla para asegurar que el texto sea perfectamente legible.'
  },
  {
    q: '¿Se pueden usar letras cursivas elegantes en firmas digitales y cartas?',
    a: 'Sí, son muy populares para encabezados de documentos digitales, correos elegantes e invitaciones creativas.'
  },
  {
    q: '¿Es posible combinar cursiva elegante con marcos y símbolos?',
    a: '¡Por supuesto! Nuestras herramientas incluyen plantillas con marcos ornamentales y símbolos delicados como flores y estrellas.'
  }
];

export default function ElegantCursivePage() {
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
        name: 'Letras Cursivas',
        item: 'https://theletrasbonitas.com/letras-cursivas'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Letras Cursivas Elegantes',
        item: 'https://theletrasbonitas.com/letras-cursivas/letras-cursivas-elegantes'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <>
      <ReadingProgress />

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
          <Link href="/letras-cursivas" className="breadcrumb-link">Letras Cursivas</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Letras Cursivas Elegantes</span>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Hero Section */}
          <header className="hero-section silo-hero text-center">
            <div className="hero-badge">
              <Gem size={16} className="sparkle-icon" />
              <span>Estilo Caligráfico de Lujo</span>
            </div>

            <h1 className="hero-h1">
              Letras Cursivas <span className="gradient-text">Elegantes</span> para Copiar y Pegar
            </h1>

            <p className="hero-tagline">
              Conversor interactivo de fuentes cursivas elegantes, caligráficas y finas para copiar y pegar en Instagram, WhatsApp y perfiles de lujo.
            </p>
          </header>

          {/* TABLE OF CONTENTS */}

          {/* MAIN ELEGANT CURSIVE GENERATOR */}
          <ElegantCursiveGenerator />

          {/* Image Plan 1 Visual Demonstration Card */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Demostración Caligráfica Elegante
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Genera estilos cursivos finos y sofisticados al instante
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Transforma cualquier nombre o frase en manuscrita refinada con ornamentos y bordes caligráficos listos para 1-clic.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2.5 min-w-[260px] text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-amber-300">𝓔𝓵𝓮𝓰𝓪𝓷𝓽𝓮 𝓒𝓾𝓻𝓼𝓲𝓿𝓪</span>
                    <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Copiado</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-indigo-300">꧁༺ 𝒯𝓊 𝒩ℴ𝓂𝒷𝓇ℯ ༻꧂</span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">Copiar</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Generador de letras cursivas elegantes para copiar y pegar.
            </p>
          </div>

          {/* READY-TO-COPY ELEGANT TEXT */}
          <ReadyToCopyElegant />

          {/* ELEGANT NAMES SECTION */}
          <ElegantNamesSection />

          {/* ELEGANT BIO GENERATOR */}
          <ElegantBioGenerator />

          {/* HOW TO USE SECTION */}
          <section className="seo-card-section mb-8" id="como-usar">
            <div className="seo-icon-badge">
              <MousePointerClick size={20} />
            </div>
            <h2 className="seo-h2">¿Cómo usar las letras cursivas elegantes?</h2>
            <p className="seo-paragraph">
              Consigue una tipografía manuscrita de lujo en tres simples pasos:
            </p>

            <div className="mt-6">
              <StepGuide>
                <StepItem
                  stepNumber={1}
                  title="Escribe tu texto"
                  badge="Paso 1"
                >
                  Introduce tu nombre, frase o biografía en el cuadro del conversor superior o usa nuestras pruebas rápidas.
                </StepItem>
                <StepItem
                  stepNumber={2}
                  title="Elige un estilo elegante"
                  badge="Paso 2"
                >
                  Explora la colección de cursiva fina, clásica, sofisticada o decorativa en la vista previa instantánea.
                </StepItem>
                <StepItem
                  stepNumber={3}
                  title="Pulsa «Copiar» y pega"
                  badge="Paso 3"
                  isLast={true}
                >
                  Haz clic en el botón de copia y utiliza tus letras cursivas elegantes en Instagram, WhatsApp o Canva.
                </StepItem>
              </StepGuide>
            </div>
          </section>

          {/* WHAT ARE ELEGANT CURSIVE LETTERS? */}
          <section className="seo-card-section mb-8" id="que-son">
            <div className="seo-icon-badge">
              <BookOpen size={20} />
            </div>
            <h2 className="seo-h2">¿Qué son las letras cursivas elegantes?</h2>
            <p className="seo-paragraph">
              Las <strong>letras cursivas elegantes</strong> son representaciones digitales de caligrafía a mano alzada que simulan la estética de plumas estilográficas y marcas de alta costura.
            </p>
            <p className="seo-paragraph">
              Conforme a la especificación oficial del{' '}
              <a
                href="https://www.unicode.org/reports/tr25/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Technical Report #25 (Mathematical Alphanumeric Symbols)
              </a>
              , estas fuentes se forman mediante caracteres de bloques tipográficos especiales.
            </p>
            <p className="seo-paragraph">
              Por consiguiente, no estás instalando un archivo de fuente (.ttf) en tu dispositivo ni creando una imagen. Estás generando símbolos alfanuméricos Unicode reales que viajan como texto plano universal.
            </p>
          </section>

          {/* COMPARISON TABLE */}
          <section className="seo-card-section mb-8" id="comparativa-fuentes">
            <h2 className="seo-h2">Letras Cursivas Elegantes Unicode vs. Fuentes Caligráficas Tradicionales</h2>
            <p className="seo-paragraph">
              Compara las ventajas operativas entre usar símbolos cursivos elegantes y fuentes instaladas tradicionales:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-indigo-300 border-b border-slate-800">
                    <th className="p-3 font-bold">Característica</th>
                    <th className="p-3 font-bold">Unicode Cursivo Elegante</th>
                    <th className="p-3 font-bold">Fuente Tradicional (.ttf)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white">Instalación previa</td>
                    <td className="p-3 text-emerald-400">No requiere ninguna instalación</td>
                    <td className="p-3 text-amber-400">Requiere archivo de fuente local</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Compatibilidad en Instagram</td>
                    <td className="p-3 text-emerald-400">100% directo en biografía y nombre</td>
                    <td className="p-3 text-slate-400">No se conserva al pegar</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Formato en WhatsApp</td>
                    <td className="p-3 text-emerald-400">Se muestra directo en chats</td>
                    <td className="p-3 text-slate-400">Requiere que el receptor la tenga</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Uso en portadas y diseños</td>
                    <td className="p-3 text-slate-300">Excelente para títulos de redes</td>
                    <td className="p-3 text-indigo-300">Preferido en impresión física</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Image Plan 2 Visual Banner */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Casos de Uso de Alta Estética
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Destaca tu marca o perfil personal con fuentes de lujo
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Crea biografías aesthetic para Instagram, nombres sofisticados y dedicatorias de alta elegancia con bordes y destellos.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2 min-w-[260px] text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-pink-300">✨ ℳ𝒶𝓇𝒾𝒶 | 𝒟𝒾𝓈ℯñ𝒶𝒹ℴ𝓇𝒶 ✨</span>
                    <span className="bg-pink-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Instagram Bio</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Ejemplos de letras cursivas elegantes en biografías de Instagram.
            </p>
          </div>

          {/* USE CASES & PLATFORMS */}
          <section className="seo-card-section mb-8" id="donde-usar">
            <div className="seo-icon-badge">
              <Share2 size={20} />
            </div>
            <h2 className="seo-h2">¿Dónde usar letras cursivas elegantes?</h2>
            <p className="seo-paragraph">
              Estas tipografías sofisticadas son ideales para transmitir distinción en múltiples entornos digitales:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-pink-400">
                  <Instagram size={20} />
                  <h3 className="font-bold text-white text-base">Biografías de Instagram</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Añade un toque refinado a tu marca personal o perfil profesional. Descubre más en nuestras guías de{' '}
                  <Link href="/letras-para-instagram" className="seo-link font-medium">
                    letras para Instagram
                  </Link>,{' '}
                  <Link href="/letras-para-instagram/letras-para-bio" className="seo-link font-medium">
                    letras para bio
                  </Link>{' '}
                  y{' '}
                  <Link href="/letras-para-instagram/simbolos-para-instagram" className="seo-link font-medium">
                    símbolos para Instagram
                  </Link>.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Smartphone size={20} />
                  <h3 className="font-bold text-white text-base">Firmas digitales y WhatsApp</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Resalta tu nombre en mensajes, estados de WhatsApp y perfiles de mensajería.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <Type size={20} />
                  <h3 className="font-bold text-white text-base">Letras para nombres</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Aporta distinción a tu apodo o firma visual. Revisa la sección de{' '}
                  <Link href="/letras-para-instagram/letras-para-nombres" className="seo-link font-medium">
                    letras para nombres
                  </Link>.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <PenTool size={20} />
                  <h3 className="font-bold text-white text-base">Títulos y portadas</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Encabezados elegantes para presentaciones, notas de Notion o descripciones de Canva.
                </p>
              </div>
            </div>
          </section>

          {/* SPANISH ACCENTS & Ñ COMPATIBILITY */}
          <section className="seo-card-section mb-8" id="compatibilidad-espanol">
            <h2 className="seo-h2">Tratamiento de acentos y la letra Ñ en español</h2>
            <p className="seo-paragraph">
              El alfabeto castellano requiere una atención cuidadosa para vocales acentuadas (<strong>á, é, í, ó, ú</strong>) y la consonante <strong>Ñ/ñ</strong>.
            </p>
            <p className="seo-paragraph">
              Conformidad con las especificaciones de{' '}
              <a
                href="https://www.unicode.org/reports/tr15/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Normalization Forms (Annex #15)
              </a>
              , nuestro conversor preserva de forma segura los caracteres originales cuando el bloque de script matemático no ofrece un sustituto directo, evitando corromper tus palabras.
            </p>
          </section>

          <ToolCTA
            title="¿Deseas transformar tu texto a cursiva elegante?"
            description="Escribe cualquier nombre o biografía y copia de inmediato versiones caligráficas exclusivas para tus redes."
            buttonText="Probar Generador Elegante"
            targetId="generador-elegante"
            badge="Estilos de Lujo"
          />

          {/* FAQ SECTION */}
          <div className="mb-8">
            <FAQSection
              items={FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))}
              title="Preguntas Frecuentes sobre Letras Cursivas Elegantes"
              colorTheme="purple"
              id="preguntas-frecuentes"
            />
          </div>

          {/* SILO RELATIONS & INTERNAL LINKS BLOCK */}
          <section className="silo-nav-block mb-8">
            <h3 className="silo-nav-title">Navegación del SILO y Herramientas Relacionadas</h3>
            <div className="silo-links-grid">
              <Link href="/letras-cursivas" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#818cf8' }}>SILO Principal</span>
                  <h4 className="silo-card-heading">letras cursivas</h4>
                  <p className="silo-card-desc">Hub central de fuentes cursivas y manuscritas para copiar y pegar.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/abecedario-cursivo" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#6366f1' }}>Abecedario</span>
                  <h4 className="silo-card-heading">abecedario cursivo</h4>
                  <p className="silo-card-desc">Abecedario manuscrito completo en mayúsculas y minúsculas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#ec4899' }}>Copiar y Pegar</span>
                  <h4 className="silo-card-heading">letras cursivas para copiar y pegar</h4>
                  <p className="silo-card-desc">Generador principal de letras cursivas con catálogo de términos.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Conversor Universal</span>
                  <h4 className="silo-card-heading">conversor de letras</h4>
                  <p className="silo-card-desc">Generador completo de más de 350 estilos tipográficos Unicode.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>
            </div>
          </section>

          {/* SECTION: CONCLUSION */}
          <section className="seo-card-section mb-8 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/20">
            <h2 className="seo-h2">Conclusión</h2>
            <p className="seo-paragraph">
              Las letras cursivas elegantes ofrecen una forma distinguida y sofisticada de transformar tu presencia digital en redes sociales, biografías y mensajes personales sin complicaciones técnicas.
            </p>
            <p className="seo-paragraph font-medium text-indigo-200">
              Prueba nuestras herramientas en tiempo real en Letras Bonitas, elige la combinación que transmita tu estilo único y copia el resultado con un solo clic para usarlo libremente en cualquier plataforma.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
