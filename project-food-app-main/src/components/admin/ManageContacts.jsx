import React,{useState,useRef, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom';
export default function ManageContacts() {
// destructure data
const [contactData, setConatctData] = useState([]);
// fetch all contact us data 
useEffect(()=>{   
  
  axios.get(`http://localhost:8000/contact-us`).then((response)=>{
    setConatctData(response.data);
  })

},[contactData]);


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
        Manage Contacts  <span className="bi bi-calendar" />
      </h3>
      <hr className="border border-2 border-primary ms-5 w-50" />
      <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subjects</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {contactData && contactData.map((item)=>{
            return(
                <>
                <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.subject}</td>
              <td>{item.message}</td>
              <td>
                <div style={{ minWidth: 80 }}>
                  <a href="">
                    <span className="bi bi-trash text-danger fs-2" />
                  </a>
                </div>
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
