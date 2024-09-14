import React from "react";
import { Container,Row } from "react-bootstrap";
const Header=()=>{

    return(
        <>

        <Container fluid className="portfolio-header p-3">
        <Row>
            <div className="col-md-6"><h1 className="text-white ms-5 logo">Nishant Savaliya</h1></div>
            <div className="col-md-6">
                <ul className="navbar-link">
                    <li><a href="">Home</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Download My CV</a></li>

                </ul>
            </div>
        </Row>

        </Container>

        </>
    )
}
export default Header