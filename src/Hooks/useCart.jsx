import React from 'react';
import CartContext from '../Contexts/CartContext';

export default function useCart() {
	const context = React.useContext(CartContext);

	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}

	return context;
}
