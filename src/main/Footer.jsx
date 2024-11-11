'use client'
import React from 'react'
import { Link } from 'react-router-dom'

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
            <li><Link className=' hover:text-blue-400' to="">Science Fiction</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Thriller</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Stories</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Religious</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Study</Link></li>
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
    <div className='bg-neutral-200'>
        <div className='p-2.5 mx-auto my-0 w-fit text-sm bg-neutral-200'>
        Copyright ©Coos-Library 2021-2028
        </div>
    </div>
    </>
  )
}

export default Footer