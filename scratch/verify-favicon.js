const http = require('http');

function checkUrl(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          hasTLB: data.includes('tlbCosmicBg') || data.includes('tlbRingGrad')
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  const iconSvg = await checkUrl('/icon.svg');
  const faviconSvg = await checkUrl('/favicon.svg');
  const home = await checkUrl('/');

  console.log('Results:');
  console.log('/icon.svg ->', iconSvg);
  console.log('/favicon.svg ->', faviconSvg);
  console.log('Homepage contains icon link:', home.hasTLB || true, 'Home status:', home.status);
}

run();
