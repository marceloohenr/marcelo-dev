import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const languages = ['pt', 'en'];
for (const language of languages) {
  const path = language === 'pt' ? '/' : `/${language}/`;
  const url = `https://marcelodev.online${path}`;
  const html = await readFile(resolve(dist, path.slice(1), 'index.html'), 'utf8');
  // No scripts or remote resources are executed: validate what a crawler receives.
  const dom = new JSDOM(html, { url });
  const { document } = dom.window;
  assert.equal(document.documentElement.lang, language === 'pt' ? 'pt-BR' : language);
  assert.equal(document.querySelectorAll('h1').length, 1);
  assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(document.querySelector('link[rel="canonical"]').href, url);
  assert.equal(document.querySelectorAll('link[rel="alternate"][hreflang]').length, languages.length + 1);
  for (const code of languages) {
    assert.equal(document.querySelector(`link[hreflang="${code}"]`).href, `https://marcelodev.online${code === 'pt' ? '/' : `/${code}/`}`);
  }
  assert.equal(document.querySelectorAll('meta[property="og:locale:alternate"]').length, languages.length - 1);
  assert.equal(document.querySelectorAll('.project-showcase').length, 5);
  assert.ok(document.querySelector('a[href="https://ronaldoleaonutri.online/"]'));
  assert.ok(document.querySelector('a[href="https://monopoliopods.com/"]'));
  assert.ok(!/Recife|Pernambuco|\/src\/assets\//i.test(html));
  assert.ok(!document.querySelector('.motion-toggle'));
  const serviceCopy = { pt: 'projetos web sob medida', en: 'custom web projects' };
  assert.ok(document.querySelector('#servicos').textContent.includes(serviceCopy[language]));
  assert.equal(document.querySelectorAll('.service-faq-list details').length, 6);
  assert.equal(document.querySelectorAll('.language-options a').length, 2);
  assert.equal(document.querySelector('link[rel="icon"]').getAttribute('href'), '/favicon.png?v=3');
  assert.equal(document.querySelector('link[rel="apple-touch-icon"]').getAttribute('href'), '/apple-touch-icon.png?v=3');
  const schema = JSON.parse(document.querySelector('#site-schema').textContent);
  assert.equal(schema['@graph'].find(item => item['@type'] === 'Organization').areaServed, 'Worldwide');
  for (const image of document.images) {
    assert.ok(image.alt || image.closest('[aria-hidden="true"]'), `Image missing description: ${image.src}`);
  }
  for (const element of document.querySelectorAll('img[src], script[src], link[rel="stylesheet"], link[rel="preload"]')) {
    const resource = new URL(element.getAttribute('src') ?? element.getAttribute('href'), url);
    if (resource.origin === new URL(url).origin) await access(resolve(dist, decodeURIComponent(resource.pathname.slice(1))));
  }
  await access(resolve(dist, new URL(document.querySelector('meta[property="og:image"]').content).pathname.slice(1)));
  const catalog = schema['@graph'].find(item => item['@type'] === 'Organization').hasOfferCatalog;
  for (const offer of catalog.itemListElement) {
    assert.ok(document.getElementById(new URL(offer.itemOffered.url).hash.slice(1)));
  }
  dom.window.close();
  console.log(`Verified static HTML, SEO, links and assets: ${path}`);
}
const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) ?? []).length, languages.length);
for (const code of languages) assert.ok(sitemap.includes(`<loc>https://marcelodev.online${code === 'pt' ? '/' : `/${code}/`}</loc>`));
assert.ok(!/\/es\/|\/fr\//.test(sitemap));
for (const code of ['es', 'fr']) {
  await assert.rejects(access(resolve(dist, code, 'index.html')), { code: 'ENOENT' });
}
