import { SEO_BASE_URL, SEO_SITE_NAME } from './seo.constants';
import { SeoConfig } from './seo-config';

export interface SeoArticleSource {
  slug: string;
  title: string;
  previewText: string;
  imageSrc: string;
}

export function normalizePath(pathname: string): string {
  const cleanPath = pathname.split(/[?#]/)[0] ?? '/';
  const withLeadingSlash = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;

  if (withLeadingSlash === '/' || withLeadingSlash === '') {
    return '/';
  }

  return withLeadingSlash.replace(/\/+$/, '');
}

export function toAbsoluteUrl(value: string, baseUrl: string = SEO_BASE_URL): string {
  return new URL(value, `${baseUrl}/`).toString();
}

export function buildCanonicalFromUrl(currentUrl: string, baseUrl: string = SEO_BASE_URL): string {
  const normalizedPath = normalizePath(currentUrl);
  return toAbsoluteUrl(normalizedPath, baseUrl);
}

export function buildFullTitle(pageTitle: string, siteName: string = SEO_SITE_NAME): string {
  return `${pageTitle} | ${siteName}`;
}

export function buildArticleSeoConfig(article: SeoArticleSource, sectionPath: string): SeoConfig {
  return {
    title: article.title,
    description: article.previewText,
    canonical: `${sectionPath}/${article.slug}`,
    image: article.imageSrc,
    type: 'article',
    keywords: ['badminton', article.title.toLowerCase(), sectionPath.replace('/', '')],
  };
}

export function truncateDescription(value: string, maxLength = 160): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}
