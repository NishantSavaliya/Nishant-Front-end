import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Multi from "./Multi.jsx"
import Detail from "./Detail.jsx"
import './index.css'
import "./assets/css/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Multi/>
    <Detail/>
  </React.StrictMode>,
)
