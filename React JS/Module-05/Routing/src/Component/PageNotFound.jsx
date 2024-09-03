import React from "react";
import Nav from "./Navbar";

const PageNotFound=()=>{
      return(
            <>
            <Nav/>
            <div className=" w-3/5 bg-gray-400 text-center p-24 text-white mx-auto mt-12">
                  <h1 className="text-5xl"> 404 Page Not Found</h1>
                  <button className="text-xl text-white btn bg-black p-2 mt-10"> click to Home page</button>
            </div>
            </>
            
      )
}
export default PageNotFound