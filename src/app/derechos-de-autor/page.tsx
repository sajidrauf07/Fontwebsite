import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_CONFIG } from '@/config/legal';

export const metadata: Metadata = {
  title: 'Política de Derechos de Autor y Propiedad Intelectual | Letras Bonitas',
  description: 'Conoce los derechos de autor de Letras Bonitas, el estatus público del estándar Unicode, el deslinde de marcas y el procedimiento formal para notificaciones de infracción en México.',
  alternates: {
    canonical: `${LEGAL_CONFIG.domain}/derechos-de-autor`,
  },
  openGraph: {
    title: 'Derechos de Autor | Letras Bonitas',
    description: 'Bases de propiedad intelectual, derechos de autor y procedimiento de notificaciones en Letras Bonitas.',
    url: `${LEGAL_CONFIG.domain}/derechos-de-autor`,
    siteName: LEGAL_CONFIG.siteName,
    locale: 'es_MX',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOC = [
  { id: 'marco-legal-indautor', title: '1. Marco Legal y Protección de Derechos de Autor' },
  { id: 'elementos-protegidos', title: '2. Contenidos Propios Protegidos por Derechos de Autor' },
  { id: 'estatus-unicode', title: '3. Estatus de los Caracteres y Símbolos Unicode' },
  { id: 'autoria-usuarios', title: '4. Autoría y Titularidad del Texto de los Usuarios' },
  { id: 'marcas-registradas', title: '5. Marcas Registradas de Terceros y Uso Nominativo' },
  { id: 'licencia-uso-personal', title: '6. Licencia de Uso Concedida al Visitante' },
  { id: 'procedimiento-reclamaciones', title: '7. Procedimiento para Notificaciones de Derechos de Autor' },
  { id: 'contacto-propiedad-intelectual', title: '8. Contacto Especializado en Propiedad Intelectual' },
];

export default function DerechosDeAutorPage() {
  return (
    <LegalLayout
      title="Política de Derechos de Autor y Propiedad Intelectual"
      badge="Propiedad Intelectual • INDAUTOR México"
      intro="En Letras Bonitas promovemos el respeto irrestricto a la creación intelectual, la originalidad y los derechos de autor. En esta política detallamos la titularidad de los elementos propios de nuestro sitio web, el carácter público del estándar internacional Unicode y los mecanismos de atención para cualquier reclamo relacionado con derechos protegidos."
      toc={TOC}
    >
      {/* 1. Marco Legal */}
      <section id="marco-legal-indautor" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">1.</span> Marco Legal y Protección de Derechos de Autor
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Esta política se fundamenta en las disposiciones de la <strong>Ley Federal del Derecho de Autor (LFDA)</strong> vigente en los Estados Unidos Mexicanos, bajo la supervisión del <strong>Instituto Nacional del Derecho de Autor (INDAUTOR)</strong>, así como en los tratados internacionales en la materia de los cuales México es parte signataria (incluyendo el Convenio de Berna para la Protección de las Obras Literarias y Artísticas).
          </p>
        </div>
      </section>

      {/* 2. Elementos Protegidos */}
      <section id="elementos-protegidos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">2.</span> Contenidos Propios Protegidos de {LEGAL_CONFIG.siteName}
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Son propiedad exclusiva de los desarrolladores y operadores de {LEGAL_CONFIG.siteName}, encontrándose protegidos contra reproducción o imitación no autorizada:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Diseño y arquitectura visual:</strong> La disposición estética, esquemas cromáticos, maquetación responsiva y experiencia de usuario (UI/UX).</li>
            <li><strong>Identidad gráfica y logotipos:</strong> El emblema monograma distintivo <em>TLB</em> y el imagotipo oficial de la marca.</li>
            <li><strong>Código fuente:</strong> La programación front-end desarrollada en React, Next.js y hojas de estilo CSS.</li>
            <li><strong>Textos editoriales:</strong> Guías pedagógicas, descripciones de uso, tablas de categorización y artículos explicativos originales publicados en el portal.</li>
          </ul>
        </div>
      </section>

      {/* 3. Unicode */}
      <section id="estatus-unicode" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">3.</span> Estatus de los Caracteres y Símbolos Unicode
        </h2>
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] mb-4">
          <p className="font-semibold text-[var(--text-primary)]">Aclaración fundamental sobre el estándar tipográfico:</p>
          <p className="leading-relaxed">
            {LEGAL_CONFIG.siteName} <strong>no reclama ni posee derechos de autor exclusivos</strong> sobre los caracteres, runas, símbolos matemáticos o glifos del estándar Unicode.
          </p>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Los bloques de caracteres alfanuméricos matemáticos, símbolos monetarios, flechas y alfabetos góticos están estandarizados universalmente por <em>The Unicode Consortium</em> para el libre intercambio informático a nivel mundial. Nuestra labor consiste en estructurar algoritmos y tablas de mapeo que facilitan al usuario la selección y combinación ágil de dichos caracteres.
          </p>
        </div>
      </section>

      {/* 4. Autoría de los Usuarios */}
      <section id="autoria-usuarios" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">4.</span> Autoría y Titularidad del Texto de los Usuarios
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Cuando utilizas nuestras herramientas para estilizar un poema, frase, apodo de juego, biografía de red social o eslogan creativo, <strong>tú conservas en todo momento la autoría y titularidad</strong> sobre el contenido original introducido.
          </p>
          <p>
            La transformación en glifos Unicode no transfiere ningún derecho moral ni patrimonial a Letras Bonitas. Eres libre de copiar, compartir, comercializar o registrar las frases y contenidos de tu propia creación.
          </p>
        </div>
      </section>

      {/* 5. Marcas Registradas de Terceros */}
      <section id="marcas-registradas" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">5.</span> Marcas Registradas de Terceros y Uso Nominativo
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Todas las marcas comerciales, logotipos, nombres de videojuegos (como Free Fire) y redes sociales (como Instagram, TikTok o WhatsApp) citados en este sitio web son propiedad exclusiva de sus respectivos titulares.
          </p>
          <p>
            Su mención se realiza en estricto apego a la figura legal de <em>uso nominativo leal</em>, cuyo único propósito es informar al público sobre la compatibilidad técnica del texto en dichas aplicaciones.
          </p>
        </div>
      </section>

      {/* 6. Licencia Concedida */}
      <section id="licencia-uso-personal" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">6.</span> Licencia de Uso Concedida al Visitante
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Se autoriza a cualquier usuario a navegar por el portal, utilizar los convertidores, copiar los textos generados y compartir enlaces al sitio. No se permite la copia íntegra del código fuente, el plagio de los artículos editoriales ni la reproducción total de la base de datos de estilos con fines de montar un servicio espejo sin consentimiento previo.
          </p>
        </div>
      </section>

      {/* 7. Procedimiento de Reclamaciones */}
      <section id="procedimiento-reclamaciones" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">7.</span> Procedimiento para Notificaciones de Derechos de Autor
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Si eres titular de derechos de autor o representas legalmente a uno, y consideras que algún elemento publicado en este sitio web vulnera tu propiedad intelectual, te invitamos a enviar una notificación formal que contenga:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Identificación de la obra protegida presuntamente infringida (o enlace oficial de acreditación).</li>
            <li>Ubicación exacta de la presunta infracción en nuestro sitio web (URL específica).</li>
            <li>Datos de contacto del reclamante (nombre completo, correo electrónico y representación acreditada).</li>
            <li>Declaración bajo protesta de decir verdad de que el reclamante actúa de buena fe y como titular legítimo o representante legal.</li>
          </ol>
          <p className="text-xs text-[var(--text-muted)] pt-1">
            Una vez recibida la notificación, nuestro equipo técnico y legal procederá a evaluar la solicitud y, de resultar fundada, retirará o modificará el contenido en cuestión de manera expedita.
          </p>
        </div>
      </section>

      {/* 8. Contacto Propiedad Intelectual */}
      <section id="contacto-propiedad-intelectual" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">8.</span> Contacto Especializado en Propiedad Intelectual
        </h2>
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-2">
          <p>
            Para el envío de notificaciones formales sobre derechos de autor, puedes comunicarte al canal designado:
          </p>
          <p>
            <a href={`mailto:${LEGAL_CONFIG.copyrightEmail}`} className="text-[var(--accent-primary)] font-semibold hover:underline">
              {LEGAL_CONFIG.copyrightEmail}
            </a>
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Asunto recomendado: &ldquo;Aviso de Propiedad Intelectual - [Nombre de la Obra/Titular]&rdquo;
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
