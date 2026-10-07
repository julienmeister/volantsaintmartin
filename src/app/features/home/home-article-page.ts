import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlePage } from '../../shared/components/article-page/article-page';
import { getHomeArticleBySlug } from './home-articles';

@Component({
  selector: 'app-home-article-page',
  standalone: true,
  imports: [ArticlePage],
  template: `
    <app-article-page [article]="article()" [backLink]="backLink" [backLabel]="backLabel" />
  `,
})
export class HomeArticlePage {
  private readonly route = inject(ActivatedRoute);

  readonly backLink = '/';
  readonly backLabel = "Retour à l'accueil";

  readonly article = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    return getHomeArticleBySlug(slug);
  });
}
