import React,{useRef} from "react";
import {Container,Row,Form} from 'react-bootstrap'
import Swal from 'sweetalert2'

function Appoinment(){

      // store all ref attributes values in varibles

      const patientname = useRef("");
      const patientage = useRef("");
      const phone = useRef("");
      const adress = useRef("");
      const doctorname = useRef("");
      const datetime = useRef("");

      // create form handeling function

      const BookAppoinmentData=(e)=>{
            e.preventDefault();

            var addData = {
                  patientname : patientname.current.value,
                  patientage : patientage.current.value,
                  phone : phone.current.value,
                  adress : adress.current.value,
                  doctorname : doctorname.current.value,
                  datetime : datetime.current.value,
            }

            // pass data

            console.log('Your Appoinment Booked Successfully', addData);

            Swal.fire({
                  title: "Good job!",
                  text: "Your Appointment Booked successfully!",
                  icon: "success"
                });

            // reset form

            e.target.reset();
      }


      return(
            <>

            <Container>

                  <h1 className="mt-5">Book your Appoinment with us</h1>
                  <hr />

                  <Row className="mt-5">
                        <div className="col-md-4">
                              <img src="https://cdn.dribbble.com/users/1894420/screenshots/13451478/appointment-booking-with-smartphone.gif" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                              <Form onSubmit={BookAppoinmentData}>
                                    <div className="form-group mt-2">
                                          <input type="text" ref={patientname} placeholder="Enter patient Name" className="form-control" />
                                    </div>

                                    <div className="form-group mt-3">
                                          <input type="text" ref={patientage} placeholder="Enter patient Age" className="form-control" />
                                    </div>

                                    <div className="form-group mt-3">
                                          <input type="text" ref={phone} placeholder="Enter phone No." className="form-control" />
                                    </div>

                                    <div className="form-group mt-3">
                                          <textarea type="text" ref={adress} placeholder="Enter patient adress" className="form-control" />
                                    </div>

                                    <div className="form-group mt-3">
                                          <input type="text" ref={doctorname} placeholder="Enter Doctor Name" className="form-control" />
                                    </div>

                                    <div className="form-group mt-3">
                                          <input type="datetime-local" ref={datetime} placeholder="Enter date and Time" className="form-control" />
                                    </div>

                                    <div className="form-group mt-3">
                                          <input type="submit" value='Book Appoinment' className="btn btn-lg btn-dark text-white" />
                                    </div>
                              </Form>
                        </div>
                  </Row>
            </Container>
            
            
            </>
      )

}

export default Appoinment