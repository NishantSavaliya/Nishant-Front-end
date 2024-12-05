import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { useNavigate } from 'react-router-dom';


export default function ManageFood() {

// destructuring data

const [data,setData]=useState("");
const navigate=useNavigate();

// use useEffect() hook for manage data

useEffect(()=>{
      axios.get(`http://localhost:8000/addfoods`).then((response)=>{
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
  <div className="container p-2 mt-5">
    <div className="row">
      <h3 className="ms-4">
        Manage Food <span className="bi bi-calendar" />
      </h3>
      <hr className="border border-2 border-primary ms-5 w-50" />
      <div className="col-md-12 ms-2 bg-white shadow p-2 mt-4">
        <table className="table table-responsive">
          <thead>
            <tr>
            <th>photo</th>
              <th>Categoryname</th>
              <th>Food Name</th>
              <th>Oldprise</th>
              <th>Newprise</th>
              <th>Qty</th>
              <th>Description</th>
              <th>Added Dt</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
          {data && data.map((item)=>{

            return(
                  <>
                        <tr>
                              <td><img src={item.foodimage} alt="" className='img-fluid' style={{width: "75px",heigth: "75px"}} /></td>
                              <td>{item.foodcategory}</td>
                              <td>{item.foodname}</td>
                              <td>{item.oldprice}</td>
                              <td>{item.offerprice}</td>
                              <td>{item.qty}</td>
                              <td>{item.descriptions}</td>
                              <td>{item.addeddate}</td>

                              <td>
                                    <button type='button' onClick={()=>navigate(`/admin-login/delete-food/${item.id}`)} className='btn btn-sm btn-danger text-white bg-danger'>
                                          <span className='bi bi-trash'></span>
                                    </button>
                                    
                                    <button type='button' onClick={()=>navigate(`/admin-login/update-food/${item.id}`)} className='btn btn-sm text-white bg-primary ms-2'>
                                          <span className='bi bi-pencil'></span>
                                    </button>
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