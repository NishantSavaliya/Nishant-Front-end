import React from "react";
import AdminHeader from "./components/admin/AdminHeader";
import AdminSidebar from "./components/admin/AdminSidebar";
import AdminDashboard from "./components/admin/AdminDashboard";
const AdminLayout=()=>{
    return(
        <>
        <body className="dashboard">
        {/* used Admin header components */}
        <AdminHeader />
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-3 admin-sidebar p-5">
         {/* sidebar components used here */}
         <AdminSidebar /> 
         </div>
         <div className="col-md-9 admin-dashboard">
         {/* dashboard content components used here */}
         <AdminDashboard />
         </div>
        </div>
        </div>
        </body>

        </>
    ) 
}
export default AdminLayout