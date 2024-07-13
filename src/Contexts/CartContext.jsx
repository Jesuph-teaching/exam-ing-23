import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart([...cart, item]);
	};

	const removeFromCart = (item) => {
		const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
		setCart(updatedCart);
	};

	const clearCart = () => {
		setCart([]);
	};

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      };
};
