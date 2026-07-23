import { Component } from '@angular/core';

export const PARTENAIRES_INTRO =
  'Découvrez les structures et acteurs qui soutiennent le club, nos actions et le développement du badminton local.';

@Component({
  selector: 'app-partenaires-article',
  standalone: true,
  templateUrl: './partenaires-article.html',
  styleUrl: './partenaires-article.scss',
})
export class PartenairesArticle {
  readonly intro = PARTENAIRES_INTRO;
}
