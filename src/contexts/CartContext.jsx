import { createContext, useReducer, useState } from 'react';
export const CartContext = createContext();

function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);
	const initialState = books;
	useReducer(CartReducer, initialState);
	function addToCart(item) {
		setCart([...cart, item]);
	}

	function removeFromCart(item) {
		setCart(cart.filter((cartItem) => cartItem !== item));
	}

	function clearCart() {
		setCart([]);
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
	);
}

export default CartContextProvider;
