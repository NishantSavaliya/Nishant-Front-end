import React,{useState,useRef} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
export default function AddFoodCategory() {
const[data,setData]=useState("");
const categoryname=useRef("");
const addeddate=useRef("");
const descriptions=useRef("");
const navigate=useNavigate(); 
// create a addEvent Handeler functions
const addCategoryData=(e)=>{
  e.preventDefault();
  var ins={
    categoryname:categoryname.current.value,
    addeddate:addeddate.current.value,
    descriptions:descriptions.current.value
  }
  // call api via axios.post()
  axios.post(`http://localhost:8000/addfoodcategores`,ins).then(()=>{
    // pass a message
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    }); 
    navigate('/admin-login/addfood-category');  
    e.target.reset();

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
Add Food Category <span className="bi bi-calendar" />
</h3>
<hr className="border border-2 border-primary ms-5 w-50" />
<div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
<form onSubmit={addCategoryData}>
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
<input
type="submit"
name="addcategory" value="AddCategory" className="btn btn-md btn-primary bg-primary text-white" />

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
