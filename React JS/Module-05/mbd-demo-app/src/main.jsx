import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Navbar from './assets/Navbar'
import ContainerApp from './assets/Container'
import CardApp from './assets/Card'
import ModalApp from './assets/Modal'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <ModalApp/>
     <Navbar/>
     <ContainerApp/>
     <CardApp/>
    </>
  </StrictMode>,
)
