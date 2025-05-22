import React from 'react'

function Navbar({data}) {
     return (
          <div className=' py-5  flex justify-between items-center'>
               <h1 className='text-2xl mt-3 font-bold text-orange-600'>Orange</h1>
               <div className='flex bg-orange-600 px-5 py-2 gap-2 rounded-full'>
                    <h2 className='text-white font-medium'>favourite</h2>
                    <h2 className='text-white font-medium'>{data.filter((item)=>{return item.added}).length}</h2>
               </div>
          </div>
     )
}

export default Navbar
