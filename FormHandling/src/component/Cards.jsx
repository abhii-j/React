import React from 'react'
import Card from './Card'

function Cards({users ,handleDelete}) {
     return (
         <div className='h-70 w-full flex flex-wrap overflow-y-auto justify-center gap-4 mt-15 m-auto'>
               {users.map((item,index)=>
               {
                  return<>
                   <Card user={item} handleDelete={handleDelete} key={index} index={index}></Card>
                  </>   
               }
               )}
         </div>
     )
}

export default Cards
