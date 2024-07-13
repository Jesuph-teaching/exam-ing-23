import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCart;
