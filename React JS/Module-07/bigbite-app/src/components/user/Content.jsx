import React from "react";
import food1 from '../../assets/images/food-01.jpeg';
import food2 from '../../assets/images/food-02.jpeg';
import food3 from '../../assets/images/food-03.jpeg';
import food4 from '../../assets/images/food-04.jpeg';
import { Link, useNavigate} from "react-router-dom";

const Content=()=>{
    return(
        <>
<div className="container p-2 mt-5">
  <h2 className="p-3">
    Order Your fast Food Delivery <span className="bi bi-truck" />{" "}
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
            <p><Link to='/punjabi-food' className="text-white">Punjabi Food</Link></p>
          </li>
          <li className="p-0 ms-5">
            <p><Link to='/gujrati-food' className="text-white">Gujrati Thali</Link></p>
          </li>
          <li className="p-0 ms-5">
            <p><Link to='/chinese-food' className="text-white">Chinese Food</Link></p>
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
          <img src={food1} className="img-fluid w-100" />
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
          <img src={food2} className="img-fluid w-100" />
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
          <img src={food3} className="img-fluid w-100" />
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
          <img src={food4} className="img-fluid w-100" />
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
          <img src={food2} className="img-fluid w-100" />
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

      {/* view all product button */}

      <button type='button' className='btn btn-dark bg-dark mt-5 ms-4'>
        <Link to='/all-product' className="text-white fs-4">View All Products</Link>
        </button>

      {/* ------------------------------ */}
    </div>
  </div>
</div>

           
        </>
    )
}

export default Content