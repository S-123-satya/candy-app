import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'

const Header = (props) => {
    const cartCtx=useContext(CartContext);
    const amount=cartCtx.items.reduce((currVal,item)=>currVal+item.amount,0);
  return (
    <button onClick={props.onShowCart}>
        <span> Cart </span>
        <span> {amount} </span>
    </button>
  )
}

export default Header