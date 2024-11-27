import React, { useRef, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import feedback from '../../assets/images/Feedback.gif'

const Feedback=()=>{


// destructuring data

const [contact, setContact]=useState("");

// store all data in veriable via useRef()

const name=useRef("");
const email=useRef("");
const phone=useRef("");
const star=useRef("");
const comment=useRef("");
const navigate=useNavigate();

// create event handler function via axios()

const contactHandeler=(e)=>{

      e.preventDefault();

      var insert={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            star:star.current.value,
            comment:comment.current.value,
      }

      axios.post(`http://localhost:8000/feedback`,insert).then(()=>{
            // pass message
            Swal.fire({
                  title: "Thanks!",
                  text: "Feedback send successfully!",
                  icon: "success"
            });
      })

      e.target.reset();
      
}


    return(
        <>
          
  {/* contact us start here */}
  <Header />
  <Navbar />
  <div className="container p-5 mt-5">
    <h1 className="p-3">
      Give Your Valuable Feedback <span className="bi bi-chat-square-heart" />
    </h1>
    <hr className="border border-1 border-danger" />
    <div className="row">
      <div className="col-md-6 login-sidebar mt-5">
       
         
            
         
              <p className="text-white p-2">
                <img
                  src={feedback}
                  className="img-fluid"
                />
              </p>
            
          
       
      </div>
      <div className="col-md-6 login-frm p-5">
        <form method="post" onSubmit={contactHandeler}>
          <div className="form-group mt-3">
            <input
              type="text" ref={name}
              name="name"
              placeholder="Name *"
              required=""
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text" ref={email}
              name="email"
              placeholder="Email *"
              required=""
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text" ref={phone}
              name="phone"
              placeholder="Phone *"
              required=""
              className="form-control"
            />
          </div>
          
          <div className="form-group mt-3">
            <textarea
              name="message" ref={comment}
              placeholder="Comment*"
              required=""
              className="form-control"
              defaultValue={""}
            />
          </div>

          <div className="form-group mt-3">
            <label className="fs-4 text-dark">Give Rating</label><br />
            <input ref={star} type="checkbox" id="vehicle1" name="vehicle1" value="Star"/><span className="bi bi-star-fill p-2 fs-3"></span>
            <input ref={star} type="checkbox" id="vehicle1" name="vehicle1" value="Star"/><span className="bi bi-star-fill p-2 fs-3"></span>
            <input ref={star} type="checkbox" id="vehicle1" name="vehicle1" value="Star"/><span className="bi bi-star-fill p-2 fs-3"></span>
            <input ref={star} type="checkbox" id="vehicle1" name="vehicle1" value="Star"/><span className="bi bi-star-fill p-2 fs-3"></span>
            <input ref={star} type="checkbox" id="vehicle1" name="vehicle1" value="Star"/><span className="bi bi-star-fill p-2 fs-3"></span>
          </div>

          <div className="form-group mt-3">
            <input
              type="submit"
              name="send" value="Send"
              
              className="btn btn-dark text-white p-1"
            />
            {/* <input
              type="reset"
              name="reset"
              defaultValue="Reset"
              className="btn btn-sm ms-2 btn-danger text-white"
            /> */}
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
  <Login />
</>

    )
}

export default Feedback