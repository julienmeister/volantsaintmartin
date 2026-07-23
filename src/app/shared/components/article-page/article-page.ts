import { NgComponentOutlet } from '@angular/common';
import { Component, Type, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type SharedArticlePageItem = {
  title: string;
  component: Type<unknown>;
};

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterLink, NgComponentOutlet],
  templateUrl: './article-page.html',
  styleUrl: './article-page.scss',
})
export class ArticlePage {
  readonly article = input<SharedArticlePageItem | undefined>(undefined);
  readonly backLink = input<string>('/');
  readonly backLabel = input<string>('Retour');
  readonly notFoundTitle = input<string>('Article introuvable');
  readonly notFoundText = input<string>('Cet article n existe pas ou n est plus disponible.');
}
