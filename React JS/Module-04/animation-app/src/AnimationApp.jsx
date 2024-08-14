import React from "react";
import reg from './assets/images/register.png'

function App(){
      return (
            <>
                  <div className="app">
                        <div className="box1">
                              <img src={reg} alt="photo" style={{width:'250px', height:'250px'}}/>
                        </div>
                        <div className="box2">
                              <h1>Register now</h1>
                              <form action="">
                                    <input type="text" placeholder="Name*" />
                                    <br />
                                    <br />

                                    <input type="text" placeholder="Email*" />
                                    <br />
                                    <br />

                                    <input type="text" placeholder="Mobile*" />
                                    <br />
                                    <br />

                                    <input type="submit" value="Register" />
                                    <br />
                                    <br />
                              </form>


                        </div>
                  </div>
            
            
            
            </>
      )
}

export default App