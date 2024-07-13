import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext.jsx';

const useCart = () => {
	return useContext(CartContext);
};

export default useCart;
