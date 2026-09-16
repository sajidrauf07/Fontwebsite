import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CursiveAlphabetTool from '@/components/cursive-alphabet/CursiveAlphabetTool';
import { FAQSection } from '@/components/seo/FAQSection';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Layers,
  ShieldCheck,
  ChevronRight,
  Instagram,
  Smartphone,
  Gamepad2,
  ExternalLink,
  Copy,
  Type,
  PenTool,
  AlertTriangle,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Abecedario Cursivo: Letras A-Z para Copiar y Pegar',
  description:
    'Descubre el abecedario cursivo completo de A a Z, con mayúsculas y minúsculas para copiar y pegar, además de ejemplos y consejos de uso.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/letras-cursivas/abecedario-cursivo/'
  },
  openGraph: {
    title: 'Abecedario Cursivo: Letras A-Z para Copiar y Pegar',
    description:
      'Encuentra letras cursivas mayúsculas y minúsculas, aprende cómo funcionan y descubre cómo utilizarlas en redes sociales, nombres y diseños.',
    url: 'https://theletrasbonitas.com/letras-cursivas/abecedario-cursivo/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abecedario Cursivo: Letras A-Z para Copiar y Pegar',
    description:
      'Descubre el abecedario cursivo completo de A a Z con mayúsculas y minúsculas para copiar y pegar al instante.'
  },
  robots: {
    index: true,
    follow: true
  }
};

const FAQ_ITEMS = [
  {
    q: '¿Qué es el abecedario cursivo?',
    a: 'Es una colección de letras A–Z presentada con una apariencia cursiva o manuscrita. En herramientas digitales puede utilizar caracteres Unicode estilizados que pueden copiarse y pegarse.'
  },
  {
    q: '¿Puedo copiar las letras cursivas?',
    a: 'Sí. Cuando la página o herramienta proporciona caracteres Unicode copiables, puedes seleccionar la letra y copiarla para después pegarla en otra aplicación compatible.'
  },
  {
    q: '¿El abecedario cursivo incluye mayúsculas y minúsculas?',
    a: 'Sí. Puedes encontrar variantes de las letras en mayúscula y minúscula. La disponibilidad exacta de cada forma depende del conjunto de caracteres utilizado.'
  },
  {
    q: '¿Puedo usar letras cursivas en Instagram?',
    a: 'Puedes utilizarlas cuando Instagram acepta los caracteres correspondientes. Conviene probar el resultado antes de publicar porque no todos los caracteres especiales tienen el mismo comportamiento en todas las plataformas.'
  },
  {
    q: '¿Puedo usar letras cursivas en Free Fire?',
    a: 'Depende de los caracteres que permita el sistema de nombres del juego. Si una variante no funciona, prueba una versión más sencilla.'
  },
  {
    q: '¿Las letras cursivas son una fuente?',
    a: 'No necesariamente. Las herramientas de copiar y pegar suelen utilizar caracteres Unicode estilizados. Una fuente tradicional, en cambio, cambia la apariencia de caracteres normales dentro de un programa.'
  },
  {
    q: '¿Puedo utilizar la Ñ en cursiva?',
    a: 'Depende de la variante concreta. Algunas combinaciones pueden representar la ñ mediante caracteres o marcas Unicode, mientras que otros estilos pueden no ofrecer una forma equivalente. Comprueba siempre el resultado final.'
  },
  {
    q: '¿Las letras cursivas sirven para aprender caligrafía?',
    a: 'Pueden servir como referencia visual, pero no sustituyen la práctica. Aprender caligrafía requiere practicar los trazos, conexiones, inclinación y movimiento de la mano.'
  },
  {
    q: '¿Por qué algunas letras aparecen diferentes?',
    a: 'Unicode incluye diferentes conjuntos de caracteres estilizados y algunas formas históricas que complementan esos conjuntos. Por eso ciertas mayúsculas pueden tener una apariencia distinta de otras.'
  },
  {
    q: '¿Qué hago si una letra no se muestra correctamente?',
    a: 'Prueba otra variante. También puedes comprobar la misma letra en otro dispositivo o aplicación. Si el problema continúa, utiliza una versión de texto normal.'
  }
];

