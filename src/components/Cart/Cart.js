import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span> X {item.amount} </span>
        </li>
      ))}
      <span> Total Price : {cartCtx.totalAmount} </span>
      <button onClick={props.onHideCart}>Back</button>
    </ul>
  );
};

export default Cart;
