import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Books from './Pages/Books';
import Checkout from './Pages/Checkout';

export default function Routes() {
	return useRoutes([
		{
			index: true,
			element: <Home />,
		},
		{
			path: "./Pages/Books",
			element: <Books />,
		},
		{
			path: "./Pages/Checkout",
			element: <Checkout />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
		

		/* 
			Routing instructions go here.
		*/
	]);
}
