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

  const [enable, setEnable] = useState(false);
  const addEvents = () => {
    setEnable(!enable);
  };
  return (
    <div className="flex ml-8">
      <button className=" p-1 btn btn-blue">
        <img className="w-4 h-4" src={minus} onClick={increment}></img>
      </button>
      <p className="p-1">{count}</p>
      <button className="p-1 btn btn-blue">
        <img className="w-4 h-4" src={plus} onClick={increment}></img>
      </button>
    </div>
  );
}

export default Counter;
