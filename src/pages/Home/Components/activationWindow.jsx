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

  const delivarables = [
    "Album",
    "Retouched Photos",
    "Candid Teaser",
    "Candid Film",
    "Traditional Video",
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
    <div className="h-39 w-96 overflow-x-scroll flex flex-col gap-4">
      <div className="relative">
        <input
          type="text"
          className="ml-8 font-poppins text-bold hover:rounded hover:outline-gray-200 hover:outline focus:outline focus:rounded focus:outline-violet-400 h-10 w-80 oul"
        ></input>
        <label className="absolute top-1.5 pointer-events-none left-8 -right-11 ">
          Client's Name
        </label>
      </div>
      <input
        type="text"
        placeholder="Client's Name"
        className="ml-8 font-poppins text-bold hover:rounded hover:outline-gray-200 hover:outline focus:outline focus:rounded focus:outline-violet-400 h-10 w-80 oul"
      ></input>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          value=""
          onClick={enableEvent1}
          className="w-4 h-4 accent-violet-600  bg-gray-100 border-gray-300 rounded "
        ></input>
        <input
          type="text"
          className="font-poppins text-bold ml-4 hover:rounded hover:outline-gray-200 hover:outline focus:outline focus:rounded focus:outline-violet-400 h-10 w-80 oul"
        ></input>
      </div>
      {event1 ? <Events events={events} /> : null}
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          value=""
          onClick={enableEvent2}
          className="w-4 h-4 accent-violet-600 bg-gray-100 border-gray-300 rounded "
        ></input>
        <input
          type="text"
          className=" font-poppins ml-4 text-bold hover:rounded hover:outline-gray-200 hover:outline focus:outline focus:rounded focus:outline-violet-400 h-10 w-80 oul"
        ></input>
      </div>
      {event2 ? <Events events={events} /> : null}
      <div className="flex flex-row items-center">
        <label className="ml-8">Deliverables</label>
      </div>
      <Events events={delivarables} />
    </div>
  );
}

export default ActivationWindow;
