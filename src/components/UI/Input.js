import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input {...props}></input>
    </div>
  );
};

export default Input;
