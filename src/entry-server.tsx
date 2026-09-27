import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import { LanguageContext } from './i18n/LanguageContext';
import type { Language } from './i18n/language';
import { getSeo, renderSeoHead } from './data/seo';
export { supportedLanguages, locales } from './i18n/locales';

export function renderPage(language: Language) {
  return {
    lang: getSeo(language).lang,
    head: renderSeoHead(language),
    body: renderToStaticMarkup(<LanguageContext.Provider value={language}><App /></LanguageContext.Provider>),
  };
}
