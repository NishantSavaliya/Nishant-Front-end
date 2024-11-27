import React, { useEffect, useState, useRef } from 'react'
import {Container,Row,Card} from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function UpdateEmployee() {

  // destructuring for flash and update data

  const [data,setData]=useState([]);
  const [flash,setFlash]=useState(false);

  // store all ref in variable

//    const id=useRef("");
  const name=useRef("");
  const email=useRef("");
  const phone=useRef("");
  const department=useRef("");
  const designation=useRef("");
  const photo=useRef("");
  const address=useRef("");
  const navigate=useNavigate();
   const{id}=useParams();


  // create function for edit data 

  useEffect(()=>{

    // call api via axios

    axios.get(`http://localhost:8000/add-employees/${id}`).then((response)=>{
      setData(response.data);

      // for edit all data

      name.current.value=response.data.name;
      email.current.value=response.data.email;
      phone.current.value=response.data.phone;
      department.current.value=response.data.department;
      designamtion.current.value=response.data.designation;
      photo.current.value=response.data.photo;
      address.current.value=response.data.adress;

    });

  },[]);

  // create add event handeler

  const updData=(e)=>{

    e.preventDefault();

    const {id}=useParams();

    var upd={
      name:name.current.value,
      email:email.current.value,
      phone:phone.current.value,
      department:department.current.value,
      designation:designation.current.value,
      photo:photo.current.value,
      address:address.current.value,
    }

    // call api for update data

    axios.put(`http://localhost:8000/add-employees/${id}`, upd).then(()=>{
      setFlash(true);
      navigate('/manage-employee');
    })
  }

  return (
    <>
    <Container>
    <Row>
          <div className='col-md-5 mt-5 p-2'>
                <h1>Employee Management</h1>
                <Sidebar/>
          </div>


          <div className='col-md-7 mt-5 p-4'>
                <Card>
                      <div className='card-header bg-dark text-white fs-2'>Add Employee</div>

            

                      <form>
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
                                  <button type="button" onClick={updData} className='btn btn-sm btn-dark text-white'>Update EMployee</button>
                            </div>
                      </div>
                      </form>
                </Card>
          </div>
    </Row>
</Container>
    </>
  )
}
