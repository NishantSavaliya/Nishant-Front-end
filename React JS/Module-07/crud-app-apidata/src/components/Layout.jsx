import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import AddEmployee from './AddEmployee'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
     <Header/> 
     <Navbar/>
     <AddEmployee/>
     <Footer/>
    </>
  )
}
