import type { Metadata } from 'next';
import Link from 'next/link';
import { CursiveGenerator } from '@/components/cursive/CursiveGenerator';
import { CursiveAlphabetPreview } from '@/components/cursive/CursiveAlphabetPreview';
import { CursiveExamples } from '@/components/cursive/CursiveExamples';
import { FAQSection } from '@/components/seo/FAQSection';
import {
  Feather,
  Sparkles,
  Type,
  MousePointerClick,
  Copy,
  ArrowRight,
  BookOpen,
  Gem,
  Instagram,
  Zap,
  ShieldCheck,
  HeartHandshake,
  ChevronRight,
  HelpCircle,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Info,
  Sliders,
  Flame,
  Gamepad2
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: '¿Qué son las letras cursivas?',
    a: 'Son letras con una apariencia inclinada, fluida o caligráfica. En herramientas online, el término también puede referirse a caracteres Unicode estilizados que puedes copiar y pegar.'
  },
  {
    q: '¿Cómo puedo copiar letras cursivas?',
    a: 'Escribe tu texto en el generador, selecciona el estilo que prefieras y pulsa Copiar. Después pega el resultado en la aplicación o plataforma que quieras utilizar.'
  },
  {
    q: '¿Las letras cursivas funcionan en Instagram?',
    a: 'Muchos caracteres Unicode estilizados pueden utilizarse en Instagram, pero la compatibilidad depende del carácter y del campo donde lo pegues. Siempre es recomendable comprobar el resultado.'
  },
  {
    q: '¿Necesito instalar una fuente?',
    a: 'No cuando utilizas un conversor basado en caracteres Unicode. El resultado se copia como texto estilizado, aunque su apariencia final depende de la plataforma y del dispositivo.'
  },
  {
    q: '¿Puedo usar letras cursivas en WhatsApp?',
    a: 'Puedes pegar determinados caracteres Unicode estilizados en WhatsApp. La forma en que se muestran puede depender del dispositivo y de la compatibilidad del carácter.'
  },
  {
    q: '¿Por qué algunas letras no aparecen correctamente?',
    a: 'No todos los caracteres tienen equivalentes estilizados en todos los conjuntos Unicode. Además, una aplicación puede no tener soporte visual para determinados caracteres.'
  },
  {
    q: '¿Puedo utilizar letras cursivas para mi nombre?',
    a: 'Sí. Los nombres cortos son uno de los usos más habituales. Prueba varios estilos y elige uno que sea atractivo pero fácil de reconocer.'
  },
  {
    q: '¿Puedo usar letras cursivas en Free Fire?',
    a: 'Depende de los caracteres y de las restricciones del campo de nombre del juego. Si un estilo no funciona, prueba una alternativa más sencilla.'
  },
  {
    q: '¿Las letras cursivas son iguales que una fuente?',
    a: 'No necesariamente. Una fuente es un recurso tipográfico. Un conversor Unicode puede producir caracteres diferentes que tienen una apariencia estilizada.'
  },
  {
    q: '¿Puedo mezclar letras normales y cursivas?',
    a: 'Sí. Combinar texto normal con una palabra o elemento cursivo puede crear un resultado más limpio y fácil de leer.'
  }
];

