'use client'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='bg-neutral-100 py-1 px-2 lg:flex lg:justify-between border-b-2 shadow-lg shadow-black-300/30'>
      
        <div className="h-12 w-12 self-center flex justify-between">
          <img id='logo' height="40px" width="40px" src="src/assets/logo.webp" alt="COOS-Library" />

          <div className='ml-4 my-1 py-0 px-2.5 mr-7 bg-neutral-300 rounded-3xl flex justify-around items-center '>
            <input id='search_w' className='text-black w-80 mr-1 max-h-max' type="text" placeholder='Search here...' autofocus='' />
            <img id='search_l' className="h-7 w-7 ml-2.5 bg-neutral-300 bg p-1" src="src/assets/serach2.jpg" alt="Search" />
          </div>
        </div>
        <div className='mx-5 my-2 flex justify-between'>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-blue-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-blue-500 to-blue-300 border-blue-500' to="/">Home</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-green-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-green-500 to-green-300 border-green-500' to="/free_book">Free Books</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-pink-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-pink-500 to-pink-300 border-pink-500' to="/categories">Categories</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-yellow-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-yellow-500 to-yellow-300 border-yellow-500' to="/create_acc">Create an Account</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-purple-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-purple-500 to-purple-300 border-purple-500 ' to="/help">Help</Link>
        </div>
        
    </div>
    </>
  )
}

export default Navbar

/*
import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation
*/