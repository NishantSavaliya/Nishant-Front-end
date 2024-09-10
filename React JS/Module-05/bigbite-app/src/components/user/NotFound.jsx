import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import notfound from '../../assets/images/404.gif'
const NotFound=()=>{
return(
<>
{/* reused all components */}
<Header />
<Navbar />
{/* 404 page */}
<div className="container p-2 mt-5">
<h2 className="p-3">404 Page Not found <span className="bi bi-truck" />{" "}
</h2>
<hr className="border border-1 border-danger" />

<img src={notfound} alt="not found" className="img-fluid" />

</div>
<Footer />
<Login />
<ForgetPassword />
</>
)
}

export default NotFound