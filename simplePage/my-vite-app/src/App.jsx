import React from 'react'
import Hedear from './component/Hedear'
// import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import NotFound from './component/NotFound'

function App() {
  return (
    <>
    <Hedear/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
