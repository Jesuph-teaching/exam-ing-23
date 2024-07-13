import React, { useReducer } from 'react';
import CartContext from '../Contexts/CartContext';
import books from '../Data/books';
const initialState = {
    cart: [],
}
const reducer = (state = initialState, action) => {
    if (!state) {
        throw new Error('Invalid state');
    }
    if (!action) {
        throw new Error('Invalid action');
    }
    switch (action.type) {
        case 'ADD_TO_CART':
            if (!action.payload) {
                throw new Error('Invalid payload');
            }
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            if (!action.payload) {
                throw new Error('Invalid payload');
            }
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export default function CartProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <CartContext.Provider value={{ state, dispatch }} >{children} </CartContext.Provider>;
}
