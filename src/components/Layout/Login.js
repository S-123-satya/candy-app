import React from 'react'

const Login = (props) => {
  return (
    <div>
        <button onClick={props.onShowSeller}>Seller</button>
        <button onClick={props.onShowBuyer}>Buyer</button>
    </div>
  )
}

export default Login