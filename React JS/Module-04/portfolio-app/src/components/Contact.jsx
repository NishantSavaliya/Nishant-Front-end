
import React from "react";
import { Table, Container, Form, Row, ProgressBar, InputGroup,Button} from "react-bootstrap";
const Contact=()=>{

    return(
        <>
        <Container  fluid className="contact p-5">
         <div className="mx-auto ">
            <div className="slider-info">
                <h3 className="text-center h1 mt-2  portfolio-name text-primary">Contact Me</h3>
                <hr className="border border-dark border-3 mx-auto w-25" />
            </div>
         </div>


         <Form className="form container fluid border border-2 border-primary p-3">
            <input type="text" placeholder="Name : " className="text-dark p-2 fs-4 border border-1 w-75 ms-5 mt-3" />
            <input type="email" placeholder="email : " className="text-dark p-2 fs-4 border border-1 w-75 ms-5 mt-3" />
            <input type="text" placeholder="Phone No : : " className="text-dark p-2 fs-4 border border-1 w-75 ms-5 mt-3" />
            <textarea type="text" placeholder="Messages : " className="text-dark p-2 fs-4 border border-1 w-75 ms-5 mt-3" />
            <input type="button" value="Send" className="btn btn-primary p-2 fs-4 w-25 ms-5 mt-5" />
         </Form>

        </Container>
        </>
    )
}
export default Contact