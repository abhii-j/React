import React, { useContext } from 'react'
import { UserData } from '../context/UserContext'

function Footer() {
     const d=useContext(UserData)
     return (
          <div className='flex justify-center bg-gray-300 '>
               <h1>{d}</h1>
          </div>
     )
}

export default Footer
