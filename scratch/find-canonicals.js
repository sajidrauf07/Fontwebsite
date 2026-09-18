const fs = require('fs');
const path = require('path');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = walkDir('src/app');
console.log(`Found ${allFiles.length} files in src/app`);

let canonicalMatches = [];

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match canonical: 'https://theletrasbonitas.com/.../'
  const matches = content.match(/canonical:\s*['"]https:\/\/theletrasbonitas\.com(\/[^'"]+)\/['"]/g);
  if (matches) {
    canonicalMatches.push({ filePath, matches });
  }
}

console.log(`Found ${canonicalMatches.length} files with trailing-slash canonicals:`);
canonicalMatches.forEach(c => console.log('-', c.filePath, ':', c.matches));
