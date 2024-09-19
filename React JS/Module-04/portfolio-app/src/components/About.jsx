
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

            {/* <div className="personal">
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
            </Table> */}

            <div class="card border border-warning w-75 mx-auto">
                        <div class="header bg-warning text-white p-3"><h3><span class="bi bi-celendar"></span><span> My Personal Details</span></h3></div>
                        <div class="body border border-warning">
                          {/* <h4>My Attendance</h4> */}
                              {/* <Table striped bordered hover className="table table-responsive">
                                    <tr>
                                          <th><button className="btn btn-sm border border-0">Name : </button> <button type="button" className="btn btn-sm border border-0 float-end">0</button></th>
                                    </tr>
                                    <tr>
                                          <th><span>Shift Change Request</span> <button type="button" class="btn btn-sm border border-0 float-end">0</button></th>
                                    </tr>
                                    <tr>
                                          <th><span>Late Early</span> <button type="button" class="btn btn-sm border border-0 float-end">0</button></th>
                                    </tr>
                                    <tr>
                                          <th><span>Overtime</span> <button type="button" class="btn btn-sm border border-0 float-end">0</button></th>
                                    </tr>
                              </Table> */}

                        <Table striped bordered hover>
                                        {/* <thead>
                                          <tr>
                                            <th colSpan={2}>Personal Detail :</th>
                                          </tr>
                                        </thead> */}
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
                                            <td>Education :</td>
                                            <td>B.E. (Mechanical)</td>
                                          </tr>
                                          <tr>
                                            <td>Adress : </td>
                                            <td>Mavdi chokdi, Rajkot-360001</td>
                                          </tr>
                                        </tbody>
                        </Table>

                        </div>
              </div>
         </div>

        </Container>
        </>
    )
}
export default Slider