const http = require('http');

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Find <link rel="canonical" href="..." />
        const canonicalMatch = data.match(/<link rel="canonical" href="([^"]+)"/);
        // Find <meta property="og:url" content="..." />
        const ogMatch = data.match(/<meta property="og:url" content="([^"]+)"/);
        resolve({
          path: urlPath,
          status: res.statusCode,
          canonical: canonicalMatch ? canonicalMatch[1] : 'NOT FOUND',
          ogUrl: ogMatch ? ogMatch[1] : 'NOT FOUND'
        });
      });
    }).on('error', err => resolve({ path: urlPath, error: err.message }));
  });
}

async function verifyAll() {
  const routesToTest = [
    '/conversor-de-letras',
    '/conversor-de-letras/letras-para-copiar-y-pegar',
    '/letras-cursivas',
    '/letras-cursivas/elegantes',
    '/letras-para-instagram',
    '/letras-para-instagram/letras-para-bio',
    '/nombres-para-free-fire',
    '/nombres-para-free-fire/nombres-insanos'
  ];

  console.log('Testing Canonical & OG URLs on live server:');
  for (const r of routesToTest) {
    const result = await fetchPage(r);
    console.log(`Route: ${r}`);
    console.log(`  Status:    ${result.status}`);
    console.log(`  Canonical: ${result.canonical}`);
    console.log(`  OG URL:    ${result.ogUrl}`);
    console.log(`  Matches exact route: ${result.canonical === 'https://theletrasbonitas.com' + r}`);
  }

  // Also check sitemap
  http.get('http://localhost:3000/sitemap.xml', res => {
    let sitemapData = '';
    res.on('data', chunk => sitemapData += chunk);
    res.on('end', () => {
      const hasTrailingOnConversor = sitemapData.includes('<loc>https://theletrasbonitas.com/conversor-de-letras/</loc>');
      const hasCleanConversor = sitemapData.includes('<loc>https://theletrasbonitas.com/conversor-de-letras</loc>');
      console.log('Sitemap test:');
      console.log('  Clean /conversor-de-letras present:', hasCleanConversor);
      console.log('  Trailing /conversor-de-letras/ present (should be false):', hasTrailingOnConversor);
    });
  });
}

verifyAll();
