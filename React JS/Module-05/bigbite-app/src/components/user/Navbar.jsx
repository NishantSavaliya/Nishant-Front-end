import React from "react";

const Navbar=()=>{
      return(
            <>
                  <nav className="navbar nav bg-dark text-white navbar-expand-md">
                        {/* toggle button */}
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" dat-bs-target="#togg">
                              <span className="bi bi-grid-3x3-gap-fill text-white f-1"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="togg">
                              <ul className="float-end">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li>
                                          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Our Services</a>
                                          <ul className="dropdown-menu bg-dark inline-block">
                                                <li><a href="#">Punjabi Food</a></li>
                                                <li><a href="#">Chinease Food</a></li>
                                                <li><a href="#">Gujrati Food</a></li>
                                          </ul>
                                    </li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Feedback</a></li>
                                    <li><a href="">Gallary</a></li>
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#lg">Account</a></li>
                              </ul>
                        </div>
                  </nav>
            </>
      )
}

export default Navbar