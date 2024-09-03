import React from "react";
import {Container, Row} from 'react-bootstrap'
import { AdressLine1, AdressLine2, AdressLine3, AdressLine4 } from "./MapAdress";

const Layout=()=>{
      return(
            <>
            
            <Container className="container fluid mx-auto mt-5 p-5 bg-success border-1">

                  <h1 className="p-3 text-dark"> Map Adress</h1>
                  <hr />

                  <Row>
                        <div className="col-md-6">
                              <AdressLine1/>
                        </div>
                        <div className="col-md-6">
                              <AdressLine2/>
                        </div>
                  </Row>
                  
                  <Row className="mt-3">
                        <div className="col-md-6">
                              <AdressLine3/>
                        </div>
                        <div className="col-md-6">
                              <AdressLine4/>
                        </div>
                  </Row>

            </Container>
            
            </>
      )
}
export default Layout