import { Component } from '@angular/core';

export const TOURNOI_INTERNE_INTRO =
  'Comme pour la saison dernière, nous allons organiser des tournois internes VSM. Le but : mieux nous connaître et ne pas toujours jouer avec les mêmes personnes.';

@Component({
  selector: 'app-tournoi-interne-article',
  standalone: true,
  templateUrl: './tournoi-interne-article.html',
  styleUrl: './tournoi-interne-article.scss',
})
export class TournoiInterneArticle {
  readonly intro = TOURNOI_INTERNE_INTRO;
}