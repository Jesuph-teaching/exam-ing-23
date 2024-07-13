import React, { createContext, useReducer } from 'react';
import { books } from '../Data/books'; 
import {useCart} from './useCart'

const initialState = {
  cart: [],
  books: books 
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';


const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

    const cartContextValue = (useCart(state,
        { addToCart,
          removeFromCart,
          clearCart }
        ));

  return (
    <CartProvider value={cartContextValue}>
      <App />
    </CartProvider>
  );
};