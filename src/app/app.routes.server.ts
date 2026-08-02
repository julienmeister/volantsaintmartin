import { RenderMode, ServerRoute } from '@angular/ssr';

import { CLUB_ARTICLES } from './features/club/club-articles';
import { COMPETITIONS_ARTICLES } from './features/competitions/competitions-articles';
import { INFORMATIONS_ARTICLES } from './features/informations/informations-articles';

const PRERENDER_STATIC_ROUTES: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'club', renderMode: RenderMode.Prerender },
  { path: 'entrainements', renderMode: RenderMode.Prerender },
  { path: 'competitions', renderMode: RenderMode.Prerender },
  { path: 'agenda', renderMode: RenderMode.Prerender },
  { path: 'informations', renderMode: RenderMode.Prerender },
  { path: 'inscription', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'mentions-legales-confidentialite', renderMode: RenderMode.Prerender },
];

export const serverRoutes: ServerRoute[] = [
  ...PRERENDER_STATIC_ROUTES,
  {
    path: 'club/articles/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return CLUB_ARTICLES.map(({ slug }) => ({ slug }));
    },
  },
  {
    path: 'competitions/articles/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return COMPETITIONS_ARTICLES.map(({ slug }) => ({ slug }));
    },
  },
  {
    path: 'informations/articles/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return INFORMATIONS_ARTICLES.map(({ slug }) => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404,
  },
];
