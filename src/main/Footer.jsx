'use client'
import React from 'react'
import './Footer.css'
import Copyright from './copyright'

function Footer() {
  return (
    <>

    <div id='footer-box' className='bg-neutral-200'>
        <div class='footer_cols' id='first_col'>
            <ul class='cols'>
            <li>Coos Library</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente aspernatur quis possimus,</li>
            <li>
                <div>Connect with us at</div>
                <div className="min-h-7 max-h-7"  id='images'>
                    <a className="text-center  rounded-2xl min-h-7 max-h-7 min-w-7 max-w-7 hover:bg-pink-500 hover:text-white" href="#">In</a>
                    <a className="text-center  rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-sky-500 hover:text-white" href="#">Tw</a>
                    <a className="text-center  rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-600 hover:text-white" href="#">Fa</a>
                    <a className="text-center  rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-800 hover:text-white" href="#">LI</a>
                </div>
            </li>
        </ul>
        </div>
        <div class='footer_cols'>
            <ul class='cols'>
            <li>Categories</li>
            <li><a className=' hover:text-blue-400' href="">Science Fiction</a></li>
            <li><a className=' hover:text-blue-400' href="">Thriller</a></li>
            <li><a className=' hover:text-blue-400' href="">Stories</a></li>
            <li><a className=' hover:text-blue-400' href="">Religious</a></li>
            <li><a className=' hover:text-blue-400' href="">Study</a></li>
        </ul>
        </div>
        <div class='footer_cols'>
        <ul class='cols'>
            <li>Support</li>
            <li><a className=' hover:text-blue-400' href="">Contact Us</a></li>
            <li><a className=' hover:text-blue-400' href="">FAQ</a></li>
            <li><a className=' hover:text-blue-400' href="">Help</a></li>
        </ul>
        </div>
        <div class='footer_cols'>
        <ul class='cols'>
            <li>Policies</li>
            <li><a className=' hover:text-blue-400' href="">Terms of Use</a></li>
            <li><a className=' hover:text-blue-400' href="">Privacy Policy</a></li>
            <li><a className=' hover:text-blue-400' href="">Refund Policy</a></li>
        </ul>
        </div>
    </div>
    <Copyright/>
    </>
  )
}

export default Footer