import { Type } from '@angular/core';
import {
  INTERCLUBS_INTRO,
  InterclubsArticle,
} from './articles/interclubs-article/interclubs-article';
import {
  TOURNOI_INTERNE_INTRO,
  TournoiInterneArticle,
} from './articles/tournoi-interne-article/tournoi-interne-article';
import {
  TOURNOI_EXTERNE_INTRO,
  TournoiExterneArticle,
} from './articles/tournoi-externe-article/tournoi-externe-article';

export type CompetitionsArticle = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  previewText: string;
  component: Type<unknown>;
};

export const COMPETITIONS_ARTICLES: CompetitionsArticle[] = [
  {
    slug: 'interclubs',
    title: 'Interclubs',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Interclubs du Volant Saint Martin',
    previewText: INTERCLUBS_INTRO,
    component: InterclubsArticle,
  },
  {
    slug: 'tournoi-interne',
    title: 'Tournois internes',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Tournois internes du Volant Saint Martin',
    previewText: TOURNOI_INTERNE_INTRO,
    component: TournoiInterneArticle,
  },
  {
    slug: 'tournoi-externe',
    title: 'Tournois externes',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Tournois externes du Volant Saint Martin',
    previewText: TOURNOI_EXTERNE_INTRO,
    component: TournoiExterneArticle,
  },
];

export function getCompetitionsArticleBySlug(slug: string): CompetitionsArticle | undefined {
  return COMPETITIONS_ARTICLES.find((article) => article.slug === slug);
}