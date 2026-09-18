/**
 * Configuración centralizada legal y de privacidad para Letras Bonitas
 * https://theletrasbonitas.com/
 * 
 * Mercado objetivo: México
 * Idioma: Español de México
 */

export const LEGAL_CONFIG = {
  siteName: 'Letras Bonitas',
  brandName: 'Letras Bonitas™',
  domain: 'https://theletrasbonitas.com',
  cleanDomain: 'theletrasbonitas.com',
  // Correo de contacto oficial para requerimientos legales, derechos ARCO y derechos de autor
  contactEmail: 'contacto@theletrasbonitas.com',
  privacyEmail: 'contacto@theletrasbonitas.com',
  copyrightEmail: 'contacto@theletrasbonitas.com',
  
  // Fechas de vigencia y actualización editorial
  effectiveDate: '18 de septiembre de 2026',
  lastUpdated: '18 de septiembre de 2026',
  
  // Marco legal y jurisdicción
  country: 'México',
  jurisdiction: 'Estados Unidos Mexicanos',
  regulatoryFramework: {
    privacy: 'Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y lineamientos del INAI',
    copyright: 'Ley Federal del Derecho de Autor (LFDA) y registros ante INDAUTOR',
    consumerCommerce: 'Código de Comercio y Ley Federal de Protección al Consumidor (PROFECO)'
  },
  
  // Parámetros técnicos verídicos de la plataforma
  technicalDisclosure: {
    clientSideProcessing: true, // El texto se procesa en el navegador del usuario vía Unicode maps
    serverTextStorage: false,    // No se envían ni almacenan textos introducidos en bases de datos
    userAccounts: false,        // No se requiere registro ni autenticación para usar las herramientas
    cookiesUsed: {
      technical: true,          // Necesarias para funcionamiento e interactividad básica
      preferences: true,        // localStorage para tema claro/oscuro y fuentes favoritas
      analytics: false,         // Preparado bajo consentimiento
      advertising: false        // Preparado bajo consentimiento
    }
  },
  
  // Enlaces canónicos limpios a las páginas legales (sin trailing slash)
  links: {
    privacy: '/politica-de-privacidad',
    terms: '/terminos-y-condiciones',
    cookies: '/politica-de-cookies',
    disclaimer: '/aviso-legal',
    copyright: '/derechos-de-autor',
    contact: '/contacto'
  }
};
