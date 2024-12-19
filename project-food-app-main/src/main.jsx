
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './assets/css/style.css'
import './assets/admin/css/style.css'
// user panel components import here
import Layout from './Layout'
import Contact from './components/user/ContactUs'
import Register from './components/user/RegisterUs'
import FoodMenu from './components/user/FoodMenu'
import Punjabi from './components/user/Punjabi'
import NotFound from './components/user/NotFound'
// admin panel components import here
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './AdminLayout'
import AddFoodCategory from './components/admin/AddFoodCategory'
import ManageFoodCategory from './components/admin/ManageFoodCategory'
import AddFood from './components/admin/AddFood'
import ManageFood from './components/admin/ManageFood'
import ManageContacts from './components/admin/ManageContacts'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/create-account' element={<Register />} />
        <Route path='/food-menu' element={<FoodMenu />} />
        <Route path='/punjabi-food' element={<Punjabi />} />
        <Route path='*' element={<NotFound />} />
        {/* admin panel react routing here */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />
        <Route path='/admin-login/addfood-category' element={<AddFoodCategory />} />
        <Route path='/admin-login/managefood-category' element={<ManageFoodCategory />} />
        <Route path='/admin-login/add-food' element={<AddFood />} />
        <Route path='/admin-login/manage-food' element={<ManageFood />} />
        <Route path='/admin-login/managecontacts' element={<ManageContacts />} />
        
       
      </Routes>
    </Router>
  </StrictMode>,
)
