const fs = require('fs');

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes('cp-results-grid') || line.includes('copy-paste-tool-section') || line.includes('cp-panel')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
