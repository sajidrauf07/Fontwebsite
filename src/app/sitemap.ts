import type { MetadataRoute } from 'next';

const BASE_URL = 'https://theletrasbonitas.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/conversor-de-letras',
    '/conversor-de-letras/como-cambiar-las-letras',
    '/conversor-de-letras/letras-para-copiar-y-pegar',
    '/conversor-de-letras/texto-con-estilos',
    '/letras-cursivas',
    '/letras-cursivas/abecedario-cursivo',
    '/letras-cursivas/letras-cursivas-elegantes',
    '/letras-cursivas/letras-cursivas-para-copiar-y-pegar',
    '/letras-para-instagram',
    '/letras-para-instagram/letras-cursivas-para-instagram',
    '/letras-para-instagram/letras-para-bio',
    '/letras-para-instagram/letras-para-nombres',
    '/letras-para-instagram/simbolos-para-instagram',
    '/nombres-para-free-fire',
    '/nombres-para-free-fire/nombres',
    '/nombres-para-free-fire/nombres-insanos',
    '/nombres-para-free-fire/apodos',
    '/nombres-para-free-fire/clanes',
    '/nombres-para-free-fire/simbolos',
    '/nombres-para-juegos',
    '/simbolos',
    // Páginas Legales y de Transparencia
    '/politica-de-privacidad',
    '/terminos-y-condiciones',
    '/politica-de-cookies',
    '/aviso-legal',
    '/derechos-de-autor',
    '/contacto'
  ];

  const legalRoutes = new Set([
    '/politica-de-privacidad',
    '/terminos-y-condiciones',
    '/politica-de-cookies',
    '/aviso-legal',
    '/derechos-de-autor',
    '/contacto'
  ]);

  return routes.map((route) => {
    const isLegal = legalRoutes.has(route);
    return {
      url: `${BASE_URL}${route || '/'}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : isLegal ? 'monthly' : 'weekly',
      priority: route === '' ? 1.0 : isLegal ? 0.5 : route.split('/').filter(Boolean).length === 1 ? 0.9 : 0.8,
    };
  });
}
