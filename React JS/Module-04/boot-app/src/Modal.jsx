import React from "react";
import {Container, Row} from 'react-bootstrap'
const App=()=>{
      return(
      <>
      <Container className="w-50 mx-auto shadow mt-5 p-5">
      <Row>
            <div className="col-md-4">
                 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMvWrD_eKNKC0muMoE5OA3Z7051JiF552tw&s" alt="" className="image-fluid" />
            </div>

            <div className="col-md-8">
                  <button type="button" className="btn btn-dark text-white w-75 ms-5 mt-5" data-bs-toggle="modal" data-bs-target="#sign" >Sign in here</button>

            </div>
      </Row>

      {/* modal here */}

      <div className="modal fade" id="sign" role="dialog">
            <div className="modal-dialog" style={{minWidth: "5  0%"}}>
                  <div className="modal-content mt-5 p-5">
                        <Row>
      <div className="col-md-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP1FKj9XKP1HRiiHMbw81tbKpjnnALKNSxg&s" alt="" className="img-fluid"/>
                              </div>
                              <div className="col-md-7">
                                    <h1 className="text-center">Sign in here</h1>
                                    <hr />
                                    <div className="form-group mt-3">
                                          <input type="text" placeholder="Email.." className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                          <input type="text" placeholder="Password" className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                          <input type="button" value="Login" className="btn btn-primary text-white" />
                                    </div>
                              </div>
                        </Row>
                  </div>
            </div>

      </div>
      </Container>
      
      </>
      )
}
export default App