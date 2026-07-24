import { Component } from '@angular/core';
import { ArticleCard } from '../../shared/components/article-card/article-card';
import { COMPETITIONS_ARTICLES } from './competitions-articles';

@Component({
  selector: 'app-competitions-page',
  standalone: true,
  imports: [ArticleCard],
  templateUrl: './competitions-page.html',
  styleUrl: './competitions-page.scss',
})
export class CompetitionsPage {
  readonly articleCards = COMPETITIONS_ARTICLES.map((article) => ({
    title: article.title,
    articleText: article.previewText,
    imageSrc: article.imageSrc,
    imageAlt: article.imageAlt ?? article.title,
    link: `/competitions/articles/${article.slug}`,
    buttonLabel: 'Voir plus',
  }));
}
