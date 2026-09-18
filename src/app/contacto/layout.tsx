import type { Metadata } from 'next';
import { LEGAL_CONFIG } from '@/config/legal';

export const metadata: Metadata = {
  title: 'Contacto y Solicitudes Legales | Letras Bonitas México',
  description: 'Canal oficial de atención para ejercicio de derechos ARCO, dudas sobre privacidad, derechos de autor y consultas legales en Letras Bonitas.',
  alternates: {
    canonical: `${LEGAL_CONFIG.domain}/contacto`,
  },
  openGraph: {
    title: 'Contacto y Solicitudes Legales | Letras Bonitas',
    description: 'Canal directo de contacto para solicitudes de privacidad, derechos ARCO y derechos de autor.',
    url: `${LEGAL_CONFIG.domain}/contacto`,
    siteName: LEGAL_CONFIG.siteName,
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
