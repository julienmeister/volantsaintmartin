import { Component } from '@angular/core';
import { ArticleCard } from '../../shared/components/article-card/article-card';
import { INFORMATIONS_ARTICLES } from './informations-articles';

@Component({
  selector: 'app-informations-page',
  standalone: true,
  imports: [ArticleCard],
  templateUrl: './informations-page.html',
  styleUrl: './informations-page.scss',
})
export class InformationsPage {
  readonly articleCards = INFORMATIONS_ARTICLES.map((article) => ({
    title: article.title,
    articleText: article.previewText,
    imageSrc: article.imageSrc,
    imageAlt: article.imageAlt ?? article.title,
    link: `/informations/articles/${article.slug}`,
    buttonLabel: 'Voir plus',
  }));
}
