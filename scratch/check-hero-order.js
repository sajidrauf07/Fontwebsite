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
  const lines = content.split(/\r?\n/);
  const heroIndex = lines.findIndex(l => l.includes('hero-section'));
  const seoWrapperIndex = lines.findIndex(l => l.includes('seo-wrapper-section') || l.includes('seo-container'));
  console.log(`${p}: hero at line ${heroIndex + 1}, seo-container at line ${seoWrapperIndex + 1}`);
});
