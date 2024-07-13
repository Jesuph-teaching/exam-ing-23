import CartProvider from '../Providers/CartProvider';

const AppProviders = ({ children }) => {
	return <CartProvider>{children}</CartProvider>;
};

export default AppProviders;
