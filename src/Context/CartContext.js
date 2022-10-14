import React from 'react';

const CartContext = React.createContext({
    items: [],
    increaseQuantity: ()=>{},
    decreaseQuantity: ()=>{},
    emptyCart: ()=>{}
});

export default CartContext;