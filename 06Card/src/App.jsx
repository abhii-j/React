import { useState } from 'react'
// import './App.css'
import Card from './Card';

function App() {
  const user=[
    {
      "image": "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "John Doe",
      "city": "New York",
      "age": 29,
      "isFollow":true
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      "name": "Jane Smith",
      "city": "Los Angeles",
      "age": 34,
      "isFollow":false
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1693000697560-a3f90545c792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      "name": "Alice Johnson",
      "city": "Chicago",
      "age": 27,
      "isFollow":true
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1731378711263-4206f9fdd536?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
      "name": "Bob Brown",
      "city": "San Francisco",
      "age": 40
      , "isFollow":true
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1732117941241-791a1be33e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8",
      "city": "Miami",
      "name": "Kob Brown",
      "age": 22,
      "isFollow":false
    }
  ]
  
  // const [count, setCount] = useState(0)
  // user.map((elem)=>{
  //   console.log(elem);
    
  // })
  return (
    <div style={{ display: 'flex', gap:20}}>
      {
        user.map(function(elem,idx){
          return <Card key={idx}  name={elem.name} city={elem.city} age={elem.age} photu={elem.image} isFollow={elem.isFollow}/>
        })
      }
    </div>
  )
}

export default App
