import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import CartButton from './Components/CartButton';
import Cart from './Components/Cart';
import CartProvider from './Providers/CartProvider';
import { Toaster } from 'react-hot-toast';
import Books from './Pages/Books';
import Home from './Pages/Home';

function App() {
	return (
		<BrowserRouter>
			{/*  where you should wrap CartProvider */}
			<CartProvider>
			<Routes />
			<CartButton />
			<Cart />
			<Toaster />
			</CartProvider>
			{/* closing tag of CartProvider */}
		</BrowserRouter>
	);
}

export default App;
