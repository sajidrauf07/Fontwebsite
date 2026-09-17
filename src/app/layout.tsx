import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  adjustFontFallback: true
});

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL('https://theletrasbonitas.com'),
  title: 'Letras Bonitas — Generador de Fuentes y Letras Elegantes (Copiar y Pegar)',
  description:
    'Genera letras bonitas, fuentes elegantes, letras cursivas, góticas y textos especiales para copiar y pegar en Instagram, WhatsApp, TikTok y juegos. Más de 350 estilos gratis.',
  keywords: [
    'letras bonitas',
    'letras para copiar y pegar',
    'fuentes bonitas',
    'letras especiales',
    'letras aesthetic',
    'letras cursivas',
    'letras elegantes',
    'generador de letras',
    'fuentes para instagram',
    'texto bonito'
  ],
  alternates: {
    canonical: 'https://theletrasbonitas.com/'
  },
  openGraph: {
    title: 'Letras Bonitas — Generador de Fuentes y Letras Elegantes',
    description:
      'Convierte tu texto en letras bonitas, cursivas, góticas y aesthetic para Instagram, WhatsApp y redes sociales.',
    url: 'https://theletrasbonitas.com/',
    siteName: 'Letras Bonitas',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Bonitas — Generador de Fuentes y Letras Elegantes',
    description:
      'Convierte tu texto en letras bonitas, cursivas, góticas y aesthetic al instante. Gratis y sin registro.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
