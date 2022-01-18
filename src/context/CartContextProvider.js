import React, {useState} from 'react';
import CartContext from './CartContext';

export const CartContextProvider = ({children}) => {
  

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider

    

