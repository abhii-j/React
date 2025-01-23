import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './commoponants/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-5 rounded-xl text-black mb-5'>Tailwind test</h1>

      <Card titiles="Chemistry..." valuess="5.5"/>
      <Card titiles="Science"/>
      <Card valuess="6.6"/>
    </>
  )
}

export default App
