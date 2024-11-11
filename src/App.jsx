"use client"
import { useState } from 'react'

import Home_screen from './Navigation/Home_screen'
import Free_Book  from './Navigation/Free_Book'
import Categories from './Navigation/Categories'
import Create_Account from './Navigation/Create_Account'
import Help from './Navigation/Help'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    { path: "/", element: <Home_screen/>},
    { path: "/free_book", element: <Free_Book/>},
    { path: "/categories", element: <Categories/>},
    { path: "/create_acc", element: <Create_Account/>},
    { path: "/help", element: <Help/>},
  ]
);

function App() {

  return (
  <>
  <RouterProvider router = {router}/>
  </>
  )
  
}

export default App  


/* 
old data:

"use client"
import { useState } from 'react'
import Home_screen from './pages/Home_screen'
import Login_screen from './pages/Login_screen'
import Signup_screen from './pages/Signup_screen'

function App() {

  const [user, setuser] = useState(true);

  function validation(props){
      if(props==true){
        //login screen
        return <Login_screen/>;
      }else if(props==false){
        //sign up screen
        return <Signup_screen/>;
        //if user sign in set user value as true.
      }else{
        return <Home_screen/>;
      }
  }

  function tooglebool(){
    setuser(!user);
  }

  function gotoHome(){
    setuser();
  }

  return (
  <>
  <button onClick={tooglebool} className='bg-orange-400 w-fit rounded-full p-2 self-center'>click to toggle</button>
  <button onClick={gotoHome} className='bg-purple-400 w-fit rounded-full p-2 self-center'>click to home</button>
  {validation(user)}
  </>
  )
  
}

export default App  
*/