import React from "react";
const AdminSidebar=()=>{
return(
<>

<ul className="sidebar-link">
<li>
<a href="manageemployee.html">
<span className="bi bi-person" /> Manage Customers
</a>
</li>
<li className="dropdown">
<a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
<span className="bi bi-calendar" />
Add Food Category
</a>
<ul
className="dropdown-menu bg-white text-dark p-2"
style={{ maxWidth: "250px !important" }}
>
<li>
<a href="/admin-login/addfood-category" className="text-dark">
AddCategory <span className="bi bi-calendar" />
</a>
</li>
<li>
<a href="/admin-login/managefood-category" className="text-dark">
ManageCategory <span className="bi bi-calendar" />
</a>
</li>
</ul>
</li>
<li className="dropdown">
<a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
<span className="bi bi-calendar" />
Add Food 
</a>
<ul
className="dropdown-menu bg-white text-dark p-2"
style={{ maxWidth: "250px !important" }}
>
<li>
<a href="/admin-login/add-food" className="text-dark">
AddFood <span className="bi bi-calendar" />
</a>
</li>
<li>
<a href="/admin-login/manage-food" className="text-dark">
ManageFood <span className="bi bi-calendar" />
</a>
</li>
</ul>
</li>


<li>
<a href="addattendance.html">
<span className="bi bi-calendar" />
Manage Orders
</a>
</li>
<li>
<a href="addfaq.html">
<span className="bi bi-book" />
Add FAQ
</a>
</li>
<li>
<a href="/admin-login/managecontacts">
<span className="bi bi-book" />
Manage Contacts
</a>
</li>
<li>
<a href="managefeedback.html">
<span className="bi bi-comment" />
Manage Feedback
</a>
</li>
</ul>


</>
) 
}
export default AdminSidebar