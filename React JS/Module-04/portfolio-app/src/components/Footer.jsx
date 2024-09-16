import React from "react";
import { Container, Row } from "react-bootstrap";
const Footer=()=>{

    return(
        <>
        <Container fluid className="bg-dark p-5 mt-5">

            <Row>
                <div className="col-md-3 text-white text-center ms-5">
                    <h2>Location <span className="bi bi-geo-alt-fill fs-3"></span></h2>
                    <p className="mt-5 fs-5">
                        Mavdi Chokdi, Rajkot
                    </p>
                    <p className="fs-5">
                        360001
                    </p>
                </div>

                <div className="col-md-4 text-white text-center ms-5">
                    <h2>Around The Web  <span className="bi bi-globe-americas"></span></h2>
                    <p className="mt-5 fs-4"> 
                        <span className="bi bi-facebook"></span>
                        <span className="bi bi-instagram ms-3"></span>
                        <span className="bi bi-twitter ms-3"></span>
                        <span className="bi bi-linkedin ms-3"></span>
                        <span className="bi bi-google ms-3"></span>
                    </p>
                </div>

                <div className="col-md-3 text-white text-center ms-5">
                    <h2>Contact  <span className="bi bi-telephone-fill fs-3"></span></h2>
                    <p className="mt-5 fs-5">
                        +91 91066 63640
                    </p>
                    <p className="fs-5">
                        Do u like my job? <a href="">contact me</a>
                    </p>
                </div>
            </Row>
        
        </Container>

        </>
    )
}
export default Footer