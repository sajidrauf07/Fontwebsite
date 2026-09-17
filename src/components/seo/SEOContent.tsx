import React from 'react';
import Link from 'next/link';
import { SEOArticleFaqAccordion } from './SEOArticleFaqAccordion';
import {
  Sparkles,
  Type,
  Instagram,
  Feather,
  Smile,
  Copy,
  MousePointerClick,
  Smartphone,
  Gamepad2,
  CheckCircle2,
  Flame,
  HelpCircle,
  Lightbulb,
  Crown,
  ChevronRight,
  Info,
  BookOpen,
  Layers,
  Globe
} from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

const MASTER_ARTICLE_FAQS: FAQItem[] = [
  {
    question: '¿Qué son las letras bonitas?',
    answer:
      'Son estilos de texto creados mediante caracteres especiales del estándar universal Unicode. Permiten transformar un texto normal en diferentes apariencias visuales que pueden copiarse y pegarse directamente en redes sociales y juegos.'
  },
  {
    question: '¿Las letras bonitas son lo mismo que una fuente?',
    answer:
      'No exactamente. Una fuente tradicional (.ttf o .otf) normalmente cambia la forma en que los caracteres se dibujan dentro de una aplicación. Las letras Unicode son caracteres diferentes con representaciones visuales particulares que puedes copiar y pegar sin descargar archivos.'
  },
  {
    question: '¿Necesito instalar algo?',
    answer:
      'No. El generador funciona directamente desde el navegador de tu teléfono celular, computadora o tablet sin instalar programas ni aplicaciones adicionales.'
  },
  {
    question: '¿Las letras bonitas son gratuitas?',
    answer:
      'Sí, Letras Bonitas es una herramienta web 100% gratuita, accesible directamente desde el navegador y sin necesidad de crear una cuenta o registrarte.'
  },
  {
    question: '¿Puedo copiar letras bonitas?',
    answer:
      'Sí. Una de las funciones principales de la herramienta es permitirte copiar el texto estilizado al portapapeles con un solo clic.'
  },
  {
    question: '¿Puedo utilizar letras bonitas en Instagram?',
    answer:
      'Sí, puedes utilizar diferentes estilos en las áreas que acepten caracteres especiales, como biografías, nombres visibles, captions y comentarios.'
  },
  {
    question: '¿Funcionan en WhatsApp y TikTok?',
    answer:
      'Sí, la mayoría de los estilos pueden copiarse en mensajes, estados, nombres y frases de WhatsApp, así como en descripciones y perfiles de TikTok.'
  },
  {
    question: '¿Funcionan en Free Fire y juegos?',
    answer:
      'Muchos estilos son compatibles con Free Fire y otros videojuegos. Sin embargo, los juegos pueden aplicar restricciones de caracteres o límites de longitud (12 caracteres en Free Fire), por lo que siempre conviene probar el nick en el juego.'
  },
  {
    question: '¿Por qué aparecen cuadros en lugar de algunas letras?',
    answer:
      'Esto ocurre cuando el sistema operativo o la aplicación receptora carece del soporte de fuente necesario para interpretar un carácter Unicode específico. Seleccionar una variante menos compleja soluciona el problema.'
  },
  {
    question: '¿Puedo usar letras bonitas con ñ y acentos?',
    answer:
      'Sí. En Letras Bonitas preservamos la ortografía del español (á, é, í, ó, ú, ü, ñ) para garantizar que tus palabras sigan siendo legibles.'
  }
];