const ALPHABET_TABLE_DATA = [
  { char: 'A', lower: '𝒶', upper: '𝒜' },
  { char: 'B', lower: '𝒷', upper: 'ℬ' },
  { char: 'C', lower: '𝒸', upper: '𝒞' },
  { char: 'D', lower: '𝒹', upper: '𝒟' },
  { char: 'E', lower: 'ℯ', upper: 'ℰ' },
  { char: 'F', lower: '𝒻', upper: 'ℱ' },
  { char: 'G', lower: 'ℊ', upper: '𝒢' },
  { char: 'H', lower: '𝒽', upper: 'ℋ' },
  { char: 'I', lower: '𝒾', upper: 'ℐ' },
  { char: 'J', lower: '𝒿', upper: '𝒥' },
  { char: 'K', lower: '𝓀', upper: '𝒦' },
  { char: 'L', lower: '𝓁', upper: 'ℒ' },
  { char: 'M', lower: '𝓂', upper: 'ℳ' },
  { char: 'N', lower: '𝓃', upper: '𝒩' },
  { char: 'O', lower: 'ℴ', upper: '𝒪' },
  { char: 'P', lower: '𝓅', upper: '𝒫' },
  { char: 'Q', lower: '𝓆', upper: '𝒬' },
  { char: 'R', lower: '𝓇', upper: 'ℛ' },
  { char: 'S', lower: '𝓈', upper: '𝒮' },
  { char: 'T', lower: '𝓉', upper: '𝒯' },
  { char: 'U', lower: '𝓊', upper: '𝒰' },
  { char: 'V', lower: '𝓋', upper: '𝒱' },
  { char: 'W', lower: '𝓌', upper: '𝒲' },
  { char: 'X', lower: '𝓍', upper: '𝒳' },
  { char: 'Y', lower: '𝓎', upper: '𝒴' },
  { char: 'Z', lower: '𝓏', upper: '𝒵' }
];

