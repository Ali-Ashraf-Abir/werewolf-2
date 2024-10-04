import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context';
export default function Lobby({ expiryTimestamp }) {



    // for keeping the entire player data
    const [playerData, setPlayerData] = useState([])
    const [player, setPlayer] = useState()
    // continuous fetch of lobby data 
    // the timer fetch every second

    const [temp, setTemp] = useState(0)
    const { userName, roomName, action, setAction } = useContext(AuthContext)
    useEffect(() => {
        setInterval(() => {
            setTemp((prevTemp) => prevTemp + 1)
        }, 1000)
    }, [])

    useEffect(() => {

        fetch(`http://localhost:5000/lobby/${roomName ? roomName : userName}`)
            .then(res => res.json())
            .then(data => setPlayerData(data))
        setAction(null)
        //to scroll with message
        // if (playerData[0]?.start === 'yes') {
        //     setStart(true)
        // }

        // if (!playerRole) {

        //     setPlayerRole(playerData?.find(player => userName == player?.playerName)?.role)
        // }
        // if (!player) {
        //     setPlayer(playerData?.find(player => userName == player?.playerName))
        // }

    }, [temp])


    // handle chat all for the lobby
    const handleChat = (event) => {
        event.preventDefault()
        const message = document.getElementById('chat').value
        const user = userName



        fetch(`http://localhost:5000/chat/${roomName ? roomName : userName}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ message, user }),

        })
            .then(res => res.json())
            .then(data => {


            })
        }


        return (
            <>


                <div className="">
                    <div className="grid grid-col-6">
                        {playerData?.map(player => player.playerName)}
                    </div>

                    <div id='messageBox' className="h-[32vh] w-[100wh] border-2 border-red-500 overflow-y-scroll m-[2vh] text-[2vh] lg:text-[2.5vh] pl-2">
                        {playerData[0]?.Chats?.map(chat => <p id={`message`} className=''><span className='text-bold text-red-400 '>{chat.body.user}:</span> {chat.body.message}</p>)}
                        {playerData?.map(player => player.message ? <p>{player.message}</p> : '')}

                        <div id='end' className='h-[5vh]'>

                        </div>
                    </div>
                    <div className="flex">
                        <form onSubmit={handleChat}>
                            <div className="flex around items-center mt-[1vh] m-[2vh]">
                                <input id='chat' className='w-[80vw] lg:w-[90vw] h-[8vh] border-red-500 border-2 rounded-lg p-2' type="text" />
                                <button className='px-4 py-2 bg-green-500 text-bold rounded-lg ml-[1vw] '>send</button>
                            </div>
                        </form>
                    </div>


                </div>

            </>
        )

    }