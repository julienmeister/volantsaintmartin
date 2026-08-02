import { ActivatedRouteSnapshot } from '@angular/router';

import { SeoConfig } from './seo-config';

export interface SeoRouteData {
  seo: SeoConfig;
}

export interface SeoResolvedRouteData {
  seo?: SeoConfig;
  seoResolved?: Partial<SeoConfig>;
}

export function getDeepestRouteSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let current = snapshot;

  while (current.firstChild) {
    current = current.firstChild;
  }

  return current;
}

export function getRouteSeoConfig(snapshot: ActivatedRouteSnapshot): SeoConfig | undefined {
  const routeData = snapshot.data as SeoResolvedRouteData;

  if (!routeData.seo && !routeData.seoResolved) {
    return undefined;
  }

  const merged = {
    ...(routeData.seo ?? {}),
    ...(routeData.seoResolved ?? {}),
  };

  if (!merged.title) {
    return undefined;
  }

  return {
    ...merged,
    title: merged.title,
  };
}
