import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Punjabi=()=>{
    return(
        <>
<Header />
<Navbar />        
<div className="container p-2 mt-5">
  <h2 className="p-3">
    Punjabi Dishes <span className="bi bi-truck" /> <button type="button" className="btn btn-sm btn-dark text-white float-end mt-3">Order Now</button>
  </h2>
  <hr className="border border-1 border-danger" />
  <div className="row">
    <div className="col-md-4  m-0 p-0">
      <div className="text-overlay">
        <ul>
          <li className="p-5">
            <h2 className="text-white">
              Order Now
              <hr className="border border-1 border-white" />
            </h2>
          </li>
          <li className="p-0 ms-5">
            <p className="text-white">Punjabi Food</p>
          </li>
        
          <li className="p-0 ms-5">
            <p className="text-white">Terms and Conditions</p>
          </li>
          <li className="p-0 ms-5">
            <p className="text-white">24x7 Customer care support</p>
          </li>
        </ul>
        <h3 className="text-white p-5">
          Offer Zone
          <hr className="border border-1 border-white" />
        </h3>
        <div className="col-md-10 ms-3  shadow p-3 mt-0">
          <img src='https://cdn.cdnparenting.com/articles/2019/03/25144135/774826042-H.webp' className="img-fluid w-100" />
          <p className="fs-4 text-white">
            <b>Big Combo Burger</b>
          </p>
          <p className="fs-6 text-white">
            <b>
              Rs. 250-/ <del>Rs.350-/</del>
            </b>
          </p>
          <p className="fs-6 text-white">
            <b>
              <button type="button" className="btn btn-sm btn-dark text-white">
                Order Now
              </button>
            </b>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-8 login-frm p-5">
      <div className="row">
        <div className="col-md-5 ms-5 shadow p-3 mt-3">
          <img src='https://m.economictimes.com/thumb/msid-71121981,width-1200,height-900,resizemode-4,imgsize-810723/butter-chicken-1.jpg' className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Big Combo Burger</b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              Rs. 250-/ <del>Rs.350-/</del>
            </b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              <button type="button" className="btn btn-sm btn-dark text-white">
                Order Now
              </button>
            </b>
          </p>
        </div>
        <div className="col-md-5 ms-5 shadow p-3 mt-3">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJvhjpqqvKd8H2p4L4ihKuEna96CpwUUneA&s' className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Big Combo Burger</b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              Rs. 250-/ <del>Rs.350-/</del>
            </b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              <button type="button" className="btn btn-sm btn-dark text-white">
                Order Now
              </button>
            </b>
          </p>
        </div>
        <div className="col-md-5 ms-5 shadow p-3 mt-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM1u5Pv5E6n9_BAckv4aitXy32V4gFupTTsepX2HTbDn74rFE8Y3gj3iDfwrP1NJ_2TQ&usqp=CAU" className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Big Combo Burger</b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              Rs. 250-/ <del>Rs.350-/</del>
            </b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              <button type="button" className="btn btn-sm btn-dark text-white">
                Order Now
              </button>
            </b>
          </p>
        </div>
        <div className="col-md-5 ms-5 shadow p-3 mt-3">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM1u5Pv5E6n9_BAckv4aitXy32V4gFupTTsepX2HTbDn74rFE8Y3gj3iDfwrP1NJ_2TQ&usqp=CAU' className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Big Combo Burger</b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              Rs. 250-/ <del>Rs.350-/</del>
            </b>
          </p>
          <p className="fs-6 text-secondary">
            <b>
              <button type="button" className="btn btn-sm btn-dark text-white">
                Order Now
              </button>
            </b>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
           
        </>
    )
}

export default Punjabi