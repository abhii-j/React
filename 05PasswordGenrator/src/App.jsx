import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

// function App() {
//   const [lenght, setLenght] = useState(8)

//   const [numAllows,setnumAllows] =useState(false);
//   const [charAllows,setCharAllows] =useState(false);

//   const [password,setpassword] =useState("");

//   const passwordGenrator=useCallback(()=>{
//     let pass="";
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if(numAllows) str+="0123456789";
//     if(charAllows) str+="~!?{}[]()<8&^%$##@>/";

//     for (let i = 1; i <= lenght; i++) {
//       let char= floor(Math.random() *str+lenght+1)
//       pass=str.charAt(char);
//     }
//     setpassword(pass)

//   }
//   ,[lenght,numAllows,charAllows,setpassword])  //dependensy array

//   useEffect(() => {
//     passwordGenrator()
//   }, [lenght, numAllows, charAllows, passwordGenrator])

function App() {
  const [lenght, setLenght] = useState(8)
  const [numAllows, setNumAllows] = useState(false)
  const [charAllows, setCharAllows] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef=useRef(null) //this is refrence hook. its use to take refrence of any kontipn ostu

  const copyPasswordToClipboard=useCallback(()=>{
      passwordRef.current.select();
      // passwordRef.current.setSelectRange(0,90)
      window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenrator = useCallback(() => {  //useCallback use for optimize overithing   . also mamrize
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllows) str += "0123456789"
    if (charAllows) str += "~!?{}[]()<8&^%$##@>/"

    for (let i = 0; i < lenght; i++) {  
      let char = Math.floor(Math.random() * str.length)  
      pass += str.charAt(char)  
    }
    setPassword(pass)
  }, [lenght, numAllows, charAllows]) //this is store in cash memory

  useEffect(() => { //its use to run . page load zalyavr pahilyndi he calll hot 
    passwordGenrator()
  }, [lenght, numAllows, charAllows, passwordGenrator])//kahi ched chhad zalitr purt run kar do 


  

  return (
    <div className='main'>
      <h1>Password Genrator</h1>
      <div className='second'>
          <input
           type="text"
           value={password} 
           placeholder='password'
           readOnly
           ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          >copy</button>
      </div>
      <div className='third'>
        <div className='thirdInnr'>
          <input 
          type="range" 
          min={6}
          max={30}
          value={lenght}
          onChange={(e)=>setLenght(e.target.value)}
         />
         <label htmlFor="">Length: {lenght}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={numAllows}
          onChange={() => {
            setNumAllows((prev) => !prev);
        }}
          id='num'
           />
           <label htmlFor="num">Numbers</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={charAllows}
          onChange={() => {
            setCharAllows((prev) => !prev);
        }}
          
          id='chr'
           />
           <label htmlFor="chr">Charactor</label>
        </div>
      </div>
    </div>
  )
}

export default App
