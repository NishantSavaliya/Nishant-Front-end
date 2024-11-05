import React, { useRef, useState } from 'react' 
import {Container,Row,Card} from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'


export default function AddEmployee() {

      // add employee

      const [data, setData]=useState([])
      
      const[flash,setFlash]=useState(false)

      // store all ref in variable

      const id=useRef("");
      const name=useRef("");
      const email=useRef("");
      const phone=useRef("");
      const department=useRef("");
      const designation=useRef("");
      const photo=useRef("");
      const address=useRef("");
      const navigate=useNavigate();

      // create form handling  function

      const AddEmployeeFormHandling=(e)=>{

            e.preventDefault();

            // stored all data in object

            var insert={
                  id:id.current.value,
                  name:name.current.value,
                  email:email.current.value,
                  phone:phone.current.value,
                  department:department.current.value,
                  designation:designation.current.value,
                  photo:photo.current.value,
                  address:address.current.value,
            }

            // call api via axious.post()

            axios.post(`http://localhost:8000/add-employees`,insert).then(()=>{
                  // pass successfully message

                  setFlash(true);
            });

            navigate(`/`);

            e.target.reset();
      }

  return (
    <div>
      <Container>
            <Row>
                  <div className='col-md-5 mt-5 p-2'>
                        <h1>Employee Management</h1>
                        <Sidebar/>
                  </div>


                  <div className='col-md-7 mt-5 p-4'>
                        <Card>
                              <div className='card-header bg-dark text-white fs-2'>Add Employee</div>

                              {flash && (<FlashMessage duration={4000}>
                                    <div className='alert alert-success'>
                                          <strong>Employee added Successfully</strong>
                                    </div>
                              </FlashMessage>)}

                              <form onSubmit={AddEmployeeFormHandling}>
                              <div className='card-body'>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={id} placeholder='Employee ID*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={name} placeholder='Employee Name*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={email} placeholder='Employee Email*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={phone} placeholder='Employee phone*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={department} placeholder='Employee Department*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={designation} placeholder='Employee Designation*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="text" ref={photo} placeholder='Employee Photo*' className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <textarea ref={address} placeholder='Employee Address*'  className='form-control p-1' />
                                    </div>
                                    <div className='form-group mt-2'>
                                          <input type="submit" value='Submit' className='btn btn-sm btn-dark text-white' />
                                    </div>
                              </div>
                              </form>
                        </Card>
                  </div>
            </Row>
      </Container>
    </div>
  )
}
