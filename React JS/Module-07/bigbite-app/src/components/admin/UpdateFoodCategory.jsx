import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate, useParams} from 'react-router-dom'

export default function UpdateFoodCategory() {

// destructuring data

      const [data, setData]=useState("");

// store all data in useRef()

      const categoryname=useRef("");
      const addeddate=useRef("");
      const descriptions=useRef("");
      const navigate=useNavigate();
      const {id}=useParams();

// create function for edit data

      useEffect(()=>{

            // call api via axios

            axios.get(`http://localhost:8000/addfoodcategory/${id}`).then((response)=>{
                  setData(response.data);

            // for edit all data 
            
                  categoryname.current.value=response.data.categoryname;
                  addeddate.current.value=response.data.addeddate;
                  descriptions.current.value=response.data.descriptions;
            });
      },[]);


// create add eventhandler

const updData=(e)=>{

      e.preventDefault();

      var upd={
            categoryname:categoryname.current.value,
            addeddate:addeddate.current.value,
            descriptions:descriptions.current.value
      };

      // call api for update data

      axios.put(`http://localhost:8000/addfoodcategory/${id}`, upd).then(()=>{

            // pass message

            Swal.fire({
                  title: "Updated!",
                  text: "You Data updated successfully!",
                  icon: "success"
            });

            // e.target.reset();
            navigate("/admin-login/managefood-category")
      });

     
}


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
Update Food Category <span className="bi bi-calendar" />
</h3>
<hr className="border border-2 border-primary ms-5 w-50" />
<div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
<form>
<div className="form-group mt-3">
<input type="text" ref={categoryname} placeholder='Enter CategoryName' className="form-control" />
</div>

<div className="form-group mt-3">
<input type="date" ref={addeddate} placeholder='Enter Added Date' className="form-control" />
</div>

<div className="form-group mt-3">
<textarea ref={descriptions} className="form-control" placeholder='Enter Descriptions'></textarea>
</div>
<div className="form-group mt-3">
<button type='button' onClick={updData} className='btn btn-dark text-white p-2'>Update Food Category</button>

</div>
</form>
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
