import { useContext } from 'react';
import { CartContext } from '../CartContext';

const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
};

export default useCart;
