import React from 'react'

function Card(props) {
     console.log(props.name);
     
     return (
          <div className='main'>
               <div className="img">
               <img src={props.photu} alt="" /></div>
               <h1>{props.name}</h1>
               <div className="city">
                    <h3>{props.city} | {props.age}</h3>
                    {/* <h3></h3> */}
               </div>
               <button>{props.isFollow ? "Friend" : "Add Friend"}</button>
          </div>
     )
}

export default Card
