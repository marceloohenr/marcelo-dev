import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
const manifest = JSON.parse(await readFile(resolve(dist, '.vite/manifest.json'), 'utf8'));
const server = await createServer({ root, server: { middlewareMode: true, hmr: false }, appType: 'custom' });

try {
  const { renderPage, supportedLanguages, locales } = await server.ssrLoadModule('/src/entry-server.tsx');
  for (const language of supportedLanguages) {
    const { head, body, lang } = await renderPage(language);
    // SSR imports retain source asset paths; resolve them against the client build.
    const renderedBody = body.replace(/(["'])\/src\/assets\/([^"']+)\1/g, (_, quote, asset) => {
      const entry = manifest[`src/assets/${asset}`];
      if (!entry) throw new Error(`Missing built asset: ${asset}`);
      return `${quote}/${entry.file}${quote}`;
    });
    if (/\/src\/assets\//.test(renderedBody)) throw new Error('Unresolved source asset in pre-rendered HTML');
    const html = template
      .replace(/<html lang="[^"]+">/, `<html lang="${lang}">`)
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`)
      .replace('<div id="root"></div>', () => `<div id="root">${renderedBody}</div>`);
    const destination = resolve(dist, locales[language].path.slice(1));
    await mkdir(destination, { recursive: true });
    await writeFile(resolve(destination, 'index.html'), html);
    console.log(`Pre-rendered ${locales[language].path} (${Buffer.byteLength(html)} bytes)`);
  }
} finally {
  await server.close();
}
