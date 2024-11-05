import React, { useState, useEffect } from 'react'
import {Container,Row,Card} from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import axios from 'axios'
import FlashMessage from 'react-flash-message'

export default function ManageEmployee() {

  // applied useState and UseEffect to manage data or read data or fetch Data

  const [employee, setEmployee]=useState([]);
  const [flash, setFlash]=useState(false);
  const navigate=useNavigate();

  // fetch data using useEffect using api http://localhost:8000/add-employees

  useEffect(()=>{

    axios.get(`http://localhost:8000/add-employees`)
    .then((response)=>{
      setEmployee(response.data);
      //response.data is get all data from db.json in json formate

      setFlash(true);

    });

  },[employee]);

  return (
    <>
      <Header/>
      <Navbar/>
      <Container>
            <Row>
                  <div className='col-md-12 mt-5 p-4'>
                    <p className='text-center p-2'>

                        {flash && (<FlashMessage duration={4000}>
                          <div className='alert alert-danger'>
                            <strong>Employee Data Deleted Successfully</strong>
                          </div>
                        </FlashMessage>)}
                    </p>
                        <Card>
                        <div className='card-header fs-3 bg-dark text-white'>Manage Employee</div>

                        <table className='table table-responsive text-center mt-3'>

                          {/* fetch all employee data*/ }

                          {employee && employee.map((row)=>{
                            return(
                              <>
                                <tr align="center">
                                  <td><img src={row.photo} className='img-fluid' style={{width:"75px",heigth:"75px"}} alt="" /></td>
                                  <td>{row.name}</td>
                                  <td>{row.email}</td>
                                  <td>{row.phone}</td>
                                  <td>{row.department}</td>
                                  <td>{row.designation}</td>
                                  <td>{row.address}</td>
                                  <td><button type='button' onClick={()=>navigate(`/delete-employee/${row.id}`)} className='btn bg-danger text-white'><span className='bi bi-trash'></span></button> | <button type='button' className='btn  bg-primary text-white'><span className='bi bi-pencil'></span></button></td>
                                </tr>
                              </>
                            )
                          })}
                          
                        </table>  

                              
                        </Card>
                  </div>
            </Row>
      </Container>
      <Footer/>
    </>
  )
}
