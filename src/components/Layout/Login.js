import React from "react";

const Login = (props) => {
  return (
    <div>
      <button onClick={props.onShowSeller}>Sell Candy</button>
      <button onClick={props.onShowBuyer}>Buy Candy</button>
    </div>
  );
};

export default Login;
