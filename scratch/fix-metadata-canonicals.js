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
let modifiedCount = 0;

for (const filePath of allAppFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace canonical: 'https://theletrasbonitas.com/SOMETHING/' with 'https://theletrasbonitas.com/SOMETHING'
  content = content.replace(
    /canonical:\s*(['"])https:\/\/theletrasbonitas\.com(\/[a-z0-9\-_]+(?:\/[a-z0-9\-_]+)*)\/\1/g,
    "canonical: $1https://theletrasbonitas.com$2$1"
  );

  // Replace openGraph url: 'https://theletrasbonitas.com/SOMETHING/' with 'https://theletrasbonitas.com/SOMETHING'
  content = content.replace(
    /url:\s*(['"])https:\/\/theletrasbonitas\.com(\/[a-z0-9\-_]+(?:\/[a-z0-9\-_]+)*)\/\1/g,
    "url: $1https://theletrasbonitas.com$2$1"
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated canonical/OG URL in: ${filePath}`);
  }
}

console.log(`Successfully updated ${modifiedCount} page files!`);
