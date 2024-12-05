import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'



function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:4000/users')
        .then(res => setData(res.data) )
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='container mt-4'>
        <h2>Crud App with JSON Server</h2>
        <Link to="/create"  className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td className='btn default p-0'>
                            <Link className='text-decoration-none btn btn-sm btn-success m-1' to={`/update/${d.id}`}>Update</Link>
                            <button className='text-decoration-none btn btn-sm btn-danger m-1'onClick={e => handleDelete(d.id)}>Delete</button>
                            <Link className='text-decoration-none btn btn-sm btn-primary m-1' to={`/read/${d.id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
  function handleDelete(id){
    const confirm = window.confirm("do you like to Delete?");
    if (confirm){
        axios.delete('http://localhost:4000/users/'+id)
        .then(res =>{
            alert("Record Deleted");
            navigate('/')
        })
    }
    
   
  }
}


export default Home
