import { createRoutesView, RouterProvider } from 'atomic-router-react';
import { router, routes } from '@/shared/routing';
import { Home } from '@/pages/home';
import { Game } from '@/pages/game';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import './styles/index.css';

const RoutesView = createRoutesView({
	routes: [
		{ route: routes.home, view: Home },
		{ route: routes.game, view: Game },
	],

	otherwise() {
		return <div>Page not found!</div>;
	},
});

export const App = () => {
	return (
		<MantineProvider>
			<RouterProvider router={router}>
				<RoutesView />
			</RouterProvider>
		</MantineProvider>
	);
};
