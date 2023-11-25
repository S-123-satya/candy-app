import React, { useReducer } from "react";
import CandyContext from "./candy-contex";

const defaultCandies={candyList:[]};
const candyReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedCandy=[...state.candyList,action.candy]
        return {candyList:updatedCandy};
    }
    return defaultCandies;
}
const CandyProvider = (props) => {
  const [candyState, dispachCandyAction] = useReducer(candyReducer, defaultCandies);
  const addCandyHandler=(candy)=>{
    dispachCandyAction({type:'ADD',candy:candy})
  }
  return (
    <CandyContext.Provider
      value={{
        candyList: candyState.candyList,
        addCandy: addCandyHandler,
      }}
    >
      {props.children}
    </CandyContext.Provider>
  );
};

export default CandyProvider;
