import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlePage } from '../../shared/components/article-page/article-page';
import { getCompetitionsArticleBySlug } from './competitions-articles';

@Component({
  selector: 'app-competitions-article-page',
  standalone: true,
  imports: [ArticlePage],
  template: `
    <app-article-page [article]="article()" [backLink]="backLink" [backLabel]="backLabel" />
  `,
})
export class CompetitionsArticlePage {
  private readonly route = inject(ActivatedRoute);

  readonly backLink = '/competitions';
  readonly backLabel = 'Retour aux articles compétitions';

  readonly article = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    return getCompetitionsArticleBySlug(slug);
  });
}