import React from 'react'
import Data from './Data'
import {Container, Card, CardBody, Nav, CardHeader, Row} from 'react-bootstrap'

export default function UserListApp() {
  return (
    <div>

      <Container className='mt-5 w-75 mx-auto shadow p-3'>
            <Nav className='nav navbar navbar-expand-md bg-primary text-white'>
                  <ul className='navbar-links'>
                        <li> <a href="">Developer List</a></li>
                        <li> <a href="">Designer List</a></li>
                        <li> <a href="">Total Number of List <span className='bi bi-person'> <span className='badge badge-sm bg-danger'>{Data.length}</span></span></a></li>
                  </ul>
            </Nav>

            {/* Display dynamic list applied map function */}

            {Data && Data.map((item)=>{
                  return(
                        <>
                        {/* <Card className='bg-white p-3 shadow mt-4'>
                              <CardBody>
                                    <table className='table table-responsive'>
                                          <tr align='center'>
                                                <td>{item.id}</td>
                                                <td><img src={item.photo} alt="img" className='img-fluid rounded-circle' style={{width: "125px",height:"125px" }} /></td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.salary}</td>
                                          </tr>
                                          
                                    </table>
                              </CardBody>
                        </Card> */}

                       
                              
                                    <Card className='border border-2 border-success w-50 mx-auto mt-4'>
                                          <CardHeader className='bg-success text-white text-center fs-4'># ID No- 0{item.id}</CardHeader>
                                          <CardBody className='text-center'>
                                          <img src={item.photo} alt="img" className='img-fluid rounded-circle' style={{width: "125px",height:"125px" }} />
                                          <p className='fs-3 mt-4'><b>{item.name}</b></p>
                                          <p className='fs-4 text-start ms-5'>Age : {item.age}</p>
                                          <p className='fs-4 text-start ms-5'>Phone : {item.phone}</p>
                                          <p className='fs-4 text-start ms-5'>Salary : {item.salary}</p>
                                          </CardBody>
                                    </Card>
                             
                              
                        
                        
                        
                        </>
                  )
            })

            }
      </Container>
      
    </div>
  )
}
