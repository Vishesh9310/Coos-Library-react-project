"use client"
import React from 'react'
import './Login.css'


function Login() {
  return (
    <>
    <div id='box_l'>
        <div className='flex justify-center item-center mx-1 my-0.5 w-3/4 px-3 h-full min-h-fit'>
            <img className="h-full rounded-2xl" width="90%" src="src/assets/200.webp" alt="gif" />
        </div>
        <div className="w-1/4 h-fit border-2 border-pink-600 p-2.5 rounded-xl hover:bg-gradient-to-br from-pink-600 to-blue-500 mx-5px my-2px">
            <form className="p-5" action="">
                <div>
                  <p className="">Log In</p>
                </div>
                <br />
                <div className="text-sm " class="f_items">
                  <label htmlFor="email">Email:</label>
                  <input className="text-black" class="input_v" type="email" id='email' name='email'/>
                </div>
                <br />
                <div className="text-sm" class="f_items">
                  <label htmlFor="password">Password:</label>
                  <input className="text-black" class="input_v" type="password" id='password' name='password' />
                </div>
                <br />
                <div id='bottom_login'>
                  <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label className=" text-xs ps-1" htmlFor="show_pwd">Show Password</label>
                  </div>
                  <div>
                    <a className=" text-xs" href="#">Forgot Password?</a>
                  </div>
                </div>
                <br />
                <input className="rounded-md bg-slate-600 w-full p-1 hover:bg-slate-500 hover:text-white  "type="submit" id='submit' name='Submit' />

                <p className="text-xs ">or continued with</p>

                <div className="min-h-7 max-h-7">
                <a class='an' className="mr-5 p-0.5 text-center rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-pink-500 hover:text-white" href="">Go</a>
                <a class='an' className="p-0.5 text-center rounded-2xl min-w-7 hover:min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-500 hover:text-white" href="">Fa</a>
                </div>
                <p className=" text-xs">Don't have an account? <a class="links_color" href="#">Sign up</a></p>
                
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Login