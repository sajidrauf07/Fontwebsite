const fs = require('fs');

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes('styles-responsive-grid') || line.includes('font-styles-grid')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
