import { createHashRouter, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';

import { Error } from './pages/Error/Error';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Chat } from './pages/Chat/Char';

const router = createHashRouter([
	{
		path: '/',
		element: < RootLayout />,
		errorElement: < Error />,
		children: [
			{ index: true, element: < Home /> },
			{ path: '/blog', element: < Blog /> },
			{ path: '/chat', element: < Chat /> },
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
