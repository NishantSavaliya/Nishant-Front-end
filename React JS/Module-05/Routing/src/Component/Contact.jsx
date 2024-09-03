import React from "react";
import Nav from "./Navbar";

const Contact=()=>{
      return(
            <>
                  <Nav/>

                  <div className="w-3/5 bg-gray-400 text-center p-24 text-white mx-auto mt-24">
                        <h1 className="text-5xl">Contact us</h1>
                        <button className="btn btn-72 bg-black text-xl text-white p-4 mt-12">(+91)-9106663640</button>
                  </div>
            </>
            
      )
}
export default Contact