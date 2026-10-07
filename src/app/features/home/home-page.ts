import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ARTICLES } from './home-articles';
import { ArticleCard } from '../../shared/components/article-card/article-card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ArticleCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly articleCards = HOME_ARTICLES.map((article) => ({
    title: article.title,
    articleText: article.previewText,
    imageSrc: article.imageSrc,
    imageAlt: article.imageAlt ?? article.title,
    link: `/home/articles/${article.slug}`,
    buttonLabel: 'Voir plus',
  }));
}
