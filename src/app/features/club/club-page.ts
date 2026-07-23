import { Component } from '@angular/core';
import { ArticleCard } from '../../shared/components/article-card/article-card';
import { CLUB_ARTICLES } from './club-articles';

@Component({
  selector: 'app-club-page',
  standalone: true,
  imports: [ArticleCard],
  templateUrl: './club-page.html',
  styleUrl: './club-page.scss',
})
export class ClubPage {
  readonly articleCards = CLUB_ARTICLES.map((article) => ({
    title: article.title,
    excerpt: article.excerpt ?? '',
    articleText: article.previewText,
    imageSrc: article.imageSrc,
    imageAlt: article.imageAlt ?? article.title,
    link: `/club/articles/${article.slug}`,
    buttonLabel: 'Voir plus',
  }));
}
