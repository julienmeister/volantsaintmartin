import { JsonLdNode } from './seo-config';

export const SEO_SITE_NAME = 'Volant Saint Martin Badminton';
export const SEO_BASE_URL = 'https://badminton-saint-martin.com';
export const SEO_DEFAULT_IMAGE = '/images/logo.png';
export const SEO_DEFAULT_DESCRIPTION =
  'Club de badminton a Saint Martin du Touch: entrainements, competitions, agenda, informations pratiques et inscription.';
export const SEO_DEFAULT_KEYWORDS = [
  'badminton',
  'club badminton toulouse',
  'volant saint martin',
  'entrainement badminton',
  'competitions badminton',
];

export const SEO_ORGANIZATION_JSON_LD: JsonLdNode = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: SEO_SITE_NAME,
  url: `${SEO_BASE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SEO_BASE_URL}${SEO_DEFAULT_IMAGE}`,
  },
  image: `${SEO_BASE_URL}${SEO_DEFAULT_IMAGE}`,
};
