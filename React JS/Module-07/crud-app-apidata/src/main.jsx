import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import ManageEmployee from './components/ManageEmployee'
import DeleteEmployee from './components/DeleteEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import PageNotFound from './components/PageNotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/manage-employee' element={<ManageEmployee/>}/>
        <Route path='/delete-employee/:id' element={<DeleteEmployee/>}/>
        <Route path='/edit-employee/:id' element={<UpdateEmployee/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
