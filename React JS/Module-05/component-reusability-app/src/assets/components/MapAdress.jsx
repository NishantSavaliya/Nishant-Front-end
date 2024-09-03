import React from "react";
import {Card} from 'react-bootstrap'

const AdressLine1=()=>{
      return(
            <>
                  <Card>
                        <h1 className="p-3">Adress Line 1</h1>
                        <hr />
                        <p className="p-2"><b>Adress 01 <span className="bi bi-geo-alt-fill"></span> : </b> 150 ft ring road, mavdi chokdi, Rajkot</p>
                        <p className="p-2"><b>Contact <span className="bi bi-telephone"></span> : </b> +91 9106663640</p>
                  </Card>
            </>
      )
}
const AdressLine2=()=>{
      return(
            <>
                  <Card className="bg-light">
                        <h1 className="p-3">Adress Line 2</h1>
                        <hr />
                        <p className="p-2"><b>Adress 02 <span className="bi bi-geo-alt-fill"></span> : </b> 150 ft ring road, mavdi chokdi, Rajkot</p>
                        <p className="p-2"><b>Contact <span className="bi bi-telephone"></span> : </b> +91 9106663640</p>
                  </Card>
            </>
      )
}
const AdressLine3=()=>{
      return(
            <>
                  <Card>
                        <h1 className="p-3">Adress Line 3</h1>
                        <hr />
                        <p className="p-2"><b>Adress 03 <span className="bi bi-geo-alt-fill"></span> : </b> 150 ft ring road, mavdi chokdi, Rajkot</p>
                        <p className="p-2"><b>Contact <span className="bi bi-telephone"></span> : </b> +91 9106663640</p>
                  </Card>
            </>
      )
}
const AdressLine4=()=>{
      return(
            <>
                  <Card>
                        <h1 className="p-3">Adress Line 4</h1>
                        <hr />
                        <p className="p-2"><b>Adress 04 <span className="bi bi-geo-alt-fill"></span> : </b> 150 ft ring road, mavdi chokdi, Rajkot</p>
                        <p className="p-2"><b>Contact <span className="bi bi-telephone"></span> : </b> +91 9106663640</p>
                  </Card>
            </>
      )
}

export {AdressLine1, AdressLine2, AdressLine3, AdressLine4}