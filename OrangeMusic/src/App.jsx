import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {


  const data=[
    { image: "https://images.unsplash.com/photo-1515010137531-66995c7f40e6?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Let It Be", singer: "The Beatles", added: false },
    { image: "https://images.unsplash.com/photo-1611001716885-b3402558a62b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Like You", singer: "Adele", added: false },
    { image: "https://images.unsplash.com/photo-1604936809881-d8113b290d47?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Stay", singer: "Rihanna", added: false },
    { image: "https://images.unsplash.com/photo-1584635234347-ce88034d9501?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Wonderful World", singer: "Louis Armstrong", added: false },
    { image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8 ", name: "Hey Jude", singer: "The Beatles", added: false },
    { image: "https://plus.unsplash.com/premium_photo-1731355246077-e2cc2f774922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk0fHx8ZW58MHx8fHx8", name: "Imagine", singer: "John Lennon", added: false }
  ]
  
  const [songData,setSongData]= useState(data)

  function work(index){
   setSongData((prev)=>{
    return prev.map((item,indx)=>{
      if(indx == index ) return {...item, added: !item.added}
      return item;
    })
   })
  }


  return (
    <div className="px-15 h-screen w-full bg-gray-200">
        <Navbar data={songData}/>
       <div className="flex gap-10 flex-wrap">
          {
            songData.map((item,index)=>{
             return <Card key={index} index={index} handeChick={work} data={item}/>
            })
          }
       </div>
    </div>
  );
}

export default App;
