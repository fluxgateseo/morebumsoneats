/**
 * schema.org JSON-LD builders.
 * https://developers.google.com/search/docs/appearance/structured-data
 */
import { site } from '@/config/site';
import type { Faq } from '@/data/faqs';
import type { Service } from '@/data/services';
import { unsplashUrl } from './unsplash';

type JsonLd = Record<string, unknown>;

const absolute = (path: string) => new URL(path, site.url).toString();
const ORG_ID = absolute('/#organization');
const WEBSITE_ID = absolute('/#website');

export function organizationSchema(): JsonLd {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    logo: absolute('/favicon.svg'),
    image: unsplashUrl(site.defaultOgImage, { width: 1200, height: 630, format: 'jpg' }),
    email: site.contact.email,
    knowsAbout: ['Restaurant marketing', 'Hospitality marketing', 'Local SEO', 'Social media marketing'],
    sameAs: Object.values(site.social),
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: site.lang,
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function servicesSchema(services: Service[]): JsonLd {
  return {
    '@type': 'ItemList',
    name: `${site.name} services`,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        '@id': absolute(`/services/#${service.slug}`),
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: { '@id': ORG_ID },
        audience: { '@type': 'BusinessAudience', name: 'Restaurants, bars and hospitality venues' },
      },
    })),
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/** Wrap one or more nodes in a single @graph document. */
export function graph(...nodes: JsonLd[]): JsonLd {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export function webPageSchema(
  type: 'WebPage' | 'AboutPage' | 'ContactPage',
  { name, path, description }: { name: string; path: string; description: string },
): JsonLd {
  return {
    '@type': type,
    '@id': absolute(`${path}#webpage`),
    url: absolute(path),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}
