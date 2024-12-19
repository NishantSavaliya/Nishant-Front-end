import React,{useState,useRef, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
export default function ManageFoodCategory() {
const[data,setData]=useState("");
// create a useEffect() hooks for manage category
useEffect(()=>{
  axios.get(`http://localhost:8000/addfoodcategores`).then((response)=>{
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
        Manage Food Category <span className="bi bi-calendar" />
      </h3>
      <hr className="border border-2 border-primary ms-5 w-50" />
      <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Categoryname</th>
              <th>Added Date</th>
              <th>Descriptions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {data && data.map((item)=>{
            return (<>
                <tr>
              <td>{item.categoryname}</td>
              <td>{item.addeddate}</td>
              <td>{item.descriptions}</td>
              <td>
                <div style={{ minWidth: 80 }}>
                  <a href="">
                    <span className="bi bi-whatsapp text-success fs-2" />
                  </a>
                  <a href="">
                    <span className="bi bi-trash text-danger fs-2" />
                  </a>
                </div>
              </td>
            </tr>
            </>)
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
