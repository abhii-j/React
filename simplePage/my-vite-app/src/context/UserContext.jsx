import React, { Children, createContext } from 'react'

export const UserData=createContext();

function UserContext({children}) {
     const username="Abhishek"
     return (
         <UserData.Provider value={username}>
               {children}
         </UserData.Provider>
     )
}

export default UserContext
