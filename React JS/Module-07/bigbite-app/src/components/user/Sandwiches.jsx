import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import masala from '../../assets/images/masala-snd.jpeg'
import tandoori from '../../assets/images/tandoori-snd.jpeg'
import chese from '../../assets/images/chese-snd.jpeg'
import vegetable from '../../assets/images/vegetable-snd.jpeg'
import butter from '../../assets/images/butter-snd.jpeg'

const Sandwiches=()=>{
    return(
        <>
<Header />
<Navbar />        
<div className="container p-2 mt-5">
  <h2 className="p-3">
    Sandwiches <span className="bi bi-truck" /> <button type="button" className="btn btn-sm btn-dark text-white float-end mt-3">Order Now</button>
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
            <p className="text-white">Sandwiches</p>
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
          <img src={masala} className="img-fluid w-100" />
          <p className="fs-4 text-white">
            <b>Masala Sandwiches</b>
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
          <img src={tandoori} className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Tandoori Sandwiches</b>
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
          <img src={chese} className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Chese-Chilli Sandwiches</b>
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
          <img src={vegetable}className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Vegetable Sandwiches</b>
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
          <img src={butter}className="img-fluid w-100" />
          <p className="fs-4 text-secondary">
            <b>Butter Jam Sandwiches</b>
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

export default Sandwiches