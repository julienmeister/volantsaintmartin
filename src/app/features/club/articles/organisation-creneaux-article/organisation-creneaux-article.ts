import { Component } from '@angular/core';

export const ORGANISATION_CRENEAUX_INTRO =
  'À l’exception du créneau du dimanche matin qui est en partie réservé pour les entraînements dirigés par Maël...';

@Component({
  selector: 'app-organisation-creneaux-article',
  standalone: true,
  templateUrl: './organisation-creneaux-article.html',
  styleUrl: './organisation-creneaux-article.scss',
})
export class OrganisationCreneauxArticle {
  readonly intro = ORGANISATION_CRENEAUX_INTRO;
}
