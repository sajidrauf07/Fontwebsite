const fs = require('fs');

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes('cg-results-grid') || line.includes('ff-results') || line.includes('free-fire-grid')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
