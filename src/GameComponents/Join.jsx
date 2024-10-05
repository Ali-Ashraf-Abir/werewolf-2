import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context'

export default function () {


       const {user}=useContext(AuthContext)

       const handleJoin=(event)=>{
        event.preventDefault()
        const lobbyName=event.target.lobbyNum.value
        const playerData={
            name:user?.displayName,
            ready: 'no',
            round: 'lobby',
            isAttacked: 'no',
            isProtected: 'no',
            werewolfVote: 0,
            vote: 0,
            votted: 'no',
        }

        fetch(`http://localhost:5000/join/${lobbyName?lobbyName:''}`, {
            method: "POST",
            headers: {
              'content-type': 'Application/JSON'
            },
            body: JSON.stringify(playerData)
          })
            .then(res => res.json())
            .then(data => console.log(data))

       }

        


  return (
    <div>

        <form onSubmit={handleJoin} className='flex-col justify-center items-center'>
            <input required className='bg-red-500' type='text' name='lobbyNum' placeholder='lobby name'></input>
            <button >Join</button>

        </form>



    </div>
  )
}
