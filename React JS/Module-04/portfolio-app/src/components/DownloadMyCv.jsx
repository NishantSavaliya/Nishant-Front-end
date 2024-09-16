


import React from "react";
import { Table, Container, Form, Row, ProgressBar, InputGroup,Button} from "react-bootstrap";
const DownloadMyCv=()=>{

    return(
        <>
        <Container  fluid className="cv p-5">
         <div className="mx-auto ">
            <div className="slider-info">
                <h3 className="text-center h1 mt-2  portfolio-name">Download My CV</h3>
                <hr className="border border-dark border-3 mx-auto w-25" />
            </div>
            <p className="fs-3 text-center mt-5">Click for download my Resume <span className="bi bi-file-earmark-arrow-down-fill"></span> : <a className="text-primary" href="">DOWNLOAD</a></p>
         </div>
        </Container>
        </>
    )
}
export default DownloadMyCv