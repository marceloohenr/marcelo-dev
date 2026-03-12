import { useEffect } from 'react';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';

const upsertMetaByName = (name: string, content: string) => {
  let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let element = document.head.querySelector(
    `meta[property="${property}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertCanonicalLink = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const upsertJsonLd = (id: string, data: unknown) => {
  let element = document.head.querySelector(`#${id}`) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

const SiteHead = () => {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = siteMetadata.title;

    upsertCanonicalLink(siteMetadata.canonicalUrl);

    upsertMetaByName('description', siteMetadata.description);
    upsertMetaByName('keywords', siteMetadata.keywords);
    upsertMetaByName('author', siteMetadata.personName);
    upsertMetaByName('theme-color', siteMetadata.themeColor);
    upsertMetaByName('robots', 'index, follow');
    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', siteMetadata.title);
    upsertMetaByName('twitter:description', siteMetadata.description);
    upsertMetaByName('twitter:image', siteMetadata.ogImageUrl);

    upsertMetaByProperty('og:locale', siteMetadata.locale);
    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:title', siteMetadata.title);
    upsertMetaByProperty('og:description', siteMetadata.description);
    upsertMetaByProperty('og:url', siteMetadata.canonicalUrl);
    upsertMetaByProperty('og:site_name', siteMetadata.siteName);
    upsertMetaByProperty('og:image', siteMetadata.ogImageUrl);

    upsertJsonLd('site-schema', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteMetadata.personName,
      jobTitle: siteMetadata.role,
      url: siteMetadata.canonicalUrl,
      image: siteMetadata.ogImageUrl,
      sameAs: [contactInfo.githubUrl, contactInfo.linkedinUrl, contactInfo.instagramUrl],
    });
  }, []);

  return null;
};

export default SiteHead;
