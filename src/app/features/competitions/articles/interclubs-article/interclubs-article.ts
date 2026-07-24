import { Component } from '@angular/core';

export const INTERCLUBS_INTRO =  "Si vous aimez vous challenger, alors les interclubs sont faits pour vous ! Les interclubs sont un moyen d’affronter d’autres clubs de badminton de la région toulousaine à raison d’une fois/mois dans la bonne humeur et la convivialité.";

@Component({
  selector: 'app-interclubs-article',
  standalone: true,
  templateUrl: './interclubs-article.html',
  styleUrl: './interclubs-article.scss',
})
export class InterclubsArticle {
  readonly intro = INTERCLUBS_INTRO;
}