import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Context'


export default function Play() {

    const {userName,setUserName,setRoomName}=useContext(AuthContext)
    const handleLobbyCreate=()=>{

        const lobbyName={userName}
        fetch(`https://project-warewolf-aliashrafabirs-projects.vercel.app/lobby/${userName}`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(lobbyName),

        })
        .then(res=>res.json())
        .then(data=>{

   
        })
        console.log('hit')
        localStorage.removeItem('roomName')

    }

    const handleLogout=()=>{


      setUserName(null)
      setRoomName(null)
      localStorage.removeItem('userInfo')
      localStorage.removeItem('roomName')
      


    }

  return (
      <div className="">
        <div className="flex justify-end w-[90vw] items-center gap-4 mt-2">
            <p>
              {userName?userName:''}
            </p>
          {userName?  <button onClick={handleLogout} className='px-4 py-2 bg-red-500 text-bold text-[2vh] rounded-lg'>Logout</button>:''}
        </div>
        <div className="w-[95vw] h-[80vh] flex flex-col justify-center items-center text-[3vh] font-sans font-semibold">

<Link  to='../login' className='text'>Login</Link><br/>
<Link onClick={handleLobbyCreate} to='lobby' className='text'>Create Room</Link><br/>
<Link to='join' className='text'>Join Room</Link><br/>
<Link to='../' className='text'>Back</Link><br/>



</div>
      </div>
  )
}
