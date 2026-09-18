import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_CONFIG } from '@/config/legal';
import CookiePreferencesButton from '@/components/legal/CookiePreferencesButton';

export const metadata: Metadata = {
  title: 'Política de Cookies y Almacenamiento Local | Letras Bonitas',
  description: 'Descubre qué cookies y tecnologías de almacenamiento local utilizamos en Letras Bonitas, para qué sirven y cómo configurar o revocar tu consentimiento en cualquier momento.',
  alternates: {
    canonical: `${LEGAL_CONFIG.domain}/politica-de-cookies`,
  },
  openGraph: {
    title: 'Política de Cookies | Letras Bonitas',
    description: 'Transparencia total sobre el uso de cookies y almacenamiento web en Letras Bonitas.',
    url: `${LEGAL_CONFIG.domain}/politica-de-cookies`,
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
  { id: 'que-son-las-cookies', title: '1. ¿Qué son las Cookies y el Almacenamiento Local?' },
  { id: 'finalidad-cookies', title: '2. ¿Por qué Utilizamos estas Tecnologías?' },
  { id: 'tabla-tecnologias', title: '3. Detalle Técnico de Cookies y Claves Utilizadas' },
  { id: 'categorias-consentimiento', title: '4. Categorías de Consentimiento' },
  { id: 'gestion-consentimiento', title: '5. Cómo Modificar tus Preferencias en este Sitio' },
  { id: 'desactivacion-navegadores', title: '6. Cómo Desactivar Cookies en tu Navegador' },
  { id: 'actualizaciones-politica', title: '7. Modificaciones a la Política' },
  { id: 'contacto-cookies', title: '8. Dudas sobre Cookies' },
];

export default function PoliticaDeCookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies y Almacenamiento Web"
      badge="Transparencia Tecnológica • Cookies y Web Storage"
      intro="En Letras Bonitas creemos en la transparencia absoluta sobre las tecnologías digitales que interactúan con tu navegador. En este documento te explicamos detalladamente qué datos técnicos se almacenan localmente, su propósito y cómo puedes gestionarlos o eliminarlos en cualquier momento."
      toc={TOC}
    >
      {/* 1. Qué son */}
      <section id="que-son-las-cookies" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">1.</span> ¿Qué son las Cookies y el Almacenamiento Local?
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Las <strong>cookies</strong> son pequeños archivos de texto que los sitios web descargan en tu navegador cuando visitas sus páginas. Permiten que el servidor recuerde información sobre tu visita anterior.
          </p>
          <p>
            Además de las cookies tradicionales, las aplicaciones web modernas como Letras Bonitas utilizan la tecnología <strong>Web Storage (localStorage)</strong>. El almacenamiento local reside de forma segura y privada en tu propio dispositivo y permite guardar configuraciones inmediatas sin necesidad de enviar peticiones continuas a un servidor remoto, mejorando sustancialmente la velocidad de carga.
          </p>
        </div>
      </section>

      {/* 2. Por qué */}
      <section id="finalidad-cookies" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">2.</span> ¿Por qué Utilizamos estas Tecnologías?
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>Utilizamos estas tecnologías técnicas para fines legítimos de funcionamiento:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Mantener tu modo de visualización:</strong> Si eliges modo oscuro o claro, tu preferencia se conserva en tus siguientes visitas.</li>
            <li><strong>Recordar tus estilos tipográficos preferidos:</strong> Al hacer clic en el ícono de estrella o favorito de una fuente generada, esta se guarda en tu dispositivo.</li>
            <li><strong>Registrar tus preferencias de privacidad:</strong> Para respetar tus decisiones y no mostrarte banners molestos en cada recarga de página.</li>
          </ul>
        </div>
      </section>

      {/* 3. Tabla técnica */}
      <section id="tabla-tecnologias" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">3.</span> Detalle Técnico de Cookies y Claves Utilizadas en el Código
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-primary)] mb-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] text-[var(--text-primary)] font-semibold">
                <th className="p-3">Nombre / Clave</th>
                <th className="p-3">Tecnología</th>
                <th className="p-3">Tipo / Clasificación</th>
                <th className="p-3">Finalidad</th>
                <th className="p-3">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-primary)] text-[var(--text-secondary)]">
              <tr className="hover:bg-[var(--bg-card)]">
                <td className="p-3 font-mono font-medium text-[var(--text-primary)]">theme</td>
                <td className="p-3">localStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">Técnica / Necesaria</span></td>
                <td className="p-3">Guarda la preferencia visual activa del usuario (modo oscuro o modo claro).</td>
                <td className="p-3">Persistente localmente</td>
              </tr>
              <tr className="hover:bg-[var(--bg-card)]">
                <td className="p-3 font-mono font-medium text-[var(--text-primary)]">lb_cookie_consent</td>
                <td className="p-3">localStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">Técnica / Necesaria</span></td>
                <td className="p-3">Almacena el estado de consentimiento seleccionado por el usuario en el banner legal.</td>
                <td className="p-3">Persistente localmente</td>
              </tr>
              <tr className="hover:bg-[var(--bg-card)]">
                <td className="p-3 font-mono font-medium text-[var(--text-primary)]">lb_converter_favorites</td>
                <td className="p-3">localStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold">Preferencia</span></td>
                <td className="p-3">Permite listar en la parte superior las fuentes y símbolos marcados como favoritos por el usuario.</td>
                <td className="p-3">Persistente localmente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Categorías */}
      <section id="categorias-consentimiento" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">4.</span> Categorías de Consentimiento
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Cookies Técnicas (Obligatorias)
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              No requieren consentimiento previo al ser imprescindibles para la prestación del servicio que solicitas expresamente al entrar al sitio.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              Cookies de Preferencias (Opcionales)
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Recuerdan elementos como tus fuentes guardadas. Puedes habilitarlas o deshabilitarlas en cualquier momento.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Analítica Web (Opcional bajo consentimiento)
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              En caso de utilizar herramientas analíticas, se ejecutan de forma anónima y solo cuando otorgas tu consentimiento expreso.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              Publicidad (Opcional bajo consentimiento)
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Espacios publicitarios que ayudan a financiar el mantenimiento de los servidores para mantener la herramienta gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Centro de Preferencias Interactivo */}
      <section id="gestion-consentimiento" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">5.</span> Cómo Modificar tus Preferencias en este Sitio
        </h2>
        <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/30 to-indigo-950/30 border border-violet-500/30 space-y-3">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Puedes abrir nuestro panel interactivo en cualquier instante para revisar, autorizar o revocar las categorías de tecnologías no esenciales:
          </p>
          <div className="pt-1">
            <CookiePreferencesButton label="Abrir Centro de Preferencias de Cookies" />
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            También puedes acceder a este panel haciendo clic en el enlace permanente &ldquo;Configuración de cookies&rdquo; situado en el pie de página de todo el sitio web.
          </p>
        </div>
      </section>

      {/* 6. Navegadores */}
      <section id="desactivacion-navegadores" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">6.</span> Cómo Desactivar o Eliminar Cookies desde tu Navegador
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Además de nuestros controles, puedes restringir, bloquear o borrar las cookies de cualquier sitio web modificando la configuración de tu navegador de internet:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li><strong>Google Chrome:</strong> Menú &gt; Configuración &gt; Privacidad y seguridad &gt; Cookies de terceros.</li>
            <li><strong>Apple Safari (iOS / macOS):</strong> Ajustes &gt; Safari &gt; Avanzado &gt; Bloquear todas las cookies o Privacidad.</li>
            <li><strong>Mozilla Firefox:</strong> Menú &gt; Ajustes &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.</li>
            <li><strong>Microsoft Edge:</strong> Menú &gt; Configuración &gt; Cookies y permisos del sitio.</li>
          </ul>
        </div>
      </section>

      {/* 7. Actualizaciones */}
      <section id="actualizaciones-politica" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">7.</span> Modificaciones a la Política de Cookies
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Esta política puede actualizarse para reflejar nuevas incorporaciones técnicas, servicios o cambios normativos en México. Te recomendamos consultarla periódicamente.
          </p>
        </div>
      </section>

      {/* 8. Contacto */}
      <section id="contacto-cookies" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">8.</span> Dudas sobre Cookies
        </h2>
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-2">
          <p>
            Si tienes dudas sobre nuestras prácticas relativas a cookies y almacenamiento local, contáctanos en:
          </p>
          <p>
            <a href={`mailto:${LEGAL_CONFIG.contactEmail}`} className="text-[var(--accent-primary)] font-semibold hover:underline">
              {LEGAL_CONFIG.contactEmail}
            </a>
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
