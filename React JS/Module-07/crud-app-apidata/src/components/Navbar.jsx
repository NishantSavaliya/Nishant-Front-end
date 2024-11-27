import React, { useEffect, useState } from 'react'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Navbar() {

  const[employee,setEmployee]=useState(0);

  useEffect(()=>{
    axios.get(`http://localhost:8000/add-employees`).then((response)=>{
      setEmployee(response.data)
    });
  },[employee]);

  return (
    <Nav className='bg-dark p-4 text-white navbar navbar-expand-md'>
      <Link to="" className='navbar-brand'>Employee Managements CRUD operations</Link>
      <ul>
            <li><Link to="/">Add Employee <span className='bi bi-person'></span></Link></li>
            <li><Link to="/manage-employee">Manage Employee <span className='bi bi-person'><span className='badge badge-sm bg-danger'>{employee.length}</span></span></Link></li>
            <li><Link to="/delete-employee">Delete Employee <span className='bi bi-trash'></span></Link></li>
            <li><Link to="/update-employee">Update Employee <span className='bi bi-pencil'></span></Link></li>
      </ul>
    </Nav>
  )
}
