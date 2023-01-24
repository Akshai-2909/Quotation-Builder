import React, { useState } from "react";
import Counter from "./counter";

function SingleEvent(eventname) {
//<<<<<<< HEAD
  const [enable, setEnable] = useState(false);
  const addEvents = () => {
    setEnable(!enable);
  };
  console.log(`The value is ${enable}`);
//=======
//>>>>>>> refs/remotes/origin/main
  return (
    <>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 accent-violet-600 bg-gray-100 border-gray-300 rounded "
      ></input>
      <span key={eventname.eventname} className="ml-2">
        {eventname.eventname}
      </span>
      <Counter />
    </>
  );
}

export default SingleEvent;
