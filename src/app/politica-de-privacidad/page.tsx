import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_CONFIG } from '@/config/legal';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Letras Bonitas México',
  description: 'Conoce cómo tratamos tus datos personales, nuestra estricta política de procesamiento de texto local en el navegador y el ejercicio de derechos ARCO conforme a la LFPDPPP en México.',
  alternates: {
    canonical: `${LEGAL_CONFIG.domain}/politica-de-privacidad`,
  },
  openGraph: {
    title: 'Política de Privacidad | Letras Bonitas',
    description: 'Aviso de privacidad transparente sobre el tratamiento de datos y herramientas de texto en Letras Bonitas.',
    url: `${LEGAL_CONFIG.domain}/politica-de-privacidad`,
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
  { id: 'responsable-identidad', title: '1. Identidad y Domicilio del Responsable' },
  { id: 'procesamiento-texto-usuario', title: '2. Procesamiento de Texto de los Usuarios (Local)' },
  { id: 'datos-recopilados', title: '3. Datos Personales que se Recaban' },
  { id: 'finalidades-tratamiento', title: '4. Finalidades del Tratamiento' },
  { id: 'tecnologias-almacenamiento', title: '5. Almacenamiento Local y Cookies' },
  { id: 'servicios-terceros', title: '6. Proveedores y Servicios de Terceros' },
  { id: 'derechos-arco', title: '7. Ejercicio de Derechos ARCO' },
  { id: 'seguridad-datos', title: '8. Medidas de Seguridad de la Información' },
  { id: 'proteccion-menores', title: '9. Protección de Datos de Menores' },
  { id: 'modificaciones-aviso', title: '10. Actualizaciones a este Aviso' },
  { id: 'contacto-privacidad', title: '11. Canal Oficial de Privacidad' },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad y Aviso de Privacidad Integral"
      badge="Aviso de Privacidad • LFPDPPP México"
      intro="En Letras Bonitas la protección de tu información y la transparencia son pilares fundamentales. En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de los Estados Unidos Mexicanos y las directrices del INAI, ponemos a tu disposición este Aviso de Privacidad donde explicamos de manera clara y directa cómo protegemos tu privacidad y cómo funciona nuestra plataforma."
      toc={TOC}
    >
      {/* 1. Responsable */}
      <section id="responsable-identidad" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">1.</span> Identidad y Domicilio del Responsable
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            El portal digital <strong>{LEGAL_CONFIG.siteName}</strong>, accesible a través del dominio web oficial{' '}
            <Link href="/" className="text-[var(--accent-primary)] hover:underline font-medium">
              {LEGAL_CONFIG.cleanDomain}
            </Link>
            , es un servicio digital enfocado en la generación, conversión y estilización de textos mediante símbolos del estándar internacional Unicode.
          </p>
          <p>
            Para los efectos del presente Aviso de Privacidad y en estricto apego a la legislación mexicana en materia de protección de datos personales, el responsable operativo pone a disposición de cualquier usuario el correo de atención especializado:{' '}
            <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="text-[var(--accent-primary)] font-semibold hover:underline">
              {LEGAL_CONFIG.privacyEmail}
            </a>
            .
          </p>
        </div>
      </section>

      {/* 2. Procesamiento de Texto de los Usuarios */}
      <section id="procesamiento-texto-usuario" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">2.</span> Tratamiento del Texto Ingresado por los Usuarios (Procesamiento Local)
        </h2>
        <div className="p-4 sm:p-5 rounded-xl bg-violet-500/10 border border-violet-500/25 mb-4 text-xs sm:text-sm text-[var(--text-primary)]">
          <div className="flex items-center gap-2 font-bold text-violet-400 mb-1.5">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Verificación Técnica y Garantía de Privacidad en el Navegador</span>
          </div>
          <p className="leading-relaxed text-[var(--text-secondary)]">
            Todo texto, apodo, frase o contenido que ingresas en los campos de conversión (como el conversor de letras cursivas, letras para Instagram o nombres para Free Fire) es transformado <strong>exclusivamente en el navegador de tu propio dispositivo</strong> mediante scripts de JavaScript y tablas de mapeo Unicode.
          </p>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>En apego a la realidad técnica de nuestra plataforma declaramos explícitamente:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>No se transmite a servidores:</strong> El contenido que escribes para generar tipografías no viaja a través de internet hacia servidores remotos de Letras Bonitas.</li>
            <li><strong>No se almacena en bases de datos:</strong> No contamos con bases de datos destinadas a registrar, compilar, analizar ni almacenar el texto introducido en las herramientas de conversión.</li>
            <li><strong>No se vincula a perfiles:</strong> No requerimos inicio de sesión ni creación de cuentas, por lo que ningún texto generado está asociado a una identidad individual.</li>
            <li><strong>Privacidad de copiado:</strong> La función de copia al portapapeles hace uso directo de las APIs nativas del navegador (Clipboard API) sin intermediación de nuestros servidores.</li>
          </ul>
        </div>
      </section>

      {/* 3. Datos Personales que se Recaban */}
      <section id="datos-recopilados" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">3.</span> Datos Personales que se Recaban
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            {LEGAL_CONFIG.siteName} opera bajo el principio de minimización de datos. No solicitamos datos personales sensibles (como origen étnico, estado de salud, ideología política ni creencias religiosas).
          </p>
          <h3 className="text-base font-semibold text-[var(--text-primary)] pt-2">A. Información que proporcionas voluntariamente</h3>
          <p>
            Únicamente si decides ponerte en contacto con nosotros a través de nuestro formulario o correo electrónico oficial, podremos recibir tu nombre y correo electrónico con el único propósito de responder a tu solicitud o petición de derechos ARCO.
          </p>
          <h3 className="text-base font-semibold text-[var(--text-primary)] pt-2">B. Información técnica y de navegación recopilada automáticamente</h3>
          <p>
            Al navegar en cualquier sitio web en internet, la infraestructura de alojamiento genera registros técnicos estándar (server logs) que pueden incluir:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Dirección IP pública aproximada (utilizada para enrutamiento de red y mitigación de ataques cibernéticos).</li>
            <li>Tipo y versión de navegador web y sistema operativo (User-Agent).</li>
            <li>Páginas visitadas, fecha y hora de la solicitud.</li>
            <li>Resolución de pantalla y preferencias de idioma del navegador.</li>
          </ul>
          <p className="text-xs text-[var(--text-muted)]">
            Estos registros técnicos son tratados de forma disociada para fines de seguridad operativa y prevención de fraudes o ataques de denegación de servicio (DDoS).
          </p>
        </div>
      </section>

      {/* 4. Finalidades del Tratamiento */}
      <section id="finalidades-tratamiento" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">4.</span> Finalidades del Tratamiento
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>Tratamos la información técnica estrictamente para las siguientes finalidades:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
              <h4 className="font-semibold text-xs text-[var(--text-primary)] mb-1">Finalidades Primarias</h4>
              <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-4">
                <li>Garantizar el correcto funcionamiento de las herramientas web.</li>
                <li>Preservar la seguridad, estabilidad y disponibilidad del servidor.</li>
                <li>Atender dudas, solicitudes de soporte y derechos ARCO.</li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
              <h4 className="font-semibold text-xs text-[var(--text-primary)] mb-1">Finalidades Secundarias (Consentimiento)</h4>
              <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-4">
                <li>Medición estadística anónima del tráfico web para optimización.</li>
                <li>Recordar preferencias de interfaz (modo oscuro / estilos favoritos).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Almacenamiento Local y Cookies */}
      <section id="tecnologias-almacenamiento" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">5.</span> Tecnologías de Almacenamiento Local y Cookies
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Utilizamos tecnologías de almacenamiento local en el navegador (Web Storage API / localStorage) para mejorar tu experiencia interactiva:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Clave `theme`:</strong> Almacena tu preferencia visual entre modo oscuro y modo claro.</li>
            <li><strong>Claves de favoritos (`lb_converter_favorites`):</strong> Permiten que los estilos tipográficos que marques con estrella se mantengan disponibles en tus visitas posteriores en ese mismo dispositivo.</li>
            <li><strong>Clave `lb_cookie_consent`:</strong> Guarda tus decisiones respecto al panel de preferencias de privacidad.</li>
          </ul>
          <p>
            Para mayor detalle sobre cómo gestionar o desactivar estas opciones, consulta nuestra{' '}
            <Link href="/politica-de-cookies" className="text-[var(--accent-primary)] font-semibold hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 6. Proveedores y Terceros */}
      <section id="servicios-terceros" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">6.</span> Proveedores de Infraestructura y Servicios de Terceros
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Para mantener el sitio disponible las 24 horas y con tiempos de respuesta ultrarrápidos, nos apoyamos en proveedores de infraestructura tecnológica de nivel internacional (como redes de distribución de contenido - CDN y servidores de alojamiento en la nube).
          </p>
          <p>
            En caso de incorporar herramientas analíticas (como Google Analytics) o redes de publicidad programática (como Google AdSense), estas operan sujetas a sus propias políticas de privacidad y a tus elecciones en nuestro Centro de Preferencias de Cookies. No vendemos, comercializamos ni alquilamos tus datos personales a terceras partes.
          </p>
        </div>
      </section>

      {/* 7. Derechos ARCO */}
      <section id="derechos-arco" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">7.</span> Ejercicio de Derechos ARCO (México)
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Conforme a la <strong>LFPDPPP</strong> y la normativa del <strong>INAI</strong>, tienes derecho en todo momento a ejercer tus derechos de:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <strong className="text-[var(--text-primary)] block mb-1">Acceso:</strong>
              <span>Conocer qué datos personales tenemos registrados y las condiciones de su tratamiento.</span>
            </div>
            <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <strong className="text-[var(--text-primary)] block mb-1">Rectificación:</strong>
              <span>Solicitar la corrección de tu información si está desactualizada, es inexacta o incompleta.</span>
            </div>
            <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <strong className="text-[var(--text-primary)] block mb-1">Cancelación:</strong>
              <span>Pedir que eliminemos tus datos de nuestros registros cuando consideres que no se usan conforme a la ley.</span>
            </div>
            <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <strong className="text-[var(--text-primary)] block mb-1">Oposición:</strong>
              <span>Oponerte al uso de tus datos personales para finalidades específicas.</span>
            </div>
          </div>
          <p className="pt-2 text-xs sm:text-sm">
            Para ejercer cualquiera de estos derechos, basta con enviar una solicitud formal por escrito al correo electrónico{' '}
            <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="text-[var(--accent-primary)] font-semibold hover:underline">
              {LEGAL_CONFIG.privacyEmail}
            </a>{' '}
            indicando tu nombre, descripción clara de la solicitud y medio de contacto. Daremos respuesta en un plazo no mayor a 20 días hábiles conforme a los plazos legales establecidos en México.
          </p>
        </div>
      </section>

      {/* 8. Seguridad */}
      <section id="seguridad-datos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">8.</span> Medidas de Seguridad de la Información
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Implementamos protocolos de seguridad técnica y administrativa para proteger la navegación en nuestro portal, incluyendo cifrado de extremo a extremo mediante certificados SSL/TLS (HTTPS) para salvaguardar la integridad de las comunicaciones web.
          </p>
        </div>
      </section>

      {/* 9. Menores */}
      <section id="proteccion-menores" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">9.</span> Protección de Menores
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            {LEGAL_CONFIG.siteName} es un portal de herramientas tipográficas de acceso libre para todo público. No solicitamos ni recopilamos deliberadamente datos de identificación personal de niñas, niños o adolescentes menores de edad. Si un padre, madre o tutor legal detecta que un menor ha enviado datos de contacto involuntariamente, puede solicitar su eliminación inmediata mediante nuestro canal de privacidad.
          </p>
        </div>
      </section>

      {/* 10. Modificaciones */}
      <section id="modificaciones-aviso" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">10.</span> Actualizaciones al Aviso de Privacidad
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Nos reservamos el derecho de actualizar este Aviso de Privacidad para adaptarlo a cambios legislativos, jurisprudenciales o modificaciones técnicas en nuestras herramientas. Toda modificación será publicada de forma visible en esta misma página web con la indicación de la fecha de última actualización.
          </p>
        </div>
      </section>

      {/* 11. Contacto */}
      <section id="contacto-privacidad" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">11.</span> Canal Oficial de Privacidad
        </h2>
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
          <p>
            Para dudas sobre este aviso, solicitudes ARCO o temas de privacidad digital, puedes comunicarte directamente con nosotros:
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-medium text-[var(--text-primary)] pt-1">
            <div>
              <span className="text-[var(--text-muted)] block text-xs">Correo Electrónico:</span>
              <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="text-[var(--accent-primary)] hover:underline">
                {LEGAL_CONFIG.privacyEmail}
              </a>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-xs">Formulario en Línea:</span>
              <Link href="/contacto" className="text-[var(--accent-primary)] hover:underline">
                Sección de Contacto y Solicitudes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
