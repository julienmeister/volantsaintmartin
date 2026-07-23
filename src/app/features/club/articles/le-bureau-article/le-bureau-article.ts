import { Component } from '@angular/core';

export const LE_BUREAU_INTRO =
  'Découvrez les membres du bureau du Volant Saint Martin, qui travaillent avec passion pour faire vivre le club et organiser des événements pour les membres.';

@Component({
  selector: 'app-le-bureau-article',
  standalone: true,
  templateUrl: './le-bureau-article.html',
  styleUrl: './le-bureau-article.scss',
})
export class LeBureauArticle {
  readonly intro = LE_BUREAU_INTRO;
}
