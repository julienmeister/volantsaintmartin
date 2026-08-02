# Volantsaintmartin

Application Angular 22 avec rendu SSR + prerender SEO-first.

## Scripts utiles

```bash
npm start
npm run build
npm run build:ssr
npm run build:prerender
npm run serve:ssr
npm run lint
```

## Architecture de rendu

- Routing applicatif: `src/app/app.routes.ts`
- Routing serveur SSR/prerender: `src/app/app.routes.server.ts`
- Bootstrap client: `src/main.ts`
- Bootstrap serveur: `src/main.server.ts`
- Configuration client: `src/app/app.config.ts`
- Configuration serveur: `src/app/app.config.server.ts`
- Entrée Node SSR: `src/server.ts`

Le SEO est géré de façon centralisée et s'applique côté serveur dès le HTML initial.

## Prerender configuré

Routes statiques pré-générées:

- `/`
- `/club`
- `/entrainements`
- `/competitions`
- `/agenda`
- `/informations`
- `/inscription`
- `/contact`
- `/mentions-legales-confidentialite`

Routes dynamiques pré-générées via paramètres connus:

- `/club/articles/:slug`
- `/competitions/articles/:slug`
- `/informations/articles/:slug`

Les slugs sont fournis depuis les datasets d'articles dans `src/app/features/**/**-articles.ts`.

## 404 et SEO

- Côté app: `NotFoundPage` (route `**`) en `noindex,nofollow`
- Côté SSR: réponse HTTP 404 pour toute route inconnue (server route `**`)
- Côté Apache statique: `ErrorDocument 404 /404.html`

## Déploiement OVH Apache

Mode recommandé (mutualisé sans Node): prerender statique.

1. Générer:

```bash
npm run build:prerender
```

2. Déployer le contenu de `dist/volantsaintmartin/browser/`.

3. Conserver le fichier `.htaccess` fourni (HTTPS + host canonique + vraie 404).

Mode alternatif (serveur Node disponible): SSR runtime.

1. Générer:

```bash
npm run build:ssr
```

2. Lancer:

```bash
npm run serve:ssr
```

3. Reverse proxy Apache/Nginx vers le process Node.

## Vérifications SEO rapides

En local, vérifier le HTML brut (sans JS) avec `curl`:

```bash
curl -sS -D - http://localhost:4300/club
```

Contrôler la présence de:

- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- OpenGraph (`og:title`, `og:description`, `og:url`)
- Twitter Cards
- JSON-LD
