import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './GameComponents/Home';
import Context from './GameComponents/Context';
import Login from './GameComponents/Login';
import Play from './GameComponents/Play';
import Lobby from './GameComponents/Lobby';
import Join from './GameComponents/Join';
// import Login from './components/Pages/Login';
// import Play from './components/Pages/Play';
// import Lobby from './components/Pages/Lobby';
// import Context from './components/ContextApi/Context';
// import Join from './components/Pages/Join';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'  >
      <Route index element={<Home />}/>
      <Route path='login' element={<Login />}/>
      <Route path='play' >
        <Route index element={<Play></Play>}></Route>
      <Route path='lobby' element={<Lobby />}/>
      <Route path='join' element={<Join />}/>
      </Route>
    
      
      <Route path="*" element={<Error />} />
    </Route>
    
  ))

  return (
    <>
  <Context>  <RouterProvider router={router}/></Context>
    </>
  )
}

export default App