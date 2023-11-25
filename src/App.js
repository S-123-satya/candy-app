import { useState } from "react";
import Login from "./components/Layout/Login";
import BuyCandy from "./components/Buyer/BuyCandy";
import AddCandy from "./components/Seller/AddCandy";

function App() {
  const [isBuyerLogin, setIsBuyerLogin] = useState(false);
  const [isSellerLogin, setIsSellerLogin] = useState(false);

  const showBuyerHandler = () => {
    setIsBuyerLogin(true);
  };
  const showSellerHandler = () => {
    setIsSellerLogin(true);
  };
  return (
    <>
      {(!isBuyerLogin && !isSellerLogin) && (
        <Login
          onShowSeller={showSellerHandler}
          onShowBuyer={showBuyerHandler}
        />
      )}
      {isBuyerLogin && <BuyCandy/>}
      {isSellerLogin && <AddCandy />}
    </>
  );
}

export default App;
