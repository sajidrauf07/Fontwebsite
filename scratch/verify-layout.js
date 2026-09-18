const http = require('http');

http.get('http://localhost:3000/conversor-de-letras', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    console.log('Page loaded bytes:', data.length);
    console.log('Has lc-results-grid:', data.includes('lc-results-grid'));
    console.log('Has silo-hero:', data.includes('silo-hero'));
  });
}).on('error', err => {
  console.error('Error fetching:', err.message);
});
