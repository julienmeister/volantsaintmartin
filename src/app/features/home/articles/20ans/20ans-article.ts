import { Component } from '@angular/core';

export const ANNIVERSAIRE_INTRO =
  'Cette année est particulièrement spéciale pour notre club : le Volant Saint Martin fête ses 20 ans !';

@Component({
  selector: 'app-20ans-article',
  standalone: true,
  templateUrl: './20ans-article.html',
  styleUrl: './20ans-article.scss',
})
export class AnniversaireArticle {
  readonly intro = ANNIVERSAIRE_INTRO;
}
