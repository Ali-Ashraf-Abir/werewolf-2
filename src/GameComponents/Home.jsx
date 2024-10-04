import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

   return(
  <div className="w-screen h-screen flex flex-col justify-center items-center font-sans text-[3vh] font-semibold">
            <Link to='play' className='text'>play</Link><br/>
            <Link to='' className='text'>Options</Link><br/>
            <Link to='' className='text'>Quit</Link><br/>
  </div>
   )
  
}
