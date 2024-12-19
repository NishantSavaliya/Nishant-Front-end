
import React,{useState,useEffect} from "react";
import Header from "./components/user/Header";
import Navbar from "./components/user/Navbar";
import Slider from "./components/user/Slider";
import Content from "./components/user/Content";
import Footer from "./components/user/Footer";
import Login from "./components/user/Login";
import ForgetPassword from "./components/user/ForgetPassword";
import loaderimg from './assets/images/loader.gif';
const Layout=()=>{
// destructuring here
const[loader,setloader]=useState(true);
useEffect(()=>{
setTimeout(()=>{
setloader(false);
},1500)
},[])
return(
loader ? 
<>
<img src={loaderimg} className="img-fluid loader" />   
</>
:
<>

{/* reused all components */}
<Header />
<Navbar />
<Slider />
<Content />
<Footer />
<Login />
<ForgetPassword />

</>
)
}

export default Layout
