import React from "react";

const Nav=()=>{
      return(
            <nav className="bg-black p-1">
                  <div className="flex flex-row text-white">
                        <div className="w-2/5">
                              <h1 className="ms-14 text-2xl mt-2">Flipcart logo</h1>
                        </div>
                        
                        <div className="w-full">
                              <ul className="inline-flex p-3 space-x-14 text-xl">
                                    <li>
                                          <a href="/">Home</a>
                                    </li>
                                    <li>
                                          <a href="/about-us">About us</a>
                                    </li>
                                    <li>
                                          <a href="/our-services">Services</a>
                                    </li>
                                    <li>
                                          <a href="/feedback">Feedback</a>
                                    </li>
                                    <li>
                                          <a href="/contact-us">Contact</a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      )
}
export default Nav