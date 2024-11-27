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
                                    <li className="dropdown">
                                          <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">Our Services</Link>
                                          <ul className="dropdown-menu bg-dark inline-block">
                                                <li><Link to="/punjabi-food">Punjabi Food</Link></li>
                                                <li><Link to="/chinese-food">Chinease Food</Link></li>
                                                <li><Link to="/gujrati-food">Gujrati Food</Link></li>
                                          </ul>
                                    </li>
                                    <li><Link to="/contact-us">Contact</Link></li>
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