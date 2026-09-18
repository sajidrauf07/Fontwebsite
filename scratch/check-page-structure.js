const fs = require('fs');
const path = require('path');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('page.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const pages = walkDir('src/app');

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const hasHeroInsideSeoContainer = content.includes('seo-container') && (content.includes('hero-section') || content.includes('LetterConverter') || content.includes('FancyFont') || content.includes('FreeFire') || content.includes('Cursive'));
  console.log(`${p}: ${hasHeroInsideSeoContainer ? 'TRAPPED in seo-container' : 'OK / Check structure'}`);
});
