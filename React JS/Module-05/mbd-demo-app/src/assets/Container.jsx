import React from "react";
import { MDBContainer,MDBRow,MDBBtn } from "mdb-react-ui-kit";
// const ContainerApp=()=>{
//     return(
//         <>

//         </>
//     )
// }

// function ContainerApp(){
//     return(
//         <>
            
//         </>
//     )
// }


export default function ContainerApp(){
    return(
        <>
        <MDBContainer className="w-50 p-5 bg-danger text-white mt-5">
            <MDBRow>
               <MDBBtn className="btn btn-info text-white btn-lg w-25">Click Me!</MDBBtn>
            </MDBRow>
        </MDBContainer>
            
        </>
    )
}