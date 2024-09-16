import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from './components/About'
import Contact from "./components/Contact";
import DownloadMyCv from "./components/DownloadMyCv";

const Layout=()=>{
      return(
            <>
            <Header/>
            <Slider/>
            <Content/>
            <About/>
            <Contact/>
            <DownloadMyCv/>
            <Footer/>
            </>
      )
}
export default Layout