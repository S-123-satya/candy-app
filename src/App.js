import { useState } from "react";
import Login from "./components/Layout/Login";
import BuyCandy from "./components/Buyer/BuyCandy";
import AddCandy from "./components/Seller/AddCandy";

function App() {
  const [isBuyerLogin, setIsBuyerLogin] = useState(false);
  const [isSellerLogin, setIsSellerLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const showBuyerHandler = () => {
    setIsBuyerLogin(true);
    setIsLogin(false);
  };
  const showSellerHandler = () => {
    setIsSellerLogin(true);
    setIsLogin(false);
  };
  const loginHandler=()=>{
    setIsLogin(true);
    setIsBuyerLogin(false);
    setIsSellerLogin(false);
  }
  return (
    <>
      {(isLogin) && (
        <Login
          onShowSeller={showSellerHandler}
          onShowBuyer={showBuyerHandler}
        />
      )}
      {isBuyerLogin && <BuyCandy onClose={loginHandler}/>}
      {isSellerLogin && <AddCandy onClose={loginHandler} />}
    </>
  );
}

export default App;
