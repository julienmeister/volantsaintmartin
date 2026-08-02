import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { SEO_DEFAULT_DESCRIPTION } from './seo.constants';
import { SeoService } from './seo.service';
import { getDeepestRouteSnapshot, getRouteSeoConfig } from './seo-route-data';

@Component({
  selector: 'app-seo',
  template: '',
})
export class SeoComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly seoService = inject(SeoService);

  constructor() {
    this.applyCurrentRouteSeo();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.applyCurrentRouteSeo();
      });
  }

  private applyCurrentRouteSeo(): void {
    const snapshot = getDeepestRouteSnapshot(this.activatedRoute.snapshot);
    const routeConfig = getRouteSeoConfig(snapshot);

    if (!routeConfig) {
      return;
    }

    this.seoService.update({
      title: routeConfig.title,
      description: routeConfig.description ?? SEO_DEFAULT_DESCRIPTION,
      canonical: routeConfig.canonical ?? this.router.url,
      image: routeConfig.image,
      type: routeConfig.type,
      robots: routeConfig.robots,
      keywords: routeConfig.keywords,
      author: routeConfig.author,
      publishedTime: routeConfig.publishedTime,
      modifiedTime: routeConfig.modifiedTime,
      noIndex: routeConfig.noIndex,
      noFollow: routeConfig.noFollow,
      twitterCard: routeConfig.twitterCard,
      jsonLd: routeConfig.jsonLd,
    });
  }
}
