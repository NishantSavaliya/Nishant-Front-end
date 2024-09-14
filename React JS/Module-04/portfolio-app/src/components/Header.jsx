import React from "react";
import { Container,Row } from "react-bootstrap";
const Header=()=>{

    return(
        <>

        <Container fluid className="portfolio-header p-4 shadow">
        <Row>
            <div className="col-md-5"><h1 className=" ms-5 logo">Nishant Savaliya</h1></div>
            <div className="col-md-7">
                <ul className="navbar-link mt-2">
                    <li ><a className="text-white fs-5 ps-0" href="">Home</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">Portfolio</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">About</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">Contact</a></li>
                    <li><a className="text-white fs-5 ps-5" href="">Download My CV</a></li>

                </ul>
            </div>
        </Row>

        </Container>

        </>
    )
}
export default Header