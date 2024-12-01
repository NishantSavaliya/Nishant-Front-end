import React from 'react'
import Header from './Header'
import AddNewTask from './AddNewTask'
import TaskList from './TaskList'

export default function Layout() {
  return (
    <>
      <Header/>
      <AddNewTask/>
      <TaskList/>
    </>
  )
}
