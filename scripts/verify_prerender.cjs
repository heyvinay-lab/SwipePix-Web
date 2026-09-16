const fs = require('fs');
const routes = ['/', '/donate', '/updates', '/privacy', '/about', '/feedback'];

for (const r of routes) {
  const filePath = r === '/' ? 'dist/index.html' : `dist${r}/index.html`;
  const html = fs.readFileSync(filePath, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]*>/g, '').trim();
  const rootContent = html.match(/<div id="root">([\s\S]*?)<\/div>/)?.[1];
  
  console.log(`\n--- Route: ${r} ---`);
  console.log(`  File: ${filePath} (${(html.length / 1024).toFixed(1)} KB)`);
  console.log(`  Title: ${title}`);
  console.log(`  Canonical: ${canonical}`);
  console.log(`  Description: ${desc?.slice(0, 70)}...`);
  console.log(`  H1: ${h1}`);
  console.log(`  Root rendered: ${rootContent ? rootContent.length + ' chars' : 'EMPTY!'}`);
}
