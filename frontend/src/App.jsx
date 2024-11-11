import { useState } from 'react'
import React from 'react'
import {Route , Routes } from "react-router-dom"
import Welcome from './components/Welcome'
import Login from './components/login'
import Signuo from './components/Signuo'
import Error from './components/Erorr'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route exact path='' element={<Welcome/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup'  element={<Signuo/>}  />
        <Route path='*'  element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
