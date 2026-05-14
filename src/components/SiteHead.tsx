import { useEffect } from 'react';
import { contactInfo } from '../data/contact';
import { projects } from '../data/projects';
import { services } from '../data/services';
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

const upsertLink = (rel: string, href: string, attributes?: Record<string, string>) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);

  Object.entries(attributes ?? {}).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
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

const absoluteUrl = (path: string) => new URL(path, siteMetadata.canonicalUrl).toString();

const SiteHead = () => {
  useEffect(() => {
    document.documentElement.lang = siteMetadata.language;
    document.title = siteMetadata.title;

    upsertLink('canonical', siteMetadata.canonicalUrl);
    upsertLink('manifest', '/site.webmanifest');
    upsertLink('sitemap', '/sitemap.xml', { type: 'application/xml' });

    upsertMetaByName('description', siteMetadata.description);
    upsertMetaByName('keywords', siteMetadata.keywords);
    upsertMetaByName('author', siteMetadata.personName);
    upsertMetaByName('creator', siteMetadata.personName);
    upsertMetaByName('publisher', siteMetadata.brandName);
    upsertMetaByName('application-name', siteMetadata.shortTitle);
    upsertMetaByName('theme-color', siteMetadata.themeColor);
    upsertMetaByName('color-scheme', 'dark');
    upsertMetaByName('geo.region', 'BR-PE');
    upsertMetaByName('geo.placename', siteMetadata.city);
    upsertMetaByName('geo.position', `${siteMetadata.geoLatitude};${siteMetadata.geoLongitude}`);
    upsertMetaByName('ICBM', `${siteMetadata.geoLatitude}, ${siteMetadata.geoLongitude}`);
    upsertMetaByName(
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    upsertMetaByName('googlebot', 'index, follow, max-image-preview:large');
    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', siteMetadata.title);
    upsertMetaByName('twitter:description', siteMetadata.description);
    upsertMetaByName('twitter:image', siteMetadata.ogImageUrl);
    upsertMetaByName('twitter:image:alt', `${siteMetadata.personName} - ${siteMetadata.role}`);

    upsertMetaByProperty('og:locale', siteMetadata.locale);
    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:title', siteMetadata.title);
    upsertMetaByProperty('og:description', siteMetadata.description);
    upsertMetaByProperty('og:url', siteMetadata.canonicalUrl);
    upsertMetaByProperty('og:site_name', siteMetadata.siteName);
    upsertMetaByProperty('og:image', siteMetadata.ogImageUrl);
    upsertMetaByProperty('og:image:secure_url', siteMetadata.ogImageUrl);
    upsertMetaByProperty('og:image:type', 'image/svg+xml');
    upsertMetaByProperty('og:image:width', '1200');
    upsertMetaByProperty('og:image:height', '630');
    upsertMetaByProperty('og:image:alt', `${siteMetadata.personName} - portfólio de desenvolvimento web`);

    upsertJsonLd('website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteMetadata.canonicalUrl}#website`,
      name: siteMetadata.siteName,
      alternateName: siteMetadata.shortTitle,
      url: siteMetadata.canonicalUrl,
      inLanguage: siteMetadata.language,
      description: siteMetadata.description,
      publisher: {
        '@id': `${siteMetadata.canonicalUrl}#person`,
      },
    });

    upsertJsonLd('person-schema', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${siteMetadata.canonicalUrl}#person`,
      name: siteMetadata.personName,
      alternateName: siteMetadata.brandName,
      jobTitle: siteMetadata.role,
      url: siteMetadata.canonicalUrl,
      image: siteMetadata.ogImageUrl,
      email: contactInfo.email,
      telephone: contactInfo.whatsappNumber,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteMetadata.city,
        addressRegion: siteMetadata.region,
        addressCountry: siteMetadata.addressCountryCode,
      },
      sameAs: [contactInfo.githubUrl, contactInfo.linkedinUrl, contactInfo.instagramUrl],
      knowsAbout: siteMetadata.keywordList,
    });

    upsertJsonLd('professional-service-schema', {
      '@context': 'https://schema.org',
      '@type': siteMetadata.businessType,
      '@id': `${siteMetadata.canonicalUrl}#professional-service`,
      name: siteMetadata.brandName,
      legalName: siteMetadata.personName,
      founder: {
        '@id': `${siteMetadata.canonicalUrl}#person`,
      },
      url: siteMetadata.canonicalUrl,
      image: siteMetadata.ogImageUrl,
      logo: absoluteUrl('/favicon.svg'),
      description: siteMetadata.description,
      priceRange: siteMetadata.priceRange,
      areaServed: [
        { '@type': 'City', name: siteMetadata.city },
        { '@type': 'State', name: siteMetadata.region },
        { '@type': 'Country', name: siteMetadata.country },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteMetadata.city,
        addressRegion: siteMetadata.region,
        addressCountry: siteMetadata.addressCountryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteMetadata.geoLatitude,
        longitude: siteMetadata.geoLongitude,
      },
      serviceType: siteMetadata.serviceType,
      knowsAbout: siteMetadata.keywordList,
      sameAs: [contactInfo.githubUrl, contactInfo.linkedinUrl, contactInfo.instagramUrl],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          areaServed: siteMetadata.serviceArea,
          availableLanguage: ['Portuguese', 'pt-BR'],
          email: contactInfo.email,
          telephone: contactInfo.whatsappNumber,
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de desenvolvimento web',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            areaServed: siteMetadata.serviceArea,
            provider: {
              '@id': `${siteMetadata.canonicalUrl}#professional-service`,
            },
          },
        })),
      },
    });

    upsertJsonLd('portfolio-schema', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${siteMetadata.canonicalUrl}#portfolio`,
      name: 'Portfólio de projetos web',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: project.projectUrl,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: absoluteUrl(project.previewImage),
          keywords: project.technologies.join(', '),
        },
      })),
    });

    upsertJsonLd('breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: siteMetadata.canonicalUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projetos',
          item: `${siteMetadata.canonicalUrl}#projetos`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Serviços',
          item: `${siteMetadata.canonicalUrl}#servicos`,
        },
      ],
    });
  }, []);

  return null;
};

export default SiteHead;
