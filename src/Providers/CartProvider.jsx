import { useReducer } from 'react';
import books from './data/books';
import { CartContext } from '../contexts/CartContext';

export default function CartProvider({ children }) {
	const initialState = books;

	function CartReducer(state, action) {
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
	return <CartContext.Provider value={useReducer(CartReducer, initialState)}>{children}</CartContext.Provider>;
}
