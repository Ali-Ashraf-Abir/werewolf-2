import { getAuth, onAuthStateChanged } from 'firebase/auth/cordova'
import React, { createContext, useEffect, useState } from 'react'
import app from './Firebase.ini'

export const AuthContext=createContext(null)


export default function Context({children}) {

  const [userName,setUserName]=useState('')  
  const [roomName,setRoomName]=useState(null)
  const [action,setAction]=useState(null)
  const[user,setUser]=useState(null)

  // monitoring the user for any changes 

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        setUser(user)
        console.log(user)
      } else {
        // User is signed out
        // ...
      }
    });

   },[])

  const auth=getAuth(app)  
  const authInfo={
    userName,setUserName,
    setRoomName,roomName,
    action,setAction,
    auth,
    user,
    setUser

  }  

 



  return (
   <AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>
  )
}
