//Create a hook called useCart that return the context created in the "CartContext.jsx" file and make sure you are using it inside the CartProvider component.
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function useCart() {
	return useContext(CartContext);
}
