import { Component } from '@angular/core';

export const LE_BUREAU_INTRO =
  'Le bureau est compose de benevoles qui coordonnent la vie du club et assurent la bonne organisation de la saison.';

@Component({
  selector: 'app-le-bureau-article',
  standalone: true,
  templateUrl: './le-bureau-article.html',
  styleUrl: './le-bureau-article.scss',
})
export class LeBureauArticle {
  readonly intro = LE_BUREAU_INTRO;
}
