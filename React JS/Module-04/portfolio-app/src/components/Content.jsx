import React from "react";
import { Container, Row } from "react-bootstrap";

import html from '../assets/images/html-task-01.png'
import cssGrid from '../assets/images/css-grid.png'
import cssBg from '../assets/images/css-bg.png'
import figma01 from '../assets/images/figma-01.png'
import figma02 from '../assets/images/figma-02.png'
import figma03 from '../assets/images/figma-03.png'
import proj01 from '../assets/images/proj-01.png'
import proj02 from '../assets/images/proj-02.png'
import proj03 from '../assets/images/proj-03.png'
import proj04 from '../assets/images/proj-04.png'
import proj05 from '../assets/images/proj-05.png'
import proj06 from '../assets/images/proj-06.png'
import proj07 from '../assets/images/proj-07.png'
import proj08 from '../assets/images/proj-08.png'

import calc from '../assets/images/calc.png'
import tops from '../assets/images/tops-profile.png'


// import portfolio from '../../assets/images/1.jpg'
const Content=()=>{

    return(
        <>
        <Container fluid className="p-5 portfolio">
        {/* portfolio section */}
        <div className="container">
        <h1 className="text-center h1 mt-2 portfolio">Portfolio</h1>
        <hr className="border-4 mx-auto w-25" />

        <p className="fs-4 mt-5 ">* HTML  -  CSS</p>
        <Row className=" mt-4 g-4">
            <div className="col-md-6">
                <img src={cssGrid} alt=""  className="img-fluid"/>
            </div>
            <div className=" col-md-6">
                <img src={cssBg} alt="" className="img-fluid"/>
            </div>
        </Row>

        <p className="fs-4 mt-5 ">* Figma  -  Bootstrap</p>
        <Row className="mt-1 mx-auto g-5">
            <div className="port-img col-md-6">
                <img src={figma01} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={figma02} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={figma03} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={tops} alt="" className="img-fluid"/>
            </div>
        </Row>

        <p className="fs-4 mt-5 ">* Project : Auto-Portal</p>
        <Row className="mt-1 mx-auto g-5">
            <div className="port-img col-md-6">
                <img src={proj01} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={proj02} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={proj03} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={proj04} alt="" className="img-fluid"/>
            </div>

            <div className="port-img col-md-6">
                <img src={proj05} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={proj06} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={proj07} alt=""  className="img-fluid"/>
            </div>
            <div className="port-img col-md-6">
                <img src={proj08} alt="" className="img-fluid"/>
            </div>
        </Row>


        </div>
        
        </Container>

        </>
    )
}
export default Content


