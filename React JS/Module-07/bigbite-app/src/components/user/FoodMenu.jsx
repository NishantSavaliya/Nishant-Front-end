import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Row } from "react-bootstrap";
const FoodMenu=()=>{
    return (
        <>
        {/* food menu */}
        <Header />
        <Navbar />

    <div className="container p-2 mt-5">
    <h1 className="p-3">
      Get Food Menu List<span className="bi bi-browser-firefox" />
    </h1>
    <hr className="border border-1 border-danger" />
    <div className="row">
      <div className="col-md-5  m-0 p-0">
        <div className="sidebar">
          <ul>
            
            <li className="p-0 ms-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00-e8U35VyUliQuZjZfoi1eR_xHhlpHA5sQ&s"  className="img-fluid" />
             </li>
            
          </ul>
        </div>
      </div>
      <div className="col-md-6  p-2">
      <Row>

      <div className="col-md-5 ms-2 bg-dark text-white p-3">
        <h3><Link to='/punjabi-food' className="text-white">Punjabi Food</Link></h3>
      </div>
      
      <div className="col-md-5 ms-2 bg-dark text-white p-3">  
      <h3><Link to='/chinese-food' className="text-white">Chinese Food</Link></h3>
      </div>
      
      <div className="col-md-5 ms-2 bg-dark text-white p-3 mt-4">
      <h3><Link to='/gujrati-food' className="text-white">Gujrati Thali</Link></h3>
      </div>
      
      <div className="col-md-5 ms-2 bg-dark text-white p-3 mt-4">
      <h3><Link to='/sandwiches' className="text-white">Sandwiches</Link></h3>
      </div>

      </Row>

      </div>
    </div>
  </div>

        <Footer />
            
        </>
    )
}

export default FoodMenu