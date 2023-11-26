import React, { useContext, useState } from "react";
import Input from "../UI/Input";
import CandyContext from "../../store/candy-context";


const AddCandy = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const candyCtx = useContext(CandyContext);
  const addCandyHandler = (event) => {
    event.preventDefault();
    const obj = {
      id: Math.random().toString(),
      name: name,
      desc: desc,
      price: price,
    };
    candyCtx.addCandy(obj);
    console.log(candyCtx.candyList);
  };
  
  return (
    <form onSubmit={addCandyHandler}>
      <Input
        label="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        label="desc"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></Input>
      <Input
        label="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></Input>
      <button type="submit">Submit</button>
      <button onClick={props.onClose}>Main Page</button>
    </form>
  );
};

export default AddCandy;
