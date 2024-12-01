import React from 'react'
import {Container, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      
            <Row className=' container-fluid bg-dark p-1 mt-2'>
                  <div className='header col-md-8'>
                        <button className='btn btn-warning ms-5 p-2 fs-3 text-dark'>
                              <Link to="/" className='text-dark' style={{textDecorationLine:"none !impotant"}}>
                                    <span className='bi bi-list'></span>
                              </Link>
                        </button>

                        <span className='text-white fs-3 ms-5 p-2'><span className='bi bi-journal-plus'></span> Task Manager</span>
                  </div>

                  <div className='header col-md-4'>
                        <button className='btn btn-warning ms-5 p-2 fs-5 mt-2 text-dark '>
                              <Link to="/task" className='text-dark' style={{textDecorationLine:"none"}}>Task</Link>
                        </button>

                        <button className='btn btn-warning ms-5 p-2 mt-2 fs-5 text-dark'>
                              <Link to="/deleted-task" className='text-dark' style={{textDecorationLine:"none"}}>Deleted Task</Link>
                        </button> 
                  </div>
            </Row>
     
    </>
  )
}
