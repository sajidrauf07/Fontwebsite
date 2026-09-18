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
let updatedFiles = 0;
let totalReplaced = 0;

// The known main site paths:
const sitePaths = [
  'conversor-de-letras',
  'conversor-de-letras/como-cambiar-las-letras',
  'conversor-de-letras/letras-para-copiar-y-pegar',
  'conversor-de-letras/texto-con-estilos',
  'letras-cursivas',
  'letras-cursivas/abecedario-cursivo',
  'letras-cursivas/letras-cursivas-elegantes',
  'letras-cursivas/letras-cursivas-para-copiar-y-pegar',
  'letras-para-instagram',
  'letras-para-instagram/letras-cursivas-para-instagram',
  'letras-para-instagram/letras-para-bio',
  'letras-para-instagram/letras-para-nombres',
  'letras-para-instagram/simbolos-para-instagram',
  'nombres-para-free-fire',
  'nombres-para-free-fire/nombres',
  'nombres-para-free-fire/nombres-insanos',
  'nombres-para-free-fire/apodos',
  'nombres-para-free-fire/clanes',
  'nombres-para-free-fire/simbolos'
];

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const p of sitePaths) {
    // Replace href="/path/" with href="/path"
    // Also href={`/path/`} with href={`/path`}
    const regex1 = new RegExp(`href=(["'])/${p}/(["'])`, 'g');
    content = content.replace(regex1, `href=$1/${p}$2`);

    const regex2 = new RegExp(`href={\`/${p}/\`}`, 'g');
    content = content.replace(regex2, `href={\`/${p}\`}`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedFiles++;
    console.log(`Updated links in: ${filePath}`);
  }
}

console.log(`Updated links in ${updatedFiles} files.`);
