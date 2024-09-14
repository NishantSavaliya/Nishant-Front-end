import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Contact from './Component/Contact'
import PageNotFound from './Component/PageNotFound'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </Router>
   
  </StrictMode>,
)
