const fs = require('fs');

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes('max-width') && (line.includes('container') || line.includes('760') || line.includes('800') || line.includes('1200') || line.includes('hero'))) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
