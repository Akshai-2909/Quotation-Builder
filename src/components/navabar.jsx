import React from "react";

function Navbar(){
    return(
        <div className="flex flex-wrap justify-between bg-fuchsia-800">
        <div className="text-white font-tangerine font-bold text-4xl ml-4">Gleam Studio Quotation Generation</div>
        <div className="flex flex-wrap gap-11 mr-4">
            <div className="list-none"><a className="basis-1/4 text-white font-ubuntu">Home</a></div>
            <div className="list-none"><a className="basis-1/4 text-white font-ubuntu">Checkout</a></div>
            <div className="list-none"><a className="basis-1/4 text-white font-ubuntu">Sheets</a></div>
            <div className="list-none"><a className="basis-1/4 text-white font-ubuntu">Sign out</a></div>
        </div>
        </div>
    )
}

export default Navbar;