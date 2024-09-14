import React from "react";
import { MDBContainer,MDBRow,MDBCard,MDBCardImage,MDBCardBody } from "mdb-react-ui-kit";
function CardApp()
{
    return(
        <>
         <MDBContainer className="mt-5 p-5">
            <MDBRow>
                <div className="col-md-4">
                    <MDBCard className="border border-danger border-1">
                        <MDBCardImage src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="img"></MDBCardImage>
                        <MDBCardBody>
                            <p>This is an examples of card</p>
                            <button type="button" className="btn btn-lg btn-danger text-white">Click for details</button>
                        </MDBCardBody>
                    </MDBCard>
                </div>

                <div className="col-md-4">
                    <MDBCard className="border border-danger border-1">
                        <MDBCardImage src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="img"></MDBCardImage>
                        <MDBCardBody>
                            <p>This is an examples of card</p>
                            <button type="button" className="btn btn-lg btn-danger text-white">Click for details</button>
                        </MDBCardBody>
                    </MDBCard>
                </div>

                <div className="col-md-4">
                    <MDBCard className="border border-danger border-1">
                        <MDBCardImage src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="img"></MDBCardImage>
                        <MDBCardBody>
                            <p>This is an examples of card</p>
                            <button type="button" className="btn btn-lg btn-danger text-white">Click for details</button>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </MDBRow>
         </MDBContainer>
        </>
    )
}
export default CardApp