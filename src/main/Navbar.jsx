'use client'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div id='outer_div'>
        <img id='logo' height="40px" width="40px" src="src/assets/download.png" alt="COOS-Library" />
        
        <div id='links'>
        <a class='anchor' href="#">Home</a>
        <a class='anchor' href="#">Free Books</a>
        <a class='anchor' href="#">Categories</a>
        <a class='anchor' href="#">Sign up/Log In</a>
        <a class='anchor' href="#">Create an Account</a>
        <a class='anchor' href="#">Help</a>
        </div>
        {/*<ul>
            <li><img height="40px" width="40px" src="src/assets/download.png" alt="COOS-Library" /></li>
            <li>Home</li>
            <li>Free Books</li>
            <li>Categories</li>
            <li>Sign In / Log In</li>
            <li>Create an Account</li>
            <li>Help</li>
          </ul>*/}
    </div>
    </>
  )
}

export default Navbar