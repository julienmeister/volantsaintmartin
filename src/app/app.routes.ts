import { ResolveFn, Routes } from '@angular/router';

import { SeoConfig, buildArticleSeoConfig, truncateDescription } from './core/seo';
import { getClubArticleBySlug } from './features/club/club-articles';
import { getCompetitionsArticleBySlug } from './features/competitions/competitions-articles';
import { getInformationsArticleBySlug } from './features/informations/informations-articles';

const clubArticleSeoResolver: ResolveFn<Partial<SeoConfig>> = (route) => {
  const slug = route.paramMap.get('slug') ?? '';
  const article = getClubArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article du club introuvable',
      description: 'Cet article du club est introuvable.',
      noIndex: true,
      noFollow: true,
      robots: 'noindex,nofollow',
    };
  }

  return {
    ...buildArticleSeoConfig(article, '/club/articles'),
    description: truncateDescription(article.previewText),
  };
};

const competitionsArticleSeoResolver: ResolveFn<Partial<SeoConfig>> = (route) => {
  const slug = route.paramMap.get('slug') ?? '';
  const article = getCompetitionsArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article compétitions introuvable',
      description: 'Cet article competitions est introuvable.',
      noIndex: true,
      noFollow: true,
      robots: 'noindex,nofollow',
    };
  }

  return {
    ...buildArticleSeoConfig(article, '/competitions/articles'),
    description: truncateDescription(article.previewText),
  };
};

const informationsArticleSeoResolver: ResolveFn<Partial<SeoConfig>> = (route) => {
  const slug = route.paramMap.get('slug') ?? '';
  const article = getInformationsArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article informations introuvable',
      description: 'Cet article informations est introuvable.',
      noIndex: true,
      noFollow: true,
      robots: 'noindex,nofollow',
    };
  }

  return {
    ...buildArticleSeoConfig(article, '/informations/articles'),
    description: truncateDescription(article.previewText),
  };
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((m) => m.HomePage),
    data: {
      seo: {
        title: 'Accueil',
        description:
          'Bienvenue au Volant Saint Martin Badminton: actualites du club, agenda, competitions, inscription et informations pratiques.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'club',
    loadComponent: () => import('./features/club/club-page').then((m) => m.ClubPage),
    data: {
      seo: {
        title: 'Le Club',
        description:
          'Decouvrez le club Volant Saint Martin: histoire, organisation des creneaux et presentation du bureau.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'club/articles/:slug',
    loadComponent: () => import('./features/club/club-article-page').then((m) => m.ClubArticlePage),
    resolve: {
      seoResolved: clubArticleSeoResolver,
    },
    data: {
      seo: {
        title: 'Article du club',
        description: 'Article du club Volant Saint Martin Badminton.',
        type: 'article',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'entrainements',
    loadComponent: () =>
      import('./features/entrainements/entrainements-page').then((m) => m.EntrainementsPage),
    data: {
      seo: {
        title: 'Entrainements',
        description:
          'Consultez les creneaux et l organisation des entrainements du Volant Saint Martin Badminton.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'competitions',
    loadComponent: () =>
      import('./features/competitions/competitions-page').then((m) => m.CompetitionsPage),
    data: {
      seo: {
        title: 'Competitions',
        description:
          'Retrouvez les competitions du club: interclubs, tournois internes et tournois externes.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'competitions/articles/:slug',
    loadComponent: () =>
      import('./features/competitions/competitions-article-page').then(
        (m) => m.CompetitionsArticlePage,
      ),
    resolve: {
      seoResolved: competitionsArticleSeoResolver,
    },
    data: {
      seo: {
        title: 'Article competitions',
        description: 'Article competitions du Volant Saint Martin Badminton.',
        type: 'article',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'agenda',
    loadComponent: () => import('./features/agenda/agenda-page').then((m) => m.AgendaPage),
    data: {
      seo: {
        title: 'Agenda',
        description:
          'Consultez l agenda du Volant Saint Martin: evenements, rencontres, tournois et temps forts du club.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'informations',
    loadComponent: () =>
      import('./features/informations/informations-page').then((m) => m.InformationsPage),
    data: {
      seo: {
        title: 'Informations pratiques',
        description:
          'Toutes les informations utiles: FAQ, partenaires, fonctionnement et vie du Volant Saint Martin.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'informations/articles/:slug',
    loadComponent: () =>
      import('./features/informations/informations-article-page').then(
        (m) => m.InformationsArticlePage,
      ),
    resolve: {
      seoResolved: informationsArticleSeoResolver,
    },
    data: {
      seo: {
        title: 'Article informations',
        description: 'Article informations pratiques du Volant Saint Martin Badminton.',
        type: 'article',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./features/inscription/inscription-page').then((m) => m.InscriptionPage),
    data: {
      seo: {
        title: 'Inscription',
        description:
          'Retrouvez les modalites d inscription au Volant Saint Martin Badminton pour la saison en cours.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page').then((m) => m.ContactPage),
    data: {
      seo: {
        title: 'Contact',
        description:
          'Contactez le Volant Saint Martin Badminton pour toute question sur les entrainements, l inscription et la vie du club.',
      } satisfies SeoConfig,
    },
  },
  {
    path: 'mentions-legales-confidentialite',
    loadComponent: () =>
      import('./features/mentions-legales-confidentialite/mentions-legales-confidentialite-page').then(
        (m) => m.MentionsLegalesConfidentialitePage,
      ),
    data: {
      seo: {
        title: 'Mentions legales et confidentialite',
        description:
          'Consultez les mentions legales et la politique de confidentialite du Volant Saint Martin Badminton.',
      } satisfies SeoConfig,
    },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found-page').then((m) => m.NotFoundPage),
    data: {
      seo: {
        title: 'Page introuvable',
        description: 'La page demandee est introuvable sur le site du Volant Saint Martin Badminton.',
        noIndex: true,
        noFollow: true,
        robots: 'noindex,nofollow',
      } satisfies SeoConfig,
    },
  },
];
