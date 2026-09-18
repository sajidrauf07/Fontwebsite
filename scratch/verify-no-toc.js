const http = require('http');

function checkPage(urlPath) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path: urlPath,
          status: res.statusCode,
          hasTOC: data.includes('table-of-contents') || data.includes('Índice de contenidos'),
          hasReadingProgress: data.includes('reading-progress'),
          hasStepGuide: data.includes('step-guide') || data.includes('step-card')
        });
      });
    }).on('error', err => resolve({ path: urlPath, error: err.message }));
  });
}

async function run() {
  const pages = [
    '/',
    '/conversor-de-letras',
    '/conversor-de-letras/como-cambiar-las-letras',
    '/letras-cursivas',
    '/letras-para-instagram',
    '/nombres-para-free-fire'
  ];

  console.log('Verification Results:');
  for (const p of pages) {
    const res = await checkPage(p);
    console.log(`Page: ${p}`);
    console.log(`  Status: ${res.status}`);
    console.log(`  Has Table of Contents (should be FALSE): ${res.hasTOC}`);
  }
}

run();
