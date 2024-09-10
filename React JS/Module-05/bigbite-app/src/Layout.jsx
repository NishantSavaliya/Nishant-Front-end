import React from "react";
import Header from "./components/user/Header";
import Navbar from "./components/user/Navbar";
import Slider from "./components/user/Slider";
import Content from "./components/user/Content";
import Footer from "./components/user/Footer";
import Login from "./components/user/Login";
import ForgetPassword from "./components/user/ForgetPassword";
const Layout=()=>{
    return(
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