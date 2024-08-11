import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App"
// import Inline from "./InlineApp"

// import Internal from "./InternalApp"

import External from "./ExternalApp"

import "./assets/css/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}

    {/* inline css Example  */}
    {/* <Inline/> */}

    {/* <Internal/> */}

    <External/>
  </>
)
