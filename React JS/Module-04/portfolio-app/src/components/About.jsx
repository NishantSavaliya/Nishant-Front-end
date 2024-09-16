
import React from "react";
import { Table, Container, Row, ProgressBar, InputGroup,Button} from "react-bootstrap";
const Slider=()=>{

   const now = 50;
    return(
        <>
        <Container  fluid className="about p-5">
         <div className="mx-auto ">
            <div className="slider-info">
                <h3 className="text-center h1 mt-2  portfolio-name">About</h3>
                <hr className="border border-dark border-3 mx-auto w-25" />
            </div>
         
         
            
            {/* <Row className=" row w-75 mx-auto">
              <div className="col-md-4">
                <p className="text-primary mt-3 fs-2">HTML</p>
              </div>
              <div className="col-md-8">
               <ProgressBar now="50" label={`${now}%`} className="progress mt-5 w-100" placeholder="html"/>
              </div>
            </Row> */}

            <div className="personal">
              <h5>* Personal Detail :</h5>
            </div>

            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan={2}>Personal Detail :</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name :</td>
                    <td>Nishant P. Savaliya</td>
                  </tr>
                  <tr>
                    <td>Birth Date :</td>
                    <td>09 December 1996</td>
                  </tr>
                  <tr>
                    <td>Adress : </td>
                    <td>Mavdi chokdi, Rajkot-360001</td>
                  </tr>
                </tbody>
            </Table>
          
           
            
      

         </div>

        </Container>
        </>
    )
}
export default Slider