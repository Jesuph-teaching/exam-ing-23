// CartProvider.js
import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/CartReducer';
import { CartContext } from './CartContext';
import useCart from '../Hooks/useCart';
import books from '../Data/books';

const initialState = {
	books: books,
	cart: [],
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	const { addToCart, removeFromCart, clearCart } = useCart();
	return (
		<CartContext.Provider value={{ state, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
