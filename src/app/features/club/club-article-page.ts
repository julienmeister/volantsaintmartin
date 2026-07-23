import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlePage } from '../../shared/components/article-page/article-page';
import { getClubArticleBySlug } from './club-articles';

@Component({
  selector: 'app-club-article-page',
  standalone: true,
  imports: [ArticlePage],
  template: `
    <app-article-page
      [article]="article()"
      [backLink]="backLink"
      [backLabel]="backLabel"
    />
  `,
})
export class ClubArticlePage {
  private readonly route = inject(ActivatedRoute);

  readonly backLink = '/club';
  readonly backLabel = 'Retour aux articles du club';

  readonly article = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    return getClubArticleBySlug(slug);
  });
}
