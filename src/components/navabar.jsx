import React from "react";

function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center ">
      <div className="text-mild-violet font-tangerine font-bold text-4xl ml-5 mt-5 mb-5">
        Gleam Studio Quotation Generation
      </div>
      <div className="flex flex-wrap gap-11 mr-5 mt-5 mb-5">
        <div className="list-none">
          <button className="basis-1/4 text-mild-violet hover:border hover:rounded font-poppins p-1 font-extrabold">
            Home
          </button>
        </div>
        <div className="list-none">
          <button className="basis-1/4 text-mild-violet hover:border hover:rounded font-poppins p-1 font-extrabold">
            Checkout
          </button>
        </div>
        <div className="list-none">
          <button className="basis-1/4 text-mild-violet hover:border hover:rounded font-poppins p-1 font-extrabold">
            Sheets
          </button>
        </div>
        <div className="list-none">
          <button className="basis-1/4 text-mild-violet hover:border hover:rounded font-poppins p-1 font-extrabold">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
