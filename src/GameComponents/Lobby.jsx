import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context';
import { io } from 'socket.io-client';


const socket = io.connect("http://localhost:5000/")

export default function Lobby({ expiryTimestamp }) {


            
    

    // handle chat all for the lobby
    const handleChat=(event)=>{
        event.preventDefault()
        const message=event.target.message.value 

    }


        return (
            <>

                <div className="">
                    <form onSubmit={handleChat}>
                        <input type="text" name="message" id="" />
                        <button className='btn btn-primary'></button>
                    </form>
                </div>

            </>
        )

    }