export const SEOContent: React.FC = () => {

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: MASTER_ARTICLE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="seo-content-container w-full space-y-12 text-left block">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Introduction SEO Card */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-pink-500 to-purple-600 rounded-l-2xl" />
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
          <Sparkles size={16} />
          <span>Generador de Letras Bonitas</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Letras Bonitas para Copiar y Pegar
        </h2>
        <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="leading-relaxed">
            ¿Quieres darle un toque diferente a tu nombre, frase, biografía o perfil? Con un generador de letras bonitas puedes transformar un texto normal en diferentes estilos y copiar el resultado en cuestión de segundos.
          </p>
          <p className="leading-relaxed">
            No necesitas diseñar las letras manualmente ni instalar un programa para probar diferentes opciones. Escribe tu texto, explora los estilos disponibles y copia el que más te guste.
          </p>
          <p className="leading-relaxed">
            En <strong>Letras Bonitas</strong> encontrarás una colección amplia de estilos pensados para diferentes situaciones. Puedes buscar una apariencia elegante para tu perfil, una opción cursiva para una frase, un estilo llamativo para un nombre de juego o una variante sencilla para{' '}
            <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 font-medium text-sm hover:bg-pink-500/20 transition-all underline decoration-pink-500/40">
              <span>letras para copiar y pegar</span>
              <ChevronRight size={14} />
            </Link>{' '}
            en tus redes sociales.
          </p>
        </div>
      </section>

      {/* Interactive UI Demo Visual Banner */}
      <div className="w-full p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/90 rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden relative space-y-6 block">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1 space-y-3 text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-pink-400 block">
              Generador de Letras Bonitas — Demostración
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              El proceso es rápido: Escribe → Explora → Elige → Copia y Pega
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              El generador de Letras Bonitas está diseñado para hacer una cosa especialmente bien: convertir tu texto en diferentes estilos de caracteres que puedas copiar y utilizar fácilmente.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col justify-center">
            <div className="bg-slate-950/90 p-4 sm:p-6 rounded-2xl border border-slate-800 flex flex-col gap-3 min-w-[280px] sm:min-w-[340px] shadow-2xl">
              {/* Row 1 */}
              <div className="flex justify-between items-center bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80 hover:border-pink-500/40 transition-all gap-4">
                <span className="font-mono text-base text-pink-300 font-semibold tracking-wide">
                  𝓔𝓵𝓮𝓰𝓪𝓷𝓽𝓮 𝓒𝓾𝓻𝓼𝓲𝓿𝓪
                </span>
                <span className="bg-emerald-500 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm shadow-emerald-500/20 shrink-0 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Copiado
                </span>
              </div>
              {/* Row 2 */}
              <div className="flex justify-between items-center bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80 hover:border-purple-500/40 transition-all gap-4">
                <span className="font-mono text-base text-purple-300 font-semibold tracking-wide">
                  𝕲ó𝖙𝖎𝖈𝖔 𝕴𝖓𝖘𝖆𝖓𝖔
                </span>
                <span className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold border border-slate-700 transition-colors shrink-0 flex items-center gap-1">
                  <Copy size={12} /> Copiar
                </span>
              </div>
              {/* Row 3 */}
              <div className="flex justify-between items-center bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all gap-4">
                <span className="font-mono text-base text-cyan-300 font-semibold tracking-wide">
                  ░A░e░s░t░h░e░t░i░c░
                </span>
                <span className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold border border-slate-700 transition-colors shrink-0 flex items-center gap-1">
                  <Copy size={12} /> Copiar
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-950/80 border border-slate-800/90 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-slate-300">
          <Info size={18} className="text-pink-400 shrink-0" />
          <span>Explora diferentes estilos y copia el que mejor se adapte a tu texto.</span>
        </div>
      </div>

      {/* 2. How to use section */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-l-2xl" />
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Layers size={16} />
            <span>Guía de Uso Paso a Paso</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ¿Cómo usar el generador de letras bonitas?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Utilizar un generador de este tipo no debería ser complicado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-pink-500/40 transition-all text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                  <Type size={20} />
                </div>
                <span className="text-2xl font-extrabold text-slate-700 group-hover:text-pink-500/40 transition-colors">01</span>
              </div>
              <h3 className="text-base font-bold text-white">1. Escribe tu texto</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Primero introduce el texto que quieres transformar: tu nombre, apodo, frase, palabra, biografía corta, nombre para un juego, título o descripción. Por ejemplo: <em>Mi nombre</em>.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-purple-500/40 transition-all text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <MousePointerClick size={20} />
                </div>
                <span className="text-2xl font-extrabold text-slate-700 group-hover:text-purple-500/40 transition-colors">02</span>
              </div>
              <h3 className="text-base font-bold text-white">2. Explora los estilos</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Revisa las variantes disponibles: cursivas, elegantes, góticas, aesthetic, negrita, burbuja, pequeñas, decorativas, gaming o especiales.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-cyan-500/40 transition-all text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Copy size={20} />
                </div>
                <span className="text-2xl font-extrabold text-slate-700 group-hover:text-cyan-500/40 transition-colors">03</span>
              </div>
              <h3 className="text-base font-bold text-white">3. Copia tu favorito</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cuando encuentres el estilo que más te guste, utiliza el botón Copiar. El texto se guardará al instante en tu portapapeles.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-all text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Smartphone size={20} />
                </div>
                <span className="text-2xl font-extrabold text-slate-700 group-hover:text-emerald-500/40 transition-colors">04</span>
              </div>
              <h3 className="text-base font-bold text-white">4. Pégalo donde quieras</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Abre la aplicación o página donde quieres utilizar el texto y pégalo en tu perfil, bio, mensaje, comentario, publicación o nombre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 350+ Style Library Section */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-2xl" />
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <BookOpen size={16} />
            <span>Catálogo de Fuentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Más de 350 estilos de letras para explorar
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Tener muchas opciones puede ser útil cuando buscas una apariencia específica. Por eso, el generador está pensado para ofrecer una colección amplia de más de 350 fuentes y facilitar su exploración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Card 1 */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-pink-500/40 transition-all group text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                <Feather size={20} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                Letras cursivas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Las letras cursivas son una de las opciones más populares para quienes buscan una apariencia elegante. Su aspecto recuerda a diferentes formas de escritura manuscrita para nombres, biografías, frases, dedicatorias o publicaciones.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
              <Link href="/letras-cursivas/" className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors font-medium inline-flex items-center gap-1">
                <span>Letras cursivas</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/letras-cursivas/abecedario-cursivo/" className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors font-medium inline-flex items-center gap-1">
                <span>Abecedario cursivo</span>
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-purple-500/40 transition-all group text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Crown size={20} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Letras elegantes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Las letras elegantes pueden ser una buena opción cuando buscas destacar sin utilizar demasiados elementos decorativos. Funcionan para perfiles personales, nombres, frases cortas, biografías y títulos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-purple-300">𝓔𝓵𝓮𝓰𝓪𝓷𝓽𝓮 & 𝓢𝓸𝓯𝓲𝓼𝓽𝓲𝓬𝓪𝓭𝓸</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-amber-500/40 transition-all group text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Flame size={20} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Letras góticas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Las letras góticas tienen una apariencia más intensa y llamativa. Son populares para nombres de gaming, perfiles con estética oscura, nombres especiales y títulos decorativos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <Link href="/conversor-de-letras/" className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Conversor de letras</span>
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-cyan-500/40 transition-all group text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Letras aesthetic
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Las letras aesthetic ayudan a crear un estilo visual diferente para perfiles y publicaciones. Este tipo de texto suele combinarse con símbolos, espacios, emojis y caracteres decorativos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-cyan-300">✦ 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 𝓋𝒾𝒷𝑒𝓈 ✦</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-indigo-500/40 transition-all group text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Type size={20} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                Letras en negrita
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Las letras en negrita son útiles cuando quieres que determinadas palabras destaquen en títulos, nombres, frases, perfiles y publicaciones.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-indigo-300 font-bold">𝐍𝐞𝐠𝐫𝐢𝐭𝐚 𝐌𝐚𝐭𝐞𝐦á𝐭𝐢𝐜𝐚</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-emerald-500/40 transition-all group text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Smile size={20} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Letras pequeñas, burbuja y decoradas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Las letras pequeñas crean una apariencia compacta, las letras de burbuja utilizan caracteres redondeados y las letras decoradas incorporan elementos visuales alrededor o dentro del texto.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <span className="text-[#10b981] font-mono text-xs">Ⓛⓔⓣⓡⓐⓢ Ⓑⓤⓡⓑⓤⓙⓐ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Unicode Explanation & How it Works */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-pink-500 to-amber-500 rounded-l-2xl" />
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
            <Globe size={16} />
            <span>Explicación Técnica Unicode</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ¿Qué son las letras bonitas?
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="leading-relaxed">
              Las letras bonitas son diferentes representaciones de texto que pueden utilizar caracteres especiales del estándar universal{' '}
              <a href="https://www.unicode.org/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline font-bold hover:text-pink-300">
                Unicode
              </a>
              .
            </p>
            <p className="leading-relaxed">
              Esto es importante porque muchas personas piensan que un generador de letras simplemente cambia la fuente. En realidad, muchos generadores convierten determinados caracteres en otros caracteres Unicode que tienen una apariencia diferente, como bloques de símbolos alfanuméricos matemáticos para crear estilos como negrita, cursiva o doble trazo.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 space-y-5 text-left">
          <h3 className="text-xl font-bold text-pink-300 flex items-center gap-2">
            <Lightbulb size={20} className="text-pink-400" />
            ¿Cómo funcionan las letras bonitas?
          </h3>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Imagina que escribes: <strong>Hola</strong>. El generador puede transformar determinados caracteres en equivalentes estilizados:
          </p>

          <div className="my-5 p-5 bg-slate-950/90 rounded-2xl border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1.5 font-semibold uppercase tracking-wider">Negrita Matemáticas</span>
              <span className="text-xl font-bold text-white">𝐇𝐨𝐥𝐚</span>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1.5 font-semibold uppercase tracking-wider">Cursiva Manuscrita</span>
              <span className="text-xl font-bold text-pink-400 font-mono">𝓗𝓸𝓵𝓪</span>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1.5 font-semibold uppercase tracking-wider">Gótico Fraktur</span>
              <span className="text-xl font-bold text-purple-300 font-mono">𝕳𝖔𝖑𝖆</span>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            La palabra sigue representando el mismo contenido, pero los caracteres utilizados son diferentes. Por eso puedes copiar el resultado y pegarlo en otros lugares que acepten esos caracteres sin descargar un archivo de fuente.
          </p>
        </div>
      </section>

      {/* 5. Where to Use Section & Social/Gaming Use Cases */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-l-2xl" />
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Smartphone size={16} />
            <span>Compatibilidad y Usos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ¿Dónde puedes usar letras bonitas?
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Las letras bonitas pueden ser útiles en muchos espacios digitales:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Instagram Card */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-pink-500/40 transition-all text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-pink-400">
                <Instagram size={22} />
                <h3 className="font-bold text-white text-lg">Instagram</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Puedes probar diferentes estilos para biografías, nombres, publicaciones, captions y comentarios.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-800/80">
              <Link href="/letras-para-instagram/" className="px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Letras para Instagram</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/letras-para-instagram/letras-para-bio/" className="px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Letras para Bio</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/letras-para-instagram/letras-para-nombres/" className="px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Letras para Nombres</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/letras-para-instagram/simbolos-para-instagram/" className="px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Símbolos para Instagram</span>
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* WhatsApp & TikTok Card */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-emerald-500/40 transition-all text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <Smartphone size={22} />
                <h3 className="font-bold text-white text-lg">WhatsApp y TikTok</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Puedes copiar caracteres estilizados en mensajes, estados, nombres y frases de WhatsApp o en áreas de tu perfil y contenido de TikTok.
              </p>
            </div>
            <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
              <Lightbulb size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <span>Los estilos simples suelen ser una buena opción para mensajes porque mantienen una lectura cómoda.</span>
            </div>
          </div>

          {/* Gaming Card */}
          <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-amber-500/40 transition-all text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400">
                <Gamepad2 size={22} />
                <h3 className="font-bold text-white text-lg">Free Fire y Juegos</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Experimenta con estilos góticos, negritas, pequeños, decorados y gaming para crear un nickname más llamativo en Free Fire y otros videojuegos.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-800/80">
              <Link href="/nombres-para-free-fire/" className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Nombres para Free Fire</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/nombres-para-free-fire/apodos/" className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Apodos para Free Fire</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/nombres-para-free-fire/clanes/" className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Nombres para Clanes</span>
                <ChevronRight size={12} />
              </Link>
              <Link href="/nombres-para-free-fire/simbolos/" className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-xs font-medium inline-flex items-center gap-1">
                <span>Símbolos para Free Fire</span>
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-950/80 border border-slate-800/90 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-slate-300 text-left">
          <Info size={18} className="text-emerald-400 shrink-0" />
          <span>Usa diferentes estilos de texto para personalizar perfiles, nombres y publicaciones.</span>
        </div>
      </section>

      {/* 6. Copy and Paste & Spanish Ñ/Accents */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-l-2xl" />
        <div className="space-y-3 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Letras bonitas para copiar y pegar
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            La principal ventaja de este tipo de herramienta es la facilidad. No tienes que buscar caracteres uno por uno ni volver a escribir el texto. El proceso se resume en: <strong>Escribe → Explora → Elige → Copia → Pega</strong>.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-800/80 space-y-5 text-left">
          <h3 className="text-xl font-bold text-pink-300">
            Letras bonitas con Ñ y acentos
          </h3>
          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="leading-relaxed">
              Para una herramienta dirigida a usuarios de México y otros países hispanohablantes, el soporte de caracteres como <strong>ñ, á, é, í, ó, ú</strong> es especialmente importante. Por ejemplo: <em>México, corazón, canción, niño, diseño, información</em>.
            </p>
            <p className="leading-relaxed">
              No todos los estilos Unicode tienen equivalentes estilizados para todos los caracteres. Por eso, si una variante no puede representar correctamente un carácter, es preferible conservarlo o utilizar otro estilo antes que mostrar un resultado incorrecto.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Why Characters Look Different & How to Choose */}
      <section className="seo-card-section w-full bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-xl relative overflow-hidden block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 to-orange-600 rounded-l-2xl" />
        <div className="space-y-3 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ¿Por qué algunas letras se ven diferentes?
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="leading-relaxed">
              El aspecto de un carácter depende de diferentes factores: sistema operativo, navegador, dispositivo, aplicación, fuente disponible y soporte Unicode.
            </p>
            <p className="leading-relaxed">
              Por eso un carácter que aparece correctamente en un teléfono puede verse diferente en otro dispositivo o mostrarse como un cuadro si la aplicación no tiene soporte adecuado. Si esto sucede, prueba un estilo diferente con mejor compatibilidad.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 space-y-5 text-left">
          <h3 className="text-xl font-bold text-pink-300">
            Cómo elegir el mejor estilo de letras bonitas
          </h3>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            No existe un único estilo perfecto. La mejor opción depende de tu objetivo:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm sm:text-base text-slate-300 pt-2">
            <li className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-left">
              <CheckCircle2 size={18} className="text-pink-400 shrink-0 mt-0.5" />
              <span><strong>Para una bio elegante:</strong> Prueba cursivas o estilos refinados.</span>
            </li>
            <li className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-left">
              <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Para un nombre de juego:</strong> Experimenta con estilos góticos, fuertes o decorativos, pero comprueba la compatibilidad.</span>
            </li>
            <li className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-left">
              <CheckCircle2 size={18} className="text-purple-400 shrink-0 mt-0.5" />
              <span><strong>Para Instagram:</strong> Puedes utilizar cursivas, aesthetic, negritas o estilos elegantes.</span>
            </li>
            <li className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-left">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Para WhatsApp:</strong> Los estilos sencillos suelen ser una buena opción porque son fáciles de leer.</span>
            </li>
            <li className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-left">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Para una frase:</strong> Puedes utilizar una combinación de estilo y símbolos.</span>
            </li>
            <li className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-left">
              <CheckCircle2 size={18} className="text-indigo-400 shrink-0 mt-0.5" />
              <span><strong>Para máxima compatibilidad:</strong> Utiliza estilos menos complejos.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. Single Unified Master Article FAQ Section (Before Conclusion) */}
      <section className="faq-v2-wrapper" id="preguntas-frecuentes">
        <div className="faq-v2-accent-bar" />
        <div className="faq-v2-header">
          <div className="faq-v2-badge">
            <HelpCircle size={16} />
            <span>Dudas resueltas</span>
          </div>
          <h2 className="faq-v2-title">
            Preguntas Frecuentes sobre Letras Bonitas
          </h2>
          <p className="faq-v2-subtitle">
            Todo lo que necesitas saber sobre el funcionamiento, copiado y compatibilidad de tipografías Unicode.
          </p>
        </div>

        {/* Master FAQ Stacked Accordion Cards */}
        <SEOArticleFaqAccordion faqs={MASTER_ARTICLE_FAQS} />
      </section>

      {/* 9. Conclusion Section */}
      <section className="seo-card-section w-full bg-gradient-to-r from-pink-950/40 via-slate-900 to-purple-950/40 border border-pink-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md space-y-6 shadow-2xl relative overflow-hidden text-left block">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-pink-500 to-purple-500 rounded-l-2xl" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Conclusión
        </h2>
        <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="leading-relaxed">
            Las letras bonitas ofrecen una forma sencilla de personalizar nombres, frases, perfiles y publicaciones. En lugar de escribir o diseñar cada variante manualmente, puedes introducir tu texto una sola vez y explorar diferentes estilos hasta encontrar el resultado que más te guste.
          </p>
          <p className="leading-relaxed">
            La mejor elección depende de tu objetivo. Si buscas elegancia, prueba estilos cursivos; si quieres algo más intenso, explora opciones góticas; para redes sociales puedes experimentar con variantes aesthetic, decorativas o en negrita. Y si necesitas máxima compatibilidad, empieza con estilos sencillos.
          </p>
          <p className="text-pink-200 font-semibold pt-1 leading-relaxed">
            Lo más importante es que puedas probar diferentes opciones rápidamente. Escribe tu texto, explora los estilos disponibles, copia tu favorito y comprueba cómo se ve en la plataforma donde quieres utilizarlo.
          </p>
        </div>
      </section>
    </div>
  );
};
