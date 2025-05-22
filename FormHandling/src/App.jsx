import React, { useState } from 'react'
import Cards from './component/Cards'
import Form from './component/Form'

function App() {

  const [users,setDeta]=useState([])

  const handleFormSubmitData = (data)=>{
    setDeta([...users,data])
  }

  const handleDelete=(idx)=>{
    setDeta(()=>users.filter((item,index)=> index!=idx))
  }

  return (
    <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1541623089466-8e777dd05d70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] p-20 m-auto">

      <Cards users={users} handleDelete={handleDelete}></Cards>
      <Form handleFormSubmitData={handleFormSubmitData}></Form>
    </div>
  )
}

export default App
