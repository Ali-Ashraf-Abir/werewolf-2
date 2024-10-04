import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context'

export default function () {


        const {userName,setRoomName,setAction}=useContext(AuthContext)
        const navigate= useNavigate()
        //handling the joining lobby form
        const handleLobbyForm=(event)=>{

            event.preventDefault()

            const form=event.target
            const lobbyNum=form.lobbyNum.value

            //accessing the join lobby api to send the player data back to the lobby collection
            
            fetch(`http://localhost:5000/lobbyJoin/${userName}`,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify({lobbyNum}),
            })
            .then(res=>res.json())
            .then(data=>{
                setAction(data)
            })

            setRoomName(lobbyNum)
            localStorage.setItem('roomName',lobbyNum)
            console.log(lobbyNum)
            console.log(userName)
            navigate("../lobby")
         
        }

        


  return (
    <div>

        <form onSubmit={handleLobbyForm} className='flex-col justify-center items-center'>
            <input className='bg-red-500' type='text' name='lobbyNum' placeholder='lobby name'></input>
            <button >Join</button>

        </form>



    </div>
  )
}
