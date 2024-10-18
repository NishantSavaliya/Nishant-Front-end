import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Appoinment from './components/BookApoinment'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appoinment/>
  </StrictMode>,
)
