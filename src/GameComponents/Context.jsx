import React, { createContext, useEffect, useState } from 'react'

export const AuthContext=createContext(null)


export default function Context({children}) {

  const [userName,setUserName]=useState('')  
  const [roomName,setRoomName]=useState(null)
  const [action,setAction]=useState(null)

 //fetching user information from localstorage

 useEffect(()=>{

  if(!userName){
    const userInfo=JSON.parse(localStorage.getItem("userInfo"))
    if(userInfo){
      setUserName(userInfo.playerName)
    }
  }

  if(!roomName){
    const roomInfo=localStorage.getItem("roomName")
    if(roomInfo){
      setRoomName(roomInfo)
    }
  }

 },[userName])

//fetching all player infor from player collection

  useEffect(()=>{

    fetch(`https://project-warewolf-aliashrafabirs-projects.vercel.app/players/${userName}`)
    .then (res=>res.json())
    .then(data=>console.log(data))



  },[userName])
    
  const authInfo={
    userName,setUserName,
    setRoomName,roomName,
    action,setAction

  }  

 



  return (
   <AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>
  )
}
