import React, { useReducer } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'



export default function Cartprovider() {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return [...state, action.payload]
            case 'CLEAR_CART':
                return []
            case 'REMOVE_FROM_CART':
                return state.filter((item) => item.id !== action.payload)
            default:
                return state
        };
    }, [])

    const [cart, setCart] = React.useState([])

    const addToCart = (book) => {
        setCart([...cart, book])
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (book) => {
        setCart(cart.filter((item) => item.id !== book.id))
  return (
    <slot />
  )
}

}
