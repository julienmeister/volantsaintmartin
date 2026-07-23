import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/home/home-page').then((m) => m.HomePage),
	},
	{
		path: 'club',
		loadComponent: () =>
			import('./features/club/club-page').then((m) => m.ClubPage),
	},
	{
		path: 'entrainements',
		loadComponent: () =>
			import('./features/entrainements/entrainements-page').then(
				(m) => m.EntrainementsPage,
			),
	},
	{
		path: 'competitions',
		loadComponent: () =>
			import('./features/competitions/competitions-page').then(
				(m) => m.CompetitionsPage,
			),
	},
	{
		path: 'agenda',
		loadComponent: () =>
			import('./features/agenda/agenda-page').then((m) => m.AgendaPage),
	},
	{
		path: 'informations',
		loadComponent: () =>
			import('./features/informations/informations-page').then(
				(m) => m.InformationsPage,
			),
	},
	{
		path: 'inscription',
		loadComponent: () =>
			import('./features/inscription/inscription-page').then(
				(m) => m.InscriptionPage,
			),
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./features/contact/contact-page').then((m) => m.ContactPage),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
