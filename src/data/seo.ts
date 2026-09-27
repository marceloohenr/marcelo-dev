import { contactInfo } from './contact';
import { projects } from './projects';
import { services } from './services';
import { siteMetadata } from './site';
import { languagePath, translate, type Language } from '../i18n/language';
import { locales, supportedLanguages } from '../i18n/locales';

const baseUrl = siteMetadata.canonicalUrl;
const absolute = (path: string) => new URL(path, baseUrl).href;
const searchCopy: Record<Language, { title: string; description: string; role: string; catalog: string; portfolio: string }> = {
  pt: { title: siteMetadata.title, description: siteMetadata.description, role: siteMetadata.role, catalog: 'Serviços de desenvolvimento web', portfolio: 'Portfólio de projetos web' },
  en: {
    title: 'Freelance Web Developer & Landing Pages | Marcelo Henrique',
    description: 'Hire a freelance web developer for custom landing pages, responsive websites and React web applications. UI/UX and technical SEO for clients worldwide.',
    role: 'Full Stack Developer & UI/UX', catalog: 'Web development services', portfolio: 'Web project portfolio',
  },
};

export function getSeo(language: Language) {
  const t = (text: string) => translate(text, language);
  const url = absolute(languagePath(language));
  const { title, description, role, catalog, portfolio } = searchCopy[language];
  const image = absolute(language === 'pt' ? '/og-cover.svg' : `/og-cover-${language}.svg`);
  const imageAlt = `${siteMetadata.personName} - ${role}`;
  const lang = locales[language].htmlLang;
  const sameAs = [contactInfo.githubUrl, contactInfo.linkedinUrl, contactInfo.instagramUrl];
  const alternates = [
    ...supportedLanguages.map(code => ({ language: code, href: absolute(languagePath(code)) })),
    { language: 'x-default', href: baseUrl },
  ];
  const meta: { name?: string; property?: string; content: string }[] = [
    ...Object.entries({
      description, author: siteMetadata.personName, creator: siteMetadata.personName,
      publisher: siteMetadata.brandName, 'application-name': siteMetadata.shortTitle,
      'theme-color': siteMetadata.themeColor, 'color-scheme': 'dark',
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      'twitter:card': 'summary_large_image', 'twitter:title': title,
      'twitter:description': description, 'twitter:image': image, 'twitter:image:alt': imageAlt,
    }).map(([name, content]) => ({ name, content })),
    ...Object.entries({
      'og:locale': locales[language].ogLocale,
      'og:type': 'website', 'og:title': title, 'og:description': description, 'og:url': url,
      'og:site_name': siteMetadata.brandName, 'og:image': image, 'og:image:secure_url': image,
      'og:image:type': 'image/svg+xml', 'og:image:width': '1200', 'og:image:height': '630', 'og:image:alt': imageAlt,
    }).map(([property, content]) => ({ property, content })),
    ...supportedLanguages.filter(code => code !== language).map(code => ({ property: 'og:locale:alternate', content: locales[code].ogLocale })),
  ];
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${url}#page`, url, name: title, description,
        inLanguage: lang, isPartOf: { '@id': `${url}#website` }, about: { '@id': `${baseUrl}#business` },
      },
      {
        '@type': 'WebSite', '@id': `${url}#website`, url, name: siteMetadata.brandName,
        inLanguage: lang, description, publisher: { '@id': `${baseUrl}#person` },
      },
      {
        '@type': 'Person', '@id': `${baseUrl}#person`, name: siteMetadata.personName,
        url: baseUrl, jobTitle: role,
        email: contactInfo.email, sameAs, knowsLanguage: ['Portuguese', 'English'],
        knowsAbout: ['Web development', 'React', 'TypeScript', 'UI/UX', 'Technical SEO'],
      },
      {
        '@type': 'Organization', '@id': `${baseUrl}#business`, name: siteMetadata.brandName,
        url: baseUrl, logo: absolute('/favicon.png'), founder: { '@id': `${baseUrl}#person` },
        description, sameAs, areaServed: 'Worldwide',
        contactPoint: {
          '@type': 'ContactPoint', contactType: 'sales', email: contactInfo.email,
          telephone: `+${contactInfo.whatsappNumber}`, availableLanguage: ['Portuguese', 'English'], areaServed: 'Worldwide',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: catalog,
          itemListElement: services.map(service => ({
            '@type': 'Offer', itemOffered: {
              '@type': 'Service', '@id': `${url}#${service.id}-service`, url: `${url}#${service.id}`,
              name: t(service.title), serviceType: t(service.title), description: t(service.description),
              areaServed: 'Worldwide', provider: { '@id': `${baseUrl}#business` },
            },
          })),
        },
      },
      {
        '@type': 'ItemList', '@id': `${url}#portfolio`, name: portfolio,
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem', position: index + 1,
          item: {
            '@type': 'CreativeWork', name: project.title, url: project.projectUrl,
            description: t(project.description), image: absolute(project.previewImage),
            author: { '@id': `${baseUrl}#person` },
          },
        })),
      },
    ],
  };
  return { title, description, url, lang, alternates, meta, structuredData };
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]!);

// The same source feeds the browser and both pre-rendered pages.
export function renderSeoHead(language: Language) {
  const seo = getSeo(language);
  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<link rel="canonical" href="${seo.url}" />`,
    ...seo.alternates.map(item => `<link rel="alternate" hreflang="${item.language}" href="${item.href}" />`),
    ...seo.meta.map(item => `<meta ${item.name ? `name="${item.name}"` : `property="${item.property}"`} content="${escapeHtml(item.content)}" />`),
    `<script id="site-schema" type="application/ld+json">${JSON.stringify(seo.structuredData).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}
