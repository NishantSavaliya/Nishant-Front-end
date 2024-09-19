import React from "react";
import { Container,Row} from "react-bootstrap";
import {Link} from 'react-router-dom'
const Header=()=>{

    return(
        <>
{/* 
        <Container fluid className="portfolio-header p-4 shadow">
        <Row>
            <div className="col-md-5"><h1 className=" ms-5 logo">Nishant Savaliya</h1></div>
            <div className="col-md-7">
                <ul className="navbar-link mt-2">
                    <li ><a className="text-white fs-5 ps-0" href="">Home</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">Portfolio</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">About</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">Contact</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">Download My CV</a></li>

                </ul>
            </div>
        </Row>
        </Container> */}



    <Row>
    <nav className="navbar nav bg-dark text-white navbar-expand-lg">
        <div className="col-md-4"><h1 className=" ms-5 m-3 logo">Nishant Savaliya</h1></div>


            <div className="col-md-7 mt-3">
                {/* add navigation toggler button */}
  <button
    type="button"
    className="navbar-toggler m-3 ms-5"
    data-bs-toggle="collapse"
    data-bs-target="#togg"
  >
    <span className="bi bi-grid-3x3-gap-fill text-white fs-1" />
  </button>
  <div className="collapse navbar-collapse" id="togg">
    <ul className="float-end">
      <li>
        
        <a className="text-white fs-5 mt-1 " href="">Home</a>
      </li>
      <li>
        <a className="text-white fs-5" href="/about-us">About</a>
      </li>
      {/* <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
          Our services
        </a>
        <ul className="dropdown-menu bg-dark">
          <li>
            <a href="/punjabi-food">Punjabi Food</a>
          </li>
          <li>
            <a href="/chinease-food">Chinease Food</a>
          </li>
          <li>
            <a href="/gujrati-food">Gujrati Food</a>
          </li>
        </ul>
      </li> */}
      <li>
        <a className="text-white fs-5 " href="/contact-us">Portfolio</a>
      </li>
      <li>
        <a className="text-white fs-5 " href="/feedback-us">Contact</a>
      </li>
      <li>
        <a className="text-white fs-5 " href="/food-menu">Download My CV</a>
      </li>
      {/* <li>
        <a href="#" data-bs-toggle="modal" data-bs-target="#lg">
          Account
        </a>
      </li> */}
    </ul>
  </div>
            </div>
            </nav>
    </Row>
  


        </>
    )
}
export default Header