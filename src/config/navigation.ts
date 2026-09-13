export interface SiloChildItem {
  title: string;
  shortTitle?: string;
  href: string;
  description?: string;
}

export interface SiloNavItem {
  id: string;
  title: string;
  shortTitle?: string;
  href: string;
  description: string;
  viewAllText: string;
  colorTheme: 'violet' | 'cyan' | 'purple' | 'amber';
  children: SiloChildItem[];
}

export const SILO_NAVIGATION: SiloNavItem[] = [
  {
    id: 'letras-cursivas',
    title: 'Letras Cursivas',
    shortTitle: 'Cursivas',
    href: '/letras-cursivas/',
    description: 'Fuentes manuscritas, caligráficas y elegantes para copiar y pegar.',
    viewAllText: 'Ver todas las Letras Cursivas',
    colorTheme: 'violet',
    children: [
      {
        title: 'Abecedario Cursivo',
        href: '/letras-cursivas/abecedario-cursivo/',
        description: 'Alfabeto completo de la A a la Z en mayúsculas y minúsculas.'
      },
      {
        title: 'Letras Cursivas para Copiar y Pegar',
        shortTitle: 'Copiar y Pegar',
        href: '/letras-cursivas/letras-cursivas-para-copiar-y-pegar/',
        description: 'Colección de palabras, frases y alfabetos listos con un clic.'
      },
      {
        title: 'Letras Cursivas Elegantes',
        shortTitle: 'Elegantes',
        href: '/letras-cursivas/letras-cursivas-elegantes/',
        description: 'Estilos finos, caligráficos y premium para invitaciones y marcas.'
      }
    ]
  },
  {
    id: 'conversor-de-letras',
    title: 'Conversor de Letras',
    shortTitle: 'Conversor',
    href: '/conversor-de-letras/',
    description: 'Transforma tu texto en más de 350 tipografías Unicode en vivo.',
    viewAllText: 'Ver todo el Conversor de Letras',
    colorTheme: 'cyan',
    children: [
      {
        title: 'Letras para Copiar y Pegar',
        shortTitle: 'Copiar y Pegar',
        href: '/conversor-de-letras/letras-para-copiar-y-pegar/',
        description: 'Catálogo universal de tipografías listas para cualquier app.'
      },
      {
        title: 'Cómo Cambiar las Letras',
        shortTitle: 'Cómo Cambiar',
        href: '/conversor-de-letras/como-cambiar-las-letras/',
        description: 'Guía paso a paso y tutoriales de compatibilidad Unicode.'
      },
      {
        title: 'Texto con Estilos',
        shortTitle: 'Texto con Estilos',
        href: '/conversor-de-letras/texto-con-estilos/',
        description: 'Generador de textos bonitos decorados con símbolos aesthetic.'
      }
    ]
  },
  {
    id: 'letras-para-instagram',
    title: 'Letras para Instagram',
    shortTitle: 'Instagram',
    href: '/letras-para-instagram/',
    description: 'Fuentes compatibles para tu bio, nombres de usuario y captions.',
    viewAllText: 'Ver todas las Letras para Instagram',
    colorTheme: 'purple',
    children: [
      {
        title: 'Letras para Bio',
        shortTitle: 'Para Bio',
        href: '/letras-para-instagram/letras-para-bio/',
        description: 'Diseña tu biografía con vista previa interactiva de perfil.'
      },
      {
        title: 'Letras para Nombres',
        shortTitle: 'Para Nombres',
        href: '/letras-para-instagram/letras-para-nombres/',
        description: 'Personaliza tu nombre visible de Instagram con estilo único.'
      },
      {
        title: 'Símbolos para Instagram',
        shortTitle: 'Símbolos',
        href: '/letras-para-instagram/simbolos-para-instagram/',
        description: 'Decoraciones, estrellas, corazones y flechas compatibles.'
      },
      {
        title: 'Letras Cursivas para Instagram',
        shortTitle: 'Cursivas Instagram',
        href: '/letras-para-instagram/letras-cursivas-para-instagram/',
        description: 'Tipografías itálicas y caligráficas probadas en Instagram.'
      }
    ]
  },
  {
    id: 'nombres-para-free-fire',
    title: 'Nombres para Free Fire',
    shortTitle: 'Free Fire',
    href: '/nombres-para-free-fire/',
    description: 'Generador de nicks heroicos, símbolos insanos y tags de clanes.',
    viewAllText: 'Ver todo Nombres para Free Fire',
    colorTheme: 'amber',
    children: [
      {
        title: 'Nombres',
        shortTitle: 'Generador de Nicks',
        href: '/nombres-para-free-fire/nombres/',
        description: 'Generador avanzado de nicks con filtros y decoraciones.'
      },
      {
        title: 'Nombres Insanos',
        shortTitle: 'Nicks Insanos',
        href: '/nombres-para-free-fire/nombres-insanos/',
        description: 'Nicks intimidantes y agresivos estilo jugador veterano.'
      },
      {
        title: 'Apodos',
        shortTitle: 'Apodos',
        href: '/nombres-para-free-fire/apodos/',
        description: 'Ideas y apodos originales para jugadores y duplas.'
      },
      {
        title: 'Clanes',
        shortTitle: 'Para Clanes',
        href: '/nombres-para-free-fire/clanes/',
        description: 'Nombres para escuadras, gremios y clanes competitivos.'
      },
      {
        title: 'Símbolos',
        shortTitle: 'Símbolos FF',
        href: '/nombres-para-free-fire/simbolos/',
        description: 'Cruces, alas, coronas y caracteres especiales para FF.'
      }
    ]
  }
];

/**
 * Normalizes a pathname by stripping leading/trailing slashes for reliable comparison.
 */
export function normalizePath(path: string): string {
  if (!path) return '';
  return path.replace(/^\/+|\/+$/g, '');
}

/**
 * Checks if the current pathname matches an exact URL or belongs to a SILO hierarchy.
 */
export function isPathActive(currentPath: string, targetHref: string, exact: boolean = false): boolean {
  const normCurrent = normalizePath(currentPath);
  const normTarget = normalizePath(targetHref);

  if (normTarget === '') {
    return normCurrent === '';
  }

  if (exact) {
    return normCurrent === normTarget;
  }

  return normCurrent === normTarget || normCurrent.startsWith(normTarget + '/');
}

/**
 * Finds which SILO is active for the given pathname.
 */
export function getActiveSilo(currentPath: string): SiloNavItem | undefined {
  const normCurrent = normalizePath(currentPath);
  if (!normCurrent) return undefined;

  return SILO_NAVIGATION.find(silo => {
    const normSilo = normalizePath(silo.href);
    return normCurrent === normSilo || normCurrent.startsWith(normSilo + '/');
  });
}
