import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_CONFIG } from '@/config/legal';

export const metadata: Metadata = {
  title: 'Aviso Legal y Descargo de Responsabilidad | Letras Bonitas',
  description: 'Descargo de responsabilidad y aviso legal de Letras Bonitas. Información sobre el estándar Unicode, compatibilidad de dispositivos y desvinculación de marcas registradas.',
  alternates: {
    canonical: `${LEGAL_CONFIG.domain}/aviso-legal`,
  },
  openGraph: {
    title: 'Aviso Legal | Letras Bonitas',
    description: 'Descargo de responsabilidad sobre herramientas de texto y marcas en Letras Bonitas.',
    url: `${LEGAL_CONFIG.domain}/aviso-legal`,
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
  { id: 'objeto-sitio', title: '1. Objeto y Naturaleza del Sitio Web' },
  { id: 'estandar-unicode', title: '2. Características del Estándar Unicode' },
  { id: 'compatibilidad-dispositivos', title: '3. Compatibilidad y Variabilidad entre Dispositivos' },
  { id: 'marcas-terceros', title: '4. Deslinde de Marcas Registradas y Terceros' },
  { id: 'politicas-plataformas', title: '5. Políticas de Plataformas y Redes Sociales' },
  { id: 'exclusion-garantias', title: '6. Exclusión de Garantías en Resultados' },
  { id: 'responsabilidad-usuario', title: '7. Responsabilidad del Usuario' },
  { id: 'enlaces-terceros', title: '8. Enlaces a Sitios Externos' },
  { id: 'contacto-aviso-legal', title: '9. Contacto y Consultas' },
];

export default function AvisoLegalPage() {
  return (
    <LegalLayout
      title="Aviso Legal y Descargo de Responsabilidad"
      badge="Descargo de Responsabilidad • Transparencia"
      intro="Este documento establece los términos de uso informativo, los límites técnicos de las herramientas de estilo tipográfico y la completa independencia de Letras Bonitas respecto a marcas y plataformas de terceros como Free Fire o Instagram."
      toc={TOC}
    >
      {/* 1. Objeto */}
      <section id="objeto-sitio" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">1.</span> Objeto y Naturaleza del Sitio Web
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            <strong>{LEGAL_CONFIG.siteName}</strong> ({LEGAL_CONFIG.cleanDomain}) es una plataforma digital de libre acceso que ofrece utilidades de formato y transformación estética de texto para usuarios de habla hispana, especialmente en México y América Latina.
          </p>
          <p>
            Los generadores ofrecidos funcionan reemplazando caracteres tipográficos estándar por caracteres especiales pertenecientes al estándar internacional Unicode. El servicio tiene fines recreativos, artísticos y de diseño personal.
          </p>
        </div>
      </section>

      {/* 2. Unicode */}
      <section id="estandar-unicode" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">2.</span> Características del Estándar Unicode
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Las letras y símbolos decorativos que genera este sitio no son fuentes descargables de computadora (no son archivos .ttf ni .woff), sino <strong>caracteres codificados internacionalmente</strong> que están predefinidos en la tabla universal de Unicode.
          </p>
          <p>
            Esto significa que cuando copias un texto decorado desde nuestro conversor y lo pegas en un mensaje, estás copiando símbolos de texto reales que cualquier sistema compatible puede interpretar.
          </p>
        </div>
      </section>

      {/* 3. Compatibilidad */}
      <section id="compatibilidad-dispositivos" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">3.</span> Compatibilidad y Variabilidad entre Dispositivos
        </h2>
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] mb-4">
          <p className="font-semibold text-[var(--text-primary)]">Advertencia técnica sobre visualización:</p>
          <p className="leading-relaxed">
            La representación gráfica final de cualquier símbolo Unicode depende del sistema operativo (Android, iOS, iPadOS, Windows, macOS, Linux) y del conjunto de fuentes instalado por el fabricante de tu teléfono móvil o computadora.
          </p>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>Por lo tanto, se hace constar expresamente que:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Un símbolo puede visualizarse con un diseño visual ligeramente distinto entre un iPhone y un teléfono Samsung o Xiaomi.</li>
            <li>En versiones antiguas de Android o navegadores desactualizados, algunos glifos pueden aparecer como cuadros vacíos o signos de interrogación.</li>
            <li>El usuario es responsable de verificar cómo se visualiza su texto en su dispositivo de destino antes de publicarlo de forma definitiva.</li>
          </ul>
        </div>
      </section>

      {/* 4. Marcas Terceros */}
      <section id="marcas-terceros" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">4.</span> Deslinde de Marcas Registradas y Plataformas de Terceros
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            A lo largo de nuestras herramientas y guías se mencionan marcas, nombres comerciales y plataformas de entretenimiento, tales como:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Free Fire:</strong> Marca registrada de Garena International I Private Limited.</li>
            <li><strong>Instagram, WhatsApp, Facebook:</strong> Marcas registradas de Meta Platforms, Inc.</li>
            <li><strong>TikTok:</strong> Marca registrada de ByteDance Ltd.</li>
            <li><strong>Twitter / X:</strong> Marcas registradas de X Corp.</li>
            <li><strong>Discord:</strong> Marca registrada de Discord Technologies, Inc.</li>
          </ul>
          <p className="font-medium text-[var(--text-primary)] pt-1">
            Declaración de no afiliación:
          </p>
          <p>
            {LEGAL_CONFIG.siteName} es un servicio totalmente independiente. <strong>No existe patrocinio, relación comercial, respaldo oficial ni asociación alguna</strong> entre este portal web y las compañías antes mencionadas. El uso de dichos nombres se realiza con fines informativos y nominativos estrictos para indicar la compatibilidad técnica del texto generado.
          </p>
        </div>
      </section>

      {/* 5. Políticas de Plataformas */}
      <section id="politicas-plataformas" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">5.</span> Políticas Propias de Redes Sociales y Videojuegos
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Cada videojuego (como Free Fire) y cada red social (como Instagram o TikTok) cuenta con sus propias directrices de comunidad y filtros automáticos para nombres de usuario (nicks) y biografías.
          </p>
          <p>
            Dichas plataformas se reservan el derecho exclusivo de admitir, rechazar o restringir caracteres especiales en cualquier momento. {LEGAL_CONFIG.siteName} no tiene control sobre los filtros internos de terceros y no puede garantizar que un apodo generado sea aceptado por el sistema de registro de otra compañía.
          </p>
        </div>
      </section>

      {/* 6. Exclusión de Garantías */}
      <section id="exclusion-garantias" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">6.</span> Exclusión de Garantías en Resultados
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Las herramientas se ponen a disposición del público con fines utilitarios. No garantizamos que el uso de un estilo tipográfico incremente el número de seguidores, mejore el posicionamiento en redes sociales o aumente el rendimiento en videojuegos. Todo beneficio estético o creativo queda sujeto a la apreciación del usuario.
          </p>
        </div>
      </section>

      {/* 7. Responsabilidad del Usuario */}
      <section id="responsabilidad-usuario" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">7.</span> Responsabilidad del Usuario sobre el Contenido
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            El usuario es el único y exclusivo responsable de las frases, apodos, textos y símbolos que decida introducir en las herramientas y difundir en perfiles públicos o privados. {LEGAL_CONFIG.siteName} no se hace responsable por el uso ilícito, abusivo o difamatorio que terceros puedan realizar con los textos transformados.
          </p>
        </div>
      </section>

      {/* 8. Enlaces Externos */}
      <section id="enlaces-terceros" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">8.</span> Enlaces a Sitios Externos
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            No nos hacemos responsables por las opiniones, contenidos o políticas de privacidad de los sitios web externos vinculados mediante hiperenlaces. La inclusión de un enlace no implica necesariamente aprobación de los contenidos enlazados.
          </p>
        </div>
      </section>

      {/* 9. Contacto */}
      <section id="contacto-aviso-legal" className="mb-10 scroll-mt-28">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">9.</span> Contacto y Consultas
        </h2>
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-2">
          <p>
            Si tienes dudas o inquietudes sobre este descargo de responsabilidad, puedes comunicarte con nuestro equipo:
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
