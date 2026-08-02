import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, REQUEST } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {
  SEO_BASE_URL,
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_IMAGE,
  SEO_DEFAULT_KEYWORDS,
  SEO_ORGANIZATION_JSON_LD,
  SEO_SITE_NAME,
} from './seo.constants';
import { JsonLdNode, SeoConfig } from './seo-config';
import { buildCanonicalFromUrl, buildFullTitle, toAbsoluteUrl, truncateDescription } from './seo.helpers';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly request = inject(REQUEST, { optional: true });

  update(config: SeoConfig): void {
    const normalizedConfig = this.normalizeConfig(config);

    this.titleService.setTitle(buildFullTitle(normalizedConfig.title));

    this.meta.updateTag({ name: 'description', content: normalizedConfig.description });
    this.meta.updateTag({ name: 'robots', content: normalizedConfig.robots });
    this.meta.updateTag({ name: 'keywords', content: normalizedConfig.keywords.join(', ') });
    this.meta.updateTag({ name: 'author', content: normalizedConfig.author });

    this.meta.updateTag({ property: 'og:site_name', content: SEO_SITE_NAME });
    this.meta.updateTag({ property: 'og:title', content: buildFullTitle(normalizedConfig.title) });
    this.meta.updateTag({ property: 'og:description', content: normalizedConfig.description });
    this.meta.updateTag({ property: 'og:type', content: normalizedConfig.type });
    this.meta.updateTag({ property: 'og:url', content: normalizedConfig.canonical });
    this.meta.updateTag({ property: 'og:image', content: normalizedConfig.image });

    this.meta.updateTag({ name: 'twitter:card', content: normalizedConfig.twitterCard });
    this.meta.updateTag({ name: 'twitter:title', content: buildFullTitle(normalizedConfig.title) });
    this.meta.updateTag({ name: 'twitter:description', content: normalizedConfig.description });
    this.meta.updateTag({ name: 'twitter:image', content: normalizedConfig.image });

    if (normalizedConfig.publishedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: normalizedConfig.publishedTime });
    } else {
      this.meta.removeTag("property='article:published_time'");
    }

    if (normalizedConfig.modifiedTime) {
      this.meta.updateTag({ property: 'article:modified_time', content: normalizedConfig.modifiedTime });
    } else {
      this.meta.removeTag("property='article:modified_time'");
    }

    this.updateCanonicalLink(normalizedConfig.canonical);
    this.updateJsonLd(normalizedConfig.jsonLd);
  }

  private normalizeConfig(config: SeoConfig): Required<
    Pick<SeoConfig, 'title' | 'description' | 'canonical' | 'image' | 'type' | 'robots' | 'keywords' | 'author' | 'twitterCard'>
  > &
    Pick<SeoConfig, 'publishedTime' | 'modifiedTime' | 'jsonLd'> {
    const canonical = config.canonical
      ? toAbsoluteUrl(config.canonical, SEO_BASE_URL)
      : this.resolveCurrentCanonical();

    const shouldNoIndex = config.noIndex ?? false;
    const shouldNoFollow = config.noFollow ?? false;

    return {
      title: config.title,
      description: truncateDescription(config.description ?? SEO_DEFAULT_DESCRIPTION),
      canonical,
      image: toAbsoluteUrl(config.image ?? SEO_DEFAULT_IMAGE, SEO_BASE_URL),
      type: config.type ?? 'website',
      robots: config.robots ?? `${shouldNoIndex ? 'noindex' : 'index'},${shouldNoFollow ? 'nofollow' : 'follow'}`,
      keywords: config.keywords ?? SEO_DEFAULT_KEYWORDS,
      author: config.author ?? SEO_SITE_NAME,
      twitterCard: config.twitterCard ?? 'summary_large_image',
      publishedTime: config.publishedTime,
      modifiedTime: config.modifiedTime,
      jsonLd: config.jsonLd,
    };
  }

  private resolveCurrentCanonical(): string {
    if (isPlatformServer(this.platformId) && this.request) {
      const requestUrl = new URL(this.request.url);
      return buildCanonicalFromUrl(`${requestUrl.pathname}${requestUrl.search}`, SEO_BASE_URL);
    }

    if (isPlatformBrowser(this.platformId) && this.document.location) {
      return buildCanonicalFromUrl(this.document.location.pathname + this.document.location.search, SEO_BASE_URL);
    }

    return `${SEO_BASE_URL}/`;
  }

  private updateCanonicalLink(canonicalUrl: string): void {
    const head = this.document.head;
    const current = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalLink = current ?? this.document.createElement('link');

    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', canonicalUrl);

    if (!current) {
      head.appendChild(canonicalLink);
    }
  }

  private updateJsonLd(pageJsonLd?: JsonLdNode | JsonLdNode[]): void {
    const graph: JsonLdNode[] = [SEO_ORGANIZATION_JSON_LD];

    if (pageJsonLd) {
      if (Array.isArray(pageJsonLd)) {
        graph.push(...pageJsonLd);
      } else {
        graph.push(pageJsonLd);
      }
    }

    const scriptId = 'app-seo-jsonld';
    const head = this.document.head;
    const current = head.querySelector<HTMLScriptElement>(`script#${scriptId}`);
    const script = current ?? this.document.createElement('script');

    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });

    if (!current) {
      head.appendChild(script);
    }
  }
}
