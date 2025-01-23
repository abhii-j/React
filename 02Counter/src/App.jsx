import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter]=useState(10)

  const addValue = () =>{
    if(counter < 20){
      counter=counter+1;
      setCounter(counter);
    }
    else{
      alert("Sorry! You cannot add a value greter than 20.")
    }
    
  }

  const removeValue =() =>{
    if(counter > 0){
      counter=counter-1;
      setCounter(counter);
    }
    else{
      alert("Sorry! You cannot remove a value less than 0.")
    }
    
  }
  

  return (
    <>
      <h1>Simple Counter</h1>

      <h2>Counter is : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
