const fs = require('fs');
const path = require('path');

const routes = ['index.html', 'donate/index.html', 'updates/index.html', 'privacy/index.html', 'about/index.html', 'feedback/index.html'];

let totalHierarchyErrors = 0;
let totalUnnamedButtons = 0;

for (const r of routes) {
  const filePath = path.join('dist', r);
  if (!fs.existsSync(filePath)) {
    console.error('Missing file:', filePath);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  console.log('----------------------------------------------------');
  console.log('AUDITING: ' + r);

  // 1. Heading hierarchy check
  const headings = [];
  const headingRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
    headings.push({ level, text: text.substring(0, 45) });
  }

  let prevLevel = 0;
  let skipped = 0;
  for (const h of headings) {
    const flag = (prevLevel > 0 && h.level > prevLevel + 1) ? ' <-- SKIPPED!' : '';
    if (flag) {
      skipped++;
      totalHierarchyErrors++;
    }
    console.log('  ' + '  '.repeat(h.level - 1) + 'H' + h.level + ': ' + h.text + flag);
    prevLevel = h.level;
  }
  if (skipped === 0) {
    console.log('  ? Heading hierarchy is sequential! (' + headings.length + ' headings)');
  } else {
    console.log('  ? Skipped ' + skipped + ' heading levels!');
  }

  // 2. Buttons check
  const buttonRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
  let buttonErrors = 0;
  let buttonCount = 0;
  while ((match = buttonRegex.exec(html)) !== null) {
    buttonCount++;
    const attrs = match[1];
    const innerHtml = match[2];
    const text = innerHtml.replace(/<[^>]*>/g, '').trim();
    const hasAriaLabel = /aria-label=["'][^"']+["']/i.test(attrs);
    
    if (!text && !hasAriaLabel) {
      buttonErrors++;
      totalUnnamedButtons++;
      console.error('  ? Unnamed button:', match[0].substring(0, 80));
    }
  }
  console.log('  ? Buttons: ' + buttonCount + ' total, ' + buttonErrors + ' unnamed.');

  // 3. Banned strings check
  const banned = ['file:///', 'localhost:'];
  for (const b of banned) {
    if (html.includes(b)) {
      console.error('  ? Found banned string: ' + b);
    }
  }
}

console.log('====================================================');
console.log('SUMMARY:');
console.log('Total hierarchy errors: ' + totalHierarchyErrors);
console.log('Total unnamed buttons: ' + totalUnnamedButtons);
if (totalHierarchyErrors === 0 && totalUnnamedButtons === 0) {
  console.log('? ALL ACCESSIBILITY & HEADING CRITERIA PASSED!');
} else {
  process.exit(1);
}
