import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Crud App/Home'
import Create from './Crud App/Create'
import Update from './Update'
import Read from './Crud App/Read'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/read/:id' element={<Read/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
