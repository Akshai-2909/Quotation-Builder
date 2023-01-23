import React, { useState } from "react";
import Counter from "./counter";
import SingleEvent from "./singleEvent";
function Events({ events }) {
  const [enable, setEnable] = useState(false);
  const addEvents = () => {
    setEnable(!enable);
  };

  // const events = [
  //   "Traditional Photography",
  //   "Traditional Videography",
  //   "Candid Photography",
  //   "Candid Videography",
  //   "Live Streaming",
  //   "Helicam",
  // ];
  return (
    <>
      {events.map((eventname) => (
        <div key={eventname} className="flex items-center ml-10">
          <SingleEvent eventname={eventname} />
        </div>
      ))}
    </>
  );
}

export default Events;
