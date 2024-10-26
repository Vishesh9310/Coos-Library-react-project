'use client'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='bg-slate-600 py-20px px-40px text-blue-200 hover:text-blue-50 flex justify-between'>
        <img id='logo' height="40px" width="40px" src="src/assets/logo.webp" alt="COOS-Library" />

        <div className='mx-5 flex justify-between'>
        <a className='px-3 py-3 hover:rounded-3xl hover:bg-gradient-to-r from-blue-500 to-blue-300' href="#">Home</a>
        <a className='px-3 py-3 hover:rounded-3xl hover:bg-gradient-to-r from-green-500 to-green-300' href="#">Free Books</a>
        <a className='px-3 py-3 hover:rounded-3xl hover:bg-gradient-to-r from-pink-500 to-pink-300' href="#">Categories</a>
        <a className='px-3 py-3 hover:rounded-3xl hover:bg-gradient-to-r from-yellow-500 to-yellow-300' href="#">Sign up/Log In</a>
        <a className='px-3 py-3 hover:rounded-3xl hover:bg-gradient-to-r from-purple-500 to-purple-300' href="#">Create an Account</a>
        <a className='px-3 py-3 hover:rounded-3xl hover:bg-gradient-to-r from-orange-500 to-orange-300' href="#">Help</a>
        </div>
    </div>
    </>
  )
}

export default Navbar