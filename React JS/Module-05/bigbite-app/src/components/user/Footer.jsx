import React from "react";
const Footer=()=>{
    return(
        <>
           <div className="container-fluid p-5 bg-dark footer">
  <div className="row">
    <div className="col-md-4 ms-2 p-1">
      <ul>
        <li>
          <a href="">
            <h3>Links</h3>
          </a>
        </li>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li className="dropdown">
          <a href="#">Our services</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <a href="feedback.html">Feedback</a>
        </li>
        <li>
          <a href="gallery.html">gallery</a>
        </li>
        <li>
          <a href="#" data-bs-toggle="modal" data-bs-target="#lg">
            Account
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-4 ms-2 p-1">
      <ul>
        <li>
          <a href="">
            <h3>Contact with us</h3>
          </a>
        </li>
        <li>
          <a href="index.html">Help &amp; Support</a>
        </li>
        <li>
          <a href="about.html">Partner with Us</a>
        </li>
        <li className="dropdown">
          <a href="#">Ride with us</a>
        </li>
        <li>
          <a href="contact.html">Contact with us</a>
        </li>
      </ul>
    </div>
    <div className="col-md-3 ms-2 p-1">
      <ul>
        <li>
          <a href="">
            <h3>Legal</h3>
          </a>
        </li>
        <li>
          <a href="index.html">Terms &amp; conditions</a>
        </li>
        <li>
          <a href="about.html">Refund &amp; cancellations</a>
        </li>
        <li className="dropdown">
          <a href="#">Privacy policy</a>
        </li>
        <li>
          <a href="contact.html">Offers Terms</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="logo  fs-4 text-white ms-3">
    <span className="text-white fs-1">Bi</span>g-Bite{" "}
    <span className="text-white fs-1">Ap</span>p
    <span style={{ marginLeft: "25%" }}>
      @copyright @ 2024 bigBite resturents
    </span>
  </div>
</div>

        </>
    )
}

export default Footer