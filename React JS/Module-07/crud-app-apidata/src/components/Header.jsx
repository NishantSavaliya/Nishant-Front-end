import React from 'react'
import {Container,Row} from 'react-bootstrap'

export default function Header() {
  return (
      <div>
      <Container fluid className='shadow p-4 bg-white'>
      <Row>
            <div className='col-md-4 p-2'>
                  <span className='bi bi-call'></span>
                  <b>Call Us : (+91)-91055553540</b>
            </div>
            <div className='col-md-5 p-2'>
                  <input type="text" placeholder='Search Anythings Here...' className='form-control' />
            </div>
            <div className='col-md-3 p-2'>
                  <span className='bi bi-facebook ms-5 fs-4'></span>
                  <span className='bi bi-instagram ms-3 fs-4'></span>
                  <span className='bi bi-twitter ms-3 fs-4'></span>
                  <span className='bi bi-whatsapp ms-3 fs-4'></span>
            </div>
      </Row>
    </Container>
      </div>
    
  )
}
