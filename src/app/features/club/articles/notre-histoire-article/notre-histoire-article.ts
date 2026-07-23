import { Component } from '@angular/core';

export const NOTRE_HISTOIRE_INTRO =
  'Le club a été créé en 2007 par Xavier. Il a voulu créer ce club avec un esprit de camaraderie et une bonne humeur.';

@Component({
  selector: 'app-notre-histoire-article',
  standalone: true,
  templateUrl: './notre-histoire-article.html',
  styleUrl: './notre-histoire-article.scss',
})
export class NotreHistoireArticle {
  readonly intro = NOTRE_HISTOIRE_INTRO;
}