export default function AbecedarioCursivoPage() {
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
        item: 'https://theletrasbonitas.com/letras-cursivas/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Abecedario Cursivo',
        item: 'https://theletrasbonitas.com/letras-cursivas/abecedario-cursivo/'
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
          <Link href="/letras-cursivas/" className="breadcrumb-link">Letras Cursivas</Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Abecedario Cursivo</span>
        </div>
      </nav>

      {/* Main SILO Content Wrapper */}
      <div className="seo-wrapper-section">
        <div className="seo-container">
          {/* Header Section */}
          <header className="hero-section silo-hero">
            <div className="hero-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Abecedario Completo de A a Z</span>
            </div>

            <h1 className="hero-h1">
              Abecedario Cursivo: Letras de A a Z para Copiar y Pegar
            </h1>

            <p className="hero-tagline">
              Encuentra letras cursivas mayúsculas y minúsculas, aprende cómo funcionan y descubre cómo utilizarlas en redes sociales, nombres y diseños.
            </p>

            <p className="hero-description">
              ¿Buscas un abecedario cursivo completo para copiar y pegar? Aquí puedes encontrar las letras de la A a la Z y utilizarlas para crear nombres, perfiles, mensajes, diseños y textos con un estilo diferente. La forma más rápida es elegir la letra que necesitas y copiarla.
            </p>
          </header>

          {/* Image Plan 1 Visual Demonstration Banner */}
          <div className="my-8 p-6 bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Tabla Completa del Abecedario
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Abecedario cursivo completo de A a Z para copiar y pegar
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Combina mayúsculas y minúsculas cursivas para formar palabras elegantes como <em>𝒜𝓂𝑜𝓇</em>, <em>𝒮𝑜𝓅𝒽𝒾𝒶</em>, <em>𝒞𝒶𝓇𝓁𝑜𝓈</em> o <em>ℰ𝓈𝓉𝒾𝓁𝑜</em>.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-wrap gap-2 max-w-[280px] text-lg font-mono text-amber-300 justify-center">
                  <span>𝒜</span><span>ℬ</span><span>𝒞</span><span>𝒟</span><span>ℰ</span><span>ℱ</span><span>𝒢</span><span>ℋ</span>
                  <span>𝒶</span><span>𝒷</span><span>𝒸</span><span>𝒹</span><span>ℯ</span><span>𝒻</span><span>ℊ</span><span>𝒽</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Abecedario cursivo completo con letras mayúsculas y minúsculas.
            </p>
          </div>

          {/* Interactive Cursive Alphabet Tool */}
          <CursiveAlphabetTool />

          {/* Section: Abecedario cursivo completo de A a Z */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Abecedario cursivo completo de A a Z</h2>
            <p className="seo-paragraph">
              El alfabeto español utiliza las 26 letras del alfabeto latino básico. Para facilitar la consulta rápida, aquí tienes la tabla completa de referencia de letras cursivas:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-indigo-300 border-b border-slate-800">
                    <th className="p-3 font-bold">Letra</th>
                    <th className="p-3 font-bold">Minúscula cursiva</th>
                    <th className="p-3 font-bold">Mayúscula cursiva</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950/50 font-mono">
                  {ALPHABET_TABLE_DATA.map((row) => (
                    <tr key={row.char} className="hover:bg-slate-900/40">
                      <td className="p-2.5 font-sans font-bold text-white">{row.char}</td>
                      <td className="p-2.5 text-amber-300 text-base">{row.lower}</td>
                      <td className="p-2.5 text-indigo-300 text-base">{row.upper}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="seo-paragraph">
              Puedes copiar una letra individual o combinar varias para formar una palabra. Por ejemplo: <strong>𝒜𝓂𝑜𝓇</strong>, <strong>𝒮𝑜𝓅𝒽𝒾𝒶</strong>, <strong>𝒞𝒶𝓇𝓁𝑜𝓈</strong>, <strong>ℰ𝓈𝓉𝒾𝓁𝑜</strong>.
            </p>
          </section>

          {/* Section: Letras cursivas mayúsculas y minúsculas */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Letras cursivas mayúsculas y minúsculas</h2>
            <p className="seo-paragraph">
              Una de las búsquedas más comunes relacionadas con el abecedario cursivo es encontrar las versiones mayúsculas y minúsculas. Las mayúsculas funcionan bien para iniciales y nombres propios, mientras que las minúsculas son más prácticas para formar palabras completas.
            </p>

            <div className="my-4 p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
              <div>
                <span className="text-xs text-indigo-400 block font-bold mb-1">Mayúsculas cursivas:</span>
                <p className="font-mono text-sm text-amber-300 break-words">
                  𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-emerald-400 block font-bold mb-1">Minúsculas cursivas:</span>
                <p className="font-mono text-sm text-emerald-300 break-words">
                  𝒶 𝒷 𝒸 𝒹 ℯ 𝒻 ℊ 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ℴ 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏
                </p>
              </div>
            </div>

            <p className="seo-paragraph">
              Una combinación equilibrada de ambas es ideal para nombres propios: <em>𝒥𝓊𝓁𝒾𝒶</em>, <em>𝒜𝓃𝒹𝓇ℯ𝓈</em>, <em>𝑀𝒶𝓇𝒾𝒶</em>, <em>𝒟𝒶𝓃𝒾ℯ𝓁</em>.
            </p>
          </section>

          {/* Section: Abecedario cursivo de la A a la Z (A-Z Individual Guide) */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Abecedario cursivo de la A a la Z</h2>
            <p className="seo-paragraph mb-4">
              Aquí tienes una referencia de consulta rápida para copiar letras individuales de la A a la Z:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">A cursiva: <span className="font-mono text-amber-300">𝒜 𝒶</span></span>
                <p className="text-xs text-slate-300 mt-1">Ideal como inicial de nombre, firma digital o diseño.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">B cursiva: <span className="font-mono text-amber-300">ℬ 𝒷</span></span>
                <p className="text-xs text-slate-300 mt-1">Útil para nombres y palabras con inicial destacada.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">C cursiva: <span className="font-mono text-amber-300">𝒞 𝒸</span></span>
                <p className="text-xs text-slate-300 mt-1">Forma curva elegante para nombres y frases decorativas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">D cursiva: <span className="font-mono text-amber-300">𝒟 𝒹</span></span>
                <p className="text-xs text-slate-300 mt-1">Perfecta para iniciales y combinaciones de nombres.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">E cursiva: <span className="font-mono text-amber-300">ℰ ℯ</span></span>
                <p className="text-xs text-slate-300 mt-1">Excelente fluidez visual en marcas y textos cortos.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">F cursiva: <span className="font-mono text-amber-300">ℱ 𝒻</span></span>
                <p className="text-xs text-slate-300 mt-1">La mayúscula destaca como inicial decorativa de alto impacto.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">G cursiva: <span className="font-mono text-amber-300">𝒢 ℊ</span></span>
                <p className="text-xs text-slate-300 mt-1">Buena opción para nombres propios y palabras cortas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">H cursiva: <span className="font-mono text-amber-300">ℋ 𝒽</span></span>
                <p className="text-xs text-slate-300 mt-1">Apariencia especialmente ornamental en mayúscula.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">I cursiva: <span className="font-mono text-amber-300">ℐ 𝒾</span></span>
                <p className="text-xs text-slate-300 mt-1">Se combina fácilmente con otras letras en nombres.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">J cursiva: <span className="font-mono text-amber-300">𝒥 𝒿</span></span>
                <p className="text-xs text-slate-300 mt-1">Frecuente en iniciales de nombres y firmas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">K cursiva: <span className="font-mono text-amber-300">𝒦 𝓀</span></span>
                <p className="text-xs text-slate-300 mt-1">Destaca al utilizarse como primera letra en nicks.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">L cursiva: <span className="font-mono text-amber-300">ℒ 𝓁</span></span>
                <p className="text-xs text-slate-300 mt-1">Llama la atención por su elegante bucle manuscrito.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">M cursiva: <span className="font-mono text-amber-300">ℳ 𝓂</span></span>
                <p className="text-xs text-slate-300 mt-1">Excelente presencia visual para iniciales de perfiles.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">N cursiva: <span className="font-mono text-amber-300">𝒩 𝓃</span></span>
                <p className="text-xs text-slate-300 mt-1">Combina perfectamente con minúsculas fluidas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">O cursiva: <span className="font-mono text-amber-300">𝒪 ℴ</span></span>
                <p className="text-xs text-slate-300 mt-1">Sencilla de reconocer y compatible con muchos estilos.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">P cursiva: <span className="font-mono text-amber-300">𝒫 𝓅</span></span>
                <p className="text-xs text-slate-300 mt-1">Útil en nombres, títulos de publicaciones e iniciales.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">Q cursiva: <span className="font-mono text-amber-300">𝒬 𝓆</span></span>
                <p className="text-xs text-slate-300 mt-1">Presenta trazos estilizados distintivos en Unicode.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">R cursiva: <span className="font-mono text-amber-300">ℛ 𝓇</span></span>
                <p className="text-xs text-slate-300 mt-1">Opción muy popular para iniciales de nombres.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">S cursiva: <span className="font-mono text-amber-300">𝒮 𝓈</span></span>
                <p className="text-xs text-slate-300 mt-1">Forma fluida idónea para palabras y frases.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">T cursiva: <span className="font-mono text-amber-300">𝒯 𝓉</span></span>
                <p className="text-xs text-slate-300 mt-1">Utilizada para crear títulos destacados o nombres.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">U cursiva: <span className="font-mono text-amber-300">𝒰 𝓊</span></span>
                <p className="text-xs text-slate-300 mt-1">Funciona bien tanto en palabras cortas como largas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">V cursiva: <span className="font-mono text-amber-300">𝒱 𝓋</span></span>
                <p className="text-xs text-slate-300 mt-1">Útil para nombres de usuario y frases personalizadas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">W cursiva: <span className="font-mono text-amber-300">𝒲 𝓌</span></span>
                <p className="text-xs text-slate-300 mt-1">Ocupa mayor espacio visual, ideal para firmas.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">X cursiva: <span className="font-mono text-amber-300">𝒳 𝓍</span></span>
                <p className="text-xs text-slate-300 mt-1">Carácter distintivo para nicks y diseños creativos.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">Y cursiva: <span className="font-mono text-amber-300">𝒴 𝓎</span></span>
                <p className="text-xs text-slate-300 mt-1">Se utiliza en nombres, iniciales y textos decorativos.</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">Z cursiva: <span className="font-mono text-amber-300">𝒵 𝓏</span></span>
                <p className="text-xs text-slate-300 mt-1">Completa el abecedario cursivo con trazo refinado.</p>
              </div>
            </div>
          </section>

          {/* Section: ¿Qué es un abecedario cursivo? y ¿Cómo funcionan? */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">¿Qué es un abecedario cursivo?</h2>
            <p className="seo-paragraph">
              Un abecedario cursivo es una colección de letras presentadas con una apariencia inspirada en la escritura manuscrita e inclinada. En el mundo digital, las páginas que ofrecen letras para copiar y pegar utilizan caracteres del estándar universal Unicode.
            </p>
            <p className="seo-paragraph">
              La{' '}
              <a
                href="https://www.unicode.org/reports/tr25/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                documentación de Unicode sobre caracteres alfanuméricos matemáticos (Technical Report #25)
              </a>{' '}
              explica que estos caracteres pertenecen al bloque <em>Mathematical Alphanumeric Symbols</em> (U+1D400–U+1D7FF).
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">¿Cómo funcionan las letras cursivas para copiar y pegar?</h3>
            <p className="seo-paragraph">
              El proceso es automático: seleccionas la letra o palabra, la copias y la pegas en tu aplicación. Cuando escribes <em>Hola</em> y el generador lo transforma en <strong>𝓗𝓸𝓵𝓪</strong>, el segundo resultado utiliza caracteres codificados diferentes, permitiendo copiar y pegar el texto conservando su estilo visual sin necesidad de instalar archivos de fuentes.
            </p>
          </section>

          {/* Comparison Table Section */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Abecedario cursivo vs. fuente cursiva tradicional</h2>
            <p className="seo-paragraph">
              Revisa las diferencias clave entre el uso de caracteres Unicode cursivos y fuentes de sistema tradicionales:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-indigo-300 border-b border-slate-800">
                    <th className="p-3 font-bold">Característica</th>
                    <th className="p-3 font-bold">Unicode cursivo</th>
                    <th className="p-3 font-bold">Fuente cursiva (.ttf)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white">Se copia como texto</td>
                    <td className="p-3 text-emerald-400">Sí</td>
                    <td className="p-3 text-slate-400">No necesariamente</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Necesita instalar una fuente</td>
                    <td className="p-3 text-emerald-400">Normalmente no</td>
                    <td className="p-3 text-amber-400">Puede requerirla</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Puede pegarse en redes sociales</td>
                    <td className="p-3 text-emerald-400">Depende de la plataforma</td>
                    <td className="p-3 text-slate-400">Generalmente no como texto estilizado</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Cambia los caracteres</td>
                    <td className="p-3 text-emerald-400">Sí (sustituye el punto de código)</td>
                    <td className="p-3 text-slate-400">No (solo la forma de dibujarlo)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Uso en diseño profesional</td>
                    <td className="p-3 text-slate-300">Limitado a texto plano</td>
                    <td className="p-3 text-indigo-300">Amplio en software de diseño</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Control tipográfico</td>
                    <td className="p-3 text-slate-300">Limitado al estándar Unicode</td>
                    <td className="p-3 text-indigo-300">Alto (kerning, ligaduras)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Ideal para nombres y bios</td>
                    <td className="p-3 text-emerald-400">Sí, cuando es compatible</td>
                    <td className="p-3 text-slate-300">Depende de la plataforma</td>
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
                  Uso en Redes Sociales y Perfiles
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  ¿Dónde puedes usar el abecedario cursivo?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Utiliza las letras cursivas para personalizar nombres, biografías y textos digitales en Instagram, TikTok, WhatsApp, Facebook, Discord y videojuegos.
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-2 min-w-[260px] text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-amber-300">𝓒𝒶𝓇𝓁ℴ𝓈 ✨</span>
                    <span className="bg-pink-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Instagram</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-emerald-300">𝒰𝓈𝓊𝒶𝓇𝒾ℴ 𝒫𝓇ℴ</span>
                    <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center mt-4 italic">
              Las letras cursivas pueden utilizarse para personalizar nombres, bios y textos digitales compatibles.
            </p>
          </div>

          {/* Social Platforms & Specific Use Cases */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Usos del abecedario cursivo por plataforma</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-pink-400">
                  <Instagram size={20} />
                  <h3 className="font-bold text-white text-base">Abecedario cursivo para Instagram</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Destaca en biografías, nombres de usuario, comentarios e historias. Evita convertir todo el texto en caracteres especiales para mantener excelente legibilidad.
                </p>
                <div className="flex flex-col gap-1.5 text-xs pt-3 border-t border-slate-800">
                  <Link href="/letras-para-instagram/" className="seo-link font-medium">
                    • letras para Instagram
                  </Link>
                  <Link href="/letras-para-instagram/letras-cursivas-para-instagram/" className="seo-link font-medium">
                    • letras cursivas para Instagram
                  </Link>
                  <Link href="/letras-para-instagram/letras-para-bio/" className="seo-link font-medium">
                    • letras para bio
                  </Link>
                  <Link href="/letras-para-instagram/letras-para-nombres/" className="seo-link font-medium">
                    • letras para nombres
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Smartphone size={20} />
                  <h3 className="font-bold text-white text-base">Abecedario cursivo para WhatsApp y TikTok</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Utiliza palabras cortas como <em>𝓗𝓸𝓵𝓪</em> o <em>𝓕𝓮𝓵𝓲𝔃 𝓭í𝓪</em> en estados de WhatsApp, mensajes directos o descripciones de TikTok.
                </p>
                <div className="mt-3 p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                  💡 Tip: Revisa siempre la apariencia en pantalla móvil antes de publicar.
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <Gamepad2 size={20} />
                  <h3 className="font-bold text-white text-base">Abecedario cursivo para nombres de juegos</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Combina iniciales cursivas en nicknames para Free Fire o Roblox (ejemplo: <em>𝓓𝓻𝓪𝓰𝓸𝓷</em>, <em>𝓢𝓱𝒶𝒹ℴ𝓌</em>).
                </p>
                <div className="flex flex-col gap-1 text-xs pt-2 border-t border-slate-800">
                  <Link href="/nombres-para-free-fire/" className="seo-link font-medium">
                    • nombres para Free Fire
                  </Link>
                  <Link href="/nombres-para-free-fire/apodos/" className="seo-link font-medium">
                    • apodos para Free Fire
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <PenTool size={20} />
                  <h3 className="font-bold text-white text-base">Abecedario cursivo para firmas y diseños</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Las letras cursivas (ejemplo: ℳ, 𝒜, ℛ) sirven como punto de partida visual para iniciales y conceptos de firmas digitales.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Mayúsculas vs Minúsculas & Spanish Ñ/Accents */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Letras cursivas mayúsculas y minúsculas: cuándo utilizarlas</h2>
            <p className="seo-paragraph">
              Las <strong>mayúsculas</strong> son ideales para destacar iniciales y títulos cortos (ejemplo: <em>ℳaria</em>, <em>𝒥uan</em>, <em>ℒ𝒾𝓈𝓉𝒶</em>). Las <strong>minúsculas</strong> son más apropiadas para construir palabras fluidas completas (ejemplo: <em>𝒶𝓂𝑜𝓇</em>, <em>𝒻𝒶𝓂𝒾𝓁𝒾𝒶</em>, <em>𝓈𝓊𝑒ñ𝑜𝓈</em>).
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">¿Qué pasa con la Ñ y las letras con acento?</h3>
            <p className="seo-paragraph">
              El alfabeto español incluye caracteres especiales como <strong>ñ, á, é, í, ó, ú, ü</strong>. Para verificar la compatibilidad de normalización en secuencias de texto Unicode, puedes consultar el documento oficial{' '}
              <a
                href="https://www.unicode.org/reports/tr15/"
                target="_blank"
                rel="noopener noreferrer"
                className="seo-link font-bold"
              >
                Unicode Normalization Forms (Standard Annex #15)
              </a>
              .
            </p>
            <p className="seo-paragraph">
              En Letras Bonitas, comprobamos que palabras como <em>niño, México, corazón, canción</em> conserven de forma segura la letra original en español si la variante matemática no posee un sustituto nativo directo.
            </p>
          </section>

          {/* Section: Limitations & Practice */}
          <section className="seo-card-section mb-8">
            <h2 className="seo-h2">Limitaciones de las letras cursivas Unicode</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 my-4 pl-2">
              <li><strong>Compatibilidad:</strong> No todas las plataformas representan todos los caracteres de la misma manera.</li>
              <li><strong>Legibilidad:</strong> Algunos estilos muy decorados son difíciles de leer en pantallas pequeñas.</li>
              <li><strong>Búsqueda:</strong> Los caracteres estilizados pueden comportarse diferente a las letras normales en motores de búsqueda.</li>
              <li><strong>Accesibilidad:</strong> Los lectores de pantalla pueden interpretar los caracteres matemáticos de forma distinta.</li>
            </ul>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">Abecedario cursivo para aprender y practicar</h3>
            <p className="seo-paragraph">
              Si tu objetivo es escolar o caligráfico, el abecedario digital sirve como excelente referencia visual para observar formas, pero aprender caligrafía manuscrita real requiere practicar físicamente trazos, bucles e inclinación de la mano sobre papel.
            </p>

            <h3 className="text-xl font-bold text-indigo-300 mt-6 mb-3">Consejos para elegir un estilo cursivo</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 my-4 pl-2">
              <li><strong>Legibilidad:</strong> ¿Puedes leer la palabra rápidamente en un vistazo?</li>
              <li><strong>Compatibilidad:</strong> ¿Se muestra correctamente en el dispositivo o app final?</li>
              <li><strong>Longitud:</strong> Los estilos decorados funcionan mejor en palabras cortas.</li>
              <li><strong>Contexto:</strong> Una bio de Instagram admite más creatividad que un texto formal.</li>
              <li><strong>Consistencia:</strong> Evita combinar demasiados estilos diferentes en la misma palabra.</li>
              <li><strong>Simplicidad:</strong> Ante la duda, elige la versión más limpia y fácil de leer.</li>
            </ol>
          </section>

          {/* SILO Internal Links Mesh */}
          <section className="silo-nav-block mb-8">
            <h3 className="silo-nav-title">Navegación del SILO en Letras Bonitas</h3>
            <div className="silo-links-grid">
              <Link href="/letras-cursivas/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#818cf8' }}>Pillar Cursiva</span>
                  <h4 className="silo-card-heading">letras cursivas</h4>
                  <p className="silo-card-desc">Generador principal de letras cursivas y caligráficas bonitas.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#6366f1' }}>Copiar y Pegar</span>
                  <h4 className="silo-card-heading">letras cursivas para copiar y pegar</h4>
                  <p className="silo-card-desc">Catálogo de fuentes manuscritas de un solo clic.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag" style={{ color: '#ec4899' }}>Elegantes</span>
                  <h4 className="silo-card-heading">letras cursivas elegantes</h4>
                  <p className="silo-card-desc">Colección de letras cursivas finas y ornamentales.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>

              <Link href="/conversor-de-letras/" className="silo-card-link">
                <div className="silo-card-content">
                  <span className="silo-card-tag">Conversor Universal</span>
                  <h4 className="silo-card-heading">conversor de letras</h4>
                  <p className="silo-card-desc">Transforma texto en más de 350 fuentes Unicode.</p>
                </div>
                <ArrowRight size={18} className="silo-card-arrow" />
              </Link>
            </div>
          </section>

          {/* Section: Conclusión */}
          <section className="seo-card-section mb-8 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/20">
            <h2 className="seo-h2">Conclusión</h2>
            <p className="seo-paragraph">
              Un abecedario cursivo puede ser mucho más que una lista de letras bonitas. Puede servir como una referencia rápida para encontrar caracteres, crear nombres, personalizar perfiles y experimentar con diferentes estilos de texto.
            </p>
            <p className="seo-paragraph font-medium text-indigo-200">
              La clave está en utilizarlo de forma inteligente: elige letras legibles y comprueba que funcionen en la plataforma donde las usarás. Escribe tu texto, explora los estilos y copia tus letras favoritas directamente desde Letras Bonitas.
            </p>
          </section>

          {/* Section: FAQ Accordion */}
          <FAQSection
            items={FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))}
            title="Preguntas frecuentes sobre el abecedario cursivo"
            colorTheme="purple"
            id="preguntas-frecuentes"
          />
        </div>
      </div>
    </>
  );
}
