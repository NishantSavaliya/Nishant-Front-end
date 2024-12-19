import React ,  { useEffect, useRef, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function AddFood() {
// destructure data
const [foodCat, setFoodCat] = useState([]);
// fetch a food category to display in select 
useEffect(()=>{   
  
  axios.get(`http://localhost:8000/addfoodcategores`).then((response)=>{
    setFoodCat(response.data);
  })

},[]);
const navigate = useNavigate();
// store data in veriable

const foodcategory = useRef("");
const foodname = useRef("");
const foodimage = useRef("");
const oldprice = useRef("");
const offerprice = useRef("");
const qty = useRef("");
const descriptions = useRef("");
const addeddate = useRef("");


// add event handeler function for add food 
const addFoodHandler=(e)=>{

  e.preventDefault();

  var insFood={
    foodcategory:foodcategory.current.value,
    foodname:foodname.current.value,
    foodimage:foodimage.current.value,
    oldprice:oldprice.current.value,
    offerprice:offerprice.current.value,
    qty:qty.current.value,
    descriptions:descriptions.current.value,
    addeddate:addeddate.current.value,
  };

  axios.post(`http://localhost:8000/addfoods`, insFood).then(()=>{
    Swal.fire({
      title: "Food Added!",
      text: "Food Added successfully!",
      icon: "success"
    });
  })

  e.target.reset();

  navigate("/admin-login/add-food");


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
Add Food <span className="bi bi-calendar" />
</h3>
<hr className="border border-2 border-primary ms-5 w-50" />
<div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
<form onSubmit={addFoodHandler}>
<div className="form-group">
<label className="fs-5 text-success">Select Food Category</label>
<select ref={foodcategory} className="form-control">
<option value="">-select food Category-</option>
{foodCat && foodCat.map((item)=>{
  return(
    <>
    <option value={item.categoryname}>{item.categoryname}</option>
    </>
  )
})}

</select>
</div>

<div className="form-group mt-3">
<input type="text" ref={foodname} placeholder='Enter FoodName' className="form-control"/>
</div>

<div className="form-group mt-3">
<input type="text" ref={foodimage} placeholder='Food image URL *' className="form-control"/>
</div>


<div className="form-group mt-3">
<input type="text" ref={oldprice}  placeholder='Enter Old Price' className="form-control"/>
</div>


<div className="form-group mt-3">
<input type="text" ref={offerprice}  placeholder='Enter Offer Price' className="form-control"/>
</div>


<div className="form-group mt-3">
<input type="number" ref={qty} className="form-control"/>
</div>

<div className="form-group mt-3">
<textarea ref={descriptions} className="form-control" placeholder='Descriptions' ></textarea>
</div>

<div className="form-group mt-3">
<input type="date" ref={addeddate} placeholder='Added Date' className="form-control"/>
</div>



<div className="form-group mt-3">
<input type="submit" name="addfood" defaultValue="AddFood" className="btn btn-md btn-primary bg-primary text-white"
/>

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
