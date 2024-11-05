import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowEmployee from './ShowEmployee'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowEmployee />
  </StrictMode>,
)
