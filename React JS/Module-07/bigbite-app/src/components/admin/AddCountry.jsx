import React, { useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate} from 'react-router-dom'



export default function AddCountry() {

// destructuring data here

const [data, setData]=useState("");

// store data in veriable

const country=useRef("");
const addeddate=useRef("");
const navigate=useNavigate();

// create event handeler function

const addCountryData=(e)=>{

      e.preventDefault();

      // pass veriable current value

      var ins={
            country:country.current.value,
            addeddate:addeddate.current.value,
      }

      // call api via axios.post()

      axios.post(`http://localhost:8000/addcountry`, ins).then(()=>{

            // pass message
            Swal.fire({
                  title: "Added",
                  text: "Country Added Successfully!",
                  icon: "success"
            }); 

            
      });

      navigate("/admin-login/add-country");
      e.target.reset();
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
Add Your Country <span className="bi bi-calendar" />
</h3>
<hr className="border border-2 border-primary ms-5 w-50" />
<div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
<form onSubmit={addCountryData}>
<div className="form-group mt-3">
<input type="text" ref={country} placeholder='Enter Country Name' className="form-control" />
</div>

<div className="form-group mt-3">
<input type="date" ref={addeddate} placeholder='Enter Added Date' className="form-control" />
</div>

<div className="form-group mt-3">
<input
type="submit"
name="addcountry" value="Add Country" className="btn btn-md btn-primary bg-primary text-white" />

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
