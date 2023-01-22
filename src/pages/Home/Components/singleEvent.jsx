import React, { useState } from "react";
import Counter from "./counter";

function SingleEvent(eventname) {
  const [enable, setEnable] = useState(false);
  const addEvents = () => {
    setEnable(!enable);
  };
  return (
    <>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        onClick={addEvents}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
      ></input>
      <span>{eventname.eventname}</span>
      <Counter />
    </>
  );
}

export default SingleEvent;
