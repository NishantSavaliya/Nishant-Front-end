import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Sidebar() {

  const[employee,setEmployee]=useState(0);

  useEffect(()=>{

    axios.get(`http://localhost:8000/add-employees`).then((response)=>{
      setEmployee(response.data)
    });

  },[employee]);

  return (
    <div>
      <ul className='sidebar mt-5'>
            <li><Link to="/">Add Employee <span className='bi bi-person'></span></Link></li>
            <li><Link to="/manage-employee">Manage Employee <span className='bi bi-person'><span className='badge badge-sm bg-danger'>{employee.length}</span></span></Link></li>
            <li><Link to="/delete-employee">Delete Employee <span className='bi bi-trash'></span></Link></li>
            <li><Link to="/update-employee">Update Employee <span className='bi bi-pencil'></span></Link></li>
      </ul>
    </div>
  )
}
