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

const allAppFiles = walkDir('src/app');
let trailingCanonicalCount = 0;
let trailingOgCount = 0;

for (const filePath of allAppFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match any canonical that has a path after origin ending with /
  const cMatch = content.match(/canonical:\s*['"]https:\/\/theletrasbonitas\.com(\/[^'"]+)\/['"]/g);
  if (cMatch) {
    trailingCanonicalCount++;
    console.log('Trailing canonical in:', filePath, cMatch);
  }

  const ogMatch = content.match(/url:\s*['"]https:\/\/theletrasbonitas\.com(\/[^'"]+)\/['"]/g);
  if (ogMatch) {
    trailingOgCount++;
    console.log('Trailing OG in:', filePath, ogMatch);
  }
}

console.log('Validation:');
console.log('Trailing canonicals remaining:', trailingCanonicalCount);
console.log('Trailing OG URLs remaining:', trailingOgCount);
