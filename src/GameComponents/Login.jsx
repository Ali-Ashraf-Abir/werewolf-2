import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context'



export default function Login() {

    const navigate=useNavigate()

    const {setUserName,userName}=useContext(AuthContext)

    //basic login handler

    const handleRegPlayer=(event)=>{


        event.preventDefault()
        const form=event.target
        const playerName=form.name.value

        const avatar= form.avatar.value

        const playerData={playerName,avatar}

        fetch('https://project-warewolf-aliashrafabirs-projects.vercel.app/players',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(playerData),

        })
        .then(res=>res.json())
        .then(data=>{

   
        })
            
        setUserName(playerName)
        localStorage.setItem("userInfo",JSON.stringify(playerData))
        navigate("/play")


    }



    console.log(userName)
  return (
    <div className=" ">

    <form onSubmit={handleRegPlayer} className='h-screen w-screen flex-cols justify-center items-center gap-5 lg:flex'>
    <div className="flex-cols lg:translate-x-0 translate-x-[24vw] justify-center items-center gap-5 lg:flex">
        <input className='border-black bg-red-500 px-[5vw] py-[4vh] text-[4vh]' name="name" type="text" />
        <br></br>


        <input className='border-black bg-red-500 px-[5vw] py-[4vh] text-[4vh]' name="avatar" type="text" />

        <br></br>
        </div>

        <div className="">
            <button type="submit" className='bg-green-500 text-[4vh] py-[2vh] px-[3vw] rounded-lg' >Play</button>
        </div>
    </form>




    </div>)
}
