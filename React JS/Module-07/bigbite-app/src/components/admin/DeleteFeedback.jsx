import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function DeleteFeedback() {

// destructuring data

      const [data,setData]=useState("");
      const navigate=useNavigate();
      const {id}=useParams();

// use useEffect() hook for delete data 

      useEffect(()=>{

            // call api via axios.delete()

            axios.delete(`http://localhost:8000/feedback/${id}`).then(()=>{

                  // pass message

                  Swal.fire({
                        icon: "error",
                        title: "Deleted",
                        text: "Food Deleted!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                  });

            });

            navigate("/admin-login/manage-feedback")
      }, [])


  return (
    <div>
      
    </div>
  )
}
