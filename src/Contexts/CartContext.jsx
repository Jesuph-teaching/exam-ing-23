import react ,{ createContext, useState, useContext} from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) =>{
const [cart, setCart] = useState([]);

const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
    };
  
const removeFromCart = (item) => {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
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


export const useCart = () => useContext(CartContext);