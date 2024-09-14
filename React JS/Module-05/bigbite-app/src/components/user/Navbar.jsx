import React from "react";
import { Link } from "react-router-dom";

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
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about-us">About</Link></li>
                                    <li>
                                          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Our Services</a>
                                          <ul className="dropdown-menu bg-dark inline-block">
                                                <li><a href="#">Punjabi Food</a></li>
                                                <li><a href="#">Chinease Food</a></li>
                                                <li><a href="#">Gujrati Food</a></li>
                                          </ul>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/feedback">Feedback</Link></li>
                                    <li><Link to="food-menu">Food Menu</Link></li>
                                    <li><Link to="/account" data-bs-toggle="modal" data-bs-target="#lg">Account</Link></li>
                              </ul>
                        </div>
                  </nav>
            </>
      )
}

export default Navbar