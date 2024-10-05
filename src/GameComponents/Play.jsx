import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Context'
import { updateProfile } from 'firebase/auth/cordova'


export default function Play() {

  const { userName, setUserName, setRoomName, user, auth } = useContext(AuthContext)


  const handleUserName = (event) => {
    event.preventDefault()

    const name = event.target.name.value
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...\
      console.log('updated')
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }


  const handleCreateLobby = () => {


    const playerData = {

      lobbyPlayers: [{
        ready: 'no',
        round: 'lobby',
        isAttacked: 'no',
        isProtected: 'no',
        werewolfVote: 0,
        vote: 0,
        votted: 'no',
        name: user?.displayName,
      }],
        email: user?.email,
        name: user?.displayName

    }

    fetch('http://localhost:5000/lobby', {
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
    <div className="">
      <div className="flex justify-end w-[90vw] items-center gap-4 mt-2">
        <p>
          {userName ? userName : ''}
        </p>
        {userName ? <button onClick={handleLogout} className='px-4 py-2 bg-red-500 text-bold text-[2vh] rounded-lg'>Logout</button> : ''}
      </div>
      <div className="w-[95vw] h-[80vh] flex flex-col justify-center items-center text-[3vh] font-sans font-semibold">

        {user ? '' : <Link to='../login' className='text'>Login</Link>}<br />

        {user ? <div>{/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Set Username</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Please Enter A Username</h3>
              <form onSubmit={handleUserName} className=''>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <input name='name' type="text" placeholder="Type usename" className="input input-bordered w-full max-w-xs" />
                  <button className='btn btn-primary'>submit</button>
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog></div> : ''}<br />


        <Link onClick={handleCreateLobby} to='lobby' className='text'>Create Room</Link><br />



        <Link to='join' className='text'>Join Room</Link><br />
        <Link to='../' className='text'>Back</Link><br />



      </div>
    </div>
  )
}
