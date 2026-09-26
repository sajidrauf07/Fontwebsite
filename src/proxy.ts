import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  let shouldRedirect = false;

  // 1. Normalize www to non-www
  if (host.startsWith('www.')) {
    url.host = host.replace(/^www\./, '');
    shouldRedirect = true;
  }

  // 2. Normalize trailing slashes (except root '/')
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    if (process.env.NODE_ENV === 'production' && url.protocol === 'http:') {
      url.protocol = 'https:';
    }
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - static assets: favicon.ico, icon.svg, robots.txt, sitemap.xml, images
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|images).*)',
  ],
};
