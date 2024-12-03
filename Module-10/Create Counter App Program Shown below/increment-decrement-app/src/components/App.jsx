import React from "react";
import { useState } from "react";

const App=()=>
{
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    
    return(
        <>
        <div className="container">
            <h1 className="appname">Counter App</h1>
            <h1 className="counterno">{count}</h1>
            <button onMouseOver={increment}>Increment</button>
            <button onMouseOver={decrement}>Decrement</button>
        </div>
        </>
    )
}
export default App