"use client"
import { useState } from 'react'
import Home_screen from './screen/Home_screen'
import Login_screen from './screen/Login_screen'
import Signup_screen from './screen/Signup_screen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home_screen/>
    <Login_screen/>
    <Signup_screen/>
    </>
  )
}

export default App