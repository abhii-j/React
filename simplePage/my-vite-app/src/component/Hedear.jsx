import React, { useContext } from 'react'
import { UserData } from '../context/UserContext'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hedear() {
     const username=useContext(UserData)
     return (
          <header className='flex items-center justify-between px-20 py-[30px] border-b-[1px] shadow-c-'>
               <div className="log ">
                    <h1 className='text-4xl font-bold flex gap-2'><FaRegUser /> Hello! , {username}</h1>
               </div>
               <nav className="links flex gap-8">
                    <Link to="/" className='text-lg p-2 px-4 hover:ring-1 hover:bg-black hover:text-white rounded-xl'>Home</Link>
                    <Link to="/about" className='text-lg p-2 px-4 hover:ring-1 hover:bg-black hover:text-white rounded-xl'>About</Link>
                    <Link to="/contact" className='text-lg p-2 px-4 hover:ring-1 hover:bg-black hover:text-white rounded-xl'>Contact</Link>
               </nav>
          </header>
     )
}

export default Hedear
