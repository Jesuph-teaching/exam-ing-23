import react, { createContext, useState } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();

  const addToCart(item) => {
    setCart([cart, item]);
  };
  const removeFromCart(item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
  };
  const clearCart() => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;






