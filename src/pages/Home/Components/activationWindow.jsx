import React, { useState } from "react";
import Events from "./events";
function ActivationWindow() {
  const events = [
    "Traditional Photography",
    "Traditional Videography",
    "Candid Photography",
    "Candid Videography",
    "Live Streaming",
    "Helicam",
  ];
  const [event1, setEvent1] = useState(false);
  const [event2, setEvent2] = useState(false);

  const enableEvent1 = () => {
    setEvent1(!event1);
  };
  const enableEvent2 = () => {
    setEvent2(!event2);
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Client's Name"
        className="rounded outline-gray-200 outline-4 h-10 w-80 oul"
      ></input>
      <input
        type="text"
        placeholder="Date"
        className="rounded outline-gray-200 outline-4 h-10 w-80 oul"
      ></input>
      <div className="flex flex-row">
        <input
          type="checkbox"
          value=""
          onClick={enableEvent1}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
        ></input>
        <input
          type="text"
          className="rounded outline-gray-200 outline-4 h-10 w-80 oul"
        ></input>
      </div>
      <div className="flex flex-row">
        <input
          type="checkbox"
          value=""
          onClick={enableEvent2}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
        ></input>
        <input
          type="text"
          className="rounded outline-gray-200 outline-4 h-10 w-80 oul"
        ></input>
      </div>
      <Events />
      <Events />
    </div>
  );
}

export default ActivationWindow;
