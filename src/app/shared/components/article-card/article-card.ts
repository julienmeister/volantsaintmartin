import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
})
export class ArticleCard {
  readonly title = input.required<string>();
  readonly excerpt = input<string>('');
  readonly articleText = input<string>('');
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input<string>('');
  readonly link = input.required<string>();
  readonly buttonLabel = input<string>('Voir plus');

  readonly previewText = computed(() => {
    const fromExcerpt = this.normalizeText(this.excerpt());
    if (fromExcerpt) {
      return fromExcerpt;
    }

    const fromArticle = this.normalizeText(this.articleText());
    if (!fromArticle) {
      return '';
    }

    return fromArticle.length > 180 ? `${fromArticle.slice(0, 180)}...` : fromArticle;
  });

  private normalizeText(value: string): string {
    return value.replace(/\s+/g, ' ').trim();
  }
}
