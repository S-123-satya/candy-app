import React, { useContext, useState } from "react";
import CandyContext from "../../store/candy-context";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";

const BuyCandy = (props) => {
  const [isShowCart, setIsShowCart] = useState(false);

  const candyCtx = useContext(CandyContext);
  const cartCtx=useContext(CartContext);
  // const addCartItemHandler=(item)=>{
  //   cartCtx.addItem({...item,amount:1})
  // }
  const buyOneHandler=(item)=>{
    cartCtx.addItem({...item,amount:1})
  }
  const buyTwoHandler=(item)=>{
    cartCtx.addItem({...item,amount:2})
  }
  const buyThreeHandler=(item)=>{
    cartCtx.addItem({...item,amount:3})
  }
  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <>
      {isShowCart ? (
        <Cart onHideCart={hideCartHandler} />
      ) : (
        <>
          <Header onShowCart={showCartHandler} />
      {candyCtx.candyList.length===0 ? (
        <p>No candy to show</p>
      ) : (
        <ul>
          {candyCtx.candyList.map((candy) => (
            <li key={candy.id}>
              <span>name : {candy.name} , </span>
              <span> price : {candy.price} </span>
              <button onClick={buyOneHandler.bind(null,candy)}> BuyOne </button>
              <button onClick={buyTwoHandler.bind(null,candy)}> BuyTwo </button>
              <button onClick={buyThreeHandler.bind(null,candy)}> BuyThree </button>
            </li>
          ))}
        </ul>)}</>
      )}
      <button onClick={props.onClose}>Main Page</button>
    </>
  );
};

export default BuyCandy;
