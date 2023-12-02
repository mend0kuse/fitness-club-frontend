import { createHistoryRouter, createRoute } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { sample } from 'effector';
import { appStarted } from '@/shared/config';

export const routes = {
	home: createRoute(),
	game: createRoute(),
};

export const routesMap = [
	{ path: '/', route: routes.home },
	{ path: '/game', route: routes.game },
];

export const router = createHistoryRouter({
	routes: routesMap,
});

sample({
	clock: appStarted,
	fn: () => createBrowserHistory(),
	target: router.setHistory,
});
