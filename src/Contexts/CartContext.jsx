import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart([...cart, item]);
	};

	const removeFromCart = (itemId) => {
		setCart(cart.filter((cartItem) => cartItem.id !== itemId));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
