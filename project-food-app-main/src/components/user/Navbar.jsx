import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
          <nav className="navbar nav bg-secondary text-white navbar-expand-md">
  {/* add navigation toggler button */}
  <button
    type="button"
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#togg"
  >
    <span className="bi bi-grid-3x3-gap-fill text-white fs-1" />
  </button>
  <div className="collapse navbar-collapse" id="togg">
    <ul className="float-end">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li className="dropdown">
        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">
          Our services
        </Link>
        <ul className="dropdown-menu bg-dark">
          <li>
            <Link to="/punjabi-food">Punjabi Food</Link>
          </li>
          <li>
            <Link to="/chinease-food">Chinease Food</Link>
          </li>
          <li>
            <Link to="/gujrati-food">Gujrati Food</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact-us">Contact</Link>
      </li>
      <li>
        <Link to="/feedback-us">Feedback</Link>
      </li>
      <li>
        <Link to="/food-menu">Food Menu</Link>
      </li>
      <li>
        <Link to="#" data-bs-toggle="modal" data-bs-target="#lg">
          Account
        </Link>
      </li>
    </ul>
  </div>
</nav>
 </>
    )
}

export default Navbar