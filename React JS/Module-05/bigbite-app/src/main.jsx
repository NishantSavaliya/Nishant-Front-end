import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './assets/css/style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import NotFound from './components/user/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
