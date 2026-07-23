import { Type } from '@angular/core';
import { LE_BUREAU_INTRO, LeBureauArticle } from './articles/le-bureau-article/le-bureau-article';
import {
  NOTRE_HISTOIRE_INTRO,
  NotreHistoireArticle,
} from './articles/notre-histoire-article/notre-histoire-article';
import {
  ORGANISATION_CRENEAUX_INTRO,
  OrganisationCreneauxArticle,
} from './articles/organisation-creneaux-article/organisation-creneaux-article';

export type ClubArticle = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  previewText: string;
  component: Type<unknown>;
};

export const CLUB_ARTICLES: ClubArticle[] = [
  {
    slug: 'notre-histoire',
    title: 'Notre histoire',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Logo du Volant Saint Martin',
    previewText: NOTRE_HISTOIRE_INTRO,
    component: NotreHistoireArticle,
  },
  {
    slug: 'organisation-des-creneaux',
    title: 'Organisation des créneaux',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Terrain de badminton',
    previewText: ORGANISATION_CRENEAUX_INTRO,
    component: OrganisationCreneauxArticle,
  },
  {
    slug: 'le-bureau',
    title: 'Le bureau',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Membres du bureau',
    previewText: LE_BUREAU_INTRO,
    component: LeBureauArticle,
  },
];

export function getClubArticleBySlug(slug: string): ClubArticle | undefined {
  return CLUB_ARTICLES.find((article) => article.slug === slug);
}
