import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GameNameGenerator from '@/components/nombres-para-juegos/GameNameGenerator';
import GameNameIdeasSection from '@/components/nombres-para-juegos/GameNameIdeasSection';
import { JUEGOS_FAQ_ITEMS } from '@/data/gameNamesData';
import {
  ReadingProgress,
  TipBox,
  InfoBox,
  WarningBox,
  StepGuide,
  StepItem
} from '@/components/article';
import {
  Gamepad2,
  Sparkles,
  Crown,
  Zap,
  Swords,
  ChevronRight,
  CheckCircle2,
  Search,
  ShieldAlert,
  Lightbulb,
  ExternalLink,
  Users,
  Flame,
  Star,
  Check,
  HelpCircle,
  Dices,
  Layers,
  ArrowRight,
  Smile,
  Moon
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nombres para Juegos: Generador de Nicks Chidos',
  description:
    'Crea nombres para juegos con nuestro generador gratis. Encuentra nicks gamer, chidos, aesthetic y originales para copiar y personalizar.',
  alternates: {
    canonical: 'https://theletrasbonitas.com/nombres-para-juegos'
  },
  openGraph: {
    title: 'Nombres para Juegos: Generador de Nicks Chidos',
    description:
      'Crea nombres para juegos con nuestro generador gratis. Encuentra nicks gamer, chidos, aesthetic y originales para copiar y personalizar.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos',
    siteName: 'Letras Bonitas',
    locale: 'es_MX',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Juegos: Generador de Nicks Chidos',
    description:
      'Generador de nombres para juegos: crea nicks gamer, chidos, aesthetic, pro y de clanes listos para copiar y pegar.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function NombresParaJuegosPage() {
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
        item: 'https://theletrasbonitas.com/nombres-para-juegos'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: JUEGOS_FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generador de Nombres para Juegos',
    url: 'https://theletrasbonitas.com/nombres-para-juegos',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Herramienta interactiva para generar nombres, nicks y apodos gamer personalizados con estilos Unicode y símbolos.'
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nombres para Juegos: Generador de Nicks Chidos',
    description:
      'Guía completa y generador interactivo de nombres para juegos. Aprende a crear nicks gamer, chidos, aesthetic, elegantes y competitivos con símbolos y caracteres Unicode.',
    url: 'https://theletrasbonitas.com/nombres-para-juegos',
    inLanguage: 'es-MX',
    publisher: {
      '@type': 'Organization',
      name: 'Letras Bonitas',
      url: 'https://theletrasbonitas.com/'
    }
  };

  return (
    <div className="silo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. Breadcrumbs */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current">Nombres para Juegos</span>
        </div>
      </nav>

      {/* 2 & 3. Hero Section & PAS Introduction */}
      <section className="hero-section silo-hero text-center">
        <div className="hero-backdrop" />
        <div className="hero-container">
          <div className="hero-badge">
            <Gamepad2 size={16} className="sparkle-icon" color="#818CF8" />
            <span>Generador de Nicks Gamer, Símbolos y Apodos Épicos</span>
          </div>

          <h1 className="hero-h1">
            Nombres para Juegos
          </h1>

          <p className="hero-tagline">
            ¿Buscas un nombre para juegos que se vea chido, sea fácil de recordar y represente tu estilo en cada partida?
          </p>

          <p style={{ maxWidth: '700px', margin: '-0.5rem auto 1.25rem', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Elegir un apodo gamer puede ser tardado: muchos ya están ocupados, otros no se leen bien en el lobby o terminan con símbolos rotos. Con nuestro generador interactivo puedes escribir tu apodo, elegir tu estilo favorito y copiar combinaciones listas para usar en segundos.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>10 Categorías Especializadas</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>Copiado Rápido en 1 Clic</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} />
              <span>100% Gratis y Sin Registro</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN INTERACTIVE GENERATOR IN FIRST VIEWPORT */}
      <div style={{ maxWidth: '1160px', margin: '-1.5rem auto 0', padding: '0 1rem' }}>
        <GameNameGenerator />
      </div>

      {/* Main SEO Article Content */}
      <article className="article-prose-container max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-slate-300 leading-relaxed">
        <ReadingProgress />

        {/* 5. Quick explanation: Cómo usar el generador */}
        <section id="como-usar">
          <div className="article-category-pill">
            <Sparkles size={14} className="text-indigo-400" aria-hidden="true" />
            <span>Paso a Paso</span>
          </div>

          <h2 className="article-h2">
            Cómo usar el generador de nombres para juegos
          </h2>

          <p className="article-lead-paragraph">
            Crear tu nuevo apodo gamer en Letras Bonitas es un proceso rápido e intuitivo. No necesitas instalar programas ni configurar nada en tu celular o computadora.
          </p>

          {/* Screenshot 1: Interface & Controls */}
          <figure className="article-figure">
            <div className="article-image-container">
              <Image
                src="/images/generador-nombres-juegos-interfaz.png"
                alt="Captura del generador interactivo de nombres para juegos en theletrasbonitas.com mostrando caja de texto y selector de categorías"
                width={1060}
                height={540}
                className="article-mockup-image"
                loading="lazy"
              />
            </div>
            <figcaption className="article-figcaption">
              <strong>Figura 1:</strong> Interfaz del generador en <span className="text-white font-medium">theletrasbonitas.com/nombres-para-juegos</span> con opciones de generación rápida, sugerencias y biblioteca de categorías gamer.
            </figcaption>
          </figure>

          <StepGuide>
            <StepItem
              number="01"
              label="PASO 1"
              title="Escribe una palabra o apodo base"
              description="Introduce tu nombre o palabra favorita en la caja de texto. Si no sabes qué poner, presiona 'Nombre aleatorio' para inspirarte con una base lista."
            />
            <StepItem
              number="02"
              label="PASO 2"
              title="Elige tu categoría o estilo"
              description="Selecciona entre Gamer, Chidos, Aesthetic, Elegantes, Cortos, Divertidos, Oscuros, Competitivos, Minimalistas o Clan según la vibra de tu perfil."
            />
            <StepItem
              number="03"
              label="PASO 3"
              title="Explora las opciones generadas"
              description="Revisa las tarjetas con combinaciones de símbolos, marcos y variaciones alfanuméricas diseñadas para verse nítidas en pantalla."
            />
            <StepItem
              number="04"
              label="PASO 4"
              title="Copia en 1 clic y prueba en tu juego"
              description="Toca el botón 'Copiar' para guardar el nick en tu portapapeles y pégalo directamente en el campo de cambio de nombre de tu videojuego."
            />
          </StepGuide>
        </section>

        <hr className="article-section-divider" />

        {/* 6 & 7. Nombres para juegos para copiar y pegar */}
        <section id="nombres-para-copiar-y-pegar">
          <div className="article-category-pill">
            <Crown size={14} className="text-amber-400" aria-hidden="true" />
            <span>Colección Lista para Usar</span>
          </div>

          <h2 className="article-h2">
            Nombres para juegos para copiar y pegar
          </h2>

          <p className="article-paragraph">
            Si buscas una opción lista sin necesidad de inventar combinaciones desde cero, aquí tienes una selección organizada por estilos. Puedes copiar cualquiera de estos nicks con solo pulsar el botón:
          </p>

          {/* Interactive Niche Ideas Component */}
          <GameNameIdeasSection />
        </section>

        <hr className="article-section-divider" />

        {/* 8. Nombres gamer */}
        <section id="nombres-gamer">
          <div className="article-category-pill">
            <Gamepad2 size={14} className="text-emerald-400" aria-hidden="true" />
            <span>Estilo Clásico</span>
          </div>

          <h2 className="article-h2">
            Nombres gamer
          </h2>

          <p className="article-paragraph">
            Un buen nombre gamer se caracteriza por transmitir fuerza, rapidez y seguridad durante la partida. Palabras como <em>Nova, Rush, Vortex, Shadow, Kael, Titan</em> o <em>Astro</em> funcionan muy bien como base porque son cortas, contundentes y fáciles de pronunciar por llamada de voz en Discord o en el chat de escuadra.
          </p>

          <p className="article-paragraph">
            Para darles un toque extra, puedes acompañarlas con terminaciones en mayúsculas como <span className="font-mono text-emerald-300">NovaX</span>, <span className="font-mono text-emerald-300">ShadowRush</span>, o marcos sutiles como <span className="font-mono text-emerald-300">『Titan』</span>.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 9. Nombres chidos para juegos */}
        <section id="nombres-chidos">
          <div className="article-category-pill">
            <Flame size={14} className="text-orange-400" aria-hidden="true" />
            <span>Identidad Mexicana</span>
          </div>

          <h2 className="article-h2">
            Nombres chidos para juegos
          </h2>

          <p className="article-paragraph">
            En México y Latinoamérica, un apodo "chido" es aquel que tiene personalidad propia y llama la atención sin verse sobrecargado. Combina palabras comunes con títulos respetados: <em>ElPatrón, DonRayo, LoboMex, FénixPro, ShadowKing</em> o <em>CapitánNova</em>.
          </p>

          <p className="article-paragraph">
            Si te gusta este estilo, te recomendamos visitar nuestra sección especializada de{' '}
            <Link href="/nombres-para-juegos/nombres-chidos" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              nombres chidos para juegos
            </Link>
            , donde reunimos cientos de opciones con sabor regional y creatividad.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 10. Nombres aesthetic para juegos */}
        <section id="nombres-aesthetic">
          <div className="article-category-pill">
            <Sparkles size={14} className="text-pink-400" aria-hidden="true" />
            <span>Visual y Armonioso</span>
          </div>

          <h2 className="article-h2">
            Nombres aesthetic para juegos
          </h2>

          <p className="article-paragraph">
            La estética aesthetic prioriza la delicadeza visual, el equilibrio y la armonía tipográfica. En lugar de símbolos agresivos, recurre a conceptos sobre la naturaleza, el cosmos y los tonos suaves: <em>Luna, Aura, Nube, Bruma, Velvet, Bloom, Star</em>.
          </p>

          <p className="article-paragraph">
            Se complementan con estrellas finas (✧), lunas (☾) o caracteres en cursiva suave como <span className="font-mono text-pink-300">•.¸♡ Luna ♡¸.•</span> o <span className="font-mono text-pink-300">✧NovaBloom✧</span>.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 11. Nombres cortos para juegos */}
        <section id="nombres-cortos">
          <div className="article-category-pill">
            <Zap size={14} className="text-amber-400" aria-hidden="true" />
            <span>Compactos y Prácticos</span>
          </div>

          <h2 className="article-h2">
            Nombres cortos para juegos
          </h2>

          <p className="article-paragraph">
            Muchos jugadores veteranos prefieren nicks de 3 a 5 letras porque son limpios, rápidos de escribir al agregar amigos y destacan con elegancia en las tablas de clasificación. Ejemplos populares incluyen <em>Nox, Zyn, Kiro, Ryu, Nexo, Vex, Zen, Kael, Lux, Ziro</em>.
          </p>

          <p className="article-paragraph">
            Si tu favorito ya fue registrado en tu juego, puedes consultar nuestra lista completa de{' '}
            <Link href="/nombres-para-juegos/nicks" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              nicks para juegos
            </Link>{' '}
            para encontrar variantes inteligentes con números o terminaciones sutiles.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 12. Nombres elegantes para juegos */}
        <section id="nombres-elegantes">
          <div className="article-category-pill">
            <Crown size={14} className="text-amber-400" aria-hidden="true" />
            <span>Distinción y Porte</span>
          </div>

          <h2 className="article-h2">
            Nombres elegantes para juegos
          </h2>

          <p className="article-paragraph">
            Para quienes buscan proyectar prestigio, los nombres elegantes emplean términos asociados a la realeza, la nobleza o el misticismo: <em>NovaElite, LunaRoyal, NexoLux, AuraPrime, ZenRoyal, NovaCrown</em>.
          </p>

          <p className="article-paragraph">
            Un detalle visual como una corona imperial (<span className="font-mono text-amber-300">♛ Nova ♛</span>) o corchetes refinados (<span className="font-mono text-amber-300">⟦ NovaLux ⟧</span>) eleva de inmediato la presencia de tu perfil.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 13. Nombres divertidos para juegos */}
        <section id="nombres-divertidos">
          <div className="article-category-pill">
            <Smile size={14} className="text-rose-400" aria-hidden="true" />
            <span>Humor y Amistad</span>
          </div>

          <h2 className="article-h2">
            Nombres divertidos para juegos
          </h2>

          <p className="article-paragraph">
            No todas las partidas tienen que ser tryhard. Si juegas para relajarte con tu grupo de amigos, un nombre con sentido del humor le quita tensión al juego y provoca risas en el lobby: <em>CasiPro, NoEraYo, PingAlto, ModoSiesta, PanConLag, CeroDrama, DonDespiste</em>.
          </p>

          <p className="article-paragraph">
            Además, suelen ser los nicks que los rivales recuerdan con mayor facilidad al terminar la ronda.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 14. Cómo crear un buen nombre para tu juego */}
        <section id="como-crear">
          <div className="article-category-pill">
            <Lightbulb size={14} className="text-amber-400" aria-hidden="true" />
            <span>Principios de Diseño</span>
          </div>

          <h2 className="article-h2">
            Cómo crear un buen nombre para tu juego
          </h2>

          <p className="article-paragraph">
            Un nick memorable no se elige al azar. Te recomendamos considerar estos cuatro factores antes de fijar tu decisión:
          </p>

          <div className="game-grid-2" style={{ margin: '1.5rem 0' }}>
            <div className="game-feature-box">
              <h3 className="game-feature-title">
                <CheckCircle2 size={16} color="#10B981" /> 1. Pronunciación sencilla
              </h3>
              <p className="game-feature-desc">
                Si juegas en equipo con chat de voz, tus compañeros deben poder llamarte en medio de una jugada rápida sin trabarse.
              </p>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title">
                <CheckCircle2 size={16} color="#10B981" /> 2. Coherencia con tu estilo
              </h3>
              <p className="game-feature-desc">
                Si eres francotirador, busca palabras ágiles como <em>Flash, Aim, Ghost</em>. Si juegas de tanque, prefiere <em>Titan, Golem,盾</em>.
              </p>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title">
                <CheckCircle2 size={16} color="#10B981" /> 3. Equilibrio visual
              </h3>
              <p className="game-feature-desc">
                Los marcos decorativos deben resaltar el nombre, no ahogarlo. Una decoración simple suele verse más profesional que diez símbolos juntos.
              </p>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title">
                <CheckCircle2 size={16} color="#10B981" /> 4. Identidad para tu clan
              </h3>
              <p className="game-feature-desc">
                Si buscas un nombre para tu escuadra, revisa nuestra sección de{' '}
                <Link href="/nombres-para-juegos/nombres-para-clanes" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                  nombres para clanes
                </Link>{' '}
                o explora apodos compartidos en{' '}
                <Link href="/nombres-para-juegos/apodos" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                  apodos para juegos
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* 15. Cómo personalizar un nombre gamer */}
        <section id="como-personalizar">
          <div className="article-category-pill">
            <Swords size={14} className="text-indigo-400" aria-hidden="true" />
            <span>Técnicas de Personalización</span>
          </div>

          <h2 className="article-h2">
            Cómo personalizar un nombre gamer
          </h2>

          <p className="article-paragraph">
            Cuando encuentras un estilo en el generador que te gusta, puedes darle tu toque final mediante tres métodos principales:
          </p>

          {/* Screenshot 2: Real Tool Results & Copying Action */}
          <figure className="article-figure">
            <div className="article-image-container">
              <Image
                src="/images/copiar-nombres-juegos-estilos.png"
                alt="Catálogo interactivo con estilos de nombres para juegos con coronas y corchetes con confirmación de copiado en 1 clic"
                width={1060}
                height={580}
                className="article-mockup-image"
                loading="lazy"
              />
            </div>
            <figcaption className="article-figcaption">
              <strong>Figura 2:</strong> Catálogo de estilos en vivo para nombres de juegos con botón de copiado instantáneo y confirmación visual al portapapeles.
            </figcaption>
          </figure>

          <ul style={{ fontSize: '0.9rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: '1.25rem 0', lineHeight: 1.7 }}>
            <li>
              <strong>Añadir un tag de equipo o clan:</strong> Puedes colocar un prefijo corto entre corchetes, por ejemplo <span className="font-mono text-indigo-300">[MX] Shadow</span> o <span className="font-mono text-indigo-300">『FF』Nova</span>.
            </li>
            <li>
              <strong>Cambiar a letras cursivas o góticas:</strong> Si deseas transformar toda tu frase o biografía, apóyate en nuestro{' '}
              <Link href="/conversor-de-letras" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                conversor de letras
              </Link>{' '}
              o en las opciones de{' '}
              <Link href="/letras-para-instagram/letras-para-nombres" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                letras para nombres
              </Link>.
            </li>
            <li>
              <strong>Combinar dos palabras clave:</strong> Une tu palabra favorita con otra complementaria (ej. <em>Nova + Zen = NovaZen</em>).
            </li>
          </ul>
        </section>

        <hr className="article-section-divider" />

        {/* 16. Símbolos y caracteres especiales */}
        <section id="simbolos-especiales">
          <div className="article-category-pill">
            <Star size={14} className="text-amber-400" aria-hidden="true" />
            <span>Símbolos Populares</span>
          </div>

          <h2 className="article-h2">
            Símbolos y caracteres especiales para juegos
          </h2>

          <p className="article-paragraph">
            Los símbolos más codiciados por la comunidad gamer incluyen la corona tailandesa (<span className="font-mono text-amber-300">亗</span>), las alas ornamentales (<span className="font-mono text-indigo-300">꧁ ꧂</span>), los corchetes dobles (<span className="font-mono text-indigo-300">『 』</span>), el rayo de energía (<span className="font-mono text-amber-300">⚡</span>) y la cruz de espadas (<span className="font-mono text-rose-300">乂</span>).
          </p>

          <p className="article-paragraph">
            Para títulos populares de disparos, consulta nuestra guía dedicada a los{' '}
            <Link href="/nombres-para-free-fire" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              nombres para Free Fire
            </Link>{' '}
            y explora el catálogo de{' '}
            <Link href="/nombres-para-free-fire/nombres" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
              nombres con símbolos para Free Fire
            </Link>.
          </p>
        </section>

        <hr className="article-section-divider" />

        {/* 17. Unicode y compatibilidad */}
        <section id="unicode-compatibilidad">
          <div className="article-category-pill">
            <ShieldAlert size={14} className="text-rose-400" aria-hidden="true" />
            <span>Soporte Técnico</span>
          </div>

          <h2 className="article-h2">
            Unicode y compatibilidad en videojuegos
          </h2>

          <p className="article-paragraph">
            Es fundamental aclarar un punto técnico importante: <strong>las letras bonitas que ves en este sitio no son fuentes tipográficas instaladas en tu celular o en tu juego</strong>, sino caracteres del estándar universal <strong>Unicode</strong>.
          </p>

          <InfoBox title="¿Por qué algunos juegos muestran recuadros vacíos (□)?">
            <p>
              Cuando un juego móvil o de PC no tiene incorporada la tipografía adecuada para dibujar un glifo Unicode específico, el sistema muestra un carácter de sustitución conocido como "tofu" o recuadro vacío.
            </p>
            <p className="mt-2">
              <strong>Recomendación clave:</strong> Siempre pega tu nick en el buscador interno o en el campo de prueba de tu juego antes de pagar diamantes, Riot Points o tarjetas de cambio de nombre oficiales.
            </p>
          </InfoBox>
        </section>

        <hr className="article-section-divider" />

        {/* 18. Errores comunes al elegir un nombre */}
        <section id="errores-comunes">
          <div className="article-category-pill">
            <ShieldAlert size={14} className="text-rose-400" aria-hidden="true" />
            <span>Consejos de Seguridad</span>
          </div>

          <h2 className="article-h2">
            Errores comunes al elegir un nombre para juegos
          </h2>

          <div className="game-grid-2" style={{ margin: '1.5rem 0' }}>
            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#FB7185' }}>
                <ShieldAlert size={16} color="#FB7185" /> Errores frecuentes:
              </h3>
              <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
                <li><strong>Saturar de símbolos:</strong> Hace que el nombre sea ilegible y difícil de buscar para tus amigos.</li>
                <li><strong>Exceder el límite de caracteres:</strong> La mayoría de los juegos permiten entre 12 y 16 caracteres máximos.</li>
                <li><strong>Copiar a creadores famosos:</strong> Te resta originalidad y puede generar confusiones.</li>
                <li><strong>No verificar la compatibilidad:</strong> Puede lucir bien en el navegador pero fallar en el motor del juego.</li>
              </ul>
            </div>

            <div className="game-feature-box">
              <h3 className="game-feature-title" style={{ color: '#34D399' }}>
                <CheckCircle2 size={16} color="#34D399" /> Buenas prácticas:
              </h3>
              <ul style={{ fontSize: '0.85rem', color: '#CBD5E1', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
                <li><strong>Probar en el lobby:</strong> Asegúrate de que tus amigos lean tu nombre sin problemas.</li>
                <li><strong>Mantener una base reconocible:</strong> Si cambias de juego, conserva tu raíz (ej. <em>Shadow</em>).</li>
                <li><strong>Guardar en favoritos:</strong> Usa la estrella de nuestra herramienta para no perder tus mejores opciones.</li>
                <li><strong>Elegir algo con significado:</strong> Tu apodo te acompañará durante cientos de horas de juego.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* 19. Related tools/pages */}
        <section id="explora-mas" style={{ padding: '1.75rem', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.5))', border: '1px solid rgba(99, 102, 241, 0.25)', margin: '2rem 0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="#818CF8" /> Explora más herramientas en Letras Bonitas
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '1.25rem' }}>
            Continúa navegando por nuestras secciones especializadas para personalizar tu presencia en juegos y redes sociales:
          </p>

          <div className="game-grid-2">
            <Link
              href="/nombres-para-juegos/nicks"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nicks para Juegos</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Ideas cortas →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/apodos"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Apodos para Juegos</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Variedad para todo jugador →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/nombres-para-clanes"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nombres para Clanes</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Para gremios y escuadras →</span>
            </Link>

            <Link
              href="/nombres-para-juegos/nombres-chidos"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nombres Chidos para Juegos</span>
              <span style={{ color: '#818CF8', fontSize: '0.78rem' }}>Gamer, aesthetic y más →</span>
            </Link>

            <Link
              href="/nombres-para-free-fire"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Nombres para Free Fire</span>
              <span style={{ color: '#F59E0B', fontSize: '0.78rem' }}>Símbolos y nicks insanos →</span>
            </Link>

            <Link
              href="/letras-para-instagram/letras-para-nombres"
              className="game-item-card"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Letras para Nombres</span>
              <span style={{ color: '#EC4899', fontSize: '0.78rem' }}>Transforma cualquier palabra →</span>
            </Link>

            <Link
              href="/conversor-de-letras"
              className="game-item-card"
              style={{ textDecoration: 'none', gridColumn: '1 / -1' }}
            >
              <span style={{ fontWeight: 600, color: '#F1F5F9', fontSize: '0.88rem' }}>Conversor de Letras Universal</span>
              <span style={{ color: '#38BDF8', fontSize: '0.78rem' }}>+350 estilos tipográficos Unicode en vivo →</span>
            </Link>
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* 20. FAQ Section */}
        <section id="preguntas-frecuentes">
          <div className="article-category-pill">
            <HelpCircle size={14} className="text-indigo-400" aria-hidden="true" />
            <span>Dudas Habituales</span>
          </div>

          <h2 className="article-h2">
            Preguntas frecuentes sobre nombres para juegos
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: '1.5rem 0' }}>
            {JUEGOS_FAQ_ITEMS.map((faq, index) => (
              <details
                key={index}
                className="game-feature-box"
                style={{ cursor: 'pointer' }}
              >
                <summary style={{ fontWeight: 700, color: '#FFF', fontSize: '0.92rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  <span>{faq.question}</span>
                  <ChevronRight size={16} color="#818CF8" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
                </summary>
                <p style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.65, margin: '0.75rem 0 0' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <hr className="article-section-divider" />

        {/* 21. Conclusion */}
        <section id="conclusion" style={{ margin: '2rem 0 4rem' }}>
          <div className="article-category-pill">
            <CheckCircle2 size={14} className="text-emerald-400" aria-hidden="true" />
            <span>Resumen Final</span>
          </div>

          <h2 className="article-h2">
            Conclusión
          </h2>

          <p className="article-paragraph">
            Elegir un buen nombre para juegos no tiene que ser una tarea complicada ni frustrante. Empieza con una palabra que te represente, experimenta con distintas categorías en el generador y encuentra la combinación exacta que encaje con tu estilo de juego.
          </p>

          <p className="article-paragraph">
            Ya sea que busques un apodo minimalista de pocas letras, una estética limpia o un marco decorado con coronas y alas, lo verdaderamente importante es que te sientas cómodo con tu identidad en cada partida.
          </p>

          <p className="article-paragraph" style={{ fontWeight: 700, color: '#FFF' }}>
            Sube al generador, escribe tu palabra o genera una opción aleatoria y copia tu nuevo nick gamer en segundos.
          </p>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              href="#generador-de-nombres"
              className="cp-copy-all-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontSize: '0.95rem',
                background: 'var(--gradient-brand)',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              <Gamepad2 size={18} />
              <span>Subir al Generador de Nombres</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
