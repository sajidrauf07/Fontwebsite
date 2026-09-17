const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Includes tlb-badge-the:', data.includes('tlb-badge-the'));
    console.log('Includes tlbCosmicBg:', data.includes('tlbCosmicBg'));
    console.log('Includes tlb-star-flourish:', data.includes('tlb-star-flourish'));
    console.log('Includes tlb-emblem-svg:', data.includes('tlb-emblem-svg'));
  });
}).on('error', (err) => {
  console.error('Error fetching localhost:', err.message);
});
