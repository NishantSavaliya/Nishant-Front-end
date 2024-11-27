import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { useNavigate } from 'react-router-dom';


export default function ManageFeedback() {

// destructuring data

const [data,setData]=useState("");
const navigate=useNavigate();

// use useEffect() hook for manage data

useEffect(()=>{
      axios.get(`http://localhost:8000/feedback`).then((response)=>{
            setData(response.data);
      })
},[data]);


  return (
    <>
      <body className='dashboard'>
<AdminHeader />
<div className="container-fluid">
<div className="row">
<div className="col-md-3 admin-sidebar p-5">
<AdminSidebar />
</div>

<div className="col-md-9 admin-dashboard">
  <div className="container p-5">
    <div className="row">
      <h3 className="ms-4">
        Manage Feedback <span className="bi bi-calendar" />
      </h3>
      <hr className="border border-2 border-primary ms-5 w-50" />
      <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Star</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map((item)=>{

            return(
                  <>
                        <tr>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.star}</td>
                              <td>{item.comment}</td>
                              
                              <td>
                                    <button type='button' onClick={()=>navigate(`/admin-login/delete-feedback/${item.id}`)} className='btn btn-sm btn-danger text-white bg-danger'>
                                          <span className='bi bi-trash'></span>
                                    </button>
                                    
                                    {/* <button type='button' className='btn btn-sm text-white bg-primary ms-2'>
                                          <span className='bi bi-pencil'></span>
                                    </button> */}
                              </td>
                        </tr>
                  </>
            )

          })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</body>
    </>
  )
}

