
import  { createContext, useReducer, useContext } from 'react';
import books from '../Data/books';

const CartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.book];
    case 'REMOVE_FROM_CART':
      return state.filter(book => book.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (book) => dispatch({ type: 'ADD_TO_CART', book });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
