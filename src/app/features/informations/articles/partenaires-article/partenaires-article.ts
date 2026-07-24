import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';

export const PARTENAIRES_INTRO =
  'Découvrez les structures et acteurs qui soutiennent le club, nos actions et le développement du badminton local.';

@Component({
  selector: 'app-partenaires-article',
  standalone: true,
  templateUrl: './partenaires-article.html',
  styleUrl: './partenaires-article.scss',
})
export class PartenairesArticle {
  private readonly document = inject(DOCUMENT);

  readonly intro = PARTENAIRES_INTRO;
  readonly subliteamLogoSrc = this.assetUrl('images/partners/subliteam.png');
  readonly sportsRaquettesLogoSrc = this.assetUrl('images/partners/sports-raquettes.png');

  private assetUrl(path: string): string {
    return new URL(path, this.document.baseURI).toString();
  }
}
