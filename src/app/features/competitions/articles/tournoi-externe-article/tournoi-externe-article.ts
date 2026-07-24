import { Component } from '@angular/core';

export const TOURNOI_EXTERNE_INTRO =
  "Tout au long de la saison auront lieu des tournois externes. La liste de ces tournois est consultable sur le site badnet";

@Component({
  selector: 'app-tournoi-externe-article',
  standalone: true,
  templateUrl: './tournoi-externe-article.html',
  styleUrl: './tournoi-externe-article.scss',
})
export class TournoiExterneArticle {
  readonly intro = TOURNOI_EXTERNE_INTRO;
}