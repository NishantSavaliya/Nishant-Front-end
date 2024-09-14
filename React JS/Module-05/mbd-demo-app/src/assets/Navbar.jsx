import React from "react";
import {MDBContainer, MDBNavbar} from 'mdb-react-ui-kit'
function Navbar(){
      return(
            <>
             <MDBContainer fluid  className="p-2 bg-dark">
                  <MDBNavbar className="navbar">
                        <ul>
                              <li><a href="">Home</a></li>
                              <li><a href="">About</a></li>
                              <li><a href="">Services</a></li>
                              <li><a href="">Account</a></li>
                              <li><a href="">Contact</a></li>
                        </ul>
                  </MDBNavbar>
             </MDBContainer>
            </>
      )
}
export default Navbar