import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import CartButton from './Components/CartButton';
import Cart from './Components/Cart';
import CartProvider from './Providers/CartProvider';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				{/*  where you should wrap CartProvider */}
				<Routes />
				<CartButton />
				<Cart />
				<Toaster />
				{/* closing tag of CartProvider */}
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
