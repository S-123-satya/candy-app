import React from 'react'
import CandyProvider from './CandyProvider'
import CartProvider from './CartProvider'

const Provider=(props)=>{
    return <>
        <CandyProvider>
        <CartProvider>
            {props.children}
        </CartProvider>
        </CandyProvider>
    </>
}
export default Provider;