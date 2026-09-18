const fs = require('fs');

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes('lc-results-grid') || line.includes('lc-panel') || line.includes('letter-converter-section')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
