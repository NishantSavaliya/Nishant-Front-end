
import React from "react";
import { Container, Row } from "react-bootstrap";
const Slider=()=>{

    return(
        <>
        <Container  fluid className="about p-5">
         <div className="mx-auto ">
            {/* <div className="slider-info">
                <h3 className="text-center h1 mt-2  portfolio-name">Front-end Developer</h3>
                <hr className="border border-dark border-3 mx-auto w-25" />
                <p className="text-center mt-2 h4">HTML - CSS - Bootstrap - TailWind - JavaScript - React JS</p>
            </div> */}
            <div classname="progress">
    <div
      classname="progress-bar bg-dark"
      role="progressbar"
      style={{ width: "35%" }}
      aria-valuenow={35}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  </div>

         </div>

        </Container>
        </>
    )
}
export default Slider