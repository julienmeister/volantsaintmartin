export type SeoOpenGraphType = 'website' | 'article';

export interface JsonLdNode {
  '@context': string;
  '@type'?: string;
  [key: string]: unknown;
}

export interface SeoConfig {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: SeoOpenGraphType;
  robots?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: JsonLdNode | JsonLdNode[];
}
