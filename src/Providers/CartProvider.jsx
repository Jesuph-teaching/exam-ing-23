// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CartContext } from '../Contexts/CartContext';

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
    };

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
