import React, { useEffect,useRef, useState } from 'react'
import axios from 'axios'
import Header from './Header';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';


export default function AllProduct() {

// destructuring data

const [data,setData]=useState("");
const navigate=useNavigate();
const {id}=useParams();

// use useEffect() hook for manage data

useEffect(()=>{
      axios.get(`http://localhost:8000/addfoods/${id}`).then((response)=>{
            setData(response.data);
      })
},[data]);


  return (
    <>
      <body className='all-prod'>

      <Header/>
      <Navbar/>

      <div className="row m-5">

          {data && data.map((item)=>{

            return(
                  <>
                              <div className="col-md-3 ms-5 shadow p-3 mt-3">
                                    <img src={item.foodimage} className="img-fluid w-100 h-50" />
                                    <p className="fs-4 text-secondary">
                                          <b>{item.foodname}</b>
                                    </p>
                                    <p className="fs-6 text-secondary">
                                          <b>Rs.
                                          {item.offerprice} <del>Rs.{item.oldprice}</del>
                                          </b>
                                    </p>
                                    {/* <p className="fs-6 text-secondary">{item.descriptions}</p>
                                    <p className="text-secondary">{item.addeddate}</p> */}
                                    <p className="text-secondary">
                                          <b>
                                          <button type="button" className="btn btn-sm btn-dark text-white">
                                          View Detail
                                          </button>
                                          </b>
                                    </p>
                              </div>      
                  </>
                  )
            })}
          
</div>
</body>
    </>
  )
}
