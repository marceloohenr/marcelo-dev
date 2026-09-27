import { useEffect } from 'react';
import { getSeo } from '../data/seo';
import { useLanguage } from '../i18n/LanguageContext';

export default function SiteHead() {
  const { language } = useLanguage();
  useEffect(() => {
    const seo = getSeo(language);
    document.documentElement.lang = seo.lang;
    document.title = seo.title;
    const upsert = (selector: string, tag: string, attributes: Record<string, string>) => {
      const element = document.head.querySelector(selector) ?? document.createElement(tag);
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
      if (!element.isConnected) document.head.appendChild(element);
      return element;
    };
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: seo.url });
    seo.alternates.forEach(item => upsert(`link[rel="alternate"][hreflang="${item.language}"]`, 'link', {
      rel: 'alternate', hreflang: item.language, href: item.href,
    }));
    document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach(element => element.remove());
    seo.meta.forEach(item => {
      const attributes: Record<string, string> = item.name ? { name: item.name, content: item.content } : { property: item.property!, content: item.content };
      const localeSelector = item.property === 'og:locale:alternate' ? `[content="${item.content}"]` : '';
      upsert(`meta[${item.name ? 'name' : 'property'}="${item.name ?? item.property}"]${localeSelector}`, 'meta', attributes);
    });
    upsert('#site-schema', 'script', { id: 'site-schema', type: 'application/ld+json' }).textContent = JSON.stringify(seo.structuredData);
  }, [language]);
  return null;
}
