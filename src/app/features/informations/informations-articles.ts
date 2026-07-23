import { Type } from '@angular/core';
import {
  PARTENAIRES_INTRO,
  PartenairesArticle,
} from './articles/partenaires-article/partenaires-article';
import {
  QUESTIONS_FREQUENTES_INTRO,
  QuestionsFrequentesArticle,
} from './articles/questions-frequentes-article/questions-frequentes-article';

export type InformationsArticle = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  previewText: string;
  component: Type<unknown>;
};

export const INFORMATIONS_ARTICLES: InformationsArticle[] = [
  {
    slug: 'questions-frequentes',
    title: 'Questions fréquentes',
    imageSrc: 'images/logo-name.png',
    imageAlt: 'Questions fréquentes',
    previewText: QUESTIONS_FREQUENTES_INTRO,
    component: QuestionsFrequentesArticle,
  },
  {
    slug: 'partenaires',
    title: 'Partenaires',
    imageSrc: 'images/logo.png',
    imageAlt: 'Partenaires du club',
    previewText: PARTENAIRES_INTRO,
    component: PartenairesArticle,
  },
];

export function getInformationsArticleBySlug(slug: string): InformationsArticle | undefined {
  return INFORMATIONS_ARTICLES.find((article) => article.slug === slug);
}
