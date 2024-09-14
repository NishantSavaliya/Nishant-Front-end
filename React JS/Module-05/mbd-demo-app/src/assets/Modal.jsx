
import React from "react"
import { MDBContainer,MDBBtn,MDBRow } from "mdb-react-ui-kit"
function ModalApp(){
    return(
        <>

            <MDBContainer className="p-5 mt-5 shadow w-50 mx-auto">
             <MDBBtn className="btn btn-lg btn-danger text-white" data-bs-toggle="modal" data-bs-target="#login">Click for Login <span className="fa fa-user"></span></MDBBtn>

            </MDBContainer>  
            <MDBContainer className="p-0">
                <div className="modal fade" role="dialog" id="login">
                    <div className="modal-dialog" style={{minWidth:"60%"}}>
                        <div className="modal-content">
                            <MDBRow>
                                <div className="col-md-5 bg-info p-5"></div>
                                <div className="col-md-5 p-5">
                                    <h3>Login Form</h3>
                                    <hr className="border border-1 border-info w-25" />
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" placeholder="Email *" />
                                    </div>
                                    
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" placeholder="Password *" />
                                    </div>
                                    
                                    <div className="form-group mt-3">
                                        <input type="submit" className="btn btn-lg btn-dark text-white" placeholder="Email *" value="SignIn" />
                                    </div>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                </div>
            </MDBContainer>
        </>
    )
}
export default ModalApp
