import { useState } from "react"


function App() {

  const [color,setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor('red')} className="px-4 py-1 outline-none text-white shadow-lg rounded-full" style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')} className="px-4 py-1 outline-none text-white shadow-lg rounded-full" style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor('black')} className="px-4 py-1 outline-none text-white shadow-lg rounded-full" style={{backgroundColor:'black'}}>Black</button>
          <button onClick={()=>setColor('aqua')} className="px-4 py-1 outline-none text-white shadow-lg rounded-full" style={{backgroundColor:'aqua'}}>Aqua</button>
          <button onClick={()=>setColor('blue')} className="px-4 py-1 outline-none text-white shadow-lg rounded-full" style={{backgroundColor:'blue'}}>Blue</button>
          {/* onClick={()=>setColor('red')}   onclick function also want function */}
        </div>
      </div>
    </div>
  )
}

export default App
