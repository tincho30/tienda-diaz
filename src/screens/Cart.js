import React, {useContext} from 'react'
import CartContextProvider from '../context/CartContextProvider'
import CartContext from '../context/CartContext';

const Cart = () => {

    const {items,addItem} = useContext(CartContext)

    return (
        <>
            {
                items.map((item)=>(
                    <div key={item.id}>{item.name}<span>{item.qty}</span></div>
                ))
            }
        </>
    )
}

export default Cart
