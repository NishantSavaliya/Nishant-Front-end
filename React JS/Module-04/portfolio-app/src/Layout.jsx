import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from './components/About'

const Layout=()=>{
      return(
            <>
            <Header/>
            <Slider/>
            <Content/>
            <About/>
            <Footer/>
            </>
      )
}
export default Layout