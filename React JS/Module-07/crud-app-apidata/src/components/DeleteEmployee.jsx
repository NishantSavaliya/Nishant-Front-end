import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export default function DeleteEmployee() {

  // destructuring data

  const [data, setData]=useState([]);
  const navigate = useNavigate();
  const {id}=useParams();

  // use useEffect() for delete data

  useEffect(()=>{

    // call api to delete data axios.delete(``)

    axios.delete(`http://localhost:8000/add-employees/${id}`).then(()=>{});

    navigate('/manage-employee')
    
  },[]);

  return (
    <div>
      
    </div>
  )
}