export const metadata: Metadata = {
  title: 'Letras Cursivas para Copiar y Pegar | Gratis',
  description:
    'Genera letras cursivas bonitas para copiar y pegar. Convierte tu texto en estilos elegantes para Instagram, WhatsApp, TikTok y más.',
  alternates: {
    canonical: 'https://letrasbonitas.com/letras-cursivas/'
  },
  openGraph: {
    title: 'Letras Cursivas para Copiar y Pegar | Gratis',
    description:
      'Convierte tu texto en estilos cursivos elegantes y listos para copiar y pegar en segundos.',
    url: 'https://letrasbonitas.com/letras-cursivas/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Cursivas para Copiar y Pegar',
    description:
      'Genera letras cursivas elegantes para copiar y pegar en Instagram, WhatsApp y TikTok.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LetrasCursivasPage() {
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://letrasbonitas.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Letras Cursivas',
        item: 'https://letrasbonitas.com/letras-cursivas/'
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Ruta de navegación">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">Inicio</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Letras Cursivas</span>
        </div>
      </nav>

      {/* Hero Section & Master Interactive Generator */}
      <section className="hero-section silo-hero">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Feather size={16} className="sparkle-icon" />
            <span>Generador de Letras Cursivas #1</span>
          </div>

          <h1 className="hero-h1">Letras Cursivas para Copiar y Pegar</h1>

          <p className="hero-tagline">
            Convierte tu texto en estilos cursivos elegantes y listos para copiar y pegar en segundos.
          </p>

          <p className="hero-description">
            ¿Quieres darle un toque diferente a tu nombre, biografía, publicación o mensaje? Con Letras Cursivas puedes convertir tu texto normal en estilos elegantes y listos para copiar y pegar en Instagram, WhatsApp, TikTok y más.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <Zap size={16} />
              <span>Conversión instantánea en vivo</span>
            </div>
            <div className="highlight-item">
              <ShieldCheck size={16} />
              <span>Sin registro ni descarga de fuentes</span>
            </div>
            <div className="highlight-item">
              <HeartHandshake size={16} />
              <span>100% Gratis e ilimitado</span>
            </div>
          </div>

          {/* Main Cursive Generator Tool */}
          <CursiveGenerator />
        </div>
      </section>

      {/* SEO Content Sections */}
      <div className="seo-wrapper-section">
        <div className="seo-container">

          {/* Image Plan 1 Visual Demonstration Card */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Generador de Letras Cursivas en Acción
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Escribe tu texto y elige tu estilo cursivo favorito
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Solo escribe o pega tu texto en el generador, explora los estilos disponibles y elige el que más te guste. Después, pulsa Copiar y úsalo donde quieras.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2.5 min-w-[260px] text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-amber-300">𝓛𝓮𝓽𝓻𝒶𝓼 𝓒𝓾𝓻𝓼𝓲𝓿𝒶𝓼</span>
                    <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Copiado</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-indigo-300">𝑳𝒆𝒕𝒓𝒂𝒔 𝑪𝒖𝒓𝒔𝒊𝒗𝒂𝒔</span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">Copiar</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Genera y copia diferentes estilos de letras cursivas desde tu navegador.
            </p>
          </div>

          {/* H2: Generador de Letras Cursivas */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Generador de Letras Cursivas</h2>
            <p className="seo-paragraph">
              La forma más sencilla de crear letras cursivas es utilizar el generador de arriba. Introduce una palabra, un nombre o una frase. El resultado aparecerá automáticamente en diferentes estilos. Después puedes comparar las opciones y copiar la que mejor se adapte a lo que estás creando.
            </p>
            <p className="seo-paragraph">
              Por ejemplo, una palabra normal como <strong>Letras Cursivas</strong> puede convertirse en diferentes estilos visuales como:
            </p>

            <div className="my-4 p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-wrap gap-6 justify-around text-center">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Cursiva Manuscrita Script</span>
                <span className="text-xl font-bold text-amber-300">𝓛𝓮𝓽𝓻𝒶𝓼 𝓒𝓾𝓻𝓼𝓲𝓿𝒶𝓼</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-1">Cursiva en Negrita Math</span>
                <span className="text-xl font-bold text-indigo-300">𝑳𝒆𝒕𝒓𝒂𝒔 𝑪𝒖𝒓𝒔𝒊𝒗𝒂𝒔</span>
              </div>
            </div>

            <p className="seo-paragraph">
              La idea no es que tengas que escribir manualmente cada carácter. El conversor realiza la transformación por ti en tiempo real.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">Escribe tu texto y elige tu estilo</h3>
            <p className="seo-paragraph">
              No necesitas conocimientos técnicos ni saber qué carácter Unicode corresponde a cada letra. El proceso automático procesa tu entrada instantáneamente.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">Cómo copiar y pegar tus letras cursivas</h3>
            <p className="seo-paragraph">
              Una vez que encuentres la versión de{' '}
              <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="seo-link font-semibold">
                letras para copiar y pegar
              </Link>{' '}
              que más te guste, simplemente presiona el botón «Copiar». El texto estilizado quedará guardado en el portapapeles de tu dispositivo.
            </p>
          </section>

          {/* H2: ¿Qué son las letras cursivas? */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">¿Qué son las letras cursivas?</h2>
            <p className="seo-paragraph">
              Las letras cursivas son estilos de escritura que normalmente tienen una apariencia inclinada, fluida o parecida a la escritura manuscrita.
            </p>
            <p className="seo-paragraph">
              En internet, el término «letras cursivas» puede referirse a varias cosas. Por un lado, existen las fuentes tipográficas tradicionales que cambian la apariencia de los caracteres mediante CSS o una aplicación. Por otro, existen caracteres del estándar universal Unicode que tienen diferentes formas visuales.
            </p>
            <p className="seo-paragraph">
              Esta diferencia es importante: cuando utilizas un{' '}
              <Link href="/conversor-de-letras/" className="seo-link font-semibold">
                conversor de letras
              </Link>{' '}
              basado en Unicode, no estás instalando una nueva fuente en tu teléfono. En realidad, el texto se transforma en caracteres diferentes que pueden conservar ese aspecto cuando los copias y pegas.
            </p>
          </section>

          {/* H2: Letras cursivas para copiar y pegar */}
          <section className="seo-card-section mb-8" id="copiar-pegar">
            <h2 className="seo-h2">Letras cursivas para copiar y pegar</h2>
            <p className="seo-paragraph">
              Una de las principales razones por las que las personas buscan letras cursivas es la posibilidad de copiar y pegar en redes sociales y juegos. En lugar de crear una imagen con texto decorativo, puedes obtener caracteres que se introducen directamente en campos de texto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-400 mb-2">Cursiva elegante</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Los estilos caligráficos suaves suelen funcionar especialmente bien para nombres, frases cortas y biografías.
                </p>
                <p className="text-xs text-slate-400">
                  Explora nuestra sección de{' '}
                  <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="seo-link font-semibold">
                    letras cursivas elegantes
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-400 mb-2">Cursiva en negrita</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Si quieres que un nombre o título destaque más, una variante en negrita aporta mayor peso y presencia visual.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-400 mb-2">Cursiva itálica</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  La cursiva itálica tiene una inclinación limpia pensada para resaltar palabras o frases cortas sin recargar el texto.
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-indigo-400 mb-2">Cursiva caligráfica y decorativa</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Estilos script que intentan transmitir la sensación de la escritura a mano con pequeños adornos y marcos visuales.
                </p>
                <p className="text-xs text-slate-400">
                  Visita la lista completa de{' '}
                  <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className="seo-link font-semibold">
                    letras cursivas para copiar y pegar
                  </Link>
                  .
                </p>
              </div>
            </div>

            <CursiveExamples />
          </section>

          {/* H2: Abecedario de letras cursivas */}
          <section className="seo-card-section mb-8" id="abecedario">
            <h2 className="seo-h2">Abecedario de letras cursivas</h2>
            <p className="seo-paragraph">
              También puedes explorar las letras cursivas individualmente. El abecedario permite comprobar cómo se representa cada letra antes de utilizarla dentro de una palabra completa.
            </p>

            <CursiveAlphabetPreview />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-base font-bold text-indigo-300 mb-2">Letras cursivas mayúsculas</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Las mayúsculas suelen presentar trazos más amplios y decorativos. Conviene probar varias opciones para asegurar buena legibilidad.
                </p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-base font-bold text-indigo-300 mb-2">Letras cursivas minúsculas</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Las minúsculas están diseñadas para mantener un flujo continuo. Por ejemplo: 𝒶 𝒷 𝒸 𝒹 𝑒 𝒻 𝑔.
                </p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-base font-bold text-indigo-300 mb-2">Números y símbolos</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Algunos números y símbolos poseen equivalentes cursivos o monospaciados, manteniendo intactos emojis y signos de puntuación.
                </p>
              </div>
            </div>

            <div className="silo-cta-box mt-6">
              <Link href="/letras-cursivas/abecedario-cursivo/" className="silo-cta-link">
                Explora el abecedario cursivo completo <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* H2: Cómo convertir texto a letras cursivas */}
          <section className="seo-card-section steps-section mb-8">
            <h2 className="seo-h2 text-center">Cómo convertir texto a letras cursivas</h2>
            <p className="seo-subtext text-center mb-6">
              Sigue estos 5 sencillos pasos para transformar cualquier mensaje:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex gap-4 items-start">
                <span className="bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg">Paso 1</span>
                <div>
                  <h4 className="font-bold text-white text-base">Escribe tu texto</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Introduce tu nombre, apodo, frase, palabra o biografía corta en el cuadro del generador.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex gap-4 items-start">
                <span className="bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg">Paso 2</span>
                <div>
                  <h4 className="font-bold text-white text-base">Explora los estilos</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    El conversor mostrará decenas de variantes cursivas, manuscritas y caligráficas en tiempo real.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex gap-4 items-start">
                <span className="bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg">Paso 3</span>
                <div>
                  <h4 className="font-bold text-white text-base">Elige el estilo</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Busca un equilibrio entre estética visual y legibilidad cómoda según el destino final.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex gap-4 items-start">
                <span className="bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg">Paso 4</span>
                <div>
                  <h4 className="font-bold text-white text-base">Copia</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Presiona el botón de copia del estilo elegido para guardarlo en tu portapapeles.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex gap-4 items-start">
                <span className="bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg">Paso 5</span>
                <div>
                  <h4 className="font-bold text-white text-base">Pega</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Abre tu red social o aplicación preferida y pega el resultado en tu perfil o mensaje.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* H2: Technical Unicode Questions & Official External References */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">¿Las letras cursivas son una fuente?</h2>
            <p className="seo-paragraph">
              No necesariamente. Esta es una de las confusiones más comunes. Una fuente tradicional es un recurso tipográfico que determina cómo se dibujan los caracteres en una aplicación. En cambio, un conversor Unicode sustituye caracteres normales por caracteres Unicode diferentes que tienen una apariencia estilizada.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">¿Cómo funcionan las letras cursivas Unicode?</h3>
            <p className="seo-paragraph">
              La especificación universal del{' '}
              <a
                href="https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-22/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Standard — Mathematical Alphanumeric Symbols
              </a>{' '}
              incluye familias como <em>script, bold script, italic y Fraktur</em> dentro del bloque U+1D400–U+1D7FF.
            </p>
            <p className="seo-paragraph">
              No obstante, el Consorcio Unicode señala que estos caracteres fueron creados originalmente para notaciones matemáticas y técnicas. Al trabajar con diferentes representaciones de texto, también entran en juego las especificaciones de{' '}
              <a
                href="https://www.unicode.org/reports/tr15/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Normalization Forms
              </a>
              , asegurando que los caracteres mantengan coherencia entre diferentes dispositivos.
            </p>
          </section>

          {/* Comparison Table Section */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Letras cursivas vs. fuentes tradicionales</h2>
            <p className="seo-paragraph">
              Compara las diferencias principales entre utilizar caracteres Unicode estilizados y una fuente instalada tradicional:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-indigo-300 border-b border-slate-800">
                    <th className="p-3 font-bold">Característica</th>
                    <th className="p-3 font-bold">Texto Unicode estilizado</th>
                    <th className="p-3 font-bold">Fuente tradicional (.ttf)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white">Instalación</td>
                    <td className="p-3 text-emerald-400">Generalmente no necesaria</td>
                    <td className="p-3 text-amber-400">Puede ser necesaria</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Copiar y pegar</td>
                    <td className="p-3 text-emerald-400">Sí, directo como texto</td>
                    <td className="p-3 text-slate-400">El formato puede no conservarse</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Funciona como caracteres</td>
                    <td className="p-3 text-emerald-400">Sí</td>
                    <td className="p-3 text-slate-400">No necesariamente</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Uso en redes sociales</td>
                    <td className="p-3 text-emerald-400">Muy amplio y directo</td>
                    <td className="p-3 text-slate-400">Depende de la plataforma</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Personalización</td>
                    <td className="p-3 text-slate-300">Depende del conjunto Unicode</td>
                    <td className="p-3 text-indigo-300">Muy amplia en diseño</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Compatibilidad</td>
                    <td className="p-3 text-slate-300">Depende del carácter y sistema</td>
                    <td className="p-3 text-slate-300">Depende de la fuente instalada</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Uso profesional</td>
                    <td className="p-3 text-slate-300">Excelente para redes y nicks</td>
                    <td className="p-3 text-indigo-300">Habitual en diseño gráfico</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Image Plan 2 Visual Demonstration Card */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Comparación de Fuentes Cursivas Unicode
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Prueba diferentes variantes antes de copiar tu texto
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Compara la legibilidad entre cursiva fina, cursiva en negrita y estilos decorativos para elegir la combinación ideal.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2 min-w-[260px] text-xs">
                  <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Cursiva Fina</span>
                    <span className="font-mono text-indigo-300 text-sm">𝒞𝒶𝓇𝓁ℴ𝓈</span>
                  </div>
                  <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Cursiva Manuscrita</span>
                    <span className="font-mono text-amber-300 text-sm">𝓒𝒶𝓇𝓁ℴ𝓈</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Compara diferentes estilos cursivos antes de elegir el texto que quieres copiar.
            </p>
          </div>

          {/* Social Media & Gaming Use Cases */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Uso de letras cursivas en redes sociales y juegos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-pink-400">
                  <Instagram size={20} />
                  <h3 className="font-bold text-white text-base">Letras cursivas para Instagram</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Puedes utilizar letras cursivas en biografías, nombres, publicaciones y leyendas de Instagram. Para biografías, una combinación limpia suele funcionar mejor: texto normal + elemento cursivo + símbolos.
                </p>
                <div className="flex flex-col gap-1 text-xs pt-2 border-t border-slate-800">
                  <Link href="/letras-para-instagram/" className="seo-link font-medium">
                    • Letras para Instagram
                  </Link>
                  <Link href="/letras-para-instagram/letras-cursivas-para-instagram/" className="seo-link font-medium">
                    • Letras Cursivas para Instagram
                  </Link>
                  <Link href="/letras-para-instagram/letras-para-bio/" className="seo-link font-medium">
                    • Letras para bio
                  </Link>
                  <Link href="/letras-para-instagram/simbolos-para-instagram/" className="seo-link font-medium">
                    • Símbolos para Instagram
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Smartphone size={20} />
                  <h3 className="font-bold text-white text-base">Letras cursivas para WhatsApp y TikTok</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Pega texto cursivo en estados de WhatsApp, mensajes directos, descripciones de TikTok y comentarios manteniendo una lectura limpia.
                </p>
                <div className="mt-3 p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                  💡 Tip: Para mensajes largos en WhatsApp, los alfabetos sencillos garantizan una lectura rápida.
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <Type size={20} />
                  <h3 className="font-bold text-white text-base">Letras cursivas para nombres y perfiles</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Un nombre corto es uno de los mejores casos de uso. Por ejemplo, transforma <em>Carlos</em> en 𝒞𝒶𝓇𝓁ℴ𝓈 o 𝓒𝒶𝓇𝓁ℴ𝓈 para destacar tu perfil.
                </p>
                <Link href="/letras-para-instagram/letras-para-nombres/" className="seo-link text-xs font-medium">
                  • Ver letras para nombres
                </Link>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <Gamepad2 size={20} />
                  <h3 className="font-bold text-white text-base">Letras cursivas en videojuegos</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Crea nicknames elegantes en juegos online como Free Fire y Roblox.
                </p>
                <Link href="/nombres-para-free-fire/" className="seo-link text-xs font-medium">
                  • Ir a Nombres para Free Fire
                </Link>
              </div>
            </div>
          </section>

          {/* H2: ¿Cuántos estilos de letras cursivas debería tener un generador? */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">¿Cuántos estilos de letras cursivas debería tener un generador?</h2>
            <p className="seo-paragraph">
              Más no siempre significa mejor. Algunos sitios web promocionan decenas o cientos de resultados sin organización. En Letras Bonitas, una biblioteca amplia de más de 350 fuentes es una ventaja porque está organizada por categorías claras: Cursivas, Elegantes, Caligráficas, Negritas, Aesthetic, Góticas y Especiales.
            </p>
          </section>

          {/* H2: Consejos para elegir el mejor estilo cursivo */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Consejos para elegir el mejor estilo cursivo</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 my-4 pl-2">
              <li><strong>Prioriza la legibilidad:</strong> Un estilo puede ser bonito, pero si nadie puede leerlo, pierde utilidad.</li>
              <li><strong>Considera dónde lo vas a usar:</strong> Un nombre para Instagram admite más decoración que una frase larga.</li>
              <li><strong>Prueba varias opciones:</strong> No te quedes con el primer resultado que aparezca.</li>
              <li><strong>Ten cuidado con los caracteres especiales:</strong> Algunos estilos pueden transformar solamente determinadas letras.</li>
              <li><strong>No llenes todo de símbolos:</strong> Los símbolos pueden complementar un nombre, pero demasiados elementos dificultan la lectura.</li>
              <li><strong>Comprueba el resultado después de pegarlo:</strong> La representación visual puede variar entre dispositivos.</li>
              <li><strong>Utiliza el buscador de estilos:</strong> Filtrar por categorías ahorra tiempo.</li>
            </ol>
          </section>

          {/* H2: Problemas de compatibilidad y caracteres especiales */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Problemas de compatibilidad y caracteres especiales</h2>
            <p className="seo-paragraph">
              Aunque Unicode facilita el intercambio de texto, la representación exacta depende del sistema operativo, navegador y soporte de la aplicación.
            </p>
            <p className="seo-paragraph">
              Además, el español utiliza caracteres especiales como <strong>á, é, í, ó, ú, ü, ñ</strong>. Un conversor responsable trata estos caracteres con cuidado, conservando la letra original si el conjunto estilizado no posee un sustituto matemático nativo, evitando así mostrar caracteres desconocidos.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">¿Por qué algunas letras no se ven correctamente?</h3>
            <p className="seo-paragraph">
              Puede ocurrir cuando la aplicación no soporta el carácter Unicode específico o si el dispositivo carece del glifo visual. Probar una variante más sencilla suele solucionar la compatibilidad.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">¿Se pueden combinar letras cursivas con texto normal?</h3>
            <p className="seo-paragraph">
              ¡Sí! De hecho, combinar texto normal con una palabra cursiva destaca elementos clave (ejemplo: <em>Mi bio 𝒸𝓇ℯ𝒶𝓉𝒾𝓋𝒶 ✨</em>) sin sobrecargar la lectura.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">¿Son seguras las letras cursivas Unicode?</h3>
            <p className="seo-paragraph">
              Los caracteres Unicode son totalmente seguros y forman parte de los estándares de la industria digital. Para redes sociales y perfiles, lo más importante es verificar que la plataforma los acepte y que tus contactos puedan leerlos cómodamente.
            </p>
          </section>

          {/* Related SILO Hub Grid */}
          <section className="silo-nav-block mb-8">
            <h3 className="silo-nav-title">Herramientas Relacionadas del SILO</h3>
            <div className="silo-links-grid">
              <Link href="/letras-cursivas/abecedario-cursivo/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#818cf8' }}>Abecedario</span>
                  <h4 className="silo-card-heading">Abecedario Cursivo</h4>
                  <p className="silo-card-desc">Tabla completa del alfabeto cursivo de la A a la Z.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#6366f1' }}>Copiar y Pegar</span>
                  <h4 className="silo-card-heading">Copiar y Pegar Cursivas</h4>
                  <p className="silo-card-desc">Frases y nombres cursivos listos para 1-clic.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#ec4899' }}>Elegantes</span>
                  <h4 className="silo-card-heading">Cursivas Elegantes</h4>
                  <p className="silo-card-desc">Estilos sofisticados con ornamentos y marcos decorativos.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Conversor Principal</span>
                  <h4 className="silo-card-heading">Conversor de Letras</h4>
                  <p className="silo-card-desc">Transforma texto en cientos de estilos Unicode.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>
            </div>
          </section>

          {/* Conclusión */}
          <section className="seo-card-section mb-8 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/20">
            <h2 className="seo-h2">Conclusión</h2>
            <p className="seo-paragraph">
              Las Letras Cursivas son una forma sencilla de darle personalidad a nombres, bios, mensajes y otros textos digitales. Con un conversor online puedes probar diferentes estilos, comparar resultados y copiar el que mejor se adapte a tu objetivo.
            </p>
            <p className="seo-paragraph font-medium text-indigo-200">
              Lo más importante es elegir un estilo que no solo se vea bonito, sino que también sea fácil de leer y compatible con el lugar donde quieres utilizarlo. Escribe tu texto, prueba diferentes opciones y copia tu favorita directamente desde Letras Bonitas.
            </p>
          </section>

        </div>
      </div>

      {/* FAQ Section */}
      <CursiveFAQ />
    </>
  );
}

/* ── FAQ Client Component ── */
function CursiveFAQ() {
  return (
    <div className="max-w-[850px] mx-auto py-12 px-4">
      <FAQSection
        items={FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))}
        title="Preguntas Frecuentes sobre Letras Cursivas"
        subtitle="Todo lo que necesitas saber sobre tipografías cursivas Unicode."
        id="preguntas-frecuentes"
      />
    </div>
  );
}
