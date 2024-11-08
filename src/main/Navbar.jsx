'use client'
import React from 'react'

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
        <a className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-blue-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-blue-500 to-blue-300 border-blue-500' href="#">Home</a>
        <a className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-green-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-green-500 to-green-300 border-green-500' href="#">Free Books</a>
        <a className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-pink-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-pink-500 to-pink-300 border-pink-500' href="#">Categories</a>
        <a className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-yellow-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-yellow-500 to-yellow-300 border-yellow-500' href="#">Sign up/Log In</a>
        <a className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-purple-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-purple-500 to-purple-300 border-purple-500' href="#">Create an Account</a>
        <a className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-orange-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-orange-500 to-orange-300 border-orange-500 ' href="#">Help</a>
        </div>
        
    </div>
    </>
  )
}

export default Navbar


/*
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
        <Link clLInkssName='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-green-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-green-500 to-green-300 border-green-500' href="#">Free Books</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-pink-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-pink-500 to-pink-300 border-pink-500' href="#">Categories</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-yellow-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-yellow-500 to-yellow-300 border-yellow-500' href="#">Sign up/Log In</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-purple-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-purple-500 to-purple-300 border-purple-500' href="#">Create an Account</Link>
        <Link className='m-1 border-2 rounded-3xl px-3 py-1 shadow-lg shadow-orange-500/45 flex items-center hover:rounded-3xl hover:bg-gradient-to-r from-orange-500 to-orange-300 border-orange-500 ' href="#">Help</Link>
        </div>
    </div>
    </>
*/