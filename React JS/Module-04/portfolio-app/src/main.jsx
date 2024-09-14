import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'

import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '../src/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Layout />
  </StrictMode>,
)
