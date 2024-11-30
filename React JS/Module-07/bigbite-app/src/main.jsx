import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './assets/css/style.css'
import './assets/admin/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// user panel components import here

import Contact from './components/user/ContactUs'
import Register from './components/user/RegisterUs'
import FoodMenu from './components/user/FoodMenu'
import Punjabi from './components/user/Punjabi'
import GujratiFood from './components/user/GujratiFood'
import ChineseFood from './components/user/ChineseFood'
import Sandwiches from './components/user/Sandwiches'
import Layout from './Layout'
import NotFound from './components/user/NotFound'
import Feedback from './components/user/Feedback'
import AllProduct from './components/user/AllProduct'
import ViewFoodDetail from './components/user/ViewFoodDetail'

// admin panel components import here

import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './components/user/AdminLayout'
import AddFoodCategory from './components/admin/AddFoodCategory'
import ManageFoodCategory from './components/admin/ManageFoodCategory'
import AddFood from './components/admin/AddFood'
import ManageFood from './components/admin/ManageFood'
import ManageContact from './components/admin/ManageContact'
import ManageFeedback from './components/admin/ManageFeedback'
import DeleteFoodCategory from './components/admin/DeleteFoodCategory'
import DeleteFood from './components/admin/DeleteFood'
import DeleteContact from './components/admin/DeleteContact'
import DeleteFeedback from './components/admin/DeleteFeedback'
import UpdateFoodCategory from './components/admin/UpdateFoodCategory'
import UpdateFood from './components/admin/UpdateFood'
import AddCountry from './components/admin/AddCountry'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/create-account' element={<Register/>} />
        <Route path='/food-menu' element={<FoodMenu/>} />
        <Route path='/punjabi-food' element={<Punjabi/>} />
        <Route path='/gujrati-food' element={<GujratiFood/>} />
        <Route path='/chinese-food' element={<ChineseFood/>} />
        <Route path='/sandwiches' element={<Sandwiches/>} />
        <Route path='/feedback' element={<Feedback/>} />
        <Route path='/all-product' element={<AllProduct/>} />
        <Route path='/view-food-detail/:id' element={<ViewFoodDetail/>} />
        <Route path='*' element={<NotFound/>} />


        {/* admin panel routing */}

        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/admin-login/dashboard' element={<AdminLayout/>} />
        <Route path='/admin-login/addfood-category' element={<AddFoodCategory/>} />
        <Route path='/admin-login/managefood-category' element={<ManageFoodCategory/>} />
        <Route path='/admin-login/add-food' element={<AddFood/>} />
        <Route path='/admin-login/manage-food' element={<ManageFood/>} />
        <Route path='/admin-login/manage-contact' element={<ManageContact/>} />
        <Route path='/admin-login/manage-feedback' element={<ManageFeedback/>} />
        <Route path='/admin-login/delete-food-category/:id' element={<DeleteFoodCategory/>} />
        <Route path='/admin-login/delete-food/:id' element={<DeleteFood/>} />
        <Route path='/admin-login/delete-contact/:id' element={<DeleteContact/>} />
        <Route path='/admin-login/delete-feedback/:id' element={<DeleteFeedback/>} />
        <Route path='/admin-login/update-food-category/:id' element={<UpdateFoodCategory/>} />
        <Route path='/admin-login/update-food/:id' element={<UpdateFood/>} />
        <Route path='/admin-login/add-country' element={<AddCountry/>} />


      </Routes>
    </Router>
  </StrictMode>,
)
