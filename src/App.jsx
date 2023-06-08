import React from "react";
import add, { sub, mul, div } from "./Calc";
// import { sum, sub, mul, div } from "./Calc";

function App() {
  return (
    <>
      <ul>
        <li>sum of two number is {add(30, 50)} </li>
        <li>difference of two number is {sub(45, 34)} </li>
        <li>Division of two number is {div(34, 12)}</li>
        <li>Multiplication of two number is {mul(34, 2)} </li>
      </ul>
    </>
  );
}

export default App;
