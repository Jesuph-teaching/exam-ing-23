import CartContext from '../contexts/CartContext';

import React, { useContext, useReducer } from 'react';

// reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			//state.push(action.pylode);
			console.log(state);
			console.log([...state, action.pylode]);
			return [...state, action.pylode];
		case 'REMOVE_FROM_CART':
			state.filter((el) => el.id != action.pylode);
			return state;
		case 'CLEAR_CART':
			state.length = 0;
			return state;
		default:
			return state;
	}
};

function CartProvider({ children }) {
	// the displache function will receve a object as argument {type: 'ADD_TO_CART', pylode: 'book' }
	const [cart, dispatch] = useReducer(reducer, []);

	// FECH THE DATE FROM THE FILE

	return <CartContext.Provider value={{ dispatch, cart }}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) throw new Error('This context is not accesible from this place');
	return context;
}

export default CartProvider;
