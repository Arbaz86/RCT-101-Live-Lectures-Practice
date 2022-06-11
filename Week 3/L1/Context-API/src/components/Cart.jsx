import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const Cart = () => {

    const { handleCount } = useContext(CartContext);

    return (
        <div>
            Cart
            <button onClick={() => handleCount(1)}>Add to Cart</button>
        </div>
    )
}
