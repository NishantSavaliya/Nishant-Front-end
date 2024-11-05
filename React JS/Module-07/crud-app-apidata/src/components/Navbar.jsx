import React from 'react'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Nav className='bg-dark p-4 text-white navbar navbar-expand-md'>
      <Link to="" className='navbar-brand'>Employee Managements CRUD operations</Link>
      <ul>
            <li><Link to="/">Add Employee <span className='bi bi-person'></span></Link></li>
            <li><Link to="/manage-employee">Manage Employee <span className='bi bi-person'><span className='badge badge-sm bg-danger'>0</span></span></Link></li>
            <li><Link to="/delete-employee">Delete Employee <span className='bi bi-trash'></span></Link></li>
            <li><Link to="/update-employee">Update Employee <span className='bi bi-pencil'></span></Link></li>
      </ul>
    </Nav>
  )
}
