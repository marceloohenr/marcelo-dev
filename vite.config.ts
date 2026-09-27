import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getLanguage } from './src/i18n/language';
import { locales } from './src/i18n/locales';
import { renderSeoHead } from './src/data/seo';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'localized-seo',
    transformIndexHtml(html, context) {
      const language = getLanguage(context.path);
      return html
        .replace(/<html lang="[^"]+">/, `<html lang="${locales[language].htmlLang}">`)
        .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => `<!--seo:start-->\n    ${renderSeoHead(language)}\n    <!--seo:end-->`);
    },
  }],
  build: { manifest: true, assetsInlineLimit: 0 },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
