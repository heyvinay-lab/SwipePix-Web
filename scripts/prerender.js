import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

const { render } = await import('../dist-ssr/entry-server.js');

const ROUTE_METADATA = {
  '/': {
    title: 'SwipePix — Privacy-First Android Gallery Cleanup',
    description: 'SwipePix is a privacy-first Android gallery cleanup app for reviewing and organizing photos locally, without cloud uploads.',
    canonical: 'https://swipepix.heyvinay.in/',
  },
  '/donate': {
    title: 'Support SwipePix — Privacy-First Android Gallery Cleanup',
    description: 'Support SwipePix, a privacy-first Android gallery cleanup app built to help organize your photo library locally.',
    canonical: 'https://swipepix.heyvinay.in/donate',
  },
  '/updates': {
    title: 'SwipePix Updates — Privacy-First Android Gallery Cleanup',
    description: 'Follow SwipePix updates, improvements, fixes, and new features for the privacy-first Android gallery cleanup app.',
    canonical: 'https://swipepix.heyvinay.in/updates',
  },
  '/privacy': {
    title: 'SwipePix Privacy — Local & Offline by Design',
    description: 'Learn how SwipePix handles your photos, permissions, local data, and privacy without cloud uploads.',
    canonical: 'https://swipepix.heyvinay.in/privacy',
  },
  '/about': {
    title: 'About SwipePix — Privacy-First Android Gallery Cleanup',
    description: 'Learn about SwipePix, its local-first approach, and the goal of making Android gallery cleanup simpler.',
    canonical: 'https://swipepix.heyvinay.in/about',
  },
  '/feedback': {
    title: 'SwipePix Feedback — Send Feedback & Report Bugs',
    description: 'Report bugs, request features, or send feedback directly to the developer of SwipePix, the offline Android gallery cleaner.',
    canonical: 'https://swipepix.heyvinay.in/feedback',
  }
};

console.log('⚡ Pre-rendering static HTML for SEO crawlability...');

for (const [route, meta] of Object.entries(ROUTE_METADATA)) {
  const appHtml = render(route);
  
  let html = template;
  // 1. Inject rendered HTML inside #root
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // 2. Replace title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta\s+name="title"\s+content="[^"]*"/, `<meta name="title" content="${meta.title}"`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/, `<meta property="og:title" content="${meta.title}"`);
  html = html.replace(/<meta\s+property="twitter:title"\s+content="[^"]*"/, `<meta property="twitter:title" content="${meta.title}"`);

  // 3. Replace description
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/, `<meta name="description" content="${meta.description}"`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/, `<meta property="og:description" content="${meta.description}"`);
  html = html.replace(/<meta\s+property="twitter:description"\s+content="[^"]*"/, `<meta property="twitter:description" content="${meta.description}"`);

  // 4. Replace canonical and url
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/, `<meta property="og:url" content="${meta.canonical}"`);
  html = html.replace(/<meta\s+property="twitter:url"\s+content="[^"]*"/, `<meta property="twitter:url" content="${meta.canonical}"`);

  // Determine output directory & file
  const outDir = route === '/' ? distDir : path.join(distDir, route.replace('/', ''));
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`  ✓ Rendered ${route} -> ${path.relative(distDir, outFile)} (${(html.length / 1024).toFixed(1)} KB)`);
}

console.log('✅ Static pre-rendering completed successfully!');
