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

    {/* add food category dropdaown */}

    <li className="dropdown">
      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
        <span className="bi bi-calendar" />
        Add Category
      </a>
      <ul
        className="dropdown-menu bg-white text-dark p-2"
        style={{ maxWidth: "250px !important" }}
      >
        <li>
          <a href="/admin-login/addfood-category" className="text-dark">
            Add Category <span className="bi bi-calendar" />
          </a>
        </li>
        <li>
          <a href="/admin-login/managefood-category" className="text-dark">
            Manage Category <span className="bi bi-calendar" />
          </a>
        </li>
      </ul>
    </li>

    {/* add food dropdown */}

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
      <a href="/admin-login/manage-contact">
        <span className="bi bi-book" />
        Manage Contacts
      </a>
    </li>
    <li>
      <a href="/admin-login/manage-feedback">
        <span className="bi bi-comment" />
        Manage Feedback
      </a>
    </li>
  </ul>


        </>
    ) 
}
export default AdminSidebar