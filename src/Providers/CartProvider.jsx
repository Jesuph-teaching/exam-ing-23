import { useState } from 'react';
import Cart from '../Components/Cart.jsx';
import CartContext from '../contexts/CartContext.jsx';
import { useReducer } from 'react';

export const cartReducer = (state, action) => {

	switch (action.type) {
		case 'ADD_TO_CART':
			return [...state, action.payload];
		case 'REMOVE_FROM_CART':
			return state.filter((book) => book.id !== action.payload);
		case 'CLEAR_CART':
			return [];
		default:
			return state;
	}
}
export default function CartProvider({children}) {
	const [cart, setCart] = useState([]);

const addToCart = (book) => {
	//receive an object and add it to the "cart" state};
}
const removeFromCart = (book) => {
	//receive an objeect and removes it from "cart state};
cart.pop(book);
}
const clearCart = () => {
	if (cart != null) { setCart([]); }
};

const CartValues = {
	cart,
	addToCart,
	removeFromCart,
	clearCart,
};





	return (
		<CartContext.Provider value={CartValues}>
			{children}
		</CartContext.Provider>
	)
}