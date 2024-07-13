import { useState } from "react"


export default function CartContext() {

    const [cart, setCart] = useState([]);

    function addToCard ()
    {
        const newCart = {

        }
        setCart( (c) => ([...c, newCart]))
    }

    function removeFromCart (index)
    {
        setCart(cart.filter((_,i) => i != index))
    }

    function clearCart ()
    {
        setCart('');
    }

  return (
    <div>CartContext</div>
  )
}
