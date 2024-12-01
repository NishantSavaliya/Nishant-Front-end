import React from 'react'
import Header from './Header'
import { Container,Table } from 'react-bootstrap'

export default function DeletedTask() {
  return (
    <>
      <Header/>
      <Container className='mx-auto w-50 p-4'>

            <p  className='text-dark fs-1 fw-bolder'>Deleted Tasks</p>

            <Table className='table table-responsive shadow mt-5'>

                  <thead>
                        <tr className='fs-4'>
                              <th>Task Name</th>
                              <th>Detail</th>
                        </tr>
                  </thead>

                  <tbody>
                  
                  </tbody>
            </Table>
      </Container>
    </>
  )
}
