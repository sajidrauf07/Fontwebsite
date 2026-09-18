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

const allFiles = walkDir('src');

let ogMatches = [];
let internalLinkMatches = [];

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const og = content.match(/url:\s*['"]https:\/\/theletrasbonitas\.com(\/[^'"]+)\/['"]/g);
  if (og) ogMatches.push({ filePath, og });

  const links = content.match(/href=["'](\/[a-z0-9\-_]+(?:\/[a-z0-9\-_]+)*)\/["']/g);
  if (links) internalLinkMatches.push({ filePath, count: links.length });
}

console.log(`OG URLs with trailing slash: ${ogMatches.length} files`);
console.log(`Files with internal links ending in /: ${internalLinkMatches.length} files`);
