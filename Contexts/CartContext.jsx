import React from 'react'
import { useState, } from 'react'



export default function AddToCart() {
    const [cart, setCart] = useState([])
    return (
        <div>AddToCart</div>
    )
};

export default function RemoveFromCart() {
    const [cart, setCart] = useState([])
    return (
        <div>RemoveFromCart</div>
    )
};

export default function ClearCart() {
    const [cart, setCart] = useState([])
    return (
        <div>ClearCart</div>
    )
};
export default function CartContext() {
    this.statecart = []
    this.add = (book) => {
        this.statecart.push(book)
    }
  return (
    this.statecart.map((book) => {
      return book
    })
  )


};
