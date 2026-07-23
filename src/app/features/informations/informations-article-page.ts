import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlePage } from '../../shared/components/article-page/article-page';
import { getInformationsArticleBySlug } from './informations-articles';

@Component({
  selector: 'app-informations-article-page',
  standalone: true,
  imports: [ArticlePage],
  template: `
    <app-article-page [article]="article()" [backLink]="backLink" [backLabel]="backLabel" />
  `,
})
export class InformationsArticlePage {
  private readonly route = inject(ActivatedRoute);

  readonly backLink = '/informations';
  readonly backLabel = 'Retour aux informations';

  readonly article = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    return getInformationsArticleBySlug(slug);
  });
}
