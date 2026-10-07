import { Type } from '@angular/core';
import { ANNIVERSAIRE_INTRO, AnniversaireArticle } from './articles/20ans/20ans-article';

export type HomeArticle = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  previewText: string;
  component: Type<unknown>;
};

export const HOME_ARTICLES: HomeArticle[] = [
  {
    slug: '20ans',
    title: 'Bientôt 20 ans et nouveau site',
    imageSrc: 'images/articles/20ans.jpeg',
    imageAlt: 'Logo du Volant Saint Martin',
    previewText: ANNIVERSAIRE_INTRO,
    component: AnniversaireArticle,
  },
];

export function getHomeArticleBySlug(slug: string): HomeArticle | undefined {
  return HOME_ARTICLES.find((article) => article.slug === slug);
}
