'use client'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='bg-neutral-100 py-1 px-2 text-blue-200 hover:text-blue-50 flex justify-between'>
      
        <div className="h-12 w-12 self-center flex justify-between">
          <img id='logo' height="40px" width="40px" src="src/assets/logo.webp" alt="COOS-Library" />

          <div className='ml-4 my-1 py-0 px-2.5 mr-7 bg-neutral-300 rounded-3xl flex justify-around items-center '>
            <input id='search_w' className='text-black w-80 mr-1 max-h-max' type="text" placeholder='Search here...' autofocus='' />
            <img id='search_l' className="h-7 w-7 ml-2.5 bg-neutral-300 bg p-1" src="src/assets/serach2.jpg" alt="Search" />
          </div>
        </div>
        <div className='mx-5 my-2 flex justify-between'>
        <a className='m-1 border-2 rounded-3xl border-blue-500 px-3 py-1 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-blue-500 to-blue-300' href="#">Home</a>
        <a className='m-1 border-2 rounded-3xl border-green-500 px-3 py-1 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-green-500 to-green-300' href="#">Free Books</a>
        <a className='m-1 border-2 rounded-3xl border-pink-500 px-3 py-1 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-pink-500 to-pink-300' href="#">Categories</a>
        <a className='m-1 border-2 rounded-3xl border-yellow-500 px-3 py-1 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-yellow-500 to-yellow-300' href="#">Sign up/Log In</a>
        <a className='m-1 border-2 rounded-3xl border-purple-500 px-3 py-1 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-purple-500 to-purple-300' href="#">Create an Account</a>
        <a className='m-1 border-2 rounded-3xl border-orange-500 px-3 py-1 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-orange-500 to-orange-300' href="#">Help</a>
        </div>
    </div>
    </>
  )
}

export default Navbar