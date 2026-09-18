import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_CONFIG } from '@/config/legal';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | Letras Bonitas',
  description: 'Conoce los términos y condiciones de uso para Letras Bonitas. Información clara sobre el uso de herramientas de texto Unicode, licencias y responsabilidades en México.',
  alternates: {
    canonical: `${LEGAL_CONFIG.domain}/terminos-y-condiciones`,
  },
  openGraph: {
    title: 'Términos y Condiciones | Letras Bonitas',
    description: 'Bases y condiciones de uso de las herramientas de estilo y texto Unicode en Letras Bonitas.',
    url: `${LEGAL_CONFIG.domain}/terminos-y-condiciones`,
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
  { id: 'aceptacion-terminos', title: '1. Aceptación de los Términos' },
  { id: 'descripcion-servicio', title: '2. Descripción del Servicio y Herramientas' },
  { id: 'uso-permitido', title: '3. Uso Permitido y Licencia de Uso' },
  { id: 'usos-prohibidos', title: '4. Conductas y Usos Prohibidos' },
  { id: 'estandar-unicode', title: '5. Estándar Unicode y Compatibilidad de Dispositivos' },
  { id: 'propiedad-intelectual', title: '6. Propiedad Intelectual y Marcas' },
  { id: 'plataformas-terceros', title: '7. Desvinculación de Plataformas de Terceros' },
  { id: 'disponibilidad-garantias', title: '8. Disponibilidad del Servicio y Exclusión de Garantías' },
  { id: 'limitacion-responsabilidad', title: '9. Limitación de Responsabilidad' },
  { id: 'enlaces-externos', title: '10. Enlaces a Sitios Externos' },
  { id: 'ley-aplicable', title: '11. Legislación Aplicable y Jurisdicción' },
  { id: 'contacto-terminos', title: '12. Dudas y Contacto' },
];

