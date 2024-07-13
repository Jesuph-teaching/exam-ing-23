import {  useState } from "react";
import CartContext from "../contexts/CartContext";
export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
    };
  
    const removeFromCart = (itemId) => {
      setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };
  
    const clearCart = () => {
      setCartItems([]);
    };
  
    const contextValue = {
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
    };
    
    return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
    return useContext(CartContext);
  };