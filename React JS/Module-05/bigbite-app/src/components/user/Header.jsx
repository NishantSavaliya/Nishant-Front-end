import React from "react";

const Header=()=>{
      return(
            <>
            <section id="header" className="p-4">
                  <div className="row">
                        <div className="logo col-md-2">
                              <span className="text-dark fs-1">Bi</span>g Bite 
                              <span className="text-dark fs-1">Ap</span>p 
                        </div>
                        <div className="search-box col-md-8">
                              <div className="input-group p-1">
                                    <input 
                                    type="text"
                                    name="search"
                                    placeholder="Search here"
                                    className="form-control"
                                    />
                              </div>
                        </div>
                        <div className="social-media col-md-2 p-1">
                              <span className="bi bi-facebook p-1 fs-4"></span>
                              <span className="bi bi-instagram p-1 fs-4"></span>
                              <span className="bi bi-twitter p-1 fs-4"></span>
                              <span className="bi bi-whatsapp p-1 fs-4"></span>
                              <span className="bi bi-linkedin p-1 fs-4"></span>
                        </div>
                  </div>


            </section>
            </>
      )
}

export default Header