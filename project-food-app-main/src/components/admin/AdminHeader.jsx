import React from "react";
const AdminHeader=()=>{
return(
<>
<>
{/* header */}

<div className="container-fluid p-3 admin-header">
<div className="row">
<div className="col-md-7">
<h3 className="text-white ">SRMS Admin</h3>
</div>
<div className="col-md-5">
<h6>
<span className="bi bi-person text-white" /> welcome admin
&nbsp;&nbsp;&nbsp; <span className="bi bi-calendar" /> &nbsp; Tuesday
June 2024 &nbsp;&nbsp;&nbsp;{" "}
<span className="bi bi-power text-danger" />
&nbsp; Logout
</h6>
</div>
</div>
</div>
<div className="admin-bottom-header shadow p-3">
<div className="row">
<div className="col-md-4">
<h6>
<a href="dashboard.html">
<span className="ms-5 bi bi-speedometer" /> &nbsp;Dashboard
</a>
</h6>
</div>
<div className="col-md-8">
<input
type="text"
placeholder="search here anything....."
className="form-control ms-0 w-75"
/>
</div>
</div>
</div>

</>


</>
) 
}
export default AdminHeader