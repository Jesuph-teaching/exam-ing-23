import {  useContext } from "react";
import CartContext from "../contexts/CartContext";

  export default function useCart() {
	const Cart = useContext(CartContext);

	return Cart;
} 