const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/components/seo/SEOContent.tsx',
  'src/app/conversor-de-letras/page.tsx',
  'src/app/conversor-de-letras/como-cambiar-las-letras/page.tsx',
  'src/app/conversor-de-letras/letras-para-copiar-y-pegar/page.tsx',
  'src/app/conversor-de-letras/texto-con-estilos/page.tsx',
  'src/app/letras-cursivas/page.tsx',
  'src/app/letras-cursivas/abecedario-cursivo/page.tsx',
  'src/app/letras-cursivas/letras-cursivas-elegantes/page.tsx',
  'src/app/letras-cursivas/letras-cursivas-para-copiar-y-pegar/page.tsx',
  'src/app/letras-para-instagram/page.tsx',
  'src/app/letras-para-instagram/letras-cursivas-para-instagram/page.tsx',
  'src/app/letras-para-instagram/letras-para-bio/page.tsx',
  'src/app/letras-para-instagram/letras-para-nombres/page.tsx',
  'src/app/letras-para-instagram/simbolos-para-instagram/page.tsx',
  'src/app/nombres-para-free-fire/page.tsx',
  'src/app/nombres-para-free-fire/apodos/page.tsx',
  'src/app/nombres-para-free-fire/clanes/page.tsx',
  'src/app/nombres-para-free-fire/nombres/page.tsx',
  'src/app/nombres-para-free-fire/nombres-insanos/page.tsx',
  'src/app/nombres-para-free-fire/simbolos/page.tsx'
];

let modifiedCount = 0;

for (const relPath of targetFiles) {
  const filePath = path.resolve(relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Remove TableOfContents JSX element
  // e.g. <TableOfContents items={...} />
  content = content.replace(/\s*<TableOfContents\s+items=\{[^}]+\}\s*\/>/g, '');

  // 2. Remove TableOfContents from import { ... } from '@/components/article'
  // e.g. TableOfContents,\n or \n  TableOfContents
  content = content.replace(/TableOfContents,\s*/g, '');
  content = content.replace(/,\s*TableOfContents/g, '');
  content = content.replace(/{\s*TableOfContents\s*}/g, '{}');

  // 3. Remove TOC items arrays
  // Matches const [A-Z_]+_TOC_ITEMS\s*=\s*\[[\s\S]*?\];
  content = content.replace(/const\s+[A-Z_0-9]+_TOC_ITEMS\s*=\s*\[[\s\S]*?\];\s*/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully removed TOC from: ${relPath}`);
    modifiedCount++;
  } else {
    console.log(`No change made to: ${relPath}`);
  }
}

console.log(`\nFinished! Modified ${modifiedCount} of ${targetFiles.length} files.`);
