import React from 'react'

function Card({data,handeChick,index}) {

     const {image,name,singer,added} = data;

     return (
          <div className='mt-8 w-70  flex p-4 gap-4 bg-white rounded relative'>
               <div className='w-30 h-30 mb-5 rounded bg-orange-600'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
               </div>
               <div>
                    <h1 className='text-xl font-medium'>{name}</h1>
                    <h3>{singer}</h3>
               </div>
               <button className={`absolute bottom-0 py-2 text-white font-medium rounded-full text-sm
                    ${added ? "bg-green-900 ": "bg-orange-600"}  left-1/2 px-3 -translate-x-[50%] -translate-y-[-50%] `} onClick={()=>handeChick(index)}>{added == false? "Add to favourite":"Added"}</button>
          </div>
     )
}

export default Card
