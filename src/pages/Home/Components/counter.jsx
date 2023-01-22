import React, { useState } from "react";
import plus from "../Images/plus.png";
import minus from "../Images/minus.png";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex">
      <button className="btn btn-blue" onClick={decrement}>
        <img className="w-4 h-4" src={minus}></img>
      </button>
      <p>{count}</p>
      <button className="btn btn-blue" onClick={increment}>
        <img className="w-4 h-4" src={plus}></img>
      </button>
    </div>
  );
}

export default Counter;