export default function TerminosYCondicionesPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones de Uso"
      badge="Condiciones Generales de Servicio"
      intro="Bienvenido a Letras Bonitas. Las presentes Condiciones Generales de Uso regulan el acceso, navegación y utilización de nuestro sitio web y sus generadores tipográficos basados en Unicode. Al ingresar y utilizar esta plataforma, aceptas cumplir íntegramente con estos términos."
      toc={TOC}
    >
      {/* 1. Aceptación */}
      <section id="aceptacion-terminos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">1.</span> Aceptación de los Términos
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            El acceso y la navegación en{' '}
            <Link href="/" className="text-[var(--accent-primary)] font-semibold hover:underline">
              {LEGAL_CONFIG.cleanDomain}
            </Link>{' '}
            atribuyen la condición de usuario e implican la aceptación plena de todas las disposiciones incluidas en estos Términos y Condiciones, así como en nuestra{' '}
            <Link href="/politica-de-privacidad" className="text-[var(--accent-primary)] hover:underline font-medium">
              Política de Privacidad
            </Link>
            . Si no estás de acuerdo con cualquiera de estas cláusulas, te solicitamos abstenerte de utilizar el sitio.
          </p>
        </div>
      </section>

      {/* 2. Descripción */}
      <section id="descripcion-servicio" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">2.</span> Descripción del Servicio y Herramientas
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            <strong>{LEGAL_CONFIG.siteName}</strong> proporciona utilidades web gratuitas diseñadas para la transformación estética de cadenas de texto alfanuméricas mediante la sustitución por caracteres especiales y símbolos estandarizados en el consorcio internacional <em>Unicode</em>.
          </p>
          <p>
            El servicio se ofrece de manera abierta y sin requerimiento de registro ni suscripción de pago. Todas las conversiones son ejecutadas en tiempo real de forma local en el navegador del usuario.
          </p>
        </div>
      </section>

      {/* 3. Uso Permitido */}
      <section id="uso-permitido" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">3.</span> Uso Permitido y Licencia de Uso
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Se concede al usuario una licencia gratuita, no exclusiva y revocable para utilizar las herramientas del sitio con las siguientes finalidades legítimas:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Creación de nombres artísticos, apodos y nicks para perfiles de redes sociales y videojuegos.</li>
            <li>Personalización de biografías (Instagram, TikTok, Twitter/X, Discord, WhatsApp).</li>
            <li>Generación de títulos decorativos, citas y contenidos creativos personales o comerciales.</li>
            <li>Copiado y pegado libre de los textos convertidos generados por la plataforma.</li>
          </ul>
        </div>
      </section>

      {/* 4. Prohibiciones */}
      <section id="usos-prohibidos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">4.</span> Conductas y Usos Prohibidos
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>Queda estrictamente prohibido:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Utilizar las herramientas para generar o difundir contenidos que inciten al odio, la violencia, la discriminación o que vulneren derechos de terceros o leyes de México.</li>
            <li>Ejecutar ataques de denegación de servicio (DDoS), inyección de código malicioso o intentos de vulnerar la infraestructura del servidor.</li>
            <li>Emplear bots o sistemas automatizados de extracción masiva (scraping no autorizado) que degraden el rendimiento de la plataforma para otros usuarios.</li>
            <li>Suplantar la identidad de personas u organizaciones mediante textos engañosos.</li>
          </ul>
        </div>
      </section>

      {/* 5. Estándar Unicode */}
      <section id="estandar-unicode" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">5.</span> Estándar Unicode y Compatibilidad de Dispositivos
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Los estilos generados no son fuentes descargables (como archivos .ttf o .otf), sino secuencias de caracteres que forman parte del mapa Unicode. Por consiguiente:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Variabilidad gráfica:</strong> La apariencia exacta de un símbolo o letra puede variar ligeramente según la versión de Android, iOS, Windows o macOS utilizada por quien visualiza el texto.</li>
            <li><strong>Símbolos no soportados:</strong> En dispositivos o sistemas operativos antiguos, algunos caracteres pueden mostrarse como rectángulos vacíos o signos de interrogación (denominados comúnmente <em>tofu</em>).</li>
            <li><strong>Filtros de plataformas externas:</strong> Ciertas redes sociales o juegos pueden restringir el uso de símbolos específicos en nombres de usuario para prevenir abusos. No garantizamos que todo símbolo sea aceptado por plataformas terceras.</li>
          </ul>
        </div>
      </section>

      {/* 6. Propiedad Intelectual */}
      <section id="propiedad-intelectual" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">6.</span> Propiedad Intelectual y Marcas
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            El diseño web, interfaz gráfica, código fuente, logotipos (incluyendo el distintivo monograma TLB), artículos editoriales y elementos distintivos de {LEGAL_CONFIG.siteName} son propiedad exclusiva de sus creadores y están protegidos por la Ley Federal del Derecho de Autor y la Ley de la Propiedad Industrial de México.
          </p>
          <p>
            Los caracteres Unicode en sí mismos pertenecen al dominio público y son regulados por <em>The Unicode Consortium</em>. Para mayor información, consulta nuestra{' '}
            <Link href="/derechos-de-autor" className="text-[var(--accent-primary)] font-semibold hover:underline">
              Política de Derechos de Autor
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7. Desvinculación de Terceros */}
      <section id="plataformas-terceros" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">7.</span> Desvinculación de Plataformas de Terceros
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Las referencias a marcas como <em>Instagram, TikTok, Free Fire, WhatsApp, Facebook o Twitter/X</em> se realizan con fines meramente descriptivos e informativos para orientar a los usuarios sobre los usos habituales de los caracteres de texto.
          </p>
          <p>
            {LEGAL_CONFIG.siteName} es un portal completamente independiente y no cuenta con afiliación, patrocinio ni respaldo de Garena International, Meta Platforms Inc., ByteDance Ltd., ni ninguna otra compañía propietaria de dichas marcas.
          </p>
        </div>
      </section>

      {/* 8. Disponibilidad */}
      <section id="disponibilidad-garantias" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">8.</span> Disponibilidad del Servicio y Exclusión de Garantías
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            El servicio se brinda &ldquo;tal cual&rdquo; (<em>as is</em>) y según disponibilidad técnica. Si bien empleamos altos estándares técnicos para asegurar la continuidad operativa, no garantizamos que el sitio esté libre de interrupciones imprevistas por mantenimiento de servidores, fallos de proveedores de red o eventos de fuerza mayor.
          </p>
        </div>
      </section>

      {/* 9. Limitación */}
      <section id="limitacion-responsabilidad" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">9.</span> Limitación de Responsabilidad
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            En la máxima medida permitida por las leyes aplicables de México, {LEGAL_CONFIG.siteName} no asume responsabilidad por:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>El uso que los usuarios den a los textos, nombres o frases generadas.</li>
            <li>Sanciones, bloqueos de apodos o restricciones impuestas por videojuegos o redes sociales externas.</li>
            <li>Pérdida temporal de acceso derivada de problemas en el proveedor de internet del usuario.</li>
          </ul>
        </div>
      </section>

      {/* 10. Enlaces Externos */}
      <section id="enlaces-externos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">10.</span> Enlaces a Sitios de Terceros
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            El sitio puede contener enlaces a portales web operados por terceros (como redes sociales o fuentes tipográficas externas). Dichos enlaces se facilitan para comodidad del usuario. No ejercemos control ni nos responsabilizamos por los contenidos o políticas de privacidad de dichos sitios ajenos.
          </p>
        </div>
      </section>

      {/* 11. Ley Aplicable */}
      <section id="ley-aplicable" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">11.</span> Legislación Aplicable y Jurisdicción
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Las presentes Condiciones Generales de Uso se rigen e interpretan con apego a las leyes vigentes de los <strong>Estados Unidos Mexicanos</strong>, en particular por el Código de Comercio, el Código Civil Federal y la Ley Federal de Protección al Consumidor. Para cualquier controversia, las partes se someten a los mecanismos de resolución pacífica o a los tribunales competentes de México.
          </p>
        </div>
      </section>

      {/* 12. Contacto */}
      <section id="contacto-terminos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">12.</span> Dudas y Contacto
        </h2>
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-2">
          <p>
            Para consultas relacionadas con estos Términos y Condiciones, puedes escribirnos al correo oficial:
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
