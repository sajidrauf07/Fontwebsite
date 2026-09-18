const fs = require('fs');

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes('styles-grid') || line.includes('font-generator') || line.includes('generator-container')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
